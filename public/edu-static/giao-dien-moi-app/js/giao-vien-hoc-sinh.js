/**
 * giao-vien-hoc-sinh.js — Bài cô/thầy giao trong Tài khoản và adapter của màn làm bài sẵn có.
 * Dùng core/lam-bai/lam-bai-chuan-bi.js; chỉ thêm transport/lượt làm, không dựng màn câu hỏi mới.
 * API gv_student_* luôn kiểm phiên học sinh, consent và một lượt kiểm tra trên server.
 * Quy tắc: kế hoạch mục K, đáp án chỉ hiện sau giờ đóng của bài kiểm tra.
 */
"use strict";

let teacherJoinLinkOwner = "";

/** Thay đúng text node chứa marker, giữ KaTeX/HTML của renderer chung ở mọi lần chuyển câu. */
function teacherHydratePrivateImages() {
  if (state.quiz?.kind !== 'teacher') return;
  const quiz=state.quiz;
  const panels=document.querySelectorAll('.teacher-quiz, .result-row');
  panels.forEach((panel,index)=> {
    const i=panel.classList.contains('teacher-quiz') ? quiz.index : index;
    const images={...quiz.questions[i]?.private_images,...quiz.results[i]?.private_images};
    const walker=document.createTreeWalker(panel,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) if(/\[Image:/.test(walker.currentNode.textContent)) nodes.push(walker.currentNode);
    nodes.forEach(node=> {
      // Phương án của màn gốc là button: vẫn cần ảnh; bỏ qua nút nghe/điều hướng và KaTeX.
      if(node.parentElement.closest('.katex, svg, button:not(.option)')) return;
      const parts=node.textContent.split(/(\[Image:[^\]\r\n]+\])/gi);
      if(!parts.some(part=>/^[a-f0-9]{32}$/.test(String(images[part.match(/^\[Image:([^\]]+)\]$/i)?.[1]])))) return;
      const fragment=document.createDocumentFragment();
      parts.forEach(part=> {
        const name=part.match(/^\[Image:([^\]]+)\]$/i)?.[1]; const id=images[name];
        if(!/^[a-f0-9]{32}$/.test(String(id))) fragment.append(document.createTextNode(part));
        else { const image=document.createElement('img'); image.src=`backend/teacher_image.php?id=${id}`;
          image.alt='Hình minh họa'; image.className='teacher-private-image'; fragment.append(image); }
      }); node.replaceWith(fragment);
    });
  });
}
/** Quan sát DOM do màn làm bài hiện có dựng lại; không thay hàm hay sửa file chung. */
document.addEventListener('DOMContentLoaded',()=> {
  const content=document.querySelector('#content');
  if(content) new MutationObserver(teacherHydratePrivateImages).observe(content,{childList:true,subtree:true});
});

/** Lời nhắc chỉ do API trả khi chưa nộp và bài chưa đóng; không lưu cờ trong trình duyệt. */
function teacherReminderHtml(item) {
  if (!item.reminder_at) return "";
  const deadline = imathTeacherDate(item.closes_at);
  return `<p class="teacher-reminder" data-teacher-reminder-close="${Date.parse(item.closes_at.replace(" ", "T") + "+07:00")}" role="status">Cô nhắc: «${escapeHtml(item.name)}» — hạn ${escapeHtml(deadline)}</p>`;
}

/** Chấm đỏ được cập nhật từ danh sách có quyền, tự mất khi bài nộp hoặc đóng. */
function teacherReminderBadge(assignments) {
  window.IMATH_TEACHER_REMINDERS?.setAssignments(assignments);
}

/** Thẻ bài và trạng thái thời gian; không tin UI làm nguồn quyền mở bài. */
function teacherStudentCard(assignments, showJoin = false, memberships = []) {
  const code = new URLSearchParams(location.search).get("gv_class") || "";
  return `<section class="band gv-home-card">${assignments.map(teacherReminderHtml).join("")}<h2>Bài cô/thầy giao</h2>
    ${showJoin || code ? `<form id="teacher-join-form"><label>Mã lớp<input name="code" value="${escapeHtml(code)}"
      maxlength="7" required placeholder="K7M-4QX" autocapitalize="characters" spellcheck="false"></label>
      <label class="teacher-join-consent"><input type="checkbox" name="parent_consent" checked>
        ${uiText("Bố mẹ đồng ý cho giáo viên xem kết quả học của em")}</label>
      <button class="primary" type="submit">${uiText("Vào lớp")}</button></form>` : ""}
    ${teacherStudentConsentHtml(memberships)}
    ${memberships.length || showJoin || code ? `<p>${uiText("Giáo viên xem tên hiển thị, điểm, câu sai và lỗi hay gặp. Em có thể thu hồi ở đây.")}</p>` : ""}
    ${assignments.map((item) => {
      const now = Date.now();
      const opens = Date.parse(item.opens_at.replace(" ", "T") + "+07:00");
      const closes = Date.parse(item.closes_at.replace(" ", "T") + "+07:00");
      const submitted = !!item.submitted_at;
      return `<div class="test-row"><div class="test-row-copy"><strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.class_name)} · ${item.mode === "exam" ? "Kiểm tra" : "Luyện tập"}</span>
        <span>Hạn nộp: ${imathTeacherDate(item.closes_at)} · ${submitted ? "Đã nộp" : closes <= now ? "Đã hết hạn" : "Chưa nộp"}</span></div>
        ${item.attempt_id && (submitted || closes <= now)
          ? `<button class="outline" data-teacher-review="${escapeHtml(item.attempt_id)}">Xem kết quả</button>` : ""}
        ${closes > now && opens <= now && (!submitted || item.mode === "practice")
          ? `<button class="primary" data-teacher-start="${item.id}" data-restart="${submitted ? 1 : 0}">${submitted ? "Làm lại" : "Làm bài"}</button>`
          : opens > now ? "<span>Chưa mở</span>" : ""}</div>`;
    }).join("") || (showJoin || code ? "<p>Chưa có bài được giao sẵn sàng.</p>" : "")}
    <p id="teacher-home-error" class="error" role="alert"></p></section>`;
}

/** Trang Lộ trình chỉ cập nhật chấm báo; danh sách/lớp/consent ở Tài khoản. */
async function teacherRenderStudentHome() {
  if (state.isGuest || !state.user) return;
  const owner=state.user.username;
  const result = await api("gv_student_list");
  if (owner!==state.user?.username) return;
  teacherReminderBadge(result.assignments);
  if (new URLSearchParams(location.search).has("gv_class") && teacherJoinLinkOwner !== owner) {
    teacherJoinLinkOwner = owner;
    state.accountTab = "assignments";
    await navigate("account");
  }
}

/** Trang vào lớp và bài giao mở từ Tài khoản. */
async function teacherRenderStudentPage(target = "#content") {
  const owner=state.user?.username;
  const result = await api("gv_student_list");
  if(owner!==state.user?.username || !["teacher","account"].includes(state.page)) return;
  if (state.page === "account" && state.accountTab !== "assignments") return;
  teacherReminderBadge(result.assignments);
  $(target).innerHTML = teacherStudentCard(result.assignments, true, result.memberships || []);
}

/** Tạo state theo đúng cấu trúc màn làm bài gốc, khôi phục câu đã lưu khi reload/thoát. */
async function teacherStartStudent(assignmentId, restart = false) {
  let result = await api("gv_student_start", { assignment_id: assignmentId, restart, device_token: teacherDeviceToken });
  if (result.continue_required) {
    if (!confirm("Tiếp tục ở đây? Tab hoặc thiết bị đang làm bài sẽ dừng.")) return;
    result = await api("gv_student_start", { assignment_id: assignmentId, restart, device_token: teacherDeviceToken, device_takeover: true });
  }
  const count = result.questions.length;
  state.returnPage = "account";
  state.accountTab = "assignments";
  state.quiz = { test: { id: `gv-${result.assignment.id}`, name: result.assignment.name+(result.assignment.code ? ` · Mã ${result.assignment.code}`:''), test_family: "teacher" },
    questions: result.questions, index: 0, choices: Array(count).fill(null), results: Array(count).fill(null),
    teacherAttempt: result.attempt.id, teacherMode: result.assignment.mode, closesAt: result.assignment.closes_at,
    essaySubmissions: result.essay_submissions || [],
    kind: "teacher", attemptIds: [], confidences: [],
    questionTimers: Array.from({ length: count }, () => ({ elapsedMs: 0, startedAt: null })),
    hints: Array.from({ length: count }, () => []), hintTotals: [], hintUnavailable: [], solutionReveal: [],
  };
  for (const saved of result.saved_answers) {
    const index = saved.position - 1;
    const q = state.quiz.questions[index];
    state.quiz.choices[index] = isTypedQuestion(q) || isTrueFalse(q) || isEssay(q) ? saved.answer
      : questionOptionRecords(q).findIndex((option) => option.key === saved.answer);
    // Luyện tập đã lưu có thể gọi lại idempotent để nhận đúng lời giải đã chốt.
    state.quiz.results[index] = result.assignment.mode === "exam" ? { saved: true, pending: true }
      : await api("gv_student_answer", { attempt_id: result.attempt.id, position: saved.position, answer: saved.answer, device_token: teacherDeviceToken });
    if (q.self_assessed) teacherPrivateRestoreEssay(state.quiz, index);
  }
  state.quiz.index = Math.max(0, state.quiz.results.findIndex((value) => !value));
  teacherIntegrityStart(result);
  renderQuiz();
  teacherHydratePrivateImages();
}

/** Adapter gợi ý đi qua lượt giáo viên, không truy vấn trực tiếp câu hiện tại của kho. */
async function teacherQuizApi(action, payload) {
  if (action !== "get_hint") throw new Error("Bài được giao không dùng trợ giúp này.");
  return api("gv_student_hint", { attempt_id: state.quiz.teacherAttempt, position: state.quiz.index + 1, hint_level: payload.level });
}

/** Lưu câu bằng khóa phương án gốc; phản hồi kiểm tra chỉ xác nhận đã lưu và không tô đúng/sai. */
async function teacherCheckAnswer() {
  const quiz = state.quiz;
  const index = quiz.index;
  if (quiz.busy || quiz.results[index]) return;
  saveCurrentFill();
  const q = quiz.questions[index];
  const choice = quiz.choices[index];
  if (choice === null || choice === "" || (Array.isArray(choice) && choice.some((value) => !String(value).trim()))) {
    showError("#quiz-error", new Error("Em hãy trả lời trước nhé.")); return;
  }
  quiz.busy = true;
  $("#quiz-primary").disabled = true;
  try {
    const result = await api("gv_student_answer", { ...teacherIntegrityPayload(), attempt_id: quiz.teacherAttempt, position: index + 1,
      answer: isTypedQuestion(q) || isTrueFalse(q) ? choice : questionOptionKey(q, choice) });
    quiz.results[index] = { ...result, selected: isTypedQuestion(q) || isTrueFalse(q) ? answerDisplay(choice) : questionOptions(q)[choice] };
    pauseQuestionTimer(quiz, index);
    quiz.busy = false;
    renderQuiz();
    teacherHydratePrivateImages();
  } catch (error) { quiz.busy = false; $("#quiz-primary").disabled = false; showError("#quiz-error", error); }
}

/** Nộp bài bằng điểm server; trước đóng không dựng các hàng đúng/sai của renderResult gốc. */
async function teacherSubmitQuiz() {
  const quiz = state.quiz;
  if (quiz.busy) return;
  quiz.busy = true;
  try {
    const result = await api("gv_student_submit", { ...teacherIntegrityPayload(), attempt_id: quiz.teacherAttempt });
    quiz.busy = false;
    teacherShowStudentResult(result);
    teacherReminderBadge((await api("gv_student_list")).assignments);
  } catch (error) { quiz.busy = false; showError("#quiz-error", error); }
}

/** Xem lại sau đóng dùng renderResult hiện có; trước đóng chỉ hiển thị điểm tổng và giờ mở đáp án. */
function teacherShowStudentResult(result) {
  teacherIntegrityStop();
  const viNumber=value=>new Intl.NumberFormat('vi-VN',{maximumFractionDigits:2,useGrouping:false}).format(value);
  state.score = result.matrix_score ? {...result,score:result.matrix_score.score,max_score:result.matrix_score.max_score} : result;
  if (!result.answers_available) {
    setNav("result");
    $("#content").innerHTML = `<section class="result-panel"><h1>Đã nộp bài kiểm tra</h1>
      <p>Điểm: ${viNumber(result.matrix_score?.score ?? result.score)}/${viNumber(result.matrix_score?.max_score ?? result.max_score)}</p>
      ${result.matrix_score?.pending_essays?.length ? '<p>Tự luận đang chờ giáo viên chấm.</p>' : ''}
      <p>Đáp án và lời giải mở sau giờ đóng bài.</p>
      ${teacherEssayScoreSourcesHtml(result)}
      ${(result.essay_submissions || []).map(item => teacherEssayUploadHtml({essaySubmissions:[item]}, item.position, true)).join("")}
      <button class="outline" data-teacher-home>Quay về bài được giao</button></section>`;
    return;
  }
  state.quiz = { test: { name: "Bài cô/thầy giao" }, kind: "teacher", questions: result.review.map((row) => row.question),
    results: result.review.map((row) => ({ ...row.feedback,
      selected: row.question.options.find((option) => option.key === row.selected)?.text || answerDisplay(row.selected) })) };
  state.returnPage = "account";
  state.accountTab = "assignments";
  renderResult();
  document.querySelector('.result-panel').insertAdjacentHTML('afterbegin',teacherEssayScoreSourcesHtml(result));
  // Renderer chung dùng tự chấm kho; bài giao thay riêng nhãn tự luận bằng trạng thái giáo viên chấm.
  const blocks=[...document.querySelector('.result-panel').children].filter(el=>el.matches('.result-row,.answer-feedback'));
  state.quiz.questions.forEach((question,index)=> {
    if (!isEssay(question) || !blocks[index]) return;
    if (question.self_assessed) {
      blocks[index].innerHTML = teacherPrivateEssayReviewHtml(result.review[index].feedback, result.self_attempt_id, index + 1);
      return;
    }
    const pending=result.matrix_score?.pending_essays.some(item=>item.position===index+1);
    const model=result.review[index].feedback.rubric;
    blocks[index].innerHTML=`<strong>Câu ${index+1}: Tự luận · ${pending ? 'Chờ cô/thầy chấm' : 'Điểm do cô/thầy chấm'}</strong>
      ${model ? `<h3>Bài giải mẫu</h3><div class="math-content source-content">${richText((model.loi_giai_mau || []).map(step=>step.buoc).join('\n'))}</div>` : ''}`;
  });
  renderMath();
  if (result.essay_submissions?.length) {
    document.querySelector('.result-panel').insertAdjacentHTML('beforeend', result.essay_submissions
      .map(item => teacherEssayUploadHtml({essaySubmissions:[item]}, item.position, true)).join(''));
  }
  if (result.matrix_score) {
    document.querySelector('#content').insertAdjacentHTML('afterbegin', `<p class="band">Điểm theo ma trận:
      ${viNumber(result.matrix_score.score)}/${viNumber(result.matrix_score.max_score)}${result.matrix_score.pending_essays.length ? ' · Tự luận đang chờ giáo viên chấm' : ''}</p>`);
  }
  teacherHydratePrivateImages();
  // Bài đã nộp không dùng nút retry của đề thường; luyện tập mở lượt mới từ danh sách bài giao.
  document.querySelector('[data-action="retry"]')?.remove();
}
document.addEventListener("click", async (event) => {
  const home = event.target.closest("[data-teacher-home]");
  const start = event.target.closest("[data-teacher-start]");
  const review = event.target.closest("[data-teacher-review]");
  if (!home && !start && !review) return;
  event.preventDefault();
  try {
    if (home) { state.accountTab = "assignments"; await navigate("account"); }
    if (start) await teacherStartStudent(Number(start.dataset.teacherStart), start.dataset.restart === "1");
    if (review) teacherShowStudentResult(await api("gv_student_review", { attempt_id: review.dataset.teacherReview }));
  } catch (error) { if ($("#teacher-home-error")) showError("#teacher-home-error", error); else alert(error.message); }
});

/** Giữ màn tự luận hiện có, bài giao dùng chấm của giáo viên và rubric chỉ khi được phép. */
const teacherOriginalEssayHtml = essayHtml;
essayHtml = function(q, quiz) {
  if (!quiz.teacherAttempt) return teacherOriginalEssayHtml(q, quiz);
  if (q.self_assessed) return teacherPrivateEssayHtml(q, quiz);
  if (!quiz.results[quiz.index]) return teacherOriginalEssayHtml(q, quiz);
  const rubric = quiz.essayRubrics?.[quiz.index];
  return `<div class="essay-panel"><p>Đã ghi nhận bài làm trên giấy. Điểm tự luận chờ cô/thầy chấm.</p>
    ${rubric ? essayModelReadonlyHtml(rubric) : ""}</div>`;
};

/** Chặn capture trước listener đặc biệt của màn chung: không gọi reveal_essay ở kho hiện tại. */
document.addEventListener('click', async (event) => {
  if (state.quiz?.kind !== 'teacher') return;
  const button=event.target.closest('[data-essay-finish],[data-essay-save],[data-essay-step]');
  if (!button) return;
  event.stopImmediatePropagation(); event.preventDefault();
  const quiz=state.quiz, index=quiz.index;
  try {
    if (quiz.questions[index].self_assessed) return await teacherPrivateEssayClick(button, quiz, index);
    if (!button.hasAttribute('data-essay-finish')) return;
    const result=await api('gv_student_essay_finish',{...teacherIntegrityPayload(),attempt_id:quiz.teacherAttempt,position:index+1});
    quiz.results[index]={...result,essay:true,selected:'Đã làm trên giấy'};
    if (result.rubric) {
      (quiz.essayRubrics ||= [])[index]=result.rubric;
      (quiz.essayChecks ||= [])[index]=[];
    }
    renderQuiz();
  } catch (error) { showError('#quiz-error',error); }
}, true);
