/**
 * entrance-fixed-result.js — Lời giải sau nộp và tự đối chiếu rubric từng ý.
 * Dùng: entrance-fixed.js/view.js; khách chỉ tính trong RAM, thành viên lưu qua self_score.
 * Quy tắc: thiết kế thi vào mục 5/11/14; không cộng điểm tự đối chiếu vào điểm máy.
 */
"use strict";
function entranceFixedSelfPoints(row, checked) {
  return row.solution.steps.reduce((sum, step) => sum + (checked.has(step.id) ? Math.round(Number(step.points) * 100) : 0), 0) / 100;
}
function entranceFixedResultPart(question, part) {
  const row = entranceFixed.result.results.find(r => r.position === question.position && r.part_id === part.part_id);
  if (!row) return "";
  const self = row.grading_method === "self", key = efKey(row.position,row.part_id);
  if (!entranceFixed.checked.has(key)) entranceFixed.checked.set(key,new Set(row.checked_steps || []));
  const checked = entranceFixed.checked.get(key);
  const values = Array.isArray(row.submitted_answer) ? row.submitted_answer : [row.submitted_answer];
  const submitted = values.every(value => value === null || value === "") ? efText("Bỏ trống", "Blank")
    : entranceFixedAnswerText(row.submitted_answer);
  const answer = entranceFixedAnswerText(row.answer);
  const description = self ? efText("Làm ra giấy · Tự đối chiếu", "Written work · Self-review")
    : efText(row.is_correct ? "✓ Đúng" : "✕ Chưa đúng", row.is_correct ? "✓ Correct" : "✕ Incorrect");
  const label = question.parts.length === 1 ? `${efText("Kết quả bài", "Problem result")} ${question.position}`
    : `${efText("Ý", "Part")} ${escapeHtml(entranceFixedPartLabel(question,part))}`;
  const heading = `<h3>${label}
    <span class="ef-result-state">${description}</span><span class="ef-result-points">${efNumber(self ? row.max_points : row.machine_points)}
    ${self ? "" : ` / ${efNumber(row.max_points)}`} ${efText("điểm", "pt")}</span></h3>`;
  const solution = row.solution;
  const body = self ? `<p>${efText("Tích những bước em đã làm đúng trên giấy:", "Tick the steps you completed correctly on paper:")}</p>`
    : `<p>${efText("Em trả lời:", "Your answer:")} <strong>${escapeHtml(submitted)}</strong> ·
       ${efText("Đáp án đúng:", "Correct answer:")} <strong>${escapeHtml(answer)}</strong></p>`;
  const stepControls = self ? solution.steps.map(step => `<label class="ef-step-check sv-rubric-check"><input type="checkbox" data-ef-self="${escapeHtml(row.part_id)}"
    data-ef-step="${escapeHtml(step.id)}" ${checked.has(step.id) ? "checked" : ""}><span>${efText("Em đã làm đúng bước này", "I completed this step correctly")}</span>
    <small>${efNumber(step.points)} ${efText("điểm", "pt")}</small></label>`) : [];
  const explanation = window.IMATH_SOLUTION_VIEW.numberedSteps(solution.steps.map(step=>step.text),entranceFixed.lang);
  const option = part.answer_mode === "chon" && /^[A-Z]$/.test(String(row.submitted_answer))
    ? part.options?.[String(row.submitted_answer).charCodeAt(0)-65] : undefined;
  const view = sharedSolutionHtml({explanation,solution:{...solution,thu_lai:solution.thu_lai || solution.check},
    why_wrong:!self && !row.is_correct ? (window.IMATH_SOLUTION_VIEW.wrongReason(solution.vi_sao_sai,row.submitted_answer,option)
      || window.IMATH_SOLUTION_VIEW.wrongReason(solution.sai_thuong_gap,row.submitted_answer,option)) : ""}, {
    lang:entranceFixed.lang, answer:solution.conclusion || answer, stepControls,
    speechHtml:window.IMATH_SPEECH?.buttonHtml(explanation,entranceFixed.lang) || "",
    diagramHtml:window.IMATH_SOLUTION_VIEW.diagrams(solution.so_do),
    stepDiagrams:solution.steps.map(step=>window.IMATH_SOLUTION_VIEW.diagrams(step.so_do)),
  });
  return `<section class="ef-result-part ${self ? "self" : row.is_correct ? "correct" : "wrong"}">${heading}
    <div class="ef-part-prompt">${efRich(part.prompt)}</div>${body}${view}${self ? `<div class="ef-self-total">${efText("Em tự đối chiếu ý này:", "Your review of this part:")}
      <strong data-ef-self-points="${escapeHtml(row.part_id)}">${efNumber(entranceFixedSelfPoints(row,checked))} / ${efNumber(row.max_points)}</strong></div>` : ""}</section>`;
}
/** Đúng/sai là nhãn học sinh đọc, không in boolean hoặc object nội bộ ra màn hình. */
function entranceFixedAnswerText(answer) {
  if (typeof answer === "boolean") return efText(answer ? "Đúng" : "Sai", answer ? "True" : "False");
  return Array.isArray(answer) ? answer.map(entranceFixedAnswerText).join("; ") : String(answer ?? "");
}
function entranceFixedUpdateSelfTotals() {
  const rows = entranceFixed.result.results.filter(r => r.grading_method === "self");
  let points = 0;
  for (const row of rows) {
    const key = efKey(row.position,row.part_id), checked = entranceFixed.checked.get(key) || new Set(row.checked_steps || []);
    points += Math.round(entranceFixedSelfPoints(row,checked) * 100);
  }
  const max = rows.reduce((sum,r) => sum + Number(r.max_points),0);
  const total = $("#ef-self-overall"); if (total) total.textContent = `${efNumber(points / 100)} / ${efNumber(max)}`;
}

/** Câu/ý công khai từ payload đã chốt; kết quả khách không gọi lại lượt đã bị xoá. */
function entranceFixedRenderResult() {
  const result = entranceFixed.result, q = entranceFixed.payload.questions[entranceFixed.index];
  const selfMax = result.results.filter(r => r.grading_method === "self").reduce((sum,r) => sum + Number(r.max_points),0);
  entranceFixedSetContent(`<div class="ef-score-summary">
    <section class="ef-score"><h2>${efText("Phần máy chấm", "Machine-marked section")}</h2>
      <strong>${efNumber(result.machine_score)} / ${efNumber(result.machine_max_score)}</strong>
      <small>${efText("Điểm các ý chọn và nhập đáp số", "Score for choices and typed answers")}</small></section>
    <section class="ef-score self"><h2>${efText("Em tự đối chiếu", "Your self-review")}</h2>
      <strong id="ef-self-overall">0 / ${efNumber(selfMax)}</strong>
      <small>${efText("Không cộng vào điểm máy hoặc xếp hạng", "Not added to the machine score or rankings")}</small></section></div>
    ${entranceRemediationHtml()}
    <section class="ef-panel ef-result"><header><div><h1>${efText("Đối chiếu từng bài", "Review each problem")}</h1>
      <p>${escapeHtml(efName(result.paper))}</p></div><button class="outline" data-ef-action="catalog">${efText("Danh sách đề", "Paper list")}</button></header>
      ${entranceFixedNav()}${entranceFixedProblemHeading(q)}<div class="ef-stem compact">${efRich(q.question)}</div>
      ${entranceFixedFigures(q)}${q.parts.map(part => entranceFixedResultPart(q,part)).join("")}
    </section>${state.isGuest ? `<p class="ef-note">${efText("Kết quả học thử không lưu sau khi rời trang. Đăng nhập để lưu các lượt làm bài.",
      "Guest results are not kept after leaving this page. Sign in to keep your attempts.")}</p>` : ""}`, "entrance-fixed-result");
  entranceFixedUpdateSelfTotals();
}
document.addEventListener("change", async event => {
  const input = event.target.closest("[data-ef-self]");
  if (!input) return;
  const position = entranceFixed.payload.questions[entranceFixed.index].position, partId = input.dataset.efSelf;
  const checked = entranceFixed.checked.get(efKey(position,partId));
  if (input.checked) checked.add(input.dataset.efStep); else checked.delete(input.dataset.efStep);
  const row = entranceFixed.result.results.find(r => r.position === position && r.part_id === partId);
  const meter = document.querySelector(`[data-ef-self-points="${partId}"]`);
  meter.textContent = `${efNumber(entranceFixedSelfPoints(row,checked))} / ${efNumber(row.max_points)}`;
  entranceFixedUpdateSelfTotals();
  if (state.isGuest) return;
  const id = entranceFixed.payload.attempt_id, steps = [...checked];
  entranceFixed.saveQueue = entranceFixed.saveQueue.catch(() => {}).then(() =>
    api(efPractice() ? "entrance_set_self_score" : "entrance_fixed_self_score", { attempt_id: id, position, part_id: partId, checked_steps: steps })
  ).catch(error => entranceFixedNotice(error.message));
});
