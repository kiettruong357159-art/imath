/**
 * tien-ich.js — Menu hai cột giống danh mục Tiện ích trên imath.vn.
 * Dùng core.js (state, escapeHtml), cai-dat-ngon-ngu.js (Finger Math).
 * Không gọi API/ghi DB; URL đối chiếu header.php của theme imath-2026.
 * Chạm/click chọn nhóm; phím mũi tên chuyển nhóm, Escape đóng menu.
 */
"use strict";

const IMATH_UTILITY_GROUPS = Object.freeze([
  { id: "basic", vi: "Tiện ích cơ bản", en: "Basic tools", icon: "🧮", items: [
    ...[1, 2, 3, 4, 5].map((grade) => ({
      grade, vi: `Toán lớp ${grade}`, en: `Grade ${grade} mathematics`, icon: String(grade),
      path: `/tienich/${String(grade + 7).padStart(2, "0")}-toan-lop-${grade}.html${grade > 1 ? "?chu-de=mixed&muc-do=kha" : ""}`,
    })),
    { vi: "Tính nhẩm bằng ngón tay", en: "Finger Math", icon: "✋", fingerMath: true, special: true },
  ] },
  { id: "advanced", vi: "Tiện ích nâng cao", en: "Advanced tools", icon: "🏅", items: [
    { vi: "Luyện thi học sinh giỏi", en: "Math contest practice", icon: "🏅", path: "/tienich/13-luyen-thi-hoc-sinh-gioi.html?lop=3" },
    { vi: "Hình học & Đại lượng", en: "Geometry & measurement", icon: "📐", path: "/tienich/hinh-hoc-dai-luong-truc-quan.html" },
    { vi: "Luyện thi vào lớp 6 trọng điểm", en: "Grade 6 entrance exam practice", icon: "🏫", path: "/luyen-thi-vao-lop-6-truong-trong-diem/" },
  ] },
  { id: "secondary", vi: "Tiện ích toán cấp 2", en: "Secondary mathematics", icon: "📐", items: [
    ...[6, 7, 8, 9].map((grade) => ({
      grade, vi: `Toán lớp ${grade}`, en: `Grade ${grade} mathematics`, icon: String(grade),
      path: `/tienich/cap2/toan-cap-2-truc-quan.html?lop=${grade}`,
    })),
    { vi: "Ôn thi vào lớp 10 CLC", en: "Selective Grade 10 entrance exam", icon: "🏆", path: "/tienich/cap2/toan-cap-2-truc-quan.html?che-do=clc", special: true },
  ] },
]);

const utilityLabel = (entry) => state.lang === "vi" ? entry.vi : entry.en;
const utilityDefaultGroup = () => Number(state.grade) <= 5 ? "basic" : "secondary";

/** Giữ nhóm người dùng vừa chọn; chỉ vẽ lại khi đổi ngôn ngữ/lớp. */
function updateUtilityMenus() {
  document.querySelectorAll(".utility-menu-wrap").forEach((wrapper) => {
    const renderKey = `${state.lang}:${state.grade}`;
    if (wrapper.dataset.utilityRenderKey === renderKey) return;
    wrapper.dataset.utilityRenderKey = renderKey;
    const menuId = wrapper.querySelector(".utility-dropdown").id;
    const groups = IMATH_UTILITY_GROUPS.map((group) =>
      `<button type="button" class="utility-group" role="tab" id="${menuId}-${group.id}-tab" aria-controls="${menuId}-${group.id}-panel" data-utility-group="${group.id}"><span class="utility-icon" aria-hidden="true">${group.icon}</span><span class="utility-group-label">${escapeHtml(utilityLabel(group))}</span><span class="utility-group-arrow" aria-hidden="true">›</span></button>`).join("");
    const panels = IMATH_UTILITY_GROUPS.map((group) =>
      `<div class="utility-panel" role="tabpanel" id="${menuId}-${group.id}-panel" aria-labelledby="${menuId}-${group.id}-tab" data-utility-panel="${group.id}">${group.items.map(utilityItemHtml).join("")}</div>`).join("");
    wrapper.querySelector(".utility-catalog").innerHTML =
      `<div class="utility-groups" role="tablist" aria-orientation="vertical" aria-label="${state.lang === "vi" ? "Nhóm tiện ích" : "Tool groups"}">${groups}</div>${panels}`;
    wrapper.querySelector("[data-utility-all-label]").textContent = state.lang === "vi" ? "Xem toàn bộ tiện ích" : "View all tools";
    selectUtilityGroup(wrapper, wrapper.dataset.utilityGroup || utilityDefaultGroup());
  });
}

function utilityItemHtml(item) {
  const href = item.fingerMath ? fingerMathUrlForLanguage() : `https://imath.vn${item.path}`;
  const current = item.grade === Number(state.grade) ? " utility-item-current" : "";
  const special = item.special ? " utility-item-special" : "";
  const finger = item.fingerMath ? " finger-math-link" : "";
  return `<a class="utility-item${current}${special}${finger}" href="${escapeHtml(href)}" target="_blank" rel="noopener"><span class="utility-icon" aria-hidden="true">${item.icon}</span><span>${escapeHtml(utilityLabel(item))}</span></a>`;
}

/** Roving tabindex: Tab vào nhóm đang chọn, rồi tới các liên kết bên phải. */
function selectUtilityGroup(wrapper, groupId, focus = false) {
  wrapper.dataset.utilityGroup = groupId;
  wrapper.querySelectorAll("[data-utility-group]").forEach((button) => {
    const selected = button.dataset.utilityGroup === groupId;
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
    if (selected && focus) button.focus();
  });
  wrapper.querySelectorAll("[data-utility-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.utilityPanel !== groupId;
  });
}

function closeUtilityMenu(wrapper, restoreFocus = false) {
  wrapper.querySelector(".utility-dropdown").hidden = true;
  const toggle = wrapper.querySelector(".utility-menu-toggle");
  toggle.setAttribute("aria-expanded", "false");
  if (restoreFocus) toggle.focus();
}

/** Đặt menu dưới tâm nút Tiện ích, giới hạn trong đầu trang để không tràn mép. */
function positionUtilityMenu(wrapper) {
  const menu = wrapper.querySelector(".utility-dropdown");
  if (menu.hidden) return;
  const header = wrapper.closest(".topbar");
  const toggleBox = wrapper.querySelector(".utility-menu-toggle").getBoundingClientRect();
  const headerBox = header.getBoundingClientRect();
  const gutter = Number.parseFloat(getComputedStyle(menu).getPropertyValue("--utility-menu-gutter"));
  const centeredLeft = toggleBox.left + toggleBox.width / 2 - headerBox.left - menu.offsetWidth / 2;
  const maxLeft = header.clientWidth - gutter - menu.offsetWidth;
  const left = Math.max(gutter, Math.min(centeredLeft, maxLeft));
  menu.style.setProperty("--utility-menu-left", `${Math.round(left)}px`);
}

function openUtilityMenu(wrapper, focusFirst = false) {
  document.querySelectorAll(".utility-menu-wrap").forEach((other) => {
    if (other !== wrapper) closeUtilityMenu(other);
  });
  updateUtilityMenus();
  wrapper.querySelector(".utility-dropdown").hidden = false;
  wrapper.querySelector(".utility-menu-toggle").setAttribute("aria-expanded", "true");
  positionUtilityMenu(wrapper);
  if (focusFirst) wrapper.querySelector('[aria-selected="true"]')?.focus();
}

/** Các phím trong tablist; không chặn Tab hoặc mũi tên khi đọc liên kết. */
function utilityMenuKeydown(event, wrapper) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeUtilityMenu(wrapper, true);
    return;
  }
  const tab = event.target.closest("[data-utility-group]");
  if (!tab) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    wrapper.querySelector('.utility-panel:not([hidden]) a')?.focus();
    return;
  }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const groups = IMATH_UTILITY_GROUPS;
  const index = groups.findIndex((group) => group.id === tab.dataset.utilityGroup);
  const next = event.key === "Home" ? 0 : event.key === "End" ? groups.length - 1
    : (index + (event.key === "ArrowDown" ? 1 : -1) + groups.length) % groups.length;
  selectUtilityGroup(wrapper, groups[next].id, true);
}

function bindUtilityMenus() {
  let positionFrame = 0;
  window.addEventListener("resize", () => {
    if (positionFrame) return;
    positionFrame = requestAnimationFrame(() => {
      positionFrame = 0;
      document.querySelectorAll(".utility-menu-wrap").forEach(positionUtilityMenu);
    });
  });
  document.querySelectorAll(".utility-menu-wrap").forEach((wrapper) => {
    const toggle = wrapper.querySelector(".utility-menu-toggle");
    const menu = wrapper.querySelector(".utility-dropdown");
    toggle.addEventListener("click", () => menu.hidden ? openUtilityMenu(wrapper) : closeUtilityMenu(wrapper));
    toggle.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown") return;
      event.preventDefault();
      openUtilityMenu(wrapper, true);
    });
    menu.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-utility-group]");
      if (tab) selectUtilityGroup(wrapper, tab.dataset.utilityGroup);
      else if (event.target.closest("a")) closeUtilityMenu(wrapper);
    });
    menu.addEventListener("pointerover", (event) => {
      const tab = event.target.closest("[data-utility-group]");
      if (tab && event.pointerType === "mouse") selectUtilityGroup(wrapper, tab.dataset.utilityGroup);
    });
    menu.addEventListener("keydown", (event) => utilityMenuKeydown(event, wrapper));
  });
  document.addEventListener("click", (event) => {
    document.querySelectorAll(".utility-menu-wrap").forEach((wrapper) => {
      if (!wrapper.contains(event.target)) closeUtilityMenu(wrapper);
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".utility-menu-wrap").forEach((wrapper) => {
      if (!wrapper.querySelector(".utility-dropdown").hidden) closeUtilityMenu(wrapper, true);
    });
  });
  updateUtilityMenus();
}

window.updateUtilityMenus = updateUtilityMenus;
document.addEventListener("DOMContentLoaded", bindUtilityMenus);
