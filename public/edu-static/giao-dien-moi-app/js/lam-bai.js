/**
 * lam-bai.js — Màn làm bài, câu chọn/gõ đáp số, lượt trả lời duy nhất, tự đánh giá, lưu điểm và kết quả.
 * Dùng: core.js, lam-bai-chuan-bi.js, loi-giai.js, loi-giai-goi-y.js, yeu-thich.js.
 * API gọi: submit_answer, save_test_score.
 * Quy tắc nghiệp vụ: docs/chuan-cau-nhap-dap-so.md; đề kỳ một lượt, mọi kiểu bài chỉ một lượt mỗi câu.
 */
"use strict";

// Yêu cầu GIAO DIỆN 04/10/2026: hằng số tách riêng để điều chỉnh sau khi có dữ liệu phụ huynh.
const FAST_ANSWER_THRESHOLD_MS = 3000;
const FAST_ANSWER_MIN_WORDS = 15;

/** Chỉ câu lời văn đủ dài mới cần nhắc đọc lại khi em chọn quá nhanh. */
function shouldWarnFastAnswer(question, elapsedMs) {
  const words = String(question?.question || "").trim().split(/\s+/u).filter(Boolean);
  return words.length >= FAST_ANSWER_MIN_WORDS && elapsedMs < FAST_ANSWER_THRESHOLD_MS;
}

/** Dựng câu hiện tại, gợi ý, tự đánh giá, lượt trả lời duy nhất và nút đọc to từ state bài làm. */
function renderQuiz() {
  if (state.page !== "quiz") stopSpeech();
  setNav("quiz");
  const quiz = state.quiz,
    q = quiz.questions[quiz.index],
    total = quiz.questions.length;
  const options = questionOptions(q);
  const typed = isTypedQuestion(q);
  const result = quiz.results[quiz.index];
  const badgeNotices = quiz.badgeNotices?.[quiz.index] || [];
  const badgeNoticeHtml = badgeNotices.length
    ? `<div class="badge-unlock" role="status"><span>${icon("star")}</span><div><strong>${uiText("Huy hiệu nỗ lực mới!")}</strong>${badgeNotices.map((badge) => `<p>${escapeHtml(badge.message || badge.name || "")}</p>`).join("")}</div></div>`
    : "";
  const correctOption =
    result && !typed
      ? options.findIndex(
          (option) =>
            String(option).trim() === String(result.correct_answer).trim(),
        )
      : -1;
  const allChecked =
    quiz.results.length === total && quiz.results.every(Boolean);
  // Kiểm tra giáo viên chỉ báo đã lưu, chưa mở đáp án trước giờ đóng.
  const feedback = result?.pending
    ? '<div id="answer-feedback" class="answer-feedback pending" role="status">Đã lưu câu trả lời. Đáp án mở sau giờ đóng.</div>'
    : result && isTrueFalse(q)
      ? trueFalseResultHtml(result, q)
      : result && isEssay(q) ? "" : result
    ? renderDeepFeedback(result, q, quiz, quiz.index)
    : "";
  const openedHints = quiz.hints?.[quiz.index] || [];
  const hintUnavailable = quiz.hintUnavailable?.[quiz.index] === true;
  const hintTotal = Number(
      quiz.hintTotals?.[quiz.index] ?? openedHints[0]?.total_hints ?? 0,
    ),
    hasHintDiagram = quiz.hintHasDiagrams?.[quiz.index] === true,
    hintDiagram = quiz.hintDiagrams?.[quiz.index] || "";
  const textHintHtml = (hint, index) => {
    const level = Number(hint.level) || index + 1,
      displayLevel = level + (hasHintDiagram && level > 1 ? 1 : 0),
      displayTotal = Number(hint.total_hints) + (hasHintDiagram ? 1 : 0);
    const hintText = localizedSpeechText(
        hint.hint,
        hint.hint_vi || hint.hint,
        hint.hint_en || hint.hint,
      ),
      hintHtml =
        state.lang === "bi" && hint.hint_en
          ? window.IMATH_I18N.bilingualHtml(
              hint.hint_en,
              hint.hint_vi || hint.hint,
            )
          : richText(hint.hint);
    return `<div class="hint-item"><div class="speech-heading"><strong>${uiText("Gợi ý")} ${displayLevel}/${displayTotal}</strong>${speechButton(hintText)}</div><div>${hintHtml}</div></div>`;
  };
  const nextTextHintButton = `<button class="outline" data-action="get-hint" ${quiz.hintBusy ? "disabled" : ""}>💡 ${uiText("Gợi ý")}</button>`;
  const exhaustedHintButton = `<button class="outline" disabled>💡 ${uiText("Đã hết gợi ý")}</button>`;
  const unavailableHintMessage = hintUnavailable
    ? `<p class="hint-unavailable">${uiText("Câu này chưa có gợi ý — em đọc lại đề thật chậm nhé")}</p>`
    : "";
  let hintContents = "";
  if (hasHintDiagram && openedHints.length) {
    hintContents = openedHints
      .map(
        (hint, index) =>
          `${textHintHtml(hint, index)}${index === 0 ? (hintDiagram ? `<div class="hint-item"><strong>${uiText("Gợi ý")} 2/${hintTotal + 1} · ${uiText("Sơ đồ đoạn thẳng")}</strong><div class="solution-diagram">${hintDiagram}</div></div>` : `<button class="outline" data-action="get-hint-diagram">📊 ${uiText("Xem sơ đồ")}</button>`) : ""}`,
      )
      .join("");
    if (hintDiagram)
      hintContents += openedHints.length < hintTotal
        ? nextTextHintButton
        : exhaustedHintButton;
  } else {
    const canOpenTextHint =
      quiz.hintTotals?.[quiz.index] === undefined ||
      openedHints.length < hintTotal;
    hintContents = `${canOpenTextHint ? nextTextHintButton : exhaustedHintButton}${openedHints.map(textHintHtml).join("")}${unavailableHintMessage}`;
  }
  const hintBlock =
    !result && quiz.teacherMode !== "exam" && shouldOfferHints(q) && (hintContents || quiz.hintError)
      ? `<div class="hint-box">${hintContents}${quiz.hintError ? `<p class="error">${escapeHtml(quiz.hintError)}</p>` : ""}</div>`
      : !result && openedHints.length
        ? `<div class="hint-box">${hintContents}</div>`
        : "";
  const difficultyBadge =
    String(q.muc_do || "").toUpperCase() === "HSG"
      ? `<span class="difficulty-badge challenge">${uiText("Học sinh giỏi")}</span>`
      : "";
  const confidenceEligible = !isEssay(q) && /^(VD|VDC|HSG)$/u.test(
    String(q.muc_do || "").toUpperCase(),
  );
  const confidence = quiz.confidences?.[quiz.index] || "";
  const confidenceControls =
    !result && confidenceEligible
      ? `<div class="confidence-picker"><span>${uiText("Em tự đánh giá:")}</span>${[
          ["chac", "Chắc chắn"],
          ["phan_van", "Phân vân"],
          ["doan", "Đoán"],
        ]
          .map(
            ([value, label]) =>
              `<button type="button" class="${confidence === value ? "active" : ""}" data-confidence="${value}" aria-pressed="${confidence === value ? "true" : "false"}">${uiText(label)}</button>`,
          )
          .join("")}</div>`
      : "";
  const fastAnswerNotice = quiz.fastAnswerWarnings?.[quiz.index]
    ? `<p class="fast-answer-notice" role="status">⏱️ ${uiText("Em đã đọc kỹ đề chưa? Đọc lại một lần nhé")}</p>`
    : "";
  const answerControls = isTrueFalse(q)
    ? (result ? "" : trueFalseHtml(q, quiz.choices[quiz.index]))
    : isEssay(q) ? essayHtml(q, quiz) : typed
    ? typedAnswerHtml(q, quiz.choices[quiz.index], !!result)
    : options
        .map(
          (option, index) =>
            `<button class="option ${quiz.choices[quiz.index] === index ? "selected" : ""} ${result && index === correctOption ? "is-correct" : ""} ${result && !result.pending && !result.correct && quiz.choices[quiz.index] === index ? "is-wrong" : ""}" data-choice="${index}" ${result ? "disabled" : ""}><span class="option-letter">${"ABCDEF"[index] || index + 1}</span><span>${escapeHtml(optionText(q, index) ?? option)}</span></button>`,
        )
        .join("");
  $("#content").innerHTML =
    `<section class="quiz-panel ${quiz.teacherAttempt ? "teacher-quiz" : ""} ${["visual_practice", "singapore"].includes(quiz.test.test_family) ? "visual-practice-quiz" : ""} ${Number(q.grade_level || state.grade) >= 6 ? "upper-grade-quiz" : ""}"><div class="quiz-top"><div class="quiz-context-heading">${window.IMATH_QUIZ_CONTEXT.html({test:quiz.test,question:q,lang:state.lang,category:state.categories?.find(category=>category.id===quiz.test.category_id)}, "p", sourceBadge(quiz.test.translated))}<strong>${state.lang === "vi" ? "Câu" : "Question"} ${quiz.index + 1}/${total}</strong>${examStyleBadge(q)}${difficultyBadge}</div><div class="quiz-top-actions">${favoriteControlsHtml(q, "quiz-favorite")}<button class="outline" data-action="leave-quiz">${uiText("Thoát")}</button></div></div><div class="progress"><span style="width:${((quiz.index + 1) / total) * 100}%"></span></div>${badgeNoticeHtml}<div class="jump">${quiz.questions.map((_, index) => `<button data-jump="${index}" class="${index === quiz.index ? "current" : ""} ${quiz.results[index] && !isEssay(quiz.questions[index]) ? (quiz.results[index].pending ? "jump-saved" : quiz.results[index].correct ? "jump-correct" : "jump-wrong") : ""}" aria-label="${state.lang === "vi" ? "Câu" : "Question"} ${index + 1}">${index + 1}</button>`).join("")}</div><div class="quiz-main"><div class="quiz-question"><div class="question-speech-row"><div class="question-text">${localizedHtml(q.question, q.question_vi, q.question_en)}</div>${speechButton(localizedSpeechText(q.question, q.question_vi || q.question, q.question_en || q.question), Number(q.grade_level || state.grade) <= 2)}</div>${sourceBadge(q.translated)}${mediaHtml(q)}</div><div class="quiz-answer">${hintBlock}<div class="options ${typed ? "typed-options" : ""}">${answerControls}</div>${fastAnswerNotice}${confidenceControls}${feedback}</div></div><p id="quiz-error" class="error" role="alert"></p><div class="quiz-nav"><button class="outline" data-action="previous" ${quiz.index === 0 ? "disabled" : ""}>${uiText("Câu trước")}</button><button class="primary" data-action="${result ? (allChecked ? "finish-quiz" : "continue-quiz") : "check-answer"}" id="quiz-primary">${uiText(result ? (allChecked ? "Xem kết quả" : "Câu tiếp theo") : "Kiểm tra")} ${icon("arrow_right")}</button></div></section>`;
  if (isEssay(q) && !result) $("#quiz-primary").hidden = true;
  if (isTrueFalse(q) && !result) {
    const selected = quiz.choices[quiz.index];
    $("#quiz-primary").disabled = !Array.isArray(selected) || selected.length !== 4 || selected.some((v) => typeof v !== "boolean");
  }
  window.IMATH_QUIZ_LAYOUT.mount($("#content .quiz-panel"));
  renderMath();
  applyUiLanguage();
  resumeQuestionTimer(quiz, quiz.index);
  termExamMount();
}
/** Nộp câu hiện tại; câu gõ sai định dạng không được tính lượt, mỗi câu một lượt do máy chủ giữ. */
async function checkCurrentAnswer() {
  if (state.quiz?.teacherAttempt) return teacherCheckAnswer();
  const quiz = state.quiz,
    index = quiz.index,
    q = quiz.questions[index],
    options = questionOptions(q);
  const typed = isTypedQuestion(q);
  if (quiz.results[index] || quiz.busy) return;
  saveCurrentFill();
  const choice = quiz.choices[index];
  const missingAnswer =
    choice === null ||
    choice === "" ||
    (Array.isArray(choice) &&
      choice.some((value) => value === null || value === undefined || value === ""));
  if (missingAnswer) {
    showError(
      "#quiz-error",
      new Error(
        typed
          ? "Em hãy nhập đáp số trước nhé."
          : "Em hãy chọn một phương án trước nhé.",
      ),
    );
    return;
  }
  const structured = typed || isTrueFalse(q);
  const selected = structured ? choice : String(options[choice]);
  const selectedOptionKey = structured ? "" : questionOptionKey(q, choice);
  const responseTimeMs = pauseQuestionTimer(quiz, index);
  const button = $("#quiz-primary");
  button.disabled = true;
  button.textContent = "Đang kiểm tra...";
  quiz.busy = true;
  try {
    const attemptId = (quiz.attemptIds[index] ||=
      `newui-${Date.now().toString(36)}-${index}-${Math.random().toString(36).slice(2, 12)}`);
    const answer = await api("submit_answer", {
      username: state.user.username,
      question_id: q.id,
      selected_answer: structured ? selected : selectedOptionKey,
      selected_option_key: selectedOptionKey,
      selected_position: structured ? "" : "ABCDEF"[choice] || "",
      answer_selected_time_ms: typed ? null : quiz.answerSelectedTimes?.[index] ?? responseTimeMs,
      response_time_ms: responseTimeMs,
      client_attempt_id: attemptId,
      attempt_number: 1,
      confidence: quiz.confidences?.[index] || null,
      hint_used: !!quiz.hints[index]?.length || !!quiz.hintDiagrams?.[index],
    });
    if (Array.isArray(answer.new_badges) && answer.new_badges.length)
      (quiz.badgeNotices ||= [])[index] = answer.new_badges;
    quiz.results[index] = {...answer, selected:answerDisplay(selected)};
    state.user = answer.user || state.user;
    quiz.busy = false;
    renderQuiz();
    $("#answer-feedback")?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  } catch (error) {
    quiz.busy = false;
    resumeQuestionTimer(quiz, index);
    showError("#quiz-error", error);
    button.disabled = false;
    button.innerHTML = `${uiText("Kiểm tra")} ${icon("arrow_right")}`;
  }
}
/** Chỉ lưu điểm đề sau khi mọi câu có kết quả; máy chủ tính điểm theo lượt đầu. */
async function submitQuiz() {
  if (state.quiz?.teacherAttempt) return teacherSubmitQuiz();
  const quiz = state.quiz;
  if (
    quiz.results.length !== quiz.questions.length ||
    !quiz.results.every(Boolean)
  ) {
    showError(
      "#quiz-error",
      new Error("Em hãy kiểm tra đủ các câu trước khi xem kết quả."),
    );
    return;
  }
  if (quiz.busy) return;
  quiz.busy = true;
  const button = $("#quiz-primary");
  button.disabled = true;
  button.textContent = "Đang lưu điểm...";
  try {
    if (!state.isGuest && quiz.questions.some((q) => !isEssay(q)) && (quiz.kind === "test" || quiz.kind === "exam"))
      state.score = await api("save_test_score", {
        username: state.user.username,
        test_key: quiz.test.id,
        client_attempt_ids: quiz.attemptIds.filter(Boolean),
      });
    else
      state.score = {
        score: quiz.results.reduce((sum, item) => sum + (item.essay ? 0 : Number(item.points ?? (item.correct ? 1 : 0))), 0),
        max_score: quiz.questions.filter((q) => !isEssay(q)).length,
      };
    if (state.score.user) state.user = state.score.user;
    catalogCache.delete(state.grade);
    state.catalogGrade = null;
    state.path = null;
    quiz.busy = false;
    renderResult();
  } catch (error) {
    quiz.busy = false;
    showError("#quiz-error", error);
    button.disabled = false;
    button.innerHTML = `Xem kết quả ${icon("arrow_right")}`;
  }
}
function renderResult() {
  stopSpeech();
  setNav("result");
  const quiz = state.quiz,
    score = state.score,
    percent = Math.round(
      (Number(score.score) / Math.max(1, Number(score.max_score))) * 100,
    ),
    resultBand = scoreBand(score.score, score.max_score);
  const wrongByTopic = new Map();
  if (quiz.kind === "exam")
    quiz.questions.forEach((q, index) => {
      const result = quiz.results[index];
      if (!result || isEssay(q) || result.correct || !q.topic_code) return;
      wrongByTopic.set(q.topic_code, (wrongByTopic.get(q.topic_code) || 0) + 1);
    });
  const topicLookup = (
    window.IMATH_GRADE_CATALOGS?.[state.grade]?.topics || []
  ).flatMap((group) =>
    group.items.map((item) => ({ ...item, groupId: group.id })),
  );
  const topicRows = [...wrongByTopic.entries()]
    .map(([code, wrong]) => {
      const topic = topicLookup.find((item) => item.code === code);
      const total = quiz.questions.filter((q) => q.topic_code === code).length;
      return topic
        ? `<div class="test-row"><span class="test-row-icon">${tileIcon(topic.icon)}</span><div class="test-row-copy"><strong class="source-content">${topicNameHtml(topic)}</strong><span>Sai ${wrong}/${total} câu</span></div><button class="outline" data-practice-topic="${escapeHtml(code)}">Luyện ngay →</button></div>`
        : "";
    })
    .filter(Boolean)
    .join("");
  const practiceBlock =
    quiz.kind === "exam"
      ? `<section class="band"><h2>Chủ đề cần rèn</h2>${topicRows || "<p>Em làm tốt tất cả chủ đề!</p>"}</section>`
      : "";
  const googleMark = `<svg viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.7H9v3.4h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z"/><path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2L12 13.6c-.8.6-1.9.9-3 .9-2.3 0-4.3-1.6-5-3.7H1v2.3A9 9 0 0 0 9 18z"/><path fill="#FBBC05" d="M4 10.8A5.4 5.4 0 0 1 4 7.2V4.9H1a9 9 0 0 0 0 8.2l3-2.3z"/><path fill="#EA4335" d="M9 3.5c1.3 0 2.5.5 3.4 1.3L15 2.2A8.7 8.7 0 0 0 1 4.9l3 2.3c.7-2.1 2.7-3.7 5-3.7z"/></svg>`;
  const guestInvite = state.isGuest
    ? `<section class="guest-invite"><h2>${uiText("Học tiếp và lưu kết quả")}</h2><p>${uiText("Đăng nhập bằng Google để lưu kết quả và mở Nâng cao nhẹ")}</p><div class="guest-invite-actions">${window.IMATH_GOOGLE_CONFIGURED ? `<a class="guest-google-button" href="google-login.php">${googleMark}<span>${uiText("Đăng nhập bằng Google")}</span></a>` : `<button class="primary" data-action="guest-login">${uiText("Đăng nhập")}</button>`}<button class="outline" data-action="guest-continue">${uiText("Làm tiếp đề khác")}</button></div></section>`
    : "";
  const resultSummary = `<p class="eyebrow">KẾT QUẢ BÀI LÀM</p>
    <h1 class="page-title"><span aria-hidden="true">${resultBand.icon}</span> ${escapeHtml(resultBand.label)}</h1>
    ${scoreBadgeHtml(score.score, score.max_score)}
    <div class="stat"><strong>${percent}%</strong><span>${escapeHtml(quiz.test.name)}</span></div>`;
  $("#content").innerHTML =
    `<section class="result-panel score-result ${resultBand.className}">${resultSummary}${guestInvite}<div class="result-actions" style="margin:18px 0"><button class="primary" data-action="retry">Làm lại</button><button class="outline" data-action="return">${quiz.kind === "entrance-practice" ? quiz.entranceTypeRun ? erText("Quay lại danh sách dạng", "Back to topics") : efText("Quay lại kết quả đề", "Back to paper results") : "Quay về"}</button>${entranceTypeContinuationHtml()}</div>${practiceBlock}${timoPracticeResultHtml(quiz)}${quiz.questions
      .map((q, index) => {
        const result = quiz.results[index];
        if (isTrueFalse(q)) return trueFalseResultHtml(result, q);
        if (isEssay(q)) return '<div class="result-row"><strong>' + uiText('Tự luận (tự chấm):')
          + ' ' + specialNumber(result.self_score) + '/' + specialNumber(result.tong_diem) + '</strong></div>';
        return `<div class="result-row"><div class="result-row-head"><strong>Câu ${index + 1}: <span class="${result?.correct ? "right" : "wrong"}">${result ? (result.correct ? "Đúng" : "Sai") : "Chưa trả lời"}</span></strong>${favoriteControlsHtml(q, "result-favorite")}</div>${result ? knowledgeContextHtml(q, result, quiz) : ""}<div class="speech-content-row result-question-row"><p class="result-question">${richText(q.question)}</p>${speechButton(localizedSpeechText(q.question, q.question_vi || q.question, q.question_en || q.question), Number(q.grade_level || state.grade) <= 2)}</div>${result && !result.correct ? `<p>Em chọn: ${escapeHtml(result.selected)} · Đáp án: ${escapeHtml(result.correct_answer)}</p><div class="result-explanation-row"><div class="result-explanation">${sharedSolutionHtml(result)}</div></div>` : ""}</div>`;
      })
      .join("")}</section>`;
  renderMath();
  applyUiLanguage();
}
