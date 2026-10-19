/**
 * entrance-set.js — Chế độ luyện từng bài trên renderer thi vào chung.
 * Dùng entranceFixed và renderer part/result; API entrance_set_* giữ quyền, chấm và rubric.
 * Quy tắc giao việc 14/10: không đồng hồ; gợi ý mở từng nấc; nộp xong không sửa bài đó.
 */
"use strict";
const entranceSet = { hints: new Map(), results: new Map() };
const efPractice = () => entranceFixed.mode === "practice";

/** Nhận kết quả đã nộp; không yêu cầu lời giải cho các bài chưa làm. */
function entranceSetAcceptResult(result) {
  entranceFixed.result = result;
  for (const row of result.results) {
    entranceSet.results.set(efKey(row.position, row.part_id), row);
    entranceFixed.answers.set(efKey(row.position, row.part_id), row.submitted_answer);
  }
}

/** Tải lượt practice bằng cửa riêng, giữ index nhưng không tạo deadline. */
async function entranceSetResume(id, index = 0) {
  entranceFixed.mode = "practice";
  const payload = await api("entrance_set_get", { attempt_id: id });
  entranceFixedAccept(payload, index);
  entranceSet.hints.clear(); entranceSet.results.clear();
  entranceSetAcceptResult(await api("entrance_set_result", { attempt_id: id }));
  entranceFixedRemember(); entranceFixedRenderExam();
}

/** Nộp đủ khóa ý của riêng bài đang xem; điểm/lời giải chỉ do máy chủ trả. */
async function entranceSetSubmit() {
  if (entranceFixed.submitting) return;
  const question = entranceFixed.payload.questions[entranceFixed.index];
  if (entranceSet.results.has(efKey(question.position, question.parts[0].part_id))) return;
  entranceFixed.submitting = true;
  const answers = Object.fromEntries(question.parts.map(p => [p.part_id,
    entranceFixed.answers.get(efKey(question.position, p.part_id)) ?? null]));
  try {
    entranceSetAcceptResult(await api("entrance_set_submit", {
      attempt_id: entranceFixed.payload.attempt_id, position: question.position, answers,
    }));
    entranceFixed.payload.status = entranceFixed.result.status;
    if (entranceFixed.result.status !== "active") sessionStorage.removeItem(efStorageKey());
  } finally { entranceFixed.submitting = false; entranceFixedRenderExam(); }
}

/** Gợi ý đã được serializer allowlist; mỗi nhấn mở đúng một nấc cho ý đang chọn. */
function entranceSetHints(question, part) {
  const hints = part.hints?.goi_y || [], key = efKey(question.position, part.part_id);
  if (!hints.length || entranceSet.results.has(key)) return "";
  const opened = Math.min(hints.length, Math.max(0, entranceSet.hints.get(key) || 0));
  return `<div class="ef-hints"><button class="outline" data-ef-action="hint" data-ef-part="${escapeHtml(part.part_id)}"
    ${opened >= hints.length ? "disabled" : ""}>💡 ${efText("Gợi ý", "Hint")} ${opened}/${hints.length}</button>
    ${hints.slice(0, opened).map((text, i) => `<div class="ef-hint"><strong>${efText("Nấc", "Step")} ${i + 1}</strong>
      <div>${efRich(text)}</div></div>`).join("")}</div>`;
}

/** Chèn lời giải sau bài trên cùng khung; tái sử dụng renderer rubric và học sâu. */
function entranceSetReview(question) {
  if (!entranceSet.results.has(efKey(question.position, question.parts[0].part_id))) return "";
  return `<div class="ef-practice-review"><h2>${efText("Kết quả bài này", "This problem's result")}</h2>
    ${question.parts.map(p => entranceFixedResultPart(question, p)).join("")}</div>`;
}

function entranceSetAction(button) {
  if (button.dataset.efAction === "submit") return entranceSetSubmit();
  if (button.dataset.efAction === "hint") {
    const q = entranceFixed.payload.questions[entranceFixed.index], key = efKey(q.position, button.dataset.efPart);
    const total = q.parts.find(p => p.part_id === button.dataset.efPart)?.hints?.goi_y?.length || 0;
    entranceSet.hints.set(key, Math.min(total, (entranceSet.hints.get(key) || 0) + 1)); entranceFixedRenderExam(); return true;
  }
}
