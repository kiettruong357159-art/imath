/**
 * luyen-them.js — Trang Luyện thêm, Ôn theo chủ đề, đề tổng hợp và danh sách bộ luyện.
 * Dùng: core.js, lo-trinh.js, chuyen-muc.js.
 * API gọi: qua loadCatalog; mở bài bằng startTestById.
 * Quy tắc nghiệp vụ: docs/blueprint-on-chu-de.md mục 6, docs/blueprint-lop1.md
 * và khóa open_week do máy chủ trả.
 */
"use strict";

// Chỉ nhớ cuộn của tổng quan Luyện thêm; không quản lý route/history hoặc đổi lớp/kỳ.
let practiceScrollPosition = null, practiceScrollReturn = false;
let practiceOverviewCache = null;
const practiceScrollKey = () => `imath_practice_scroll:${state.isGuest ? "guest" : state.user?.username || "anonymous"}`;
const practiceOverviewKey = () => `${practiceScrollKey()}:${state.grade}:${state.term}:${state.lang}`;

/** Giữ các node thật (cả sự kiện/ô chọn), trả lại trước khi core dựng màn tải. */
function restorePracticeOverviewFromCache() {
  if (!practiceScrollReturn || practiceOverviewCache?.key !== practiceOverviewKey()) return false;
  const { nodes, position } = practiceOverviewCache;
  const content = $("#content");
  content.replaceChildren(...nodes);
  $("#practice-overview").hidden = false;
  for (const detail of content.querySelectorAll("#catalog-detail,#grade1-detail")) detail.hidden = true;
  state.practiceView = null;
  state.catalogView = null;
  practiceScrollReturn = false;
  mountPracticeRows($("#practice-overview"));
  content.scrollTo({ left: position.content[0], top: position.content[1], behavior: "instant" });
  window.scrollTo({ left: position.window[0], top: position.window[1], behavior: "instant" });
  return true;
}
function readPracticeScroll() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(practiceScrollKey()) || "null");
    return saved && Array.isArray(saved.window) && Array.isArray(saved.content) ? saved : practiceScrollPosition;
  } catch (_) { return practiceScrollPosition; }
}
document.addEventListener("click", event => {
  const target = event.target;
  const back = target.closest('[data-timo-action="back"],[data-ef-action="exit"],[data-action="practice"],[data-page="practice"]');
  const quizBack = state.returnPage === "practice" && target.closest('[data-action="return"],[data-action="leave-quiz"],[data-action="guest-continue"],[data-action="singapore-return"]');
  if ((back && !back.disabled) || (quizBack && !quizBack.disabled)) practiceScrollReturn = true;
  const item = target.closest("[data-ef-open],[data-timo-action=open],[data-exam-period],[data-visual-practice],[data-topic-group],[data-topic-item],[data-catalog-category],[data-category],[data-singapore-topic],[data-word-problem-type]");
  const overview = $("#practice-overview");
  if (state.page !== "practice" || !item || item.disabled || !overview || overview.hidden || !overview.contains(item)) return;
  practiceScrollPosition = { grade: state.grade, term: state.term,
    window: [scrollX, scrollY], content: [$("#content").scrollLeft, $("#content").scrollTop] };
  practiceOverviewCache = { key: practiceOverviewKey(), nodes: [...$("#content").childNodes], position: practiceScrollPosition };
  try { sessionStorage.setItem(practiceScrollKey(), JSON.stringify(practiceScrollPosition)); } catch (_) { /* Phiên cấm storage vẫn dùng RAM. */ }
  practiceScrollReturn = false;
}, true);

/** Cuộn một lần sau khi tổng quan đã dựng lại; không áp khi đổi lớp/kỳ hay dùng Back. */
async function restorePracticeScroll() {
  if (!practiceScrollReturn) return;
  practiceScrollReturn = false;
  const saved = readPracticeScroll();
  if (!saved || saved.grade !== state.grade || saved.term !== state.term) return;
  // Không chặn render: đợi bản dịch, font và ảnh của danh sách trước khi cuộn.
  await document.fonts.ready;
  let previousHeight = -1, stableFrames = 0;
  for (let frame = 0; frame < 90; frame++) {
    await new Promise(resolve => requestAnimationFrame(resolve));
    const overview = $("#practice-overview");
    if (state.page !== "practice" || saved.grade !== state.grade || saved.term !== state.term || !overview || overview.hidden) return;
    const height = document.documentElement.scrollHeight + $("#content").scrollHeight;
    stableFrames = height === previousHeight ? stableFrames + 1 : 0;
    previousHeight = height;
    const imagesReady = [...overview.querySelectorAll("img")].every(image => image.complete);
    if ((stableFrames >= 3 && imagesReady) || frame === 89) {
      $("#content").scrollTo({ left: saved.content[0], top: saved.content[1], behavior: "instant" });
      window.scrollTo({ left: saved.window[0], top: saved.window[1], behavior: "instant" });
      return;
    }
  }
}

const singaporeTopicLabels = Object.freeze({
  S1: "Tách – gộp số đến 10",
  S2: "Phép cộng là gộp",
  S3: "Phép trừ là bớt / tách",
  S4: "Thêm – bớt để bằng nhau",
  S5: "Quy luật và suy luận",
  S6: "Chục và đơn vị",
  S7: "Đo bằng thanh (cm)",
  S8: "Cộng – trừ không nhớ đến 100",
});

// Mọi lớp Singapore sau này thêm mã vào đúng bảng này để icon không bị viết
// cứng rải rác trong renderer. Các giá trị là tên SVG trong bộ icon chung.
const singaporeTopicIcons = Object.freeze({
  S1: "number_bond",
  S2: "bar_join",
  S3: "bar_cross",
  S4: "balance",
  S5: "pattern",
  S6: "tens_bundle",
  S7: "ruler",
  S8: "plus_minus",
});

/** Các bộ Singapore mới; kho nháp singapore_thinking không đi qua hàm này. */
function singaporeCatalogueTests() {
  return state.tests.filter(
    (test) =>
      test.test_family === "singapore" &&
      test.kind === "singapore" &&
      test.category_id === `g${state.grade}_singapore` &&
      test.status === "published" &&
      test.student_ready !== false &&
      Number(test.question_count) > 0,
  );
}

function singaporeSectionHtml() {
  const tests = singaporeCatalogueTests();
  if (!tests.length) return "";
  const topics = [...new Set(tests.map((test) => test.visual_topic).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "vi", { numeric: true }),
  );
  const cards = topics.map((code) => {
    const topicTests = tests.filter((test) => test.visual_topic === code);
    const openWeek = Math.min(...topicTests.map((test) => Number(test.open_week) || 35));
    const unlocked = topicTests.some((test) => !test.locked);
    const interaction = unlocked ? `role="button" tabindex="0" data-singapore-topic="${escapeHtml(code)}"` : "";
    return `<article class="catalog-card topic-card tone-blue ${unlocked ? "" : "locked"}" ${interaction}>
      <span class="catalog-icon">${icon(singaporeTopicIcons[code] || "bar_join")}</span>
      <h3>${escapeHtml(singaporeTopicTitle(code))}</h3>
      <p>${topicTests.length} ${uiText("bộ")} · 10 ${uiText("câu")}</p>
      <span class="catalog-pill ${unlocked ? "" : "locked-pill"}">
        ${unlocked ? uiText("Vào luyện") : `${uiText("Mở từ tuần")} ${openWeek}`}
        ${unlocked ? icon("arrow_right") : icon("clock")}
      </span>
    </article>`;
  }).join("");
  const heading = `<div class="band-head">
    <div class="section-label">
      <span class="section-icon">${icon("bar_join")}</span>
      <div>
        <h2>${uiText("Toán Singapore")}</h2>
        <small>${topics.length} ${uiText("chủ đề")} · ${tests.length} ${uiText("bộ")}</small>
      </div>
    </div>
  </div>`;
  return `<section class="band singapore-practice-band">${heading}<div class="catalog-grid">${cards}</div></section>`;
}

/** Dùng một khối chung cho các kỳ thi có nội dung ở lớp đang chọn. */
function mathCompetitionSectionHtml() {
  const cards = timoEntryCardHtml() + (state.grade >= 6 && state.grade <= 9 ? "" : hsgEntryCardHtml());
  if (!cards) return "";
  return `<section class="band math-competition-band" data-no-ui-translate>
    ${sectionHeading(timoText("Luyện thi Toán", "Maths competition practice"), "medal",
      timoText("Luyện tư duy, thử sức với đề thi", "Build reasoning skills and try mock tests"))}
    <div class="math-competition-grid">${cards}</div></section>`;
}

/** Cấp 2 chỉ hiện chủ đề đã có bộ. Tuần ôn lấy từ bộ, không dùng tuần giới thiệu lý thuyết. */
function practiceTopicItems(group) {
  const secondary = state.grade >= 6 && state.grade <= 9;
  return group.items.map((item, index) => {
    if (!secondary) return { item, index };
    const tests = topicTests(item);
    if (!tests.length) return null;
    return { item: { ...item, week: Math.min(...tests.map(test => Number(test.open_week) || item.week)) }, index };
  }).filter(entry => entry && isWeekInSelectedTerm(entry.item.week));
}

/** Cấp 2 dùng quyền máy chủ trả, không tự tính lại khóa bằng tuần gợi ý. */
function practiceTopicUnlocked(item, currentWeek = state.currentWeek) {
  if (state.grade >= 6 && state.grade <= 9) return topicTests(item).some(test => !test.locked);
  return currentWeek >= item.week;
}

/** Dựng trang Luyện thêm theo học kỳ hiện tại và giữ nguyên màn con đang mở. */
async function renderPractice() {
  const grade = state.grade;
  await loadCatalog();
  await entranceFixedLoadEntry(grade);
  if (state.page !== "practice" || state.grade !== grade) return;
  if (grade === 1) {
    const path = await loadPath();
    if (state.page !== "practice" || state.grade !== grade) return;
    const currentWeek = Number(path?.open_until ?? state.currentWeek ?? 1);
    const core = grade1Core.filter((item) => publishedTests(item.id).length);
    const extra = grade1Advanced.filter(
      (item) => publishedTests(item.id).length,
    );
    const coreCount = core.reduce(
      (sum, item) => sum + publishedTests(item.id).length,
      0,
    );
    const extraCount = extra.reduce(
      (sum, item) => sum + publishedTests(item.id).length,
      0,
    );
    const examKeyById = { end1: "ck1", end2: "ck2" };
    const termExams = window.IMATH_GRADE1_CATALOG.exams.filter((exam) =>
      isWeekInSelectedTerm(exam.week),
    );
    const examCards = termExams
      .map((exam) => {
        const available = state.tests.filter(
          (test) =>
            test.category_id === "g1_exam" &&
            test.test_family === "exam" &&
            test.id.includes(`_${examKeyById[exam.id]}_`) &&
            test.status === "published" &&
            test.student_ready !== false &&
            Number(test.question_count) > 0,
        );
        const unlocked =
          (state.isGuest || currentWeek >= exam.week) &&
          available.length > 0 &&
          !available.some((test) => test.locked);
        const countText = available.length
          ? `${available.length} đề · ${available[0].question_count} câu`
          : "Đang biên soạn";
        const interaction = unlocked
          ? `role="button" tabindex="0" data-exam-period="${exam.id}"`
          : "";
        const status = unlocked
          ? "Vào xem đề"
          : available.length
            ? `Mở từ tuần ${exam.week}`
            : "Đang biên soạn";
        return `<article class="catalog-card exam-card ${exam.tone}" ${interaction}>
          <span class="catalog-icon">${tileIcon(exam.icon)}</span>
          <h3>${exam.name}</h3>
          <p>${available.length ? countText : "Đang biên soạn"}</p>
          <span class="catalog-pill ${unlocked ? "" : "locked-pill"}">
            ${status} ${unlocked ? icon("arrow_right") : icon("clock")}
          </span>
        </article>`;
      })
      .join("");
    const singaporeSection = singaporeSectionHtml();
    $("#content").innerHTML = `
      <p class="eyebrow">Luyện thêm / Đề thi › Lớp 1 › ${selectedTermName()}</p>
      <div class="page-intro practice-intro-grade1">
        <div>
          <h1 class="page-title">Luyện thêm – Lớp 1</h1>
          <p class="page-sub">Chọn chuyên mục hoặc đề cuối kỳ để luyện tập.</p>
          <p class="handwritten">Luyện đúng trọng tâm, tiến bộ từng ngày</p>
        </div>
        <img src="giao-dien-moi-app/notebook-star-v2.webp" alt="Sổ iMath và ngôi sao">
      </div>
      <div id="practice-overview">
        <section class="band">
          ${sectionHeading("Chuyên mục Lớp 1", "book", `${coreCount} đề sẵn sàng`)}
          <div class="catalog-grid">${core.map(grade1Card).join("")}</div>
        </section>
        <section class="band">
          ${sectionHeading("Luyện nâng cao", "graduation_cap", `${extraCount} đề sẵn sàng`)}
          <div class="catalog-grid grade1-advanced-grid">${extra.map(grade1Card).join("")}</div>
        </section>
        ${singaporeSection}${mathCompetitionSectionHtml()}
        <section class="band">
          ${sectionHeading(`Ôn tập & đề tổng hợp · ${selectedTermName()}`, "check_document", "1 kỳ · 2 đề")}
          <div class="catalog-grid">${examCards}</div>
        </section>
      </div>
      <section id="grade1-detail" class="band" hidden><div id="practice-tests"></div></section>
      <div class="bottom-ribbon">
        ${icon("target")}
        <strong>Kiên trì luyện tập hôm nay để đạt được những thành tích tuyệt vời ngày mai!</strong>
        <span>iMath</span>
      </div>`;
    mountPracticeRows($("#practice-overview"));
    const view =
      state.catalogView?.group === "grade1"
        ? state.catalogView
        : { group: "grade1" };
    showCatalogGroup("grade1");
    if (view.categoryId) showCatalogCategory(view.categoryId);
    else if (state.practiceView?.kind === "exam")
      showExamPeriod(state.practiceView.id, currentWeek);
    else if (state.practiceView?.kind === "singapore")
      showSingaporeTopic(state.practiceView.code);
    else if (state.practiceView?.kind === "draft") {
      $("#grade1-detail").hidden = false;
      $("#practice-tests").innerHTML =
        `<div class="catalog-detail-head"><button class="outline" data-catalog-back>${icon("chevron_left")} Chuyên mục</button><span class="catalog-detail-icon">${tileIcon("trophy")}</span><h3>Luyện thi học sinh giỏi</h3></div><p>Đang biên soạn</p>`;
    }
    restorePracticeScroll();
    return;
  }
  const path = await loadPath();
  if (state.page !== "practice" || state.grade !== grade) return;
  const currentWeek = state.currentWeek;
  const config = window.IMATH_GRADE_CATALOGS?.[grade];
  const termName = selectedTermName();
  const termTopics = config.topics
    .map((group) => ({
      ...group,
      items: practiceTopicItems(group),
    }))
    .filter((group) => group.items.length);
  const totalTopics = termTopics.reduce(
    (count, group) => count + group.items.length,
    0,
  );
  const openTopics = termTopics.reduce(
    (count, group) =>
      count + group.items.filter(({ item }) => practiceTopicUnlocked(item, currentWeek)).length,
    0,
  );
  const topicCards = termTopics
    .map((group) => {
      return `<article class="catalog-card topic-card ${group.tone}"><button class="topic-card-head" data-topic-group="${group.id}" aria-label="Xem nhóm ${topicName(group)}"><span class="catalog-icon">${tileIcon(group.icon)}</span><h3 class="source-content">${topicNameHtml(group)}</h3>${icon("chevron_right")}</button><div class="topic-card-list">${group.items
        .map(({ item, index }) => {
          const savedScore = topicScore(item);
          return practiceTopicUnlocked(item, currentWeek)
            ? `<button class="topic-card-item ${savedScore ? `score-card ${savedScore.band.className}` : ""}"
                data-topic-item="${group.id}" data-topic-index="${index}">
                <span class="topic-check" aria-hidden="true">✓</span>
                <span class="topic-item-name source-content">${topicNameHtml(item)}</span>
                ${state.grade >= 6 && state.grade <= 9 ? `<span class="topic-item-week">${uiText("Tuần")} ${item.week}</span>` : ""}
                ${savedScore ? scoreBadgeHtml(savedScore.score, savedScore.max) : ""}
              </button>`
            : `<div class="topic-card-item topic-card-locked" aria-disabled="true"><span class="topic-lock" aria-hidden="true"></span><span class="topic-item-name source-content">${topicNameHtml(item)}</span><span class="topic-item-week">tuần ${item.week}</span></div>`;
        })
        .join("")}</div></article>`;
    })
    .join("");
  const examKeyById = { mid1: "gk1", end1: "ck1", mid2: "gk2", end2: "ck2" };
  const testsForExam = (exam) =>
    state.tests
      .filter(
        (test) =>
          test.category_id === `g${grade}_exam` &&
          test.test_family === "exam" &&
          test.id.includes(`_${examKeyById[exam.id]}_`) &&
          test.status === "published" &&
          test.student_ready !== false &&
          Number(test.question_count) > 0,
      )
      .sort((a, b) => a.id.localeCompare(b.id));
  const termExams = config.exams.filter((exam) =>
    isWeekInSelectedTerm(exam.week),
  );
  const examCards = termExams
    .map((exam) => {
      const available = testsForExam(exam),
        unlocked =
          (state.isGuest || currentWeek >= exam.week) &&
          available.length > 0 &&
          !available.some((test) => test.locked);
      const countText = available.length
        ? `${available.length} đề · ${available[0].question_count} câu`
        : "Đang biên soạn";
      return `<article class="catalog-card exam-card ${exam.tone}" ${unlocked ? `role="button" tabindex="0" data-exam-period="${exam.id}"` : ""}><span class="catalog-icon">${tileIcon(exam.icon)}</span><h3>${exam.name}</h3><p>${unlocked ? countText : `Mở từ tuần ${exam.week}`}</p><span class="catalog-pill ${unlocked ? "" : "locked-pill"}">${unlocked ? (available.length ? "Vào xem đề" : "Đang biên soạn") : `Mở từ tuần ${exam.week}`} ${unlocked ? icon("arrow_right") : icon("clock")}</span></article>`;
    })
    .join("");
  const visualTests = grade === 5
    ? state.tests.filter(
        (test) =>
          test.test_family === "visual_practice" &&
          test.kind === "truc_quan" &&
          test.status === "published" &&
          test.student_ready !== false &&
          Number(test.question_count) > 0,
      )
    : [];
  const visualCard = visualTests.length
    ? `<article class="catalog-card exam-card tone-green" role="button" tabindex="0" data-visual-practice>
        <span class="catalog-icon">${tileIcon("ruler")}</span>
        <h3>Ôn hình & đo lường · ${visualTests.length} chủ đề</h3>
        <p>${uiText("Hình vẽ lớn, rõ ràng · 15 câu mỗi bộ")}</p>
        <span class="catalog-pill">${uiText("Xem chủ đề")} ${icon("arrow_right")}</span>
      </article>`
    : "";
  const examSectionTitle = "Ôn tập & đề tổng hợp";
  const hsgCard = grade >= 6 && grade <= 9 ? hsgEntryCardHtml(true) : "";
  const examSectionNote = `${termExams.length} kỳ · 2 đề mỗi kỳ${visualTests.length ? ` · ôn hình ${visualTests.length} chủ đề` : ""}`;
  const singaporeSection = singaporeSectionHtml();
  $("#content").innerHTML = `
  <p class="eyebrow">Luyện thêm / Đề thi › Lớp ${grade} › ${termName}</p>
  <div class="page-intro"><div><h1 class="page-title">Luyện thêm – Lớp ${grade} · ${termName}</h1><p class="page-sub">Ôn theo chủ đề và luyện đề tổng hợp theo từng giai đoạn học tập.</p><p class="handwritten">Luyện đúng trọng tâm, tiến bộ từng ngày</p></div><img src="giao-dien-moi-app/notebook-star-v2.webp" alt="Sổ iMath và ngôi sao"></div>
  <div id="practice-overview">${totalTopics || grade < 6 || grade > 9 ? `<section class="band topic-band">${sectionHeading(`Ôn theo chủ đề · ${termName}`, "book", `đã mở ${openTopics}/${totalTopics} chuyên mục`)}<div class="catalog-grid topic-card-grid">${topicCards}</div></section>` : ""}
  ${wordProblemSectionHtml()}${singaporeSection}${mathCompetitionSectionHtml()}${entranceEntrySection()}<section class="band">${sectionHeading(`${examSectionTitle} · ${termName}`, "check_document", examSectionNote)}<div class="catalog-grid">${hsgCard}${visualCard}${examCards}</div></section></div>
  <section id="catalog-detail" class="band" hidden><div id="practice-tests"></div></section>
  <div class="bottom-ribbon">${icon("target")}<strong>Kiên trì luyện tập hôm nay để đạt được những thành tích tuyệt vời ngày mai!</strong><span>iMath</span></div>`;
  mountPracticeRows($("#practice-overview"));
  if (state.practiceView?.kind === "topic")
    showTopicGroup(state.practiceView.id, currentWeek);
  else if (state.practiceView?.kind === "topic-item")
    showTopicItem(
      state.practiceView.groupId,
      state.practiceView.index,
      state.practiceView.fromGroup,
    );
  else if (state.practiceView?.kind === "exam")
    showExamPeriod(state.practiceView.id, currentWeek);
  else if (state.practiceView?.kind === "visual") showVisualPractice();
  else if (state.practiceView?.kind === "singapore") showSingaporeTopic(state.practiceView.code);
  else if (state.practiceView?.kind === "word-problem") showWordProblemType(state.practiceView.code);
  else if (state.practiceView?.kind === "draft") showPracticeDraft();
  else if (state.catalogView?.group && state.catalogView.group !== "grade1")
    showCatalogGroup(state.catalogView.group);
  restorePracticeScroll();
}

/** Hiện các bộ trực quan lớp 5; quyền mở từng bộ vẫn lấy từ máy chủ. */
function showVisualPractice() {
  if (state.grade !== 5) return;
  const tests = state.tests
    .filter(
      (test) =>
        test.test_family === "visual_practice" &&
        test.kind === "truc_quan" &&
        test.status === "published" &&
        test.student_ready !== false &&
        Number(test.question_count) > 0,
    )
    .sort(
      (left, right) =>
        left.sort_order - right.sort_order ||
        left.name.localeCompare(right.name, "vi"),
    );
  state.practiceView = { kind: "visual" };
  state.catalogView = null;
  openPracticeDetail();
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-practice-back>${icon("chevron_left")} ${uiText("Luyện thêm")}</button><span class="catalog-detail-icon">${tileIcon("ruler")}</span><h3>${uiText("Ôn hình & đo lường")}</h3><span>${tests.length} ${uiText("chủ đề")}</span></div>${renderCatalogTestRows(tests, null, visualPracticeNameHtml)}`;
  applyUiLanguage();
}

/** Tên gọn chỉ ở danh sách ôn hình; tên đề trong dữ liệu và các trang khác giữ nguyên. */
function visualPracticeNameHtml(test) {
  const name = test.name.replace(/^(?:Hình học trực quan|Visual geometry)\s*[–—-]\s*/iu, "")
    .replace(/\s*[–—-]\s*(?:Bộ|Set)\s*1$/iu, "");
  return escapeHtml(uiText(name));
}

/** Mỗi chủ đề Singapore mở thành danh sách hai bộ; quyền từng bộ do API trả. */
function showSingaporeTopic(code) {
  const tests = singaporeCatalogueTests()
    .filter((test) => test.visual_topic === code)
    .sort((left, right) => left.sort_order - right.sort_order || left.id.localeCompare(right.id));
  if (!tests.length || !tests.some((test) => !test.locked)) return;
  state.practiceView = { kind: "singapore", code };
  state.catalogView = null;
  openPracticeDetail();
  $("#practice-tests").innerHTML = `<div class="catalog-detail-head">
    <button class="outline" data-practice-back>
      ${icon("chevron_left")} ${uiText("Luyện thêm")}
    </button>
    <span class="catalog-detail-icon">${icon(singaporeTopicIcons[code] || "bar_join")}</span>
    <h3>
      ${uiText("Toán Singapore")} · ${escapeHtml(singaporeTopicTitle(code))}
    </h3>
    <span>${tests.length} ${uiText("bộ")}</span>
  </div>${renderCatalogTestRows(tests, `g${state.grade}_singapore`)}`;
  applyUiLanguage();
}
function catalogTests(group) {
  const ids =
    group === "grade1"
      ? state.categories
          .filter(
            (category) =>
              category.id.startsWith("g1_") && !category.id.includes("weekly"),
          )
          .map((category) => category.id)
      : group === "advanced"
        ? ["chuyen_de", "singapore"]
        : [`g${state.grade}_enrichment_sgk_internal`];
  return state.tests.filter(
    (test) =>
      ids.includes(test.category_id) &&
      test.status === "published" &&
      test.student_ready !== false &&
      Number(test.question_count) > 0,
  );
}
async function showPracticeOverview() {
  practiceScrollReturn = true;
  state.practiceView = null;
  state.catalogView = null;
  if (restorePracticeOverviewFromCache()) return;
  await renderPractice();
  applyUiLanguage();
}
function openPracticeDetail() {
  $("#practice-overview").hidden = true;
  const detail = state.grade === 1 ? $("#grade1-detail") : $("#catalog-detail");
  if (detail) detail.hidden = false;
}
function showTopicGroup(id, currentWeek) {
  const group = window.IMATH_GRADE_CATALOGS?.[state.grade]?.topics.find(
    (item) => item.id === id,
  );
  if (!group) return;
  const termItems = practiceTopicItems(group);
  if (!termItems.length) return;
  state.practiceView = { kind: "topic", id };
  state.catalogView = null;
  openPracticeDetail();
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-practice-back>${icon("chevron_left")} Ôn theo chủ đề</button><span class="catalog-detail-icon">${tileIcon(group.icon)}</span><h3 class="source-content">${topicNameHtml(group)} · ${selectedTermName()}</h3><span>${termItems.length} chuyên mục</span></div><div class="topic-list">${termItems
      .map(({ item, index }) => {
        const unlocked = practiceTopicUnlocked(item, currentWeek);
        const availableTests = topicTests(item);
        return `<${unlocked ? "button" : "div"} class="test-row topic-group-row" ${unlocked ? `data-topic-item="${group.id}" data-topic-index="${index}" data-from-group="true"` : ""}><span class="test-row-icon">${tileIcon(item.icon)}</span><span class="test-row-copy"><strong class="source-content">${topicNameHtml(item)}</strong><span>${unlocked ? (availableTests.length ? `${availableTests.length} bộ · ${availableTests[0].question_count} câu` : "Bộ 1 · Đang biên soạn") : `Mở từ tuần ${item.week}`}</span></span><span class="topic-status ${unlocked ? "available" : "locked"}">${unlocked ? (availableTests.length ? "Sẵn sàng" : "Đã mở") : "Chưa mở"}</span></${unlocked ? "button" : "div"}>`;
      })
      .join("")}</div>`;
  applyUiLanguage();
}
/** Mở danh sách bộ của một chuyên mục đã đủ tuần; không tự vượt trạng thái khóa do API trả. */
function showTopicItem(groupId, index, fromGroup = false, forceOpen = false) {
  const group = window.IMATH_GRADE_CATALOGS?.[state.grade]?.topics.find(
    (entry) => entry.id === groupId,
  );
  const item = group && practiceTopicItems(group).find(entry => entry.index === Number(index))?.item;
  if (
    !item ||
    !isWeekInSelectedTerm(item.week) ||
    !practiceTopicUnlocked(item)
  )
    return;
  state.practiceView = { kind: "topic-item", groupId, index, fromGroup };
  state.catalogView = null;
  openPracticeDetail();
  const tests = topicTests(item);
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-topic-back>${icon("chevron_left")} ${fromGroup ? escapeHtml(topicName(group)) : "Ôn theo chủ đề"}</button><span class="catalog-detail-icon">${tileIcon(item.icon)}</span><h3 class="source-content">${topicNameHtml(item)} – ${uiText("Lớp")} ${state.grade}</h3><span>${tests.length ? `${tests.length} đề` : "Bộ 1"}</span></div>${tests.length ? renderCatalogTestRows(tests) : '<div class="test-row"><span class="test-row-icon">' + tileIcon("check_document") + '</span><span class="test-row-copy"><strong>Bộ 1</strong><span>Đang biên soạn</span></span></div>'}`;
  applyUiLanguage();
}
function showExamPeriod(id, currentWeek) {
  const exam = window.IMATH_GRADE_CATALOGS?.[state.grade]?.exams.find(
    (item) => item.id === id,
  );
  if (!exam || !isWeekInSelectedTerm(exam.week) || (!state.isGuest && currentWeek < exam.week))
    return;
  state.practiceView = { kind: "exam", id };
  state.catalogView = null;
  openPracticeDetail();
  const examKey = { mid1: "gk1", end1: "ck1", mid2: "gk2", end2: "ck2" }[
    exam.id
  ];
  const tests = state.tests
    .filter(
      (test) =>
        test.category_id === `g${state.grade}_exam` &&
        test.test_family === "exam" &&
        test.id.includes(`_${examKey}_`) &&
        test.status === "published" &&
        test.student_ready !== false &&
        Number(test.question_count) > 0,
    )
    .sort((a, b) => a.id.localeCompare(b.id));
  const rows = tests.length
    ? tests
        .map((test, index) => {
          const score = state.user?.solved_tests?.[test.id],
            max =
              state.user?.solved_test_max_scores?.[test.id] ||
              test.question_count;
          const band = score == null ? null : scoreBand(score, max);
          return `<div class="test-row ${band ? `score-card ${band.className}` : ""} ${test.locked ? "test-row-locked" : ""}">
            <span class="test-row-icon">${tileIcon("check_document")}</span>
            <div class="test-row-copy">
              <strong>${sourceContent(test.name || `Đề ${index + 1}`, test.translated)}</strong>
              <span>${test.locked ? `🔒 ${escapeHtml(test.lock_message || lockMessage(test.required_week))}` : `${test.question_count} câu`}</span>
              ${score == null ? "" : scoreBadgeHtml(score, max)}
            </div>
            <button class="outline" data-test="${escapeHtml(test.id)}" data-origin="practice" ${test.locked ? "disabled" : ""}>
              ${test.locked ? "Đang khóa" : score == null ? "Vào làm bài" : "Làm lại"}
            </button>
          </div>`;
        })
        .join("")
    : '<div class="test-row"><span class="test-row-icon">' +
      tileIcon("check_document") +
      '</span><div class="test-row-copy"><strong>Đề tổng hợp</strong><span>Đang biên soạn</span></div></div>';
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-practice-back>${icon("chevron_left")} Đề tổng hợp</button><span class="catalog-detail-icon">${tileIcon(exam.icon)}</span><h3>${exam.name}</h3><span>${tests.length ? `${tests.length} đề` : "Đang biên soạn"}</span></div><div class="test-list">${rows}</div>`;
  applyUiLanguage();
}
function showPracticeDraft() {
  state.practiceView = { kind: "draft" };
  state.catalogView = null;
  openPracticeDetail();
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-practice-back>${icon("chevron_left")} Luyện thêm</button><span class="catalog-detail-icon">${tileIcon("trophy")}</span><h3>Luyện thi học sinh giỏi</h3></div><p>Đang biên soạn</p>`;
}
function renderCatalogTestRows(selected, categoryId = null, nameHtml = null) {
  return `<div class="test-list">${selected
    .map((test) => {
      const score = state.user?.solved_tests?.[test.id];
      const max =
        state.user?.solved_test_max_scores?.[test.id] || test.question_count;
      const separateFlow =
        test.student_readiness_status === "parallel_sample_ready";
      const guestLock = state.isGuest && test.locked;
      const band = score == null ? null : scoreBand(score, max);
      const action = guestLock
        ? `<button class="outline" data-action="guest-login">${uiText("Đăng nhập")}</button>`
        : `<button class="outline" data-test="${escapeHtml(test.id)}" data-origin="practice" ${test.locked ? "disabled" : ""}>
            ${test.locked ? "Đang khóa" : separateFlow ? "Bắt đầu" : score == null ? "Vào làm bài" : "Làm lại"}
          </button>`;
      return `<div class="test-row ${band ? `score-card ${band.className}` : ""} ${test.locked ? "test-row-locked" : ""}">
        <span class="test-row-icon">${tileIcon(categoryImage(categoryId || test.category_id))}</span>
        <div class="test-row-copy"><strong>${nameHtml ? nameHtml(test) : sourceContent(test.name, test.translated)}</strong>
          <span>${test.locked
            ? `🔒 ${escapeHtml(test.lock_message || lockMessage(test.required_week))}`
            : `${test.question_count} câu${separateFlow ? " · Đề mẫu" : ""}`}</span>
          ${score == null ? "" : scoreBadgeHtml(score, max)}
        </div>${action}
      </div>`;
    })
    .join("")}</div>`;
}
function showCatalogGroup(group) {
  const selected = catalogTests(group);
  state.catalogView = { group, categoryId: null };
  if (group === "grade1") {
    $("#grade1-detail").hidden = true;
    $("#practice-tests").innerHTML = "";
    return;
  }
  state.practiceView = { kind: "catalog" };
  openPracticeDetail();
  const name = group === "advanced" ? "Toán tư duy" : "Luyện thêm SGK";
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-practice-back>${icon("chevron_left")} Luyện thêm · Lớp ${state.grade}</button><span class="catalog-detail-icon">${tileIcon(group === "advanced" ? "graduation_cap" : "book")}</span><h3>${name} – Lớp ${state.grade}</h3><span>${selected.length} đề</span></div>${selected.length ? renderCatalogTestRows(selected) : "<p>Chuyên mục này chưa có đề sẵn sàng.</p>"}`;
}
function showCatalogCategory(categoryId) {
  const group = state.catalogView?.group;
  if (!group) return;
  const selected = catalogTests(group).filter(
    (test) => test.category_id === categoryId,
  );
  const category = state.categories.find((item) => item.id === categoryId);
  state.catalogView = { group, categoryId };
  if (group === "grade1") $("#grade1-detail").hidden = false;
  const name =
    [...grade1Core, ...grade1Advanced].find((item) => item.id === categoryId)
      ?.name ||
    category?.name ||
    "Danh sách đề";
  $("#practice-tests").innerHTML =
    `<div class="catalog-detail-head"><button class="outline" data-catalog-back>${icon("chevron_left")} Chuyên mục · Lớp ${state.grade}</button><span class="catalog-detail-icon">${tileIcon(categoryImage(categoryId))}</span><h3>${escapeHtml(name)} – Lớp ${state.grade}</h3><span>${selected.length} đề</span></div>${selected.length ? renderCatalogTestRows(selected, categoryId) : "<p>Chuyên mục này chưa có đề sẵn sàng.</p>"}`;
  if (group === "grade1")
    $("#grade1-detail").scrollIntoView({ block: "start", behavior: "smooth" });
}
const competencyRanges = {
  week: "Tuần này",
  month: "Tháng này",
  term1: "Học kỳ I",
  term2: "Học kỳ II",
  year: "Cả năm",
};
const competencyLevels = {
  vung: { label: "Vững", tone: "good" },
  dat: { label: "Đạt", tone: "steady" },
  can_ren: { label: "Cần rèn", tone: "effort" },
  chua_du_du_lieu: { label: "Chưa đủ dữ liệu", tone: "muted" },
};
