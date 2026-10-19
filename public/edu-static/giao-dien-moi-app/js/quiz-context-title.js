/** Tiêu đề lượt làm: chỉ đọc đề/câu hỏi đang làm, không dùng lớp đang chọn ở menu. */
"use strict";
window.IMATH_QUIZ_CONTEXT = (() => {
  const text = value => String(value ?? "").trim();
  const safe = value => text(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function title({test = {}, question = {}, lang = "vi", category, name, kind} = {}) {
    const en = lang === "en", choose = (vi,english) => en ? english : vi;
    const translate = value => en ? window.IMATH_I18N?.t(text(value),"en") || text(value) : text(value);
    const exam = text(test.exam_code || test.entrance_exam_code);
    const grade = [test.grade_level, question.grade_level, exam.match(/^hsg_(\d+)$/)?.[1],
      text(test.id).match(/^g(\d{1,2})(?=[a-z_])/i)?.[1]].map(Number).find(n=>Number.isInteger(n)&&n>=1&&n<=12);
    const prefix = grade ? `${choose("Lớp","Grade")} ${grade} · ` : "";
    let label = translate(name || (en ? test.name_en || test.name : test.name_vi || test.name));
    label = label.replace(/^(?:Lớp|Grade)\s+\d+\s*[·:–—-]\s*/iu,"");
    if (/^vao_(6|10)$/.test(exam)) {
      const target = exam.slice(4), level = text(en ? test.level_name_en || test.level_name_vi : test.level_name_vi);
      const number = label.match(/(?:Đề|Paper|Exam|Test)\s*(\d+)/iu)?.[1];
      const paper = number ? `${choose("Đề","Paper")} ${Number(number)}` : label;
      return `${choose("Thi vào lớp","Grade")} ${target}${en ? " entrance" : ""} · ${[level,paper].filter(Boolean).join(" – ")}`;
    }
    if (/^hsg_\d+$/.test(exam)) return `${prefix}${choose("Học sinh giỏi","Maths Olympiad")} – ${label}`;
    if (kind === "timo" || test.test_family === "timo") {
      label = label.replace(/^(?:lớp|grade)\s+\d+\s*[·:–—-]?\s*/iu,"")
        .replace(/^(?:Toán\s+)?TIMO(?:\s+(?:maths|mathematics))?(?:\s+(?:lớp|grade)\s*\d+)?\s*[·:–—-]?\s*/iu,"");
      return `${prefix}TIMO – ${label}`;
    }
    const week = Number(test.week_no || text(test.id).match(/_w(\d+)/)?.[1]);
    if ((test.test_family === "weekly_study" || /^g\d+wk_/.test(text(test.id))) && week) {
      const role = test.role || test.test_role || text(test.id).match(/_(basic|practice|gentle)_/)?.[1];
      const roles = { basic:choose("Cơ bản","Basic"), practice:choose("Luyện chắc","Practice"), gentle:choose("Nâng cao nhẹ","Gentle challenge") };
      return `${prefix}${choose("Tuần","Week")} ${week} – ${roles[role] || label}`;
    }
    const period = text(test.id).match(/_(gk1|ck1|gk2|ck2)(?:_|$)/)?.[1];
    if (test.test_family === "exam" && period) {
      const periods = { gk1:choose("Đề giữa kì 1","Mid-term 1"), ck1:choose("Đề cuối kì 1","End-of-term 1"),
        gk2:choose("Đề giữa kì 2","Mid-term 2"), ck2:choose("Đề cuối kì 2","End-of-term 2") };
      const number = text(test.id).match(/_de(\d+)/)?.[1];
      return `${prefix}${periods[period]}${number ? ` – ${choose("Đề","Paper")} ${Number(number)}` : ` – ${label}`}`;
    }
    const topic = translate(category?.name || test.category_name).replace(/\s*(?:[·–—-]\s*)?(?:Lớp|Grade)\s+\d+$/iu,"");
    return prefix + (topic && !label.toLocaleLowerCase().startsWith(topic.toLocaleLowerCase()) ? `${topic} – ${label}` : label);
  }
  /** badgeHtml là HTML do sourceBadge của giao diện dựng, không phải tên đề từ API. */
  function html(options, tag = "p", badgeHtml = "") {
    const label = safe(title(options)), element = tag === "h1" ? "h1" : "p";
    return `<${element} class="${element === "p" ? "eyebrow " : ""}quiz-context-title" data-no-ui-translate title="${label}">${label}${badgeHtml ? ` ${badgeHtml}` : ""}</${element}>`;
  }
  return { title, html };
})();
