/** TIMO: một thẻ vào trang riêng, danh mục từ API; luyện Nền dùng màn bài chung.
 * Không chứa đề/đáp án mẫu. Đề thi thử và đồng hồ nằm ở timo-mock.js.
 */
"use strict";
const timoView = { tab: "strands", catalog: null };
const timoStrands = Object.freeze([
  ["logic", "Tư duy logic", "Logical thinking", "pattern", "Quy luật · suy luận"],
  ["so_hoc", "Số học", "Arithmetic", "calculator", "Tính toán · bài toán số"],
  ["ly_thuyet_so", "Lý thuyết số", "Number theory", "number_bond", "Chẵn, lẻ · chia có dư"],
  ["hinh_hoc", "Hình học", "Geometry", "ruler", "Hình phẳng · khối lập phương"],
  ["to_hop", "Tổ hợp", "Combinatorics", "cube", "Liệt kê · đếm cách chọn"],
]);
const timoText = (vi, en) => state.lang === "en" ? en : vi;
const timoEntryCatalogs = new Map();
async function timoLoadEntry(grade) {
  if (grade>=1 && grade<=5 && !timoEntryCatalogs.has(grade)) {
    timoEntryCatalogs.set(grade,await api("get_timo_catalog",{grade_level:grade,lang:"vi"}));
  }
}
function timoEntryCardHtml() {
  if (state.grade < 1 || state.grade > 5 || !state.tests.some(test =>
    test.category_id === `g${state.grade}_timo` && test.test_family === "timo" &&
    test.status === "published" && test.student_ready !== false && Number(test.question_count) > 0
  )) return "";
  const name = timoText("Toán TIMO", "TIMO maths");
  const tests = (timoEntryCatalogs.get(state.grade)?.sets || []).filter(t=>t.ready);
  const strands = timoStrands.filter(([code])=>tests.some(t=>t.mach===code));
  const mocks = tests.filter(t=>["qg","qt"].includes(t.cap)).length;
  return `<article class="catalog-card math-competition-entry" role="button" tabindex="0" data-timo-action="open" aria-label="${name}">
    <div class="math-competition-heading"><span class="catalog-icon">${icon("medal")}</span><h3>${name}</h3></div>
    <p class="math-competition-copy">${timoText("Olympic Toán quốc tế TIMO, song ngữ Anh – Việt", "TIMO international maths, English – Vietnamese")}</p>
    <div class="math-competition-chips">${strands.slice(0,3).map(([,vi,en])=>`<span>${escapeHtml(timoText(vi,en))}</span>`).join("")}</div>
    <div class="math-competition-footer"><span>${strands.length} ${timoText("mạch","strands")} · ${mocks} ${timoText("đề thi thử","mock exams")}</span><span class="catalog-pill">${timoText("Vào luyện", "Start practising")} ${icon("arrow_right")}</span></div></article>`;
}
function timoStrandScoresHtml(rows) {
  return `<section class="timo-strand-scores" aria-label="Điểm theo mạch"><h2>${timoText("Kết quả theo mạch", "Results by strand")}</h2>
    <div>${rows.filter(r => r.total > 0).map(r => `<article><span>${escapeHtml(timoText(r.name_vi, r.name_en))}</span><strong>${r.score}/${r.total}</strong><progress value="${r.score}" max="${r.total}" aria-label="${escapeHtml(r.name_vi)}"></progress></article>`).join("")}</div></section>`;
}
function timoPracticeResultHtml(quiz) {
  if (quiz.test.test_family !== "timo") return "";
  const rows = timoStrands.map(([mach, vi, en]) => ({mach, name_vi:vi, name_en:en, score:0, total:0}));
  quiz.questions.forEach((q,i) => {
    const row = rows.find(r => r.mach === q.mach);
    if (row) { row.total++; if (quiz.results[i]?.correct) row.score++; }
  });
  return timoStrandScoresHtml(rows);
}
async function renderTimo() {
  const grade = state.grade;
  if (grade < 1 || grade > 5) return navigate("practice");
  const response = await api("get_timo_catalog", {grade_level:grade, lang:state.lang});
  if (state.page !== "timo" || grade !== state.grade) return;
  timoView.catalog = response;
  const sets = response.sets;
  const status = set => set?.ready ? set.locked ? timoText("Cần đăng nhập", "Sign in") : set.done ? `${timoText("Đã làm", "Completed")} · ${set.score}/${set.question_count}` : timoText("Chưa làm", "Not started") : timoText("Đang biên soạn", "In preparation");
  const action = (set, mock) => set?.ready ? `data-timo-action="${mock ? "mock" : "practice"}" data-timo-test="${escapeHtml(set.id)}"` : "disabled";
  const body = timoView.tab === "strands"
    ? `<div class="timo-panel-head"><h2>${timoText("Chọn mạch em muốn luyện", "Choose a strand")}</h2><span>${timoText("5 câu mỗi bộ", "5 questions per set")}</span></div><div class="timo-strand-list">${timoStrands.map(([mach, vi, en, ico, desc]) => {
      const foundation = sets.find(s => s.mach === mach && s.cap === "nen");
      const advanced = sets.find(s => s.mach === mach && s.cap === "vuot");
      return `<article class="timo-strand-card"><div class="timo-strand-copy"><span class="timo-strand-icon">${icon(ico)}</span><div><h3>${escapeHtml(timoText(vi,en))}</h3><small>${escapeHtml(state.lang === "en" ? en : desc)}</small></div></div>
        ${[[foundation,"Nền","Foundation"],[advanced,"Vượt","Challenge"]].map(([set,label,labelEn]) => `<button type="button" class="timo-level ${set?.done ? "finished" : ""}" ${action(set,false)}><strong>${timoText(label,labelEn)} · 5 ${timoText("câu","Qs")}</strong><small>${status(set)}</small></button>`).join("")}</article>`;
    }).join("")}</div><p class="timo-note">${timoText("Bắt đầu từ Nền để làm quen. Chọn Vượt khi em muốn thử bài khó hơn.","Start with Foundation, then try Challenge.")}</p>`
    : `<div class="timo-panel-head"><h2>${timoText("Chọn đề để thử sức", "Choose a mock test")}</h2><span>${timoText("Đề do iMath biên soạn", "Prepared by iMath")}</span></div><div class="timo-exam-list">${[["qg",1,25,90],["qg",2,25,90],["qt",1,30,120],["qt",2,30,120]].map(([cap, bo, count, time]) => {
      const set = sets.find(s => s.cap === cap && s.bo === bo);
      const name = `${timoText(cap === "qg" ? "Đề quốc gia" : "Đề quốc tế", cap === "qg" ? "National mock" : "International mock")} ${bo}`;
      return timoCatalogRow({ iconName: cap === "qg" ? "medal" : "trophy", name,
        details: `${count} ${timoText("câu","questions")} · ${time} ${timoText("phút","minutes")} · 5 ${timoText("mạch","strands")}`,
        action: action(set,true), label: timoText("Làm bài", "Start"), status: status(set) });
    }).join("")}</div><p class="timo-note">${timoText("Đề có bấm giờ. Hết giờ, hệ thống chấm các đáp số đã lưu.","Timed test. When time is up, saved answers are marked.")}</p>`;
  $("#content").innerHTML = `<div class="timo-page" data-no-ui-translate>${timoCatalogFrame({ id: "timo", title: "Toán TIMO",
    subtitle: timoText("Luyện tư duy từng mạch · Thử sức với đề chung kết", "Practice by strand · Try a final round mock"),
    grade: `${timoText("Lớp", "Grade")} ${grade}`, backLabel: timoText("Luyện thêm", "Practice"), backAction: 'data-timo-action="back"',
    selected: timoView.tab,
    tabs: [["strands", "pattern", "Luyện theo mạch", "Practice by strand"], ["exams", "check_document", "Đề thi thử", "Mock tests"]]
      .map(([id, iconName, vi, en]) => ({ id, iconName, label: timoText(vi, en), action: `data-timo-action="tab" data-timo-tab="${id}"` })), body,
  })}</div>`;
  $("#content").scrollTop = 0;
  window.scrollTo({top:0,behavior:"instant"});
}
async function timoHandleAction(button) {
  const action = button.dataset.timoAction;
  if (action === "open") {
    timoView.tab = "strands";
    return navigate("timo");
  }
  if (action === "back") return navigate("practice");
  if (action === "tab") { timoView.tab = button.dataset.timoTab; return renderTimo(); }
  if (["practice","mock"].includes(action)) {
    const set = timoView.catalog?.sets.find(s => s.id === button.dataset.timoTest);
    if (!set?.ready) return;
    if (set.locked) { alert(timoText("Đăng nhập để mở bộ này và lưu kết quả.","Sign in to open this set and save progress.")); return; }
    if (action === "mock") return startTimoMock(set.id);
    await loadCatalog();
    return startTestById(set.id,"timo");
  }
  return timoMockAction(button);
}
document.addEventListener("click", event => {
  const button = event.target.closest("[data-timo-action]");
  if (!button || button.disabled) return;
  timoHandleAction(button).catch(error => alert(error.message));
});
document.addEventListener("keydown", event => {
  const card = event.target.closest('[role="button"][data-timo-action]');
  if (card && ["Enter"," "].includes(event.key)) { event.preventDefault(); card.click(); }
});
