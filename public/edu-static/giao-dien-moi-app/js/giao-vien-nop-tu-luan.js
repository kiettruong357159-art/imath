/**
 * giao-vien-nop-tu-luan.js — Ảnh bài làm riêng cho câu tự luận của bài cô/thầy giao.
 * Dùng adapter giáo viên, không thay renderer/chấm điểm của đề thường hoặc tự chấm.
 * Ảnh được lưu nháp trên server, chuyển câu/F5 không mất; API kiểm lại quyền và giờ nộp.
 * Vòng 1 ngày 10/10: chọn ảnh, xem ảnh, xóa trước khi nộp, chờ giáo viên chấm.
 */
"use strict";
const TEACHER_ESSAY_IMAGE_BYTES = 2 * 1024 * 1024;
const TEACHER_ESSAY_IMAGE_COUNT = 3;

/** Nhãn ba nguồn rõ ràng; số câu máy chấm do server tính, không suy ra từ tổng ma trận. */
function teacherEssayScoreSourcesHtml(result) {
  if (!result.automatic_questions) return "";
  const automatic = result.automatic_questions;
  return `<section class="band teacher-essay-score-sources"><strong>Máy chấm: ${automatic.correct}/${automatic.total} câu đúng</strong>
    <p>Điểm tự chấm và điểm giáo viên chấm được ghi riêng tại từng câu tự luận bên dưới.
    ${result.matrix_score ? "Tổng điểm theo ma trận dùng điểm giáo viên đã trả; không cộng điểm em tự chấm." : ""}</p></section>`;
}

/** Chỉ nhận URL endpoint ảnh của ứng dụng; không dựng HTML từ URL tùy ý trong payload. */
function teacherEssayImageHtml(image, index, editable) {
  if (!/^[a-f0-9]{32}$/.test(image.id)) return "";
  const url = `backend/teacher_essay_image.php?id=${image.id}`;
  return `<figure><a href="${url}" target="_blank" rel="noopener" aria-label="Mở ảnh bài làm ${index + 1}">
    <img src="${url}" alt="Ảnh bài làm ${index + 1}" loading="lazy"></a><figcaption>Ảnh ${index + 1}
    ${editable ? `<button type="button" class="outline" data-essay-image-remove="${image.id}">Xóa ảnh</button>` : ""}
    </figcaption></figure>`;
}

/** Panel ảnh tách khỏi bài giải mẫu và điểm tự chấm; trạng thái do server trả. */
function teacherEssayUploadHtml(quiz, position, readonly = false) {
  const item = quiz.essaySubmissions?.find(row => row.position === position);
  const images = item?.images || [];
  const pending = item?.status === "pending";
  const returned = item?.status === "returned";
  const editable = !readonly && !pending && !returned && !quiz.essayImageBusy;
  return `<section class="teacher-essay-upload" aria-label="Ảnh bài tự luận">
    <h3>Ảnh bài làm của em · Câu ${position}</h3><p>${returned ? "✓ Giáo viên đã trả bài" : pending
      ? "✓ Chờ giáo viên chấm" : "Em chụp bài làm rõ nét, xem lại ảnh rồi nộp cho cô/thầy."}</p>
    ${returned ? `<div class="teacher-essay-returned"><strong>Giáo viên chấm: ${answerDisplay(item.teacher_points)}/${answerDisplay(item.teacher_max_points)}</strong>
      <p class="source-content">${escapeHtml(item.teacher_comment || "Thầy cô đã chấm bài của em.")}</p></div>` : ""}
    <div class="teacher-essay-images">${images.map((image, index) => teacherEssayImageHtml(image, index, editable)).join("")}</div>
    ${!readonly && !pending && !returned ? `<div class="teacher-essay-actions"><label class="outline teacher-essay-file">
      ${quiz.essayImageBusy ? "Đang lưu ảnh…" : "Chọn ảnh bài làm"}<input type="file" data-essay-image-input
      accept="image/jpeg,image/png,image/webp" ${!editable || images.length >= TEACHER_ESSAY_IMAGE_COUNT ? "disabled" : ""}></label>
      <button type="button" class="primary" data-essay-image-send ${!editable || !images.length ? "disabled" : ""}>Nộp ảnh bài làm</button></div>
      <p class="teacher-essay-help">Tối đa 3 ảnh/câu · JPG, PNG, WebP · 2 MB/ảnh, tối đa 5 triệu pixel.
      Ảnh đã chọn được lưu nháp; nộp cả bài cũng gửi các ảnh này.</p>` : ""}
    <p class="teacher-essay-help">Ảnh chỉ dành cho em, phụ huynh của em và giáo viên lớp. Bấm ảnh để xem lớn.</p>
    <p class="error" data-essay-image-error role="alert"></p></section>`;
}

/** Móc vào adapter tự luận một lần, giữ nguyên các kiểu đề và luồng làm trên giấy trước đây. */
const teacherEssayWithoutImagesHtml = essayHtml;
essayHtml = function(q, quiz) {
  const original = teacherEssayWithoutImagesHtml(q, quiz);
  return quiz.teacherAttempt ? teacherEssayUploadHtml(quiz, quiz.index + 1) + original : original;
};

/** FileReader không giữ ảnh trong localStorage; server chuẩn hóa byte, tên file không gửi lên. */
function teacherEssayReadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Không đọc được ảnh. Em thử chọn lại nhé."));
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.readAsDataURL(file);
  });
}

/** Cố định quiz/vị trí trước await: phản hồi muộn không ghi ảnh sang câu khác hoặc lượt mới. */
async function teacherEssayImageAction(action, extra = {}) {
  const quiz = state.quiz, index = quiz.index;
  if (!quiz.teacherAttempt || quiz.essayImageBusy) return;
  quiz.essayImageBusy = true;
  renderQuiz();
  try {
    const result = await api(action, { ...teacherIntegrityPayload(), attempt_id: quiz.teacherAttempt, position: index + 1, ...extra });
    quiz.essaySubmissions = result.essay_submissions;
    if (action === "gv_student_essay_send") {
      quiz.results[index] = { ...result, essay: true, selected: "Đã nộp ảnh bài làm" };
      if (result.rubric) {
        (quiz.essayRubrics ||= [])[index] = result.rubric;
        (quiz.essayChecks ||= [])[index] = result.checked_steps?.length
          ? result.checked_steps : result.rubric.loi_giai_mau.map(() => false);
      }
    }
  } catch (error) {
    quiz.essayImageError = error.message;
  } finally {
    quiz.essayImageBusy = false;
    if (state.quiz === quiz) {
      renderQuiz();
      const error = document.querySelector("[data-essay-image-error]");
      if (error && quiz.index === index) error.textContent = quiz.essayImageError || "";
    }
    quiz.essayImageError = "";
  }
}

document.addEventListener("change", async event => {
  if (!event.target.matches("[data-essay-image-input]")) return;
  const file = event.target.files?.[0];
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > TEACHER_ESSAY_IMAGE_BYTES) {
    document.querySelector("[data-essay-image-error]").textContent = "Chọn ảnh JPG, PNG hoặc WebP tối đa 2 MB.";
    event.target.value = ""; return;
  }
  const quiz = state.quiz, index = quiz.index;
  try {
    const content_base64 = await teacherEssayReadFile(file);
    if (state.quiz === quiz && quiz.index === index) await teacherEssayImageAction("gv_student_essay_upload", { content_base64 });
  } catch (error) { showError("#quiz-error", error); }
});

document.addEventListener("click", async event => {
  const remove = event.target.closest("[data-essay-image-remove]");
  const send = event.target.closest("[data-essay-image-send]");
  if (!remove && !send) return;
  event.preventDefault();
  if (send && !confirm("Nộp ảnh bài làm cho cô/thầy? Sau khi nộp em không đổi ảnh được.")) return;
  await teacherEssayImageAction(remove ? "gv_student_essay_remove" : "gv_student_essay_send",
    remove ? { image_id: remove.dataset.essayImageRemove } : {});
});
