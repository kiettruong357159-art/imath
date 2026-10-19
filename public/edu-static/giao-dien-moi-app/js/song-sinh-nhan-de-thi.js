/**
 * song-sinh-nhan-de-thi.js — Nhãn dạng đề thi và ô trả lời song sinh trong khung Cú.
 * Dùng: core.js, cau-go-dap-so.js, cau-dac-biet.js, loi-giai-goi-y.js, su-kien-tro-giup.js.
 * Không chọn câu/chấm ở trình duyệt; get_easier_question, submit_answer quyết định ở máy chủ.
 * Quy tắc: blueprint-de-tuan-lop10.md 8c–8d; song sinh không thuộc đề gốc.
 */
"use strict";

const EXAM_STYLE_LABELS = Object.freeze({
  vao_6: "Dạng đề thi vào 6", vao_10: "Dạng đề thi vào 10", thpt: "Dạng đề thi THPT",
});

function examStyleBadge(question) {
  const label = EXAM_STYLE_LABELS[question?.de_thi];
  return label ? `<span class="exam-style-badge">${uiText(label)}</span>` : "";
}

/** Dùng lại renderer câu nhập/Đ-S, nhưng tách selector để không ghi nhầm câu gốc. */
function owlAnswerControls(question, help) {
  const result = help.easierResult;
  if (isTypedQuestion(question)) return typedAnswerHtml(question, help.easierChoice, !!result)
    .replaceAll("data-fill-answer", "data-help-fill").replaceAll('data-action="typed-key"', 'data-action="help-typed-key"');
  if (isTrueFalse(question)) return trueFalseHtml(question, help.easierChoice || [], result?.y_results || [])
    .replaceAll("data-truth-index", "data-help-truth-index").replaceAll("data-truth-value", "data-help-truth-value");
  return `<div class="owl-easier-options">${questionOptions(question).map((option, index) =>
    `<button class="option ${help.easierChoice === index ? "selected" : ""}" data-action="help-easier-choice"
      data-easier-choice="${index}" ${result ? "disabled" : ""}><span class="option-letter">${"ABCDEF"[index]}</span>
      <span class="source-content">${localizedHtml(option, questionOptionRecords(question)[index].text_vi,
        questionOptionRecords(question)[index].text_en)}</span></button>`,
  ).join("")}</div>`;
}

function owlAnswerReady(question, help) {
  if (isTrueFalse(question)) return Array.isArray(help.easierChoice)
    && help.easierChoice.length === 4 && help.easierChoice.every((value) => typeof value === "boolean");
  if (isTypedQuestion(question)) {
    const values = Array.isArray(help.easierChoice) ? help.easierChoice : [help.easierChoice];
    return values.length === typedAnswerSlots(question).length
      && values.every((value) => value != null && String(value).trim() !== "");
  }
  return help.easierChoice != null;
}

function owlAnswerPayload(question, help) {
  if (isTypedQuestion(question) || isTrueFalse(question)) return { selected_answer: help.easierChoice };
  const key = questionOptionKey(question, help.easierChoice);
  return { selected_answer: key, selected_option_key: key, selected_position: "ABCDEF"[help.easierChoice] || "" };
}

async function handleTwinHelpClick(event) {
  const truth = event.target.closest("[data-help-truth-index]");
  const quick = event.target.closest('[data-action="help-typed-key"]');
  if (!truth && !quick) return false;
  const help = state.quiz?.helpPanels?.[state.quiz.index];
  if (!help || help.busy) return true;
  if (truth && !help.easierResult) {
    const choices = Array.isArray(help.easierChoice) ? [...help.easierChoice] : Array(4).fill(null);
    choices[Number(truth.dataset.helpTruthIndex)] = truth.dataset.helpTruthValue === "true";
    help.easierChoice = choices;
  }
  if (quick && !help.easierResult) {
    const field = document.querySelector(".owl-easier [data-help-fill]");
    if (field) {
      field.value += quick.dataset.typedKey || "";
      field.dispatchEvent(new Event("input", { bubbles: true }));
      field.focus();
    }
    return true;
  }
  renderQuiz();
  return true;
}

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-help-fill]")) return;
  const help = state.quiz?.helpPanels?.[state.quiz.index];
  if (!help || help.easierResult) return;
  const values = [...document.querySelectorAll(".owl-easier [data-help-fill]")].map((input) => input.value.trim());
  help.easierChoice = values.length === 1 ? values[0] : values;
  const check = document.querySelector('[data-action="help-easier-check"]');
  if (check) check.disabled = !owlAnswerReady(help.easierQuestion, help) || help.busy;
});
