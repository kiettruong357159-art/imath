/**
 * giao-vien-nhac-bai.js — Tự ẩn lời nhắc nội bộ khi tới hạn ngay cả khi trang còn mở.
 * Dùng dữ liệu hạn của gv_student_list/gv_parent_assignments; không tạo quyền hoặc gửi tin ngoài.
 * Nạp trước adapter học sinh/phụ huynh; lời nhắc sau nộp do API lọc và cập nhật danh sách.
 * Quy tắc: docs/giao-viec/2026-10-07_giao-vien-tien-ich-dot1.md, mục 5.
 */
"use strict";
(() => {
  // setTimeout của trình duyệt dùng số nguyên 32 bit; hạn xa hơn được kiểm lại sau mốc này.
  const MAX_TIMER_MS = 2147483647;
  let timer;
  let pendingUntil = 0;
  let pendingOwner = "";
  function setAssignments(items) {
    pendingOwner = state.user?.username || "";
    pendingUntil = Math.max(0, ...items.filter(item => !item.submitted_at)
      .map(item => Date.parse(item.closes_at.replace(" ", "T") + "+07:00"))
      .filter(Number.isFinite));
    refresh();
  }
  function refresh() {
    clearTimeout(timer);
    const now = Date.now(), future = [];
    document.querySelectorAll('[data-teacher-reminder-close]').forEach((element) => {
      const deadline = Number(element.dataset.teacherReminderClose);
      element.hidden = deadline <= now;
      if (deadline > now) future.push(deadline);
    });
    document.querySelectorAll('#account-toggle,[data-account-tab="assignments"],[data-account-section="assignments"]').forEach((button) => {
      const deadline = !state.isGuest && state.user?.username === pendingOwner ? pendingUntil : 0;
      button.classList.toggle('teacher-has-reminder', deadline > now);
      if (deadline > now) button.setAttribute('aria-description', uiText('Có bài chưa nộp'));
      else button.removeAttribute('aria-description');
      if (deadline > now) future.push(deadline);
    });
    if (future.length) timer = setTimeout(refresh, Math.min(MAX_TIMER_MS, Math.max(1, Math.min(...future) - now)));
  }
  window.IMATH_TEACHER_REMINDERS = { refresh, setAssignments };
  document.addEventListener('DOMContentLoaded', () => {
    // Renderer dựng lại nội dung sau fetch/đổi trang; chỉ quan sát cây, không quan sát thuộc tính hidden.
    new MutationObserver(refresh).observe(document.body, { childList: true, subtree: true });
    refresh();
  });
  document.addEventListener('visibilitychange', refresh);
})();
