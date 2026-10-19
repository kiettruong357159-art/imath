/**
 * lam-bai-chuan-bi.js — Mở đề, tạo state bài làm, luồng Singapore, ôn lại và bộ dựng nội dung cơ bản.
 * Dùng: core.js, lo-trinh.js, luyen-them.js.
 * API gọi: get_questions, get_singapore_parallel_sample, save_singapore_parallel_sample_answer.
 * Quy tắc nghiệp vụ: đề kỳ một lượt; khóa tuần và quyền câu hỏi luôn kiểm phía máy chủ.
 */
"use strict";

/** Kiểm tra khóa, tải câu và tạo state mới cho một lượt làm đề. */
async function startTestById(testId, origin = state.page) {
  const test =
    state.path?.weeks
      .flatMap((week) =>
        week.tests.map((item) => ({
          ...item,
          week_no: Number(item.week_no) || Number(week.week_no),
        })),
      )
      .find((item) => item.id === testId) ||
    state.tests.find((item) => item.id === testId);
  if (!test) return;
  if (test.locked) {
    alert(test.lock_message || lockMessage(test.required_week));
    return;
  }
  state.returnPage = origin;
  if (test.id === "g1_singapore_parallel_sample_01")
    return startSingaporeSample(test);
  try {
    const result = await api("get_questions", {
      test_id: testId,
      grade_level: Number(test.grade_level || state.grade),
    });
    if (!result.questions?.length)
      throw new Error("Đề này chưa có câu hỏi sẵn sàng.");
    const questionTopics = window.IMATH_EXAM_TOPIC_CODES?.[testId] || [];
    const questions = result.questions.map((question, index) => ({
      ...question,
      topic_code:
        question.topic_code ||
        question.chuyen_muc ||
        questionTopics[Number(question.test_num || index + 1) - 1] ||
        null,
    }));
    state.quiz = {
      test,
      questions,
      index: 0,
      choices: Array(result.questions.length).fill(null),
      results: Array(result.questions.length).fill(null),
      attemptIds: [],
      confidences: [],
      questionTimers: Array.from({ length: result.questions.length }, () => ({
        elapsedMs: 0,
        startedAt: null,
      })),
      hints: Array.from({ length: result.questions.length }, () => []),
      hintTotals: [],
      hintUnavailable: [],
      hintBusy: false,
      hintError: "",
      solutionReveal: [],
      kind: test.test_family === "exam" ? "exam" : "test",
      examId:
        { gk1: "mid1", ck1: "end1", gk2: "mid2", ck2: "end2" }[
          test.id.match(/_(gk1|ck1|gk2|ck2)_/)?.[1]
        ] || null,
    };
    termExamAccept(state.quiz, result.exam_clock);
    if (result.exam_clock?.result) {
      return termExamRenderResult(result.exam_clock.result);
    }
    renderQuiz();
  } catch (error) {
    alert(error.message);
  }
}
/** Luồng đề mẫu Singapore tách riêng vì máy chủ quản lý attempt và từng vị trí câu. */
async function startSingaporeSample(test, restart = false) {
  try {
    const result = await api("get_singapore_parallel_sample", { restart });
    const questions = result.questions || [];
    if (
      !result.attempt?.id ||
      questions.length !== 20 ||
      questions.some(
        (q, index) =>
          Number(q.position) !== index + 1 ||
          !Array.isArray(q.options) ||
          q.options.length !== 4 ||
          !q.visual_svg_data_uri?.startsWith("data:image/svg+xml;base64,"),
      )
    ) {
      throw new Error("Đề mẫu chưa sẵn sàng cho học sinh.");
    }
    state.singapore = {
      test,
      attemptId: result.attempt.id,
      questions,
      answers: result.selected_answers || {},
      status: result.attempt.status,
      saving: false,
    };
    renderSingaporeSample();
  } catch (error) {
    alert(error.message);
  }
}
function renderSingaporeSample() {
  const sample = state.singapore;
  if (!sample) return;
  setNav("quiz");
  const index = sample.questions.findIndex(
    (q) =>
      !Object.prototype.hasOwnProperty.call(sample.answers, String(q.position)),
  );
  if (sample.status === "completed" || index < 0) {
    $("#content").innerHTML =
      `<section class="result-panel"><p class="eyebrow">ĐỀ MẪU SINGAPORE</p><h1 class="page-title">Đã hoàn thành 20/20 câu</h1><p class="page-sub">Em đã làm xong đề mẫu. Đề này không trả điểm qua API lộ trình.</p><div class="result-actions"><button class="primary" data-action="singapore-restart">Làm lại</button><button class="outline" data-action="singapore-return">Quay về chuyên mục</button></div></section>`;
    return;
  }
  const q = sample.questions[index];
  $("#content").innerHTML =
    `<section class="quiz-panel singapore-panel"><div class="quiz-top"><div class="quiz-context-heading">${window.IMATH_QUIZ_CONTEXT.html({test:sample.test,question:q,lang:state.lang,category:state.categories?.find(category=>category.id===sample.test.category_id)})}<strong>Câu ${index + 1}/20</strong></div><button class="outline" data-action="singapore-return">Thoát</button></div><div class="progress"><span style="width:${(index + 1) * 5}%"></span></div><div class="question-text">${richText(q.question)}</div><div class="question-media"><img src="${escapeHtml(q.visual_svg_data_uri)}" alt="Hình minh họa câu ${index + 1}"></div><div class="options">${q.options.map((option, optionIndex) => `<button class="option" data-singapore-choice="${optionIndex}"><span class="option-letter">${"ABCDEF"[optionIndex]}</span><span>${escapeHtml(option)}</span></button>`).join("")}</div><p id="quiz-error" class="error" role="alert"></p></section>`;
  window.IMATH_QUIZ_LAYOUT.mount($("#content .quiz-panel"));
  renderMath();
}
async function saveSingaporeChoice(index) {
  const sample = state.singapore;
  if (!sample || sample.saving) return;
  const question = sample.questions.find(
    (q) =>
      !Object.prototype.hasOwnProperty.call(sample.answers, String(q.position)),
  );
  if (!question) return;
  sample.saving = true;
  document.querySelectorAll("[data-singapore-choice]").forEach((button) => {
    button.disabled = true;
    button.classList.toggle(
      "selected",
      Number(button.dataset.singaporeChoice) === index,
    );
  });
  try {
    const selectedAnswer = String(question.options[index]);
    const result = await api("save_singapore_parallel_sample_answer", {
      attempt_id: sample.attemptId,
      position: question.position,
      selected_answer: selectedAnswer,
    });
    sample.answers[String(question.position)] = selectedAnswer;
    if (result.completed) sample.status = "completed";
    sample.saving = false;
    renderSingaporeSample();
  } catch (error) {
    sample.saving = false;
    document.querySelectorAll("[data-singapore-choice]").forEach((button) => {
      button.disabled = false;
      button.classList.remove("selected");
    });
    showError("#quiz-error", error);
  }
}
function startReview(questionId) {
  const question = state.reviewQuestions?.find(
    (item) => item.id === questionId,
  );
  if (!question) return;
  state.returnPage = "report";
  state.quiz = {
    test: { id: null, name: "Ôn đúng lúc" },
    questions: [question],
    index: 0,
    choices: [null],
    results: [null],
    attemptIds: [],
    confidences: [],
    questionTimers: [{ elapsedMs: 0, startedAt: null }],
    hints: [[]],
    hintTotals: [],
    hintUnavailable: [],
    hintBusy: false,
    hintError: "",
    solutionReveal: [],
    kind: "review",
  };
  renderQuiz();
}
function mediaHtml(q) {
  return window.QuestionMediaRenderer?.render(q) || "";
}
function explanationSteps(value) {
  const lang = state.lang;
  return window.IMATH_SOLUTION_VIEW.render({ explanation:value, lang, helpEnabled:false });
}
