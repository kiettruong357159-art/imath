/**
 * tai-khoan-hoc-tap.js — Tiến độ, đổi lớp và hộp xác nhận mở tuần/tác vụ phụ huynh.
 * Dùng tai-khoan.js, tai-khoan-phu-huynh.js, i18n.js; nạp trước hai renderer tài khoản.
 * API: student_change_own_grade, student_unlock_own_week, parent_ack_grade_history.
 * Theo giao-viec/2026-10-08_giao-vien-tien-ich-dot3.md; dữ liệu lịch sử chỉ dành cho gia đình.
 */
"use strict";

/** Hai lớp màu biểu diễn tuần đã làm và đã mở; số luôn lấy từ máy chủ. */
function accountWeekProgressHtml(unlock = {}) {
  const done = Math.max(0, Math.min(35, Number(unlock?.done_week || 0)));
  const opened = Math.max(done, Math.min(35, Number(unlock?.open_until || 1)));
  return `<div class="account-progress-block"><p><strong>${uiText("Tiến độ 35 tuần")}</strong>
    <span>${uiText("Đã làm")}: ${done}/35 · ${uiText("Đã mở")}: ${opened}/35</span></p>
    <div class="account-child-progress" role="img" aria-label="${uiText("Đã làm")}: ${done}; ${uiText("Đã mở")}: ${opened}">
      <span style="width:${opened / 35 * 100}%"></span><b style="width:${done / 35 * 100}%"></b></div></div>`;
}

/** Ai đổi và thời điểm đều được escape; không hiển thị actor_id kỹ thuật cho trẻ. */
function accountGradeHistoryHtml(history = []) {
  if (!history.length) return "";
  const actors = { student: "Học sinh", parent: "Phụ huynh", admin: "Quản trị" };
  return `<details class="account-grade-history"><summary>${uiText("Lịch sử đổi lớp")}</summary>
    <ul>${history.map((row) => `<li><strong>${uiText(actors[row.actor_type] || "Quản trị")}</strong> ·
      ${uiText("Lớp")} ${Number(row.old_grade) || "—"} → ${uiText("Lớp")} ${Number(row.new_grade)} ·
      <time>${escapeHtml(row.created_at || "")}</time></li>`).join("")}</ul></details>`;
}

/** Form tách khỏi form hồ sơ, không lồng form gây trình duyệt nộp nhầm thông tin. */
function accountOwnLearningHtml(account) {
  const grade = Number(account.grade_level);
  const grades = SUPPORTED_GRADE_LEVELS.filter((value) => value !== grade);
  const limitReached = account.grade_change_usage?.remaining === 0;
  return `${accountWeekProgressHtml(account.unlock_state)}<section class="account-child-learning">
    <h3>${uiText("Học tập")}</h3><p>${uiText("Lớp đang học")}: <strong>${uiText(`Lớp ${grade}`)}</strong></p>
    ${accountGradeChangeUsageHtml(account.grade_change_usage)}
    <form class="account-self-grade-form" data-grade-limit-reached="${limitReached}">
      <label>${uiText("Đổi sang lớp")}<select name="grade_level" required ${limitReached ? "disabled" : ""}>
        <option value="">${uiText("Chọn lớp")}</option>${grades.map((value) =>
        `<option value="${value}">${uiText(`Lớp ${value}`)}</option>`).join("")}</select>
        <small>${uiText("Kết quả và tiến độ lớp cũ vẫn được giữ.")}</small></label>
      <button class="outline" type="submit" disabled>${uiText("Chuyển lớp")}</button>
      <p class="account-form-status" role="status"></p></form>
    <form class="account-self-unlock-form"><label>${uiText("Mở lộ trình đến")}
      <select name="unlock_week">${parentUnlockWeekOptions(account.unlock_state)}</select>
      <small>${uiText("Chỉ mở thêm, không khóa lại.")}</small></label>
      <button class="primary" type="submit">${uiText("Mở")}</button></form>
    <small>${uiText("Mở lộ trình cần nhập lại mật khẩu tài khoản.")}</small></section>
    ${accountGradeHistoryHtml(account.grade_history)}`;
}

/** Học sinh và phụ huynh thấy cùng hạn mức do máy chủ trả; không tự đếm 30 dòng lịch sử. */
function accountGradeChangeUsageHtml(usage) {
  if (!usage) return "";
  const { limit, used, remaining } = usage;
  const message = remaining === 0
    ? "Đã hết lượt đổi lớp. Muốn đổi thêm, phụ huynh liên hệ iMath."
    : `Còn ${remaining} lần đổi lớp.`;
  return `<p class="account-grade-change-usage"><small>${uiText(`Đã đổi lớp ${Math.min(used, limit)}/${limit} lần.`)}
    ${uiText(message)}</small></p>`;
}

/** Chấm đỏ chỉ xuất hiện lần đầu xem sau một lần học sinh tự đổi lớp. */
async function accountAcknowledgeGradeHistory() {
  for (const child of state.parentContext?.children || []) {
    if (!child.grade_change_unread) continue;
    try {
      await api("parent_ack_grade_history", { username: child.username,
        last_seen_id: Math.max(0, ...(child.grade_history || []).map((row) => Number(row.id))) });
      child.grade_change_unread = false;
    } catch (_) { /* Lần tải sau vẫn hiện chấm đỏ nếu máy chủ chưa ghi nhận. */ }
  }
}

/** Dialog native giữ focus/bàn phím Esc; mọi tác vụ vẫn do listener API hiện có xử lý. */
function accountOpenDialog(title, body) {
  document.querySelector("#account-action-dialog")?.remove();
  const dialog = document.createElement("dialog");
  dialog.id = "account-action-dialog";
  dialog.className = "account-action-dialog";
  dialog.setAttribute("aria-labelledby", "account-dialog-title");
  dialog.innerHTML = `<div class="account-dialog-heading"><h2 id="account-dialog-title">${title}</h2>
    <button class="outline" type="button" data-account-dialog-close>${uiText("Huỷ")}</button></div>${body}`;
  document.querySelector("#content").append(dialog);
  dialog.showModal();
  return dialog;
}

/** Không đặt sẵn ba form mật khẩu trên trang; autocomplete new-password tránh điền mật khẩu phụ huynh. */
function accountOpenParentDialog(kind) {
  const labels = { add: "Thêm con", link: "Gắn tài khoản có sẵn", password: "Đặt lại mật khẩu" };
  const children = (state.parentContext?.children || []).map((child) =>
    `<option value="${escapeHtml(child.username)}">${escapeHtml(child.display_name)}</option>`).join("");
  const fields = {
    add: `<label>${uiText("Tên của con")}<input name="display_name" minlength="2" maxlength="30" required></label>
      <label>${uiText("Lớp đang học")}<select name="grade_level">${parentGradeOptions(1)}</select></label>`,
    link: `<label>${uiText("Tên đăng nhập")}<input name="username" autocomplete="off" required></label>
      <label>${uiText("Mật khẩu của con")}<input name="password" type="password" autocomplete="new-password" required></label>`,
    password: `<label>${uiText("Chọn con")}<select name="username" required><option value=""></option>${children}</select></label>
      <label>${uiText("Mật khẩu mới cho con")}<input name="new_password" type="password" autocomplete="new-password"
        minlength="6" required></label>`,
  };
  if (!fields[kind]) return;
  accountOpenDialog(uiText(labels[kind]), `<form id="account-parent-${kind}" class="account-form compact" autocomplete="off">
    ${fields[kind]}<p class="account-form-status" role="status"></p>
    <button class="primary" type="submit">${uiText(kind === "link" ? "Gắn tài khoản" : labels[kind])}</button></form>`);
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-account-dialog-close]")) document.querySelector("#account-action-dialog")?.close();
  const button = event.target.closest("[data-account-parent-dialog]");
  if (button) accountOpenParentDialog(button.dataset.accountParentDialog);
});

/** Nút ghi rõ lớp đích để thao tác lưu chính là xác nhận, không cần thêm hộp thoại. */
document.addEventListener("change", (event) => {
  const select = event.target;
  if (!select.matches(".account-self-grade-form select")) return;
  const button = select.form.querySelector('[type="submit"]');
  button.disabled = select.form.dataset.gradeLimitReached === "true" || !select.value;
  button.textContent = uiText(select.value ? `Chuyển sang Lớp ${Number(select.value)}` : "Chuyển lớp");
});

const ACCOUNT_GRADE_NOTICE_KEY = "imath-grade-change-notice";

/** Chỉ lưu thông báo trong tab; không lưu mật khẩu hoặc dữ liệu học tập vào trình duyệt. */
function accountShowGradeChangeNotice() {
  let notice;
  try {
    notice = JSON.parse(sessionStorage.getItem(ACCOUNT_GRADE_NOTICE_KEY) || "null");
    sessionStorage.removeItem(ACCOUNT_GRADE_NOTICE_KEY);
  } catch (_) { return; }
  if (!notice || notice.username !== state.user?.username || notice.grade !== state.grade ||
      !SUPPORTED_GRADE_LEVELS.includes(notice.oldGrade) || Date.now() - notice.createdAt > 300000) return;
  const banner = document.createElement("p");
  banner.className = "account-grade-notice";
  banner.setAttribute("role", "status");
  banner.textContent = `${uiText(`Đã chuyển từ Lớp ${notice.oldGrade} sang Lớp ${notice.grade}.`)} ${uiText("Kết quả và tiến độ lớp cũ vẫn được giữ.")}`;
  document.querySelector("#content")?.prepend(banner);
}

/** Đổi lớp trực tiếp; chỉ tác vụ mở tuần mới gửi mật khẩu từ hộp xác nhận. */
document.addEventListener("submit", async (event) => {
  const form = event.target;
  if (form.matches(".account-self-grade-form")) {
    event.preventDefault();
    const select = form.elements.grade_level;
    const grade = Number(select.value);
    if (!SUPPORTED_GRADE_LEVELS.includes(grade)) return;
    const button = form.querySelector('[type="submit"]');
    if (button.disabled) return;
    button.disabled = true;
    select.disabled = true;
    form.querySelector(".account-form-status").textContent = "";
    try {
      const result = await api("student_change_own_grade", { grade_level: grade });
      applySavedAccount(result.account);
      const notice = { username: state.user.username, oldGrade: result.old_grade_level,
        grade: result.grade_level, createdAt: Date.now() };
      try { sessionStorage.setItem(ACCOUNT_GRADE_NOTICE_KEY, JSON.stringify(notice)); }
      catch (_) {
        // Trình duyệt chặn bộ nhớ: vẫn báo đã lưu, không biến thành lỗi nghiệp vụ.
        window.alert(uiText(`Đã chuyển từ Lớp ${notice.oldGrade} sang Lớp ${notice.grade}.`));
      }
      location.reload();
    } catch (error) {
      form.querySelector(".account-form-status").textContent = accountErrorMessage(error);
      // Hạn mức có thể đã được dùng hết ở tab khác; giữ form khoá theo lỗi máy chủ.
      const limitReached = error.code === "STUDENT_GRADE_CHANGE_LIMIT";
      form.dataset.gradeLimitReached = String(limitReached);
      button.disabled = limitReached;
      select.disabled = limitReached;
    }
    return;
  }
  if (form.matches(".account-self-unlock-form")) {
    event.preventDefault();
    const value = Number(form.elements.unlock_week.value);
    accountOpenDialog(uiText("Xác nhận thay đổi"), `<form id="account-self-confirm" class="account-form compact"
      data-value="${value}">
      <p>${uiText("Mở lộ trình đến")}: ${value}. ${uiText("Kết quả lớp cũ vẫn giữ.")}</p>
      <label>${uiText("Nhập lại mật khẩu tài khoản để xác nhận:")}<input type="password" name="password"
        autocomplete="current-password" required></label><p class="account-form-status" role="status"></p>
      <button class="primary" type="submit">${uiText("Xác nhận")}</button></form>`);
  }
  if (form.id !== "account-self-confirm") return;
  event.preventDefault();
  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  try {
    const result = await api("student_unlock_own_week", { unlock_week: Number(form.dataset.value),
      password: form.elements.password.value });
    form.elements.password.value = "";
    applySavedAccount(result.account);
    await renderAccount();
  } catch (error) {
    form.querySelector(".account-form-status").textContent = accountErrorMessage(error);
  } finally { button.disabled = false; }
});
