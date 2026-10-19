/**
 * tai-khoan-phu-huynh.js — Thẻ Phụ huynh trong Tài khoản: chuyển con, đổi lớp, mở tuần và quản lý con.
 * Dùng: core.js (state, api), cai-dat-ngon-ngu.js (uiText), tai-khoan.js (renderAccount).
 * API gọi: parent_student_context, parent_start_child, parent_get/update_child_profile,
 * parent_get/set_child_unlock, parent_set_child_grade.
 * Quy tắc nghiệp vụ: phụ huynh chỉ thao tác con đã gắn; đổi lớp không xóa dữ liệu lớp cũ.
 */
"use strict";

const PARENT_AVAILABLE_GRADES = Object.freeze(Array.from({ length: 12 }, (_, index) => index + 1));
let parentContextLoadPromise = null;

/** Tải các con và trạng thái mở tuần; máy chủ tự kiểm lại quan hệ phụ huynh–con. */
async function loadParentContext() {
  // Menu vai và trang Tài khoản cùng tải khi vừa đăng nhập. Dùng chung một lượt
  // để phản hồi cũ không vẽ lại chấm đỏ sau khi đã ghi nhận phụ huynh xem lịch sử.
  if (parentContextLoadPromise) return parentContextLoadPromise;
  parentContextLoadPromise = loadParentContextOnce();
  try { await parentContextLoadPromise; }
  finally { parentContextLoadPromise = null; }
}

/** Nạp một lượt; caller gộp các lời gọi đồng thời, các lần sửa con vẫn tải lại mới. */
async function loadParentContextOnce() {
  try {
    const context = await api("parent_student_context");
    const unlockResults = await Promise.allSettled(
      (context.children || []).map((child) =>
        api("parent_get_child_unlock", { username: child.username, lang: state.lang }),
      ),
    );
    context.children = (context.children || []).map((child, index) => ({
      ...child,
      unlock: unlockResults[index]?.status === "fulfilled" ? unlockResults[index].value.grade : null,
    }));
    try { context.teacherReminders = (await api("gv_parent_assignments")).assignments.filter((item) => item.reminder_at); }
    catch (_) { context.teacherReminders = []; }
    state.parentContext = context;
  } catch (_) {
    state.parentContext = null;
  }
}

/** Chỉ cho chọn mức hiện tại hoặc tuần cao hơn vì phụ huynh không được khóa lại tuần đã mở. */
function parentUnlockWeekOptions(unlock) {
  const openUntil = Number(unlock?.open_until || 1);
  const selectedWeek = Number(unlock?.unlock_week || openUntil);
  return Array.from({ length: 35 }, (_, index) => {
    const week = index + 1;
    return `<option value="${week}" ${week === selectedWeek ? "selected" : ""} ${week < openUntil ? "disabled" : ""}>${uiText(`Tuần ${week}`)}</option>`;
  }).join("");
}

/** Không hiện định danh imath_* do luồng Google tự sinh; tài khoản tự đặt vẫn cần để đăng nhập máy khác. */
function accountVisibleChildUsername(child) {
  const username = String(child?.username || "").trim();
  if (!username || /^imath_/i.test(username)) return "";
  return `<small>${uiText("Tên đăng nhập:")} ${escapeHtml(username)}</small>`;
}

function parentGradeOptions(selectedGrade) {
  return PARENT_AVAILABLE_GRADES.map((grade) =>
    `<option value="${grade}" ${grade === Number(selectedGrade) ? "selected" : ""}>${uiText(`Lớp ${grade}`)}</option>`,
  ).join("");
}

/** Thẻ con theo mẫu đã duyệt: thông tin, tiến độ, học tập và bốn lối vào rõ ràng. */
function accountParentChildRow(child) {
  const username = escapeHtml(child.username);
  const current = state.parentContext?.current_username === child.username;
  const limitReached = child.grade_change_usage?.remaining === 0;
  const lastWord = String(child.display_name || "?").trim().split(/\s+/).pop();
  const avatar = /^[a-z0-9_/-]+\.svg$/i.test(child.avatar || "")
    ? `<img src="${accountAvatarUrl(child.avatar)}" alt="">`
    : `<span>${escapeHtml(lastWord.slice(0, 1).toUpperCase())}</span>`;
  return `<article class="account-parent-child account-child-v3">
    <header class="account-child-header"><div class="account-child-avatar">${avatar}</div>
      <div class="account-parent-child-copy"><h3>${escapeHtml(child.display_name)}</h3>
        <small>${uiText(`Lớp ${Number(child.grade_level)}`)}</small>${accountVisibleChildUsername(child)}</div>
      <span class="account-child-status ${current ? "account-current-child" : ""}">${uiText(current ? "Đang học" : "Sẵn sàng vào học")}</span></header>
    ${accountWeekProgressHtml(child.unlock)}
    <section class="account-child-learning"><h3>${uiText("Học tập")}</h3>
      ${accountGradeChangeUsageHtml(child.grade_change_usage)}
      <form class="account-parent-grade-form" data-parent-grade-child="${username}" data-grade-limit-reached="${limitReached}">
        <label>${uiText("Lớp đang học")}<select name="grade_level" ${limitReached ? "disabled" : ""}>${parentGradeOptions(child.grade_level)}</select>
          <small>${uiText("Kết quả lớp cũ vẫn giữ.")}</small></label>
        <button class="outline" type="submit" ${limitReached ? "disabled" : ""}>${uiText("Đổi lớp")}</button>
        <small class="account-form-status" role="status"></small></form>
      <form class="account-parent-unlock-form" data-parent-unlock-child="${username}">
        <label>${uiText("Mở lộ trình đến")}<select name="unlock_week">${parentUnlockWeekOptions(child.unlock)}</select>
          <small>${uiText("Chỉ mở thêm, không khóa lại.")}</small></label>
        <input type="hidden" name="grade_level" value="${Number(child.grade_level)}">
        <button class="primary" type="submit">${uiText("Mở lộ trình")}</button>
        <small class="account-form-status" data-parent-unlock-status="${username}" role="status"></small></form>
    </section><section class="account-child-view"><h3>${uiText("Xem và sửa")}</h3>
      <div class="account-child-view-grid">
        ${accountChildAction("bar_chart", "Xem báo cáo", "data-parent-report-child", username)}
        ${accountChildAction("clock", "Lịch sử làm bài", "data-parent-history-child", username)}
        ${accountChildAction("avatar", "Sửa thông tin bé", "data-parent-profile-child", username)}
        ${accountChildAction("graduation_cap", "Vào học với tài khoản con", "data-parent-start-child", username)}
      </div></section>
      ${child.grade_change_unread ? `<p class="account-child-history-note"><span aria-hidden="true">●</span>
        ${uiText("Con vừa đổi lớp")}</p>` : ""}
      ${accountGradeHistoryHtml(child.grade_history)}
    </article>`;
}

/** Thuộc tính thao tác chỉ do code gọi, username đã escape trước khi đưa vào HTML. */
function accountChildAction(image, label, attribute, username) {
  return `<button type="button" class="account-child-card" ${attribute}="${username}">
    ${icon(image)}<strong>${uiText(label)}</strong></button>`;
}

/** Các form quản lý chỉ dựng trong dialog sau khi bấm, tránh trang dài và tự điền mật khẩu. */
function accountParentCard() {
  const context = state.parentContext;
  if (!context) return "";
  const tools = [["add", "graduation_cap", "Thêm con"], ["link", "avatar", "Gắn tài khoản có sẵn"],
    ["password", "lock", "Đặt lại mật khẩu"]];
  return `<section class="account-panel-card account-parent-panel">
    <div class="account-panel-heading"><span>${icon("avatar")}</span><div><h2>${uiText("Phụ huynh")}</h2>
      <p>${escapeHtml(context.parent.display_name)} · ${escapeHtml(context.parent.email)}</p></div></div>
    ${(context.teacherReminders || []).map((item) => `<p class="teacher-reminder"
      data-teacher-reminder-close="${Date.parse(item.closes_at.replace(" ", "T") + "+07:00")}">
      ${escapeHtml(item.display_name)} · ${uiText("Nhắc nộp bài:")} «${escapeHtml(item.name)}» —
      ${escapeHtml(imathTeacherDate(item.closes_at))}</p>`).join("")}
    <div class="account-parent-children">${(context.children || []).map(accountParentChildRow).join("")}</div>
    <div class="account-parent-tools">${tools.map(([key, image, label]) =>
      `<button type="button" class="account-child-card" data-account-parent-dialog="${key}">
        ${icon(image)}<strong>${uiText(label)}</strong></button>`).join("")}</div>
    <div id="account-parent-report"></div></section>`;
}

/** Dựng câu xác nhận từ mẫu i18n để tên con được escape riêng ở HTML và giữ nguyên trong hộp thoại. */
function parentGradeConfirmation(child, grade) {
  const template = uiText("Đổi {name} sang Lớp {grade}? Kết quả các lớp trước vẫn giữ.");
  return template.replace("{name}", child.display_name).replace("{grade}", String(grade));
}
