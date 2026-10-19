/**
 * core.js — Trạng thái chung, gọi API, phiên đăng nhập, điều hướng và khung giao diện học sinh.
 *
 * Dùng: i18n.js, speech.js, chuyen-muc.js; các file tính năng trong thư mục này dùng state và helper ở đây.
 *
 * API gọi: get_config, resume_student_session, get_weekly_learning_path, get_categories, get_tests.
 *
 * Quy tắc nghiệp vụ: docs/chuan-lap-trinh.md; quyền lớp và khóa tuần vẫn do máy chủ quyết định.
 */
"use strict";

const iconBase = "giao-dien-moi/icon/svg/";
const icon = (name) => `<img src="${iconBase}${name}.svg" alt="">`;
const tileIcon = (name) =>
  `<img src="giao-dien-moi-app/img/tiles/${name}.webp" alt="">`;
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );

/**
 * Phân mức điểm theo phần trăm để mọi màn dùng cùng màu, biểu tượng và tên mức.
 * Mốc điểm do user duyệt ngày 01/10/2026; biểu tượng giúp kết quả vẫn rõ khi không phân biệt được màu.
 */
function scoreBand(score, maxScore) {
  const safeMax = Math.max(1, Number(maxScore) || 1);
  const percent = Math.max(
    0,
    Math.min(100, Math.round((Number(score) / safeMax) * 100)),
  );
  const english = state.lang === "en";
  if (percent === 100) {
    return {
      key: "excellent",
      className: "score-excellent",
      icon: "★",
      label: english ? "Excellent" : "Xuất sắc",
      percent,
    };
  }
  if (percent >= 80) {
    return {
      key: "good",
      className: "score-good",
      icon: "✓",
      label: english ? "Good" : "Tốt",
      percent,
    };
  }
  if (percent >= 50) {
    return {
      key: "review",
      className: "score-review",
      icon: "↻",
      label: english ? "Review again" : "Cần ôn thêm",
      percent,
    };
  }
  return {
    key: "retry",
    className: "score-retry",
    icon: "!",
    label: english ? "Try again" : "Làm lại nhé",
    percent,
  };
}

/** Dựng nhãn điểm có đủ số, biểu tượng và tên mức; nội dung số do máy chủ trả nên chỉ nhận kiểu số. */
function scoreBadgeHtml(score, maxScore) {
  const band = scoreBand(score, maxScore);
  return [
    `<span class="score-label ${band.className}">`,
    `<span aria-hidden="true">${band.icon}</span>`,
    `<strong>${String(Number(score)).replace(".", ",")}/${String(Number(maxScore)).replace(".", ",")}</strong>`,
    '<span aria-hidden="true">·</span>',
    `<span>${escapeHtml(band.label)}</span></span>`,
  ].join("");
}
const state = {
  user: null,
  isGuest: false,
  grade: 2,
  allowed: [],
  term: 1,
  lang: "vi",
  page: "path",
  accountTab: "profile",
  account: null,
  parentContext: undefined,
  reportTab: "competency",
  competencyRange: "term1",
  competencyGroup: null,
  competencyReport: null,
  categories: [],
  tests: [],
  catalogGrade: null,
  path: null,
  doneWeek: 0,
  unlockWeek: 0,
  currentWeek: 0,
  openUntil: 1,
  focusWeek: null,
  quiz: null,
  singapore: null,
  returnPage: "path",
  catalogView: null,
  practiceView: null,
  score: null,
  favoriteFilters: { grade: "", topic: "", reason: "" },
  favoriteItems: [],
  favoriteSolution: null,
};
const catalogCache = new Map();

/** Gọi cửa vào api.php, tự gắn ngôn ngữ và phạm vi môn/lớp cho các action danh mục. */
async function api(action, data = {}) {
  // Bài giáo viên lấy gợi ý từ bản đã chốt thay vì bản câu mới nhất trong kho (kế hoạch mục K).
  if (state.page === "quiz" && state.quiz?.teacherAttempt && ["get_hint", "get_hint_diagram"].includes(action))
    return teacherQuizApi(action, data);
  const response = await imathApiFetch(`api.php?action=${encodeURIComponent(action)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({
      ...data,
      ...([
        "get_categories",
        "get_tests",
        "get_questions",
        "get_hint",
        "get_hint_diagram",
        "get_easier_question",
        "record_question_help",
        "get_weekly_learning_path",
        "get_competency_report",
        "submit_answer",
        "get_favorites",
        "get_question_solution",
      ].includes(action)
        ? { lang: data.lang || state.lang || "vi" }
        : {}),
      ...(new Set([
        "get_categories",
        "get_tests",
        "get_questions",
        "get_weekly_learning_path",
      ]).has(action)
        ? {
            subject_code: "math",
            grade_level: data.grade_level || state.grade,
            curriculum_version: "gdpt_2018",
          }
        : {}),
    }),
  });
  const result = await response.json().catch(() => null);
  if (!result || !result.success) {
    const error = new Error(
      result?.error || `Không tải được dữ liệu (${response.status}).`,
    );
    error.code = result?.error_code;
    error.totalHints = result?.total_hints;
    error.hasDiagram = result?.has_diagram;
    error.hintSource = result?.hint_source;
    throw error;
  }
  return result;
}
function setNav(page) {
  if (typeof entranceRemediationNavigation === "function") entranceRemediationNavigation(page);
  const activePage =
    ["timo", "timo-mock", "entrance-fixed", "entrance-fixed-exam", "entrance-fixed-result"].includes(page) ? "practice" : page === "quiz" || page === "result" ? (state.returnPage === "timo" ? "practice" : state.returnPage) : page;
  document
    .querySelectorAll(".main-nav [data-page]")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.page === activePage),
    );
  $("#app-shell").classList.toggle(
    "in-quiz",
    page === "quiz" || page === "result" || page === "timo-mock" || page === "entrance-fixed-exam" || page === "entrance-fixed-result",
  );
  state.page = page;
  $("#app-shell").classList.toggle("entrance-fixed-active", page.startsWith("entrance-fixed"));
}
async function navigate(page) {
  if (page === "entrance") { state.entranceExam = "vao_6"; page = "entrance-fixed"; }
  if (state.page === "quiz" && state.quiz?.termClock && page !== "quiz") {
    termExamStop();
    try { await termExamFlush(); } catch (error) { if (error.code !== "TERM_EXAM_TIME_UP") throw error; }
  }
  if (state.page === "entrance-fixed-exam" && page !== "entrance-fixed-exam") await entranceFixedLeave();
  if (state.page === "timo-mock" && page !== "timo-mock") timoStopTimer();
  if (state.page === "quiz" && page !== "quiz")
    pauseQuestionTimer(state.quiz, state.quiz?.index);
  if (state.page !== page) stopSpeech();
  window.IMATH_STUDENT_ROUTE?.commit(page, state.grade, state.page);
  setNav(page);
  if (page === "practice" && restorePracticeOverviewFromCache()) return;
  $("#content").innerHTML = '<div class="band">Đang tải dữ liệu...</div>';
  try {
    if (page === "path") await renderPath();
    if (page === "practice") await renderPractice();
    if (page === "timo") await renderTimo();
    if (page === "entrance-fixed") await renderEntranceFixed();
    if (page === "timo-mock") await reloadTimoMock();
    if (page === "report") await renderReport();
    if (page === "account") await renderAccount();
    if (page === "wrong-questions") await renderWrongQuestions();
    if (page === "favorites") await renderFavorites();
    if (page === "teacher") await teacherRenderStudentPage();
    // Một lượt tải cũ có thể kết thúc sau khi em đã chuyển trang; không chèn thẻ vào trang mới.
    if (state.page === page && !state.isGuest && ["path", "practice"].includes(page)) {
      const entry = document.createElement("div");
      entry.id = "wrong-question-entry";
      $("#content").prepend(entry);
      await refreshWrongEntry();
    }
    applyUiLanguage();
    await termExamResume();
  } catch (error) {
    if (state.page === page)
      $("#content").innerHTML =
        `<div class="band error">${escapeHtml(error.message)}</div>`;
  }
}
/** Gắn một lần các sự kiện khung trang; nội dung động dùng cơ chế ủy quyền sự kiện. */
function bindShell() {
  bindAccountEvents();
  bindAttemptHistoryEvents();
  $("#login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    $("#login-error").textContent = "";
    const submit = $("#login-form button[type=submit]");
    submit.disabled = true;
    submit.textContent = "Đang đăng nhập…";
    try {
      const result = await api("login_user", {
        username: $("#username").value.trim(),
        password: $("#password").value,
      });
      await enter(result.user);
    } catch (error) {
      showError("#login-error", error);
    } finally {
      submit.disabled = false;
      submit.innerHTML = "Đăng nhập <span>→</span>";
    }
  });
  document.addEventListener("imath:guest-return", async () => {
    await enterGuest(state.grade);
  });
  $("#guest-login-top")?.addEventListener("click", showLoginFromGuest);
  document.querySelectorAll(".main-nav [data-page]").forEach((button) =>
    button.addEventListener("click", () => {
      if (button.dataset.page === "practice") {
        state.catalogView = null;
        state.practiceView = null;
      }
      if (
        button.dataset.page === "report" &&
        state.page !== "report" &&
        /^term[12]$/.test(state.competencyRange)
      )
        state.competencyRange = state.term === 2 ? "term2" : "term1";
      navigate(button.dataset.page);
    }),
  );
  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    if (state.user) navigate("path");
  });
  $("#grade-list").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-grade]");
    if (!button || button.disabled) return;
    state.grade = Number(button.dataset.grade);
    if (state.isGuest) saveGuestGradePreference(state.grade);
    state.path = null;
    state.currentWeek = 1;
    state.tests = [];
    state.categories = [];
    state.catalogGrade = null;
    state.catalogView = null;
    state.practiceView = null;
    renderSidebar();
    await navigate(
      state.page === "result" || state.page === "quiz" ? "path" : state.page,
    );
  });
  $("#term-list").addEventListener("click", async (event) => {
    const button = event.target.closest("[data-term]");
    if (!button) return;
    const nextPage = ["practice", "quiz", "result"].includes(state.page)
      ? "practice"
      : state.page;
    state.term = Number(button.dataset.term);
    state.path = null;
    state.practiceView = null;
    state.catalogView = null;
    if (nextPage === "practice") state.returnPage = "practice";
    if (nextPage === "report")
      state.competencyRange = state.term === 2 ? "term2" : "term1";
    renderSidebar();
    await navigate(nextPage);
  });
  $("#advanced-nav").addEventListener("click", async (event) => {
    const catalog = event.target.closest("[data-side-catalog]");
    if (catalog) {
      state.catalogView =
        state.grade === 1
          ? {
              group: "grade1",
              categoryId: {
                violympic: "g1_violympic_challenge_internal",
                enrichment: "g1_enrichment_sgk_internal",
              }[catalog.dataset.sideCatalog],
            }
          : { group: catalog.dataset.sideCatalog, categoryId: null };
      state.practiceView = state.grade === 1 ? null : { kind: "catalog" };
      await navigate("practice");
      return;
    }
    if (event.target.closest("[data-side-draft]")) {
      state.catalogView = null;
      state.practiceView = { kind: "draft" };
      await navigate("practice");
      return;
    }
    if (event.target.closest('[data-transfer="6"]')) await navigate("entrance");
  });
  $("#search-toggle").addEventListener("click", async () => {
    $("#search-panel").hidden = !$("#search-panel").hidden;
    if (!$("#search-panel").hidden) {
      $("#search-input").focus();
      try {
        if (!state.tests.length) await loadCatalog();
        if (!state.path) await loadPath();
      } catch (error) {
        showError("#search-results", error);
      }
      if ($("#search-input").value.trim()) {
        $("#search-input").dispatchEvent(new Event("input"));
      }
    }
  });
  $("#account-toggle").addEventListener("click", () => {
    if (state.isGuest) return;
    $("#account-panel").hidden = !$("#account-panel").hidden;
  });
  document.querySelectorAll("[data-account-tab]").forEach((button) =>
    button.addEventListener("click", async () => {
      state.accountTab = button.dataset.accountTab || "profile";
      $("#account-panel").hidden = true;
      await navigate("account");
    }),
  );
  $("#logout-btn").addEventListener("click", async () => {
    stopSpeech();
    try {
      await api("logout_user");
    } catch (_) {}
    catalogCache.clear();
    state.catalogGrade = null;
    state.user = null;
    state.isGuest = false;
    $("#account-panel").hidden = true;
    $("#password").value = "";
    await enterGuest(state.grade);
  });
  $("#language-select")?.addEventListener("change", async (event) => {
    stopSpeech();
    state.lang = event.target.value;
    window.IMATH_I18N?.save(state.isGuest ? "guest" : state.user?.username, state.lang);
    if (state.user?.username) {
      try {
        const saved = await api("set_language_preference", {
          preferred_lang: state.lang,
        });
        state.user.preferred_lang = saved.preferred_lang;
      } catch (error) {
        console.warn("Language preference:", error.message);
      }
    }
    catalogCache.clear();
    state.catalogGrade = null;
    if (state.page === "timo-mock") {
      await reloadTimoMock();
    } else if (state.page === "quiz" && state.quiz?.kind === "entrance-practice") {
      await entrancePracticeRefreshLanguage();
    } else if (state.page === "quiz" && state.quiz?.test?.id) {
      try {
        const [response, catalog] = await Promise.all([
          api("get_questions", {
            test_id: state.quiz.test.id,
            grade_level: state.grade,
          }),
          api("get_tests", { grade_level: state.grade }),
        ]);
        state.quiz.questions = preserveQuestionOptionOrder(
          state.quiz.questions,
          response.questions || state.quiz.questions,
        );
        const translatedTest = (catalog.tests || []).find(
          (test) => test.id === state.quiz.test.id,
        );
        if (translatedTest)
          state.quiz.test = { ...state.quiz.test, ...translatedTest };
        state.tests = catalog.tests || state.tests;
        state.catalogGrade = state.grade;
      } catch (_) {}
      state.quiz.hints = Array.from(
        { length: state.quiz.questions.length },
        () => [],
      );
      state.quiz.hintTotals = [];
      state.quiz.hintUnavailable = [];
      state.quiz.hintHasDiagrams = [];
      state.quiz.hintDiagrams = [];
      renderQuiz();
    } else if (
      state.page === "practice" ||
      state.page === "path" ||
      state.page === "report" ||
      state.page === "account" ||
      state.page === "favorites"
    )
      await navigate(state.page);
    applyUiLanguage();
  });
  $("#content").addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-bilingual-toggle]");
    if (toggle) {
      const vi = toggle.nextElementSibling;
      if (vi) vi.hidden = !vi.hidden;
    }
  });
  $("#search-input").addEventListener("input", () => {
    const query = $("#search-input").value.toLocaleLowerCase("vi").trim();
    const weekly =
      state.path?.weeks
        .flatMap((week) => week.tests)
        .filter(
          (test) =>
            test.status === "published" &&
            test.published_question_count === test.question_count,
        ) || [];
    const searchable = [
      ...weekly,
      ...state.tests.filter((test) => test.student_ready !== false),
    ].filter(
      (test, index, items) =>
        items.findIndex((item) => item.id === test.id) === index,
    );
    $("#search-results").innerHTML = query
      ? searchable
          .filter((test) => test.name?.toLocaleLowerCase("vi").includes(query))
          .slice(0, 6)
          .map((test) =>
            test.locked
              ? `<div class="search-result-locked"><span>${escapeHtml(test.name)}</span><small>🔒 ${escapeHtml(test.lock_message || lockMessage(test.required_week))}</small></div>`
              : `<button data-search-test="${escapeHtml(test.id)}">${escapeHtml(test.name)}</button>`,
          )
          .join("") || "<p>Không có đề phù hợp trong lớp đang chọn.</p>"
      : "";
  });
  $("#search-results").addEventListener("click", (event) => {
    const button = event.target.closest("[data-search-test]");
    if (button) {
      $("#search-panel").hidden = true;
      startTestById(button.dataset.searchTest);
    }
  });
  $("#content").addEventListener("click", handleContentClick);
  $("#content").addEventListener("change", async (event) => {
    const filter = event.target.closest("[data-favorite-filter]");
    if (!filter) return;
    const key = filter.dataset.favoriteFilter;
    state.favoriteFilters[key] = filter.value;
    if (key === "grade") state.favoriteFilters.topic = "";
    state.favoriteSolution = null;
    await renderCurrentFavorites(true);
  });
  $("#content").addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.matches('.catalog-card[role="button"]')
    ) {
      event.preventDefault();
      event.target.click();
    }
  });
  document.addEventListener("visibilitychange", () => {
    const quiz = state.quiz;
    if (!quiz || state.page !== "quiz") return;
    if (document.hidden) pauseQuestionTimer(quiz, quiz.index);
    else resumeQuestionTimer(quiz, quiz.index);
  });
}
