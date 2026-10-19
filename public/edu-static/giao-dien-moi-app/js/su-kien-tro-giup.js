/**
 * su-kien-tro-giup.js — Xử lý thao tác trong khung “Em vẫn chưa hiểu”, câu dễ hơn và phản hồi đã hiểu.
 *
 * Dùng: core.js, loi-giai-goi-y.js, lam-bai.js.
 *
 * API gọi: get_easier_question, record_question_help, submit_answer.
 *
 * Quy tắc nghiệp vụ: tối đa ba câu dễ hơn trong một lượt; mọi lượt và quyền câu do máy chủ kiểm.
 */
"use strict";

/** Xử lý action của khung trợ giúp; trả true khi sự kiện đã thuộc khung này. */
async function handleHelpClick(event, action) {
  if (action === "not-understood") {
    const quiz = state.quiz,
      index = quiz.index,
      question = quiz.questions[index];
    const help = ((quiz.helpPanels ||= [])[index] ||= {
      open: false,
      reason: null,
      eventId: null,
      hintShown: 0,
      diagramShown: false,
      stepNo: null,
      easierChoice: null,
      easierResult: null,
      easierCompletedIds: [],
    });
    help.open = true;
    help.error = "";
    renderQuiz();
    $("#content .owl-help")?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
    if (help.easierQuestion === undefined && !state.isGuest) {
      try {
        const response = await api("get_easier_question", {
          username: state.user.username,
          question_id: question.id,
          exclude_ids: help.easierCompletedIds || [],
        });
        help.easierQuestion = response.question || null;
      } catch (error) {
        help.easierQuestion = null;
        help.error = error.message;
      }
      if (state.quiz === quiz && quiz.index === index) renderQuiz();
    }
    return true;
  }
  if (action === "help-close") {
    const quiz = state.quiz, help = quiz.helpPanels?.[quiz.index];
    if (help) { help.open = false; help.stepNo = null; help.reason = null; }
    renderQuiz();
    if (help?.eventId && !state.isGuest) {
      try { await api("record_question_help", {username:state.user.username,
        question_id:quiz.questions[quiz.index].id,help_event_id:help.eventId,understood:true}); }
      catch (_) { /* Đóng được ngay; lỗi nhật ký không chặn đọc lời giải. */ }
    }
    return true;
  }
  if (action === "help-reason") {
    const quiz = state.quiz,
      index = quiz.index,
      help = quiz.helpPanels?.[index],
      reason = event.target.closest("[data-help-reason]")?.dataset.helpReason;
    if (!help || !reason) return true;
    help.reason = reason;
    help.stepNo = null;
    help.hintShown = 0;
    help.diagramShown = false;
    help.showEasier = false;
    help.understood = null;
    help.error = "";
    renderQuiz();
    if (state.isGuest) return true;
    try {
      const saved = await api("record_question_help", {
        username: state.user.username,
        question_id: quiz.questions[index].id,
        reason,
        selected_option: String(quiz.results[index]?.selected || ""),
      });
      help.eventId = saved.help_event_id;
    } catch (error) {
      help.error = error.message;
    }
    if (state.quiz === quiz && quiz.index === index) renderQuiz();
    return true;
  }
  if (action === "help-next-hint") {
    const help = state.quiz.helpPanels?.[state.quiz.index],
      solution = state.quiz.results[state.quiz.index]?.solution || {},
      hints = Array.isArray(solution.goi_y)
        ? solution.goi_y.filter((item) => solutionText(item).trim())
        : [];
    if (!help) return true;
    if (help.hintShown < hints.length) help.hintShown++;
    else help.diagramShown = true;
    renderQuiz();
    return true;
  }
  if (action === "help-step") {
    const quiz = state.quiz,
      help = quiz.helpPanels?.[quiz.index];
    if (!help) return true;
    help.stepNo =
      Number(event.target.closest("[data-step-no]")?.dataset.stepNo) || 1;
    help.stepLang = event.target.closest("[data-step-language]")?.dataset.stepLanguage;
    renderQuiz();
    $("#content .sv-selected")?.scrollIntoView({block:"nearest"});
    if (help.eventId) {
      try {
        await api("record_question_help", {
          username: state.user.username,
          question_id: quiz.questions[quiz.index].id,
          help_event_id: help.eventId,
          step_no: help.stepNo,
        });
      } catch (error) {
        help.error = error.message;
      }
    }
    if (state.quiz === quiz) renderQuiz();
    return true;
  }
  if (action === "help-easier-open") {
    const quiz = state.quiz,
      help = quiz.helpPanels?.[quiz.index];
    if (!help?.easierQuestion) return true;
    help.showEasier = true;
    help.easierStartedAt = performance.now();
    help.error = "";
    if (help.eventId) {
      try {
        await api("record_question_help", {
          username: state.user.username,
          question_id: quiz.questions[quiz.index].id,
          help_event_id: help.eventId,
          easier_question_id: help.easierQuestion.id,
        });
      } catch (error) {
        help.error = error.message;
      }
    }
    renderQuiz();
    return true;
  }
  if (action === "help-easier-back") {
    const help = state.quiz.helpPanels?.[state.quiz.index];
    if (help) help.showEasier = false;
    renderQuiz();
    return true;
  }
  if (action === "help-easier-next") {
    const quiz = state.quiz,
      index = quiz.index,
      help = quiz.helpPanels?.[index];
    if (
      !help?.easierResult ||
      help.busy ||
      (help.easierCompletedIds || []).length >= 3
    )
      return true;
    help.busy = true;
    help.error = "";
    try {
      const response = await api("get_easier_question", {
        username: state.user.username,
        question_id: quiz.questions[index].id,
        exclude_ids: help.easierCompletedIds || [],
      });
      if (response.question) {
        help.easierQuestion = response.question;
        help.easierChoice = null;
        help.easierResult = null;
        help.easierAttemptId = null;
        help.easierStartedAt = performance.now();
      } else help.noMoreEasier = true;
    } catch (error) {
      help.error = error.message;
    }
    help.busy = false;
    if (state.quiz === quiz && quiz.index === index) renderQuiz();
    return true;
  }
  if (action === "help-easier-choice") {
    const help = state.quiz.helpPanels?.[state.quiz.index];
    if (help && !help.easierResult)
      help.easierChoice = Number(
        event.target.closest("[data-easier-choice]")?.dataset.easierChoice,
      );
    renderQuiz();
    return true;
  }
  if (action === "help-easier-check") {
    const quiz = state.quiz,
      index = quiz.index,
      help = quiz.helpPanels?.[index],
      easier = help?.easierQuestion;
    if (!easier || !owlAnswerReady(easier, help) || help.busy) return true;
    help.busy = true;
    help.error = "";
    try {
      const response = await api("submit_answer", {
        username: state.user.username,
        question_id: easier.id,
        ...owlAnswerPayload(easier, help),
        attempt_number: 1,
        client_attempt_id:
          (help.easierAttemptId ||= `owl-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`),
        response_time_ms: Math.max(
          1,
          Math.round(
            performance.now() - (help.easierStartedAt || performance.now()),
          ),
        ),
      });
      help.easierResult = response;
      help.easierCompletedIds ||= [];
      if (!help.easierCompletedIds.includes(easier.id))
        help.easierCompletedIds.push(easier.id);
      if (help.eventId)
        await api("record_question_help", {
          username: state.user.username,
          question_id: quiz.questions[index].id,
          help_event_id: help.eventId,
          easier_question_id: easier.id,
          easier_attempt_id: help.easierAttemptId,
          easier_correct: !!response.correct,
        });
    } catch (error) {
      help.error = error.message;
    }
    help.busy = false;
    if (state.quiz === quiz && quiz.index === index) renderQuiz();
    return true;
  }
  if (action === "help-vote") {
    const quiz = state.quiz,
      index = quiz.index,
      help = quiz.helpPanels?.[index];
    if (!help?.eventId) return true;
    const understood =
      event.target.closest("[data-understood]")?.dataset.understood === "1";
    try {
      await api("record_question_help", {
        username: state.user.username,
        question_id: quiz.questions[index].id,
        help_event_id: help.eventId,
        understood,
      });
      help.understood = understood;
      help.error = "";
    } catch (error) {
      help.error = error.message;
    }
    if (state.quiz === quiz && quiz.index === index) renderQuiz();
    return true;
  }
  return false;
}
