/**
 * giao-vien-tu-luan-tu-cham.js — Adapter tự chấm câu riêng, dùng khối tự luận lớp 10.
 * Dùng giao-vien-hoc-sinh.js/cau-dac-biet.js; API gv_student_essay_finish/assess.
 * Chỉ self_assessed dùng tự chấm; câu kho giáo viên chấm giữ nguyên. Không gọi API kho.
 * Quy tắc: Đợt 2 mục 6 ngày 09/10; điểm riêng, bài kiểm tra giấu mẫu tới giờ đóng.
 */
"use strict";

/** Renderer dùng rubric đã mở; xác nhận làm giấy chưa đồng nghĩa đã chốt điểm tự chấm. */
function teacherPrivateEssayHtml(q, quiz) {
  const results = [...quiz.results];
  if (results[quiz.index]?.self_score == null) results[quiz.index] = null;
  if (quiz.results[quiz.index] && !quiz.essayRubrics?.[quiz.index]) {
    return `<p>Đã ghi nhận bài làm trên giấy. Bài giải mẫu mở sau giờ đóng bài kiểm tra.</p>`;
  }
  return teacherOriginalEssayHtml(q, { ...quiz, results });
}

/** Capture của adapter bài giao gọi hàm này; máy chủ tính điểm tick từ rubric bản chốt. */
async function teacherPrivateEssayClick(button, quiz, index) {
  if (button.hasAttribute("data-essay-step")) {
    quiz.essayChecks[index][Number(button.dataset.essayStep)] = button.checked;
  } else {
    const finish = button.hasAttribute("data-essay-finish");
    const result = await api(finish ? "gv_student_essay_finish" : "gv_student_essay_assess", {
      ...teacherIntegrityPayload(), attempt_id: quiz.teacherAttempt, position: index + 1,
      ...(finish ? {} : { checked_steps: quiz.essayChecks[index] }),
    });
    quiz.results[index] = { ...result, essay: true, correct: null, tong_diem: result.max_score || 1, selected: "Đã làm trên giấy" };
    if (result.rubric) {
      (quiz.essayRubrics ||= [])[index] = result.rubric;
      (quiz.essayChecks ||= [])[index] = result.checked_steps?.length
        ? result.checked_steps : result.rubric.loi_giai_mau.map(() => false);
    }
  }
  renderQuiz();
}

/** Khôi phục rubric/điểm từ phản hồi idempotent khi tải lại bài luyện tập. */
function teacherPrivateRestoreEssay(quiz, index) {
  const result = quiz.results[index];
  if (!result?.rubric) return;
  (quiz.essayRubrics ||= [])[index] = result.rubric;
  (quiz.essayChecks ||= [])[index] = result.checked_steps?.length
    ? result.checked_steps : result.rubric.loi_giai_mau.map(() => false);
}

/** Kết quả riêng có mẫu và nhãn chưa tự chấm, không biến thành 0 điểm đề. */
function teacherPrivateEssayReviewHtml(feedback, attemptId, position) {
  const meta = feedback.rubric;
  const score = feedback.self_score == null ? "Chưa tự chấm" : `${specialNumber(feedback.self_score)}/${specialNumber(meta.tong_diem)}`;
  return `<strong>Tự luận (tự chấm): ${score}</strong>${meta ? essayModelReadonlyHtml(meta) : ""}
    ${feedback.self_score == null && meta ? `<form data-teacher-review-self="${escapeHtml(attemptId)}" data-position="${position}">
      ${meta.loi_giai_mau.map((step, i) => `<label><input type="checkbox" data-review-self-step>Em làm đúng Bước ${i + 1}</label>`).join("")}
      <button class="primary">Lưu điểm tự chấm</button></form>` : ""}`;
}

/** Kiểm tra đã đóng mới có form tự chấm ở kết quả; quyền giờ mở vẫn được server kiểm lại. */
document.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-teacher-review-self]");
  if (!form) return;
  event.preventDefault();
  try {
    await api("gv_student_essay_assess", { attempt_id: form.dataset.teacherReviewSelf,
      position: Number(form.dataset.position), checked_steps: [...form.querySelectorAll("[data-review-self-step]")].map((box) => box.checked) });
    teacherShowStudentResult(await api("gv_student_review", { attempt_id: form.dataset.teacherReviewSelf }));
  } catch (error) { alert(error.message); }
});
