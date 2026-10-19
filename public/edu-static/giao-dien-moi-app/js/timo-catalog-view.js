/** Danh mục TIMO/HSG: cùng đầu trang, tab và dòng đề; caller cung cấp action của từng luồng. */
"use strict";
function timoCatalogRow({ iconName, name, details, source = "", action, label, status }) {
  return `<article class="timo-exam-row"><span class="timo-exam-icon">${icon(iconName)}</span>
    <div><h3>${escapeHtml(name)}</h3><small>${escapeHtml(details)}</small>${source ? `<br><small>${escapeHtml(source)}</small>` : ""}</div>
    <div><button type="button" class="primary timo-exam-action" ${action}>${escapeHtml(label)}</button>
      <small class="timo-exam-state">${escapeHtml(status)}</small></div></article>`;
}
function timoCatalogFrame({ id, title, subtitle, grade, backLabel, backAction, tabs, selected, body }) {
  return `<div class="timo-heading"><span class="timo-emblem">${icon("medal")}</span>
      <div><h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></div>
      <span class="timo-grade">${escapeHtml(grade)}</span>
      <button type="button" class="outline timo-back" ${backAction}>${icon("chevron_left")}${escapeHtml(backLabel)}</button></div>
    <div class="timo-tabs" role="tablist" aria-label="${escapeHtml(title)}">${tabs.map(tab =>
      `<button type="button" id="${id}-tab-${tab.id}" role="tab" aria-selected="${selected === tab.id}"
        aria-controls="${id}-panel" ${tab.action}>${icon(tab.iconName)}${escapeHtml(tab.label)}</button>`).join("")}</div>
    <section class="band" id="${id}-panel" role="tabpanel" aria-labelledby="${id}-tab-${selected}">${body}</section>`;
}
