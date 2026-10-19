(function (window, document) {
  'use strict';

  const HISTORY_KEY = 'imath_hsg_history_v6';
  const PROGRESS_KEY = 'imath_hsg_progress_v1';
  const DRAFT_KEY = 'imath_hsg_active_draft_v1';
  const HISTORY_LIMIT = 630;
  const MODES = {
    full: { label: 'Chinh phục đầy đủ', count: 21, minutes: 60 },
    exam: { label: 'Thi thử', count: 15, minutes: 45 },
    practice: { label: 'Luyện chuyên đề', count: 10, minutes: 0 },
    wrong: { label: 'Ôn câu sai', count: 10, minutes: 0 }
  };
  const TOPICS = {
    all: 'Tất cả', reasoning_story: 'Lời văn & suy luận', visual_logic: 'Trực quan & logic',
    canonical_problem: 'Dạng toán điển hình', advanced_computation: 'Tính toán nâng cao'
  };
  const LEVELS = {
    kho: { title: 'Phần I – Câu hỏi khó', text: 'câu vận dụng nhiều bước', css: '' },
    'rat-kho': { title: 'Phần II – Thử thách tư duy', text: 'câu cần suy luận sâu', css: 'challenge' },
    'chinh-phuc': { title: 'Phần III – Chinh phục HSG', text: 'câu có nút thắt tư duy', css: 'conquest' }
  };
  const state = {
    grade: 1, mode: 'full', topic: 'all', exam: null, dirty: false, checked: false,
    answersVisible: false, hintsUsed: {}, recorded: {}, altAnswers: {}, timerInterval: null, timerEndsAt: 0
  };
  const $ = id => document.getElementById(id);

  function icon(name) {
    const paths = {
      refresh: '<path d="M19 7v5h-5M5 17v-5h5"/><path d="M7.1 8.5A6 6 0 0 1 18.6 10M16.9 15.5A6 6 0 0 1 5.4 14"/>',
      check: '<path d="m5 12 4 4L19 6"/>', list: '<path d="M8 6h11M8 12h11M8 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
      print: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/>',
      shield: '<path d="M12 3 5 6v5c0 4.6 2.9 8.4 7 10 4.1-1.6 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
      brain: '<path d="M9.5 4.5A3.5 3.5 0 0 0 6 8c0 .4.1.8.2 1.1A3.5 3.5 0 0 0 7.5 16H9v3M14.5 4.5A3.5 3.5 0 0 1 18 8c0 .4-.1.8-.2 1.1A3.5 3.5 0 0 1 16.5 16H15v3M12 3v18M9 8h3M12 13h3"/>',
      star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
      undo: '<path d="M9 7 4 12l5 5"/><path d="M5 12h9a5 5 0 0 1 5 5v1"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (paths[name] || paths.star) + '</svg>';
  }

  function readStore(storage, key, fallback) {
    try { const value = JSON.parse(storage.getItem(key) || 'null'); return value && typeof value === 'object' ? value : fallback; }
    catch (error) { return fallback; }
  }
  function writeStore(storage, key, value) { try { storage.setItem(key, JSON.stringify(value)); } catch (error) { /* Không chặn việc làm bài. */ } }
  function readDraft() {
    const draft = readStore(window.sessionStorage, DRAFT_KEY, null);
    return draft && draft.exam && Array.isArray(draft.exam.questions) && Date.now() - Number(draft.updatedAt || 0) < 12 * 60 * 60 * 1000 ? draft : null;
  }
  function collectDraftAnswers() {
    const answers = {};
    document.querySelectorAll('input[id^="answer-"]').forEach(input => { if (input.value) answers[input.id.replace('answer-', '')] = input.value; });
    return answers;
  }
  function saveDraft() {
    if (!state.exam || state.checked) return;
    writeStore(window.sessionStorage, DRAFT_KEY, {
      grade: state.grade, mode: state.mode, topic: state.topic, exam: state.exam,
      answers: collectDraftAnswers(), hintsUsed: state.hintsUsed, altAnswers: state.altAnswers,
      dirty: state.dirty, timerEndsAt: state.timerEndsAt, updatedAt: Date.now()
    });
  }
  function clearDraft() { try { window.sessionStorage.removeItem(DRAFT_KEY); } catch (error) { /* Draft storage is optional. */ } }
  function restoreDraftAnswers(draft) {
    Object.entries(draft.answers || {}).forEach(([index, value]) => { const input = $('answer-' + index); if (input) input.value = value; });
    Object.entries(state.hintsUsed || {}).forEach(([index, count]) => {
      const list = document.querySelector('[data-guide-for="' + index + '"] ol');
      const button = document.querySelector('[data-guide-for="' + index + '"] .progressive-hint-control button');
      if (!list || !button) return;
      Array.from(list.children).slice(0, Math.min(5, Number(count) || 0)).forEach(item => item.classList.add('is-visible'));
      const opened = list.querySelectorAll('.is-visible').length;
      button.textContent = opened < 5 ? 'Mở gợi ý ' + (opened + 1) + '/5' : 'Đã mở đủ 5 gợi ý';
      button.disabled = opened >= 5;
    });
  }
  function readHistory() { return readStore(window.sessionStorage, HISTORY_KEY, {}); }
  function readProgress() {
    const value = readStore(window.localStorage, PROGRESS_KEY, {});
    if (!value.grades) value.grades = {}; if (!value.wrong) value.wrong = {}; return value;
  }
  function progressFor(root, grade) {
    const key = String(grade);
    if (!root.grades[key]) root.grades[key] = { attempts: 0, correct: 0, hints: 0, streak: 0, lastDay: '', recent: [] };
    if (!Array.isArray(root.wrong[key])) root.wrong[key] = [];
    return { stats: root.grades[key], wrong: root.wrong[key], key };
  }
  function historyFor(grade) {
    const all = readHistory(), key = String(grade), item = all[key] || {};
    return { all, key, fingerprints: Array.isArray(item.fingerprints) ? item.fingerprints : [], templates: Array.isArray(item.templates) ? item.templates : [], families: Array.isArray(item.families) ? item.families : [] };
  }
  function rememberExam(exam) {
    const history = historyFor(exam.grade);
    history.all[history.key] = {
      fingerprints: history.fingerprints.concat(exam.questions.map(q => q.fingerprint)).slice(-HISTORY_LIMIT),
      templates: history.templates.concat(exam.questions.map(q => q.templateId)).slice(-HISTORY_LIMIT),
      families: exam.questions.map(q => q.family)
    };
    writeStore(window.sessionStorage, HISTORY_KEY, history.all);
  }
  function day(offset) { const date = new Date(); date.setDate(date.getDate() + (offset || 0)); return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0'); }

  function recordAttempt(question, correct, index) {
    const root = readProgress(), current = progressFor(root, state.grade);
    const old = current.wrong.findIndex(item => item.family === question.family);
    if (correct && old >= 0) current.wrong.splice(old, 1);
    if (!correct) {
      const entry = { family: question.family, category: question.category, difficulty: question.difficulty, lastWrongAt: Date.now() };
      if (old >= 0) current.wrong[old] = entry; else current.wrong.unshift(entry); current.wrong.splice(60);
    }
    if (!state.recorded[index]) {
      const today = day(0);
      if (current.stats.lastDay !== today) { current.stats.streak = current.stats.lastDay === day(-1) ? Number(current.stats.streak || 0) + 1 : 1; current.stats.lastDay = today; }
      current.stats.attempts = Number(current.stats.attempts || 0) + 1;
      if (correct) current.stats.correct = Number(current.stats.correct || 0) + 1;
      current.stats.recent = (Array.isArray(current.stats.recent) ? current.stats.recent : []).concat({ family: question.family, correct, at: Date.now() }).slice(-100);
      state.recorded[index] = true;
    }
    writeStore(window.localStorage, PROGRESS_KEY, root); refreshCenter();
  }
  function recordHint(index) {
    const root = readProgress(), current = progressFor(root, state.grade);
    current.stats.hints = Number(current.stats.hints || 0) + 1; state.hintsUsed[index] = Number(state.hintsUsed[index] || 0) + 1;
    writeStore(window.localStorage, PROGRESS_KEY, root); refreshCenter(); saveDraft();
  }

  function queryGrade() { const value = Number(new URLSearchParams(window.location.search).get('lop')); return value >= 1 && value <= 5 ? value : 1; }
  function setGrade(grade, generate) {
    state.grade = Math.max(1, Math.min(5, Number(grade) || 1)); $('grade-select').value = String(state.grade);
    document.querySelectorAll('[data-grade-choice]').forEach(button => { const active = Number(button.dataset.gradeChoice) === state.grade; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    $('hero-grade').textContent = 'lớp ' + state.grade; $('sheet-grade').textContent = 'Lớp ' + state.grade; document.title = 'Luyện thi Toán lớp ' + state.grade + ' | iMath.vn';
    const url = new URL(window.location.href); url.searchParams.set('lop', String(state.grade)); window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    validateTopics(); refreshCenter(); if (generate) generateExam(false);
  }
  function validateTopics() {
    if (!window.IMathHSGBank) return;
    const summary = window.IMathHSGBank.getCatalogSummary()[state.grade];
    document.querySelectorAll('[data-hsg-topic]').forEach(button => {
      const topic = button.dataset.hsgTopic, enabled = topic === 'all' || Number(summary.category[topic] || 0) > 0;
      button.disabled = !enabled; if (!enabled && state.topic === topic) state.topic = 'all';
    });
  }
  function canDiscard() { return !state.dirty || state.checked || window.confirm('Con đang làm bài dở. Nếu đổi bộ câu hỏi, toàn bộ câu trả lời hiện tại sẽ mất. Con có chắc chắn muốn tiếp tục không?'); }
  function wrongFamilies() { const root = readProgress(); return progressFor(root, state.grade).wrong.map(item => item.family).filter(Boolean); }

  function buildSet(bank, history) {
    const common = { grade: state.grade, usedFingerprints: history.fingerprints, usedTemplateIds: history.templates, previousFamilies: history.families };
    if (state.mode === 'full') return bank.generateExam(common);
    if (state.mode === 'exam') return bank.generateSet(Object.assign({}, common, { count: 15, difficultyCounts: { kho: 7, 'rat-kho': 4, 'chinh-phuc': 4 } }));
    if (state.mode === 'wrong') {
      const families = Array.from(new Set(wrongFamilies())).slice(0, 10); if (!families.length) return null;
      return bank.generateSet(Object.assign({}, common, { count: families.length, families }));
    }
    return bank.generateSet(Object.assign({}, common, { count: state.topic === 'all' ? 10 : 8, category: state.topic === 'all' ? undefined : state.topic }));
  }
  function resetWork() { state.dirty = false; state.checked = false; state.answersVisible = false; state.hintsUsed = {}; state.recorded = {}; state.altAnswers = {}; }
  function generateExam(confirmFirst) {
    if (confirmFirst && !canDiscard()) return;
    const bank = window.IMathHSGBank; if (!bank) return showFatal('Không tải được ngân hàng câu hỏi. Hãy tải lại trang.');
    clearTimer();
    try {
      const exam = buildSet(bank, historyFor(state.grade)); resetWork();
      if (!exam) { state.exam = null; renderWrongEmpty(); refreshToolbar(); return; }
      state.exam = exam; rememberExam(exam); renderExam(); hideResults(); $('answer-panel').hidden = true; $('answer-panel').replaceChildren(); refreshToolbar(); startTimer(MODES[state.mode].minutes);
      saveDraft();
    } catch (error) { state.exam = null; resetWork(); showFatal('Chưa tạo được đủ câu mới đạt chuẩn cho lựa chọn này. Hãy bấm “Tạo đề mới” để thử lại.'); refreshToolbar(); console.error(error); }
  }
  function showFatal(message) { $('status-line').textContent = 'Không thể tạo bộ câu hỏi: vui lòng thử lại.'; $('sheet-summary').textContent = 'Chưa có bộ câu hỏi'; const box = document.createElement('div'); box.className = 'fatal-message'; box.textContent = message; $('questions').replaceChildren(box); }
  function renderWrongEmpty() {
    const box = document.createElement('div'); box.className = 'wrong-empty';
    const title = document.createElement('strong'); title.textContent = '🎉 Chưa có câu cần ôn'; const text = document.createElement('p'); text.textContent = 'Con hãy làm một bộ luyện hoặc đề thi. Dạng trả lời sai sẽ tự xuất hiện ở đây dưới dạng câu mới tương tự.';
    box.append(title, text); $('questions').replaceChildren(box); $('sheet-summary').textContent = 'Chưa có câu cần ôn'; $('status-line').textContent = 'Sổ câu sai của lớp ' + state.grade + ' đang trống.'; hideResults(); fireRendered();
  }

  function sectionMarker(meta, count) {
    const marker = document.createElement('div'); marker.className = 'section-marker' + (meta.css ? ' section-marker--' + meta.css : '');
    const copy = document.createElement('div'), heading = document.createElement('h3'), paragraph = document.createElement('p'), line = document.createElement('span');
    heading.textContent = meta.title; paragraph.textContent = count + ' ' + meta.text; copy.append(heading, paragraph); marker.append(copy, line); return marker;
  }
  function renderExam() {
    const container = $('questions'); container.replaceChildren(); let level = '';
    state.exam.questions.forEach((question, index) => {
      if (question.difficulty !== level) { level = question.difficulty; container.appendChild(sectionMarker(LEVELS[level] || LEVELS.kho, state.exam.questions.filter(q => q.difficulty === level).length)); }
      container.appendChild(questionCard(question, index));
    });
    const counts = state.exam.summary.difficulty;
    const parts = [['kho', 'khó'], ['rat-kho', 'thử thách'], ['chinh-phuc', 'chinh phục']].filter(item => counts[item[0]]).map(item => counts[item[0]] + ' ' + item[1]);
    $('sheet-summary').textContent = state.exam.questions.length + ' câu · ' + parts.join(' + '); document.body.dataset.hsgMode = state.mode; fireRendered();
  }
  function guideSteps(question) {
    const prompt = String(question.prompt || '').trim(), sentences = (prompt.match(/[^.!?]+[.!?]?/g) || []).map(item => item.trim()).filter(Boolean), target = sentences[sentences.length - 1] || prompt;
    const words = ['nhiều hơn', 'ít hơn', 'gấp', 'chia đều', 'tất cả', 'còn lại', 'hiệu', 'thăng bằng', 'mỗi', 'ban đầu', 'cuối cùng'].filter(word => prompt.toLowerCase().includes(word));
    const solution = Array.isArray(question.solution) ? question.solution : [];
    return [
      ['Đề cho gì, hỏi gì?', 'Câu cần trả lời là: “' + target + '”'],
      ['Quan hệ giữa các đại lượng', words.length ? 'Chú ý các từ: “' + words.slice(0, 4).join('”, “') + '”.' : 'Phân biệt dữ kiện đã cho với điều cần tìm.'],
      ['Sơ đồ hoặc bước trung gian', question.keyPoint || solution[0] || 'Tìm đại lượng cần biết ngay trước đáp án cuối.'],
      ['Phép tính cần thực hiện', solution[0] || 'Viết mỗi phép tính một dòng và ghi đúng đơn vị.'],
      ['Kiểm tra ngược kết quả', solution.find(item => /kiểm tra|thay lại|đối chiếu|ngược/i.test(item)) || 'Thay kết quả vào dữ kiện ban đầu để kiểm tra.']
    ];
  }
  function guide(question, index) {
    const details = document.createElement('details'); details.className = 'five-step-guide is-progressive'; details.dataset.guideFor = String(index);
    const summary = document.createElement('summary'), symbol = document.createElement('span'), title = document.createElement('span'), note = document.createElement('small');
    symbol.className = 'five-step-guide__icon'; symbol.textContent = '?'; title.textContent = 'Gợi ý giải theo 5 bước'; note.textContent = 'mở từng tầng'; summary.append(symbol, title, note);
    const control = document.createElement('div'), cost = document.createElement('span'), reveal = document.createElement('button'), list = document.createElement('ol'); control.className = 'progressive-hint-control';
    cost.textContent = 'Mỗi tầng gợi ý trừ 0,1 điểm.'; reveal.type = 'button'; reveal.textContent = 'Mở gợi ý 1/5';
    guideSteps(question).forEach(step => { const item = document.createElement('li'), strong = document.createElement('strong'), text = document.createElement('p'); strong.textContent = step[0]; text.textContent = step[1]; item.append(strong, text); list.appendChild(item); });
    reveal.addEventListener('click', event => {
      event.preventDefault(); const next = list.querySelector('li:not(.is-visible)'); if (!next) return; next.classList.add('is-visible'); recordHint(index);
      const opened = list.querySelectorAll('.is-visible').length; reveal.textContent = opened < 5 ? 'Mở gợi ý ' + (opened + 1) + '/5' : 'Đã mở đủ 5 gợi ý'; reveal.disabled = opened >= 5;
    });
    control.append(cost, reveal); details.append(summary, control, list); return details;
  }
  function questionCard(question, index) {
    const article = document.createElement('article'); article.className = 'question-card question-card--' + question.difficulty; article.dataset.questionIndex = String(index); article.dataset.difficulty = question.difficulty; article.dataset.family = question.family;
    const number = document.createElement('span'), body = document.createElement('div'), prompt = document.createElement('p'); number.className = 'question-number'; number.textContent = String(index + 1); body.className = 'question-body'; prompt.className = 'question-prompt'; prompt.textContent = question.prompt; body.appendChild(prompt);
    if (question.svgGivens) { const visual = document.createElement('div'); visual.className = 'question-visual'; visual.innerHTML = window.IMathHSGBank.renderSvg(question.svgGivens); body.appendChild(visual); }
    const row = document.createElement('div'), label = document.createElement('label'), symbol = document.createElement('span'), labelText = document.createElement('span'), input = document.createElement('input'), feedback = document.createElement('span');
    row.className = 'answer-row'; label.htmlFor = 'answer-' + index; symbol.className = 'answer-row__icon'; symbol.textContent = '✎'; labelText.textContent = 'Con trả lời'; label.append(symbol, labelText);
    input.id = 'answer-' + index; input.type = 'text'; input.inputMode = question.answer.kind === 'integer' ? 'numeric' : 'text'; input.autocomplete = 'off'; input.maxLength = 80; input.placeholder = question.inputHint || ('Nhập đáp án' + (question.unit ? ' và đơn vị ' + question.unit : '')); input.setAttribute('aria-describedby', 'feedback-' + index);
    feedback.className = 'question-feedback'; feedback.id = 'feedback-' + index; feedback.setAttribute('aria-live', 'polite');
    input.addEventListener('input', () => { state.dirty = true; state.checked = false; delete state.altAnswers[index]; article.classList.remove('is-correct', 'is-wrong'); feedback.textContent = ''; const message = article.querySelector('.diagnosis-message'); if (message) message.remove(); hideResults(); saveDraft(); });
    row.append(label, input, feedback); body.appendChild(row); if (state.mode !== 'exam') body.appendChild(guide(question, index)); article.append(number, body); return article;
  }

  function normalizeTypedUnits(raw) {
    return String(raw == null ? '' : raw).replace(/cm\s*2\b/gi, 'cm²').replace(/dm\s*2\b/gi, 'dm²').replace(/m\s*2\b/gi, 'm²').replace(/cm\s*3\b/gi, 'cm³').replace(/dm\s*3\b/gi, 'dm³').replace(/m\s*3\b/gi, 'm³');
  }
  function requiredUnit(raw, question) {
    if (!question.unit || question.answer.kind === 'remainder') return true;
    const text = normalizeTypedUnits(raw).toLowerCase().trim(), unit = String(question.unit).toLowerCase();
    if (question.answer.kind === 'time' && /\d\s*:\s*\d/.test(text)) return true;
    const escaped = unit.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\d\\s])' + escaped + '\\s*$').test(text) || (unit === 'nghìn đồng' && /(?:^|[\d\s])đồng\s*$/.test(text));
  }
  function answerNumber(answer) { if (!answer) return null; if (answer.kind === 'integer') return answer.value; if (answer.kind === 'rational') return answer.numerator / answer.denominator; if (answer.kind === 'time') return answer.totalMinutes; return null; }
  function diagnose(question, raw, numericCorrect, unitOkay, alt) {
    if (alt && alt.diagnosis) return alt.diagnosis; if (!String(raw || '').trim() && !alt) return 'Con chưa nhập câu trả lời. Hãy xác định đề cho gì và hỏi gì trước.';
    if (numericCorrect && !unitOkay) return 'Phép tính đã đúng nhưng còn thiếu hoặc sai đơn vị “' + question.unit + '”.';
    const expected = answerNumber(question.answer), parsed = window.IMathHSGBank.parseUserAnswer(raw, question.answer), actual = answerNumber(parsed), family = String(question.family || '').toLowerCase();
    if (Number.isFinite(actual) && Number.isFinite(expected)) {
      if (/plant|tree|cut|position/.test(family) && Math.abs(actual - expected) === 1) return 'Con có thể đã quên cộng hoặc trừ 1 ở điểm đầu/cuối. Hãy đếm số khoảng rồi đối chiếu số điểm.';
      if ((question.knowledge || []).some(item => ['measure', 'area', 'volume', 'money'].includes(item)) && [10, 100, 1000].some(scale => actual * scale === expected || expected * scale === actual)) return 'Kết quả lệch đúng một bậc đổi đơn vị. Hãy viết lại bảng đơn vị trước khi tính.';
      if (question.answer.kind === 'rational' && Math.abs(actual - expected) < .02) return 'Giá trị gần đúng, nhưng đề cần phân số chính xác. Hãy rút gọn và nhập dạng a/b.';
      if (/sum-difference|total-difference/.test(family)) return 'Có thể con đã nhầm tổng với hiệu. Hãy ghi riêng “tổng” và “hiệu” trước khi áp dụng sơ đồ.';
      if (/ratio|rate/.test(family)) return 'Hãy kiểm tra thứ tự của tỉ số: đại lượng nào ứng với một phần và đại lượng nào ứng với nhiều phần.';
      const intermediate = ((question.solution || []).join(' ').match(/\d+/g) || []).map(Number).filter(value => value !== expected);
      if (intermediate.includes(actual)) return 'Con mới dừng ở một kết quả trung gian. Đọc lại câu hỏi cuối và làm tiếp bước còn lại.';
    }
    return question.keyPoint ? 'Chưa đúng. Điểm cần xem lại: ' + question.keyPoint : 'Chưa đúng. Hãy kiểm tra quan hệ giữa các dữ kiện và thử tính ngược.';
  }
  function evaluate(index) {
    const question = state.exam.questions[index], input = $('answer-' + index), alt = state.altAnswers[index], raw = alt ? alt.label : (input ? input.value.trim() : '');
    const numericCorrect = alt ? Boolean(alt.correct) : window.IMathHSGBank.isCorrectAnswer(normalizeTypedUnits(raw), question.answer), unitOkay = alt ? true : requiredUnit(raw, question), correct = numericCorrect && unitOkay;
    return { question, input: raw || 'Chưa trả lời', isCorrect: correct, diagnosis: diagnose(question, raw, numericCorrect, unitOkay, alt) };
  }
  function paint(index, result) {
    const card = document.querySelector('[data-question-index="' + index + '"]'); if (!card) return;
    card.classList.toggle('is-correct', result.isCorrect); card.classList.toggle('is-wrong', !result.isCorrect); const feedback = $('feedback-' + index); if (feedback) feedback.textContent = result.isCorrect ? 'Chính xác' : 'Cần xem lại';
    let message = card.querySelector('.diagnosis-message'); if (!message) { message = document.createElement('div'); message.className = 'diagnosis-message'; card.querySelector('.question-body').appendChild(message); }
    message.classList.toggle('is-good', result.isCorrect); message.textContent = result.isCorrect ? 'Đúng rồi! Con đã chọn đúng cách giải và ghi đủ câu trả lời.' : result.diagnosis;
  }
  function checkSingle(index) { if (!state.exam || !state.exam.questions[index]) return null; const result = evaluate(index); paint(index, result); recordAttempt(result.question, result.isCorrect, index); state.dirty = true; saveDraft(); return result; }
  function checkExam() {
    if (!state.exam) return; clearTimer(); const details = state.exam.questions.map((question, index) => { const result = evaluate(index); paint(index, result); recordAttempt(question, result.isCorrect, index); return result; });
    state.checked = true; state.dirty = false; clearDraft(); renderResults(details.filter(item => item.isCorrect).length, details); lockAnswers(); $('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function encouragement(correct, total) { const rate = total ? correct / total : 0; if (correct === total) return 'Xuất sắc! Con đã chinh phục trọn vẹn bộ câu hỏi.'; if (rate >= .85) return 'Rất giỏi! Con chỉ còn vài điểm nhỏ cần xem lại.'; if (rate >= .65) return 'Làm tốt lắm! Hãy đọc chẩn đoán các câu sai.'; if (rate >= .45) return 'Con đã làm được nhiều câu khó. Bình tĩnh xem lại từng bước nhé!'; return 'Bài HSG vốn thử thách. Mỗi lỗi hiểu rõ hôm nay đều là một bước tiến.'; }
  function renderResults(correct, details) {
    const results = $('results'); results.hidden = false; results.replaceChildren(); const total = state.exam.questions.length, hints = Object.values(state.hintsUsed).reduce((sum, value) => sum + Number(value || 0), 0), rawScore = Math.round(correct / total * 100) / 10, penalty = state.mode !== 'exam' ? Math.min(2, hints / 10) : 0, score = Math.max(0, Math.round((rawScore - penalty) * 10) / 10);
    const header = document.createElement('div'), copy = document.createElement('div'), eyebrow = document.createElement('span'), heading = document.createElement('h2'), scoreBox = document.createElement('div'), scoreValue = document.createElement('b'), scoreLabel = document.createElement('small');
    header.className = 'result-header'; eyebrow.textContent = 'KẾT QUẢ ' + MODES[state.mode].label.toUpperCase(); heading.textContent = encouragement(correct, total); copy.append(eyebrow, heading); scoreBox.className = 'score-box'; scoreValue.textContent = String(score).replace('.', ','); scoreLabel.textContent = penalty ? 'điểm / 10 · trừ ' + String(penalty).replace('.', ',') + ' do gợi ý' : 'điểm / 10'; scoreBox.append(scoreValue, scoreLabel); header.append(copy, scoreBox);
    const stats = document.createElement('div'); stats.className = 'result-stats'; [['Đúng', correct, 'good'], ['Sai', total - correct, 'bad'], ['Hoàn thành', Math.round(correct / total * 100) + '%', 'neutral']].forEach(data => { const block = document.createElement('div'), value = document.createElement('b'), label = document.createElement('span'); block.className = data[2]; value.textContent = String(data[1]); label.textContent = data[0]; block.append(value, label); stats.appendChild(block); });
    const list = document.createElement('div'); list.className = 'result-list'; details.forEach((detail, index) => list.appendChild(resultItem(detail, index)));
    const actions = document.createElement('div'), retry = document.createElement('button'), next = document.createElement('button'); actions.className = 'result-actions'; retry.type = next.type = 'button'; retry.className = 'btn btn-outline'; next.className = 'btn btn-primary'; retry.innerHTML = icon('undo') + '<span>Làm lại câu sai</span>'; next.innerHTML = icon('refresh') + '<span>Tạo bộ mới</span>'; retry.addEventListener('click', retryExam); next.addEventListener('click', () => generateExam(false)); actions.append(retry, next); results.append(header, stats, list, actions);
  }
  function resultItem(detail, index) {
    const item = document.createElement('article'), top = document.createElement('div'), badge = document.createElement('b'), status = document.createElement('span'), prompt = document.createElement('p'), answers = document.createElement('dl'), solution = document.createElement('div'), title = document.createElement('strong'), steps = document.createElement('ol');
    item.className = 'result-item ' + (detail.isCorrect ? 'is-correct' : 'is-wrong'); badge.textContent = 'Câu ' + (index + 1); status.textContent = detail.isCorrect ? 'Đúng' : 'Sai'; top.append(badge, status); prompt.textContent = detail.question.prompt;
    [['Con trả lời', detail.input], ['Đáp án đúng', detail.question.answerText]].concat(detail.isCorrect ? [] : [['Lỗi cần sửa', detail.diagnosis]]).forEach(pair => { const dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = pair[0]; dd.textContent = pair[1]; answers.append(dt, dd); });
    solution.className = 'solution-box'; title.textContent = detail.question.difficulty === 'chinh-phuc' ? 'Nút thắt của bài' : detail.question.difficulty === 'rat-kho' ? 'Điểm mấu chốt' : 'Cách giải'; (detail.question.solution || []).forEach(text => { const li = document.createElement('li'); li.textContent = text; steps.appendChild(li); }); solution.append(title, steps); if (detail.question.keyPoint) { const note = document.createElement('p'); note.textContent = detail.question.keyPoint; solution.appendChild(note); } item.append(top, prompt, answers, solution); return item;
  }
  function retryExam() {
    if (!state.exam) return; state.exam.questions.forEach((question, index) => { const card = document.querySelector('[data-question-index="' + index + '"]'); if (card && card.classList.contains('is-wrong')) { const input = $('answer-' + index); if (input) input.value = ''; delete state.altAnswers[index]; } });
    document.querySelectorAll('.question-card').forEach(card => card.classList.remove('is-correct', 'is-wrong')); document.querySelectorAll('.question-feedback').forEach(item => { item.textContent = ''; }); document.querySelectorAll('.diagnosis-message').forEach(item => item.remove()); state.dirty = true; state.checked = false; state.answersVisible = false; state.recorded = {}; hideResults(); $('answer-panel').hidden = true; $('answer-panel').replaceChildren(); lockAnswers(); saveDraft(); $('worksheet').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function hideResults() { $('results').hidden = true; $('results').replaceChildren(); }
  function answersLocked() { return (state.mode === 'full' || state.mode === 'exam') && !state.checked; }
  function lockAnswers() { ['answers', 'answers-bottom'].forEach(id => { const button = $(id); button.disabled = !state.exam || answersLocked(); button.title = answersLocked() ? 'Hoàn thành và nộp bài trước khi xem đáp án.' : ''; }); }
  function toggleAnswers() {
    if (!state.exam) return; if (answersLocked()) { $('status-line').textContent = 'Chế độ thi chưa cho xem đáp án. Con hãy nộp bài trước.'; return; }
    state.answersVisible = !state.answersVisible; const panel = $('answer-panel'); panel.hidden = !state.answersVisible; panel.replaceChildren(); if (!state.answersVisible) return;
    const heading = document.createElement('h2'), note = document.createElement('p'), grid = document.createElement('div'); heading.textContent = 'Đáp án của bộ câu hỏi hiện tại'; note.textContent = 'Con nên đọc cả chẩn đoán lỗi và lời giải, không chỉ đối chiếu con số cuối.'; grid.className = 'answer-key-grid';
    state.exam.questions.forEach((question, index) => { const item = document.createElement('div'), number = document.createElement('b'), value = document.createElement('span'); number.textContent = String(index + 1); value.textContent = question.answerText; item.append(number, value); grid.appendChild(item); }); panel.append(heading, note, grid); panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function printQuestion(question) {
    const article = document.createElement('article'), heading = document.createElement('p'), number = document.createElement('b'), answer = document.createElement('div'); number.textContent = 'Câu ' + question.number + '. '; heading.append(number, document.createTextNode(question.prompt)); article.appendChild(heading);
    if (question.svgGivens) { const visual = document.createElement('div'); visual.className = 'print-visual'; visual.innerHTML = window.IMathHSGBank.renderSvg(question.svgGivens); article.appendChild(visual); }
    answer.className = 'print-answer-line'; answer.textContent = 'Bài làm: ........................................................................................................................'; article.appendChild(answer); return article;
  }
  function preparePrint() {
    if (window.IMathWorksheetExport) return window.IMathWorksheetExport.open();
    if (!state.exam) return; const root = $('print-root'); root.replaceChildren(); const pageCount = Math.ceil(state.exam.questions.length / 5);
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
      const page = document.createElement('section'), watermark = document.createElement('div'), header = document.createElement('header'), brand = document.createElement('div'), title = document.createElement('strong'), subtitle = document.createElement('span'), list = document.createElement('div'), footer = document.createElement('footer'); page.className = 'print-page'; watermark.className = 'print-watermark'; watermark.textContent = 'iMath.vn'; title.textContent = 'iMath.vn – ' + MODES[state.mode].label + ' Toán lớp ' + state.grade; subtitle.textContent = 'Trang ' + (pageIndex + 1) + '/' + pageCount; brand.append(title, subtitle); header.appendChild(brand);
      if (!pageIndex) { const identity = document.createElement('div'); identity.className = 'print-identity'; identity.textContent = 'Họ và tên: ........................................  Lớp: ........  Ngày: ........ / ........ / ........'; header.appendChild(identity); }
      list.className = 'print-questions'; state.exam.questions.slice(pageIndex * 5, pageIndex * 5 + 5).forEach(question => list.appendChild(printQuestion(question))); footer.innerHTML = '<b>© iMath.vn</b><span>Tài liệu dùng cho mục đích học tập.</span>'; page.append(watermark, header, list, footer); root.appendChild(page);
    }
    window.print();
  }

  function clearTimer() { if (state.timerInterval) window.clearInterval(state.timerInterval); state.timerInterval = null; state.timerEndsAt = 0; }
  function startTimer(minutes, restoredEndsAt) {
    const timer = $('hsg-timer'); if (!minutes) { timer.hidden = true; state.timerEndsAt = 0; return; } timer.hidden = false; state.timerEndsAt = Number(restoredEndsAt) > 0 ? Number(restoredEndsAt) : Date.now() + minutes * 60000;
    const tick = () => { const left = Math.max(0, Math.ceil((state.timerEndsAt - Date.now()) / 1000)); timer.textContent = '⏱️ ' + String(Math.floor(left / 60)).padStart(2, '0') + ':' + String(left % 60).padStart(2, '0'); timer.classList.toggle('is-urgent', left <= 300); if (!left) { clearTimer(); $('status-line').textContent = 'Hết giờ – hệ thống đã chấm bài.'; checkExam(); } };
    tick(); state.timerInterval = window.setInterval(tick, 1000);
  }
  function refreshToolbar() {
    const mode = MODES[state.mode], count = state.exam ? state.exam.questions.length : 0; if (count) $('status-line').textContent = mode.label + ' đã sẵn sàng: ' + count + ' câu' + (mode.minutes ? ' · ' + mode.minutes + ' phút.' : ' · kiểm tra ngay từng câu.');
    $('check').querySelector('span').textContent = state.mode === 'practice' || state.mode === 'wrong' ? 'Kiểm tra tất cả' : 'Nộp bài'; $('check-bottom').querySelector('span').textContent = state.mode === 'practice' || state.mode === 'wrong' ? 'Kiểm tra tất cả' : 'Nộp bài'; ['check', 'check-bottom', 'print'].forEach(id => { $(id).disabled = !state.exam; }); lockAnswers(); refreshCenter();
  }
  function refreshCenter() {
    const root = readProgress(), current = progressFor(root, state.grade), attempts = Number(current.stats.attempts || 0), correct = Number(current.stats.correct || 0), mode = MODES[state.mode], count = state.exam ? state.exam.questions.length : mode.count;
    $('progress-grade').textContent = String(state.grade); $('progress-attempts').textContent = String(attempts); $('progress-accuracy').textContent = (attempts ? Math.round(correct / attempts * 100) : 0) + '%'; $('progress-wrong').textContent = String(current.wrong.length); $('progress-streak').textContent = String(current.stats.streak || 0); $('progress-hints').textContent = String(current.stats.hints || 0); $('wrong-mode-label').textContent = current.wrong.length ? current.wrong.length + ' dạng cần ôn' : 'Chưa có câu cần ôn'; $('active-mode-label').textContent = mode.label; $('active-topic-label').textContent = TOPICS[state.topic] || TOPICS.all; $('learning-center-summary').textContent = mode.label + ' · Lớp ' + state.grade + ' · ' + count + ' câu' + (state.topic !== 'all' ? ' · ' + TOPICS[state.topic] : '');
    document.querySelectorAll('[data-hsg-mode]').forEach(button => { const active = button.dataset.hsgMode === state.mode; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); }); document.querySelectorAll('[data-hsg-topic]').forEach(button => { const active = button.dataset.hsgTopic === state.topic; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  }
  function selectMode(mode) { if (!MODES[mode] || mode === state.mode || !canDiscard()) return; state.mode = mode; if (mode !== 'practice') state.topic = 'all'; generateExam(false); }
  function bindEvents() {
    $('grade-select').addEventListener('change', event => { if (!canDiscard()) return void (event.target.value = String(state.grade)); setGrade(event.target.value, true); });
    document.querySelectorAll('[data-grade-choice]').forEach(button => button.addEventListener('click', () => { const grade = Number(button.dataset.gradeChoice); if (grade !== state.grade && canDiscard()) setGrade(grade, true); }));
    $('learning-center-toggle').addEventListener('click', () => { const content = $('learning-center-content'), open = content.hidden; content.hidden = !open; $('learning-center').classList.toggle('is-open', open); $('learning-center-toggle').setAttribute('aria-expanded', String(open)); });
    document.querySelectorAll('[data-hsg-mode]').forEach(button => button.addEventListener('click', () => selectMode(button.dataset.hsgMode)));
    document.querySelectorAll('[data-hsg-topic]').forEach(button => button.addEventListener('click', () => { if (!button.disabled && canDiscard()) { state.topic = button.dataset.hsgTopic; state.mode = 'practice'; generateExam(false); } }));
    $('clear-wrong').addEventListener('click', () => { const root = readProgress(), current = progressFor(root, state.grade); if (!current.wrong.length || !window.confirm('Xóa toàn bộ sổ câu sai của lớp ' + state.grade + ' trên thiết bị này?')) return; root.wrong[current.key] = []; writeStore(window.localStorage, PROGRESS_KEY, root); refreshCenter(); if (state.mode === 'wrong') generateExam(false); });
    $('generate').addEventListener('click', () => generateExam(true)); $('check').addEventListener('click', checkExam); $('check-bottom').addEventListener('click', checkExam); $('answers').addEventListener('click', toggleAnswers); $('answers-bottom').addEventListener('click', toggleAnswers); $('print').addEventListener('click', preparePrint);
    window.addEventListener('beforeunload', event => { saveDraft(); if (state.dirty && !state.checked) { event.preventDefault(); event.returnValue = ''; } }); window.addEventListener('pagehide', saveDraft); window.addEventListener('afterprint', () => $('print-root').replaceChildren());
  }
  function publicState() { return { grade: state.grade, mode: state.mode, topic: state.topic, questions: state.exam ? state.exam.questions : [] }; }
  function fireRendered() { document.dispatchEvent(new CustomEvent('imath:hsg-rendered', { detail: publicState() })); }
  window.IMathHSGPracticeAPI = {
    getState: publicState, checkSingle,
    markAlternative(index, correct, label, diagnosis) { state.altAnswers[index] = { correct: Boolean(correct), label: String(label || 'Câu trả lời tương tác'), diagnosis: String(diagnosis || '') }; state.dirty = true; saveDraft(); },
    setAnswer(index, value) { const input = $('answer-' + index); if (input) { input.value = String(value == null ? '' : value); input.dispatchEvent(new Event('input', { bubbles: true })); } },
    isCorrect(input, answer) { return window.IMathHSGBank.isCorrectAnswer(normalizeTypedUnits(input), answer); }
  };
  function initialise() {
    ['generate', 'check', 'check-bottom', 'answers', 'answers-bottom', 'print'].forEach(id => { const button = $(id), iconName = id === 'generate' ? 'refresh' : id.startsWith('check') ? 'check' : id.startsWith('answers') ? 'list' : 'print', label = button.textContent.trim(); button.innerHTML = icon(iconName) + '<span>' + label + '</span>'; });
    $('quality-icon').innerHTML = icon('shield'); $('challenge-icon').innerHTML = icon('brain'); bindEvents();
    const draft = readDraft();
    if (draft && Number(draft.grade) === queryGrade() && MODES[draft.mode]) {
      state.grade = Number(draft.grade); state.mode = draft.mode; state.topic = TOPICS[draft.topic] ? draft.topic : 'all'; state.exam = draft.exam;
      state.hintsUsed = draft.hintsUsed && typeof draft.hintsUsed === 'object' ? draft.hintsUsed : {};
      state.altAnswers = draft.altAnswers && typeof draft.altAnswers === 'object' ? draft.altAnswers : {};
      state.dirty = Boolean(draft.dirty || Object.keys(draft.answers || {}).length); state.checked = false;
      setGrade(state.grade, false); renderExam(); hideResults(); $('answer-panel').hidden = true; restoreDraftAnswers(draft); refreshToolbar(); startTimer(MODES[state.mode].minutes, draft.timerEndsAt);
      $('status-line').textContent += ' Đã khôi phục bài đang làm sau khi tải lại trang.';
    } else {
      setGrade(queryGrade(), false); generateExam(false);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise); else initialise();
})(window, document);
