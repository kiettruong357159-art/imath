/**
 * entrance-fixed-view.js — Thẻ mức, danh sách đề và khung làm bài dọc toàn chiều rộng.
 * Dùng: entrance-fixed.js; chỉ dựng payload công khai, không chứa dữ liệu chấm.
 * Quy tắc: bản mẫu 13/10 và thiết kế thi vào mục 14 (trường ở mức, không ở đề).
 */
"use strict";
const efRich = value => richText(String(value ?? ""));
const efName = object => hsgExam(entranceFixed.exam) ? hsgPaperName(object)
  : entranceFixed.lang === "en" ? object.name_en || object.name_vi || object.name : object.name_vi || object.name;
const entranceFixedEntries = new Map();

/** Chỉ hiện lối vào khi catalog công khai có đề; không dùng quyền preview để mở mục. */
async function entranceFixedLoadEntry(grade) {
  await timoLoadEntry(grade);
  const entrance = [4,5].includes(grade) ? "vao_6" : [8,9].includes(grade) ? "vao_10" : null;
  const exams = [...(entrance ? ["vao_6","vao_10"] : []), `hsg_${grade}`].filter(exam => !entranceFixedEntries.has(exam));
  await Promise.all(exams.map(async exam => {
    // Thẻ lối vào chỉ cần đề/bộ công khai; catalog câu cũ chỉ tải khi mở trang thi vào.
    if (!hsgExam(exam)) {
      entranceFixedEntries.set(exam, await api("entrance_entry_summary",{exam_code:exam})); return;
    }
    const catalog = await entranceCombinedCatalog(exam, false, false);
    entranceFixedEntries.set(exam, {
      highlights_vi: catalog.highlights_vi || [], highlights_en: catalog.highlights_en || [],
      subject_count: catalog.papers.filter(p => p.family === "entrance_set").length,
      exam_count: catalog.papers.filter(p => p.family === "entrance_fixed").length,
      subjects: catalog.papers.filter(p => p.family === "entrance_set").slice(0,3)
        .map(p => ({ vi: p.name_vi || p.name, en: p.name_en || p.name_vi || p.name })),
    });
  }));
}

function entranceFixedSetContent(html, page, wrapperClass = "ef-page") {
  setNav(page);
  $("#content").innerHTML = `<div class="${wrapperClass}" data-no-ui-translate>${entranceRemediation.original ? `<div class="ef-remediation-return">${entranceRemediationReturnButton()}</div>` : ""}${html}
    <p id="ef-notice" class="ef-notice" role="alert" hidden></p></div>`;
  window.renderMathIn($("#content"));
  entranceFixedHeaderOffset();
  $("#content").scrollTop = 0; window.scrollTo({ top: 0, behavior: "instant" });
}
/** Header thi ghim dưới header web, kể cả khi menu tablet đổi chiều cao. */
function entranceFixedHeaderOffset() {
  $("#app-shell").style.setProperty("--ef-header-height", `${document.querySelector(".topbar").getBoundingClientRect().height}px`);
}
const entranceFixedHeaderObserver = new ResizeObserver(entranceFixedHeaderOffset);
entranceFixedHeaderObserver.observe(document.querySelector(".topbar"));
function entranceFixedIntro(title, subtitle, back = "exit") {
  return `<div class="ef-intro"><div><div class="ef-eyebrow">${hsgExam(entranceFixed.exam) ? efText("HỌC SINH GIỎI LỚP", "GRADE OLYMPIAD") + " " + hsgGrade(entranceFixed.exam) : efText("LUYỆN THI VÀO LỚP", "GRADE ENTRANCE TEST") + " " + (entranceFixed.exam === "vao_6" ? 6 : 10)}</div>
    <h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></div>
    <div class="ef-intro-tools">
      <button class="outline" data-ef-action="${back}">← ${efText(back === "exit" ? "Luyện thêm" : "Chọn mức khác", back === "exit" ? "Practice" : "Other levels")}</button>
    </div></div>${entranceFixed.catalog.papers.some(p => p.preview) ? `<p class="ef-preview">${efText("Bản xem thử · Có đề chưa được xuất bản", "Preview · Includes unpublished papers")}</p>` : ""}`;
}

/** Thẻ đọc trường từ mức; mức chưa có đề chỉ hiện trạng thái đang chuẩn bị. */
function entranceFixedLevelCard(level, index) {
  const papers = entranceFixed.catalog.papers.filter(p => p.level_code === level.level_code
    && (hsgExam(entranceFixed.exam) || p.family === "entrance_fixed")), paper = papers[0];
  const schools = entranceFixed.lang === "en" ? level.schools_en : level.schools_vi;
  return `<article class="ef-panel ef-level" style="--ef-tone:${escapeHtml(level.color_hex)}">
    <div class="ef-level-number">${efText("MỨC LUYỆN", "LEVEL")} ${index + 1}<span aria-hidden="true">${["🏫","⭐","🏅"][index] || "🏫"}</span></div>
    <h2>${escapeHtml(efName(level))}</h2>
    <p class="ef-audience">${escapeHtml(entranceFixed.lang === "en" ? level.audience_en : level.audience_vi)}</p>
    ${schools ? `<p class="ef-schools"><strong>${efText("Phù hợp ôn thi:", "Suitable for:")}</strong> ${escapeHtml(schools)}</p>` : ""}
    ${paper ? `<div class="ef-metrics"><div><strong>${papers.length}</strong><small>${efText("đề thi thử", "mock papers")}</small></div>
      <div><strong>${paper.problem_count}</strong><small>${efText("bài / đề", "problems / paper")}</small></div>
      <div><strong>${paper.duration_minutes}</strong><small>${efText("phút / đề", "minutes / paper")}</small></div></div>
      <button class="primary" data-ef-action="level" data-ef-level="${escapeHtml(level.level_code)}">${efText("Xem đề luyện", "View papers")} →</button>`
      : `<p class="ef-unavailable">${efText("Mức này đang được chuẩn bị. Chưa có đề để làm.", "This level is being prepared. No papers are available yet.")}</p>
        <button class="outline" disabled>${efText("Đang chuẩn bị", "Coming soon")}</button>`}</article>`;
}
function entranceFixedRecentFor(testId) {
  return entranceFixed.history.find(a => a.test_id === testId)
    || (entranceFixed.payload?.paper.id === testId ? { id: entranceFixed.payload.attempt_id, status: entranceFixed.payload.status } : null);
}
function entranceFixedPaperRow(paper, index) {
  const recent = entranceFixedRecentFor(paper.id), active = recent?.status === "active";
  return `<article class="ef-paper-row"><span class="ef-paper-number">${String(index + 1).padStart(2,"0")}</span>
    <div class="ef-paper-copy"><h3>${escapeHtml(efName(paper))}</h3>
      <p>${paper.problem_count} ${efText("bài", "problems")} · ${paper.part_count} ${efText("ý", "parts")} ·
      ${paper.duration_minutes} ${efText("phút", "minutes")} · ${efText("Thang", "Out of")} ${efNumber(paper.total_points)}</p></div>
    <span class="ef-paper-state">${efText(active ? "Đang làm dở" : recent ? "Đã làm" : "Chưa làm", active ? "In progress" : recent ? "Completed" : "Not attempted")}</span>
    <button class="primary" data-ef-action="${active ? "resume" : "start"}" data-ef-test="${escapeHtml(paper.id)}"
      ${active ? `data-ef-attempt="${escapeHtml(recent.id)}"` : ""}>${efText(active ? "Tiếp tục" : "Làm bài", active ? "Resume" : "Start paper")} →</button></article>`;
}
function entranceFixedHistoryHtml() {
  if (state.isGuest || !entranceFixed.history.length) return "";
  return `<section class="ef-panel ef-history"><h2>${efText("Các lượt gần đây", "Recent attempts")}</h2>
    ${entranceFixed.history.map(attempt => `<article><div><strong>${escapeHtml(efName(attempt))}</strong>
      <small>${escapeHtml(attempt.started_at)} · ${attempt.status === "active" ? efText("Đang làm", "In progress")
        : `${efNumber(attempt.score)} / ${efNumber(attempt.machine_max_score)} ${efText("điểm máy", "machine points")}`}</small></div>
      <button class="outline" data-ef-action="history" data-ef-attempt="${escapeHtml(attempt.id)}">
        ${efText(attempt.status === "active" ? "Tiếp tục" : "Xem kết quả", attempt.status === "active" ? "Resume" : "View result")}</button></article>`).join("")}</section>`;
}
function entranceFixedRenderCatalog() {
  // Chữ danh mục theo ngôn ngữ chung; ngôn ngữ câu được chốt riêng lúc start theo bản dịch sẵn có.
  entranceFixed.lang = state.lang === "en" ? "en" : "vi";
  if (hsgExam(entranceFixed.exam)) return entranceFixedSetContent(hsgCatalogHtml(), "entrance-fixed", "timo-page");
  const level = entranceFixed.catalog.levels.find(l => l.level_code === entranceFixed.level);
  if (level) return entranceFixedSetContent(entranceLevelCatalogHtml(level), "entrance-fixed", "timo-page");
  const content = `${entranceFixedIntro(efText("Chọn mức luyện vào lớp ", "Choose your Grade ") + (entranceFixed.exam === "vao_6" ? 6 : 10),
        efText("Chọn theo kỳ thi em dự định tham gia, không phải theo lớp em đang học.", "Choose the entrance test you plan to take."))}
      <div class="ef-levels">${entranceFixed.catalog.levels.map(entranceFixedLevelCard).join("")}</div>`;
  entranceFixedSetContent(`${content}<p class="ef-note">${efText("Chuẩn bị giấy nháp. Điểm máy và tự đối chiếu các ý làm ra giấy được hiển thị riêng.",
    "Have paper ready. Machine-marked work and self-review of written work are shown separately.")}</p>${entranceFixedHistoryHtml()}${entrancePracticeHistoryHtml()}`, "entrance-fixed");
}

function entranceFixedNav() {
  return `<nav class="ef-question-nav" aria-label="${efText("Danh sách bài", "Problem list")}">
    ${entranceFixed.payload.questions.map((q,i) => {
      const answered = q.parts.some(p => { const a = entranceFixed.answers.get(efKey(q.position,p.part_id)); return a !== null && a !== undefined && a !== ""; });
      return `<button data-ef-action="jump" data-ef-index="${i}" class="${i === entranceFixed.index ? "active" : ""} ${answered ? "answered" : ""}"
        aria-label="${efText("Bài", "Problem")} ${q.position}" ${i === entranceFixed.index ? 'aria-current="step"' : ""}>${q.position}</button>`;
    }).join("")}</nav>`;
}
function entranceFixedFigures(question, partId = null) {
  const all = question.figures?.length ? question.figures : question.visual?.svg ? [{ svg: question.visual.svg, alt: efText("Hình minh họa", "Diagram") }] : [];
  const figures = all.filter(f => partId === null
    ? !Array.isArray(f.part_ids) || f.part_ids.length === 0
    : Array.isArray(f.part_ids) && f.part_ids.includes(partId));
  return figures.length ? `<div class="ef-figures ${figures.length === 1 ? "single" : ""}">
    ${figures.map(f => `<figure role="img" aria-label="${escapeHtml(f.alt || "")}">${f.svg}<figcaption>${escapeHtml(f.alt || "")}</figcaption></figure>`).join("")}</div>` : "";
}
function entranceFixedPart(question, part) {
  const saved = entranceFixed.answers.get(efKey(question.position,part.part_id));
  const heading = question.parts.length === 1 && !part.prompt ? "" : `<div class="ef-part-top"><span class="ef-part-label">${escapeHtml(entranceFixedPartLabel(question,part))}</span>
    <div class="ef-part-prompt">${efRich(part.prompt)}</div><span class="ef-points">${efNumber(part.points)} ${efText("điểm", "pt")}</span></div>`;
  let controls;
  if (part.grading_method === "self") controls = `<label class="ef-paper-check"><input type="checkbox" data-ef-paper="${escapeHtml(part.part_id)}"
    ${saved === true ? "checked" : ""}>✎ ${efText("Làm ra giấy · Đánh dấu khi em đã làm", "Work on paper · Tick when completed")}</label>`;
  else if (part.answer_mode === "chon" || part.answer_mode === "dung_sai") {
    const options = part.answer_mode === "dung_sai" ? [efText("Đúng", "True"), efText("Sai", "False")] : part.options;
    controls = `<div class="ef-options">${options.map((option,i) => {
      const value = part.answer_mode === "dung_sai" ? String(i === 0) : String.fromCharCode(65 + i);
      return `<button data-ef-part="${escapeHtml(part.part_id)}" data-ef-choice="${value}" class="${String(saved) === value ? "selected" : ""}"
        aria-pressed="${String(saved) === value}"><span>${String.fromCharCode(65 + i)}</span><div>${efRich(option)}</div></button>`;
    }).join("")}</div>`;
  } else controls = `<div class="ef-answer-slots">${part.o_nhap.map((slot,i) => `<label><span>${escapeHtml(slot.label || efText("Đáp số", "Answer"))}</span>
    <input data-ef-part="${escapeHtml(part.part_id)}" data-ef-slot="${i}" inputmode="decimal" autocomplete="off"
      value="${escapeHtml(Array.isArray(saved) ? saved[i] || "" : saved || "")}" placeholder="${efText("Nhập đáp số", "Enter answer")}">
    <small>${escapeHtml(slot.don_vi || "")}</small></label>`).join("")}</div>`;
  return `<section class="ef-part">${heading}${entranceFixedFigures(question, part.part_id)}${controls}${efPractice() ? entranceSetHints(question, part) : ""}</section>`;
}
/** p1/p2 là khóa dữ liệu, không phải nhãn cần đưa cho học sinh thấy. */
function entranceFixedPartLabel(question, part) {
  return !part.label || /^p\d+$/.test(part.label) ? String.fromCharCode(97 + question.parts.indexOf(part)) : part.label;
}

/** Đề đã có nhãn đầu Bài N./Problem N. thì không lặp tiêu đề; giữ nguyên chữ của tác giả. */
function entranceFixedProblemHeading(question) {
  const text = String(question.question || "").trimStart().normalize("NFC");
  if (/^(?:\*\*)?(?:Bài|Problem)\s+\d+\s*\./iu.test(text)) return "";
  return `<h2>${efText("Bài", "Problem")} ${question.position}</h2>`;
}

/** Tablet dùng một cột nội dung; hàng bài cuộn riêng, footer không che ý cuối. */
function entranceFixedRenderExam() {
  const { paper, questions } = entranceFixed.payload, q = questions[entranceFixed.index];
  const points = q.parts.reduce((sum,p) => sum + Math.round(Number(p.points) * 100),0) / 100;
  entranceFixedSetContent(`<section class="ef-panel ef-exam ${efPractice() ? "ef-practice" : ""}">
    <header class="ef-exam-top"><div>${window.IMATH_QUIZ_CONTEXT.html({test:paper,question:q,lang:entranceFixed.lang,name:efName(paper)}, "h1")}<small>${paper.problem_count} ${efText("bài", "problems")} · ${efPractice() ? efText("Không bấm giờ", "Untimed") : `${paper.duration_minutes} ${efText("phút", "minutes")}`}</small></div>
      ${efPractice() ? "" : `<div class="ef-timer" role="timer"><small>${efText("Thời gian còn lại", "Time remaining")}</small><strong id="ef-clock">--:--:--</strong></div>`}
      <button class="primary" id="ef-submit" data-ef-action="submit">${efPractice() ? efText("Nộp bài này", "Submit this problem") : efText("Nộp bài", "Submit paper")}</button></header>
    <div class="ef-progress">${entranceFixedNav()}<span>${efText("Bài", "Problem")} ${q.position}/${paper.problem_count}</span></div>
    <div class="ef-problem-body"><div class="ef-problem-head">${entranceFixedProblemHeading(q)}<span class="ef-points">${efNumber(points)} ${efText("điểm", "pt")}</span></div>
      <div class="ef-stem">${efRich(q.question)}</div>${entranceFixedFigures(q)}
      <div class="ef-parts">${q.parts.map(part => entranceFixedPart(q,part)).join("")}</div>${efPractice() ? entranceSetReview(q) : ""}</div>
    <footer class="ef-exam-bottom"><button class="outline" data-ef-action="jump" data-ef-index="${entranceFixed.index - 1}" ${entranceFixed.index === 0 ? "disabled" : ""}>← ${efText("Bài trước", "Previous")}</button>
      <span id="ef-save-status" role="status">${efPractice() ? efText("Nộp từng bài để xem lời giải", "Submit each problem to see solutions") : efText("Đáp án được tự lưu tạm", "Answers are saved automatically")}</span>
      <button class="outline" data-ef-action="jump" data-ef-index="${entranceFixed.index + 1}" ${entranceFixed.index === questions.length - 1 ? "disabled" : ""}>${efText("Bài tiếp", "Next")} →</button>
      <button class="outline ef-leave" data-ef-action="catalog">${efText("Danh sách đề", "Paper list")}</button>${entranceTypeContinuationHtml()}</footer>
    </section>`, "entrance-fixed-exam");
  // Vẽ lại sau chuyển bài không tạo lại deadline hoặc interval.
  if (efPractice()) {
    const done = entranceSet.results.has(efKey(q.position, q.parts[0].part_id));
    if (done) {
      document.querySelectorAll(".ef-parts button,.ef-parts input,#ef-submit").forEach(el => { el.disabled = true; });
      $("#ef-submit").textContent = efText("Đã nộp bài này", "Problem submitted");
    }
    return;
  }
  const left = entranceFixedSeconds();
  $("#ef-clock").textContent = [Math.floor(left / 3600), Math.floor(left / 60) % 60, left % 60].map(n => String(n).padStart(2,"0")).join(":");
}
document.addEventListener("input", event => {
  const input = event.target.closest("input[data-ef-slot]");
  if (!input || entranceFixed.submitting) return;
  const question = entranceFixed.payload.questions[entranceFixed.index];
  const part = question.parts.find(p => p.part_id === input.dataset.efPart);
  const values = [...document.querySelectorAll(`input[data-ef-part="${part.part_id}"]`)].map(el => el.value);
  entranceFixedChange(question.position, part.part_id, values.length === 1 ? values[0] : values);
});
document.addEventListener("change", event => {
  const input = event.target.closest("[data-ef-paper]");
  if (input) entranceFixedChange(entranceFixed.payload.questions[entranceFixed.index].position, input.dataset.efPaper, input.checked);
});
document.addEventListener("click", event => {
  const button = event.target.closest("[data-ef-choice]");
  if (!button || entranceFixed.submitting) return;
  const q = entranceFixed.payload.questions[entranceFixed.index], part = q.parts.find(p => p.part_id === button.dataset.efPart);
  const answer = part.answer_mode === "dung_sai" ? button.dataset.efChoice === "true" : button.dataset.efChoice;
  entranceFixedChange(q.position, part.part_id, answer); entranceFixedRenderExam();
});
