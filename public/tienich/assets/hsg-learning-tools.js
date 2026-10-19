(function (window, document) {
  'use strict';

  const SCRATCH_KEY = 'imath_hsg_scratch_v1';
  const MAX_RECORDS = 20;
  const MAX_ACTIONS = 80;
  const MAX_POINTS = 180;
  const api = window.IMathHSGPracticeAPI;
  if (!api) return;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function title(text, note) {
    const head = element('div', 'hsg-interaction__title');
    head.append(element('strong', '', text), element('small', '', note));
    return head;
  }

  function actionButton(text, className) {
    const button = element('button', className || '', text);
    button.type = 'button';
    return button;
  }

  function statusBox() {
    const status = element('div', 'interaction-status');
    status.setAttribute('aria-live', 'polite');
    return status;
  }

  function submitAlternative(index, correct, label, diagnosis, status) {
    api.markAlternative(index, correct, label, diagnosis);
    const result = api.checkSingle(index);
    if (status) {
      status.textContent = result && result.isCorrect ? 'Chính xác!' : 'Chưa đúng – xem chẩn đoán ngay dưới câu.';
      status.style.color = result && result.isCorrect ? '#176b32' : '#9a2636';
    }
  }

  function selectedOption(container) {
    return container.querySelector('.interaction-option.is-selected');
  }

  function optionList(labels) {
    const wrap = element('div', 'interaction-options');
    labels.forEach((label, index) => {
      const button = actionButton(label, 'interaction-option');
      button.dataset.value = String(index);
      button.addEventListener('click', () => {
        wrap.querySelectorAll('.interaction-option').forEach(item => item.classList.remove('is-selected'));
        button.classList.add('is-selected');
      });
      wrap.appendChild(button);
    });
    return wrap;
  }

  function interactionShell(label, note) {
    const shell = element('section', 'hsg-interaction');
    shell.appendChild(title(label, note));
    return shell;
  }

  function promptPieces(prompt) {
    let pieces = (String(prompt || '').match(/[^.!?;]+[.!?;]?/g) || []).map(text => text.trim()).filter(Boolean);
    if (pieces.length < 2) pieces = String(prompt || '').split(/,(?=\s)/).map(text => text.trim()).filter(Boolean);
    if (pieces.length < 2) pieces = [String(prompt || '').trim(), 'Tìm đại lượng mà đề bài yêu cầu.'];
    return pieces.slice(0, 5);
  }

  function buildDrag(index, question) {
    const shell = interactionShell('Kéo dữ kiện vào đúng ô', 'Có thể chạm để chuyển ô');
    const schema = element('div', 'drag-schema');
    const pool = element('div', 'drag-pool'), given = element('div', 'drag-zone'), target = element('div', 'drag-zone');
    pool.dataset.zone = 'pool'; given.dataset.zone = 'given'; target.dataset.zone = 'target';
    pool.appendChild(element('strong', '', 'Thẻ dữ kiện')); given.appendChild(element('strong', '', 'Đề cho')); target.appendChild(element('strong', '', 'Cần tìm'));
    const pieces = promptPieces(question.prompt);
    pieces.forEach((text, pieceIndex) => {
      const chip = actionButton(text, 'drag-chip');
      chip.draggable = true; chip.dataset.piece = String(pieceIndex); chip.dataset.role = pieceIndex === pieces.length - 1 ? 'target' : 'given'; chip.dataset.position = 'pool';
      chip.addEventListener('dragstart', event => event.dataTransfer.setData('text/plain', String(pieceIndex)));
      chip.addEventListener('click', () => {
        const next = chip.parentElement === pool ? given : chip.parentElement === given ? target : pool;
        next.appendChild(chip); chip.dataset.position = next.dataset.zone;
      });
      pool.appendChild(chip);
    });
    [pool, given, target].forEach(zone => {
      zone.addEventListener('dragover', event => event.preventDefault());
      zone.addEventListener('drop', event => {
        event.preventDefault(); const chip = schema.querySelector('.drag-chip[data-piece="' + event.dataTransfer.getData('text/plain') + '"]');
        if (chip) { zone.appendChild(chip); chip.dataset.position = zone.dataset.zone; }
      });
    });
    schema.append(pool, given, target);
    const actions = element('div', 'interaction-actions'), submit = actionButton('Kiểm tra cách xếp', 'interaction-submit'), status = statusBox();
    submit.addEventListener('click', () => {
      const chips = Array.from(schema.querySelectorAll('.drag-chip'));
      const complete = chips.every(chip => chip.dataset.position !== 'pool');
      const correct = complete && chips.every(chip => chip.dataset.position === chip.dataset.role);
      submitAlternative(index, correct, complete ? 'Đã phân loại các dữ kiện' : 'Chưa xếp đủ dữ kiện', 'Hãy để câu hỏi cuối vào ô “Cần tìm”, các thông tin đã biết vào ô “Đề cho”.', status);
    });
    actions.append(submit); shell.append(schema, actions, status); return shell;
  }

  function rotated(items, shift) {
    if (items.length < 2) return items.slice();
    const amount = (shift % (items.length - 1)) + 1;
    return items.slice(amount).concat(items.slice(0, amount));
  }

  function buildSort(index, question) {
    const shell = interactionShell('Sắp xếp các bước giải', 'Chạm theo thứ tự 1 → cuối');
    const source = (question.solution || []).slice(0, 4).map((text, stepIndex) => ({ text, stepIndex }));
    const shuffled = rotated(source, index + question.prompt.length);
    const list = element('div', 'sort-step-list'); let chosen = [];
    shuffled.forEach(step => {
      const button = actionButton(step.text, 'sort-step'); button.dataset.order = '–';
      button.addEventListener('click', () => {
        const old = chosen.indexOf(step.stepIndex);
        if (old >= 0) chosen.splice(old, 1); else chosen.push(step.stepIndex);
        list.querySelectorAll('.sort-step').forEach(item => { const position = chosen.indexOf(Number(item.dataset.step)); item.dataset.order = position >= 0 ? String(position + 1) : '–'; item.classList.toggle('is-chosen', position >= 0); });
      });
      button.dataset.step = String(step.stepIndex); list.appendChild(button);
    });
    const actions = element('div', 'interaction-actions'), reset = actionButton('Làm lại'), submit = actionButton('Kiểm tra thứ tự', 'interaction-submit'), status = statusBox();
    reset.addEventListener('click', () => { chosen = []; list.querySelectorAll('.sort-step').forEach(item => { item.dataset.order = '–'; item.classList.remove('is-chosen'); }); });
    submit.addEventListener('click', () => {
      const correct = chosen.length === source.length && chosen.every((value, position) => value === position);
      submitAlternative(index, correct, 'Thứ tự: ' + (chosen.length ? chosen.map(value => value + 1).join(' → ') : 'chưa chọn'), 'Hãy tìm bước xác định quan hệ trước, tính đại lượng trung gian sau và kiểm tra ở cuối.', status);
    });
    actions.append(reset, submit); shell.append(list, actions, status); return shell;
  }

  function operationDistractors(question) {
    const correct = (question.solution && question.solution[0]) || question.keyPoint || 'Lập quan hệ rồi tính từng bước.';
    const knowledge = question.knowledge || [];
    const wrongA = knowledge.includes('subtract') ? 'Cộng tất cả các số xuất hiện trong đề.' : 'Lấy số lớn trừ số nhỏ ngay lập tức.';
    const wrongB = knowledge.includes('multiply') ? 'Chia hai số đầu tiên cho nhau.' : 'Nhân tất cả các số đã cho với nhau.';
    return [correct, wrongA, wrongB];
  }

  function buildOperation(index, question) {
    const shell = interactionShell('Chọn bước giải phù hợp', 'Chỉ một lựa chọn đúng hướng');
    const choices = operationDistractors(question).map((text, original) => ({ text, original }));
    const ordered = rotated(choices, index + 1), list = optionList(ordered.map(item => item.text));
    list.querySelectorAll('.interaction-option').forEach((button, choiceIndex) => { button.dataset.correct = String(ordered[choiceIndex].original === 0); });
    const actions = element('div', 'interaction-actions'), submit = actionButton('Kiểm tra lựa chọn', 'interaction-submit'), status = statusBox();
    submit.addEventListener('click', () => { const selected = selectedOption(list); submitAlternative(index, Boolean(selected && selected.dataset.correct === 'true'), selected ? selected.textContent : 'Chưa chọn bước giải', 'Đừng tính ngay. Hãy chọn bước thiết lập đúng quan hệ giữa các đại lượng trước.', status); });
    actions.append(submit); shell.append(list, actions, status); return shell;
  }

  function buildDiagram(index, question) {
    const shell = interactionShell('Điền số vào sơ đồ đoạn thẳng', 'Nhập kết quả và đơn vị');
    const diagram = element('div', 'diagram-fill'), short = element('span'), long = element('span'), input = document.createElement('input');
    short.style.width = '32%'; long.style.width = '52%'; input.type = 'text'; input.maxLength = 80; input.placeholder = question.unit ? '? ' + question.unit : '?'; input.setAttribute('aria-label', 'Số cần điền vào sơ đồ'); diagram.append(short, long, input);
    const actions = element('div', 'interaction-actions'), submit = actionButton('Kiểm tra sơ đồ', 'interaction-submit'), status = statusBox();
    submit.addEventListener('click', () => {
      const raw = input.value.trim(); api.setAnswer(index, raw); const result = api.checkSingle(index);
      status.textContent = result && result.isCorrect ? 'Chính xác!' : 'Chưa đúng – xem chẩn đoán ngay dưới câu.';
      status.style.color = result && result.isCorrect ? '#176b32' : '#9a2636';
    });
    actions.append(submit); shell.append(diagram, actions, status); return shell;
  }

  function buildDataCheck(index, question) {
    const shell = interactionShell('Kiểm tra dữ kiện của đề', 'Đủ, thừa hay thiếu?');
    const labels = ['Đủ dữ kiện', 'Có dữ kiện thừa', 'Thiếu dữ kiện'];
    const list = optionList(labels), correctLabel = /data-choice|extra-data/.test(String(question.family || '')) ? labels[1] : labels[0];
    const actions = element('div', 'interaction-actions'), submit = actionButton('Kiểm tra nhận xét', 'interaction-submit'), status = statusBox();
    submit.addEventListener('click', () => { const selected = selectedOption(list), label = selected ? selected.textContent : 'Chưa chọn'; submitAlternative(index, label === correctLabel, label, 'Hãy thử che từng dữ kiện: nếu vẫn giải được thì dữ kiện đó có thể thừa; nếu không thể xác định duy nhất thì đang thiếu.', status); });
    actions.append(submit); shell.append(list, actions, status); return shell;
  }

  function wrongAnswerText(question) {
    const answer = question.answer;
    if (answer.kind === 'integer') return String(answer.value + 1) + (question.unit ? ' ' + question.unit : '');
    if (answer.kind === 'rational') return String(answer.numerator + 1) + '/' + answer.denominator + (question.unit ? ' ' + question.unit : '');
    if (answer.kind === 'time') return String(Math.floor((answer.totalMinutes + 5) / 60)) + ' giờ ' + String((answer.totalMinutes + 5) % 60) + ' phút';
    if (answer.kind === 'remainder') return answer.quotient + ' dư ' + (answer.remainder + 1);
    return 'Kết quả khác đáp án đúng 1 đơn vị';
  }

  function buildFindWrong(index, question) {
    const shell = interactionShell('Phát hiện lời giải sai', 'Chọn kết luận sai và giải thích');
    const choices = [{ text: 'Kết quả cuối là ' + question.answerText, wrong: false }, { text: 'Kết quả cuối là ' + wrongAnswerText(question), wrong: true }];
    const ordered = index % 2 ? choices : choices.slice().reverse(), list = optionList(ordered.map(item => item.text));
    list.querySelectorAll('.interaction-option').forEach((button, choiceIndex) => { button.dataset.wrong = String(ordered[choiceIndex].wrong); });
    const explain = document.createElement('textarea'); explain.className = 'explain-wrong'; explain.maxLength = 240; explain.placeholder = 'Vì sao lời giải này sai?'; explain.setAttribute('aria-label', 'Giải thích vì sao lời giải sai');
    const actions = element('div', 'interaction-actions'), submit = actionButton('Kiểm tra lập luận', 'interaction-submit'), status = statusBox();
    submit.addEventListener('click', () => {
      const selected = selectedOption(list), enough = explain.value.trim().length >= 5, correct = Boolean(selected && selected.dataset.wrong === 'true' && enough);
      submitAlternative(index, correct, (selected ? selected.textContent : 'Chưa chọn') + (explain.value.trim() ? ' · ' + explain.value.trim() : ''), !enough ? 'Con đã chọn nhưng cần viết ngắn gọn vì sao sai.' : 'Hãy thay kết quả vào dữ kiện ban đầu để chỉ ra chỗ mâu thuẫn.', status);
    });
    actions.append(submit); shell.append(list, explain, actions, status); return shell;
  }

  function addInteraction(card, question, index) {
    const mode = api.getState().mode;
    if (mode !== 'practice' && mode !== 'wrong') return;
    const first = api.getState().questions[0];
    const seedText = String(first && (first.fingerprint || first.family || first.prompt) || 'hsg');
    const offset = Array.from(seedText).reduce((sum, character) => sum + character.charCodeAt(0), 0) % 7;
    const kind = (index + offset) % 7;
    if (!kind) return;
    const builders = [null, buildDrag, buildSort, buildOperation, buildDiagram, buildDataCheck, buildFindWrong];
    const interaction = builders[kind](index, question), row = card.querySelector('.answer-row');
    row.hidden = true; row.insertAdjacentElement('beforebegin', interaction);
  }

  function readScratch() { return readStore(window.localStorage, SCRATCH_KEY, { records: {} }); }
  function writeScratch(data) {
    const keys = Object.keys(data.records || {}).sort((a, b) => Number(data.records[b].updated || 0) - Number(data.records[a].updated || 0));
    keys.slice(MAX_RECORDS).forEach(key => { delete data.records[key]; });
    writeStore(window.localStorage, SCRATCH_KEY, data);
  }
  function readStore(storage, key, fallback) {
    try { const value = JSON.parse(storage.getItem(key) || 'null'); return value && typeof value === 'object' ? value : fallback; }
    catch (error) { return fallback; }
  }
  function writeStore(storage, key, value) { try { storage.setItem(key, JSON.stringify(value)); } catch (error) { /* Bảng nháp vẫn dùng được tạm thời. */ } }
  function scratchId(question, grade) {
    const raw = grade + '|' + question.family + '|' + question.prompt, hash = Array.from(raw).reduce((value, character) => ((value * 31) + character.charCodeAt(0)) >>> 0, 2166136261);
    return String(grade) + '-' + String(hash);
  }

  function createScratch(question, grade) {
    const key = scratchId(question, grade), store = readScratch(), saved = store.records[key] || { actions: [], redo: [], writing: '', unit: '' };
    if (!Array.isArray(saved.actions)) saved.actions = []; if (!Array.isArray(saved.redo)) saved.redo = [];
    const panel = element('section', 'hsg-scratchpad'), head = element('div', 'scratch-head'); head.append(element('strong', '', '📝 Bảng nháp riêng'), element('small', '', 'Chỉ lưu trên máy này'));
    const tools = element('div', 'scratch-tools'), pen = actionButton('✏️ Bút', 'is-active'), eraser = actionButton('🧽 Tẩy'), undo = actionButton('↶ Hoàn tác'), redo = actionButton('↷ Làm lại'), short = actionButton('Đoạn ngắn'), medium = actionButton('Đoạn vừa'), long = actionButton('Đoạn dài'), clear = actionButton('Xóa bảng');
    tools.append(pen, eraser, undo, redo, short, medium, long, clear);
    const shell = element('div', 'scratch-canvas-shell'), canvas = element('canvas', 'hsg-scratch-canvas'); shell.appendChild(canvas);
    const writing = element('div', 'scratch-writing'), text = document.createElement('textarea'), unit = document.createElement('input'); text.maxLength = 1000; text.placeholder = 'Gõ phép tính và lời giải từng dòng…'; text.value = saved.writing || ''; unit.maxLength = 60; unit.placeholder = 'Đơn vị / đáp số'; unit.value = saved.unit || ''; writing.append(text, unit); panel.append(head, tools, shell, writing);
    const context = canvas.getContext('2d'), runtime = { tool: 'pen', drawing: false, current: null };
    function save() { saved.updated = Date.now(); saved.writing = text.value; saved.unit = unit.value; saved.actions = saved.actions.slice(-MAX_ACTIONS); store.records[key] = saved; writeScratch(store); }
    function resize() {
      const rect = canvas.getBoundingClientRect(), ratio = Math.min(2, window.devicePixelRatio || 1); if (!rect.width || !rect.height) return;
      canvas.width = Math.round(rect.width * ratio); canvas.height = Math.round(rect.height * ratio); context.setTransform(ratio, 0, 0, ratio, 0, 0); render();
    }
    function drawAction(action) {
      if (!action.points || !action.points.length) return; const rect = canvas.getBoundingClientRect();
      context.save(); context.globalCompositeOperation = action.tool === 'eraser' ? 'destination-out' : 'source-over'; context.strokeStyle = action.color || '#174f87'; context.lineWidth = action.width || 3; context.lineCap = 'round'; context.lineJoin = 'round'; context.beginPath();
      action.points.forEach((point, pointIndex) => { const x = point.x * rect.width, y = point.y * rect.height; if (!pointIndex) context.moveTo(x, y); else context.lineTo(x, y); }); context.stroke(); context.restore();
    }
    function render() { const rect = canvas.getBoundingClientRect(); context.clearRect(0, 0, rect.width, rect.height); saved.actions.forEach(drawAction); }
    function point(event) { const rect = canvas.getBoundingClientRect(); return { x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)), y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)) }; }
    canvas.addEventListener('pointerdown', event => { event.preventDefault(); canvas.setPointerCapture(event.pointerId); runtime.drawing = true; runtime.current = { tool: runtime.tool, color: '#174f87', width: runtime.tool === 'eraser' ? 22 : 3, points: [point(event)] }; saved.redo = []; });
    canvas.addEventListener('pointermove', event => { if (!runtime.drawing) return; event.preventDefault(); if (runtime.current.points.length < MAX_POINTS) runtime.current.points.push(point(event)); render(); drawAction(runtime.current); });
    function finish() { if (!runtime.drawing) return; runtime.drawing = false; if (runtime.current && runtime.current.points.length) saved.actions.push(runtime.current); runtime.current = null; save(); render(); }
    canvas.addEventListener('pointerup', finish); canvas.addEventListener('pointercancel', finish);
    function choose(tool) { runtime.tool = tool; pen.classList.toggle('is-active', tool === 'pen'); eraser.classList.toggle('is-active', tool === 'eraser'); }
    pen.addEventListener('click', () => choose('pen')); eraser.addEventListener('click', () => choose('eraser'));
    undo.addEventListener('click', () => { const action = saved.actions.pop(); if (action) saved.redo.push(action); save(); render(); }); redo.addEventListener('click', () => { const action = saved.redo.pop(); if (action) saved.actions.push(action); save(); render(); });
    function addSegment(length) { const row = 0.25 + ((saved.actions.length % 5) * .13); saved.actions.push({ tool: 'pen', color: '#2477f3', width: 5, points: [{ x: .12, y: row }, { x: .12 + length, y: row }] }); saved.redo = []; save(); render(); }
    short.addEventListener('click', () => addSegment(.25)); medium.addEventListener('click', () => addSegment(.45)); long.addEventListener('click', () => addSegment(.68));
    clear.addEventListener('click', () => { if (!window.confirm('Xóa toàn bộ nét vẽ và lời giải trong bảng nháp này?')) return; saved.actions = []; saved.redo = []; text.value = ''; unit.value = ''; save(); render(); });
    let saveTimer = null; [text, unit].forEach(input => input.addEventListener('input', () => { window.clearTimeout(saveTimer); saveTimer = window.setTimeout(save, 250); }));
    panel.openCanvas = () => { window.requestAnimationFrame(resize); }; window.addEventListener('resize', resize); return panel;
  }

  function enhance() {
    const current = api.getState();
    current.questions.forEach((question, index) => {
      const card = document.querySelector('[data-question-index="' + index + '"]');
      if (!card || card.dataset.learningReady === 'true') return;
      card.dataset.learningReady = 'true'; addInteraction(card, question, index);
      const body = card.querySelector('.question-body'), actions = element('div', 'question-learning-actions');
      if (current.mode === 'practice' || current.mode === 'wrong') { const check = actionButton('✓ Kiểm tra câu', 'question-learning-button single-check-button'); check.addEventListener('click', () => api.checkSingle(index)); actions.appendChild(check); }
      const toggle = actionButton('📝 Mở bảng nháp', 'question-learning-button'), scratch = createScratch(question, current.grade);
      toggle.addEventListener('click', () => { const open = !scratch.classList.contains('is-open'); scratch.classList.toggle('is-open', open); toggle.classList.toggle('is-active', open); toggle.textContent = open ? '📝 Đóng bảng nháp' : '📝 Mở bảng nháp'; if (open) scratch.openCanvas(); });
      actions.appendChild(toggle); body.append(actions, scratch);
    });
  }

  document.addEventListener('imath:hsg-rendered', enhance);
  enhance();
})(window, document);
