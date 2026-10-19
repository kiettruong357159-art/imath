/**
 * student-route.js — Đường dẫn công khai TIMO/Thi vào và lịch sử Back/Forward.
 * Dùng: core.navigate và khởi tạo phiên; route chỉ chọn màn/lớp/kỳ thi.
 * Quyền từng đề vẫn do API kiểm; tài nguyên dùng base của thư mục ứng dụng.
 */
"use strict";
window.IMATH_STUDENT_ROUTE = (() => {
  const parse = pathname => {
    const match = pathname.match(/^(.*\/)timo(?:\/lop-([1-5]))?\/?$/);
    if (match) return { base: match[1], page: "timo", grade: match[2] ? Number(match[2]) : null };
    const hsg = pathname.match(/^(.*\/)hsg\/lop-([1-9]|1[0-2])\/?$/);
    if (hsg) return { base: hsg[1], page: "entrance-fixed", exam: `hsg_${hsg[2]}`, grade: Number(hsg[2]) };
    const entrance = pathname.match(/^(.*\/)thi-vao-(6|10)\/?$/);
    return entrance ? { base: entrance[1], page: "entrance-fixed", exam: `vao_${entrance[2]}`, grade: null } : null;
  };
  const initial = parse(location.pathname);
  const base = initial?.base || new URL(".", document.baseURI).pathname;
  // Giữ tài nguyên/API ở thư mục ứng dụng khi pushState đổi đường dẫn công khai.
  if (!document.querySelector("base")) {
    const element = document.createElement("base");
    element.href = base; document.head.append(element);
  }
  let engaged = Boolean(initial), restoring = false;
  function entry(isGuest, selectedGrade) {
    if (!initial) return null;
    if (initial.page === "timo") return { page: "timo", grade: initial.grade || (isGuest ? 2 : selectedGrade) };
    if (initial.grade) return { page: initial.page, exam: initial.exam, grade: initial.grade };
    const grades = initial.exam === "vao_6" ? [4, 5] : [8, 9];
    return { page: initial.page, exam: initial.exam, grade: grades.includes(selectedGrade) ? selectedGrade : grades[1] };
  }
  function commit(page, grade, previousPage) {
    if (restoring) return;
    if (["timo", "entrance-fixed"].includes(page) && !engaged) {
      history.replaceState({ imathStudent: true, page: previousPage, grade }, "", location.href);
      engaged = true;
    }
    if (!engaged || !["path", "practice", "timo", "entrance", "entrance-fixed", "account", "report", "favorites"].includes(page)) return;
    if (page === "timo" && (grade < 1 || grade > 5)) return;
    const preview = new URLSearchParams(location.search).get("preview") === "1" ? "?preview=1" : "";
    const url = page === "timo" ? `${base}timo/lop-${grade}` : page === "entrance-fixed"
      ? /^hsg_/.test(state.entranceExam) ? `${base}hsg/lop-${state.entranceExam.split("_")[1]}${preview}` : `${base}thi-vao-${state.entranceExam === "vao_10" ? "10" : "6"}${preview}` : `${base}#${page}`;
    const value = { imathStudent: true, page, grade, entranceExam: state.entranceExam };
    if (page === initial?.page && !history.state?.imathStudent && parse(location.pathname)) {
      history.replaceState(value, "", location.href);
    } else if (location.pathname + location.hash !== url || history.state?.grade !== grade) {
      history.pushState(value, "", url);
    }
  }
  async function restore() {
    if (!engaged || !state.user) return;
    const route = parse(location.pathname);
    const saved = history.state?.imathStudent ? history.state : null;
    const page = route?.page || saved?.page || (location.hash === "#practice" ? "practice" : "path");
    const grade = route?.grade || saved?.grade || (state.isGuest && route ? 2 : state.grade);
    restoring = true;
    try {
      state.grade = grade;
      state.entranceExam = route?.exam || saved?.entranceExam || state.entranceExam;
      state.path = null; state.tests = []; state.categories = []; state.catalogGrade = null;
      state.practiceView = null; state.catalogView = null;
      catalogCache.clear();
      renderSidebar();
      await navigate(page);
    } finally { restoring = false; }
  }
  window.addEventListener("popstate", () => restore().catch(error => showError("#content", error)));
  return Object.freeze({ parse, entry, commit });
})();
