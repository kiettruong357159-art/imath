/**
 * term-exam.js — Đồng hồ và autosave đề kì trên màn làm bài chung.
 * Dùng: lam-bai.js, core.js; API term_exam_save/submit và exam_clock của get_questions.
 * Quy tắc 14/10: đồng hồ máy chủ, đổi thiết bị giữ hạn; hết giờ nộp dữ liệu đã lưu.
 */
"use strict";
const termExam = { interval: null, queue: Promise.resolve(), pending: new Map(), latest: new Map(),
  timer: null, submitting: false, resumed: false };
const termStorageKey = () => `imath_term_active:${state.isGuest ? "guest" : state.user?.username}`;
const examTimeText = seconds => [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
  .map(n => String(n).padStart(2, "0")).join(":");

/** Nhận trạng thái máy chủ; ánh xạ khóa gốc về thứ tự phương án đã xáo của trình duyệt. */
function termExamAccept(quiz, clock) {
  if (!clock) return;
  quiz.termClock = clock; quiz.termStarted = performance.now();
  quiz.termRemaining = Date.parse(clock.deadline_at) - Date.parse(clock.server_time);
  for (const [id, answer] of Object.entries(clock.saved_answers || {})) {
    const index = quiz.questions.findIndex(q => q.id === id); if (index < 0) continue;
    const q = quiz.questions[index];
    quiz.choices[index] = !isTypedQuestion(q) && !isTrueFalse(q) && answer !== null
      ? questionOptions(q).findIndex((_, i) => questionOptionKey(q, i) === answer) : answer;
  }
  termExam.submitting = false; termExam.pending.clear(); termExam.latest.clear(); termExam.queue = Promise.resolve();
  sessionStorage.setItem(termStorageKey(), JSON.stringify({ id: quiz.test.id, grade: state.grade }));
}

/** Hạn dựa trên performance.now, đổi giờ hệ điều hành không làm tăng thời gian còn lại. */
function termExamSeconds() {
  const quiz = state.quiz;
  return Math.max(0, Math.ceil((quiz.termRemaining - performance.now() + quiz.termStarted) / 1000));
}
function termExamStop() { clearInterval(termExam.interval); termExam.interval = null; }

/** Móc nhỏ vào renderer cũ; đề không có clock giữ nguyên toàn bộ giao diện/hành vi. */
function termExamMount() {
  const quiz = state.quiz; if (!quiz?.termClock || quiz.termClock.status === "submitted") return;
  const panel = $("#content .quiz-panel"); panel.classList.add("term-exam-panel");
  panel.querySelector(".quiz-top-actions").innerHTML = `<div class="ef-timer" role="timer"><small>Thời gian còn lại</small>
    <strong id="term-clock">${examTimeText(termExamSeconds())}</strong></div><button class="primary" data-term-action="submit">Nộp bài</button>`;
  panel.querySelector(".quiz-nav").innerHTML = `<button class="outline" data-term-action="previous" ${quiz.index === 0 ? "disabled" : ""}>Câu trước</button>
    <span id="term-save-status" role="status">Đáp án được tự lưu tạm</span>
    <button class="primary" data-term-action="next" ${quiz.index === quiz.questions.length - 1 ? "disabled" : ""}>Câu tiếp theo</button>`;
  panel.querySelectorAll(".confidence-picker,.quiz-favorite,.hint-box,.fast-answer-notice").forEach(el => el.remove());
  if (!termExam.interval) termExam.interval = setInterval(() => {
    if (state.page !== "quiz" || !state.quiz?.termClock) return termExamStop();
    const left = termExamSeconds(), el = $("#term-clock"); if (el) el.textContent = examTimeText(left);
    if (!left && !termExam.submitting) termExamSubmit(true).catch(error => showError("#quiz-error", error));
  }, 250);
  if (!termExamSeconds()) termExamSubmit(true).catch(error => showError("#quiz-error", error));
}

/** Xếp giá trị hiện tại vào batch; pending không chứa điểm hoặc đáp án chuẩn. */
function termExamSaveCurrent() {
  const quiz = state.quiz; if (!quiz?.termClock || termExam.submitting) return;
  saveCurrentFill(); const q = quiz.questions[quiz.index], selected = quiz.choices[quiz.index];
  const answer = !isTypedQuestion(q) && !isTrueFalse(q) && Number.isInteger(selected) && selected >= 0
    ? questionOptionKey(q, selected) : selected;
  const data = { test_id: quiz.test.id, question_id: q.id, answer: Array.isArray(answer) ? [...answer] : answer };
  termExam.pending.set(q.id, data); termExam.latest.set(q.id, data);
  clearTimeout(termExam.timer); termExam.timer = setTimeout(() => termExamFlush().catch(error => showError("#quiz-error", error)), 300);
}
async function termExamFlush() {
  clearTimeout(termExam.timer); const batch = [...termExam.pending.values()]; termExam.pending.clear();
  termExam.queue = termExam.queue.catch(() => {}).then(async () => {
    for (let i = 0; i < batch.length; i++) {
      try { await api("term_exam_save", batch[i]); }
      catch (error) {
        for (const data of batch.slice(i)) if (!termExam.pending.has(data.question_id) && termExam.latest.get(data.question_id) === data) {
          termExam.pending.set(data.question_id, data);
        }
        throw error;
      }
    }
    const el = $("#term-save-status"); if (el) el.textContent = "Đã lưu tạm";
  });
  await termExam.queue;
  if (termExam.pending.size) await termExamFlush();
}

/** Hết giờ không gửi đáp án mới để vượt hạn; chỉ nộp phần đã autosave thành công. */
async function termExamSubmit(timeUp = false) {
  if (termExam.submitting) return;
  if (!timeUp && !confirm("Nộp bài và xem kết quả? Em sẽ không sửa đáp án sau khi nộp.")) return;
  if (!timeUp) termExamSaveCurrent();
  termExam.submitting = true;
  try {
    try { await termExamFlush(); } catch (error) { if (error.code !== "TERM_EXAM_TIME_UP") throw error; }
    const result = await api("term_exam_submit", { test_id: state.quiz.test.id });
    termExamRenderResult(result);
  } catch (error) { termExam.submitting = false; throw error; }
}

/** Một đề kì giữ một lượt; màn kết quả không mời làm lại cùng deadline đã chốt. */
function termExamRenderResult(result) {
  state.quiz.results = state.quiz.questions.map(q => result.results.find(r => r.question_id === q.id));
  state.quiz.termClock.status = "submitted"; state.score = result;
  termExamStop(); sessionStorage.removeItem(termStorageKey()); renderResult();
  document.querySelector('[data-action="retry"]')?.remove();
}

/** Reload tự mở lại đề của đúng phiên; thiết bị khác chọn cùng đề sẽ nhận dữ liệu máy chủ. */
async function termExamResume() {
  if (termExam.resumed || !["path", "practice"].includes(state.page)) return;
  termExam.resumed = true; let saved;
  try { saved = JSON.parse(sessionStorage.getItem(termStorageKey()) || "null"); } catch { return; }
  if (saved && saved.grade === state.grade) { await loadCatalog(); await startTestById(saved.id, "practice"); }
}

document.addEventListener("input", event => {
  if (state.quiz?.termClock && event.target.matches("[data-fill-answer]")) termExamSaveCurrent();
});
/** Chặn action kiểm từng câu trong chế độ thi; renderer/chọn phương án chung vẫn dùng lại. */
document.addEventListener("click", event => {
  if (state.page !== "quiz" || !state.quiz?.termClock || termExam.submitting) return;
  const q = state.quiz, choice = event.target.closest("[data-choice]"), truth = event.target.closest("[data-truth-index]");
  const button = event.target.closest("[data-term-action],[data-jump],[data-action='leave-quiz']");
  if (button?.disabled) return;
  if (!choice && !truth && !button) return;
  event.preventDefault(); event.stopImmediatePropagation();
  if (choice) q.choices[q.index] = Number(choice.dataset.choice);
  if (truth) {
    if (!Array.isArray(q.choices[q.index])) q.choices[q.index] = [null, null, null, null];
    q.choices[q.index][Number(truth.dataset.truthIndex)] = truth.dataset.truthValue === "true";
  }
  termExamSaveCurrent();
  if (button?.dataset.termAction === "submit") return void termExamSubmit().catch(error => showError("#quiz-error", error));
  if (button?.dataset.action === "leave-quiz") return void navigate(state.returnPage);
  if (button?.hasAttribute("data-jump")) q.index = Number(button.dataset.jump);
  else if (button?.dataset.termAction === "next") q.index = Math.min(q.questions.length - 1, q.index + 1);
  else if (button?.dataset.termAction === "previous") q.index = Math.max(0, q.index - 1);
  renderQuiz();
}, true);
