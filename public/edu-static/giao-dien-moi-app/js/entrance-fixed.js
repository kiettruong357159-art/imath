/**
 * entrance-fixed.js — Điều phối đề cố định: catalog, mở/resume, autosave và đồng hồ máy chủ.
 * Dùng: core.js, entrance-fixed-view.js, entrance-fixed-result.js; không có đáp án mẫu.
 * API: entrance_fixed_catalog/history/start/get/save/submit/result/self_score.
 * Quy tắc: thiết kế thi vào mục 11/14; khách chỉ giữ kết quả trong RAM sau nộp.
 */
"use strict";
const EF_SAVE_DELAY_MS = 650;
const entranceFixed = {
  exam: null, lang: "vi", catalog: null, history: [], level: null, index: 0,
  payload: null, result: null, answers: new Map(), dirty: new Map(), checked: new Map(),
  saveQueue: Promise.resolve(), saveTimer: null, clock: null, serverOffset: 0, submitting: false,
  starting: false, mode: "exam",
};
const efText = (vi, en) => entranceFixed.lang === "en" ? en : vi;
const efNumber = value => Number(value ?? 0).toLocaleString(entranceFixed.lang === "en" ? "en-US" : "vi-VN", { maximumFractionDigits: 2 });
const efKey = (position, part) => `${position}:${part}`;
const efStorageKey = () => `imath_entrance_active:${state.isGuest ? "guest" : state.user?.username}:${entranceFixed.exam}`;

/** Màn thi chưa dựng hai bản cạnh nhau: Song ngữ dùng Việt; English cần đề có bản Anh. */
function entranceFixedLanguage(languages = ["vi", "en"]) {
  return state.lang === "en" && languages.includes("en") ? "en" : "vi";
}

/** Lưu ID chủ lượt, không lưu đáp án/kết quả; API vẫn xác thực phiên khi tải lại. */
function entranceFixedRemember() {
  sessionStorage.setItem(efStorageKey(), JSON.stringify({ id: entranceFixed.payload.attempt_id, index: entranceFixed.index, mode: entranceFixed.mode }));
}
function entranceFixedNotice(message) {
  const element = $("#ef-notice");
  if (element) { element.textContent = message; element.hidden = !message; }
}

/** Catalog của kỳ thi độc lập với quyền lớp lộ trình; preview do máy chủ quyết định. */
async function renderEntranceFixed() {
  const exam = state.entranceExam || "vao_6";
  const directLevel = entranceFixed.entryLevel; entranceFixed.entryLevel = null;
  const changed = entranceFixed.exam !== exam;
  if (changed) {
    entranceFixed.exam = exam; entranceFixed.level = null; entranceFixed.payload = null;
    entranceFixed.result = null;
  }
  const preview = new URLSearchParams(location.search).get("preview") === "1";
  const [catalog, history] = await Promise.all([
    entranceCombinedCatalog(exam, preview),
    api("entrance_fixed_history", { exam_code: exam }),
  ]);
  if (state.page !== "entrance-fixed" || state.entranceExam && state.entranceExam !== exam) return;
  entranceFixed.catalog = catalog; entranceFixed.history = history.attempts;
  if (catalog.levels.length === 1) entranceFixed.level = catalog.levels[0].level_code;
  if (directLevel && catalog.levels.some(level => level.level_code === directLevel)) entranceFixed.level = directLevel;
  if (changed && !directLevel) {
    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem(efStorageKey()) || "null"); } catch (_) { sessionStorage.removeItem(efStorageKey()); }
    if (saved?.id) {
      try { entranceFixed.mode = saved.mode || "exam"; await entranceFixedResume(saved.id, saved.index); return; }
      catch (_) { sessionStorage.removeItem(efStorageKey()); }
    }
  }
  entranceFixedRenderCatalog();
}

/** Nhận đồng hồ/đáp án đã lưu từ máy chủ, không khởi tạo lại thời gian trên client. */
function entranceFixedAccept(payload, index = 0) {
  entranceFixed.payload = payload; entranceFixed.result = null;
  entranceFixed.lang = payload.language === "en" ? "en" : "vi";
  entranceFixed.index = Math.max(0, Math.min(Number(index) || 0, payload.questions.length - 1));
  entranceFixed.answers = new Map((payload.saved_answers || []).map(r => [efKey(r.position, r.part_id), r.answer]));
  entranceFixed.dirty.clear(); entranceFixed.checked.clear();
  entranceFixed.serverOffset = Date.parse(payload.server_time) - Date.now();
  entranceFixed.submitting = false;
}

/** Resume đúng chủ; lượt đã nộp lấy kết quả riêng, lượt active giữ deadline cũ. */
async function entranceFixedResume(id, index = 0) {
  if (efPractice()) return entranceSetResume(id, index);
  const payload = await api("entrance_fixed_get", { attempt_id: id });
  entranceFixedAccept(payload, index);
  if (payload.status !== "active") {
    entranceFixed.result = await api("entrance_fixed_result", { attempt_id: id });
    entranceFixedRenderResult(); return;
  }
  entranceFixedRemember(); entranceFixedRenderExam(); entranceFixedStartClock();
}

/** Chỉ start mới tạo lượt; không start lại khi reload hoặc bấm Tiếp tục. */
async function entranceFixedStart(testId) {
  if (entranceFixed.starting) return;
  entranceFixed.starting = true;
  try {
  const paper = entranceFixed.catalog.papers.find(p => p.id === testId && (hsgExam(entranceFixed.exam) || p.level_code === entranceFixed.level));
  if (hsgExam(entranceFixed.exam) && paper) entranceFixed.level = paper.level_code;
  // Chốt từ ô chung tại thời điểm bấm bắt đầu; payload/resume giữ ngôn ngữ máy chủ.
  entranceFixed.mode = paper?.family === "entrance_set" ? "practice" : "exam";
  entranceSet.hints.clear(); entranceSet.results.clear();
  const payload = await api(efPractice() ? "entrance_set_start" : "entrance_fixed_start", {
    test_id: testId, lang: entranceFixedLanguage(paper?.languages || ["vi"]), preview: entranceFixed.catalog.preview,
    level_code: entranceFixed.level,
  });
  entranceFixedAccept(payload); entranceFixedRemember(); entranceFixedRenderExam(); entranceFixedStartClock();
  entranceFixedMarkOpened();
  } finally { entranceFixed.starting = false; }
}

/** Đánh dấu mở ý riêng, không xoá đáp án có sẵn của bài. */
function entranceFixedMarkOpened() {
  if (efPractice()) return;
  const question = entranceFixed.payload.questions[entranceFixed.index];
  const id = entranceFixed.payload.attempt_id;
  const opened = question.parts.map(p => ({ position: question.position, part_id: p.part_id, opened: true }));
  entranceFixed.saveQueue = entranceFixed.saveQueue.catch(() => {}).then(() =>
    api("entrance_fixed_save", { attempt_id: id, answers: opened })
  ).catch(error => entranceFixedNotice(error.message));
}

/** Coalesce gõ nhanh rồi gửi nối tiếp; batch lỗi không ghi đè đáp án mới hơn. */
function entranceFixedChange(position, partId, answer) {
  const key = efKey(position, partId);
  entranceFixed.answers.set(key, answer);
  if (efPractice()) return;
  entranceFixed.dirty.set(key, { position, part_id: partId, answer });
  clearTimeout(entranceFixed.saveTimer);
  entranceFixed.saveTimer = setTimeout(() => entranceFixedFlush().catch(error => entranceFixedNotice(error.message)), EF_SAVE_DELAY_MS);
  const status = $("#ef-save-status");
  if (status) status.textContent = efText("Đang lưu…", "Saving…");
}

/** Chờ cả batch trước; khi nộp phải flush thành công hoặc máy chủ đã hết giờ. */
async function entranceFixedFlush() {
  if (efPractice()) return;
  clearTimeout(entranceFixed.saveTimer);
  const batch = [...entranceFixed.dirty.values()];
  entranceFixed.dirty.clear();
  const id = entranceFixed.payload?.attempt_id;
  const request = entranceFixed.saveQueue.catch(() => {}).then(async () => {
    if (!batch.length) return;
    try { await api("entrance_fixed_save", { attempt_id: id, answers: batch }); }
    catch (error) {
      for (const answer of batch) {
        const key = efKey(answer.position, answer.part_id);
        if (!entranceFixed.dirty.has(key) && JSON.stringify(entranceFixed.answers.get(key)) === JSON.stringify(answer.answer)) {
          entranceFixed.dirty.set(key, answer);
        }
      }
      throw error;
    }
    const status = $("#ef-save-status");
    if (status) status.textContent = efText("Đã lưu tạm", "Saved");
  });
  entranceFixed.saveQueue = request;
  await request;
  if (entranceFixed.dirty.size) await entranceFixedFlush();
}

/** Trả nội dung về catalog không huỷ lượt đang dở; ID vẫn phục hồi được khi reload. */
async function entranceFixedLeave() {
  entranceFixedStopClock();
  try { await entranceFixedFlush(); }
  catch (error) { if (error.code !== "ENTRANCE_TIME_UP") throw error; }
}
function entranceFixedStopClock() { clearInterval(entranceFixed.clock); entranceFixed.clock = null; }
function entranceFixedSeconds() {
  return Math.max(0, Math.ceil((Date.parse(entranceFixed.payload.deadline_at) - Date.now() - entranceFixed.serverOffset) / 1000));
}
function entranceFixedStartClock() {
  if (efPractice()) { entranceFixedStopClock(); return; }
  entranceFixedStopClock();
  const tick = () => {
    const left = entranceFixedSeconds(), clock = $("#ef-clock");
    if (clock) clock.textContent = `${String(Math.floor(left / 3600)).padStart(2,"0")}:${String(Math.floor(left / 60) % 60).padStart(2,"0")}:${String(left % 60).padStart(2,"0")}`;
    if (!left && !entranceFixed.submitting) {
      entranceFixedStopClock(); entranceFixedSubmit(true).catch(error => entranceFixedNotice(error.message));
    }
  };
  if (entranceFixedSeconds() > 0) entranceFixed.clock = setInterval(tick, 1000);
  tick();
}

/** Nộp dùng đáp án đã autosave, không gửi đáp án kèm lệnh để vượt deadline. */
async function entranceFixedSubmit(timeUp = false) {
  if (entranceFixed.submitting) return;
  if (!timeUp && !confirm(efText("Nộp bài và xem kết quả? Em sẽ không sửa đáp án sau khi nộp.", "Submit this paper? You cannot change answers afterwards."))) return;
  entranceFixed.submitting = true;
  document.querySelectorAll(".ef-exam button,.ef-exam input").forEach(element => { element.disabled = true; });
  try {
    try { await entranceFixedFlush(); }
    catch (error) { if (error.code !== "ENTRANCE_TIME_UP") throw error; }
    entranceFixed.result = await api("entrance_fixed_submit", { attempt_id: entranceFixed.payload.attempt_id });
    // Dùng đáp án thực sự đã chấm, kể cả khi một batch muộn bị deadline từ chối.
    entranceFixed.answers = new Map(entranceFixed.result.results.map(row => [efKey(row.position,row.part_id), row.submitted_answer]));
    entranceFixed.dirty.clear();
    entranceFixed.payload.status = entranceFixed.result.status;
    entranceFixedStopClock(); sessionStorage.removeItem(efStorageKey());
    entranceFixedRenderResult();
  } catch (error) { entranceFixed.submitting = false; entranceFixedRenderExam(); throw error; }
}

/** Các action giao diện chỉ chọn màn/bài; quyền và điểm luôn qua API. */
async function entranceFixedAction(button) {
  const action = button.dataset.efAction;
  if (button.dataset.efMode) entranceFixed.mode = button.dataset.efMode;
  if (efPractice() && ["submit", "hint"].includes(action)) return entranceSetAction(button);
  if (action === "hsg-tab" && hsgExam(entranceFixed.exam) && ["subjects", "exams"].includes(button.dataset.efTab)) {
    hsgView.tab = button.dataset.efTab; return entranceFixedRenderCatalog();
  }
  if (action === "level") { entranceFixed.level = button.dataset.efLevel; return entranceFixedRenderCatalog(); }
  if (action === "levels") { entranceFixed.level = null; return entranceFixedRenderCatalog(); }
  if (action === "start") return entranceFixedStart(button.dataset.efTest);
  if (action === "resume" || action === "history") {
    if (!button.dataset.efMode) entranceFixed.mode = entranceFixed.history.find(r => r.id === button.dataset.efAttempt)?.run_kind === "set"
      ? "practice" : "exam";
    return entranceFixedResume(button.dataset.efAttempt);
  }
  if (action === "submit") return entranceFixedSubmit();
  if (action === "exit") return navigate("practice");
  if (action === "catalog") { await entranceFixedLeave(); return navigate("entrance-fixed"); }
  if (action === "jump") {
    entranceFixed.index = Number(button.dataset.efIndex);
    if (state.page === "entrance-fixed-result") return entranceFixedRenderResult();
    entranceFixedRemember();
    entranceFixedRenderExam(); entranceFixedMarkOpened(); return;
  }
}
document.addEventListener("click", async event => {
  const open = event.target.closest("[data-ef-open]");
  if (open) { state.entranceExam = open.dataset.efOpen; entranceFixed.entryLevel = open.dataset.efEntryLevel || null;
    return navigate("entrance-fixed"); }
  const button = event.target.closest("[data-ef-action]");
  if (!button || button.disabled) return;
  try { await entranceFixedAction(button); } catch (error) { entranceFixedNotice(error.message); }
});
document.addEventListener("change", event => {
  if (event.target.id !== "language-select" || state.page !== "entrance-fixed") return;
  entranceFixedRenderCatalog();
});
