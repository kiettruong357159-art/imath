/**
 * catalog-rows.js — Nhóm thẻ Luyện thêm nằm một hàng, cuộn riêng từng nhóm.
 * Dùng: renderPractice sau khi dựng #practice-overview; giữ cỡ thẻ từ CSS cũ.
 * Không gọi API/đổi quyền; khoảng cách nhóm ba chữ số không bị ngắt dòng.
 */
"use strict";
let disposeCatalogRows = () => {};
const catalogRowRecords = new WeakMap();

/** Đo lưới gốc trên chiều rộng nhóm, kể cả auto-fit và quy tắc theo màn hình. */
function catalogCardWidth(record, width) {
  const probe = document.createElement("div");
  probe.className = record.originalClass;
  Object.assign(probe.style, { position:"absolute", visibility:"hidden", pointerEvents:"none",
    width:`${width}px`, height:"0", overflow:"hidden" });
  for (let index = 0; index < record.grid.children.length; index++) probe.append(document.createElement("div"));
  record.host.append(probe);
  const columns = getComputedStyle(probe).gridTemplateColumns.split(/\s+/);
  const measured = parseFloat(columns.find(column => parseFloat(column) > 0));
  probe.remove();
  return measured || record.initialWidth;
}

/** Chỉ đổi khoảng trắng giữa nhóm ba chữ số; không đổi chữ hay số nội dung. */
function keepCatalogNumbersTogether(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const value = node.nodeValue.replace(/(\d) (?=\d{3}(?:\D|$))/g, "$1\u00a0");
    if (value !== node.nodeValue) node.nodeValue = value;
  }
}

/** Nút đầu/cuối phản ánh phần thẻ còn khuất, không cuộn ngang trang. */
function updateCatalogRow(record) {
  const { grid, shell, previous, next } = record;
  const end = Math.max(0, grid.scrollWidth - grid.clientWidth);
  previous.disabled = grid.scrollLeft <= 2;
  next.disabled = grid.scrollLeft >= end - 2;
  shell.classList.toggle("has-more", !next.disabled);
  shell.classList.toggle("has-overflow", end > 2);
}

/** Dựng nút và vùng cuộn của một nhóm; quyền bấm thẻ giữ ở renderer hiện có. */
function createCatalogRow(grid, index) {
  const retained = catalogRowRecords.get(grid);
  if (retained) {
    grid.addEventListener("scroll", retained.onScroll, { passive:true });
    retained.width = 0;
    return retained;
  }
  if (!grid.children.length) return null;
  const host = grid.closest(".band");
  const record = { grid, host, originalClass:grid.className,
    initialWidth:grid.firstElementChild.getBoundingClientRect().width, width:0, viewport:0 };
  const shell = document.createElement("div");
  shell.className = "catalog-row-shell";
  const heading = host.querySelector("h2")?.textContent || "Nhóm thẻ";
  grid.id ||= `catalog-row-${index}`;
  const button = (direction, label, glyph) => {
    const element = document.createElement("button");
    element.type = "button";
    element.className = `catalog-row-arrow catalog-row-${direction}`;
    element.setAttribute("aria-label", `${label}: ${heading}`);
    element.setAttribute("aria-controls", grid.id);
    element.textContent = glyph;
    return element;
  };
  record.previous = button("previous", "Xem thẻ trước", "‹");
  record.next = button("next", "Xem thẻ tiếp", "›");
  record.shell = shell;
  grid.before(shell);
  shell.append(record.previous, grid, record.next);
  grid.classList.add("catalog-row");
  grid.tabIndex = 0;
  grid.setAttribute("aria-label", `${heading} — cuộn ngang để xem thêm`);
  const move = direction => grid.scrollBy({
    left:direction * (parseFloat(grid.style.getPropertyValue("--catalog-card-width")) + 16),
    behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
  record.previous.onclick = () => move(-1);
  record.next.onclick = () => move(1);
  record.onScroll = () => updateCatalogRow(record);
  grid.addEventListener("scroll", record.onScroll, { passive:true });
  grid.addEventListener("keydown", event => {
    if (event.target !== grid || !["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  });
  catalogRowRecords.set(grid, record);
  return record;
}

/** Gọi lại sau render; hủy observer/listener cũ để không giữ DOM đã bỏ. */
function mountPracticeRows(root) {
  disposeCatalogRows();
  if (!root) return;
  const records = [];
  const built = [...root.querySelectorAll(".catalog-grid")].map(createCatalogRow).filter(Boolean);
  records.push(...built);
  const observer = new ResizeObserver(() => {
    if (!root.isConnected) { cleanup(); return; }
    records.forEach(record => {
      const style = getComputedStyle(record.host);
      const width = record.host.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      if (width > 0 && (width !== record.width || innerWidth !== record.viewport)) {
        record.width = width;
        record.viewport = innerWidth;
        record.grid.style.setProperty("--catalog-card-width", `${catalogCardWidth(record, width)}px`);
      }
      updateCatalogRow(record);
    });
  });
  records.forEach(record => observer.observe(record.host));
  requestAnimationFrame(() => keepCatalogNumbersTogether(root));
  const cleanup = () => {
    observer.disconnect();
    records.forEach(record => record.grid.removeEventListener("scroll", record.onScroll));
  };
  disposeCatalogRows = cleanup;
}
