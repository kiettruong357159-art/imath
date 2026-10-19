/**
 * bao-cao-huy-hieu.js — Báo cáo năng lực, thẻ chỉ số, huy hiệu nỗ lực và phiếu in cho phụ huynh.
 * Dùng: core.js, lo-trinh.js, chuyen-muc.js.
 * API gọi: get_competency_report, get_review_questions, get_questions.
 * Quy tắc nghiệp vụ: docs/dac-ta-bao-cao-nang-luc.md mục 3, 4, 7 và 7b.
 */
"use strict";

const percentText = (value) =>
  value == null || !Number.isFinite(Number(value))
    ? "Chưa đủ dữ liệu"
    : `${Number(value).toLocaleString("vi-VN", { maximumFractionDigits: 1 })}%`;
const numberText = (value, suffix = "") =>
  value == null || !Number.isFinite(Number(value))
    ? "Chưa đủ dữ liệu"
    : `${Number(value).toLocaleString("vi-VN", { maximumFractionDigits: 1 })}${suffix}`;
function competencyLevel(level) {
  return competencyLevels[level] || competencyLevels.chua_du_du_lieu;
}
function metricTone(label, percent = null) {
  const value = String(label || "").toLocaleLowerCase("vi");
  if (
    /tốt|đúng|vượt|good|on schedule|ahead/.test(value) ||
    Number(percent) >= 80
  )
    return "good";
  if (/tạm|đạt|fair/.test(value) || Number(percent) >= 60) return "steady";
  if (percent == null && !label) return "muted";
  return "effort";
}
function metricCard(image, value, title, label, tone) {
  return `<article class="competency-metric ${tone || "muted"}"><span class="metric-icon">${icon(image)}</span><div><strong>${escapeHtml(value)}</strong><p>${escapeHtml(title)}</p><span class="metric-label">${escapeHtml(label || "Chưa đủ dữ liệu")}</span></div></article>`;
}
function diagnosisText(n2) {
  const labels =
    state.lang === "vi"
      ? {
          hong_goc: "Em cần ôn lại kiến thức gốc",
          chua_van_dung: "Em biết làm bài cơ bản, cần luyện bài vận dụng",
          co_kha_nang_nang_cao: "Em có khả năng làm bài nâng cao",
        }
      : {
          hong_goc: "Review the core knowledge",
          chua_van_dung:
            "Your child can solve basic problems and should practise application problems",
          co_kha_nang_nang_cao: "Your child is ready for advanced problems",
        };
  const diagnoses = Array.isArray(n2?.diagnoses) ? n2.diagnoses : [];
  return (
    diagnoses
      .map((item) => labels[typeof item === "string" ? item : item?.code])
      .filter(Boolean)
      .join(" · ") ||
    (state.lang === "vi"
      ? "Chưa đủ dữ liệu để đưa ra chẩn đoán."
      : "Not enough data for a diagnosis yet.")
  );
}
/** A practice action exists only when the current student's catalog has a destination. */
function findCompetencyPracticeTopic(code, grade) {
  return (window.IMATH_GRADE_CATALOGS?.[grade]?.topics || [])
    .flatMap(group => (group.items || []).map((entry, index) => ({...entry, groupId:group.id, index})))
    .find(entry => entry.code === code);
}
function competencyAssistanceText(item) {
  const labels = [];
  if (Number(item.hinted_correct)) labels.push(uiText(`${Number(item.hinted_correct)} đúng nhờ gợi ý`));
  if (Number(item.assistance_unknown_correct)) labels.push(uiText(`${Number(item.assistance_unknown_correct)} đúng, chưa rõ dùng gợi ý`));
  return labels.length ? `<small>${escapeHtml(labels.join(" · "))}</small>` : "";
}
let parentCompetencySequence = 0;
/** Keep identity, period, render target and in-flight response tied to the selected child. */
async function renderParentCompetencyReport(child, range) {
  const target = $("#account-parent-report");
  if (!target || !child) return;
  const ticket = ++parentCompetencySequence;
  state.parentReportChild = child;
  state.competencyRange = range;
  state.competencyGroup = null;
  target.innerHTML = `<h3>${uiText("Báo cáo học tập")} · ${escapeHtml(child.display_name || child.username)} · ${uiText("Lớp")} ${Number(child.grade_level)}</h3><div id="report-body" class="band">${uiText("Đang tải...")}</div>`;
  const body = target.querySelector("#report-body");
  const current = () => ticket === parentCompetencySequence && body.isConnected
    && state.page === "account" && state.accountTab === "parent"
    && state.parentReportChild?.username === child.username;
  try {
    const result = await api("parent_get_competency_report", {username:child.username, range, lang:state.lang});
    if (!current()) return;
    renderCompetencyBody(result.report);
  } catch (error) {
    if (current()) body.textContent = error.message;
  }
}
/** Dựng toàn bộ báo cáo năng lực từ payload C/T/N và huy hiệu do máy chủ tổng hợp. */
function renderCompetencyBody(report) {
  const body = $("#report-body");
  if (!body) return;
  state.competencyReport = report;
  const c = report.cham_hoc || {},
    attitude = report.thai_do || {},
    ability = report.nang_luc || {};
  const c1 = c.C1 || {},
    c2 = c.C2 || {},
    c3 = c.C3 || {},
    c4 = c.C4 || {},
    c5 = c.C5 || {},
    c6 = c.C6 || {},
    c7 = c.C7 || {};
  const previousMinutes =
      c3.previous_week_minutes == null
        ? null
        : Number(c3.previous_week_minutes),
    currentMinutes =
      c3.current_week_minutes == null ? null : Number(c3.current_week_minutes);
  const timeComparison =
    previousMinutes !== null &&
    currentMinutes !== null &&
    Number.isFinite(previousMinutes) &&
    Number.isFinite(currentMinutes)
      ? `${currentMinutes >= previousMinutes ? "Tăng" : "Giảm"} ${Math.abs(currentMinutes - previousMinutes).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} phút so tuần trước`
      : "Chưa đủ dữ liệu so tuần trước";
  const metricCards = [
    metricCard(
      "calendar",
      `${Number(c1.study_days || 0)}/${Number(c1.window_days || 7)} ngày`,
      `C1 · ${c1.name || "Ngày học"}`,
      c1.label,
      metricTone(c1.label),
    ),
    metricCard(
      "fire",
      `${Number(c2.streak_days || 0)} ngày`,
      `C2 · ${c2.name || "Chuỗi ngày học"}`,
      uiText(c2.streak_days ? "Đang duy trì · Mọi lớp · từ 1 câu/ngày" : "Cần bắt đầu · Mọi lớp · từ 1 câu/ngày"),
      c2.streak_days ? "good" : "effort",
    ),
    metricCard(
      "clock",
      numberText(c3.current_week_minutes, " phút"),
      `C3 · ${c3.name || "Thời gian tuần này"}`,
      timeComparison,
      previousMinutes !== null &&
        currentMinutes !== null &&
        Number.isFinite(previousMinutes) &&
        currentMinutes >= previousMinutes
        ? "good"
        : "steady",
    ),
    metricCard(
      "learning_path",
      c4.farthest_completed_week == null
        ? "Chưa đủ dữ liệu"
        : `Tuần ${c4.farthest_completed_week}`,
      `C4 · ${c4.name || "Tiến độ lộ trình"}`,
      c4.label,
      metricTone(c4.label),
    ),
    metricCard(
      "check_document",
      percentText(c5.percent),
      `C5 · ${c5.name || "Hoàn thành đề"}`,
      c5.label,
      metricTone(c5.label, c5.percent),
    ),
    metricCard(
      "refresh",
      percentText(c6.percent),
      `C6 · ${c6.name || "Ôn đúng lúc"}`,
      c6.percent == null
        ? "Chưa đủ dữ liệu"
        : `${Number(c6.reviewed_questions || 0)}/${Number(c6.due_or_reviewed_questions || 0)} câu đã ôn`,
      metricTone("", c6.percent),
    ),
    metricCard(
      "check_circle",
      percentText(c7.percent),
      `C7 · ${c7.name || "Chịu sửa sai"}`,
      c7.label,
      metricTone(c7.label, c7.percent),
    ),
  ].join("");
  const canRen = Array.isArray(report.can_ren) ? report.can_ren : [];
  const reportTranslated = report.lang === "en";
  const canRenHtml = canRen.length
    ? canRen
        .map(
          (topic) =>
            `<div class="competency-action-row"><div><strong>${sourceContent(topic.name, reportTranslated)}</strong><span>${percentText(topic.percent)} · ${Number(topic.questions || 0)} câu</span></div>${state.accountTab !== "parent" && report.username === state.user?.username && findCompetencyPracticeTopic(topic.code, report.grade_level) ? `<button class="outline" data-practice-topic="${escapeHtml(topic.code)}" data-practice-grade="${Number(report.grade_level)}">Luyện ngay →</button>` : ""}</div>`,
        )
        .join("")
    : `<p class="competency-empty source-content">${escapeHtml(report.can_ren_message || "Em chưa có chuyên mục cần rèn trong khoảng này.")}</p>${sourceBadge(reportTranslated)}`;
  const t1 = attitude.T1 || {},
    t2 = attitude.T2 || {},
    t3 = attitude.T3 || {};
  const attitudeCard = (title, value, text, warning = false) =>
    `<article class="attitude-card ${warning ? "warning" : ""}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(value)}</span><p>${escapeHtml(text)}</p></article>`;
  const t3Examples = Array.isArray(t3.examples) ? t3.examples : [];
  const attitudeHtml = [
    attitudeCard(
      `T1 · ${t1.name || "Làm vội"}`,
      t1.timed_attempts ? percentText(t1.percent) : "Chưa đủ dữ liệu",
      t1.timed_attempts
        ? `${Number(t1.timed_attempts)} lượt đủ dữ liệu${t1.warning ? " · Em bấm nhanh, có thể chưa đọc kỹ" : " · Nhịp làm bài phù hợp"}`
        : "Chưa đủ dữ liệu",
      !!t1.warning,
    ),
    attitudeCard(
      `T2 · ${t2.name || "Đoán mò"}`,
      t2.timed_word_attempts ? percentText(t2.percent) : "Chưa đủ dữ liệu",
      t2.timed_word_attempts
        ? `${Number(t2.timed_word_attempts)} lượt lời văn đủ dữ liệu${t2.warning ? " · Cần đọc kỹ dữ kiện trước khi chọn" : " · Chưa có dấu hiệu đoán mò"}`
        : "Chưa đủ dữ liệu",
      !!t2.warning,
    ),
    attitudeCard(
      `T3 · ${t3.name || "Kiên trì"}`,
      t3.improved_retries == null
        ? "Chưa đủ dữ liệu"
        : `${Number(t3.improved_retries)} lượt tiến bộ`,
      t3Examples.length
        ? String(t3Examples[0]?.message || t3Examples[0])
        : t3.improved_retries
          ? "Em đã làm lại và tăng điểm."
          : "Chưa ghi nhận lượt làm lại tăng điểm.",
    ),
  ].join("");
  const groups = ability.N3?.groups || [];
  if (!groups.some((group) => group.code === state.competencyGroup))
    state.competencyGroup = groups[0]?.code || null;
  const groupBars = groups.length
    ? groups
        .map((group) => {
          const level = competencyLevel(group.level),
            percent =
              group.percent == null
                ? 0
                : Math.max(0, Math.min(100, Number(group.percent)));
          return `<button class="competency-group-bar ${state.competencyGroup === group.code ? "active" : ""}" data-competency-group="${escapeHtml(group.code)}" aria-expanded="${state.competencyGroup === group.code}"><span><strong>${sourceContent(group.name, reportTranslated)}</strong><em>${group.percent == null ? "Chưa đủ dữ liệu" : `${percentText(group.percent)} · ${level.label}`}</em></span><span class="competency-track"><i class="${level.tone}" style="width:${percent}%"></i></span></button>`;
        })
        .join("")
    : "<p>Chưa đủ dữ liệu</p>";
  const selectedTopics = (ability.N1?.topics || []).filter(
    (topic) => topic.group_code === state.competencyGroup,
  );
  const topicRows = selectedTopics.length
    ? selectedTopics
        .map((topic) => {
          const level = competencyLevel(topic.level);
          return `<div class="competency-topic-row"><div><strong>${sourceContent(topic.name, reportTranslated)}</strong><span>${Number(topic.questions || 0)} câu</span>${competencyAssistanceText(topic)}</div><b>${percentText(topic.percent)}</b><em class="${level.tone}">${level.label}</em></div>`;
        })
        .join("")
    : '<p class="competency-empty">Chưa đủ dữ liệu</p>';
  const n2 = ability.N2 || {},
    n2Levels = n2.levels || {};
  const levelColumns = ["NB", "TH", "VD", "VDC", "HSG"]
    .map((code) => {
      const item = n2Levels[code] || {},
        label = code === "HSG" && state.lang !== "vi" ? "Challenge" : code;
      return `<div><strong>${label}</strong><b>${percentText(item.percent)}</b><span>${item.questions == null ? "Chưa đủ dữ liệu" : `${Number(item.questions)} câu`}</span>${competencyAssistanceText(item)}</div>`;
    })
    .join("");
  const mistakes = ability.N4?.mistakes || [];
  const mistakeHtml = mistakes.length
    ? mistakes
        .map(
          (item) =>
            `<li>Em hay <strong>${sourceContent(item.name || item.tag, reportTranslated)}</strong> (${Number(item.count || 0)} lần)</li>`,
        )
        .join("")
    : "<li>Chưa đủ dữ liệu</li>";
  const exams = ability.N5?.exams || [];
  const examHtml = exams.length
    ? exams
        .map((exam) => {
          const firstScore =
            exam.first_score_10 == null
              ? "Chưa đủ dữ liệu"
              : scoreBadgeHtml(exam.first_score_10, 10);
          const bestScore =
            exam.best_score_10 == null
              ? "Chưa đủ dữ liệu"
              : scoreBadgeHtml(exam.best_score_10, 10);
          return `<tr><th>${escapeHtml(exam.name)}</th><td>${firstScore}</td><td>${bestScore}</td></tr>`;
        })
        .join("")
    : '<tr><td colspan="3">Chưa đủ dữ liệu</td></tr>';
  const progressTopics = ability.N6?.topics || [];
  const progressHtml = progressTopics.length
    ? progressTopics
        .map((topic) => {
          const deltaValue =
            topic.change_points ??
            topic.difference_points ??
            topic.delta_points ??
            topic.delta;
          const delta =
            deltaValue == null || !Number.isFinite(Number(deltaValue))
              ? null
              : Number(deltaValue);
          return `<div class="progress-topic"><strong>${escapeHtml(topic.name || topic.topic_name || topic.code || "")}</strong><span>${delta == null ? "Chưa đủ dữ liệu" : `${delta > 0 ? "↑" : delta < 0 ? "↓" : "→"} ${Math.abs(delta).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} điểm`}</span></div>`;
        })
        .join("")
    : '<p class="competency-empty">Chưa đủ dữ liệu</p>';
  const helpReport = report.question_help || {},
    needsAdult = helpReport.needs_adult || [],
    helpTopics = helpReport.by_topic || [];
  const helpReasonNames = {
    de: "chưa hiểu đề",
    bat_dau: "chưa biết bắt đầu",
    buoc: "chưa hiểu bước giải",
    vi_sao_sai: "chưa hiểu vì sao sai",
  };
  const helpReportHtml = `<section class="competency-section question-help-report"><div class="competency-section-head"><div><p class="eyebrow">${uiText("Cú iMath")}</p><h2>${uiText("Câu em cần người lớn giảng thêm")}</h2></div>${icon("help")}</div>${needsAdult.length ? `<div class="help-report-list">${needsAdult.map((item, index) => `<div><strong>${uiText("Câu")} ${index + 1}</strong><span class="source-content math-content">${escapeHtml(item.topic)} · ${escapeHtml(item.question)}</span>${sourceBadge(item.translated)}</div>`).join("")}</div>` : `<p class="competency-empty">${uiText("Chưa có câu nào cần người lớn giảng thêm.")}</p>`}${
    helpTopics.length
      ? `<h3>${uiText("Lý do chưa hiểu theo chuyên mục")}</h3><div class="help-report-list">${helpTopics
          .map(
            (topic) =>
              `<div><strong class="source-content">${escapeHtml(topic.name)}</strong><span>${Object.entries(
                topic.reasons || {},
              )
                .map(
                  ([reason, count]) =>
                    `${Number(count)} ${uiText(helpReasonNames[reason] || reason)}`,
                )
                .join(" · ")}</span></div>`,
          )
          .join("")}</div>`
      : ""
  }</section>`;
  const effort = report.effort_badges || {},
    effortBadges = Array.isArray(effort.badges) ? effort.badges : [];
  const effortHtml = `<section class="competency-section effort-badges"><div class="competency-section-head"><div><p class="eyebrow">${uiText("Nỗ lực mỗi ngày")}</p><h2>${uiText("Huy hiệu nỗ lực")}</h2></div>${icon("star")}</div><div class="effort-streak"><strong>${Number(effort.current_streak || 0)}</strong><span>${uiText("ngày liên tiếp")}</span></div>${effortBadges.length ? `<div class="effort-badge-grid">${effortBadges.map((badge) => `<article><span>🏅</span><div><strong>${escapeHtml(badge.name || "")}${badge.tier ? ` · ${Number(badge.tier)}` : ""}</strong><p>${escapeHtml(badge.message || "")}</p></div></article>`).join("")}</div>` : `<p class="competency-empty">${uiText("Em hãy tiếp tục cố gắng để nhận huy hiệu đầu tiên nhé!")}</p>`}</section>`;
  const parentUnlockHtml = report.parent_unlock_pending?.message
    ? `<aside class="parent-unlock-report-note">${icon("learning_path")}<span class="source-content">${escapeHtml(report.parent_unlock_pending.message)}</span></aside>`
    : "";
  body.className = "competency-report";
  body.innerHTML = `
  <div class="competency-toolbar"><div class="range-picker" aria-label="Khoảng báo cáo">${Object.entries(
    competencyRanges,
  )
    .map(
      ([code, label]) =>
        `<button data-competency-range="${code}" class="${state.competencyRange === code ? "active" : ""}">${label}</button>`,
    )
    .join(
      "",
    )}</div><button class="primary print-competency" data-action="print-competency">${icon("document")} Tải phiếu năng lực (PDF)</button></div>
  <section class="competency-summary"><span>${icon("star")}</span><div><small>Tóm tắt cho ba mẹ</small><p class="source-content">${escapeHtml(report.tom_tat || "Chưa đủ dữ liệu để tổng hợp.")}</p>${sourceBadge(reportTranslated)}</div></section>
  ${parentUnlockHtml}${effortHtml}<section class="competency-section can-ren-section"><div class="competency-section-head"><div><p class="eyebrow">Hành động đề xuất</p><h2>Cần rèn</h2></div>${icon("target")}</div><div class="competency-action-list">${canRenHtml}</div></section>
  <section class="competency-section"><div class="competency-section-head"><div><p class="eyebrow">C1–C7</p><h2>Chăm học</h2></div>${icon("calendar")}</div><div class="competency-metrics">${metricCards}</div></section>
  <section class="competency-section"><div class="competency-section-head"><div><p class="eyebrow">T1–T3</p><h2>Thái độ làm bài</h2></div>${icon("smiley")}</div><div class="attitude-grid">${attitudeHtml}</div></section>
  <section class="competency-section"><div class="competency-section-head"><div><p class="eyebrow">N1–N6</p><h2>Năng lực</h2></div>${icon("graduation_cap")}</div><p>${uiText("Tỉ lệ thể hiện câu tự làm đúng. Câu đúng nhờ gợi ý được ghi riêng.")}</p>
    <div class="competency-grid"><div class="competency-card group-card"><h3>N3 · Theo nhóm</h3><div class="competency-group-list">${groupBars}</div><div class="competency-topic-panel"><h3>N1 · Chuyên mục trong nhóm</h3>${topicRows}</div></div>
    <div class="competency-card"><h3>N2 · Theo mức độ</h3><div class="level-columns">${levelColumns}</div><p class="diagnosis">${escapeHtml(diagnosisText(n2))}</p></div></div>
    <div class="competency-lower-grid"><div class="competency-card"><h3>N4 · Lỗi hay mắc</h3><ul class="mistake-list">${mistakeHtml}</ul></div><div class="competency-card"><h3>N5 · Điểm 4 kỳ</h3><table class="competency-table"><thead><tr><th>Kỳ</th><th>Lần đầu</th><th>Tốt nhất</th></tr></thead><tbody>${examHtml}</tbody></table></div><div class="competency-card"><h3>N6 · Tiến bộ</h3>${progressHtml}</div></div>
  </section>${helpReportHtml}`;
  applyUiLanguage();
  renderMath();
}
/** Mở trang in riêng để phụ huynh lưu PDF mà không làm rời trang báo cáo đang xem. */
function openCompetencyPrint() {
  if (!state.competencyReport) return;
  const payload = {
    report: state.competencyReport,
    studentName:
      (state.accountTab === "parent" && state.parentReportChild?.username === state.competencyReport.username ? state.parentReportChild.display_name : "") || state.user?.full_name ||
      state.user?.display_name ||
      state.user?.username ||
      "Học sinh",
    username: state.competencyReport.username,
    grade: state.competencyReport.grade_level,
    rangeLabel:
      competencyRanges[state.competencyReport.range?.code] || state.competencyReport.range?.code,
    lang: state.competencyReport.lang === "en" ? "en" : "vi",
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem("imath-competency-print", JSON.stringify(payload));
  const printWindow = window.open(
    "giao-dien-moi-app/phieu-nang-luc.html",
    "imath-competency-print",
  );
  if (!printWindow)
    alert(
      "Trình duyệt đang chặn trang in. Em hãy cho phép cửa sổ bật lên rồi thử lại.",
    );
}
/** Chuyển giữa Năng lực, Ôn đúng lúc và Sửa câu sai; dữ liệu luôn lấy lại theo bộ lọc. */
async function renderReport(
  targetSelector = state.page === "account" ? "#account-body" : "#content",
  embedded = state.page === "account",
) {
  const activeTab = state.reportTab;
  const activeGrade = state.grade, activeUsername = state.user?.username;
  state.parentReportChild = null;
  const target = $(targetSelector);
  if (!target) return;
  const reportIsCurrent = () =>
    embedded
      ? state.page === "account" && state.accountTab === "report"
      : state.page === "report";
  const tabs = `<div class="tabs"><button data-report="competency" class="${state.reportTab === "competency" ? "active" : ""}">${icon("graduation_cap")} Năng lực</button><button data-report="review" class="${state.reportTab === "review" ? "active" : ""}">${icon("clock")} Ôn đúng lúc</button><button data-report="mistakes" class="${state.reportTab === "mistakes" ? "active" : ""}">${icon("refresh")} Sửa câu sai</button></div>`;
  target.innerHTML =
    `${embedded ? "" : '<p class="eyebrow">Báo cáo học tập</p>'}<div class="report-intro"><span class="section-icon">${tileIcon("bar_chart")}</span><div><h1 class="page-title">Báo cáo học tập</h1><p class="page-sub">Theo dõi sự chăm học, thái độ và năng lực của em.</p></div></div>${tabs}<div id="report-body" class="band">Đang tải...</div>`;
  try {
    if (state.reportTab === "competency") {
      const activeRange =
        state.competencyRange || (state.term === 2 ? "term2" : "term1");
      state.competencyRange = activeRange;
      const result = await api("get_competency_report", {
        username: activeUsername,
        grade_level: activeGrade,
        range: activeRange,
      });
      if (
        !reportIsCurrent() ||
        state.grade !== activeGrade || state.user?.username !== activeUsername ||
        state.reportTab !== activeTab ||
        state.competencyRange !== activeRange
      )
        return;
      renderCompetencyBody(result.report || {});
    } else {
      const result = await api("get_review_questions", {
        username: state.user.username,
      });
      let questions = result.questions || [];
      if (state.reportTab === "mistakes") {
        const wrongIds = Object.entries(state.user.solved_questions || {})
          .filter(([, correct]) => correct === false)
          .map(([id]) => id)
          .slice(0, 100);
        questions = wrongIds.length
          ? (
              await api("get_questions", {
                question_ids: wrongIds,
                grade_level: state.grade,
              })
            ).questions || []
          : [];
      }
      questions = questions.filter(
        (q) =>
          q.id &&
          q.question?.trim() &&
          q.question.trim() !== "(câu hỏi đã gỡ)" &&
          (questionOptions(q).length > 0 || isTypedQuestion(q)),
      );
      if (!reportIsCurrent() || state.reportTab !== activeTab) return;
      $("#report-body").innerHTML =
        `<h2>${state.reportTab === "review" ? "Ôn đúng lúc" : "Sửa câu sai"}</h2>${questions.length ? `<p>${questions.length} câu ${state.reportTab === "review" ? "đến lịch ôn" : "cần xem lại"}.</p><div class="test-list">${questions.map((q) => `<div class="test-row"><span class="test-row-icon">${tileIcon("refresh")}</span><span class="test-row-copy math-content">${sourceContent(q.question, q.translated)}</span><button class="outline" data-review="${escapeHtml(q.id)}">Ôn câu này</button></div>`).join("")}</div>` : `<p>${state.reportTab === "review" ? "Chưa có câu đến lịch ôn." : "Chưa có câu sai cần sửa."}</p>`}`;
      state.reviewQuestions = questions;
    }
    applyUiLanguage();
    renderMath();
  } catch (error) {
    showError("#report-body", error);
    applyUiLanguage();
  }
}
