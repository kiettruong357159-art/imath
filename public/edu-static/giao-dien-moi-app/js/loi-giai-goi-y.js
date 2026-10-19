/**
 * loi-giai-goi-y.js — Phản hồi đúng/sai, gợi ý nhiều nấc, sơ đồ và khung Cú iMath khi em chưa hiểu.
 * Dùng: core.js, loi-giai.js, yeu-thich.js.
 * API gọi: get_hint, get_hint_diagram, get_easier_question, record_question_help.
 * Quy tắc nghiệp vụ: docs/chuan-loi-giai.md mục 10–11; không lộ đáp án trước khi nộp.
 */
"use strict";

/** Dựng phản hồi theo đúng/sai; sai đặt lý do trước, đúng ưu tiên bước giải và cần nhớ. */
function renderDeepFeedback(result, question, quiz, index) {
  if (!result.solutionLanguage) result.solutionLanguage = state.lang;
  if (!result.solutionOptionKey) {
    const selected = questionOptions(question).findIndex(option => String(option) === String(result.selected));
    if (selected >= 0) result.solutionOptionKey = questionOptionKey(question, selected);
  }
  if (result.solutionLanguage !== state.lang && !state.isGuest && !result.solutionLanguageError) {
    const lang = state.lang;
    if (!result.solutionLanguageBusy) {
      result.solutionLanguageBusy = true;
      refreshVisibleSolution(quiz,index,lang).catch(error => {
        result.solutionLanguageError = error.message;
        if (state.quiz === quiz && quiz.index === index) renderQuiz();
      }).finally(() => {
        result.solutionLanguageBusy = false;
        if (state.quiz === quiz && quiz.index === index && state.lang !== lang) renderQuiz();
      });
    }
    return `<div id="answer-feedback" class="answer-feedback" role="status">${uiText("Đang tải lời giải...")}</div>`;
  }
  const solution = sharedSolutionHtml(result, {
    externalHelp: true, questionId: question.id,
    help: quiz.helpPanels?.[index], helpHtml: helpPanelHtml(question, result, quiz),
  });
  return `<div id="answer-feedback" class="answer-feedback ${result.correct ? "correct" : "incorrect"} deep-feedback" role="status"><strong>${uiText(result.correct ? "Em làm đúng rồi!" : "Chưa đúng rồi, em xem lời giải nhé.")}</strong>${knowledgeContextHtml(question,result,quiz)}${favoriteControlsHtml(question,"feedback-favorite")}<div class="explanation-panel">${solution}</div></div>`;
}
function shouldOfferHints(question) {
  // Máy chủ mới là nơi biết câu có gợi ý biên soạn hay gợi ý dự phòng từ lời giải.
  // Vì vậy mọi mức độ đều được thử mở; HINT_NOT_AVAILABLE sẽ đổi nút thành lời nhắc rõ ràng.
  return Boolean(question);
}
/** Mở đúng một nấc gợi ý và giữ các nấc trước; sơ đồ được chen sau nấc chữ đầu tiên. */
async function openNextHint() {
  const quiz = state.quiz,
    index = quiz.index,
    question = quiz.questions[index];
  if (quiz.hintBusy || quiz.results[index]) return;
  quiz.hintBusy = true;
  try {
    const opened = quiz.hints[index] || (quiz.hints[index] = []);
    const hint = await api("get_hint", {
      username: state.user.username,
      question_id: question.id,
      level: opened.length + 1,
    });
    opened.push(hint);
    quiz.hintTotals[index] = hint.total_hints;
    (quiz.hintUnavailable ||= [])[index] = false;
    (quiz.hintHasDiagrams ||= [])[index] = !!hint.has_diagram;
    quiz.hintError = "";
  } catch (error) {
    if (error.code === "HINT_NOT_AVAILABLE") {
      quiz.hintTotals[index] = Number(error.totalHints) || 0;
      (quiz.hintUnavailable ||= [])[index] = quiz.hintTotals[index] === 0;
      (quiz.hintHasDiagrams ||= [])[index] = !!error.hasDiagram;
      quiz.hintError = "";
    } else quiz.hintError = error.message;
  }
  quiz.hintBusy = false;
  renderQuiz();
}
async function openHintDiagram() {
  const quiz = state.quiz,
    index = quiz.index,
    question = quiz.questions[index];
  if (quiz.hintBusy || quiz.results[index] || quiz.hintDiagrams?.[index])
    return;
  quiz.hintBusy = true;
  try {
    const result = await api("get_hint_diagram", {
      username: state.user.username,
      question_id: question.id,
    });
    const diagram = safeSolutionSvg(
      state.lang === "bi" ? result.so_do_en || result.so_do : result.so_do,
    );
    if (!diagram) throw new Error("Sơ đồ gợi ý chưa sẵn sàng.");
    (quiz.hintDiagrams ||= [])[index] = diagram;
    quiz.hintError = "";
  } catch (error) {
    quiz.hintError = error.message;
  }
  quiz.hintBusy = false;
  renderQuiz();
}
function highlightedHelpQuestion(question, calculation, problemKind) {
  const source = String(question || ""),
    normalizeNumber = (value) =>
      String(value || "")
        .replace(/[\s\u00a0]/g, "")
        .replace(",", ".");
  const usedNumbers = new Set(
    [
      ...String(calculation || "").matchAll(
        /\d+(?:[\s\u00a0]\d{3})*(?:[.,]\d+)?(?:\/\d+)?/g,
      ),
    ].map((match) => normalizeNumber(match[0])),
  );
  const questionMatch =
    state.lang === "en"
      ? source.match(/[^.!?]*\?\s*$/u)
      : source.match(/\bHỏi\b[^?]*(?:\?|$)/iu);
  const ranges = [];
  if (questionMatch?.[0])
    ranges.push({
      start: questionMatch.index,
      end: questionMatch.index + questionMatch[0].length,
      type: "question",
    });
  for (const match of source.matchAll(
    /\d+(?:[\s\u00a0]\d{3})*(?:[.,]\d+)?(?:\/\d+)?/g,
  )) {
    const start = match.index,
      end = start + match[0].length;
    if (ranges.some((range) => start < range.end && end > range.start))
      continue;
    if (usedNumbers.has(normalizeNumber(match[0])))
      ranges.push({ start, end, type: "used" });
    else if (problemKind === "du_kien_thua")
      ranges.push({ start, end, type: "unused" });
  }
  ranges.sort((a, b) => a.start - b.start);
  let output = "",
    previous = 0;
  for (const range of ranges) {
    output += escapeHtml(source.slice(previous, range.start));
    const value = escapeHtml(source.slice(range.start, range.end));
    output +=
      range.type === "unused"
        ? `<span class="unused-data"><del>${value}</del><small>${uiText("không cần dùng")}</small></span>`
        : `<mark>${value}</mark>`;
    previous = range.end;
  }
  return (output + escapeHtml(source.slice(previous))).replace(/\n/g, "<br>");
}
/** Dựng khung Cú iMath theo lý do chưa hiểu và câu dễ hơn nếu máy chủ tìm được. */
function helpPanelHtml(question, result, quiz) {
  const help = quiz.helpPanels?.[quiz.index];
  if (!help?.open) return "";
  const solution = result.solution || {},
    steps = window.IMATH_SOLUTION_VIEW.parse(result.explanation || solution.explanation).steps
      .map(step => ({number:step.sourceNumber,text:step.text}));
  const hints = Array.isArray(solution.goi_y)
    ? solution.goi_y.filter((item) => solutionText(item).trim())
    : [];
  const diagram = safeSolutionSvg(solution.so_do);
  const wrongReason = solutionText(
    result.why_wrong || result.vi_sao_sai || solution.vi_sao_sai,
  ).trim();
  const reasons = [
    [
      "de",
      "🔍 Em không hiểu đề hỏi gì",
      !!(
        solutionText(solution.tom_tat).trim() ||
        solutionText(solution.nhan_dien).trim()
      ),
    ],
    ["bat_dau", "🧭 Em không biết bắt đầu từ đâu", !!(hints.length || diagram || steps.length)],
    ["buoc", "✏️ Em không hiểu bước số …", steps.length > 0],
    [
      "vi_sao_sai",
      "❓ Em không hiểu vì sao đáp án của em sai",
      !result.correct && !!wrongReason,
    ],
  ];
  const part = (label, content) =>
    content
      ? `<div class="owl-help-part"><strong>${uiText(label)}</strong><div class="source-content">${content}</div></div>`
      : "";
  let detail = "";
  if (help.reason === "de") {
    detail = `${part("Đề cho gì, hỏi gì?", localizedSolutionHtml(solution, "tom_tat"))}${part("Đây là dạng bài gì?", localizedSolutionHtml(solution, "nhan_dien"))}<p class="owl-help-highlight source-content">${highlightedHelpQuestion(state.lang === "en" ? question.question_en || question.question : question.question, solutionText(solution.phep_tinh), solutionText(solution.dang))}</p>`;
  } else if (help.reason === "bat_dau") {
    if (!hints.length && !diagram && steps.length)
      detail = part("Gợi ý", richText(steps[0].text)) + part("Em cần nhớ", localizedSolutionHtml(solution, "ghi_nho"));
    else detail = hints
      .slice(0, help.hintShown || 0)
      .map((hint, index) =>
        part(
          `${uiText("Gợi ý")} ${index + 1}/${hints.length + (diagram ? 1 : 0)}`,
          richText(hint),
        ),
      )
      .join("");
    if ((help.hintShown || 0) >= hints.length && diagram && help.diagramShown)
      detail += part(
        "Sơ đồ đoạn thẳng",
        `<div class="solution-diagram">${diagram}</div>`,
      );
    if ((help.hintShown || 0) < hints.length || (diagram && !help.diagramShown))
      detail += `<button class="outline" data-action="help-next-hint">${uiText(diagram && (help.hintShown || 0) >= hints.length ? "📊 Xem sơ đồ" : "Gợi ý tiếp →")}</button>`;
  } else if (help.reason === "buoc") {
    detail = `<p>${window.IMATH_SOLUTION_VIEW.labels(state.lang).pick}</p>`;
  } else if (help.reason === "vi_sao_sai") {
    detail = `${part("Vì sao đáp án của em sai?", richText(wrongReason))}${part("Thử lại", localizedSolutionHtml(solution, "thu_lai"))}`;
  }
  const easier = help.easierQuestion,
    easierResult = help.easierResult;
  const completedEasier = help.easierCompletedIds || [];
  const easierHtml = easier && help.showEasier
    ? `<div class="owl-easier"><h3>${uiText(easier.song_sinh_cua ? "Câu song sinh cùng dạng" : "Câu dễ hơn cùng loại")}
        ${Math.min(completedEasier.length + (easierResult ? 0 : 1), 3)}/3</h3>
      ${examStyleBadge(easier)}<p class="source-content">${localizedHtml(easier.question, easier.question_vi, easier.question_en)}</p>
      ${sourceBadge(easier.translated)}${mediaHtml(easier)}${owlAnswerControls(easier, help)}
      ${easierResult ?
        `<p class="owl-easier-feedback">${uiText(easierResult.correct ? "Em làm đúng rồi!" : "Chưa đúng rồi, em xem lời giải nhé.")}</p>
        ${isTrueFalse(easier) ? trueFalseResultHtml(easierResult, easier) :
          `<div class="source-content">${explanationSteps(easierResult.explanation)}</div>`}
        ${sourceBadge(easierResult.translated)}${completedEasier.length < 3 && !help.noMoreEasier ?
          `<button class="primary" data-action="help-easier-next" ${help.busy ? "disabled" : ""}>
            ${uiText("Làm thêm một câu dễ khác")}</button>` : ""}` :
        `<button class="primary" data-action="help-easier-check" ${!owlAnswerReady(easier, help) || help.busy ? "disabled" : ""}>
          ${uiText("Kiểm tra")}</button>`}
      <button class="outline" data-action="help-easier-back">${uiText("Quay lại câu cũ")}</button></div>` : "";
  const rating =
    help.reason && !help.showEasier
      ? `<div class="owl-help-rating"><strong>${uiText("Giờ em hiểu chưa?")}</strong><button class="outline" data-action="help-vote" data-understood="1" aria-label="${uiText("Đã hiểu")}">👍</button><button class="outline" data-action="help-vote" data-understood="0" aria-label="${uiText("Chưa hiểu")}">👎</button></div>${help.understood === true ? `<p class="owl-help-reply">${uiText("Cú iMath khen em đã kiên trì tìm hiểu!")}</p>` : help.understood === false ? `<p class="owl-help-reply">${uiText("Em nhờ ba mẹ hoặc thầy cô giảng câu này nhé")} · ${uiText("Mã câu:")} ${escapeHtml(question.id)}</p>` : ""}`
      : "";
  return `<section class="owl-help" aria-label="${uiText("Cú iMath")}"><div class="owl-help-head"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="${uiText("Cú iMath")}"><div><strong>${uiText("Cú iMath")}</strong><p>${uiText("Em chưa hiểu chỗ nào? Cú iMath chỉ cho em nhé!")}</p></div><button class="outline sv-done" data-action="help-close">✓ ${uiText("Đã hiểu")}</button></div>${window.IMATH_SOLUTION_VIEW.choices(state.lang,Object.fromEntries(reasons.map(([code,,enabled])=>[code,enabled])),help.reason,true)}${help.reason ? `<div class="owl-help-detail">${detail}</div>` : ""}${easierHtml}${help.reason && easier && !help.showEasier ? `<button class="outline owl-easier-open" data-action="help-easier-open">${uiText("Làm một câu dễ hơn cùng loại")}</button>` : ""}${rating}${help.error ? `<p class="error" role="alert">${escapeHtml(help.error)}</p>` : ""}</section>`;
}
