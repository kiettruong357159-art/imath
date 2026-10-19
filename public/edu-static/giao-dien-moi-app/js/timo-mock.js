/** TIMO timed paper: serial answer saves, server deadline, auto submit.
 * Re-entering the same paper resumes its active server attempt; no browser score.
 */
"use strict";
const timoMock = { paper:null, index:0, timer:null, deadline:0, busy:false, queue:Promise.resolve(), saveError:null };
async function startTimoMock(testId) {
  const paper = await api("start_timo_mock",{test_id:testId,lang:state.lang});
  timoAcceptPaper(paper);
  state.returnPage = "timo";
  setNav("timo-mock");
  timoMock.index = 0;
  renderTimoMock();
}
function timoAcceptPaper(paper) {
  timoMock.paper = paper;
  const server = Date.parse(paper.server_now.replace(" ","T"));
  const deadline = Date.parse(paper.deadline_at.replace(" ","T"));
  timoMock.deadline = Date.now() + deadline - server;
}
async function reloadTimoMock() {
  if (!timoMock.paper) return navigate("timo");
  await timoMock.queue;
  timoAcceptPaper(await api("get_timo_mock", {attempt_id:timoMock.paper.attempt_id,lang:state.lang}));
  renderTimoMock();
}
function timoStopTimer() { clearInterval(timoMock.timer); timoMock.timer = null; }
function renderTimoMock() {
  timoStopTimer();
  const paper = timoMock.paper;
  if (!paper || state.page !== "timo-mock") return;
  if (paper.status === "submitted") return renderTimoMockResult();
  const q = paper.questions[timoMock.index];
  $("#content").innerHTML = `<section class="quiz-panel timo-mock-panel" data-no-ui-translate>
    <div class="quiz-top"><div class="quiz-context-heading">${window.IMATH_QUIZ_CONTEXT.html({test:paper.test,question:q,lang:state.lang,kind:"timo"})}<strong>${timoText("Câu","Question")} ${timoMock.index+1}/${paper.questions.length}</strong></div><div class="timo-mock-actions"><span id="timo-clock" class="timo-clock" role="timer" aria-label="Thời gian còn lại"></span><button type="button" class="outline" data-timo-action="exit">${timoText("Thoát","Exit")}</button></div></div>
    <div class="jump">${paper.questions.map((item,i) => `<button type="button" data-timo-action="jump" data-timo-index="${i}" class="${i === timoMock.index ? "current" : ""} ${item.saved_answer !== "" ? "jump-saved" : ""}">${i+1}</button>`).join("")}</div>
    <div class="question-text">${localizedHtml(q.question,q.question_vi,q.question_en)}</div>${mediaHtml(q)}
    <label class="timo-answer-label" for="timo-answer">${timoText("Đáp số","Answer")}${q.don_vi ? ` (${escapeHtml(q.don_vi)})` : ""}</label>
    <input id="timo-answer" class="timo-answer" type="text" inputmode="decimal" autocomplete="off" maxlength="80" value="${escapeHtml(q.saved_answer || "")}" data-timo-question="${escapeHtml(q.id)}">
    <p id="timo-save-status" class="timo-note" role="status">${timoText("Đáp số được lưu khi em rời ô nhập. Chỉ xem điểm sau khi nộp.","Answers save when you leave the field. Results appear after submission.")}</p>
    <p id="timo-error" class="error" role="alert"></p><div class="quiz-nav"><button type="button" class="outline" data-timo-action="previous" ${timoMock.index === 0 ? "disabled" : ""}>${timoText("Câu trước","Previous")}</button>
    <button type="button" class="outline" data-timo-action="next" ${timoMock.index === paper.questions.length-1 ? "disabled" : ""}>${timoText("Câu tiếp theo","Next")}</button><button type="button" class="primary" data-timo-action="submit">${timoText("Nộp bài","Submit")}</button></div></section>`;
  window.IMATH_QUIZ_LAYOUT.mount($("#content .quiz-panel"));
  renderMath();
  const tick = () => {
    if (state.page !== "timo-mock") { timoStopTimer(); return; }
    const seconds = Math.max(0,Math.ceil((timoMock.deadline-Date.now())/1000));
    const clock = $("#timo-clock");
    if (clock) clock.textContent = `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,"0")}`;
    if (seconds === 0) { timoStopTimer(); timoSubmitMock(true).catch(e => showError("#timo-error",e)); }
  };
  timoMock.timer = setInterval(tick,1000); tick();
}
function timoSaveCurrent() {
  const input = $("#timo-answer");
  const paper = timoMock.paper;
  if (!input || paper?.status !== "active") return timoMock.queue;
  const qid = input.dataset.timoQuestion, answer = input.value.trim();
  const q = paper.questions.find(item => item.id === qid);
  if (q.saved_answer === answer && !timoMock.saveError) return timoMock.queue;
  const job = timoMock.queue.then(async () => {
    const response = await api("save_timo_mock_answer", {attempt_id:paper.attempt_id,question_id:qid,answer,lang:state.lang});
    timoMock.saveError = null;
    q.saved_answer = answer;
    if (response.status === "submitted") { timoAcceptPaper(response); renderTimoMock(); }
    else if (input.isConnected) $("#timo-save-status").textContent = timoText("Đã lưu đáp số.","Answer saved.");
  });
  timoMock.queue = job.catch(error => { timoMock.saveError = error; showError("#timo-error",error); });
  return timoMock.queue;
}
async function timoSubmitMock(expired = false) {
  if (timoMock.busy || timoMock.paper?.status !== "active") return;
  timoMock.busy = true;
  try {
    await timoSaveCurrent();
    if (timoMock.saveError && !expired) throw timoMock.saveError;
    timoAcceptPaper(await api("submit_timo_mock", {attempt_id:timoMock.paper.attempt_id,lang:state.lang}));
    catalogCache.clear(); state.catalogGrade = null;
    renderTimoMock();
  } catch(error) {
    showError("#timo-error",error);
    if (expired) timoMock.timer = setTimeout(() => timoSubmitMock(true),5000);
  } finally { timoMock.busy = false; }
}
function renderTimoMockResult() {
  const result = timoMock.paper.result;
  $("#content").innerHTML = `<section class="result-panel timo-result" data-no-ui-translate><p class="eyebrow">TIMO · ${timoText("KẾT QUẢ","RESULTS")}</p><h1>${result.score}/${result.max_score} ${timoText("câu đúng","correct")}</h1>
    ${timoStrandScoresHtml(result.strands)}<button type="button" class="outline" data-timo-action="timo-return">${timoText("Quay về TIMO","Back to TIMO")}</button>
    ${result.questions.map((q,i) => `<details class="timo-result-question"><summary>${timoText("Câu","Question")} ${i+1} · ${timoText(q.correct ? "Đúng" : "Sai",q.correct ? "Correct" : "Incorrect")}</summary><div class="result-question">${localizedHtml(q.question,q.question,q.question_en)}</div><p>${timoText("Em nhập","Your answer")}: ${escapeHtml(q.selected || "—")} · ${timoText("Đáp án","Answer")}: ${escapeHtml(q.correct_answer)}</p><div class="result-explanation">${sharedSolutionHtml(q)}</div></details>`).join("")}</section>`;
  renderMath();
}
async function timoMockAction(button) {
  const action = button.dataset.timoAction;
  if (action === "timo-return") return navigate("timo");
  if (timoMock.busy) return;
  if (action === "submit") {
    if (confirm(timoText("Nộp bài ngay? Các câu chưa trả lời sẽ được tính là sai.","Submit now? Unanswered questions count as incorrect."))) return timoSubmitMock();
    return;
  }
  await timoSaveCurrent();
  if (timoMock.saveError) throw timoMock.saveError;
  if (timoMock.paper?.status !== "active") return;
  if (action === "exit") {
    if (confirm(timoText("Đáp số đã lưu. Đồng hồ vẫn chạy khi em thoát. Em muốn thoát?","Saved answers are kept. The timer continues. Exit?"))) { timoStopTimer(); return navigate("timo"); }
  }
  if (action === "jump") timoMock.index = Number(button.dataset.timoIndex);
  if (action === "next") timoMock.index++;
  if (action === "previous") timoMock.index--;
  timoMock.index = Math.max(0,Math.min(timoMock.index,timoMock.paper.questions.length-1));
  renderTimoMock();
}
document.addEventListener("change", event => {
  if (event.target.id === "timo-answer") timoSaveCurrent();
});
