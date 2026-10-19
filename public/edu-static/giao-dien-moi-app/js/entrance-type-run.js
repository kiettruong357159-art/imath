/** Lượt luyện dạng: câu đơn cũ rồi bộ nhiều ý; mỗi phần dùng renderer/chấm sẵn có. */
"use strict";
let entranceTypeRun = null;
async function entranceTypeStart(code) {
  const exam = entranceFixed.exam, level = entranceFixed.level;
  const response = await api("entrance_remediation_questions", { exam_code: exam, level_code: level, type_code: code, lang: state.lang });
  entranceRemediation.original = null;
  entranceTypeRun = { exam, level, code, practiceId: response.practice_id, sets: response.set_ids, index: -1, phase: "old" };
  if (response.questions.length) {
    state.returnPage = "entrance-fixed";
    entrancePracticeQuiz(response,code); state.quiz.entranceTypeRun = true;
    renderQuiz();
  } else await entranceTypeNext();
}
async function entranceTypeNext() {
  const run = entranceTypeRun;
  if (!run || run.exam !== entranceFixed.exam || run.level !== entranceFixed.level) return;
  const id = run.sets[++run.index];
  if (!id) { entranceTypeRun = null; return navigate("entrance-fixed"); }
  run.phase = "set"; state.quiz = null;
  await entranceFixedStart(id);
}
function entranceTypeContinuationHtml() {
  const run = entranceTypeRun;
  if (!run || run.exam !== entranceFixed.exam || run.level !== entranceFixed.level) return "";
  const done = run.phase === "old" ? state.page === "result" && state.quiz?.entranceTypeRun
    : state.page === "entrance-fixed-exam" && entranceFixed.payload?.paper.id === run.sets[run.index]
      && entranceFixed.payload.status !== "active";
  if (!done) return "";
  const more = run.index + 1 < run.sets.length;
  return `<button type="button" class="primary" data-et-next>${erText(more ? "Tiếp tục bộ luyện cùng dạng" : "Hoàn tất · Quay lại danh sách dạng",
    more ? "Continue with a multi-part set" : "Finish · Back to topics")}</button>`;
}
document.addEventListener("click", async event => {
  const button = event.target.closest("[data-et-type],[data-et-next]");
  if (!button || button.disabled) return;
  button.disabled = true;
  try { if (button.dataset.etType) await entranceTypeStart(button.dataset.etType); else await entranceTypeNext(); }
  catch (error) { entranceFixedNotice(error.message); }
  finally { button.disabled = false; }
});
