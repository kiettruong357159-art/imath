/**
 * entrance-remediation.js — Tối đa ba dạng sai ở kết quả thi, lượt luyện riêng tối đa 10 câu.
 * Dùng API câu công khai và renderer/chấm thường; kết quả đề gốc giữ trong RAM khi đi luyện.
 * Quy tắc 14/10: không danh sách luyện ở chọn đề, quay về đúng kết quả, VI/EN.
 */
"use strict";
const entranceRemediation = { original: null };
const erText = (vi,en) => state.lang === "en" ? en : vi;
const erName = group => state.lang === "en" ? group.name_en || group.name_vi : group.name_vi;

function entranceRemediationHtml() {
  if (efPractice() || !["vao_6","vao_10"].includes(entranceFixed.exam)) return "";
  const groups = entranceFixed.result.remediation || [];
  const wrong = entranceFixed.result.results.some(r => r.grading_method === "machine" && r.is_correct === false);
  if (!wrong) return `<p class="ef-praise">${erText("Em đã làm đúng tất cả các ý máy chấm. Tiếp tục phát huy nhé!",
    "You answered every machine-marked part correctly. Keep it up!")}</p>`;
  if (!groups.length) return "";
  return `<section class="ef-panel ef-remediation"><h2>${erText("Em cần luyện thêm", "Your next practice")}</h2>
    <p>${erText("Luyện đúng dạng còn sai, rồi quay lại xem kết quả đề.", "Practise the topics you missed, then return to your paper results.")}</p>
    <div class="ef-remediation-grid">${groups.map(group => `<article><h3>${escapeHtml(erName(group))}</h3>
      <p>${erText(`Sai ${group.wrong}/${group.total} ý`, `${group.wrong}/${group.total} parts incorrect`)}</p><div class="ef-remediation-actions">
      ${group.question_ids.length ? `<button class="primary" data-er-type="${escapeHtml(group.code)}">${erText("Luyện dạng này", "Practise this topic")} · ${group.question_ids.length}</button>` : ""}
      ${group.set_id ? `<button class="outline" data-er-set="${escapeHtml(group.set_id)}">${erText("Bộ luyện nhiều ý", "Multi-part practice")}</button>` : ""}
      ${!group.question_ids.length && !group.set_id ? `<small>${erText("Chưa có câu luyện phù hợp ở mức này.", "Practice at this level is being prepared.")}</small>` : ""}
    </div></article>`).join("")}</div></section>`;
}

/** Giữ cả snapshot, điểm, ý tự đối chiếu; mở bộ luyện mới không ghi đè kết quả gốc. */
function entranceRemediationRemember() {
  if (!entranceRemediation.original) entranceRemediation.original = { ...entranceFixed };
}
/** Quay về kết quả RAM; khách không gọi lại attempt đã xóa, không nộp đề lần nữa. */
function entranceRemediationReturn() {
  if (!entranceRemediation.original) return false;
  entranceFixedStopClock();
  Object.assign(entranceFixed, entranceRemediation.original);
  entranceRemediation.original = null; state.quiz = null;
  entranceFixedRenderResult(); return true;
}
function entranceRemediationReturnButton() {
  return entranceRemediation.original ? `<button class="outline" data-er-return>${erText("← Quay lại kết quả đề", "← Back to paper results")}</button>` : "";
}

/** Rời luồng luyện/kết quả thì bỏ bản RAM; bài thường sau đó không quay nhầm về đề cũ. */
function entranceRemediationNavigation(page) {
  if (page === "entrance-fixed" || (!page.startsWith("entrance-fixed")
      && !(["quiz","result"].includes(page) && state.quiz?.kind === "entrance-practice"))) {
    entranceRemediation.original = null;
  }
}

/** Mỗi lần tải đều kiểm grant/chủ phiên ở server, không dùng ID tự gửi để mở kho. */
async function entrancePracticeStart(type) {
  entranceRemediationRemember();
  const result = await api("entrance_remediation_questions", { attempt_id:entranceRemediation.original.result.attempt_id, type_code:type });
  state.returnPage = "entrance-fixed-result";
  entrancePracticeQuiz(result,type);
  renderQuiz();
}
/** Luyện từ kết quả và danh mục dùng cùng state câu/chấm, không lưu điểm vào bộ gốc. */
function entrancePracticeQuiz(result,type) {
  const questions = result.questions;
  state.quiz = {test:{id:questions[0].test_id, grade_level:questions[0].grade_level, name:erName(result)},
    questions, index:0, choices:questions.map(()=>null), results:questions.map(()=>null), attemptIds:[],
    confidences:[], questionTimers:questions.map(()=>({elapsedMs:0,startedAt:null})),
    hints:questions.map(()=>[]), hintTotals:[], hintUnavailable:[], hintBusy:false, hintError:"", solutionReveal:[],
    kind:"entrance-practice", entranceType:type};
}
async function entrancePracticeRefreshLanguage() {
  entranceFixed.lang = state.lang === "en" ? "en" : "vi";
  const attempt = state.quiz.entranceTypeRun ? entranceTypeRun.practiceId : entranceRemediation.original.result.attempt_id;
  const result = await api("entrance_remediation_questions", { attempt_id:attempt, type_code:state.quiz.entranceType });
  state.quiz.questions = preserveQuestionOptionOrder(state.quiz.questions,result.questions);
  state.quiz.test.name = erName(result); renderQuiz();
}

document.addEventListener("click", async event => {
  const button = event.target.closest("[data-er-type],[data-er-set],[data-er-return]");
  if (!button || button.disabled) return;
  if (button.hasAttribute("data-er-return")) return void entranceRemediationReturn();
  button.disabled = true;
  try {
    if (button.dataset.erType) await entrancePracticeStart(button.dataset.erType);
    else { entranceRemediationRemember(); await entranceFixedStart(button.dataset.erSet); }
  } catch(error) { entranceFixedNotice(error.message); }
  finally { button.disabled = false; }
});

document.addEventListener("change", event => {
  if (event.target.id === "language-select" && state.page === "entrance-fixed-result") entranceFixedRenderResult();
});
