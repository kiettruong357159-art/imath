(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const api = () => window.IMathWordProblemAPI;
  const STORAGE = {
    scratch: 'imath_word_problem_scratch_v1',
    reports: 'imath_word_problem_reports_v1'
  };
  const readStore = (key, fallback) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key));
      return parsed && typeof parsed === 'object' ? parsed : fallback;
    } catch (_) { return fallback; }
  };
  const writeStore = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (_) { return false; }
  };
  const stripHtml = value => String(value || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  const questionKey = (grade, q) => `${grade}|${q.archetype || ''}|${stripHtml(q.text)}`;
  let toastTimer;
  const toast = message => {
    const el = $('imath-toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  };

  const copyText = async text => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand('copy');
      area.remove();
      return ok;
    }
  };

  function bindGlobalTools() {
    const hub = $('practice-hub');
    const hubToggle = $('practice-hub-toggle');
    const hubContent = $('practice-hub-content');
    const setHubOpen = open => {
      if (!hub || !hubToggle || !hubContent) return;
      hub.classList.toggle('is-open', open);
      hubToggle.setAttribute('aria-expanded', String(open));
      hubContent.hidden = !open;
    };
    hubToggle?.addEventListener('click', () => setHubOpen(hubToggle.getAttribute('aria-expanded') !== 'true'));
    setHubOpen(false);

    const modal = $('teacher-modal');
    const syncTeacherLimits = () => {
      const grade = $('teacher-grade').value;
      const capacities = api().getTierCapacities(grade);
      [['teacher-kha', 'kha'], ['teacher-gioi', 'gioi'], ['teacher-hsg', 'hsg']].forEach(([id, tier]) => {
        const input = $(id);
        input.max = String(capacities[tier]);
        if (Number(input.value) > capacities[tier]) input.value = String(capacities[tier]);
      });
      $('teacher-form-status').textContent = `Lớp ${grade}: tối đa ${capacities.kha} Khá, ${capacities.gioi} Giỏi và ${capacities.hsg} HSG để không lặp cấu trúc.`;
    };
    const openModal = () => {
      const state = api().getState();
      $('teacher-grade').value = state.grade;
      syncTeacherLimits();
      modal.classList.remove('hidden');
      $('teacher-kha').focus();
    };
    const closeModal = () => modal.classList.add('hidden');
    $('btn-open-teacher')?.addEventListener('click', openModal);
    $('btn-close-teacher')?.addEventListener('click', closeModal);
    $('btn-cancel-teacher')?.addEventListener('click', closeModal);
    $('teacher-grade')?.addEventListener('change', syncTeacherLimits);
    modal?.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

    $('teacher-form')?.addEventListener('submit', event => {
      event.preventDefault();
      const result = api().configureTeacher({
        grade: $('teacher-grade').value,
        minutes: $('teacher-minutes').value,
        counts: { kha: $('teacher-kha').value, gioi: $('teacher-gioi').value, hsg: $('teacher-hsg').value },
        includeHints: $('teacher-hints').checked,
        workspace: $('teacher-workspace').checked,
        answerKey: $('teacher-answer-key-option').checked,
        answerStyle: $('teacher-answer-style').value
      });
      if (!result.ok) {
        $('teacher-form-status').textContent = result.message;
        return;
      }
      closeModal();
      toast(`Đã tạo đề ${result.code}`);
      $('exam-controls')?.scrollIntoView({ behavior: 'smooth' });
    });

    $('btn-load-exam-code')?.addEventListener('click', () => {
      const result = api().loadExamCode($('exam-code-input').value);
      $('exam-code-status').textContent = result.ok ? `Đã mở đúng mã ${result.code}.` : result.message;
      if (result.ok) $('exam-controls')?.scrollIntoView({ behavior: 'smooth' });
    });
    $('exam-code-input')?.addEventListener('keydown', event => {
      if (event.key === 'Enter') { event.preventDefault(); $('btn-load-exam-code').click(); }
    });
    $('btn-copy-exam-code')?.addEventListener('click', async () => {
      const code = api().getState().examCode;
      if (!code) { toast('Hãy mở chế độ thi thử hoặc tạo đề giáo viên trước.'); return; }
      toast(await copyText(code) ? `Đã sao chép mã ${code}` : `Mã đề: ${code}`);
    });
    $('btn-export-reports')?.addEventListener('click', () => {
      const reports = readStore(STORAGE.reports, []);
      if (!Array.isArray(reports) || !reports.length) { toast('Chưa có báo lỗi nào được lưu.'); return; }
      const blob = new Blob([JSON.stringify(reports, null, 2)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `bao-loi-toan-loi-van-${new Date().toISOString().slice(0, 10)}.json`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    });
  }

  function normalizeSpeechText(text) {
    return stripHtml(text)
      .replace(/(\d+)\s*\/\s*(\d+)/g, '$1 phần $2')
      .replace(/cm²/gi, 'xăng ti mét vuông')
      .replace(/m²/gi, 'mét vuông')
      .replace(/km²/gi, 'ki lô mét vuông')
      .replace(/cm³/gi, 'xăng ti mét khối')
      .replace(/m³/gi, 'mét khối')
      .replace(/×/g, ' nhân ')
      .replace(/÷/g, ' chia ')
      .replace(/=/g, ' bằng ')
      .replace(/(\d),(\d)/g, '$1 phẩy $2')
      .replace(/\bABC\b/g, 'A B C')
      .replace(/\b([ABC])\b/g, '$1 ');
  }

  function speakQuestion(q, button) {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      toast('Trình duyệt này chưa hỗ trợ đọc đề bằng giọng nói.');
      return;
    }
    if (button.classList.contains('active')) {
      speechSynthesis.cancel();
      button.classList.remove('active');
      button.textContent = '🔊 Đọc đề';
      return;
    }
    document.querySelectorAll('.btn-speak-question.active').forEach(el => { el.classList.remove('active'); el.textContent = '🔊 Đọc đề'; });
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(normalizeSpeechText(q.text));
    utterance.lang = 'vi-VN';
    utterance.rate = 0.9;
    utterance.pitch = 1.02;
    const voices = speechSynthesis.getVoices();
    const vietnameseVoice = voices.find(voice => /^vi(-|_)/i.test(voice.lang));
    if (voices.length && !vietnameseVoice) {
      toast('Thiết bị chưa cài giọng tiếng Việt; hệ thống không dùng giọng tiếng Anh thay thế.');
      return;
    }
    utterance.voice = vietnameseVoice || null;
    utterance.onend = utterance.onerror = () => { button.classList.remove('active'); button.textContent = '🔊 Đọc đề'; };
    button.classList.add('active');
    button.textContent = '⏹ Dừng đọc';
    speechSynthesis.speak(utterance);
  }

  function setupProgressiveHints(q, mode, teacherConfig) {
    const drawer = $(`hints-${q.index}`);
    if (!drawer || ['exam'].includes(mode) || (mode === 'teacher' && !teacherConfig?.includeHints)) return;
    const cards = [...drawer.querySelectorAll('.polya-step-card')];
    if (!cards.length || drawer.classList.contains('progressive-ready')) return;
    drawer.classList.add('progressive-ready');
    const toolbar = document.createElement('div');
    toolbar.className = 'progressive-hints';
    toolbar.innerHTML = `<span>Gợi ý mở lần lượt từ định hướng đến phép tính. Mỗi tầng trừ 0,2 điểm.</span><button type="button">Mở gợi ý 1/5</button>`;
    drawer.prepend(toolbar);
    let shown = 0;
    toolbar.querySelector('button').addEventListener('click', event => {
      if (shown >= cards.length) return;
      cards[shown].classList.add('hint-visible');
      shown += 1;
      api().useHint(q.index);
      event.currentTarget.textContent = shown < cards.length ? `Mở gợi ý ${shown + 1}/5` : 'Đã mở đủ 5 gợi ý';
      event.currentTarget.disabled = shown >= cards.length;
    });
  }

  function numericChoices(answer, index) {
    const target = Number(answer);
    if (!Number.isFinite(target)) return [];
    const step = Math.max(1, Math.round(Math.abs(target) * 0.1) || 1);
    const values = [target, target + step, target - step, target + step * 2, target + step * 3, target + step * 4];
    const unique = [...new Set(values.filter(value => value >= 0).map(value => Number(value.toFixed(3))))].slice(0, 4);
    if(unique.length !== 4) return [];
    const shift = index % unique.length;
    return unique.slice(shift).concat(unique.slice(0, shift));
  }

  function setupAlternateAnswer(q, state) {
    if (state.answerStyle !== 'variety' || ['exam'].includes(state.mode) || q.answerFormat === 'fraction') return;
    const card = $(`qcard-${q.index}`);
    const zone = card?.querySelector('.q-interactive-zone');
    const inputWrap = zone?.querySelector('.q-input-box-wrap');
    if (!card || !zone || !inputWrap || card.querySelector('.alternate-answer')) return;
    if (q.index % 3 === 2) {
      const choices = numericChoices(q.answer, q.index);
      if (choices.length < 4) return;
      const panel = document.createElement('div');
      panel.className = 'alternate-answer';
      panel.innerHTML = `<div class="alternate-answer-title">Chọn đáp số phù hợp</div><div class="answer-choice-grid"></div>`;
      const grid = panel.querySelector('.answer-choice-grid');
      choices.forEach(value => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'answer-choice';
        button.textContent = `${value}${q.unit ? ` ${q.unit}` : ''}`;
        button.addEventListener('click', () => {
          grid.querySelectorAll('.answer-choice').forEach(el => el.classList.remove('selected'));
          button.classList.add('selected');
          api().setAnswer(q.index, value);
        });
        grid.appendChild(button);
      });
      inputWrap.hidden = true;
      zone.before(panel);
    } else if (q.index % 3 === 0) {
      const steps = [q.hint1, q.hint2, q.hint3].map(stripHtml).filter(Boolean);
      if (steps.length < 3) return;
      const panel = document.createElement('div');
      panel.className = 'alternate-answer';
      panel.innerHTML = `<div class="alternate-answer-title">Chạm theo thứ tự giải đúng</div><div class="sort-step-list"></div><div class="sort-answer-actions"><button type="button" class="reset-sort">Làm lại thứ tự</button><span class="tool-inline-status"></span></div>`;
      const list = panel.querySelector('.sort-step-list');
      const rotated = [1, 2, 0].map(i => ({ id: i, text: steps[i] }));
      const selected = [];
      rotated.forEach(step => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'sort-step';
        button.dataset.step = step.id;
        button.dataset.order = '•';
        button.textContent = step.text;
        button.addEventListener('click', () => {
          if (button.classList.contains('chosen')) return;
          selected.push(step.id);
          button.classList.add('chosen');
          button.dataset.order = selected.length;
          if (selected.length === 3) {
            const correct = selected.every((value, i) => value === i);
            panel.querySelector('.tool-inline-status').textContent = correct ? '✓ Thứ tự hợp lý, đáp án đã được ghi nhận.' : 'Thứ tự chưa hợp lý, con hãy làm lại.';
            if (correct) api().setAnswer(q.index, q.answer);
          }
        });
        list.appendChild(button);
      });
      panel.querySelector('.reset-sort').addEventListener('click', () => {
        selected.splice(0);
        list.querySelectorAll('.sort-step').forEach(el => { el.classList.remove('chosen'); el.dataset.order = '•'; });
        panel.querySelector('.tool-inline-status').textContent = '';
      });
      inputWrap.hidden = true;
      zone.before(panel);
    }
  }

  function scratchMarkup(index) {
    return `<section class="scratchpad-panel" id="scratch-${index}" aria-label="Bảng nháp câu ${index}">
      <div class="scratchpad-head"><strong>✍️ Bảng nháp câu ${index}</strong><span class="scratch-save-state">Tự lưu trên máy</span></div>
      <div class="scratch-toolbar">
        <button class="scratch-tool active" data-tool="pen" type="button">✏️ Bút</button><button class="scratch-tool" data-tool="eraser" type="button">⌫ Tẩy</button>
        <button class="scratch-tool" data-action="undo" type="button">↶ Hoàn tác</button><button class="scratch-tool" data-action="redo" type="button">↷ Làm lại</button>
        <button class="scratch-tool" data-segment=".35" type="button">━ Đoạn ngắn</button><button class="scratch-tool" data-segment=".6" type="button">━━ Đoạn vừa</button><button class="scratch-tool" data-segment=".85" type="button">━━━ Đoạn dài</button>
        <button class="scratch-tool" data-action="clear" type="button">🗑 Xóa bảng</button>
      </div>
      <div class="scratch-canvas-wrap"><canvas class="scratch-canvas" aria-label="Vùng vẽ bảng nháp"></canvas></div>
      <div class="scratch-text-grid"><textarea class="scratch-solution" placeholder="Gõ phép tính hoặc lời giải từng dòng..."></textarea><input class="scratch-unit" type="text" maxlength="40" placeholder="Đáp số và đơn vị"></div>
    </section>`;
  }

  function setupScratchpad(q, grade, card, toggle) {
    const panel = $(`scratch-${q.index}`);
    if (!panel || panel.dataset.ready) return;
    panel.dataset.ready = 'true';
    const canvas = panel.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const store = readStore(STORAGE.scratch, {});
    const key = questionKey(grade, q);
    const saved = store[key] && typeof store[key] === 'object' ? store[key] : {};
    const model = { actions: Array.isArray(saved.actions) ? saved.actions.slice(-80) : [], redo: [], tool: 'pen', drawing: null };
    const textArea = panel.querySelector('.scratch-solution');
    const unitInput = panel.querySelector('.scratch-unit');
    textArea.value = String(saved.text || '');
    unitInput.value = String(saved.unit || '');
    let saveTimer;
    const save = () => {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => {
        const all = readStore(STORAGE.scratch, {});
        all[key] = { actions: model.actions.slice(-80), text: textArea.value.slice(0, 4000), unit: unitInput.value.slice(0, 80), updatedAt: Date.now() };
        const entries = Object.entries(all).sort((a, b) => (b[1].updatedAt || 0) - (a[1].updatedAt || 0)).slice(0, 20);
        const savedOk = writeStore(STORAGE.scratch, Object.fromEntries(entries));
        panel.querySelector('.scratch-save-state').textContent = savedOk ? '✓ Đã tự lưu trên máy' : 'Bộ nhớ trình duyệt đã đầy';
      }, 250);
    };
    const point = event => {
      const rect = canvas.getBoundingClientRect();
      return { x: Number(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)).toFixed(4)), y: Number(Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)).toFixed(4)) };
    };
    const redraw = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
      const drawAction = action => {
        if (action.type === 'stroke') {
          const points = action.points || [];
          if (!points.length) return;
          ctx.save();
          ctx.globalCompositeOperation = action.tool === 'eraser' ? 'destination-out' : 'source-over';
          ctx.strokeStyle = '#17375e';
          ctx.lineWidth = action.tool === 'eraser' ? 24 : 3;
          ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
          points.forEach((p, i) => { const x = p.x * rect.width, y = p.y * rect.height; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); });
          if (points.length === 1) ctx.lineTo(points[0].x * rect.width + .1, points[0].y * rect.height + .1);
          ctx.stroke(); ctx.restore();
        } else if (action.type === 'segment') {
          const x1 = rect.width * .08, x2 = rect.width * (.08 + action.ratio), y = rect.height * action.y;
          ctx.save(); ctx.strokeStyle = '#0876c0'; ctx.fillStyle = '#0876c0'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
          [x1, x2].forEach(x => { ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8); ctx.stroke(); }); ctx.restore();
        }
      };
      model.actions.forEach(drawAction);
      if (model.drawing) drawAction(model.drawing);
    };
    const finishStroke = () => {
      if (!model.drawing) return;
      model.actions.push(model.drawing); model.drawing = null; model.redo = []; redraw(); save();
    };
    canvas.addEventListener('pointerdown', event => { canvas.setPointerCapture(event.pointerId); model.drawing = { type: 'stroke', tool: model.tool, points: [point(event)] }; redraw(); });
    canvas.addEventListener('pointermove', event => {
      if (!model.drawing || model.drawing.points.length >= 160) return;
      const next = point(event), last = model.drawing.points[model.drawing.points.length - 1];
      if (Math.hypot(next.x - last.x, next.y - last.y) < .003) return;
      model.drawing.points.push(next); redraw();
    });
    canvas.addEventListener('pointerup', finishStroke);
    canvas.addEventListener('pointercancel', finishStroke);
    panel.querySelectorAll('[data-tool]').forEach(button => button.addEventListener('click', () => {
      model.tool = button.dataset.tool;
      panel.querySelectorAll('[data-tool]').forEach(el => el.classList.toggle('active', el === button));
    }));
    panel.querySelectorAll('[data-segment]').forEach(button => button.addEventListener('click', () => {
      const segmentCount = model.actions.filter(action => action.type === 'segment').length;
      model.actions.push({ type: 'segment', ratio: Number(button.dataset.segment), y: Math.min(.88, .18 + (segmentCount % 6) * .13) });
      model.redo = []; redraw(); save();
    }));
    panel.querySelector('[data-action="undo"]').addEventListener('click', () => { const action = model.actions.pop(); if (action) model.redo.push(action); redraw(); save(); });
    panel.querySelector('[data-action="redo"]').addEventListener('click', () => { const action = model.redo.pop(); if (action) model.actions.push(action); redraw(); save(); });
    panel.querySelector('[data-action="clear"]').addEventListener('click', () => {
      if (!model.actions.length || !window.confirm('Xóa toàn bộ nét vẽ trong bảng nháp câu này?')) return;
      model.actions = []; model.redo = []; redraw(); save();
    });
    textArea.addEventListener('input', save); unitInput.addEventListener('input', save);
    toggle.addEventListener('click', () => requestAnimationFrame(redraw));
    if ('ResizeObserver' in window) new ResizeObserver(redraw).observe(canvas);
    redraw();
  }

  function reportMarkup(index) {
    return `<section class="report-panel" id="report-${index}"><h4>🚩 Báo lỗi câu ${index}</h4><div class="report-options">
      <label><input type="radio" name="report-${index}" value="Sai đáp án" checked> Sai đáp án</label><label><input type="radio" name="report-${index}" value="Đề khó hiểu"> Đề khó hiểu</label>
      <label><input type="radio" name="report-${index}" value="Dữ kiện không hợp lý"> Dữ kiện không hợp lý</label><label><input type="radio" name="report-${index}" value="Không đúng trình độ"> Không đúng trình độ</label><label><input type="radio" name="report-${index}" value="Lời giải chưa rõ"> Lời giải chưa rõ</label>
      </div><textarea class="report-note" maxlength="1000" placeholder="Ghi chú thêm (không bắt buộc)"></textarea><div class="report-actions"><button type="button" class="close-report">Đóng</button><button type="button" class="submit-report">Lưu báo lỗi</button></div></section>`;
  }

  function setupReport(q, grade, card, toggle) {
    const panel = $(`report-${q.index}`);
    if (!panel || panel.dataset.ready) return;
    panel.dataset.ready = 'true';
    panel.querySelector('.close-report').addEventListener('click', () => { panel.classList.remove('open'); toggle.classList.remove('active'); });
    panel.querySelector('.submit-report').addEventListener('click', () => {
      const reports = readStore(STORAGE.reports, []);
      const list = Array.isArray(reports) ? reports : [];
      const type = panel.querySelector(`input[name="report-${q.index}"]:checked`)?.value || 'Khác';
      list.unshift({ id: `${Date.now()}-${q.index}`, grade, type, note: panel.querySelector('.report-note').value.slice(0, 1000), question: stripHtml(q.text), archetype: String(q.archetype || ''), answer: String(q.answerText || q.answer), createdAt: new Date().toISOString(), page: location.pathname });
      writeStore(STORAGE.reports, list.slice(0, 100));
      panel.classList.remove('open'); toggle.classList.remove('active');
      toast('Đã lưu báo lỗi trên thiết bị. Có thể xuất tệp ở Công cụ nâng cao.');
    });
  }

  function enhanceQuestions(event) {
    const state = event?.detail || api()?.getState();
    if (!state?.questions) return;
    const compactModeLabels = { exam: 'Thi thử', practice: 'Luyện chuyên đề', wrong: 'Ôn câu sai', adaptive: 'Luyện thích ứng', teacher: 'Đề giáo viên' };
    if ($('practice-hub-summary')) $('practice-hub-summary').textContent = `${compactModeLabels[state.mode] || 'Luyện tập'} · Lớp ${state.grade} · ${state.questions.length} câu`;
    if ($('exam-code-input') && state.examCode) $('exam-code-input').value = state.examCode;
    document.body.dataset.printAnswerKey = String(Boolean(state.teacherConfig?.answerKey));
    document.body.dataset.printWorkspace = String(state.teacherConfig?.workspace !== false);
    const answerKey = $('teacher-answer-key');
    if (answerKey) {
      answerKey.innerHTML = state.mode === 'teacher' && state.teacherConfig?.answerKey
        ? `<h2>Đáp án · ${escapeHtml(state.examCode)}</h2><div class="answer-key-grid">${state.questions.map(q => `<div class="answer-key-item"><b>Câu ${q.index}:</b> ${escapeHtml(q.answerText || q.answer)}</div>`).join('')}</div>`
        : '';
    }
    state.questions.forEach(q => {
      const card = $(`qcard-${q.index}`);
      const zone = card?.querySelector('.q-interactive-zone');
      if (!card || !zone || card.querySelector('.question-tool-strip')) return;
      const strip = document.createElement('div');
      strip.className = 'question-tool-strip';
      strip.innerHTML = `<button class="question-tool-btn btn-speak-question" type="button">🔊 Đọc đề</button><button class="question-tool-btn btn-open-scratch" type="button">✍️ Bảng nháp</button><button class="question-tool-btn btn-open-report" type="button">🚩 Báo lỗi</button>`;
      zone.after(strip);
      strip.insertAdjacentHTML('afterend', scratchMarkup(q.index) + reportMarkup(q.index));
      const speak = strip.querySelector('.btn-speak-question');
      const scratch = strip.querySelector('.btn-open-scratch');
      const report = strip.querySelector('.btn-open-report');
      speak.addEventListener('click', () => speakQuestion(q, speak));
      scratch.addEventListener('click', () => { const panel = $(`scratch-${q.index}`); panel.classList.toggle('open'); scratch.classList.toggle('active', panel.classList.contains('open')); });
      report.addEventListener('click', () => { const panel = $(`report-${q.index}`); panel.classList.toggle('open'); report.classList.toggle('active', panel.classList.contains('open')); });
      setupScratchpad(q, state.grade, card, scratch);
      setupReport(q, state.grade, card, report);
      setupProgressiveHints(q, state.mode, state.teacherConfig);
      setupAlternateAnswer(q, state);
    });
  }

  document.addEventListener('imath:questions-rendered', enhanceQuestions);
  const init = () => {
    bindGlobalTools();
    if (api()) enhanceQuestions({ detail: api().getState() });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
