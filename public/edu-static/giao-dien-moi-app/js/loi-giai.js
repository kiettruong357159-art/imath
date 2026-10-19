/**
 * loi-giai.js — Adapter payload sang solution-view.js, SVG an toàn và dòng kiến thức.
 * Dùng: core.js, solution-view.js, chuyen-muc.js, speech.js.
 * API: get_question_solution khi đổi ngôn ngữ lời giải đã được phép xem; mở lại tuần học.
 * Không dựng một bộ bố cục lời giải khác; không đổi chấm điểm hoặc dữ liệu nguồn.
 */
"use strict";

function solutionText(value) {
  return Array.isArray(value)
    ? value.map((item) => String(item ?? "")).join("\n")
    : String(value ?? "");
}
/** Chỉ giữ SVG nội tuyến an toàn trước khi đưa sơ đồ lời giải vào DOM. */
function safeSolutionSvg(value) {
  const source = String(value || "").trim();
  if (!/^<svg[\s>]/i.test(source)) return "";
  try {
    const parsed = new DOMParser().parseFromString(source, "image/svg+xml"),
      svg = parsed.documentElement;
    if (svg.localName !== "svg" || parsed.querySelector("parsererror"))
      return "";
    svg
      .querySelectorAll("script,foreignObject,iframe,object,embed")
      .forEach((node) => node.remove());
    svg.querySelectorAll("*").forEach((node) =>
      [...node.attributes].forEach((attr) => {
        const name = attr.name.toLowerCase(),
          value = attr.value.trim();
        if (
          name.startsWith("on") ||
          ((name === "href" || name.endsWith(":href")) &&
            value &&
            !value.startsWith("#")) ||
          (name === "style" && /url\s*\(/i.test(value))
        )
          node.removeAttribute(attr.name);
      }),
    );
    return new XMLSerializer().serializeToString(svg);
  } catch (_) {
    return "";
  }
}
function localizedSolutionHtml(solution, key) {
  const vi = solutionText(solution[`${key}_vi`] ?? solution[key]).trim();
  const en = solutionText(solution[`${key}_en`] ?? solution[key]).trim();
  return state.lang === "bi"
    ? window.IMATH_I18N.bilingualHtml(en, vi)
    : richText(state.lang === "en" ? en : vi);
}
/** Cửa chung cho payload lời giải; không đưa dữ liệu chưa được API trả vào màn hình. */
function sharedSolutionHtml(result, options = {}) {
  const solution = result.solution || {}, lang = options.lang || state.lang;
  const diagram = safeSolutionSvg(solution.so_do);
  const rawWrong = result.why_wrong || result.vi_sao_sai || solution.vi_sao_sai;
  const wrong = typeof rawWrong === "string" || Array.isArray(rawWrong) ? solutionText(rawWrong) : "";
  return window.IMATH_SOLUTION_VIEW.render({
    lang, solution,
    explanationVi: result.explanation_vi ?? solution.explanation_vi ?? (lang !== "en" ? result.explanation || solution.explanation : ""),
    explanationEn: result.explanation_en ?? solution.explanation_en ?? (lang !== "vi" ? result.explanation || solution.explanation : ""),
    wrongVi: result.why_wrong_vi ?? wrong,
    wrongEn: result.why_wrong_en ?? solution.en_vi_sao_sai ?? wrong,
    speechHtml: speechButton(result.explanation || solution.explanation),
    diagramHtml: diagram ? `<div class="solution-diagram">${diagram}</div>` : "",
    ...options,
  });
}
/** Đổi ngôn ngữ sau nộp: tải lại chỉ lời giải đang xem, không nộp/chấm lại. */
async function refreshVisibleSolution(quiz, index, lang) {
  const result = quiz.results[index], question = quiz.questions[index];
  const payload = await api("get_question_solution", {question_id:question.id,lang});
  if (state.quiz !== quiz || quiz.results[index] !== result) return;
  const wrong = payload.wrong_reasons?.find(row => row.letter === result.solutionOptionKey);
  Object.assign(result, {
    solution:payload.solution, explanation:payload.explanation,
    explanation_vi:payload.explanation_vi, explanation_en:payload.explanation_en,
    correct_answer:payload.correct_answer,
    why_wrong:wrong?.rationale || "", why_wrong_vi:wrong?.rationale_vi,
    why_wrong_en:wrong?.rationale_en, solutionLanguage:lang,
  });
  const help = quiz.helpPanels?.[index];
  if (help) { help.stepNo = null; help.stepLang = null; }
  if (state.lang === lang && quiz.index === index) renderQuiz();
}
/** Dựng dòng kiến thức, tuần học và link lý thuyết; bài lời văn không gắn tuần ôn. */
function knowledgeContextHtml(question, result, quiz, includeReview = true) {
  const code = String(
    result?.chuyen_muc || question?.chuyen_muc || question?.topic_code || "",
  ).trim();
  if (!code) return "";
  const grade = Number(
    quiz?.test?.grade_level ?? question?.grade_level ?? state.grade,
  );
  const topics = (window.IMATH_GRADE_CATALOGS?.[grade]?.topics || []).flatMap(
    (group) => group.items,
  );
  const topic = topics.find((item) => item.code === code);
  if (!topic) return "";
  const isWordProblem = /_giai_toan_co_loi_van$/.test(code);
  const weeklyWeek = Number(quiz?.test?.week_no) || 0;
  const week = isWordProblem
    ? 0
    : Number(weeklyWeek || (topic.taughtWeek ?? topic.week));
  const canReview =
    week > 0 && grade === state.grade && week <= state.openUntil;
  const weekText =
    week > 0
      ? `<span class="knowledge-separator" aria-hidden="true">·</span><span>${uiText("Học ở Tuần")} ${week}</span>`
      : "";
  const reviewButton =
    includeReview && canReview
      ? `<span class="knowledge-separator" aria-hidden="true">·</span><button type="button" class="knowledge-action knowledge-review" data-review-week="${week}" data-review-grade="${grade}">${uiText("Ôn lại tuần này →")}</button>`
      : "";
  const theoryLink = topic.theory_url
    ? `<span class="knowledge-separator" aria-hidden="true">·</span><a class="knowledge-action knowledge-theory" href="${escapeHtml(topic.theory_url)}" target="_blank" rel="noopener">${uiText("Xem lý thuyết ↗")}</a>`
    : "";
  const fingerMathBaseUrl = window.IMATH_FINGER_MATH_TOPIC_URLS?.[code] || "";
  const fingerMathUrl = fingerMathUrlForLanguage(fingerMathBaseUrl);
  const fingerMathLink = fingerMathUrl
    ? `<span class="knowledge-separator" aria-hidden="true">·</span><a class="knowledge-action knowledge-finger-math" href="${escapeHtml(fingerMathUrl)}" target="_blank" rel="noopener">${uiText("✋ Thử tính bằng ngón tay")}</a>`
    : "";
  return `<div class="knowledge-context"><span aria-hidden="true">📚</span><strong>${uiText("Kiến thức:")}</strong><span class="knowledge-topic">${topicNameHtml(topic)}</span>${weekText}${reviewButton}${theoryLink}${fingerMathLink}</div>`;
}
async function openLearningWeek(grade, week) {
  const targetGrade = Number(grade),
    targetWeek = Number(week);
  if (
    !state.allowed.includes(targetGrade) ||
    targetWeek < 1 ||
    targetWeek > 35 ||
    targetWeek > state.openUntil
  )
    return;
  pauseQuestionTimer(state.quiz, state.quiz?.index);
  state.grade = targetGrade;
  state.term = targetWeek <= 18 ? 1 : 2;
  state.path = null;
  state.focusWeek = targetWeek;
  state.catalogGrade = null;
  state.tests = [];
  state.categories = [];
  state.practiceView = null;
  state.catalogView = null;
  renderSidebar();
  await navigate("path");
}
