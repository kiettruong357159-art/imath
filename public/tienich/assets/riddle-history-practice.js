(function () {
  'use strict';

  const bank = window.IMathHistoryRiddleBank;
  const STORAGE = {
    active: 'imath-history-active-v2',
    progress: 'imath-history-progress-v2',
    used: 'imath-history-used-v2'
  };

  const elements = {
    config: document.getElementById('history-config'),
    region: document.getElementById('history-region'),
    worldTopicField: document.getElementById('history-world-topic-field'),
    worldTopic: document.getElementById('history-world-topic'),
    level: document.getElementById('history-level'),
    generate: document.getElementById('history-generate'),
    availability: document.getElementById('history-availability'),
    countButtons: document.querySelectorAll('.history-count button'),
    quickCountButtons: document.querySelectorAll('[data-quick-count]'),
    list: document.getElementById('history-list'),
    questionNav: document.getElementById('history-question-nav'),
    badge: document.getElementById('history-session-badge'),
    progressLabel: document.getElementById('history-progress-label'),
    progressPercent: document.getElementById('history-progress-percent'),
    progressFill: document.getElementById('history-progress-fill'),
    previous: document.getElementById('history-previous'),
    next: document.getElementById('history-next'),
    check: document.getElementById('history-check'),
    answers: document.getElementById('history-answers'),
    print: document.getElementById('history-print'),
    results: document.getElementById('history-results'),
    printRoot: document.getElementById('history-print-root'),
    status: document.getElementById('history-status-live'),
    reviewWrong: document.getElementById('history-review-wrong'),
    attempts: document.getElementById('history-stat-attempts'),
    answered: document.getElementById('history-stat-answered'),
    correct: document.getElementById('history-stat-correct'),
    accuracy: document.getElementById('history-stat-accuracy'),
    badgeGrid: document.getElementById('history-badge-grid'),
    menuButton: document.getElementById('history-menu-button'),
    mobileNav: document.getElementById('history-mobile-nav'),
    workspace: document.getElementById('history-workspace')
  };

  if (!bank || !Array.isArray(bank.questions)) {
    if (elements.availability) elements.availability.textContent = 'Không tải được kho câu hỏi. Vui lòng tải lại trang.';
    if (elements.list) elements.list.textContent = 'Kho câu đố đang tạm thời chưa sẵn sàng.';
    return;
  }

  const questionById = new Map(bank.questions.map(function (question) { return [question.id, question]; }));
  const emptyProgress = {
    attempts: 0,
    answered: 0,
    correct: 0,
    vietnamCorrect: 0,
    worldCorrect: 0,
    hardCorrect: 0,
    bestStreak: 0,
    lastWrongIds: [],
    seenFactIds: []
  };
  let progress = Object.assign({}, emptyProgress, readStorage(STORAGE.progress, {}));
  let configCount = 10;
  let state = {
    questions: [],
    currentIndex: 0,
    answers: {},
    optionOrders: {},
    hints: {},
    revealed: {},
    checked: false,
    score: null
  };

  function readStorage(key, fallback, sessionOnly) {
    try {
      const storage = sessionOnly ? sessionStorage : localStorage;
      return JSON.parse(storage.getItem(key) || JSON.stringify(fallback));
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value, sessionOnly) {
    try {
      const storage = sessionOnly ? sessionStorage : localStorage;
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* Browser storage is optional. */
    }
  }

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function make(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function announce(message) {
    elements.status.textContent = '';
    window.setTimeout(function () { elements.status.textContent = message; }, 20);
  }

  function worldTopicOf(question) {
    if (/^history-world-cn-/.test(question.id)) return 'trung-quoc';
    if (/^history-world-us-/.test(question.id)) return 'hoa-ky';
    if (/^history-world-eng-/.test(question.id)) return 'anh';
    return 'van-minh-the-gioi';
  }

  function matchesWorldTopic(question) {
    if (elements.region.value !== 'the-gioi' || elements.worldTopic.value === 'all') return true;
    return question.region === 'the-gioi' && worldTopicOf(question) === elements.worldTopic.value;
  }

  function syncWorldTopicVisibility() {
    elements.worldTopicField.hidden = elements.region.value !== 'the-gioi';
  }

  function configuredPool() {
    return bank.questions.filter(function (question) {
      return (elements.region.value === 'all' || question.region === elements.region.value) &&
        matchesWorldTopic(question) &&
        (elements.level.value === 'all' || question.level === elements.level.value);
    });
  }

  function uniqueFactCount(questions) {
    return new Set(questions.map(function (question) { return question.factId || question.id; })).size;
  }

  function maximumAvailable() {
    const pool = configuredPool();
    return Math.min(pool.length, uniqueFactCount(pool));
  }

  function setCount(count) {
    const max = maximumAvailable();
    configCount = Math.min(Number(count), max || Number(count));
    elements.countButtons.forEach(function (button) {
      const active = Number(button.dataset.count) === configCount;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function updateAvailability() {
    syncWorldTopicVisibility();
    const pool = configuredPool();
    const max = maximumAvailable();
    const standardCounts = [5, 10, 15];
    elements.countButtons.forEach(function (button) { button.disabled = Number(button.dataset.count) > max; });
    elements.quickCountButtons.forEach(function (button) {
      const pool = bank.questions.filter(function (question) {
        return (elements.region.value === 'all' || question.region === elements.region.value) &&
          matchesWorldTopic(question) && question.level === button.dataset.quickLevel;
      });
      button.disabled = Number(button.dataset.quickCount) > uniqueFactCount(pool);
    });
    if (configCount > max) {
      const fallback = standardCounts.filter(function (count) { return count <= max; }).pop() || max;
      setCount(fallback);
    } else {
      setCount(configCount);
    }
    if (!max) {
      elements.availability.textContent = 'Chưa có câu phù hợp với lựa chọn này.';
      elements.generate.disabled = true;
    } else if (max < 15) {
      elements.availability.textContent = 'Có ' + pool.length + ' câu phù hợp · Lượt này tối đa ' + max + ' câu.';
      elements.generate.disabled = false;
    } else {
      elements.availability.textContent = 'Có ' + pool.length + ' câu phù hợp' + (pool.length !== max ? ' · ' + max + ' chủ điểm khác nhau.' : '.');
      elements.generate.disabled = false;
    }
  }

  function usedKey() {
    return [STORAGE.used, elements.region.value, elements.worldTopic.value, elements.level.value].join(':');
  }

  function chooseUniqueFacts(questions, target) {
    const selected = [];
    const facts = new Set();
    shuffle(questions).forEach(function (question) {
      const factKey = question.factId || question.id;
      if (selected.length < target && !facts.has(factKey)) {
        selected.push(question);
        facts.add(factKey);
      }
    });
    return selected;
  }

  function startQuestions(questions, shouldScroll) {
    state = {
      questions: questions,
      currentIndex: 0,
      answers: {},
      optionOrders: {},
      hints: {},
      revealed: {},
      checked: false,
      score: null
    };
    state.questions.forEach(function (question) { state.optionOrders[question.id] = shuffle(question.options); });
    elements.results.hidden = true;
    persistSession();
    render();
    announce('Đã tạo lượt mới gồm ' + questions.length + ' câu.');
    if (shouldScroll) elements.workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function generate(shouldScroll) {
    const pool = configuredPool();
    if (!pool.length) return;
    const target = Math.min(configCount, uniqueFactCount(pool));
    let used = readStorage(usedKey(), [], true);
    let available = pool.filter(function (question) { return !used.includes(question.id); });
    let selected = chooseUniqueFacts(available, target);
    if (selected.length < target) {
      used = [];
      available = pool.slice();
      selected = chooseUniqueFacts(available, target);
    }
    writeStorage(usedKey(), used.concat(selected.map(function (question) { return question.id; })), true);
    startQuestions(selected, shouldScroll);
  }

  function persistSession() {
    writeStorage(STORAGE.active, {
      version: 2,
      questionIds: state.questions.map(function (question) { return question.id; }),
      currentIndex: state.currentIndex,
      answers: state.answers,
      optionOrders: state.optionOrders,
      hints: state.hints,
      revealed: state.revealed,
      checked: state.checked,
      score: state.score,
      config: { region: elements.region.value, worldTopic: elements.worldTopic.value, level: elements.level.value, count: configCount }
    });
  }

  function restoreSession() {
    const saved = readStorage(STORAGE.active, null);
    if (!saved || saved.version !== 2 || !Array.isArray(saved.questionIds) || !saved.questionIds.length) return false;
    const questions = saved.questionIds.map(function (id) { return questionById.get(id); });
    if (questions.some(function (question) { return !question; })) return false;
    const validOrders = saved.optionOrders && questions.every(function (question) {
      const order = saved.optionOrders[question.id];
      return Array.isArray(order) && order.length === question.options.length && order.every(function (option) { return question.options.includes(option); });
    });
    if (!validOrders) return false;
    if (saved.config) {
      elements.region.value = saved.config.region || 'all';
      elements.worldTopic.value = saved.config.worldTopic || 'all';
      elements.level.value = saved.config.level || 'all';
      configCount = Number(saved.config.count) || questions.length;
    }
    state = {
      questions: questions,
      currentIndex: Math.max(0, Math.min(Number(saved.currentIndex) || 0, questions.length - 1)),
      answers: saved.answers || {},
      optionOrders: saved.optionOrders,
      hints: saved.hints || {},
      revealed: saved.revealed || {},
      checked: Boolean(saved.checked),
      score: saved.score || null
    };
    return true;
  }

  function safePeriod(question) {
    const period = normalize(question.period);
    const prompt = normalize(question.prompt);
    const answerMatches = question.answers.some(function (answer) { return normalize(answer) === period; });
    if (answerMatches || /nam nao|moc thoi gian|khi nao|vao nam/.test(prompt)) return '';
    return question.period;
  }

  function currentQuestion() {
    return state.questions[state.currentIndex];
  }

  function isCorrect(question) {
    return Boolean(state.answers[question.id]) && question.answers.includes(state.answers[question.id]);
  }

  function renderQuestionNav() {
    elements.questionNav.replaceChildren();
    state.questions.forEach(function (question, index) {
      const button = make('button', index === state.currentIndex ? 'is-current' : '', String(index + 1));
      button.type = 'button';
      button.setAttribute('aria-label', 'Đến câu ' + (index + 1));
      if (state.answers[question.id]) button.classList.add('is-answered');
      if (state.checked) {
        button.classList.remove('is-answered');
        button.classList.add(state.answers[question.id] ? (isCorrect(question) ? 'is-correct' : 'is-wrong') : 'is-unanswered');
      }
      button.addEventListener('click', function () {
        state.currentIndex = index;
        persistSession();
        render();
      });
      elements.questionNav.appendChild(button);
    });
  }

  function syncOptionStyles(article, question) {
    article.querySelectorAll('.history-option').forEach(function (label) {
      const option = label.dataset.option;
      const selected = state.answers[question.id] === option;
      label.classList.toggle('is-selected', selected && !state.checked);
      label.classList.toggle('is-correct-answer', state.checked && question.answers.includes(option));
      label.classList.toggle('is-wrong-answer', state.checked && selected && !question.answers.includes(option));
      const mark = label.querySelector('.history-option__mark');
      mark.textContent = state.checked && question.answers.includes(option) ? '✓' : (state.checked && selected ? '×' : '');
    });
  }

  function renderCurrentQuestion() {
    elements.list.replaceChildren();
    const question = currentQuestion();
    if (!question) return;
    const article = make('article', 'history-question');
    const titleId = 'history-question-title-' + question.id;
    article.setAttribute('aria-labelledby', titleId);

    const meta = make('div', 'history-question__meta');
    meta.appendChild(make('span', 'history-question__number', 'Câu ' + (state.currentIndex + 1) + '/' + state.questions.length));
    meta.appendChild(make('span', 'history-question__label', bank.regionLabels[question.region]));
    meta.appendChild(make('span', 'history-question__label', bank.levelLabels[question.level]));
    const period = safePeriod(question);
    if (period) meta.appendChild(make('span', 'history-question__label', period));
    article.appendChild(meta);

    const title = make('h3', '', question.prompt);
    title.id = titleId;
    article.appendChild(title);

    const options = make('div', 'history-options');
    options.setAttribute('role', 'radiogroup');
    options.setAttribute('aria-labelledby', titleId);
    state.optionOrders[question.id].forEach(function (option, optionIndex) {
      const label = make('label', 'history-option');
      label.dataset.option = option;
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'history-answer-current';
      input.value = option;
      input.checked = state.answers[question.id] === option;
      input.disabled = state.checked;
      const letter = make('span', 'history-option__letter', String.fromCharCode(65 + optionIndex));
      const text = make('span', 'history-option__text', option);
      const mark = make('span', 'history-option__mark', '');
      mark.setAttribute('aria-hidden', 'true');
      input.addEventListener('change', function () {
        state.answers[question.id] = option;
        syncOptionStyles(article, question);
        renderProgress();
        renderQuestionNav();
        persistSession();
        announce('Đã chọn đáp án cho câu ' + (state.currentIndex + 1) + '.');
      });
      label.appendChild(input);
      label.appendChild(letter);
      label.appendChild(text);
      label.appendChild(mark);
      options.appendChild(label);
    });
    article.appendChild(options);

    const support = make('div', 'history-question__support');
    const hintButton = make('button', 'history-hint-button', state.hints[question.id] ? 'Ẩn gợi ý' : '💡 Xem một gợi ý');
    hintButton.type = 'button';
    hintButton.setAttribute('aria-expanded', state.hints[question.id] ? 'true' : 'false');
    hintButton.setAttribute('aria-controls', 'history-hint-current');
    support.appendChild(hintButton);
    article.appendChild(support);

    const hint = make('div', 'history-hint', question.hint);
    hint.id = 'history-hint-current';
    hint.hidden = !state.hints[question.id];
    hintButton.addEventListener('click', function () {
      state.hints[question.id] = !state.hints[question.id];
      persistSession();
      renderCurrentQuestion();
    });
    article.appendChild(hint);

    const solution = make('div', 'history-solution');
    solution.hidden = !(state.checked || state.revealed[question.id]);
    solution.appendChild(make('strong', '', 'Đáp án: ' + question.answers[0]));
    solution.appendChild(make('p', '', question.explanation));
    const source = make('a', 'history-source', 'Nguồn tham khảo: ' + question.sourceLabel + ' ↗');
    source.href = question.sourceUrl;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    solution.appendChild(source);
    article.appendChild(solution);

    syncOptionStyles(article, question);
    elements.list.appendChild(article);
    elements.answers.disabled = state.checked;
    elements.answers.textContent = state.checked ? 'Lời giải đã hiển thị' : (solution.hidden ? 'Xem lời giải câu này' : 'Ẩn lời giải câu này');
  }

  function renderProgress() {
    const answered = state.questions.filter(function (question) { return Boolean(state.answers[question.id]); }).length;
    const percent = state.questions.length ? Math.round(answered / state.questions.length * 100) : 0;
    elements.progressLabel.textContent = 'Đã trả lời ' + answered + '/' + state.questions.length;
    elements.progressPercent.textContent = percent + '%';
    elements.progressFill.style.width = percent + '%';
  }

  function renderControls() {
    elements.badge.textContent = state.questions.length + ' câu';
    elements.previous.disabled = state.currentIndex === 0;
    elements.next.disabled = state.currentIndex >= state.questions.length - 1;
    elements.check.disabled = state.checked;
    elements.check.textContent = state.checked ? 'Đã kiểm tra kết quả' : 'Kiểm tra kết quả';
  }

  function render() {
    renderProgress();
    renderQuestionNav();
    renderCurrentQuestion();
    renderControls();
    if (state.checked && state.score) renderResults();
  }

  function longestCorrectStreak() {
    let current = 0;
    let best = 0;
    state.questions.forEach(function (question) {
      if (isCorrect(question)) {
        current += 1;
        best = Math.max(best, current);
      } else {
        current = 0;
      }
    });
    return best;
  }

  function updateStoredProgress(score) {
    progress.attempts += 1;
    progress.answered += score.answered;
    progress.correct += score.correct;
    progress.bestStreak = Math.max(progress.bestStreak, longestCorrectStreak());
    state.questions.forEach(function (question) {
      if (!isCorrect(question)) return;
      if (question.region === 'viet-nam') progress.vietnamCorrect += 1;
      if (question.region === 'the-gioi') progress.worldCorrect += 1;
      if (question.level === 'kho') progress.hardCorrect += 1;
    });
    progress.lastWrongIds = state.questions.filter(function (question) { return !isCorrect(question); }).map(function (question) { return question.id; });
    const seen = new Set(progress.seenFactIds || []);
    state.questions.forEach(function (question) { seen.add(question.factId || question.id); });
    progress.seenFactIds = Array.from(seen).slice(-500);
    writeStorage(STORAGE.progress, progress);
    renderStoredProgress();
  }

  function renderStoredProgress() {
    const xp = Math.max(0, Number(progress.correct) || 0) * 10;
    document.getElementById('history-player-level').textContent = 'Cấp ' + (Math.floor(xp / 100) + 1) + ' ⭐';
    document.getElementById('history-player-xp').value = xp % 100;
    document.getElementById('history-player-xp-label').textContent = (xp % 100) + ' / 100 XP';
    elements.attempts.textContent = progress.attempts;
    elements.answered.textContent = progress.answered;
    elements.correct.textContent = progress.correct;
    elements.accuracy.textContent = progress.answered ? Math.round(progress.correct / progress.answered * 100) + '%' : '0%';
    elements.reviewWrong.disabled = !(progress.lastWrongIds && progress.lastWrongIds.some(function (id) { return questionById.has(id); }));

    const earned = {
      first: progress.attempts >= 1,
      scholar: progress.correct >= 20,
      vietnam: progress.vietnamCorrect >= 10,
      world: progress.worldCorrect >= 5,
      brave: progress.hardCorrect >= 5,
      timeline: (progress.seenFactIds || []).length >= 30,
      people: progress.correct >= 30,
      streak: progress.bestStreak >= 5
    };
    document.getElementById('history-stat-badges').textContent = Object.values(earned).filter(Boolean).length;
    elements.badgeGrid.querySelectorAll('[data-badge]').forEach(function (badge) {
      const isEarned = Boolean(earned[badge.dataset.badge]);
      badge.classList.toggle('is-earned', isEarned);
      badge.querySelector('span').textContent = isEarned ? 'Đã mở khóa' : 'Chưa mở';
    });
  }

  function checkAnswers() {
    if (state.checked || !state.questions.length) return;
    let correct = 0;
    let answered = 0;
    state.questions.forEach(function (question) {
      if (state.answers[question.id]) answered += 1;
      if (isCorrect(question)) correct += 1;
    });
    state.checked = true;
    state.score = {
      correct: correct,
      wrong: answered - correct,
      unanswered: state.questions.length - answered,
      answered: answered,
      points: Math.round(correct / state.questions.length * 100) / 10
    };
    updateStoredProgress(state.score);
    persistSession();
    render();
    elements.results.hidden = false;
    elements.results.scrollIntoView({ behavior: 'smooth', block: 'center' });
    announce('Đã kiểm tra. Con trả lời đúng ' + correct + ' trên ' + state.questions.length + ' câu.');
  }

  function renderResults() {
    const score = state.score;
    elements.results.replaceChildren();
    const line = make('div', 'history-results__score');
    line.appendChild(make('strong', '', 'Kết quả: ' + score.correct + '/' + state.questions.length + ' · ' + score.points + ' điểm'));
    line.appendChild(make('span', 'history-results__correct', 'Đúng ' + score.correct));
    line.appendChild(make('span', 'history-results__wrong', 'Sai ' + score.wrong));
    line.appendChild(make('span', 'history-results__empty', 'Bỏ trống ' + score.unanswered));
    elements.results.appendChild(line);
    let encouragement = 'Mỗi câu cần xem lại sẽ giúp con nhớ thêm một dấu mốc lịch sử.';
    if (score.correct === state.questions.length) encouragement = 'Xuất sắc! Con đã chinh phục trọn vẹn hành trình này.';
    else if (score.correct >= Math.ceil(state.questions.length * .8)) encouragement = 'Rất tốt! Con đã nhớ được phần lớn các dấu mốc trong lượt này.';
    else if (score.correct >= Math.ceil(state.questions.length * .5)) encouragement = 'Khá lắm! Hãy đọc lời giải để nối các sự kiện thành một dòng thời gian.';
    elements.results.appendChild(make('p', '', encouragement));

    const actions = make('div', 'history-results__actions');
    const retry = make('button', 'history-button history-button--soft', 'Làm lại câu cần nhớ');
    retry.type = 'button';
    retry.disabled = !state.questions.some(function (question) { return !isCorrect(question); });
    retry.addEventListener('click', function () {
      const questions = state.questions.filter(function (question) { return !isCorrect(question); });
      startQuestions(questions, true);
    });
    const fresh = make('button', 'history-button history-button--primary', 'Tạo hành trình mới');
    fresh.type = 'button';
    fresh.addEventListener('click', function () { generate(true); });
    const review = make('button', 'history-button history-button--outline', 'Xem từ câu đầu');
    review.type = 'button';
    review.addEventListener('click', function () { state.currentIndex = 0; persistSession(); render(); elements.workspace.scrollIntoView({ behavior: 'smooth' }); });
    actions.appendChild(retry);
    actions.appendChild(fresh);
    actions.appendChild(review);
    elements.results.appendChild(actions);
    elements.results.hidden = false;
  }

  function reviewStoredWrong() {
    const questions = (progress.lastWrongIds || []).map(function (id) { return questionById.get(id); }).filter(Boolean).slice(0, 15);
    if (!questions.length) return;
    startQuestions(questions, true);
  }

  function buildPrint() {
    elements.printRoot.replaceChildren();
    elements.printRoot.appendChild(make('h1', 'print-title', 'PHIẾU CÂU ĐỐ LỊCH SỬ iMATH.VN'));
    const meta = make('div', 'print-meta');
    meta.appendChild(make('span', '', 'Họ và tên: ................................................'));
    meta.appendChild(make('span', '', 'Ngày: ........ / ........ / ........'));
    elements.printRoot.appendChild(meta);
    state.questions.forEach(function (question, index) {
      const block = make('div', 'print-question');
      block.appendChild(make('strong', '', 'Câu ' + (index + 1) + '. ' + question.prompt));
      const options = make('div', 'print-options');
      state.optionOrders[question.id].forEach(function (option, optionIndex) {
        options.appendChild(make('span', '', String.fromCharCode(65 + optionIndex) + '. ☐ ' + option));
      });
      block.appendChild(options);
      elements.printRoot.appendChild(block);
    });
    elements.printRoot.appendChild(make('div', 'print-copyright', 'iMath.vn · Sử dụng cho mục đích học tập.'));
  }

  document.getElementById('history-start').addEventListener('click', function () {
    if (state.checked) generate(true);
    else elements.workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  document.getElementById('history-all-badges').addEventListener('click', function (event) {
    const expanded = elements.badgeGrid.classList.toggle('is-expanded');
    event.currentTarget.setAttribute('aria-expanded', String(expanded));
    event.currentTarget.textContent = expanded ? 'Thu gọn ↑' : 'Xem tất cả →';
  });
  const eraPeriods = {
    'dung-nuoc': /^(Thời dựng nước|Âu Lạc|Văn hóa khảo cổ|Văn hóa Đông Sơn|Văn hóa Sa Huỳnh|Văn hóa Óc Eo)$/,
    'bac-thuoc': /^(Bắc thuộc|Văn hóa Champa)$/,
    'ly-tran': /^(Nhà Ngô|Nhà Đinh|Tiền Lê|Ngô – Đinh – Tiền Lê|Nhà Lý|Nhà Trần)$/,
    'le-so': /^(Nhà Hồ|Khởi nghĩa Lam Sơn|Nhà Lê sơ|Nhà Mạc|Lê Trung Hưng)$/,
    'nha-nguyen': /^(Nhà Nguyễn|Triều Nguyễn)/,
    'hien-dai': /^(Lịch sử hiện đại|Phong trào|Giai đoạn 1939|Cách mạng tháng|Việt Nam 19|Điện Biên)/
  };
  document.querySelectorAll('[data-era]').forEach(function (button) {
    button.addEventListener('click', function () {
      const era = button.dataset.era;
      const pool = bank.questions.filter(function (question) {
        if (question.region !== 'viet-nam') return false;
        if (eraPeriods[era].test(question.period)) return true;
        const fact = question.factId || '';
        return (era === 'ly-tran' && fact.startsWith('tr-')) ||
          (era === 'le-so' && fact.startsWith('le-') && parseInt(question.period, 10) <= 1527) ||
          (era === 'nha-nguyen' && fact.startsWith('ng-') && parseInt(question.period, 10) >= 1802) ||
          (era === 'hien-dai' && fact.startsWith('m-'));
      });
      if (pool.length) {
        startQuestions(chooseUniqueFacts(pool, configCount), true);
        announce('Khám phá ' + button.querySelector('span').textContent + ': ' + state.questions.length + ' câu hỏi.');
      }
    });
  });

  elements.config.addEventListener('submit', function (event) {
    event.preventDefault();
    generate(true);
  });
  elements.countButtons.forEach(function (button) {
    button.addEventListener('click', function () { setCount(Number(button.dataset.count)); });
  });
  elements.quickCountButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      elements.level.value = button.dataset.quickLevel;
      setCount(Number(button.dataset.quickCount));
      updateAvailability();
      generate(true);
    });
  });
  elements.region.addEventListener('change', updateAvailability);
  elements.worldTopic.addEventListener('change', updateAvailability);
  elements.level.addEventListener('change', updateAvailability);
  elements.previous.addEventListener('click', function () {
    if (state.currentIndex > 0) { state.currentIndex -= 1; persistSession(); render(); }
  });
  elements.next.addEventListener('click', function () {
    if (state.currentIndex < state.questions.length - 1) { state.currentIndex += 1; persistSession(); render(); }
  });
  elements.check.addEventListener('click', checkAnswers);
  elements.answers.addEventListener('click', function () {
    const question = currentQuestion();
    if (!question) return;
    state.revealed[question.id] = !state.revealed[question.id];
    persistSession();
    renderCurrentQuestion();
  });
  elements.print.addEventListener('click', function () { buildPrint(); window.print(); });
  window.addEventListener('beforeprint', buildPrint);
  elements.reviewWrong.addEventListener('click', reviewStoredWrong);
  elements.menuButton.addEventListener('click', function () {
    const open = elements.menuButton.getAttribute('aria-expanded') !== 'true';
    elements.menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    elements.menuButton.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    elements.mobileNav.hidden = !open;
  });

  renderStoredProgress();
  if (restoreSession()) {
    updateAvailability();
    render();
  } else {
    updateAvailability();
    generate(false);
  }
}());
