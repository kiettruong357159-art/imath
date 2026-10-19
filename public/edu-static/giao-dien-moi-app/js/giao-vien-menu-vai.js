/**
 * giao-vien-menu-vai.js — Nhóm Lớp học trong menu tài khoản học sinh/người lớn.
 * Dùng state/api/loadParentContext của giao diện chính; gv_resume và gv_parent_requests chỉ đọc.
 * Chưa xác định vai thì ẩn mục người lớn; không để học sinh thấy chọn vai giáo viên.
 * Theo docs/giao-viec/2026-10-07_giao-dien-khu-giao-vien.md mục 4; quyền do server kiểm lại.
 */
"use strict";
let teacherMenuSequence = 0;

/** Tải sau khi bấm ảnh đại diện; không gửi yêu cầu vai người lớn cho khách. */
async function teacherAccountMenu() {
  const ticket = ++teacherMenuSequence;
  const adultGroup = document.querySelector("#teacher-adult-menu");
  adultGroup.hidden = true;
  if (state.isGuest || !state.user) return;
  const username = state.user.username;
  if (state.parentContext === undefined) await loadParentContext();
  if (!state.parentContext || ticket !== teacherMenuSequence || state.user?.username !== username) return;
  try {
    const [resume, requests] = await Promise.all([api("gv_resume"), api("gv_parent_requests")]);
    if (ticket !== teacherMenuSequence || state.user?.username !== username) return;
    const english = state.lang === "en";
    const teacher = adultGroup.querySelector("[data-teacher-adult-link]");
    teacher.textContent = resume.teacher
      ? english
        ? "Teacher workspace"
        : "Trang giáo viên"
      : english
        ? "Register to teach on iMath"
        : "Đăng ký dạy trên iMath";
    const consent = adultGroup.querySelector("[data-teacher-consent-link]");
    const pending = requests.requests.filter((row) => !row.consent_at).length;
    consent.hidden = !pending;
    consent.textContent = english ? "Approve your child's class" : "Đồng ý cho con vào lớp";
    if (pending) consent.insertAdjacentHTML("beforeend", '<span class="teacher-menu-dot" aria-label="Có lời mời"></span>');
    adultGroup.hidden = false;
  } catch (_) {
    // Phiên người lớn có thể vừa hết hạn; không suy đoán vai từ localStorage hoặc tên tài khoản.
    adultGroup.hidden = true;
  }
}
document.addEventListener("click", (event) => {
  if (event.target.closest("#account-toggle")) teacherAccountMenu();
});
