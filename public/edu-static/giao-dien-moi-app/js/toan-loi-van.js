/**
 * toan-loi-van.js — Dạng Toán lời văn và tên Singapore theo lớp.
 * Dùng core.js/luyen-them.js/i18n.js; get_tests qua loadCatalog.
 * Chuẩn: chuan-toan-loi-van.md mục 4, cap2/chuan/luyen-them/chuan-loi-van-cap2.md; Singapore mục 6.
 * Khóa bộ do máy chủ trả; không suy ra quyền từ học kỳ đang chọn.
 */
"use strict";
const singaporeGrade2Labels = Object.freeze({
  S1: "Hơn, kém nhau bao nhiêu", S2: "Cộng qua 10: gộp cho tròn 10",
  S3: "Trừ qua 10: bớt về 10", S4: "Bài toán thêm, bớt, nhiều hơn, ít hơn",
  S5: "Cộng, trừ có nhớ đến 100 bằng thanh chục",
  S6: "Nhân là các nhóm bằng nhau, chia là chia đều",
  S7: "Trăm, chục, đơn vị", S8: "Cộng, trừ trong phạm vi 1 000 và đo lường",
});
/** Mã S1 ở mỗi lớp là chủ đề khác nhau; lớp mới dùng tên bộ từ nội dung đã duyệt. */
function singaporeTopicTitle(code) {
  if (state.grade >= 3) {
    const test = singaporeCatalogueTests().find((item) => item.visual_topic === code);
    if (test) return uiText(String(test.name || "").replace(/^Toán Singapore\s*[–—-]\s*/u, "")
      .replace(/\s*[–—-]\s*Bộ\s*\d+\s*$/u, ""));
  }
  return uiText((state.grade === 2 ? singaporeGrade2Labels : singaporeTopicLabels)[code] || code);
}
/** Tên dạng lấy từ tên bộ đã nạp để không lặp bảng tên của nội dung. */
function wordProblemTitle(test) {
  return String(test.name || "").replace(/^Toán lời văn\s*[–—-]\s*/u, "")
    .replace(/\s*[–—-]\s*Bộ\s*\d+\s*$/u, "");
}
/** Cùng renderer cho lớp 2–9: chỉ hiện bộ published đủ câu, không tạo thẻ rỗng. */
function wordProblemCatalogueTests() {
  return state.tests.filter((t) => t.test_family === "loi_van" && t.kind === "loi_van"
    && t.category_id === `g${state.grade}_loi_van` && t.status === "published"
    && t.student_ready !== false && Number(t.question_count) > 0);
}
// Bộ SVG chung, khai báo theo dạng để renderer và trang chi tiết cùng dùng.
const wordProblemIcons = Object.freeze({
  D1: "calculator", D2: "balance", D3: "number_bond", D4: "ruler", D5: "bar_join",
  D6: "clock", D7: "bar_chart", D8: "pattern", D9: "cube", D10: "fx", D11: "statistics",
});
/** Mã có thể là D2 hoặc g8-D2; lấy đúng Dn thay vì luôn rơi về máy tính. */
function wordProblemIcon(code) {
  const key = String(code).match(/D\d+/u)?.[0];
  const gradeIcons = {
    8: { D1:"fx", D2:"statistics", D3:"ruler", D4:"xp_hex", D5:"clock",
      D6:"balance", D7:"bar_chart", D8:"pattern", D9:"cube" },
    9: { D1:"calculator", D2:"clock", D3:"bar_join", D4:"balance",
      D5:"ruler", D6:"pattern", D7:"number_bond", D8:"fx" },
  };
  return gradeIcons[state.grade]?.[key] || wordProblemIcons[key] || "book";
}
/** Gom theo mã dạng từ máy chủ; tuần mở dùng cờ khóa, không suy ra từ học kỳ. */
function wordProblemSectionHtml() {
  const tests = wordProblemCatalogueTests();
  if (!tests.length) return "";
  const codes = [...new Set(tests.map((t) => t.word_problem_type).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "vi", { numeric: true }));
  const cards = codes.map((code) => {
    const sets = tests.filter((t) => t.word_problem_type === code);
    const unlocked = sets.some((t) => !t.locked);
    const week = Math.min(...sets.map((t) => Number(t.open_week) || 35));
    const attrs = unlocked ? `role="button" tabindex="0" data-word-problem-type="${escapeHtml(code)}"` : "";
    return `<article class="catalog-card topic-card tone-blue ${unlocked ? "" : "locked"}" ${attrs}>
      <span class="catalog-icon">${icon(wordProblemIcon(code))}</span>
      <h3>${escapeHtml(uiText(wordProblemTitle(sets[0])))}</h3>
      <p>${sets.map((t) => `${uiText("Bộ")} ${t.id.match(/_b(\d+)$/u)?.[1] || ""}`).join(" · ")}</p>
      <span class="catalog-pill ${unlocked ? "" : "locked-pill"}">
        ${unlocked ? uiText("Vào luyện") : `${uiText("Mở từ tuần")} ${week}`}
        ${icon(unlocked ? "arrow_right" : "clock")}
      </span></article>`;
  }).join("");
  return `<section class="band word-problem-band">
    ${sectionHeading(uiText("Toán lời văn"), "calculator", `${codes.length} ${uiText("dạng bài")}`)}
    <div class="catalog-grid">${cards}</div></section>`;
}
/** Mở danh sách hai bộ trong dạng, dùng lại renderer điểm và nút vào bài. */
function showWordProblemType(code) {
  const tests = wordProblemCatalogueTests().filter((t) => t.word_problem_type === code)
    .sort((a, b) => a.sort_order - b.sort_order || a.id.localeCompare(b.id));
  if (!tests.length || !tests.some((t) => !t.locked)) return;
  state.practiceView = { kind: "word-problem", code };
  state.catalogView = null;
  openPracticeDetail();
  $("#practice-tests").innerHTML = `<div class="catalog-detail-head">
    <button class="outline" data-practice-back>${icon("chevron_left")} ${uiText("Luyện thêm")}</button>
    <span class="catalog-detail-icon">${icon(wordProblemIcon(code))}</span>
    <h3>${uiText("Toán lời văn")} · ${escapeHtml(uiText(wordProblemTitle(tests[0])))}</h3>
    <span>${tests.length} ${uiText("bộ")}</span>
  </div>${renderCatalogTestRows(tests, `g${state.grade}_loi_van`)}`;
  applyUiLanguage();
}
