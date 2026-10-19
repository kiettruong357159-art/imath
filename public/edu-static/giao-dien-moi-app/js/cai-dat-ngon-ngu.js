/**
 * cai-dat-ngon-ngu.js — Chọn nội dung Việt/Anh/song ngữ, dịch nhãn và tên chuyên mục.
 * Dùng: core.js (state), i18n.js; API được core.js gắn lang khi gọi.
 * Quy tắc nghiệp vụ: docs/dac-ta-ban-dich.md và docs/thuat-ngu-viet-anh-cap1.md.
 * Số giữ định dạng Việt Nam; liên kết ngoài có thể nhận ngôn ngữ từ state.
 */
"use strict";

const localizedHtml = (value, vi, en) =>
  state.lang === "bi" && en && vi
    ? window.IMATH_I18N.bilingualHtml(en, vi)
    : richText(state.lang === "en" && en ? en : (vi ?? en ?? value));
const uiText = (value) =>
  window.IMATH_I18N?.t(value, state.lang === "vi" ? "vi" : "en") || value;
const sourceBadge = (translated = false) =>
  state.lang !== "vi" && !translated
    ? '<span class="source-language-badge">Vietnamese</span>'
    : "";
const sourceContent = (value, translated = false, tag = "span") =>
  `<${tag} class="source-content">${escapeHtml(value)}</${tag}>${sourceBadge(translated)}`;
const topicName = (entry) =>
  state.lang === "vi" ? entry?.name : entry?.name_en || entry?.name;
const topicNameHtml = (entry) =>
  state.lang === "bi" && entry?.name_en
    ? window.IMATH_I18N.bilingualHtml(entry.name_en, entry.name)
    : escapeHtml(topicName(entry));
/** Trả URL Finger Math theo ngôn ngữ; chỉ English cần tham số dự phòng cho trang đích. */
function fingerMathUrlForLanguage(baseUrl = window.IMATH_FINGER_MATH_URL) {
  if (!baseUrl) return "";
  return state.lang === "en" ? `${baseUrl}?lang=en` : baseUrl;
}
/** Áp dụng ngôn ngữ đã chọn lên phần giao diện tĩnh và nhãn điều hướng hiện có. */
function applyUiLanguage() {
  document.documentElement.lang = state.lang === "en" ? "en" : "vi";
  window.IMATH_I18N?.translateText(
    document.body,
    state.lang === "bi" ? "en" : state.lang,
  );
  const languageSelect = $("#language-select");
  if (languageSelect) languageSelect.value = state.lang;
  window.updateUtilityMenus?.();
  const navLabels =
    window.IMATH_I18N?.navLabels?.[state.lang === "vi" ? "vi" : "en"];
  document.querySelectorAll(".main-nav [data-page]").forEach((button) => {
    const label = button.querySelector(".nav-label");
    if (label && navLabels?.[button.dataset.page])
      label.textContent = navLabels[button.dataset.page];
  });
}
