/**
 * cau-dac-biet.js — Đúng/Sai bốn ý và tự luận làm trên giấy, tự chấm riêng.
 * Dùng: core.js, lam-bai.js, speech.js; API reveal_essay, save_essay_assessment, submit_answer.
 * Quy tắc: blueprint-de-tuan-lop10.md mục 3, 5; tự luận không cộng vào điểm đề.
 */
"use strict";

const isTrueFalse = (q) => q?.kieu_tra_loi === "dung_sai";
const isEssay = (q) => q?.kieu_tra_loi === "tu_luan";
const isSpecialQuestion = (q) => isTrueFalse(q) || isEssay(q);
const specialNumber = (n) => String(Number(n)).replace(".", ",");
const truthLabel = (value) => window.IMATH_I18N.truthLabel(value, state.lang);

/** Cùng khối cho làm bài, lịch sử và lời giải yêu thích; thứ tự a–d luôn giữ nguyên. */
function trueFalseHtml(q, choices = [], details = []) {
  return `<div class="true-false-list">${(q.y || []).map((item, index) => {
    const detail = details[index];
    const selected = Array.isArray(choices) ? choices[index] : undefined;
    const status = detail ? (detail.correct ? "is-correct" : "is-wrong") : "";
    return `<article class="true-false-row ${status}"><div class="speech-content-row">
      <div><strong>${escapeHtml(item.nhan)})</strong> ${localizedHtml(item.menh_de, item.menh_de_vi, item.menh_de_en)}</div>
      ${speechButton(localizedSpeechText(item.menh_de, item.menh_de_vi || item.menh_de, item.menh_de_en || item.menh_de))}</div>
      <div class="true-false-buttons">${[true, false].map((value) =>
        `<button type="button" class="outline ${selected === value ? "selected" : ""}"
          data-truth-index="${index}" data-truth-value="${value}" aria-pressed="${selected === value}"
          ${detail ? "disabled" : ""}><span data-no-ui-translate>${truthLabel(value)}</span></button>`,
      ).join("")}</div>${detail ? `<p>${detail.correct ? "✓" : "✗"} ${uiText("Em trả lời:")}
        <span data-no-ui-translate>${detail.selected === null ? uiText("Chưa trả lời") : truthLabel(detail.selected)}</span>
        · ${uiText("Đáp án đúng:")} <span data-no-ui-translate>${truthLabel(detail.dung)}</span></p>
        <div class="statement-explanation">${sharedSolutionHtml({explanation:detail.giai})}</div>` : ""}</article>`;
  }).join("")}</div>`;
}

function trueFalseResultHtml(result, q) {
  const details = result.y_results || [];
  return `<div id="answer-feedback" class="answer-feedback ${result.correct ? "correct" : "incorrect"}">
    <strong>${uiText("Em đúng")} ${result.correct_count}/4 ${uiText("ý")} — ${specialNumber(result.points)} ${uiText("điểm")}</strong>
    ${knowledgeContextHtml(q, result, state.quiz || {})}
    ${trueFalseHtml(q, details.map((item) => item.selected), details)}</div>`;
}

/** Bài giải mẫu chỉ được lấy khi em xác nhận đã làm xong trên giấy. */
function essayHtml(q, quiz) {
  const opened = quiz.essayRubrics?.[quiz.index];
  if (!opened) return `<div class="essay-panel"><p>${uiText("Em làm bài ra giấy")}</p>
    <button class="primary" data-essay-finish>${uiText("Em đã làm xong")}</button></div>`;
  const result = quiz.results[quiz.index];
  const checked = quiz.essayChecks?.[quiz.index] || [];
  const sum = opened.loi_giai_mau.reduce((total, step, index) => total + (checked[index] ? Number(step.diem) : 0), 0);
  return `<div class="essay-panel"><h2>${uiText("Bài giải mẫu — tự chấm từng bước")}</h2>
    ${sharedSolutionHtml({explanation:window.IMATH_SOLUTION_VIEW.numberedSteps(opened.loi_giai_mau.map(step=>step.buoc),state.lang)},{
      stepControls:opened.loi_giai_mau.map((step,index)=>`<label class="essay-step sv-rubric-check"><input type="checkbox" data-essay-step="${index}" ${checked[index] ? "checked" : ""} ${result ? "disabled" : ""}><span>${uiText("Bước")} ${index+1} · ${specialNumber(step.diem)} ${uiText("điểm")}</span></label>`),
    })}
    <strong>${uiText("Em tự chấm:")} ${specialNumber(sum)}/${specialNumber(opened.tong_diem)}</strong>
    <h3>${uiText("Lỗi hay bị trừ điểm")}</h3>${(opened.loi_hay_gap || []).map((error) => `<p>${richText(error)}</p>`).join("")}
    <p>${uiText("Điểm tự luận lưu riêng, không cộng vào điểm đề.")}</p>
    ${result ? "" : `<button class="primary" data-essay-save>${uiText("Lưu điểm tự chấm")}</button>`}</div>`;
}

/** Xem lại chỉ đọc; không hiện checkbox hay gọi API lưu tự chấm. */
function essayModelReadonlyHtml(payload) {
  return `<div class="essay-panel"><h3>${uiText("Bài giải mẫu — tự chấm từng bước")}</h3>
    ${sharedSolutionHtml({explanation:window.IMATH_SOLUTION_VIEW.numberedSteps((payload.loi_giai_mau || []).map(step=>step.buoc),state.lang)},{
      stepControls:(payload.loi_giai_mau || []).map(step=>`<small>${specialNumber(step.diem)} ${uiText("điểm")}</small>`),
    })}
    <h4>${uiText("Lỗi hay bị trừ điểm")}</h4>${(payload.loi_hay_gap || []).map((error) => `<p>${richText(error)}</p>`).join("")}</div>`;
}

async function handleSpecialAnswerClick(event) {
  const truth = event.target.closest("[data-truth-index]");
  const finish = event.target.closest("[data-essay-finish]");
  const step = event.target.closest("[data-essay-step]");
  const save = event.target.closest("[data-essay-save]");
  if (!truth && !finish && !step && !save) return false;
  const quiz = state.quiz, index = quiz.index, q = quiz.questions[index];
  if (truth) {
    const choices = Array.isArray(quiz.choices[index]) ? quiz.choices[index] : Array(4).fill(null);
    choices[Number(truth.dataset.truthIndex)] = truth.dataset.truthValue === "true";
    quiz.choices[index] = choices;
  }
  try {
    if (finish) {
      (quiz.essayRubrics ||= [])[index] = await api("reveal_essay", { question_id: q.id });
      (quiz.essayChecks ||= [])[index] = quiz.essayRubrics[index].loi_giai_mau.map(() => false);
    }
    if (step) quiz.essayChecks[index][Number(step.dataset.essayStep)] = step.checked;
    if (save) {
      const attemptId = (quiz.attemptIds[index] ||= `essay-${Date.now()}-${index}`);
      const answer = await api("save_essay_assessment", {
        question_id: q.id, client_attempt_id: attemptId, checked_steps: quiz.essayChecks[index],
      });
      quiz.results[index] = { ...answer, essay: true, correct: null };
    }
    renderQuiz();
  } catch (error) { showError("#quiz-error", error); }
  return true;
}
