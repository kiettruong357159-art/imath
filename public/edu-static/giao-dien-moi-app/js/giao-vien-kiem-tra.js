/**
 * giao-vien-kiem-tra.js — Đếm rời trang và giữ quyền ghi cho tab đang tiếp tục bài kiểm tra.
 * Dùng api/state của học sinh; gv_student_integrity kiểm phiên, consent và token ở server.
 * Blur và visibilitychange được gộp thành một khoảng rời, không tự trừ điểm hay khóa vì chuyển tab.
 * Theo giao việc tiện ích đợt 2 ngày 07/10; chỉ bật khi bài giao bật track_leaving.
 */
"use strict";
const teacherDeviceToken = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
const TEACHER_INTEGRITY_PING_MS = 15000;
let teacherIntegrity = null;
function teacherIntegrityStart(result) {
  teacherIntegrityStop();
  if (!result.assignment.track_leaving || result.assignment.mode !== "exam") return;
  const client = result.attempt.integrity_client || {};
  teacherIntegrity = { attempt: result.attempt.id, count: client.client_count || 0, elapsed: client.client_ms || 0,
    since: null, sequence: client.sequence || 0, warned: (client.client_count || 0) > 0, replaced: false };
  teacherIntegrity.timer = setInterval(teacherIntegrityPing, TEACHER_INTEGRITY_PING_MS);
}
function teacherIntegrityStop() {
  if (teacherIntegrity) clearInterval(teacherIntegrity.timer);
  teacherIntegrity = null;
}
/** Tổng tích lũy theo tab; server cộng chênh lệch có sequence để không đếm lại gói lặp. */
function teacherIntegrityPayload() {
  const t = teacherIntegrity;
  return { device_token: teacherDeviceToken, ...(t ? { integrity: {
    sequence: ++t.sequence, leave_count: t.count,
    outside_ms: Math.round(t.elapsed + (t.since === null ? 0 : performance.now() - t.since)),
  } } : {}) };
}
async function teacherIntegrityPing() {
  const t = teacherIntegrity;
  if (!t || t.replaced) return;
  if (state.page !== "quiz" || state.quiz?.teacherAttempt !== t.attempt) { teacherIntegrityStop(); return; }
  try { await api("gv_student_integrity", { attempt_id: t.attempt, ...teacherIntegrityPayload() }); }
  catch (error) {
    if (error.code !== "GV_DEVICE_REPLACED" && error.error_code !== "GV_DEVICE_REPLACED"
      && !error.message.includes("thiết bị khác")) return;
    t.replaced = true; clearInterval(t.timer);
    document.querySelectorAll("#content button, #content input").forEach((el) => { el.disabled = true; });
    const box = document.createElement("p"); box.className = "band teacher-integrity-notice";
    box.textContent = "Bài đang được tiếp tục ở tab hoặc thiết bị khác. Em mở lại bài để tiếp tục ở đây nhé.";
    document.querySelector("#content")?.prepend(box);
  }
}
/** Hai sự kiện thường đến cùng nhau; chỉ trạng thái trong/ngoài thay đổi mới tăng số lần. */
function teacherIntegrityVisibility() {
  const t = teacherIntegrity;
  if (!t || t.replaced) return;
  const outside = document.hidden || !document.hasFocus();
  if (outside && t.since === null) {
    t.since = performance.now(); t.count++;
    if (!t.warned) {
      t.warned = true;
      const box = document.createElement("p"); box.className = "band teacher-integrity-notice"; box.setAttribute("role", "status");
      box.textContent = "Em đang làm bài kiểm tra, hãy ở lại trang này nhé";
      document.querySelector("#content")?.prepend(box);
    }
    teacherIntegrityPing();
  } else if (!outside && t.since !== null) {
    t.elapsed += performance.now() - t.since; t.since = null; teacherIntegrityPing();
  }
}
document.addEventListener("visibilitychange", teacherIntegrityVisibility);
window.addEventListener("blur", teacherIntegrityVisibility);
window.addEventListener("focus", teacherIntegrityVisibility);
window.addEventListener("pagehide", () => {
  if (!teacherIntegrity || teacherIntegrity.replaced) return;
  imathApiFetch("api.php?action=gv_student_integrity", { method: "POST", credentials: "same-origin", keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ attempt_id: teacherIntegrity.attempt, ...teacherIntegrityPayload() }) }).catch(() => {});
});
