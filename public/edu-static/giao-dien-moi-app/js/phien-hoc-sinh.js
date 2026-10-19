/**
 * phien-hoc-sinh.js — Khởi tạo phiên, áp dụng ngôn ngữ theo tài khoản, dò quyền lớp và dựng cột trái.
 * Dùng: core.js, cai-dat-ngon-ngu.js, cham-ngon-hoc-tap.js (chọn lời nhắc theo phiên).
 * API gọi: get_config, resume_student_session, get_allowed_grade_levels, get_weekly_learning_path.
 * Quy tắc nghiệp vụ: người dùng mới mặc định tiếng Việt; quyền lớp luôn lấy từ máy chủ; khách lớp 1–12 theo chính sách 05/10/2026.
 */
"use strict";

// Chỉ get_config công bố lớp có nội dung; không đoán kho lớp ở trình duyệt.
let CONTENT_GRADE_LEVELS = Object.freeze([]);
let SUPPORTED_GRADE_LEVELS = Object.freeze(Array.from({ length: 12 }, (_, index) => index + 1));
const GUEST_GRADE_STORAGE_KEY = "imath_guest_grade";

/** Đọc lớp khách đã chọn; ưu tiên lớp 2 khi lớp đã nhớ không còn nội dung. */
function guestGradePreference() {
  const grade = Number(localStorage.getItem(GUEST_GRADE_STORAGE_KEY));
  const grades = guestLearningGrades();
  return grades.includes(grade) ? grade : grades.includes(2) ? 2 : grades[0] || 2;
}

/** Nhớ lớp khách để lần mở web sau vào thẳng đúng lộ trình. */
function saveGuestGradePreference(grade) {
  if (guestLearningGrades().includes(Number(grade))) {
    localStorage.setItem(GUEST_GRADE_STORAGE_KEY, String(grade));
  }
}

async function initialize() {
  window.renderDangNhapScreen?.();
  state.lang = window.IMATH_I18N?.load("guest") || "vi";
  bindShell();
  document.querySelector(".main-nav").hidden = true;
  document.querySelector(".top-actions").hidden = true;
  try {
    const response = await api("get_config");
    applyServerGradeConfiguration(response.config || {});
  } catch (error) {
    console.warn("Config:", error.message);
  }
  try {
    const session = await api("resume_student_session");
    await enter(session.user);
  } catch (_) {
    const shared = sharedGuestTest();
    if (shared) await enterGuest(shared.grade, shared.testId);
    else await enterGuest(window.IMATH_STUDENT_ROUTE?.entry(true, 2)?.grade || guestGradePreference());
  }
}

/**
 * Ghép chuyên mục cấp 2–3 do API đọc từ bảng cấu hình và file nội dung.
 * JavaScript không chứa danh sách lớp/chuyên mục riêng nên lớp mới tự xuất hiện
 * ngay khi DB có đề published và file chuyên mục đã được khai báo.
 */
function applyServerGradeConfiguration(config) {
  const supported = (config.supported_grade_levels || []).map(Number).filter(Boolean);
  const published = (config.content_grade_levels || []).map(Number).filter(Boolean);
  if (supported.length) SUPPORTED_GRADE_LEVELS = Object.freeze(supported);
  if (published.length) CONTENT_GRADE_LEVELS = Object.freeze(published);
  const catalogs = { ...(window.IMATH_GRADE_CATALOGS || {}) };
  const groupNames = {
    so_dai_so: ["Số và Đại số", "Numbers and algebra", "calculator", "tone-blue"],
    hinh_hoc_do_luong: ["Hình học và Đo lường", "Geometry and measurement", "ruler", "tone-orange"],
    thong_ke_xac_suat: ["Thống kê và Xác suất", "Statistics and probability", "statistics", "tone-violet"],
    other: ["Chuyên mục khác", "Other topics", "document", "tone-green"],
  };
  const defaultExams = (catalogs[2]?.exams || []).map((exam) => ({ ...exam }));
  for (const [gradeKey, source] of Object.entries(config.secondary_catalogs || {})) {
    const grouped = new Map();
    for (const topic of source.topics || []) {
      const key = topic.group || "other";
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push({
        code: topic.code,
        name: topic.name,
        name_en: topic.name_en || topic.name,
        week: Number(topic.week) || 1,
        icon: groupNames[key]?.[2] || "document",
      });
    }
    catalogs[Number(gradeKey)] = {
      topics: [...grouped.entries()].map(([key, items]) => ({
        id: key,
        name: groupNames[key]?.[0] || groupNames.other[0],
        name_en: groupNames[key]?.[1] || groupNames.other[1],
        icon: groupNames[key]?.[2] || groupNames.other[2],
        tone: groupNames[key]?.[3] || groupNames.other[3],
        description: "",
        items,
      })),
      exams: defaultExams,
      weeks: source.weeks || {},
    };
  }
  // Lớp có đề nhưng chưa có file chuyên mục vẫn vào được Lộ trình và đề kỳ.
  for (const grade of published) {
    catalogs[grade] ||= { topics: [], exams: defaultExams, weeks: {} };
  }
  window.IMATH_GRADE_CATALOGS = Object.freeze(catalogs);
}
async function enter(user) {
  state.user = user;
  state.isGuest = false;
  window.IMATH_STUDY_PROVERBS.begin(user.username);
  state.account = null;
  state.parentContext = undefined;
  window.IMATH_SPEECH_ENABLED = user.speech_enabled !== false;
  state.lang = ["vi", "en", "bi"].includes(user.preferred_lang)
    ? user.preferred_lang
    : window.IMATH_I18N?.load(user.username) || "vi";
  window.IMATH_I18N?.save(user.username, state.lang);
  catalogCache.clear();
  state.catalogGrade = null;
  state.tests = [];
  state.categories = [];
  await discoverGrades();
  const assignedGrade = Number(user.assigned_grade_level || 0);
  state.grade = state.allowed.includes(assignedGrade)
    ? assignedGrade
    : state.allowed.includes(2) ? 2 : state.allowed.at(-1) || 1;
  const route = window.IMATH_STUDENT_ROUTE?.entry(false, state.grade);
  if (route) { state.grade = route.grade; state.entranceExam = route.exam; }
  document.body.classList.add("authenticated");
  document.body.classList.remove("guest-mode");
  document.querySelector(".main-nav").hidden = false;
  document.querySelector(".top-actions").hidden = false;
  $("#account-toggle").hidden = false;
  $("#search-toggle").hidden = false;
  $("#guest-login-top").hidden = true;
  $("#login-screen").hidden = true;
  $("#app-shell").hidden = false;
  $("#account-name").textContent = user.display_name || user.username;
  $("#account-detail").textContent = user.display_name || user.username;
  const avatarImage = $("#account-toggle img");
  if (avatarImage)
    // accountAvatarUrl giữ tương thích ảnh cũ trong svg/ và bộ Cú iMath mới trong avatar/.
    avatarImage.src = typeof accountAvatarUrl === "function"
      ? accountAvatarUrl(user.avatar)
      : `${iconBase}${escapeHtml(user.avatar || "avatar.svg")}`;
  applyUiLanguage();
  renderSidebar();
  const gradeOnePath = state.grade === 1 ? await loadPath() : null;
  await navigate(
    route?.page || (gradeOnePath && !gradeOnePath.weeks?.length ? "practice" : "path"),
  );
  // Thông báo đổi lớp phải còn đọc được sau khi trang tải lại và lộ trình đã dựng xong.
  accountShowGradeChangeNotice();
}

/** Đọc liên kết chia sẻ trực tiếp mà không tin id để quyết quyền; API vẫn kiểm can_access(). */
function sharedGuestTest() {
  const params = new URLSearchParams(location.search);
  const testId = String(params.get("test") || "").trim();
  if (!/^[A-Za-z0-9_-]{3,100}$/.test(testId)) return null;
  const gradeFromId = Number(testId.match(/^g(1[0-2]|[1-9])wk_/i)?.[1] || 0);
  const grade = Number(params.get("grade")) || gradeFromId;
  return CONTENT_GRADE_LEVELS.includes(grade) ? { testId, grade } : null;
}

/**
 * Lấy lớp có nội dung published từ get_config; không dò quyền của học sinh.
 * Một lớp mới tự mở cho khách khi máy chủ công bố, nhưng từng đề vẫn qua can_access().
 */
function guestLearningGrades() {
  return CONTENT_GRADE_LEVELS.filter((grade) => SUPPORTED_GRADE_LEVELS.includes(grade));
}

/** Khởi tạo giao diện khách; đây không phải tài khoản và không có dữ liệu cá nhân. */
async function enterGuest(grade = 2, testId = "") {
  window.IMATH_STUDY_PROVERBS.reset();
  state.isGuest = true;
  state.user = { username: "", display_name: "Khách", is_guest: true };
  state.account = null;
  state.parentContext = undefined;
  state.lang = window.IMATH_I18N?.load("guest") || "vi";
  state.allowed = guestLearningGrades();
  state.grade = state.allowed.includes(Number(grade)) ? Number(grade) : guestGradePreference();
  const route = window.IMATH_STUDENT_ROUTE?.entry(true, state.grade);
  if (route) { state.grade = route.grade; state.entranceExam = route.exam; }
  saveGuestGradePreference(state.grade);
  state.term = 1;
  state.path = null;
  state.tests = [];
  state.categories = [];
  state.catalogGrade = null;
  catalogCache.clear();
  document.body.classList.add("authenticated", "guest-mode");
  document.querySelector(".main-nav").hidden = false;
  document.querySelector(".top-actions").hidden = false;
  $("#account-toggle").hidden = true;
  $("#search-toggle").hidden = false;
  $("#guest-login-top").hidden = false;
  $("#login-screen").hidden = true;
  $("#app-shell").hidden = false;
  applyUiLanguage();
  renderSidebar();
  await navigate(route?.page || "path");
  if (testId) {
    await loadCatalog();
    await startTestById(testId, "path");
  }
}

/** Rời phần học thử về màn đăng nhập, không tạo hay xóa tài khoản. */
function showLoginFromGuest() {
  stopSpeech();
  state.isGuest = false;
  state.user = null;
  state.quiz = null;
  document.body.classList.remove("authenticated", "guest-mode");
  document.querySelector(".main-nav").hidden = true;
  document.querySelector(".top-actions").hidden = true;
  $("#app-shell").hidden = true;
  $("#login-screen").hidden = false;
  applyUiLanguage();
}
/** Lấy quyền từ máy chủ một lượt; không tải 12 lộ trình chỉ để dựng cột trái. */
async function discoverGrades() {
  const candidates = CONTENT_GRADE_LEVELS.filter((grade) => SUPPORTED_GRADE_LEVELS.includes(grade));
  const response = await api("get_allowed_grade_levels");
  state.allowed = candidates.filter(grade => response.grade_levels.includes(grade));
  if (!state.allowed.length)
    throw new Error("Tài khoản chưa có quyền truy cập lớp học.");
}
function renderSidebar() {
  window.updateUtilityMenus?.();
  $("#grade-list").innerHTML = SUPPORTED_GRADE_LEVELS.map((grade) => {
    const available = state.allowed.includes(grade);
    if (!CONTENT_GRADE_LEVELS.includes(grade)) return "";
    const unavailableLabel = "Chưa mở";
    // Bộ icon hiện có dừng ở lớp 9; lớp 10–12 dùng biểu tượng chung để không
    // lặp số lớp trước nhãn văn bản và vẫn tự xuất hiện khi DB có nội dung.
    const gradeIcon = grade <= 9 ? icon(`grade_${grade}`) : icon("graduation_cap");
    return `<button data-grade="${grade}" ${available ? "" : "disabled"} class="${state.grade === grade ? "selected" : ""}"><span class="grade-icon">${gradeIcon}</span>Lớp ${grade}${available ? "" : `<small>${unavailableLabel}</small>`}</button>`;
  }).join("");
  $("#term-list")
    .querySelectorAll("button")
    .forEach((button) =>
      button.classList.toggle(
        "selected",
        Number(button.dataset.term) === state.term,
      ),
    );
  if (state.catalogGrade === state.grade) renderAdvancedNav();
  else {
    $("#advanced-nav").innerHTML = "";
    void loadCatalog(state.grade).catch((error) =>
      console.warn("Catalog:", error.message),
    );
  }
  applyUiLanguage();
}
function renderAdvancedNav() {
  if (state.catalogGrade !== state.grade) return;
  const grade = state.grade;
  const count = (ids) =>
    state.tests.filter(
      (test) =>
        ids.includes(test.category_id) &&
        test.status === "published" &&
        test.student_ready !== false &&
        Number(test.question_count) > 0,
    ).length;
  const entries =
    grade === 1
      ? [
          {
            group: "violympic",
            name: "Thử thách Violympic",
            ids: ["g1_violympic_challenge_internal"],
            icon: "trophy",
          },
          {
            group: "enrichment",
            name: "Luyện thêm SGK",
            ids: ["g1_enrichment_sgk_internal"],
            icon: "book",
          },
        ]
      : [
          {
            group: "advanced",
            name: "Toán tư duy",
            ids: ["chuyen_de", "singapore"],
            icon: "graduation_cap",
          },
          {
            group: "enrichment",
            name: "Luyện thêm SGK",
            ids: [`g${grade}_enrichment_sgk_internal`],
            icon: "book",
          },
        ];
  $("#advanced-nav").innerHTML =
    entries
      .map((entry) => {
        const total = count(entry.ids);
        return total
          ? `<button data-side-catalog="${entry.group}">${icon(entry.icon)}<span><strong><span class="advanced-name">${entry.name}</span><span class="advanced-grade"> · Lớp ${grade}</span></strong><small>${total} đề</small></span></button>`
          : "";
      })
      .join("") +
    ([4, 5].includes(grade)
      ? `<button data-transfer="6">${icon("graduation_cap")}<span><strong>Đề thi vào lớp 6 CLC</strong></span></button>`
      : "");
  document.querySelector(".advanced-heading").hidden =
    !$("#advanced-nav").children.length;
  applyUiLanguage();
}
