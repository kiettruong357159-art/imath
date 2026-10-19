/**
 * app.js — Điểm nối tạm cho phần mã chưa tách; được thu nhỏ dần trong đợt tổ chức lại giao diện.
 * Dùng: js/core.js và các file tính năng đã nạp trước trong index.html.
 * Quy tắc nghiệp vụ: giữ nguyên hành vi theo docs/chuan-lap-trinh.md.
 */
"use strict";

/** Điều phối click của nội dung động tới đúng tính năng mà không gắn lại listener sau mỗi lần render. */
async function handleContentClick(event) {
  if (await handleTwinHelpClick(event)) return;
  if (await handleSpecialAnswerClick(event)) return;
  if (await handleWrongClick(event)) return;
  const speech = event.target.closest("[data-speech-button]");
  if (speech) {
    window.IMATH_SPEECH?.toggle(speech);
    return;
  }
  const favoriteToggle = event.target.closest("[data-favorite-toggle]");
  if (favoriteToggle) {
    await toggleFavorite(favoriteToggle.dataset.favoriteToggle);
    return;
  }
  const favoriteReason = event.target.closest("[data-favorite-reason]");
  if (favoriteReason) {
    await setFavoriteReason(
      favoriteReason.dataset.questionId,
      favoriteReason.dataset.favoriteReason,
    );
    return;
  }
  const favoriteClose = event.target.closest("[data-favorite-solution-close]");
  if (favoriteClose) {
    state.favoriteSolution = null;
    renderCurrentFavorites(false);
    return;
  }
  const favoriteView = event.target.closest("[data-favorite-view]");
  if (favoriteView) {
    const questionId = favoriteView.dataset.favoriteView;
    state.favoriteSolution = { id: questionId, loading: true };
    renderCurrentFavorites(false);
    try {
      const payload = await api("get_question_solution", {
        username: state.user.username,
        question_id: questionId,
      });
      state.favoriteSolution = { id: questionId, payload };
    } catch (error) {
      state.favoriteSolution = {
        id: questionId,
        error: error.message,
        code: error.code,
      };
    }
    if (state.page === "favorites" || (state.page === "account" && state.accountTab === "favorites")) {
      renderCurrentFavorites(false);
      document
        .querySelector(".favorite-solution")
        ?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    return;
  }
  const favoriteStart = event.target.closest("[data-favorite-start]");
  if (favoriteStart) {
    const question = state.favoriteItems.find(
      (item) => item.id === favoriteStart.dataset.favoriteStart && !item.locked,
    );
    if (question) startFavoriteQuiz([question], false);
    return;
  }
  const reviewWeek = event.target.closest("[data-review-week]");
  if (reviewWeek) {
    await openLearningWeek(
      Number(reviewWeek.dataset.reviewGrade),
      Number(reviewWeek.dataset.reviewWeek),
    );
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "guest-login") {
    showLoginFromGuest();
    return;
  }
  if (action === "guest-continue") {
    await navigate(state.returnPage || "path");
    return;
  }
  if (action === "typed-key") {
    const key =
      event.target.closest("[data-typed-key]")?.dataset.typedKey || "";
    const active = document.activeElement?.matches?.("[data-fill-answer]")
      ? document.activeElement
      : document.querySelector("[data-fill-answer]");
    if (!active || !key) return;
    const start = Number.isInteger(active.selectionStart)
      ? active.selectionStart
      : active.value.length;
    const end = Number.isInteger(active.selectionEnd)
      ? active.selectionEnd
      : start;
    active.value = `${active.value.slice(0, start)}${key}${active.value.slice(end)}`;
    active.focus();
    active.setSelectionRange(start + key.length, start + key.length);
    saveCurrentFill();
    return;
  }
  if (action === "path" || action === "practice") return navigate(action);
  if (action === "account-report") {
    state.accountTab = "report";
    state.competencyRange = "week";
    return navigate("account");
  }
  if (action === "singapore-return") return navigate(state.returnPage);
  if (action === "singapore-restart")
    return startSingaporeSample(state.singapore.test, true);
  if (
    action === "leave-quiz" &&
    confirm(
      "Thoát bài làm hiện tại? Câu đã kiểm tra được lưu, nhưng điểm đề chỉ lưu sau khi xem kết quả.",
    )
  )
    return entranceRemediationReturn() || navigate(state.returnPage);
  if (action === "return") return entranceRemediationReturn() || navigate(state.returnPage);
  if (action === "retry") {
    if (state.quiz.kind === "entrance-practice")
      return entrancePracticeStart(state.quiz.entranceType);
    if (state.quiz.kind === "review")
      return startReview(state.quiz.questions[0].id);
    if (
      state.quiz.kind === "favorite" ||
      state.quiz.kind === "favorite-practice"
    )
      return startFavoriteQuiz(
        state.quiz.questions,
        state.quiz.kind === "favorite-practice",
      );
    return startTestById(state.quiz.test.id, state.returnPage);
  }
  if (action === "previous") {
    stopSpeech();
    pauseQuestionTimer(state.quiz, state.quiz.index);
    saveCurrentFill();
    state.quiz.index -= 1;
    renderQuiz();
    return;
  }
  if (action === "check-answer") {
    await checkCurrentAnswer();
    return;
  }
  if (action === "get-hint") {
    await openNextHint();
    return;
  }
  if (action === "get-hint-diagram") {
    await openHintDiagram();
    return;
  }
  if (await handleHelpClick(event, action)) return;
  if (action === "continue-quiz") {
    const quiz = state.quiz;
    const next = quiz.results.findIndex(
      (result, index) => index > quiz.index && !result,
    );
    stopSpeech();
    pauseQuestionTimer(quiz, quiz.index);
    quiz.index = next >= 0 ? next : quiz.results.findIndex((result) => !result);
    renderQuiz();
    return;
  }
  if (action === "finish-quiz") {
    await submitQuiz();
    return;
  }
  if (action === "favorites-practice") {
    const available = state.favoriteItems.filter((item) => !item.locked);
    const shuffled = [...available]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    startFavoriteQuiz(shuffled, true);
    return;
  }
  if (action === "print-competency") {
    openCompetencyPrint();
    return;
  }
  const singaporeChoice = event.target.closest("[data-singapore-choice]");
  if (singaporeChoice)
    return saveSingaporeChoice(Number(singaporeChoice.dataset.singaporeChoice));
  const confidenceChoice = event.target.closest("[data-confidence]");
  if (confidenceChoice && !state.quiz.results[state.quiz.index]) {
    state.quiz.confidences[state.quiz.index] =
      confidenceChoice.dataset.confidence;
    renderQuiz();
    return;
  }
  const choice = event.target.closest("[data-choice]");
  if (choice) {
    if (state.quiz.results[state.quiz.index]) return;
    const index = state.quiz.index;
    state.quiz.choices[index] = Number(choice.dataset.choice);
    state.quiz.answerSelectedTimes ||= [];
    state.quiz.fastAnswerWarnings ||= [];
    if (state.quiz.answerSelectedTimes[index] == null) {
      const elapsed = currentQuestionElapsedMs(state.quiz, index);
      state.quiz.answerSelectedTimes[index] = elapsed;
      state.quiz.fastAnswerWarnings[index] = shouldWarnFastAnswer(state.quiz.questions[index], elapsed);
    }
    renderQuiz();
    return;
  }
  const jump = event.target.closest("[data-jump]");
  if (jump) {
    stopSpeech();
    pauseQuestionTimer(state.quiz, state.quiz.index);
    saveCurrentFill();
    state.quiz.index = Number(jump.dataset.jump);
    renderQuiz();
    return;
  }
  const test = event.target.closest("[data-test]");
  if (test) return startTestById(test.dataset.test, test.dataset.origin);
  if (event.target.closest("[data-visual-practice]"))
    return showVisualPractice();
  const singaporeTopic = event.target.closest("[data-singapore-topic]");
  const wordProblemType = event.target.closest("[data-word-problem-type]");
  if (wordProblemType) return showWordProblemType(wordProblemType.dataset.wordProblemType);
  if (singaporeTopic)
    return showSingaporeTopic(singaporeTopic.dataset.singaporeTopic);
  const practiceTopic = event.target.closest("[data-practice-topic]");
  if (practiceTopic) {
    const code = practiceTopic.dataset.practiceTopic;
    const grade = Number(practiceTopic.dataset.practiceGrade || state.grade);
    const found = findCompetencyPracticeTopic(code, grade);
    if (found) {
      state.grade = grade;
      state.term = Number(found.week) >= 19 ? 2 : 1;
      state.path = null;
      renderSidebar();
      state.returnPage = "practice";
      await navigate("practice");
      showTopicItem(found.groupId, found.index, false, true);
    }
    return;
  }
  const topicItem = event.target.closest("[data-topic-item]");
  if (topicItem)
    return showTopicItem(
      topicItem.dataset.topicItem,
      Number(topicItem.dataset.topicIndex),
      topicItem.dataset.fromGroup === "true",
    );
  if (event.target.closest("[data-topic-back]"))
    return state.practiceView?.fromGroup
      ? showTopicGroup(state.practiceView.groupId, state.currentWeek)
      : showPracticeOverview();
  const topic = event.target.closest("[data-topic-group]");
  if (topic) return showTopicGroup(topic.dataset.topicGroup, state.currentWeek);
  const exam = event.target.closest("[data-exam-period]");
  if (exam) return showExamPeriod(exam.dataset.examPeriod, state.currentWeek);
  if (event.target.closest("[data-practice-back]"))
    return showPracticeOverview();
  const category = event.target.closest("[data-category]");
  if (category) return showCatalogGroup(category.dataset.category);
  const catalogCategory = event.target.closest("[data-catalog-category]");
  if (catalogCategory)
    return showCatalogCategory(catalogCategory.dataset.catalogCategory);
  if (event.target.closest("[data-catalog-back]")) {
    state.practiceView = null;
    return showCatalogGroup(state.catalogView.group);
  }
  const competencyRange = event.target.closest("[data-competency-range]");
  if (competencyRange) {
    const range = competencyRange.dataset.competencyRange;
    if (state.page === "account" && state.accountTab === "parent" && state.parentReportChild)
      return renderParentCompetencyReport(state.parentReportChild, range);
    state.competencyRange = range;
    state.competencyGroup = null;
    if (range === "term1" || range === "term2") {
      state.term = range === "term2" ? 2 : 1;
      state.path = null;
      renderSidebar();
    }
    return renderReport();
  }
  const competencyGroup = event.target.closest("[data-competency-group]");
  if (competencyGroup) {
    state.competencyGroup = competencyGroup.dataset.competencyGroup;
    if (state.competencyReport) renderCompetencyBody(state.competencyReport);
    return;
  }
  const report = event.target.closest("[data-report]");
  if (report) {
    state.reportTab = report.dataset.report;
    state.competencyGroup = null;
    return renderReport();
  }
  const review = event.target.closest("[data-review]");
  if (review) return startReview(review.dataset.review);
  const week = event.target.closest("[data-toggle-week]");
  if (week) {
    const body = week.nextElementSibling;
    body.hidden = !body.hidden;
    week.setAttribute("aria-expanded", String(!body.hidden));
  }
}
/** Chép ô gõ đáp số vào state trước khi đổi câu hoặc nộp, kể cả bài có nhiều ô nhập. */
function saveCurrentFill() {
  if (!state.quiz || state.quiz.results[state.quiz.index]) return;
  const inputs = [...document.querySelectorAll("[data-fill-answer]")];
  if (!inputs.length) return;
  const values = inputs.map((input) => input.value.trim());
  state.quiz.choices[state.quiz.index] = values.every((value) => value === "")
    ? null
    : values.length === 1
      ? values[0]
      : values;
}
document.addEventListener("DOMContentLoaded", initialize);
