/**
 * cau-go-dap-so.js — Nhận diện câu gõ, dựng một/nhiều ô nhập, đơn vị và phím nhanh. Dùng: core.js (state, escapeHtml), i18n qua uiText. Không gọi API trực tiếp. Quy tắc nghiệp vụ: docs/chuan-cau-nhap-dap-so.md; dữ liệu chấm không được đưa vào DOM trước khi nộp.
 */
"use strict";

/** Chuẩn hóa cả hợp đồng cũ (chuỗi) và mới ({key,text}) trong thời gian chuyển đổi. */
const questionOptionRecords = (q) => {
  const values = Array.isArray(q.options)
    ? q.options
    : Object.values(q.options || {});
  return values.map((value, index) =>
    value && typeof value === "object"
      ? {
          key: String(value.key || "ABCDEF"[index] || index + 1),
          text: String(value.text ?? ""),
          text_vi: value.text_vi == null ? null : String(value.text_vi),
          text_en: value.text_en == null ? null : String(value.text_en),
        }
      : {
          key: String("ABCDEF"[index] || index + 1),
          text: String(value ?? ""),
          text_vi: q.options_vi?.[index] ?? null,
          text_en: q.options_en?.[index] ?? null,
        },
  );
};
const questionOptions = (q) => questionOptionRecords(q).map((item) => item.text);
const questionOptionKey = (q, index) => questionOptionRecords(q)[index]?.key || "";

/**
 * Giữ đúng thứ tự phương án đã thấy khi chỉ tải lại bản dịch của cùng lượt làm.
 * Máy chủ cố ý xáo ở mỗi lần mở đề, nhưng đổi ngôn ngữ không phải là một lần mở đề mới.
 */
function preserveQuestionOptionOrder(previousQuestions, translatedQuestions) {
  const previousById = new Map(
    (previousQuestions || []).map((question) => [String(question.id), question]),
  );
  return (translatedQuestions || []).map((question) => {
    const previous = previousById.get(String(question.id));
    if (!previous || isTypedQuestion(question)) return question;
    const order = questionOptionRecords(previous).map((option) => option.key);
    const incoming = new Map(
      questionOptionRecords(question).map((option) => [option.key, option]),
    );
    const options = order.map((key) => incoming.get(key)).filter(Boolean);
    if (options.length !== incoming.size) return question;
    return { ...question, options };
  });
}
const isTypedQuestion = (q) => q?.kieu_tra_loi === "nhap";
const typedAnswerSlots = (q) => {
  if (!isTypedQuestion(q)) return [];
  const slots =
    Array.isArray(q.o_nhap) && q.o_nhap.length
      ? q.o_nhap
      : [{ don_vi: q.don_vi || "" }];
  return slots.map((slot, index) => ({
    label:
      typeof slot === "object" && slot !== null
        ? String(slot.label || slot.nhan || "")
        : "",
    unit:
      typeof slot === "object" && slot !== null
        ? String(slot.don_vi || "")
        : index === 0
          ? String(q.don_vi || "")
          : "",
  }));
};
const answerDisplay = (value) =>
  Array.isArray(value) ? value.join(" · ") : String(value ?? "");
function typedAnswerHtml(q, choice, disabled = false) {
  const slots = typedAnswerSlots(q),
    values = Array.isArray(choice) ? choice : [choice ?? ""];
  const quickKeys =
    Number(q.grade_level || state.grade) >= 4
      ? `<div class="typed-quick-keys" aria-label="${uiText("Phím nhanh")}"><span>${uiText("Phím nhanh")}:</span><button type="button" class="outline" data-action="typed-key" data-typed-key=",">,</button><button type="button" class="outline" data-action="typed-key" data-typed-key="/">/</button></div>`
      : "";
  return `<div class="typed-answer"><p class="typed-answer-label">${uiText("Đáp số")}</p><div class="typed-slots">${slots.map((slot, index) => `<label class="typed-slot">${slot.label ? `<span>${escapeHtml(slot.label)}</span>` : ""}<span class="typed-input-row"><input class="typed-input" data-fill-answer="${index}" inputmode="decimal" autocomplete="off" aria-label="${uiText("Câu trả lời")} ${index + 1}" placeholder="${uiText("Nhập đáp số")}" value="${escapeHtml(values[index] ?? "")}" ${disabled ? "disabled" : ""}>${slot.unit ? `<strong class="typed-unit source-content">${escapeHtml(slot.unit)}</strong>` : ""}</span></label>`).join("")}</div>${disabled ? "" : quickKeys}</div>`;
}
const optionText = (q, index) => {
  const option = questionOptionRecords(q)[index];
  if (!option) return "";
  if (state.lang === "en") return option.text_en ?? option.text;
  if (state.lang === "bi") return option.text_en ?? option.text;
  return option.text_vi ?? option.text;
};
