/**
 * on-cau-sai.js — Danh sách câu chưa sửa/đã sửa theo lịch sử, làm lại không lưu điểm đề cũ.
 * Dùng: core.js, lam-bai.js, cham-ngon-hoc-tap.js; API get_wrong_questions, get_questions, submit_answer.
 * Không tạo bảng mới, không áp cho khách và tự luận; máy chủ kiểm quyền/lớp/tuần.
 */
"use strict";

async function loadWrongQuestions(filters = {}) {
  return api("get_wrong_questions", { grade_level: state.grade, ...filters });
}

/** Thẻ lối vào lấy số thật; N=0 hiện châm ngôn của phiên, không dựng thẻ ôn trống. */
async function refreshWrongEntry() {
  if (state.isGuest) return;
  const target = $("#wrong-question-entry");
  if (!target) return;
  try {
    const response = await loadWrongQuestions();
    if (!target.isConnected) return;
    target.innerHTML = response.pending_count
      ? `<button class="weekly-report-card" data-open-wrong><span>${icon("practice_pencil")}</span>
          <strong>${uiText("Ôn câu đã sai")} (${response.pending_count} ${uiText("câu")})</strong>${icon("arrow_right")}</button>`
      : window.IMATH_STUDY_PROVERBS.html();
  } catch (error) { target.textContent = error.message; }
}

async function renderWrongQuestions() {
  setNav("wrong-questions");
  state.wrongFilters ||= { topic: "", week: "", status: "pending" };
  const data = await loadWrongQuestions();
  state.wrongItems = data.items;
  const filters = state.wrongFilters;
  const topics = [...new Set(data.items.map((q) => q.chuyen_muc).filter(Boolean))];
  const weeks = [...new Set(data.items.map((q) => q.week).filter(Boolean))].sort((a,b) => a-b);
  const topicLabel = (code) => {
    const topic = (window.IMATH_GRADE_CATALOGS?.[state.grade]?.topics || []).flatMap((group) => group.items).find((q) => q.code === code);
    return topic ? topicName(topic) : code;
  };
  const items = data.items.filter((q) => (filters.status === "repaired" ? q.repaired : !q.repaired)
    && (!filters.topic || q.chuyen_muc === filters.topic) && (!filters.week || q.week === Number(filters.week)));
  $("#content").innerHTML = `<section class="wrong-questions-page"><h1 class="page-title">${uiText("Ôn câu đã sai")}</h1>
    <p>${uiText("Làm đúng lại để chuyển câu sang Đã sửa. Điểm đề cũ giữ nguyên.")}</p>
    <div class="favorite-toolbar"><label>${uiText("Chuyên mục")}<select data-wrong-filter="topic">
      <option value="">${uiText("Tất cả chuyên mục")}</option>${topics.map((code) => `<option value="${escapeHtml(code)}"
        ${filters.topic === code ? "selected" : ""}>${escapeHtml(topicLabel(code))}</option>`).join("")}</select></label>
      <label>${uiText("Tuần")}<select data-wrong-filter="week"><option value="">${uiText("Tất cả tuần")}</option>
      ${weeks.map((week) => `<option ${filters.week === String(week) ? "selected" : ""}>${week}</option>`).join("")}</select></label>
      <label>${uiText("Trạng thái")}<select data-wrong-filter="status">
        <option value="pending" ${filters.status === "pending" ? "selected" : ""}>${uiText("Chưa sửa")}</option>
        <option value="repaired" ${filters.status === "repaired" ? "selected" : ""}>${uiText("Đã sửa")}</option></select></label>
      <button class="primary" data-wrong-ten ${items.some((q) => !q.locked) ? "" : "disabled"}>${uiText("Ôn 10 câu")}</button></div>
    <div class="favorite-list">${items.map((q) => `<article class="favorite-card"><small>${escapeHtml(topicLabel(q.chuyen_muc || ""))}
      · ${escapeHtml(q.source_name)} · ${escapeHtml(q.first_wrong_at)}</small><div class="math-content source-content">${richText(q.question)}</div>
      <button class="outline" data-wrong-start="${escapeHtml(q.id)}" ${q.locked ? "disabled" : ""}>
        ${uiText(q.locked ? "Chưa mở" : "Làm lại")}</button></article>`).join("") ||
      `<div class="band">${data.pending_count === 0 ? window.IMATH_STUDY_PROVERBS.html()
        : `<p>${uiText("Không có câu nào phù hợp với bộ lọc.")}</p>`}
        <button class="primary" data-open-path>${uiText("Vào lộ trình tuần")}</button></div>`}</div></section>`;
  state.wrongVisible = items;
  renderMath();
  applyUiLanguage();
}

/** Lấy lại câu qua API quyền chuẩn, tránh dùng nội dung cũ nếu tuần vừa bị khoá. */
async function startWrongPractice(ids) {
  // Mã luyện do máy chủ chọn, không tự suy ra _ss1 hoặc vượt khoá tuần ở trình duyệt.
  const current = await loadWrongQuestions();
  const practiceIds = ids.map((id) => current.items.find((q) => q.id === id)?.practice_question_id || id);
  const response = await api("get_questions", { question_ids: practiceIds, grade_level: state.grade });
  state.returnPage = "wrong-questions";
  state.quiz = { test: { id: "wrong-review", name: uiText("Ôn câu đã sai"), grade_level: state.grade },
    questions: response.questions, index: 0, choices: response.questions.map(() => null), results: response.questions.map(() => null),
    attemptIds: [], confidences: [], hints: response.questions.map(() => []),
    hintTotals: [], hintBusy: false, hintError: "", solutionReveal: [], kind: "wrong-review" };
  renderQuiz();
}

document.addEventListener("change", (event) => {
  if (!event.target.matches("[data-wrong-filter]")) return;
  state.wrongFilters[event.target.dataset.wrongFilter] = event.target.value;
  renderWrongQuestions().catch((error) => alert(error.message));
});

async function handleWrongClick(event) {
  if (event.target.closest("[data-open-wrong]")) { await renderWrongQuestions(); return true; }
  if (event.target.closest("[data-open-path]")) { await navigate("path"); return true; }
  const start = event.target.closest("[data-wrong-start]");
  if (start) { await startWrongPractice([start.dataset.wrongStart]); return true; }
  if (event.target.closest("[data-wrong-ten]")) {
    await startWrongPractice(state.wrongVisible.filter((q) => !q.locked).slice(0,10).map((q) => q.id)); return true;
  }
  return false;
}
