/**
 * yeu-thich.js — Lưu/bỏ yêu thích, bộ lọc, lời giải đầy đủ và bài ôn từ câu đã lưu.
 * Dùng: core.js, loi-giai.js, lam-bai-chuan-bi.js.
 * API gọi: toggle_favorite, set_favorite_reason, get_favorites, get_question_solution.
 * Quy tắc nghiệp vụ: chỉ trả lời giải câu đã làm và không vượt khóa tuần.
 */
"use strict";

const FAVORITE_REASONS = Object.freeze({
  hay: "Hay",
  kho: "Khó",
  can_on: "Cần ôn lại",
});
function favoriteControlsHtml(question, placement = "") {
  if (state.isGuest || !question?.id) return "";
  const active = !!question.is_favorite;
  const chips = active
    ? `<div class="favorite-reasons" aria-label="${uiText("Lý do lưu")}">${Object.entries(
        FAVORITE_REASONS,
      )
        .map(
          ([reason, label]) =>
            `<button type="button" class="favorite-reason ${question.favorite_reason === reason ? "selected" : ""}" data-favorite-reason="${reason}" data-question-id="${escapeHtml(question.id)}">${uiText(label)}</button>`,
        )
        .join("")}</div>`
    : "";
  return `<div class="favorite-controls ${escapeHtml(placement)}"><button type="button" class="favorite-toggle ${active ? "active" : ""}" data-favorite-toggle="${escapeHtml(question.id)}" aria-pressed="${active}" aria-label="${uiText(active ? "Bỏ yêu thích" : "Lưu câu hỏi yêu thích")}"><span aria-hidden="true">${active ? "★" : "☆"}</span><span>${uiText(active ? "Đã yêu thích" : "Yêu thích")}</span></button>${chips}</div>`;
}
function updateFavoriteState(questionId, isFavorite, reason = null) {
  const update = (question) => {
    if (question?.id !== questionId) return;
    question.is_favorite = !!isFavorite;
    question.favorite_reason = isFavorite ? reason || null : null;
  };
  state.quiz?.questions?.forEach(update);
  state.reviewQuestions?.forEach(update);
  state.favoriteItems?.forEach(update);
}
function rerenderFavoriteSurface() {
  if (state.page === "quiz") renderQuiz();
  else if (state.page === "result") renderResult();
  else if (state.page === "favorites") renderFavorites(false);
  else if (state.page === "account" && state.accountTab === "favorites")
    renderFavorites(false, "#account-body", true);
}
/** Lưu/bỏ câu yêu thích trên máy chủ rồi đồng bộ mọi bản sao câu trong state. */
async function toggleFavorite(questionId) {
  const question =
    state.quiz?.questions?.find((item) => item.id === questionId) ||
    state.favoriteItems?.find((item) => item.id === questionId);
  try {
    const response = await api("toggle_favorite", {
      username: state.user.username,
      question_id: questionId,
    });
    updateFavoriteState(questionId, response.is_favorite, response.reason);
    if (!response.is_favorite && (state.page === "favorites" ||
      (state.page === "account" && state.accountTab === "favorites"))) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== questionId,
      );
      if (state.favoriteSolution?.id === questionId)
        state.favoriteSolution = null;
    }
    rerenderFavoriteSurface();
    if (response.is_favorite && question)
      document
        .querySelector(`[data-favorite-toggle="${CSS.escape(questionId)}"]`)
        ?.classList.add("favorite-pop");
  } catch (error) {
    alert(error.message);
  }
}
async function setFavoriteReason(questionId, reason) {
  try {
    const response = await api("set_favorite_reason", {
      username: state.user.username,
      question_id: questionId,
      reason,
    });
    updateFavoriteState(questionId, true, response.reason);
    rerenderFavoriteSurface();
  } catch (error) {
    alert(error.message);
  }
}
function favoriteTopicOptions() {
  const grades = state.favoriteFilters.grade
    ? [Number(state.favoriteFilters.grade)]
    : state.allowed;
  const seen = new Map();
  grades.forEach((grade) =>
    (window.IMATH_GRADE_CATALOGS?.[grade]?.topics || []).forEach((group) =>
      group.items.forEach((topic) => {
        if (topic.code && !seen.has(topic.code)) seen.set(topic.code, topic);
      }),
    ),
  );
  return [...seen.values()].sort((a, b) =>
    topicName(a).localeCompare(topicName(b), state.lang === "en" ? "en" : "vi"),
  );
}
function favoriteTopicLabel(item) {
  if (state.lang === "bi" && item.topic_name_en && item.topic_name_vi)
    return window.IMATH_I18N.bilingualHtml(
      item.topic_name_en,
      item.topic_name_vi,
    );
  return escapeHtml(
    state.lang === "vi"
      ? item.topic_name_vi || item.chuyen_muc
      : item.topic_name_en || item.topic_name_vi || item.chuyen_muc,
  );
}
function favoriteSourceLabel(item) {
  if (state.lang === "bi" && item.source_label_en && item.source_label_vi)
    return window.IMATH_I18N.bilingualHtml(
      item.source_label_en,
      item.source_label_vi,
    );
  return escapeHtml(
    state.lang === "vi"
      ? item.source_label_vi || item.source_label
      : item.source_label_en || item.source_label,
  );
}
/** Dựng lời giải đầy đủ chỉ từ payload đã qua điều kiện đã làm và không khóa của API. */
function favoriteSolutionHtml(item) {
  const view = state.favoriteSolution;
  if (!view || view.id !== item.id) return "";
  if (view.loading)
    return `<div class="favorite-solution"><p>${uiText("Đang tải lời giải...")}</p></div>`;
  if (view.error) {
    const notAttempted = view.code === "NOT_ATTEMPTED";
    return `<div class="favorite-solution favorite-solution-message"><p>${escapeHtml(notAttempted ? uiText("Em làm câu này trước rồi xem lời giải nhé") : view.error)}</p><div><button class="outline" data-favorite-solution-close="1">${uiText("Đóng")}</button>${notAttempted && !item.locked ? `<button class="primary" data-favorite-start="${escapeHtml(item.id)}">${uiText("Làm ngay")}</button>` : ""}</div></div>`;
  }
  const payload = view.payload,
    question = payload.question || item,
    options = questionOptions(question);
  const result = {
    solution: payload.solution || {},
    explanation: payload.explanation || "",
    explanation_vi: payload.explanation_vi,
    explanation_en: payload.explanation_en,
    chuyen_muc: payload.chuyen_muc,
  };
  const solutionQuiz = {
    test: {
      grade_level: question.grade_level,
      week_no: Number(payload.source_week) || 0,
    },
  };
  if (isTrueFalse(question)) return '<section class="favorite-solution"><button class="outline" data-favorite-solution-close="1">'
    + uiText('Đóng') + '</button>' + trueFalseResultHtml({ ...payload, correct: payload.correct_count === 4 }, question) + '</section>';
  if (isEssay(question)) return `<section class="favorite-solution"><button class="outline" data-favorite-solution-close="1">
    ${uiText("Đóng")}</button>${knowledgeContextHtml(question, result, solutionQuiz)}${essayModelReadonlyHtml(payload)}</section>`;
  const wrongByLetter = new Map(
    (payload.wrong_reasons || []).map((entry) => [entry.letter, entry]),
  );
  const optionRows = options
    .map((option, index) => {
      const letter = "ABCDEF"[index] || String(index + 1),
        originalKey = questionOptionKey(question, index),
        correct = originalKey === payload.correct_position,
        wrong = wrongByLetter.get(originalKey);
      const optionVi = question.options_vi?.[index] ?? option,
        optionEn = question.options_en?.[index] ?? option;
      const optionHtml =
        state.lang === "bi"
          ? window.IMATH_I18N.bilingualHtml(optionEn, optionVi)
          : escapeHtml(optionText(question, index) ?? option);
      const rationale = wrong
        ? state.lang === "bi" && wrong.rationale_en
          ? window.IMATH_I18N.bilingualHtml(
              wrong.rationale_en,
              wrong.rationale_vi,
            )
          : richText(wrong.rationale)
        : richText(uiText("Phương án này chưa đúng."));
      return `<div class="favorite-solution-option ${correct ? "correct" : ""}"><div><strong>${letter}</strong><span class="source-content">${optionHtml}</span>${correct ? `<em>${uiText("Đáp án đúng")}</em>` : ""}</div>${!correct ? `<div class="speech-content-row favorite-wrong-reason"><p class="math-content source-content"><b>${uiText("Vì sao sai:")}</b> ${rationale}</p>${speechButton(wrong?.rationale || uiText("Phương án này chưa đúng."))}</div>` : ""}</div>`;
    })
    .join("");
  return `<section class="favorite-solution"><div class="favorite-solution-head"><h3>${uiText("Lời giải đầy đủ")}</h3><button class="outline" data-favorite-solution-close="1" aria-label="${uiText("Đóng")}">×</button></div>${sourceBadge(question.translated)}${knowledgeContextHtml(question, result, solutionQuiz)}<div class="favorite-solution-options">${optionRows}</div>${sharedSolutionHtml(result)}</section>`;
}
function renderFavoritePageBody(targetSelector = "#content", embedded = false) {
  const filters = state.favoriteFilters,
    topics = favoriteTopicOptions(),
    items = state.favoriteItems || [];
  const gradeOptions = state.allowed
    .map(
      (grade) =>
        `<option value="${grade}" ${String(grade) === filters.grade ? "selected" : ""}>${uiText(`Lớp ${grade}`)}</option>`,
    )
    .join("");
  const topicOptions = topics
    .map(
      (topic) =>
        `<option value="${escapeHtml(topic.code)}" ${topic.code === filters.topic ? "selected" : ""}>${escapeHtml(topicName(topic))}</option>`,
    )
    .join("");
  const cards = items
    .map((item) => {
      const savedDate = item.favorite_created_at
        ? new Intl.DateTimeFormat("vi-VN").format(
            new Date(String(item.favorite_created_at).replace(" ", "T")),
          )
        : "";
      const lock = item.locked
        ? `<span class="favorite-lock">🔒 ${uiText("Mở từ tuần")} ${Number(item.required_week) || ""}</span>`
        : "";
      return `<article class="favorite-card"><div class="favorite-card-top"><div><span>${uiText(`Lớp ${item.grade_level}`)} · ${favoriteTopicLabel(item)} · ${favoriteSourceLabel(item)}</span>${lock}</div>${favoriteControlsHtml(item, "favorite-card-star")}</div><p class="favorite-card-question source-content math-content">${localizedHtml(item.question, item.question_vi, item.question_en)}</p>${sourceBadge(item.translated)}<div class="favorite-card-meta"><span>${uiText("Ngày lưu")}: ${escapeHtml(savedDate)}</span>${item.favorite_reason ? `<span class="favorite-reason-label">${uiText(FAVORITE_REASONS[item.favorite_reason])}</span>` : ""}</div><div class="favorite-card-actions"><button class="outline" data-favorite-view="${escapeHtml(item.id)}" ${item.locked ? "disabled" : ""}>${uiText("Xem lời giải")}</button><button class="primary" data-favorite-start="${escapeHtml(item.id)}" ${item.locked ? "disabled" : ""}>${uiText("Làm lại")}</button><button class="outline danger" data-favorite-toggle="${escapeHtml(item.id)}">${uiText("Bỏ yêu thích")}</button></div>${favoriteSolutionHtml(item)}</article>`;
    })
    .join("");
  const heading = embedded ? "" :
    `<p class="eyebrow">${uiText("ÔN TẬP CÁ NHÂN")}</p><h1 class="page-title">${uiText("Câu hỏi yêu thích")}</h1><p class="page-sub">${uiText("Lưu những câu hay, khó hoặc cần ôn lại để luyện bất cứ lúc nào.")}</p>`;
  $(targetSelector).innerHTML =
    `<section class="favorites-page">${heading}<div class="favorite-toolbar"><label>${uiText("Lớp")}<select data-favorite-filter="grade"><option value="">${uiText("Tất cả lớp")}</option>${gradeOptions}</select></label><label>${uiText("Chuyên mục")}<select data-favorite-filter="topic"><option value="">${uiText("Tất cả chuyên mục")}</option>${topicOptions}</select></label><label>${uiText("Lý do")}<select data-favorite-filter="reason"><option value="">${uiText("Tất cả lý do")}</option>${Object.entries(
      FAVORITE_REASONS,
    )
      .map(
        ([key, label]) =>
          `<option value="${key}" ${filters.reason === key ? "selected" : ""}>${uiText(label)}</option>`,
      )
      .join(
        "",
      )}</select></label><button class="primary favorite-practice" data-action="favorites-practice" ${items.some((item) => !item.locked) ? "" : "disabled"}>⭐ ${uiText("Ôn các câu yêu thích")}</button></div><div class="favorite-list">${cards || `<div class="band favorite-empty"><h2>${uiText("Chưa có câu hỏi yêu thích")}</h2><p>${uiText("Bấm ngôi sao ở câu hỏi em muốn lưu lại.")}</p></div>`}</div></section>`;
  renderMath();
  applyUiLanguage();
}
/** Tải lại danh sách theo lớp, chuyên mục và lý do trước khi dựng trang yêu thích. */
async function renderFavorites(refresh = true, targetSelector = "#content", embedded = false) {
  if (refresh) {
    $(targetSelector).innerHTML =
      `<div class="band">${uiText("Đang tải dữ liệu...")}</div>`;
    try {
      const response = await api("get_favorites", {
        username: state.user.username,
        grade_level: state.favoriteFilters.grade
          ? Number(state.favoriteFilters.grade)
          : undefined,
        chuyen_muc: state.favoriteFilters.topic || undefined,
        reason: state.favoriteFilters.reason || undefined,
      });
      state.favoriteItems = response.favorites || [];
      if (
        state.favoriteSolution &&
        !state.favoriteItems.some(
          (item) => item.id === state.favoriteSolution.id,
        )
      )
        state.favoriteSolution = null;
    } catch (error) {
      $(targetSelector).innerHTML =
        `<div class="band error">${escapeHtml(error.message)}</div>`;
      return;
    }
  }
  renderFavoritePageBody(targetSelector, embedded);
}
/** Giữ trang yêu thích trong đúng thẻ Tài khoản khi người dùng lọc hoặc mở lời giải. */
function renderCurrentFavorites(refresh = true) {
  return state.page === "account" && state.accountTab === "favorites"
    ? renderFavorites(refresh, "#account-body", true)
    : renderFavorites(refresh);
}
function startFavoriteQuiz(items, practice = false) {
  const questions = [...items];
  if (!questions.length) return;
  state.returnPage = state.page === "account" ? "account" : "favorites";
  state.quiz = {
    test: {
      id: null,
      name: practice
        ? uiText("Ôn các câu yêu thích")
        : uiText("Câu hỏi yêu thích"),
    },
    questions,
    index: 0,
    choices: Array(questions.length).fill(null),
    results: Array(questions.length).fill(null),
    attemptIds: [],
    confidences: [],
    questionTimers: Array.from({ length: questions.length }, () => ({
      elapsedMs: 0,
      startedAt: null,
    })),
    hints: Array.from({ length: questions.length }, () => []),
    hintTotals: [],
    hintUnavailable: [],
    hintBusy: false,
    hintError: "",
    solutionReveal: [],
    kind: practice ? "favorite-practice" : "favorite",
  };
  renderQuiz();
}
