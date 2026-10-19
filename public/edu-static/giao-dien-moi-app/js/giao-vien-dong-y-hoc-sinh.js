/**
 * giao-vien-dong-y-hoc-sinh.js — Ô tích lúc vào lớp, đồng ý/thu hồi một chạm ở Bài cô giao.
 * Dùng giao-vien-hoc-sinh.js/core.js/i18n.js; API gv_student_join/list/consent kiểm chính chủ.
 * Không Google, không hộp xác nhận hoặc nhập lại mật khẩu; quyền được quyết định ở server.
 * Quy tắc: bản đơn giản và CLAUDE KIỂM ĐỢT 2 ngày 09/10 trong giao-viec/khu-gv-hoan-thien.
 */
"use strict";

/** Chỉ hiển thị lớp của em do API trả; tên lớp luôn escape, không nhận username/actor từ DOM. */
function teacherStudentConsentHtml(memberships) {
  return memberships.map((member) => `<div class="teacher-consent-row">
    <strong>${escapeHtml(member.class_name)}</strong><p>${member.consented ? uiText("Đã đồng ý cho giáo viên xem kết quả.")
      : uiText("Lớp đang chờ bố mẹ đồng ý.")}</p>
    ${member.consented || member.can_accept ? `<button class="outline" type="button" data-teacher-consent="${Number(member.id)}"
      data-accepted="${member.consented ? "0" : "1"}">${uiText(member.consented ? "Thu hồi" : "Đồng ý")}</button>` : ""}
    </div>`).join("");
}

/** Thay đúng thẻ đã bấm, tránh phản hồi đến muộn xoá bài đang làm hoặc tài khoản vừa chuyển. */
async function teacherRefreshConsentCard() {
  const card = document.querySelector(".gv-home-card"), username = state.user?.username;
  if (!card) return;
  const showJoin = !!card.querySelector("#teacher-join-form");
  const result = await api("gv_student_list");
  if (card !== document.querySelector(".gv-home-card") || username !== state.user?.username) return;
  card.outerHTML = teacherStudentCard(result.assignments, showJoin, result.memberships || []);
  teacherReminderBadge(result.assignments);
}

document.addEventListener("submit", async (event) => {
  if (event.target.id !== "teacher-join-form") return;
  event.preventDefault();
  try {
    const form = new FormData(event.target);
    const result = await api("gv_student_join", { code: form.get("code"), parent_consent: form.has("parent_consent") });
    await teacherRefreshConsentCard();
    $("#teacher-home-error").textContent = uiText(result.consent_required
      ? "Đã vào lớp. Bố mẹ có thể đồng ý ngay tại đây." : "Đã vào lớp.");
  } catch (error) { showError("#teacher-home-error", error); }
});

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-teacher-consent]");
  if (!button) return;
  button.disabled = true;
  try {
    await api("gv_student_consent", { member_id: Number(button.dataset.teacherConsent), accepted: button.dataset.accepted === "1" });
    await teacherRefreshConsentCard();
  } catch (error) { showError("#teacher-home-error", error); button.disabled = false; }
});
