/**
 * bo-cuc-lam-bai.js — Bố cục dọc dùng chung cho các màn làm bài.
 * Giữ nguyên nút và data-action của renderer; không gọi API hoặc tính điểm.
 * Chừa chỗ theo chiều cao thanh nút cố định, kể cả khi đổi ngôn ngữ/kích thước.
 */
"use strict";
window.IMATH_QUIZ_LAYOUT = (() => {
  function measureFooter(footer) {
    const shell = footer.closest("#app-shell");
    const height = `${Math.ceil(footer.getBoundingClientRect().height)}px`;
    if (shell?.style.getPropertyValue("--quiz-actions-height") !== height)
      shell?.style.setProperty("--quiz-actions-height", height);
  }
  const footerObserver = new ResizeObserver(entries => {
    for (const { target } of entries) {
      if (target.isConnected) measureFooter(target);
      else footerObserver.unobserve(target);
    }
  });
  function reserveFooterSpace(footer) {
    footerObserver.disconnect();
    if (!footer) return;
    measureFooter(footer);
    footerObserver.observe(footer);
  }

  function mount(panel) {
    if (!panel || panel.classList.contains("quiz-layout")) return;
    panel.classList.add("quiz-layout");
    const jump = panel.querySelector(":scope > .jump");
    let progress = panel.querySelector(":scope > .progress");
    if (jump && !progress) {
      const buttons = [...jump.querySelectorAll("button")];
      const current = Math.max(0, buttons.findIndex(button => button.classList.contains("current")));
      progress = document.createElement("div");
      progress.className = "progress";
      const bar = document.createElement("span");
      bar.style.width = `${((current + 1) / Math.max(1, buttons.length)) * 100}%`;
      progress.append(bar);
    }
    if (jump && progress) {
      const row = document.createElement("div");
      row.className = "quiz-progress-row";
      jump.before(row);
      row.append(jump, progress);
      // Đề dài cuộn trong hàng số câu; không cuộn cả trang khi đổi câu.
      requestAnimationFrame(() => {
        const active = jump.querySelector(".current");
        if (!jump.isConnected || !active) return;
        const item = active.getBoundingClientRect();
        const strip = jump.getBoundingClientRect();
        if (item.left < strip.left || item.right > strip.right)
          jump.scrollLeft += item.left - strip.left - (jump.clientWidth - item.width) / 2;
      });
    }
    const footer = panel.querySelector(":scope > .quiz-nav");
    const hints = panel.querySelector(".hint-box");
    if (hints && footer) {
      // Nút biên soạn sẵn vẫn đi qua handler get-hint/get-hint-diagram hiện có.
      const action = hints.querySelector(":scope > button");
      hints.id = "quiz-hint-panel";
      if (action) {
        const actions = document.createElement("div");
        actions.className = "quiz-check-actions";
        action.classList.add("quiz-hint-action");
        action.setAttribute("aria-controls", hints.id);
        actions.append(action);
        const primary = footer.querySelector(".primary");
        if (primary) actions.append(primary);
        footer.append(actions);
      }
      hints.hidden = !hints.querySelector(".hint-item,.hint-unavailable,.error");
      action?.setAttribute("aria-expanded", String(!hints.hidden));
      const main = panel.querySelector(".quiz-main");
      if (main) main.after(hints);
    }
    reserveFooterSpace(footer);
  }
  return Object.freeze({ mount });
})();
