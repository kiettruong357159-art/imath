/**
 * tai-khoan.js — Trang Tài khoản: Thông tin bé, báo cáo, lịch sử, cài đặt và đổi mật khẩu.
 * Dùng: core.js (state, api), bao-cao-huy-hieu.js (renderReport), speech.js.
 * API gọi: get/update_own_account, parent_get/update_child_profile và các action cài đặt tài khoản.
 * Quy tắc nghiệp vụ: trang "Tài khoản của em", user duyệt ngày 30/09/2026.
 */
"use strict";

const ACCOUNT_ICON_BASE = "giao-dien-moi/icon/";

/** Avatar cũ nằm trong svg/, còn bộ Cú iMath mới nằm trong avatar/. */
function accountAvatarUrl(avatar) {
  const safe = String(avatar || "avatar.svg");
  return `${ACCOUNT_ICON_BASE}${safe.includes("/") ? safe : `svg/${safe}`}`;
}

/** Dựng các thẻ theo thứ tự đã duyệt; mục Phụ huynh chỉ có khi phiên Google còn hiệu lực. */
function accountSectionCards() {
  const cards = [
    ["profile", "avatar", "Thông tin bé", "Tên, ngày sinh, ảnh đại diện và lớp đang học"],
    ["report", "bar_chart", "Báo cáo học tập", "Năng lực, huy hiệu và lịch ôn của em"],
    ["history", "clock", "Lịch sử làm bài", "Điểm, thời gian và các bài em đã làm"],
    ["assignments", "document", "Bài cô/thầy giao", "Lớp học, bài được giao và kết quả của em"],
    ["favorites", "star", "Câu hỏi yêu thích", "Những câu em đã lưu để ôn lại"],
    ["settings", "settings", "Cài đặt", "Ngôn ngữ mặc định và đọc to"],
    ["password", "lock", "Đổi mật khẩu", "Giữ tài khoản của em an toàn"],
  ];
  if (state.parentContext)
    cards.push(["parent", "avatar", "Phụ huynh", "Quản lý các tài khoản con"]);
  return `<div class="account-section-grid">${cards
    .map(
      ([key, image, title, note]) =>
        `<button type="button" class="account-section-card ${state.accountTab === key ? "active" : ""}" data-account-section="${key}">
          <span>${icon(image)}</span><strong>${title}</strong><small>${note}</small>
        </button>`,
    )
    .join("")}</div>`;
}

/** Dùng cùng một form cho chính học sinh và cho phụ huynh sửa thông tin con đã gắn. */
function renderProfileCard(account, options = {}) {
  const parentMode = options.parent === true;
  const formId = parentMode ? "account-child-profile-form" : "account-profile-form";
  const avatarName = parentMode ? "account-child-avatar" : "account-avatar";
  const avatars = (account.allowed_avatars || []).map((avatar) => {
    const safeAvatar = escapeHtml(avatar);
    return `<label class="account-avatar-choice ${account.avatar === avatar ? "selected" : ""}">
      <input type="radio" name="${avatarName}" value="${safeAvatar}" ${account.avatar === avatar ? "checked" : ""}>
      <img src="${accountAvatarUrl(safeAvatar)}" alt="">
    </label>`;
  });
  return `<section class="account-panel-card">
    <div class="account-panel-heading"><span>${icon("avatar")}</span><div><h2>${uiText("Thông tin bé")}</h2>
      <p>${uiText("Chọn thông tin và hình em muốn nhìn thấy trên iMath.")}</p></div></div>
    <form id="${formId}" class="account-form" data-current-avatar="${escapeHtml(account.avatar)}"
      ${parentMode ? `data-child-username="${escapeHtml(account.username)}"` : ""}>
      <label>Tên đăng nhập<input value="${escapeHtml(account.username)}" disabled></label>
      <label>${uiText("Tên hiển thị")}<input name="display_name" minlength="2" maxlength="30" value="${escapeHtml(account.display_name)}" required></label>
      <label>${uiText("Ngày sinh")}<input name="birth_date" type="date" value="${escapeHtml(account.birth_date || "")}"></label>
      <label>${uiText("Giới tính")}<select name="gender">
        <option value="" ${!account.gender ? "selected" : ""}>${uiText("Chưa chọn")}</option>
        <option value="male" ${account.gender === "male" ? "selected" : ""}>${uiText("Nam")}</option>
        <option value="female" ${account.gender === "female" ? "selected" : ""}>${uiText("Nữ")}</option>
        <option value="private" ${account.gender === "private" ? "selected" : ""}>${uiText("Không muốn nói")}</option>
      </select></label>
      <fieldset><legend>Ảnh đại diện</legend><div class="account-avatar-list">${avatars.join("")}</div></fieldset>
      <p class="account-form-status" role="status"></p>
      <div class="account-form-actions"><button class="primary" type="submit">${uiText("Lưu thay đổi")}</button>
        <button class="outline" type="button" data-account-profile-cancel="${parentMode ? "parent" : "own"}">${uiText("Huỷ")}</button></div>
    </form>
    ${!parentMode ? accountOwnLearningHtml(account) : ""}
  </section>`;
}

function renderSettingsCard(account) {
  return `<section class="account-panel-card">
    <div class="account-panel-heading"><span>${icon("settings")}</span><div><h2>Cài đặt</h2><p>Cài đặt này được nhớ theo tài khoản của em.</p></div></div>
    <form id="account-settings-form" class="account-form">
      <label>Ngôn ngữ mặc định<select id="account-language">
        <option value="vi" ${account.preferred_lang === "vi" ? "selected" : ""}>Tiếng Việt</option>
        <option value="en" ${account.preferred_lang === "en" ? "selected" : ""}>English</option>
        <option value="bi" ${account.preferred_lang === "bi" ? "selected" : ""}>Song ngữ</option>
      </select></label>
      <label class="account-switch"><input id="account-speech" type="checkbox" ${account.speech_enabled ? "checked" : ""}>
        <span><strong>Đọc to</strong><small>Hiện nút 🔊 trong đề bài, gợi ý và lời giải.</small></span>
      </label>
      <p id="account-settings-status" class="account-form-status" role="status"></p>
      <button class="primary" type="submit">Lưu cài đặt</button>
    </form>
  </section>`;
}

function renderPasswordCard() {
  return `<section class="account-panel-card">
    <div class="account-panel-heading"><span>${icon("lock")}</span><div><h2>Đổi mật khẩu</h2><p>Nhớ báo ba mẹ mật khẩu mới nhé.</p></div></div>
    <form id="account-password-form" class="account-form">
      <label>Mật khẩu hiện tại<input id="account-current-password" type="password" autocomplete="current-password" required></label>
      <label>Mật khẩu mới<input id="account-new-password" type="password" autocomplete="new-password" minlength="6" required></label>
      <label>Nhập lại mật khẩu mới<input id="account-confirm-password" type="password" autocomplete="new-password" minlength="6" required></label>
      <small>Mật khẩu mới có ít nhất 6 ký tự và khác mật khẩu hiện tại.</small>
      <p id="account-password-status" class="account-form-status" role="status"></p>
      <button class="primary" type="submit">Đổi mật khẩu</button>
    </form>
  </section>`;
}

/** Tải hồ sơ một lần mỗi phiên; mọi lần lưu thay state bằng payload máy chủ trả về. */
async function loadOwnAccount(force = false) {
  if (!force && state.account) return state.account;
  const result = await api("get_own_account");
  state.account = result.account;
  return state.account;
}

/** Hiện trang tài khoản và phần đang chọn; báo cáo dùng nguyên renderer đã có. */
async function renderAccount() {
  const account = await loadOwnAccount();
  if (state.parentContext === undefined) await loadParentContext();
  if (state.page !== "account") return;
  $("#content").innerHTML = `<p class="eyebrow">Tài khoản của em</p>
    <div class="account-intro"><div><h1 class="page-title">Tài khoản của em</h1>
      <p class="page-sub">Thông tin bé, báo cáo và cài đặt học tập của em ở cùng một nơi.</p></div>
      <img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="Cú iMath"></div>
    ${accountSectionCards()}<div id="account-body"></div>`;
  if (state.accountTab === "profile") $("#account-body").innerHTML = renderProfileCard(account);
  if (state.accountTab === "settings") $("#account-body").innerHTML = renderSettingsCard(account);
  if (state.accountTab === "password") $("#account-body").innerHTML = renderPasswordCard();
  if (state.accountTab === "report") await renderReport("#account-body", true);
  if (state.accountTab === "history") await renderAttemptHistory("#account-body", state.user.username, false);
  if (state.accountTab === "assignments") await teacherRenderStudentPage("#account-body");
  if (state.accountTab === "favorites") await renderFavorites(true, "#account-body", true);
  if (state.accountTab === "parent") {
    $("#account-body").innerHTML = accountParentCard();
    accountAcknowledgeGradeHistory();
  }
  applyUiLanguage();
}

function accountErrorMessage(error) {
  if (state.lang === "vi") return error.message;
  return {
    DISPLAY_NAME_INVALID: "Display name must be 2–30 characters.",
    AVATAR_INVALID: "Choose an available avatar.",
    BIRTH_DATE_INVALID: "Enter a valid date of birth.",
    BIRTH_DATE_AGE_INVALID: "The child must be between 4 and 20 years old.",
    GENDER_INVALID: "Choose a valid gender option.",
    CURRENT_PASSWORD_INCORRECT: "Your current password is incorrect.",
    PASSWORD_CHANGE_LOCKED: "Too many incorrect attempts. Try again in 15 minutes.",
    NEW_PASSWORD_INVALID: "The new password must have at least 6 characters and differ from the current password.",
    PARENT_UNLOCK_CANNOT_REDUCE: "Parents can open more weeks but cannot reduce the current access.",
    PARENT_UNLOCK_INVALID: "Choose a valid week.",
    CHILD_GRADE_ACCESS_DENIED: "You can only unlock the child's current grade.",
    PARENT_UNLOCK_FAILED: "Could not unlock the child's learning path.",
    PARENT_CHILD_LIMIT: "Each parent can manage up to 10 child accounts.",
    PARENT_GRADE_INVALID: "Choose an available grade.",
    PARENT_GRADE_CHANGE_FAILED: "Could not change the child's grade.",
    STUDENT_CHANGE_LOCKED: "Too many incorrect attempts. Try again in 15 minutes.",
    STUDENT_PASSWORD_INCORRECT: "The password is incorrect.",
    STUDENT_GRADE_STEP: "You can change only one grade at a time.",
    STUDENT_GRADE_INVALID: "The grade is invalid.",
    STUDENT_GRADE_CHANGE_LIMIT: "All 10 grade changes have been used. A parent can contact iMath for help.",
    STUDENT_UNLOCK_INVALID: "The week is invalid.",
    STUDENT_UNLOCK_CANNOT_REDUCE: "You can only open more weeks.",
  }[error.code] || error.message;
}

/** Đồng bộ tên và avatar vừa lưu lên nút tài khoản mà không cần đăng nhập lại. */
function applySavedAccount(account) {
  state.account = account;
  state.user = { ...state.user, ...account };
  $("#account-name").textContent = account.display_name;
  $("#account-detail").textContent = account.display_name;
  $("#account-toggle img").src = accountAvatarUrl(account.avatar);
  window.IMATH_SPEECH_ENABLED = account.speech_enabled !== false;
  window.IMATH_SPEECH?.refreshButtons();
}

/** Gắn sự kiện ủy quyền vì từng thẻ được dựng lại khi người dùng chuyển phần. */
function bindAccountEvents() {
  $("#content").addEventListener("click", async (event) => {
    const cancelProfile = event.target.closest("[data-account-profile-cancel]");
    if (cancelProfile) {
      if (cancelProfile.dataset.accountProfileCancel === "parent") $("#account-parent-report").innerHTML = "";
      else $("#account-body").innerHTML = renderProfileCard(state.account);
      return;
    }
    const profileChild = event.target.closest("[data-parent-profile-child]");
    if (profileChild) {
      const target = $("#account-parent-report");
      target.innerHTML = `<div class="band">${uiText("Đang tải...")}</div>`;
      try {
        const result = await api("parent_get_child_profile", {
          username: profileChild.dataset.parentProfileChild,
        });
        target.innerHTML = renderProfileCard(result.account, { parent: true });
      } catch (error) {
        target.textContent = accountErrorMessage(error);
      }
      return;
    }
    const startChild = event.target.closest("[data-parent-start-child]");
    if (startChild) {
      startChild.disabled = true;
      try {
        await api("parent_start_child", { username: startChild.dataset.parentStartChild });
        location.reload();
      } catch (error) {
        startChild.disabled = false;
        window.alert(accountErrorMessage(error));
      }
      return;
    }
    const reportChild = event.target.closest("[data-parent-report-child]");
    if (reportChild) {
      const child = state.parentContext?.children?.find(
        (item) => item.username === reportChild.dataset.parentReportChild,
      );
      if (!child) return;
      await renderParentCompetencyReport(child, state.term === 2 ? "term2" : "term1");
      return;
    }
    const historyChild = event.target.closest("[data-parent-history-child]");
    if (historyChild) {
      const child = state.parentContext?.children?.find(
        (item) => item.username === historyChild.dataset.parentHistoryChild,
      );
      if (!child) return;
      await renderAttemptHistory("#account-parent-report", child.username, true);
      return;
    }
    const section = event.target.closest("[data-account-section]");
    if (!section) return;
    state.accountTab = section.dataset.accountSection;
    await renderAccount();
  });
  $("#content").addEventListener("submit", async (event) => {
    if (!event.target.matches(
      "#account-profile-form,#account-child-profile-form,#account-settings-form,#account-password-form,#account-parent-add,#account-parent-link," +
    "#account-parent-password,.account-parent-grade-form,.account-parent-unlock-form",
    )) return;
    event.preventDefault();
    const submit = event.target.querySelector('button[type="submit"]');
    if (submit) submit.disabled = true;
    try {
      if (event.target.id === "account-profile-form") {
        const values = Object.fromEntries(new FormData(event.target));
        const result = await api("update_own_profile", {
          display_name: String(values.display_name || "").trim(),
          // Khi tài khoản còn dùng avatar cũ, không chọn Cú mới vẫn phải giữ nguyên ảnh hiện tại.
          avatar: document.querySelector('input[name="account-avatar"]:checked')?.value || state.account.avatar,
          birth_date: values.birth_date || "",
          gender: values.gender || "",
        });
        applySavedAccount(result.account);
        event.target.querySelector(".account-form-status").textContent = uiText("Đã lưu thay đổi.");
      }
      if (event.target.id === "account-child-profile-form") {
        const values = Object.fromEntries(new FormData(event.target));
        const username = event.target.dataset.childUsername;
        const result = await api("parent_update_child_profile", {
          username,
          display_name: String(values.display_name || "").trim(),
          avatar: document.querySelector('input[name="account-child-avatar"]:checked')?.value
            || event.target.dataset.currentAvatar || "avatar.svg",
          birth_date: values.birth_date || "",
          gender: values.gender || "",
        });
        const child = state.parentContext?.children?.find((item) => item.username === username);
        if (child) Object.assign(child, { display_name: result.account.display_name, avatar: result.account.avatar });
        const profileButton = Array.from(document.querySelectorAll("[data-parent-profile-child]"))
          .find((node) => node.dataset.parentProfileChild === username);
        const row = profileButton?.closest(".account-parent-child");
        // Dựng lại riêng thẻ con để tên/avatar mới cùng cập nhật, giữ nguyên form đang sửa bên dưới.
        if (row && child) row.outerHTML = accountParentChildRow(child);
        event.target.querySelector(".account-form-status").textContent = uiText("Đã lưu thay đổi.");
      }
      if (event.target.id === "account-settings-form") {
        const language = $("#account-language").value;
        const [settings] = await Promise.all([
          api("update_own_settings", { speech_enabled: $("#account-speech").checked }),
          api("set_language_preference", { preferred_lang: language }),
        ]);
        settings.account.preferred_lang = language;
        applySavedAccount(settings.account);
        state.lang = language;
        window.IMATH_I18N?.save(state.user.username, language);
        $("#language-select").value = language;
        await renderAccount();
        $("#account-settings-status").textContent = uiText("Đã lưu cài đặt.");
      }
      if (event.target.id === "account-password-form") {
        const currentPassword = $("#account-current-password").value;
        const newPassword = $("#account-new-password").value;
        if (newPassword !== $("#account-confirm-password").value)
          throw Object.assign(new Error("Mật khẩu nhập lại chưa khớp."), { code: "PASSWORD_CONFIRM_MISMATCH" });
        const result = await api("change_own_password", {
          current_password: currentPassword,
          new_password: newPassword,
        });
        event.target.reset();
        $("#account-password-status").textContent = result.message;
      }
      if (event.target.id === "account-parent-add") {
        const values = Object.fromEntries(new FormData(event.target));
        await api("parent_add_child_and_start", {
          display_name: String(values.display_name || "").trim(),
          grade_level: Number(values.grade_level),
        });
        location.reload();
      }
      if (event.target.id === "account-parent-link") {
        const values = Object.fromEntries(new FormData(event.target));
        await api("parent_link_child", values);
        await loadParentContext();
        await renderAccount();
      }
      if (event.target.id === "account-parent-password") {
        const values = Object.fromEntries(new FormData(event.target));
        await api("parent_reset_child_password", values);
        event.target.reset();
        event.target.querySelector(".account-form-status").textContent = uiText("Đã đặt lại mật khẩu.");
      }
      if (event.target.matches(".account-parent-grade-form")) {
        const values = Object.fromEntries(new FormData(event.target));
        const username = event.target.dataset.parentGradeChild;
        const grade = Number(values.grade_level);
        const child = state.parentContext?.children?.find((item) => item.username === username);
        if (!child || !window.confirm(parentGradeConfirmation(child, grade))) return;
        await api("parent_set_child_grade", { username, grade_level: grade, lang: state.lang });
        await loadParentContext();
        await renderAccount();
      }
      if (event.target.matches(".account-parent-unlock-form")) {
        const values = Object.fromEntries(new FormData(event.target));
        const username = event.target.dataset.parentUnlockChild;
        const unlockWeek = Number(values.unlock_week);
        const confirmation = uiText(
          `Mở đến tuần ${unlockWeek}? Con sẽ thấy tuần 1–${unlockWeek}.`,
        );
        if (!window.confirm(confirmation)) return;
        const result = await api("parent_set_child_unlock", {
          username,
          grade_level: Number(values.grade_level),
          unlock_week: unlockWeek,
          lang: state.lang,
        });
        const child = state.parentContext?.children?.find(
          (item) => item.username === username,
        );
        if (child) child.unlock = result.grade;
        await renderAccount();
        const status = Array.from(
          document.querySelectorAll("[data-parent-unlock-status]"),
        ).find((node) => node.dataset.parentUnlockStatus === username);
        if (status)
          status.textContent = uiText(`Đã mở lộ trình đến tuần ${unlockWeek}.`);
      }

    } catch (error) {
      const status = event.target.querySelector(".account-form-status");
      if (status) status.textContent = accountErrorMessage(error);
      if (error.code === "STUDENT_GRADE_CHANGE_LIMIT") {
        event.target.dataset.gradeLimitReached = "true";
        event.target.elements.grade_level.disabled = true;
      }
    } finally {
      if (submit) submit.disabled = event.target.dataset.gradeLimitReached === "true";
    }
  });
}
