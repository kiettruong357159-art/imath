/**
 * lich-su-lam-bai.js — Danh sách lượt làm đã lưu, bộ lọc, CSV và màn xem lại chỉ đọc.
 * Dùng: core.js (state, api), cai-dat-ngon-ngu.js (uiText), thoi-gian-cau-hoi.js (renderMath).
 * API gọi: get_attempt_history, get_attempt_review.
 * Quy tắc nghiệp vụ: học sinh chỉ xem chính mình; phụ huynh chỉ xem con đã gắn; xem lại không tạo lượt làm mới.
 */
"use strict";

const HISTORY_TYPES = Object.freeze([
  ["all", "Tất cả loại bài"],
  ["weekly", "Lộ trình tuần"],
  ["exam", "Đề kỳ"],
  ["topic", "Ôn chủ đề"],
  ["singapore", "Toán Singapore"],
  ["extra", "Luyện thêm"],
]);

const historyNumber = (value) => new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 1 }).format(Number(value) || 0);

function historyDuration(milliseconds) {
  if (!Number(milliseconds)) return uiText("Chưa đủ dữ liệu");
  const minutes = Number(milliseconds) / 60000;
  return `${historyNumber(minutes < 1 ? Math.max(1, Math.round(minutes)) : Math.round(minutes * 10) / 10)} ${uiText("phút")}`;
}

function historyDateTime(value) {
  const date = new Date(String(value).replace(" ", "T") + "+07:00");
  return Number.isNaN(date.getTime())
    ? escapeHtml(value)
    : new Intl.DateTimeFormat(state.lang === "en" ? "en-GB" : "vi-VN", {
      dateStyle: "short", timeStyle: "short", timeZone: "Asia/Ho_Chi_Minh",
    }).format(date);
}

function historyTypeOptions(selected) {
  return HISTORY_TYPES.map(([value, label]) =>
    `<option value="${value}" ${selected === value ? "selected" : ""}>${uiText(label)}</option>`,
  ).join("");
}

function historySummaryHtml(summary) {
  const highest = summary.highest
    ? `${summary.highest.score}/${summary.highest.max_score} · ${historyNumber(summary.highest.percent)}%`
    : "—";
  const cards = [
    ["document", summary.total_tests, "Tổng số bài đã làm"],
    ["bar_chart", Number(summary.total_tests) ? `${historyNumber(summary.average_percent)}%` : "—", "Điểm trung bình"],
    ["star", highest, "Bài điểm cao nhất"],
    ["clock", historyDuration(summary.average_duration_ms), "Thời gian trung bình"],
    ["fire", summary.current_streak, "Chuỗi ngày học"],
  ];
  return `<div class="history-summary">${cards.map(([image, value, label]) =>
    `<article><span>${icon(image)}</span><strong>${escapeHtml(String(value))}</strong><small>${uiText(label)}</small></article>`,
  ).join("")}</div>`;
}

function historyItemsHtml(items) {
  if (!items.length) return `<div class="history-empty">
    <span>${icon("learning_path")}</span><h3>${uiText("Em chưa có lượt làm nào trong khoảng này")}</h3>
    <p>${uiText("Bắt đầu từ lộ trình tuần để lưu những bước tiến đầu tiên nhé.")}</p>
    <button type="button" class="primary" data-history-path>${uiText("Vào lộ trình tuần")}</button>
  </div>`;
  return `<div class="history-list">${items.map((item) => {
    const band = scoreBand(item.score, item.max_score);
    return `<article class="history-item score-${band.key}">
      <div class="history-date"><strong>${historyDateTime(item.solved_at)}</strong><small>${escapeHtml(item.type_label)}</small></div>
      <div class="history-test"><strong>${escapeHtml(item.name)}</strong><small>${uiText("Lớp")} ${item.grade_level}</small></div>
      <div class="history-score"><strong>${item.score}/${item.max_score}</strong><small>${historyNumber(item.percent)}%</small></div>
      <div class="history-duration">${historyDuration(item.duration_ms)}</div>
      <button type="button" class="outline" data-history-review="${item.history_id}">${uiText("Xem lại")}</button>
    </article>`;
  }).join("")}</div>`;
}

function historyPanelHtml(history, parentMode) {
  return `<section class="account-panel-card history-panel" data-history-username="${escapeHtml(history.username)}">
    <div class="account-panel-heading"><span>${icon("clock")}</span><div><h2>${uiText("Lịch sử làm bài")}</h2>
      <p>${parentMode ? uiText("Xem các bài con đã làm và lời giải đã mở.") : uiText("Xem lại các bài em đã làm và sự tiến bộ theo thời gian.")}</p></div></div>
    <form class="history-filters" id="history-filter-form">
      <label>${uiText("Loại bài")}<select name="type">${historyTypeOptions(history.filters.type)}</select></label>
      <label>${uiText("Từ ngày")}<input type="date" name="date_from" value="${history.filters.date_from}"></label>
      <label>${uiText("Đến ngày")}<input type="date" name="date_to" value="${history.filters.date_to}"></label>
      <button type="submit" class="primary">${uiText("Lọc")}</button>
      <button type="button" class="outline" data-history-export ${history.items.length ? "" : "disabled"}>${uiText("Xuất báo cáo CSV")}</button>
    </form>
    ${historySummaryHtml(history.summary)}
    <div id="history-results">${historyItemsHtml(history.items)}</div>
    <div id="history-review" class="history-review" hidden></div>
  </section>`;
}

/** Tải lịch sử vào một vùng bất kỳ; parentMode chỉ thay lời dẫn, quyền vẫn do máy chủ quyết định. */
async function renderAttemptHistory(targetSelector = "#account-body", username = "", parentMode = false, filters = {}) {
  const target = typeof targetSelector === "string" ? $(targetSelector) : targetSelector;
  if (!target) return;
  target.innerHTML = `<section class="account-panel-card"><p>${uiText("Đang tải...")}</p></section>`;
  try {
    const result = await api("get_attempt_history", { username, ...filters, lang: state.lang });
    target.innerHTML = historyPanelHtml(result.history, parentMode);
    target.dataset.historyParentMode = parentMode ? "1" : "0";
    state.historyData = result.history;
    renderMath();
  } catch (error) {
    target.innerHTML = `<section class="account-panel-card history-empty"><p>${escapeHtml(error.message)}</p></section>`;
  }
}

function historySolutionHtml(question) {
  return sharedSolutionHtml(question);
}

function historyReviewHtml(review) {
  const questions = review.questions.map((item, index) => {
    const heading = `<h3>${uiText("Câu")} ${index + 1} · ${item.is_correct ? `✓ ${uiText("Đúng")}` : `✗ ${uiText("Sai")}`}</h3>`;
    // Vị trí A–F thay đổi theo lần mở; lịch sử chỉ nói bằng nội dung để không gây hiểu nhầm.
    if (isTrueFalse(item.question)) return `<article class="history-review-question ${item.is_correct ? "correct" : "incorrect"}">`
      + heading + richText(item.question.question) + mediaHtml(item.question) + trueFalseResultHtml({ ...item, correct: item.is_correct }, item.question) + '</article>';
    if (isEssay(item.question)) return `<article class="history-review-question"><strong>${uiText("Tự luận (tự chấm):")}
      ${specialNumber(item.self_score)}/${specialNumber(item.tong_diem)}</strong>${mediaHtml(item.question)}${essayModelReadonlyHtml(item)}</article>`;
    const selected = item.selected_answer || uiText("Chưa trả lời");
    const correct = item.correct_answer;
    return `<article class="history-review-question ${item.is_correct ? "correct" : "incorrect"}">
      ${heading}
      <div class="history-question-text">${richText(item.question.question || "")}</div>${mediaHtml(item.question)}
      <p><strong>${uiText("Em trả lời:")}</strong> ${escapeHtml(String(selected))}</p>
      <p><strong>${uiText("Đáp án đúng:")}</strong> ${escapeHtml(String(correct || ""))}</p>
      <div class="history-solution">${historySolutionHtml(item)}</div>
    </article>`;
  }).join("");
  return `<div class="history-review-heading"><div><h2>${escapeHtml(review.name)}</h2>
      <p>${review.score}/${review.max_score} · ${historyDateTime(review.solved_at)}</p></div>
      <button type="button" class="outline" data-history-review-close>${uiText("Đóng")}</button></div>${questions}`;
}

async function openAttemptHistoryReview(panel, historyId) {
  const reviewTarget = panel.querySelector("#history-review");
  reviewTarget.hidden = false;
  reviewTarget.innerHTML = `<p>${uiText("Đang tải...")}</p>`;
  try {
    const result = await api("get_attempt_review", {
      username: panel.dataset.historyUsername, history_id: Number(historyId), lang: state.lang,
    });
    reviewTarget.innerHTML = historyReviewHtml(result.review);
    renderMath();
    reviewTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    reviewTarget.innerHTML = `<p class="error">${escapeHtml(error.message)}</p>`;
  }
}

/** CSV có BOM để Excel nhận UTF-8 và dấu tiếng Việt. */
function exportAttemptHistoryCsv(history) {
  const rows = [
    ["Ngày giờ", "Tên đề", "Loại", "Lớp", "Điểm", "%", "Thời gian (phút)"],
    ...history.items.map((item) => [
      item.solved_at, item.name, item.type_label, item.grade_level, `${item.score}/${item.max_score}`,
      item.percent, Math.round(Number(item.duration_ms || 0) / 6000) / 10,
    ]),
  ];
  const csv = rows.map((row) => row.map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${state.lang === "en" ? "learning-history" : "lich-su-lam-bai"}-${history.username}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindAttemptHistoryEvents() {
  $("#content").addEventListener("submit", async (event) => {
    if (!event.target.matches("#history-filter-form")) return;
    event.preventDefault();
    const panel = event.target.closest(".history-panel");
    const values = Object.fromEntries(new FormData(event.target));
    await renderAttemptHistory(panel.parentElement, panel.dataset.historyUsername,
      panel.parentElement.dataset.historyParentMode === "1", values);
  });
  $("#content").addEventListener("click", async (event) => {
    const panel = event.target.closest(".history-panel");
    const review = event.target.closest("[data-history-review]");
    if (review && panel) return openAttemptHistoryReview(panel, review.dataset.historyReview);
    if (event.target.closest("[data-history-review-close]") && panel) {
      panel.querySelector("#history-review").hidden = true;
      return;
    }
    if (event.target.closest("[data-history-export]") && state.historyData) {
      exportAttemptHistoryCsv(state.historyData);
      return;
    }
    if (event.target.closest("[data-history-path]")) {
      state.page = "path";
      state.accountTab = "profile";
      await render();
    }
  });
}
