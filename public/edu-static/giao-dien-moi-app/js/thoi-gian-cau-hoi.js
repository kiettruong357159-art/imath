/**
 * thoi-gian-cau-hoi.js — Tiện ích học kỳ, đồng hồ cộng dồn theo câu, hiển thị lỗi, rich text, đọc to và render toán. Dùng: core.js (state), speech.js, math-render.js. Không gọi API trực tiếp. Quy tắc nghiệp vụ: thời gian dừng khi tab ẩn và cộng dồn khi quay lại câu.
 */
"use strict";

const selectedTermName = () => (state.term === 2 ? "Học kỳ II" : "Học kỳ I");
const isWeekInSelectedTerm = (week) =>
  state.term === 1 ? Number(week) <= 18 : Number(week) >= 19;
function questionTimer(quiz, index) {
  if (!quiz.questionTimers) quiz.questionTimers = [];
  return (quiz.questionTimers[index] ||= { elapsedMs: 0, startedAt: null });
}
/** Dừng đồng hồ câu hiện tại và trả tổng mili giây tích lũy; thời gian tab ẩn không được tính. */
function pauseQuestionTimer(quiz, index) {
  if (!quiz || index == null) return 0;
  const timer = questionTimer(quiz, index);
  if (timer.startedAt !== null) {
    timer.elapsedMs += Math.max(0, performance.now() - timer.startedAt);
    timer.startedAt = null;
  }
  return Math.max(0, Math.round(timer.elapsedMs));
}
/** Đọc thời gian hiện tại mà không dừng đồng hồ, dùng đúng khoảnh khắc em chọn phương án. */
function currentQuestionElapsedMs(quiz, index) {
  if (!quiz || index == null) return 0;
  const timer = questionTimer(quiz, index);
  const running = timer.startedAt === null ? 0 : Math.max(0, performance.now() - timer.startedAt);
  return Math.max(0, Math.round(timer.elapsedMs + running));
}
function resumeQuestionTimer(quiz, index) {
  if (
    !quiz ||
    index == null ||
    document.hidden ||
    state.page !== "quiz" ||
    quiz.results?.[index]
  )
    return;
  const timer = questionTimer(quiz, index);
  if (timer.startedAt === null) timer.startedAt = performance.now();
}
function showError(target, error) {
  const node = $(target);
  if (node) node.textContent = error.message || String(error);
}
function richText(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}
const speechLanguage = () => (state.lang === "vi" ? "vi" : "en");
const speechButton = (value, large = false) =>
  window.IMATH_SPEECH?.buttonHtml(value, speechLanguage(), large) || "";
const localizedSpeechText = (value, vi, en) =>
  state.lang === "vi" ? (vi ?? value ?? en ?? "") : (en ?? value ?? vi ?? "");
const stopSpeech = () => window.IMATH_SPEECH?.stop();
function renderMath() {
  // Vùng đọc mới dùng math-content; không render toàn #content vì có ô nhập/soạn bài.
  document.querySelectorAll("#content .math-content")
    .forEach((element) => window.renderMathIn?.(element));
  // Các ý Đúng/Sai và bài giải mẫu có cùng cú pháp KaTeX như đề/phương án.
  document.querySelectorAll("#content .true-false-row, #content .essay-panel, #content .history-review-question")
    .forEach((element) => window.renderMathIn?.(element));
  document
    .querySelectorAll(
      "#content .question-text, #content .option > span:not(.option-letter), #content .result-question, #content .result-row p, #content .result-explanation, #content .favorite-solution-option .source-content, #content .explanation-step-body, #content .explanation-plain, #content .solution-part, #content .why-wrong, #content .hint-item, #content .owl-help .source-content",
    )
    .forEach((element) => window.renderMathIn?.(element));
  window.IMATH_SPEECH?.refreshButtons($("#content"));
}

/** Khởi động phiên học sinh; nếu không có session hợp lệ thì chỉ hiện màn đăng nhập. */
