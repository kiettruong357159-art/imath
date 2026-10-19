/** entrance-practice.js — Lịch sử đề ghép cũ chỉ đọc; luyện dạng chuyển sang kết quả thi. */
"use strict";

/** Lịch sử ghép 15 câu được đánh dấu riêng, giữ điểm cũ; không có nút làm/nộp lại. */
function entrancePracticeHistoryHtml() {
  const rows = entranceFixed.catalog.practice?.legacy_history || [];
  return rows.length ? `<section class="ef-panel ef-history"><h2>${efText("Lịch sử đề ghép cũ", "Previous mixed-paper history")}</h2>
    <p class="ef-note">${efText("Thang 15 điểm · Chưa gắn mức luyện mới · Chỉ xem lại", "Out of 15 · No new level assigned · Read-only")}</p>
    ${rows.map(row => `<article><div><strong>${efText("Đề ghép cũ", "Previous mixed paper")}</strong>
      <small>${escapeHtml(row.started_at)} · ${row.status === "submitted" ? `${efNumber(row.score)} / 15`
        : efText("Lượt chưa nộp", "Unsubmitted attempt")}</small></div>
      <button class="outline" data-ep-history="${escapeHtml(row.id)}">${efText("Xem lại", "View")}</button></article>`).join("")}</section>` : "";
}

async function entrancePracticeReadHistory(id) {
  const payload = await api("get_entrance_mock", {attempt_id:id});
  const rows = payload.questions.map(q => {
    const result = payload.results?.find(r => r.question_id === q.id);
    return `<details><summary>${efText("Câu", "Question")} ${q.position}</summary><div class="ef-stem">${efRich(q.question)}</div>
      ${result ? `<p>${efText("Đã chọn", "Submitted")}: ${escapeHtml(result.selected_answer || "—")}</p>
        <p>${efText("Đáp án", "Answer")}: ${escapeHtml(result.correct_answer || "—")}</p>
        ${sharedSolutionHtml(result,{lang:entranceFixed.lang})}` : `<p>${efText("Lượt này chưa nộp; giữ nguyên lịch sử.", "This attempt was not submitted.")}</p>`}</details>`;
  }).join("");
  entranceFixedSetContent(`${entranceFixedIntro(efText("Lịch sử đề ghép cũ", "Previous mixed paper"),
    `${efText("Chỉ xem lại · Thang 15 điểm", "Read-only · Out of 15")} · ${payload.score ?? "—"}/15`,"catalog")}
    <section class="ef-panel">${rows}</section>`,"entrance-fixed-result");
}

document.addEventListener("click", async event => {
  const history = event.target.closest("[data-ep-history]");
  if (!history) return;
  try { await entrancePracticeReadHistory(history.dataset.epHistory); }
  catch (error) { entranceFixedNotice(error.message); }
});
