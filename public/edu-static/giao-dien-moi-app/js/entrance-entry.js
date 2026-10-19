/**
 * entrance-entry.js — Thẻ chuyển cấp vào 6/10 có số liệu thật và mở thẳng mức luyện.
 * Dùng entrance_entry_summary, theme/nút/icon chung; không gọi catalog câu cũ ở trang chủ.
 * User duyệt 14/10: hai thẻ cạnh nhau ở 1024, Việt/Anh, không thanh dài thừa khoảng trống.
 */
"use strict";
function entranceEntryText(vi,en) { return state.lang === "en" ? en : vi; }
function entranceEntryCard(exam, summary) {
  const grade = exam === "vao_6" ? 6 : 10;
  const ready = Boolean(summary?.exam_count);
  return `<article class="entrance-entry-card ${exam}" data-no-ui-translate>
    <div class="entrance-entry-heading"><span class="entrance-entry-symbol">${tileIcon("graduation_cap")}</span>
      <div><span class="entrance-entry-eyebrow">${entranceEntryText("LUYỆN THI CHUYỂN CẤP", "ENTRANCE PREPARATION")}</span>
      <h3>${entranceEntryText(`Thi vào lớp ${grade}`,`Grade ${grade} entrance`)}</h3></div></div>
    <p>${entranceEntryText("Đề thi thử theo mức", "Mock papers by level")}</p>
    ${ready ? `<div class="entrance-entry-metrics"><strong>${summary.exam_count}</strong><span>${entranceEntryText("đề", "papers")}</span></div>`
      : `<p class="entrance-entry-empty">${entranceEntryText("Nội dung đang được chuẩn bị", "Content is being prepared")}</p>`}
    <div class="entrance-entry-levels">${(summary?.levels || []).map(level=>`<button class="outline"
      data-ef-open="${exam}" data-ef-entry-level="${escapeHtml(level.level_code)}" ${level.available ? "" : "disabled"}>
      ${escapeHtml(state.lang === "en" ? level.name_en : level.name_vi)} ${level.available ? "→" : ""}</button>`).join("")}</div>
  </article>`;
}
function entranceEntrySection() {
  if (![4,5,8,9].includes(state.grade)) return "";
  return `<section class="band entrance-entry-band">${sectionHeading(entranceEntryText("Luyện thi chuyển cấp", "Entrance preparation"),
    "graduation_cap", entranceEntryText("Đề thi thử theo mức", "Mock papers by level"))}
    <div class="entrance-entry-grid">${["vao_6","vao_10"].map(exam=>entranceEntryCard(exam,entranceFixedEntries.get(exam))).join("")}</div></section>`;
}
