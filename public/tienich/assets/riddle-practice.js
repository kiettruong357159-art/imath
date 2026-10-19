(function () {
  'use strict';

  const bankData = window.IMathRiddleBank;
  if (!bankData || !Array.isArray(bankData.questions)) return;

  const $ = (selector) => document.querySelector(selector);
  const elements = {
    topic: $('#topic-select'), level: $('#level-select'), parentMode: $('#parent-mode'),
    generate: $('#generate'), check: $('#check'), checkBottom: $('#check-bottom'),
    answers: $('#answers'), answersBottom: $('#answers-bottom'), print: $('#print'),
    list: $('#riddle-list'), status: $('#status-line'), subtitle: $('#riddle-subtitle'),
    badge: $('#session-badge'), results: $('#results'), answerPanel: $('#answer-panel'),
    progressSummary: $('#progress-summary'), clearProgress: $('#clear-progress')
  };
  const countButtons = Array.from(document.querySelectorAll('[data-count]'));
  const storageKey = 'imath_riddle_used_ids_v1';
  const progressKey = 'imath_riddle_progress_v1';
  const draftKey = 'imath_riddle_active_draft_v1';
  const state = { count: 10, questions: [], parentMode: false, usedIds: getUsedIds(), progress: getProgress(), checked: false, recorded: false };

  function readDraft() {
    try {
      const draft = JSON.parse(sessionStorage.getItem(draftKey) || 'null');
      return draft && Array.isArray(draft.questionIds) && Date.now() - Number(draft.updatedAt || 0) < 12 * 60 * 60 * 1000 ? draft : null;
    } catch (error) { return null; }
  }

  function collectResponses() {
    const responses = {};
    state.questions.forEach((question) => {
      const response = responseFor(question);
      if (response) responses[question.id] = response;
    });
    return responses;
  }

  function saveDraft() {
    if (!state.questions.length) return;
    const draft = {
      questionIds: state.questions.map((question) => question.id),
      responses: collectResponses(),
      count: state.count,
      topic: elements.topic.value,
      level: elements.level.value,
      parentMode: state.parentMode,
      updatedAt: Date.now()
    };
    try { sessionStorage.setItem(draftKey, JSON.stringify(draft)); } catch (error) { /* Draft saving is optional. */ }
  }

  function restoreDraft() {
    const draft = readDraft();
    if (!draft) return false;
    // A topic link must not restore a draft belonging to a different topic.
    const requestedTopic = new URLSearchParams(window.location.search).get('chu-de');
    const hasRequestedTopic = Array.from(elements.topic.options).some((option) => option.value === requestedTopic);
    if (hasRequestedTopic && draft.topic !== requestedTopic) return false;
    const byId = new Map(bankData.questions.map((question) => [question.id, question]));
    const restored = draft.questionIds.map((id) => byId.get(id)).filter(Boolean);
    if (!restored.length || restored.length !== draft.questionIds.length) return false;
    if (Array.from(elements.topic.options).some((option) => option.value === draft.topic)) elements.topic.value = draft.topic;
    if (Array.from(elements.level.options).some((option) => option.value === draft.level)) elements.level.value = draft.level;
    state.count = [5, 10, 15].includes(Number(draft.count)) ? Number(draft.count) : restored.length;
    countButtons.forEach((button) => {
      const active = Number(button.dataset.count) === state.count;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    state.parentMode = Boolean(draft.parentMode);
    elements.parentMode.checked = state.parentMode;
    state.questions = restored;
    state.checked = false;
    state.recorded = false;
    renderQuestions();
    Object.entries(draft.responses || {}).forEach(([id, value]) => {
      const inputs = Array.from(document.querySelectorAll('input[data-question-id="' + id + '"]'));
      inputs.forEach((input) => {
        if (input.type === 'radio') input.checked = input.value === value;
        else input.value = value;
      });
    });
    updateToolbar(false);
    elements.status.textContent += ' Đã khôi phục bài đang làm sau khi tải lại trang.';
    return true;
  }

  function getUsedIds() {
    try {
      const stored = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
      return new Set(Array.isArray(stored) ? stored.filter((id) => typeof id === 'string') : []);
    } catch (error) {
      return new Set();
    }
  }

  function saveUsedIds() {
    try { sessionStorage.setItem(storageKey, JSON.stringify(Array.from(state.usedIds))); } catch (error) { /* Session storage is optional. */ }
  }

  function getProgress() {
    const empty = { seenIds: [], answered: 0, correct: 0 };
    try {
      const stored = JSON.parse(localStorage.getItem(progressKey) || 'null');
      if (!stored || typeof stored !== 'object') return empty;
      return {
        seenIds: Array.isArray(stored.seenIds) ? stored.seenIds.filter((id) => typeof id === 'string').slice(-600) : [],
        answered: Number.isFinite(stored.answered) && stored.answered >= 0 ? stored.answered : 0,
        correct: Number.isFinite(stored.correct) && stored.correct >= 0 ? stored.correct : 0
      };
    } catch (error) { return empty; }
  }

  function saveProgress() {
    try { localStorage.setItem(progressKey, JSON.stringify(state.progress)); } catch (error) { /* Local storage is optional. */ }
  }

  function rememberSeen(questions) {
    const known = new Set(state.progress.seenIds);
    questions.forEach((question) => known.add(question.id));
    state.progress.seenIds = Array.from(known).slice(-600);
    saveProgress();
    updateProgress();
  }

  function updateProgress() {
    if (!elements.progressSummary) return;
    const total = bankData.questions.length;
    const accuracy = state.progress.answered ? Math.round((state.progress.correct / state.progress.answered) * 100) : 0;
    elements.progressSummary.textContent = 'Đã khám phá ' + state.progress.seenIds.length + '/' + total + ' câu · Làm đúng ' + state.progress.correct + '/' + state.progress.answered + ' câu' + (state.progress.answered ? ' (' + accuracy + '%).' : '.');
  }

  function clearProgress() {
    state.progress = { seenIds: [], answered: 0, correct: 0 };
    try { localStorage.removeItem(progressKey); } catch (error) { /* Local storage is optional. */ }
    updateProgress();
  }

  function normalizeFillAnswer(value) {
    return String(value || '')
      .toLocaleLowerCase('vi-VN')
      .normalize('NFC')
      .trim()
      .replace(/\s+/g, ' ');
  }

  function normalizeChoiceAnswer(value) {
    return String(value || '')
      .normalize('NFC')
      .trim();
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapWith = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapWith]] = [copy[swapWith], copy[index]];
    }
    return copy;
  }

  function makeElement(name, className, text) {
    const node = document.createElement(name);
    if (className) node.className = className;
    if (typeof text === 'string') node.textContent = text;
    return node;
  }

  function selectedTopic() { return elements.topic.value; }
  function selectedLevel() { return elements.level.value; }

  function initializeFromUrl() {
    const topic = new URLSearchParams(window.location.search).get('chu-de');
    if (!topic) return;
    const matchingOption = Array.from(elements.topic.options).some((option) => option.value === topic);
    if (matchingOption) elements.topic.value = topic;
  }

  function filterQuestions(topic, level) {
    return bankData.questions.filter((question) => {
      return (topic === 'all' || question.topic === topic) && (level === 'all' || question.level === level);
    });
  }

  function selectVariedQuestions(pool, count) {
    const picked = [];
    const usedEntities = new Set();
    const shuffled = shuffle(pool);

    shuffled.forEach((question) => {
      if (picked.length >= count) return;
      if (question.entityKey && usedEntities.has(question.entityKey)) return;
      picked.push(question);
      if (question.entityKey) usedEntities.add(question.entityKey);
    });

    // Khi một chủ đề quá nhỏ, cho phép lấy thêm theo mã câu để vẫn đủ lượt chơi.
    shuffled.forEach((question) => {
      if (picked.length >= count || picked.some((item) => item.id === question.id)) return;
      picked.push(question);
    });
    return picked;
  }

  function selectQuestions() {
    const topic = selectedTopic();
    const level = selectedLevel();
    let pool = filterQuestions(topic, level).filter((question) => !state.usedIds.has(question.id));
    let fallbackUsed = false;

    if (pool.length < state.count) {
      const broaderPool = filterQuestions(topic, 'all').filter((question) => !state.usedIds.has(question.id));
      if (broaderPool.length >= state.count) {
        pool = broaderPool;
        fallbackUsed = true;
      }
    }
    if (pool.length < state.count) {
      const newRoundPool = filterQuestions(topic, 'all');
      if (newRoundPool.length >= state.count) {
        state.usedIds = new Set(Array.from(state.usedIds).filter((id) => !newRoundPool.some((item) => item.id === id)));
        pool = newRoundPool;
        fallbackUsed = true;
      }
    }
    if (pool.length < state.count) {
      const allPool = bankData.questions.filter((question) => !state.usedIds.has(question.id));
      if (allPool.length >= state.count) {
        pool = allPool;
        fallbackUsed = true;
      }
    }

    const selected = selectVariedQuestions(pool, state.count);
    selected.forEach((question) => state.usedIds.add(question.id));
    saveUsedIds();
    rememberSeen(selected);
    return { selected, fallbackUsed };
  }

  function answerLabel(question) {
    return question.answers[0];
  }

  function createHint(question) {
    const wrap = makeElement('div', 'hint');
    const icon = makeElement('span', '', '💡');
    icon.setAttribute('aria-hidden', 'true');
    wrap.append(icon, document.createTextNode(question.hint));
    wrap.hidden = true;
    return wrap;
  }

  function svgNode(name, attributes) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.keys(attributes || {}).forEach((key) => node.setAttribute(key, String(attributes[key])));
    return node;
  }

  function addShape(svg, shape, x, y, size, color) {
    if (shape === 'circle') svg.append(svgNode('circle', { cx: x, cy: y, r: size / 2, fill: color }));
    else if (shape === 'square') svg.append(svgNode('rect', { x: x - size / 2, y: y - size / 2, width: size, height: size, rx: 4, fill: color }));
    else if (shape === 'triangle') svg.append(svgNode('path', { d: 'M ' + x + ' ' + (y - size / 2) + ' L ' + (x + size / 2) + ' ' + (y + size / 2) + ' L ' + (x - size / 2) + ' ' + (y + size / 2) + ' Z', fill: color }));
    else if (shape === 'star') svg.append(svgNode('path', { d: starPath(x, y, size / 2, size / 4), fill: color }));
    else if (shape === 'drop') svg.append(svgNode('path', { d: 'M ' + x + ' ' + (y - size / 2) + ' C ' + (x - size / 2) + ' ' + (y - size / 8) + ' ' + (x - size / 2) + ' ' + (y + size / 2) + ' ' + x + ' ' + (y + size / 2) + ' C ' + (x + size / 2) + ' ' + (y + size / 2) + ' ' + (x + size / 2) + ' ' + (y - size / 8) + ' ' + x + ' ' + (y - size / 2) + ' Z', fill: color }));
    else if (shape === 'leaf') svg.append(svgNode('path', { d: 'M ' + (x - size / 2) + ' ' + y + ' Q ' + x + ' ' + (y - size / 2) + ' ' + (x + size / 2) + ' ' + y + ' Q ' + x + ' ' + (y + size / 2) + ' ' + (x - size / 2) + ' ' + y + ' Z', fill: color }));
  }

  function starPath(cx, cy, outer, inner) {
    let path = '';
    for (let point = 0; point < 10; point += 1) {
      const radius = point % 2 ? inner : outer;
      const angle = (-Math.PI / 2) + point * Math.PI / 5;
      path += (point ? ' L ' : 'M ') + (cx + Math.cos(angle) * radius) + ' ' + (cy + Math.sin(angle) * radius);
    }
    return path + ' Z';
  }

  function createVisual(question) {
    if (!question.visual) return null;
    const visual = question.visual;
    const figure = makeElement('figure', 'riddle-visual');
    const svg = svgNode('svg', { viewBox: '0 0 360 132', role: 'img', 'aria-label': visual.description, focusable: 'false' });
    const background = svgNode('rect', { x: 1, y: 1, width: 358, height: 130, rx: 14, fill: '#f8fcff', stroke: '#d5e8fb', 'stroke-width': 2 });
    svg.append(background);

    if (visual.type === 'count-shapes') {
      const columns = Math.min(5, visual.count);
      for (let index = 0; index < visual.count; index += 1) {
        const row = Math.floor(index / columns);
        const column = index % columns;
        addShape(svg, visual.shape, 67 + column * 57, 42 + row * 46, 28, visual.color);
      }
    } else if (visual.type === 'number-line') {
      const width = 270;
      const xStart = 45;
      const y = 63;
      const steps = (visual.end - visual.start) / visual.step;
      svg.append(svgNode('line', { x1: xStart, y1: y, x2: xStart + width, y2: y, stroke: '#335f94', 'stroke-width': 3, 'stroke-linecap': 'round' }));
      for (let index = 0; index <= steps; index += 1) {
        const value = visual.start + index * visual.step;
        const x = xStart + width * (index / steps);
        svg.append(svgNode('line', { x1: x, y1: y - 10, x2: x, y2: y + 10, stroke: '#335f94', 'stroke-width': 2 }));
        const label = svgNode('text', { x: x, y: 94, 'text-anchor': 'middle', fill: '#31577f', 'font-size': 15, 'font-family': 'Arial, sans-serif' });
        label.textContent = value;
        svg.append(label);
        if (value === visual.value) svg.append(svgNode('circle', { cx: x, cy: y - 22, r: 8, fill: '#ed6d42' }));
      }
    } else if (visual.type === 'clock') {
      const cx = 180; const cy = 66; const radius = 48;
      svg.append(svgNode('circle', { cx, cy, r: radius, fill: '#fff', stroke: '#315f98', 'stroke-width': 3 }));
      for (let hour = 1; hour <= 12; hour += 1) {
        const angle = hour * Math.PI / 6 - Math.PI / 2;
        const text = svgNode('text', { x: cx + Math.cos(angle) * 37, y: cy + Math.sin(angle) * 37 + 5, 'text-anchor': 'middle', fill: '#274e7d', 'font-size': 12, 'font-family': 'Arial, sans-serif', 'font-weight': '700' });
        text.textContent = hour;
        svg.append(text);
      }
      const minuteAngle = visual.minute * Math.PI / 30 - Math.PI / 2;
      const hourAngle = ((visual.hour % 12) + visual.minute / 60) * Math.PI / 6 - Math.PI / 2;
      svg.append(svgNode('line', { x1: cx, y1: cy, x2: cx + Math.cos(hourAngle) * 25, y2: cy + Math.sin(hourAngle) * 25, stroke: '#ed6d42', 'stroke-width': 7, 'stroke-linecap': 'round' }));
      svg.append(svgNode('line', { x1: cx, y1: cy, x2: cx + Math.cos(minuteAngle) * 37, y2: cy + Math.sin(minuteAngle) * 37, stroke: '#1e6fd0', 'stroke-width': 4, 'stroke-linecap': 'round' }));
      svg.append(svgNode('circle', { cx, cy, r: 5, fill: '#17385f' }));
    } else if (visual.type === 'sequence') {
      const colors = { circle: '#ec6d64', square: '#efbc32', triangle: '#3b9ee9', star: '#9b78db' };
      visual.shapes.forEach((shape, index) => addShape(svg, shape, 65 + index * 65, 64, 34, colors[shape]));
      if (visual.next) {
        const questionMark = svgNode('text', { x: 65 + visual.shapes.length * 65, y: 73, 'text-anchor': 'middle', fill: '#6984a2', 'font-size': 36, 'font-family': 'Arial, sans-serif', 'font-weight': '700' });
        questionMark.textContent = '?';
        svg.append(questionMark);
      }
    } else if (visual.type === 'sun-rays') {
      const cx = 180; const cy = 66;
      for (let index = 0; index < visual.count; index += 1) {
        const angle = index * 2 * Math.PI / visual.count;
        svg.append(svgNode('line', { x1: cx + Math.cos(angle) * 31, y1: cy + Math.sin(angle) * 31, x2: cx + Math.cos(angle) * 48, y2: cy + Math.sin(angle) * 48, stroke: '#f5b700', 'stroke-width': 5, 'stroke-linecap': 'round' }));
      }
      svg.append(svgNode('circle', { cx, cy, r: 25, fill: '#ffd450' }));
    }
    figure.append(svg);
    return figure;
  }

  function renderChoice(card, question, index) {
    const group = makeElement('div', 'riddle-options');
    const name = 'riddle-' + question.id;
    shuffle(question.options).forEach((option, optionIndex) => {
      const label = makeElement('label', 'riddle-option');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = name;
      input.value = option;
      input.dataset.questionId = question.id;
      input.id = name + '-' + optionIndex;
      const text = makeElement('span', '', option);
      label.htmlFor = input.id;
      label.append(input, text);
      group.append(label);
    });
    card.append(group);
  }

  function renderFill(card, question) {
    const row = makeElement('div', 'riddle-answer-row');
    const label = makeElement('label');
    const icon = makeElement('span', 'answer-icon', '✎');
    icon.setAttribute('aria-hidden', 'true');
    label.append(icon, document.createTextNode('Con trả lời'));
    const input = document.createElement('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.maxLength = 100;
    input.placeholder = 'Nhập đáp án';
    input.dataset.questionId = question.id;
    input.setAttribute('aria-label', 'Đáp án cho câu ' + (state.questions.indexOf(question) + 1));
    row.append(label, input);
    card.append(row);
  }

  function renderParentAnswer(card, question) {
    const flipButton = makeElement('button', 'flip-answer', '👀 Lật đáp án');
    flipButton.type = 'button';
    const answer = makeElement('p', 'parent-answer', 'Đáp án: ' + answerLabel(question));
    answer.hidden = true;
    flipButton.addEventListener('click', () => {
      answer.hidden = !answer.hidden;
      flipButton.textContent = answer.hidden ? '👀 Lật đáp án' : '🙈 Ẩn đáp án';
    });
    card.append(flipButton, answer);
  }

  function replaceQuestion(question) {
    const currentIds = new Set(state.questions.map((item) => item.id));
    const topic = selectedTopic();
    const level = selectedLevel();
    let pool = filterQuestions(topic, level).filter((item) => !currentIds.has(item.id) && !state.usedIds.has(item.id));
    if (!pool.length) pool = filterQuestions(topic, 'all').filter((item) => !currentIds.has(item.id) && !state.usedIds.has(item.id));
    if (!pool.length) pool = bankData.questions.filter((item) => !currentIds.has(item.id) && !state.usedIds.has(item.id));
    if (!pool.length) pool = bankData.questions.filter((item) => !currentIds.has(item.id));
    const replacement = shuffle(pool)[0];
    if (!replacement) return;
    const index = state.questions.findIndex((item) => item.id === question.id);
    if (index < 0) return;
    state.questions[index] = replacement;
    state.usedIds.add(replacement.id);
    saveUsedIds();
    rememberSeen([replacement]);
    state.checked = false;
    state.recorded = false;
    elements.results.hidden = true;
    elements.answerPanel.hidden = true;
    renderQuestions();
    updateToolbar(false);
    saveDraft();
  }

  function renderQuestions() {
    elements.list.replaceChildren();
    state.questions.forEach((question, index) => {
      const card = makeElement('article', 'riddle-card-item');
      card.dataset.questionId = question.id;
      const head = makeElement('header', 'riddle-card-item__head');
      const number = makeElement('span', 'riddle-number', String(index + 1));
      const info = document.createElement('div');
      info.append(makeElement('span', 'riddle-topic', bankData.topicLabels[question.topic]));
      info.append(makeElement('span', 'riddle-level', levelText(question.level)));
      head.append(number, info);
      const prompt = makeElement('h3', 'riddle-prompt', question.prompt);
      const replaceButton = makeElement('button', 'replace-question', '↻ Đổi câu');
      replaceButton.type = 'button';
      replaceButton.setAttribute('aria-label', 'Đổi câu đố số ' + (index + 1));
      replaceButton.addEventListener('click', () => replaceQuestion(question));
      const hintButton = makeElement('button', 'hint-toggle', '💡 Xem một gợi ý');
      hintButton.type = 'button';
      hintButton.setAttribute('aria-expanded', 'false');
      const hint = createHint(question);
      hintButton.addEventListener('click', () => {
        hint.hidden = !hint.hidden;
        hintButton.setAttribute('aria-expanded', String(!hint.hidden));
        hintButton.textContent = hint.hidden ? '💡 Xem một gợi ý' : 'Ẩn gợi ý';
      });
      card.append(head, replaceButton, prompt);
      const visual = createVisual(question);
      if (visual) card.append(visual);
      if (state.parentMode) renderParentAnswer(card, question);
      else if (question.type === 'choice') renderChoice(card, question, index);
      else renderFill(card, question);
      card.append(hintButton, hint);
      elements.list.append(card);
    });
  }

  function levelText(level) {
    return 'Mức ' + bankData.levelLabels[level];
  }

  function updateToolbar(fallbackUsed) {
    const subject = selectedTopic() === 'all' ? 'nhiều chủ đề' : bankData.topicLabels[selectedTopic()];
    const level = selectedLevel() === 'all' ? 'nhiều mức' : bankData.levelLabels[selectedLevel()];
    const suffix = fallbackUsed ? ' Một vài câu phù hợp được bổ sung để đủ lượt chơi.' : '';
    elements.status.textContent = state.parentMode
      ? 'Chế độ cùng bố mẹ · ' + state.count + ' câu ' + subject + '.'
      : state.count + ' câu ' + subject + ' · mức ' + level + '.' + suffix;
    elements.subtitle.textContent = state.parentMode
      ? 'Bố mẹ đọc câu hỏi, cùng con suy nghĩ rồi bấm lật đáp án.'
      : 'Đọc kỹ câu hỏi, suy nghĩ rồi mới xem gợi ý nhé.';
    elements.badge.textContent = state.count + ' câu';
    elements.check.disabled = state.parentMode;
    elements.checkBottom.disabled = state.parentMode;
    elements.check.classList.toggle('is-disabled', state.parentMode);
    elements.checkBottom.classList.toggle('is-disabled', state.parentMode);
  }

  function generateQuestions(shouldScroll) {
    const result = selectQuestions();
    state.questions = result.selected;
    state.checked = false;
    state.recorded = false;
    elements.results.hidden = true;
    elements.answerPanel.hidden = true;
    renderQuestions();
    updateToolbar(result.fallbackUsed);
    saveDraft();
    const workspace = $('#riddle-workspace');
    if (shouldScroll && workspace) workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function responseFor(question) {
    if (question.type === 'choice') {
      const picked = document.querySelector('input[data-question-id="' + question.id + '"]:checked');
      return picked ? picked.value : '';
    }
    const input = document.querySelector('input[data-question-id="' + question.id + '"]');
    return input ? input.value.trim() : '';
  }

  function isCorrect(question, response) {
    const normalizeAnswer = question.type === 'choice' ? normalizeChoiceAnswer : normalizeFillAnswer;
    const candidate = normalizeAnswer(response);
    return candidate.length > 0 && question.answers.some((answer) => normalizeAnswer(answer) === candidate);
  }

  function markQuestion(question, correct, response) {
    const card = document.querySelector('[data-question-id="' + question.id + '"]');
    if (!card) return;
    card.classList.remove('is-correct', 'is-wrong');
    const oldFeedback = card.querySelector('.riddle-feedback');
    if (oldFeedback) oldFeedback.remove();
    if (!response) {
      const feedback = makeElement('p', 'riddle-feedback', 'Con chưa trả lời câu này.');
      card.append(feedback);
      return;
    }
    card.classList.add(correct ? 'is-correct' : 'is-wrong');
    const feedback = makeElement('p', 'riddle-feedback ' + (correct ? 'is-correct' : 'is-wrong'), correct ? '✓ Chính xác, con làm tốt lắm!' : 'Chưa đúng, con xem lại gợi ý hoặc lời giải nhé.');
    card.append(feedback);
    if (question.type === 'choice') {
      Array.from(card.querySelectorAll('.riddle-option')).forEach((label) => {
        const input = label.querySelector('input');
        if (!input) return;
        if (normalizeChoiceAnswer(input.value) === normalizeChoiceAnswer(question.answers[0])) label.classList.add('is-correct');
        if (input.checked && !correct) label.classList.add('is-wrong');
      });
    } else {
      const input = card.querySelector('input[data-question-id]');
      if (input) input.classList.add(correct ? 'is-correct' : 'is-wrong');
    }
  }

  function buildResults(items, correctCount) {
    elements.results.replaceChildren();
    const summary = makeElement('div', 'results__summary');
    const score = makeElement('div', 'results__score', String(correctCount) + '/' + state.questions.length);
    const copy = document.createElement('div');
    const title = makeElement('h2', '', correctCount === state.questions.length ? 'Xuất sắc! Con đã giải đúng tất cả.' : 'Con đã hoàn thành lượt câu đố!');
    const message = correctCount >= Math.ceil(state.questions.length * .8)
      ? 'Con quan sát và suy luận rất tốt. Hãy thử một lượt chủ đề khác nhé!'
      : 'Mỗi câu chưa đúng là một điều mới để khám phá. Con xem lời giải rồi thử lại nhé!';
    copy.append(title, makeElement('p', '', 'Đúng ' + correctCount + '/' + state.questions.length + ' câu · ' + message));
    summary.append(score, copy);
    const details = makeElement('div', 'results__details');
    items.forEach((item, index) => {
      const line = makeElement('article', 'result-line ' + (item.correct ? 'is-correct' : 'is-wrong'));
      line.append(makeElement('span', '', String(index + 1)));
      const text = document.createElement('div');
      text.append(makeElement('strong', '', item.question.prompt));
      const childAnswer = item.response || 'Chưa trả lời';
      text.append(makeElement('p', '', 'Con trả lời: ' + childAnswer + ' · Đáp án: ' + answerLabel(item.question)));
      line.append(text, makeElement('span', 'result-line__tag', item.correct ? 'Đúng' : 'Cần xem lại'));
      details.append(line);
    });
    elements.results.append(summary, details);
    elements.results.hidden = false;
  }

  function checkAnswers() {
    if (state.parentMode) return;
    const items = state.questions.map((question) => {
      const response = responseFor(question);
      const correct = isCorrect(question, response);
      markQuestion(question, correct, response);
      return { question, response, correct };
    });
    const correctCount = items.filter((item) => item.correct).length;
    if (!state.recorded) {
      const answeredCount = items.filter((item) => item.response).length;
      const correctAnswered = items.filter((item) => item.correct).length;
      state.progress.answered += answeredCount;
      state.progress.correct += correctAnswered;
      state.recorded = true;
      saveProgress();
      updateProgress();
    }
    state.checked = true;
    saveDraft();
    buildResults(items, correctCount);
    elements.status.textContent = 'Con đã trả lời đúng ' + correctCount + '/' + state.questions.length + ' câu.';
    elements.results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showAnswers() {
    elements.answerPanel.replaceChildren();
    elements.answerPanel.append(makeElement('h2', '', 'Đáp án và lời giải'));
    elements.answerPanel.append(makeElement('p', '', 'Con hãy đọc lại cách giải để ghi nhớ điều thú vị trong mỗi câu đố.'));
    const list = makeElement('div', 'answer-list');
    state.questions.forEach((question, index) => {
      const line = makeElement('article', 'answer-line');
      line.append(makeElement('span', '', String(index + 1)));
      const copy = document.createElement('div');
      copy.append(makeElement('strong', '', question.prompt));
      copy.append(makeElement('p', '', 'Đáp án: ' + answerLabel(question) + '. ' + question.explanation));
      line.append(copy);
      list.append(line);
    });
    elements.answerPanel.append(list);
    elements.answerPanel.hidden = false;
    elements.answerPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function setCount(button) {
    state.count = Number(button.dataset.count) || 5;
    countButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  }

  function handleParentMode() {
    state.parentMode = elements.parentMode.checked;
    if (state.questions.length) {
      state.checked = false;
      state.recorded = false;
      elements.results.hidden = true;
      renderQuestions();
      updateToolbar(false);
      saveDraft();
    }
  }

  countButtons.forEach((button) => button.addEventListener('click', () => {
    setCount(button);
    generateQuestions(true);
  }));
  elements.topic.addEventListener('change', () => generateQuestions(true));
  elements.level.addEventListener('change', () => generateQuestions(true));
  elements.generate.addEventListener('click', () => generateQuestions(true));
  elements.check.addEventListener('click', checkAnswers);
  elements.checkBottom.addEventListener('click', checkAnswers);
  elements.answers.addEventListener('click', showAnswers);
  elements.answersBottom.addEventListener('click', showAnswers);
  elements.parentMode.addEventListener('change', handleParentMode);
  elements.list.addEventListener('input', saveDraft);
  elements.list.addEventListener('change', saveDraft);
  window.addEventListener('pagehide', saveDraft);
  elements.print.addEventListener('click', () => window.print());
  if (elements.clearProgress) elements.clearProgress.addEventListener('click', clearProgress);

  initializeFromUrl();
  updateProgress();
  if (!restoreDraft()) generateQuestions(false);
}());
