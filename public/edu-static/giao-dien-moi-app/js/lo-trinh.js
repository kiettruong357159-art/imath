/**
 * lo-trinh.js — Tải và hiển thị lộ trình tuần, trạng thái mở khóa, mô tả tuần và dữ liệu danh mục dùng chung.
 * Dùng: core.js (state, api, điều hướng).
 * API gọi: get_weekly_learning_path, get_categories, get_tests.
 * Quy tắc nghiệp vụ: khóa tuần do máy chủ tính theo docs/chuan-lap-trinh.md mục 4.
 */
"use strict";

async function loadPath() {
  const grade = state.grade,
    term = state.term;
  const selected = await api("get_weekly_learning_path", {
    term_no: term,
    username: state.user.username,
  });
  if (state.grade === grade && state.term === term) {
    state.path = selected;
    applyUnlockState(selected);
  }
  return selected;
}
function weekDescription(week) {
  if (state.lang === "en" && week.translated && week.title)
    return String(week.title).trim();
  return week.tests.find((test) => test.description)?.description?.trim() || "";
}
function weekDescriptionTranslated(week) {
  return state.lang === "vi" || (state.lang === "en" && !!week.translated);
}
function weekTitle(week) {
  if (week.title) return String(week.title).trim();
  const description = weekDescription(week);
  if (!description) return `Tuần ${week.week_no}`;
  const firstSentence =
    description.match(/^[^.!?]+[.!?]?/)?.[0]?.trim() || description;
  if (firstSentence.length <= 60) return firstSentence;
  const prefix = firstSentence.slice(0, 59);
  return `${prefix.slice(0, prefix.lastIndexOf(" ") > 30 ? prefix.lastIndexOf(" ") : 59).trimEnd()}…`;
}
/** Đồng bộ done/open/current week từ máy chủ; trình duyệt chỉ dùng các số này để hiển thị khóa. */
function applyUnlockState(source = {}) {
  state.doneWeek = Number(source.done_week) || 0;
  state.unlockWeek = Number(source.unlock_week) || 0;
  state.currentWeek = Number(source.current_week) || 0;
  state.openUntil = Math.max(1, Number(source.open_until) || 1);
}
function lockMessage(requiredWeek) {
  return state.lang === "en"
    ? `Complete week ${Number(requiredWeek) || 1} to unlock.`
    : `Hoàn thành tuần ${Number(requiredWeek) || 1} để mở.`;
}
/** Tải và dựng lộ trình của học kỳ đang chọn, gồm tuần mở, tuần khóa và điểm đã lưu. */
async function renderPath() {
  const grade = state.grade,
    term = state.term;
  const path = await loadPath();
  if (state.page !== "path" || state.grade !== grade || state.term !== term)
    return;
  if (!path.weeks?.length) {
    $("#content").innerHTML =
      `<p class="eyebrow">Lộ trình học › Lớp ${grade}</p><div class="page-intro"><div><h1 class="page-title">Lộ trình theo tuần</h1><p class="page-sub">Học đều mỗi ngày, tiến bộ vững chắc từng tuần.</p></div><img src="giao-dien-moi-app/notebook-star-v2.webp" alt="Sổ iMath và ngôi sao"></div><section class="band empty-path"><span class="section-icon">${tileIcon("book")}</span><div><h2>Lộ trình tuần Lớp ${grade} đang biên soạn</h2><p>Trong lúc chờ, em luyện theo chuyên mục nhé</p><button class="primary" data-action="practice">Vào Luyện thêm ${icon("arrow_right")}</button></div></section>`;
    await teacherRenderStudentHome();
    return;
  }
  const completed = path.weeks.flatMap((week) =>
    week.tests
      .filter((test) => test.student_score !== null)
      .map((test) => ({ ...test, week_no: week.week_no })),
  );
  const done = completed.length;
  const requestedWeek = Number(state.focusWeek) || 0;
  const canFocusWeek = path.weeks.some(
    (week) => Number(week.week_no) === requestedWeek && !week.locked,
  );
  const current = canFocusWeek
    ? requestedWeek
    : path.weeks.some((week) => Number(week.week_no) === state.openUntil)
      ? state.openUntil
      : Number(path.weeks[0]?.week_no || 1);
  $("#content").innerHTML =
    `<p class="eyebrow">Lộ trình học › Lớp ${state.grade}</p><div class="page-intro"><div><h1 class="page-title">Lộ trình theo tuần</h1><p class="page-sub">Học đều mỗi ngày, tiến bộ vững chắc từng tuần.</p></div><img src="giao-dien-moi-app/notebook-star-v2.webp" alt="Sổ iMath và ngôi sao"></div><div class="stats"><div class="stat"><span class="stat-icon">${tileIcon("calendar")}</span><div><strong>${path.week_count}</strong><span>Tuần học</span></div></div><div class="stat"><span class="stat-icon">${tileIcon("check_document")}</span><div><strong>${path.total_tests}</strong><span>Đề theo tuần</span></div></div><div class="stat"><span class="stat-icon">${tileIcon("practice_pencil")}</span><div><strong>${path.total_questions}</strong><span>Câu hỏi</span></div></div><div class="stat"><span class="stat-icon">${tileIcon("trophy")}</span><div><strong>${done}</strong><span>Đề lộ trình đã làm</span></div></div></div>${state.isGuest ? "" : `<button class="weekly-report-card" data-action="account-report"><span>${icon("bar_chart")}</span><span><strong>Báo cáo tuần này</strong><small>Xem tiến độ, huy hiệu và phần em cần luyện thêm</small></span>${icon("arrow_right")}</button>`}<div class="week-list">${
      path.weeks.length
        ? path.weeks
            .map((week) => {
              const complete = week.tests.filter(
                (test) => test.student_score !== null,
              ).length;
              const completedBands = week.tests
                .filter((test) => test.student_score !== null)
                .map((test) =>
                  scoreBand(test.student_score, test.student_max_score),
                );
              const lowestBand = completedBands.sort(
                (left, right) => left.percent - right.percent,
              )[0];
              const status = week.locked
                ? week.lock_message || lockMessage(week.required_week)
                : complete === week.tests.length
                  ? `${lowestBand.icon} Xong ${complete}/${week.tests.length} · ${lowestBand.label}`
                  : complete
                    ? `Đang làm ${complete}/${week.tests.length}`
                    : "Chưa làm";
              const statusClass = week.locked
                ? "locked"
                : complete === week.tests.length
                  ? lowestBand.className
                  : complete
                    ? "partial"
                    : "not-started";
              const twoTestGradeOne = state.grade === 1 && week.tests.length === 2;
              return `<section class="week ${week.locked ? "week-locked" : ""}"><button class="week-head" data-toggle-week="${week.week_no}" aria-expanded="${week.week_no === current}"><span class="week-pill">${week.locked ? "🔒 " : ""}Tuần ${week.week_no}</span><span class="week-name"><span class="source-content">${escapeHtml(weekTitle(week))}</span></span>${sourceBadge(week.translated)}<span class="week-status ${statusClass}">${escapeHtml(status)}</span><span aria-hidden="true">⌄</span></button><div class="week-body" ${week.week_no === current ? "" : "hidden"}>${week.locked ? `<p class="week-lock-message">🔒 ${escapeHtml(week.lock_message || lockMessage(week.required_week))}</p>` : ""}${weekDescription(week) ? `<p class="week-description"><strong>Mục tiêu tuần:</strong> ${sourceContent(weekDescription(week), weekDescriptionTranslated(week))}</p>` : ""}<div class="test-grid ${twoTestGradeOne ? "grade-one-week-grid" : ""}">${week.tests
                .map((test) => {
                  const ready =
                    !test.locked &&
                    test.status === "published" &&
                    test.published_question_count === test.question_count &&
                    test.question_count > 0;
                  const guestLock = state.isGuest && test.locked;
                  const band =
                    test.student_score === null
                      ? null
                      : scoreBand(
                          test.student_score,
                          test.student_max_score,
                        );
                  const badge = test.locked
                    ? '<span class="badge">Đang khóa</span>'
                    : ready
                      ? test.student_score === null
                        ? '<span class="badge">Sẵn sàng</span>'
                        : scoreBadgeHtml(
                            test.student_score,
                            test.student_max_score,
                          )
                      : '<span class="badge">Đang biên soạn</span>';
                  const action = guestLock
                    ? `<p class="guest-lock-copy">🔒 ${uiText("Đăng nhập để mở đề Nâng cao nhẹ và lưu kết quả")}</p>
                      <button class="primary" data-action="guest-login">${uiText("Đăng nhập")}</button>`
                    : `<button class="primary" data-test="${escapeHtml(test.id)}" data-origin="path" ${ready ? "" : "disabled"}>
                        ${test.locked
                          ? `🔒 ${escapeHtml(test.lock_message || lockMessage(test.required_week))}`
                          : test.student_score === null
                            ? "Vào làm bài"
                            : "Làm lại"}
                      </button>`;
                  return `<article class="test-card ${band ? `score-card ${band.className}` : ""} ${test.locked ? "test-card-locked" : ""}">
                    <div class="test-card-meta"><span class="test-card-icon">${tileIcon("check_document")}</span>${badge}</div>
                    <h3>${escapeHtml(test.role_label || test.name)}</h3>
                    <p>${sourceContent(test.name, test.translated)} · ${test.question_count} câu</p>
                    ${action}
                  </article>`;
                })
                .join("")}</div></div></section>`;
            })
            .join("")
        : '<section class="band">Lộ trình học kỳ này đang được biên soạn.</section>'
    }</div>`;
  state.focusWeek = null;
  // Quyền xem/làm bài được giao dựa vào lớp và đồng ý của phụ huynh ở server (kế hoạch mục K).
  await teacherRenderStudentHome();
  if (canFocusWeek)
    requestAnimationFrame(() =>
      document
        .querySelector(`[data-toggle-week="${requestedWeek}"]`)
        ?.scrollIntoView({ block: "center", behavior: "smooth" }),
    );
}
const placeholder = (
  name,
  image,
  description = "Nội dung luyện tập đang được biên soạn.",
  tone = "",
) =>
  `<article class="catalog-card ${tone}"><span class="catalog-icon">${tileIcon(image)}</span><h3>${name}</h3><p>${description}</p><span class="catalog-pill">Đang biên soạn ${icon("arrow_right")}</span></article>`;
const sectionHeading = (name, image, note, group = "") =>
  `<div class="band-head"><div class="section-label"><span class="section-icon">${tileIcon(image)}</span><div><h2>${name}</h2><small>${note}</small></div></div>${group ? `<button class="section-link" data-category="${group}">Xem tất cả ${icon("arrow_right")}</button>` : ""}</div>`;
const grade1Core = [
  {
    id: "g1_cat_l01_numbers_0_10",
    name: "Số từ 0 đến 10",
    description: "Làm quen, đọc và so sánh các số đầu tiên.",
    image: "calculator",
    tone: "tone-blue",
  },
  {
    id: "g1_cat_l02_counting_objects",
    name: "Đếm đồ vật",
    description: "Đếm và ghép số với những đồ vật quen thuộc.",
    image: "practice_pencil",
    tone: "tone-orange",
  },
  {
    id: "g1_cat_l06_numbers_to_100",
    name: "Số đến 100",
    description: "Khám phá hàng chục, hàng đơn vị và dãy số.",
    image: "level_bars",
    tone: "tone-violet",
  },
  {
    id: "g1_cat_l08_flat_shapes",
    name: "Hình phẳng cơ bản",
    description: "Nhận ra hình và các đặc điểm dễ thấy.",
    image: "ruler",
    tone: "tone-green",
  },
];
const grade1Advanced = [
  {
    id: "g1_violympic_challenge_internal",
    name: "Thử thách Violympic",
    description: "Vận dụng kiến thức qua các thử thách.",
    image: "trophy",
    tone: "tone-orange",
  },
  {
    id: "g1_enrichment_sgk_internal",
    name: "Luyện thêm SGK",
    description: "Luyện chắc bài học theo sách giáo khoa.",
    image: "book",
    tone: "tone-green",
  },
];
const categoryImage = (id) =>
  [...grade1Core, ...grade1Advanced].find((item) => item.id === id)?.image ||
  (id === "singapore"
    ? "graduation_cap"
    : id === "chuyen_de"
      ? "practice_pencil"
      : id.includes("enrichment")
        ? "book"
        : "check_document");
const publishedTests = (categoryId) =>
  state.tests.filter(
    (test) =>
      test.category_id === categoryId &&
      test.status === "published" &&
      test.student_ready !== false &&
      Number(test.question_count) > 0,
  );
/** Lọc đúng các bộ Ôn chủ đề theo mã chuyên mục; open_week vẫn được máy chủ kiểm lại khi mở. */
function topicTests(item) {
  const topicReviewTests = state.tests.filter(
    (test) =>
      test.test_family === "topic_review" &&
      test.topic_code === item.code &&
      test.status === "published" &&
      test.student_ready !== false &&
      Number(test.question_count) > 0,
  );
  if (topicReviewTests.length) return topicReviewTests;
  const categoryId =
    item.categoryId ||
    state.categories.find((category) => category.name?.trim() === item.name)
      ?.id;
  return categoryId ? publishedTests(categoryId) : [];
}
function topicScore(item) {
  const test = topicTests(item).find(
    (candidate) =>
      state.user?.solved_tests?.[candidate.id] != null ||
      candidate.student_score != null,
  );
  if (!test) return "";
  const score = state.user?.solved_tests?.[test.id] ?? test.student_score;
  const max =
    state.user?.solved_test_max_scores?.[test.id] ?? test.question_count;
  return { score: Number(score), max: Number(max), band: scoreBand(score, max) };
}
const grade1Card = (item) =>
  `<article class="catalog-card ${item.tone}" role="button" tabindex="0" data-catalog-category="${item.id}"><span class="catalog-icon">${tileIcon(item.image)}</span><h3>${item.name}</h3><p>${item.description}</p><span class="catalog-pill">${publishedTests(item.id).length} đề ${icon("arrow_right")}</span></article>`;
async function loadCatalog() {
  const grade = state.grade;
  if (!catalogCache.has(grade)) {
    const request = Promise.all([
      api("get_categories", { grade_level: grade }),
      api("get_tests", { grade_level: grade }),
    ])
      .then(([categories, tests]) => ({
        categories: (categories.categories || []).filter(
          (category) => Number(category.grade_level) === grade,
        ),
        tests: (tests.tests || []).filter(
          (test) => Number(test.grade_level) === grade,
        ),
        access: tests,
      }))
      .catch((error) => {
        catalogCache.delete(grade);
        throw error;
      });
    catalogCache.set(grade, request);
  }
  const catalog = await catalogCache.get(grade);
  if (state.grade !== grade) return;
  state.categories = catalog.categories;
  state.tests = catalog.tests;
  applyUnlockState(catalog.access);
  state.catalogGrade = grade;
  renderAdvancedNav();
}
