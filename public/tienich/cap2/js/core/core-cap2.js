/**
 * core-cap2.js
 * Động cơ vận hành chính của Tiện ích Toán Cấp 2 trực quan (Lớp 6 - 9)
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

import { curriculumCatalog } from '../data/curriculum-catalog.js?v=20260912-webp';
import { formatMathText, formatSolutionText, solutionLines, escapeHtml } from './math-renderer.js?v=20260912-export-layout3';
import { svgCap2 } from './svg-cap2.js?v=20260913-l7-r-check';
import { clcSchools, clcSchoolNotice } from './clc-schools.js';
import { assembleCLC } from './clc-generator.js';

const state = {
  grade: 8,                  // Mặc định Lớp 8 như trong bản thiết kế mẫu
  topicId: 'all',
  activities: [],
  currentActivityIndex: 0,
  completed: 0,
  correct: 0,
  review: 0,
  submitted: false,
  startedAt: Date.now()
  ,mode: 'practice', clcSecondsLeft: 0, clcTimer: null, targetSchool: ''
};

function deepFreeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
}

deepFreeze(curriculumCatalog);
const gradeDataCache = {};
const publicBanks = Object.freeze(Object.defineProperties({}, Object.fromEntries(
  [6, 7, 8, 9].map(grade => [grade, { enumerable: true, get: () => gradeDataCache[grade] }])
)));
let gradeRequestId = 0;
let initialized = false;
const $ = (id) => document.getElementById(id);

/**
 * Nạp dữ liệu câu hỏi động theo lớp
 */
export async function loadGradeData(grade) {
  if (gradeDataCache[grade]) {
    return gradeDataCache[grade];
  }

  try {
    let mod;
    if (grade === 6) {
      mod = await import('../data/data-lop-6.js?v=20260913-lo4-qa1');
    } else if (grade === 7) {
      mod = await import('../data/data-lop-7.js?v=20260913-l7-r-check');
    } else if (grade === 8) {
      mod = await import('../data/data-lop-8.js?v=20260913-l8-bo-sung-34');
    } else if (grade === 9) {
      mod = await import('../data/data-lop-9.js?v=20260911-kha-solutions');
    }

    const getTopicsFn = mod.default || mod[`getGrade${grade}Topics`];
    if (typeof getTopicsFn !== 'function') {
      throw new Error(`Không tìm thấy hàm nạp dữ liệu Lớp ${grade}`);
    }

    const topics = getTopicsFn(svgCap2);
    gradeDataCache[grade] = deepFreeze(topics);
    return topics;
  } catch (err) {
    console.error(`Lỗi nạp dữ liệu Lớp ${grade}:`, err);
    throw err;
  }
}

/**
 * Sinh danh sách 15 hoạt động đa tầng (3 Khá -> 7 Nâng cao -> 5 HSG)
 */
export function generate15Activities(grade, topicId = 'all', options = {}) {
  const bank = gradeDataCache[grade];
  if (!bank) return [];
  const count = [10, 15, 20].includes(Number(options.count)) ? Number(options.count) : 15;
  const mode = ['kha', 'nangCao', 'hsg'].includes(options.tier) ? options.tier : 'balanced';
  const random = options.random || Math.random;
  const shuffled = items => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  // Chỉ lấy từ chủ đề đang chọn; "all" mới được tổng hợp nhiều chủ đề.
  const ids = topicId === 'all'
    ? curriculumCatalog[grade].topics.filter(t => t.id !== 'all').map(t => t.id)
    : [topicId];
  const questions = ids.flatMap(id => Object.values(bank[id] || {}).flat());
  const specs = [
    { tang: 'kha', dang: 'chon', weight: 3 },
    { tang: 'nangCao', dang: 'chon', weight: 7 },
    { tang: 'hsg', dang: 'dien', weight: 3 },
    { tang: 'hsg', dang: 'chungMinh', weight: 2 }
  ].filter(s => mode === 'balanced' || s.tang === mode);
  const pools = specs.map(s => shuffled(questions.filter(q => q.tang === s.tang && q.dang === s.dang)));
  const target = Math.min(count, pools.reduce((n,p) => n+p.length, 0));
  const weight = specs.reduce((n,s) => n+s.weight, 0);
  const exact = specs.map(s => count*s.weight/weight);
  const quotas = exact.map(Math.floor);
  const remainderOrder = exact.map((n,i) => i).sort((a,b) => (exact[b]-quotas[b])-(exact[a]-quotas[a]));
  for (let n=count-quotas.reduce((a,b)=>a+b,0), i=0; i<n; i++) quotas[remainderOrder[i]]++;
  const groups = pools.map((p,i) => p.splice(0, Math.min(quotas[i],p.length)));
  // Nếu một nhóm thiếu, dùng câu còn lại của các nhóm hợp lệ trong chính kho đã chọn.
  const remaining = shuffled(pools.flatMap((p,i) => p.map(q => ({q,i}))));
  let need = target-groups.reduce((n,p)=>n+p.length,0);
  for (const {q,i} of remaining) { if (need-- <= 0) break; groups[i].push(q); }
  const selected = groups.flatMap(shuffled);
  const tiers = {
    kha: { tier: 'kha', tierLabel: 'Khá (1 – 3 bước)', levelName: 'Khá' },
    nangCao: { tier: 'nangCao', tierLabel: 'Nâng cao (phân tích)', levelName: 'Nâng cao' },
    hsg: { tier: 'hsg', tierLabel: 'HSG (tư duy chiến lược)', levelName: 'HSG' }
  };
  return selected.map((item, idx) => ({
    ...item, ...tiers[item.tang], number: idx + 1,
    userAnswer: null, status: 'unanswered', isCorrect: null,
    solutionVisible: false, selfAssessment: null
  }));
}

const CLC_HISTORY_KEY = 'imath-cap2-clc-last-v1';
function readCLCStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function writeCLCStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Thi vẫn chạy khi bộ nhớ bị chặn. */ }
}
export function generateCLCActivities() {
  const stored = readCLCStorage(CLC_HISTORY_KEY, []);
  const previous = Array.isArray(stored) ? stored.filter(id => typeof id === 'string') : [];
  const activities = assembleCLC(gradeDataCache[9], previous);
  writeCLCStorage(CLC_HISTORY_KEY, activities.map(q => q.id));
  return activities;
}
/**
 * Cập nhật thanh Hero chọn nhanh 4 lớp
 */
function renderHeroGradeButtons() {
  const container = $('hero-grade-pills');
  if (!container) return;

  container.innerHTML = '';
  [6, 7, 8, 9].forEach(g => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `grade-pill-btn ${g === state.grade ? 'is-active' : ''}`;
    btn.textContent = `Lớp ${g}`;
    btn.addEventListener('click', () => switchGrade(g));
    container.appendChild(btn);
  });
}

/**
 * Cập nhật danh sách chủ đề ở Sidebar bên trái
 */
function renderTopicSidebar() {
  const topicList = $('topic-list');
  const sidebarHeading = $('sidebar-heading-text');
  if (!topicList) return;

  if (sidebarHeading) {
    sidebarHeading.textContent = `Chủ đề Lớp ${state.grade}`;
  }

  const gradeInfo = curriculumCatalog[state.grade];
  if (!gradeInfo) return;

  topicList.innerHTML = '';
  gradeInfo.topics.forEach(t => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = `topic-nav-item ${t.id === state.topicId ? 'is-active' : ''}`;
    item.innerHTML = `
      <img class="topic-icon" src="${t.icon}" alt="" width="26" height="26" loading="lazy">
      <span class="topic-label">${escapeHtml(t.title)}</span>
      <span class="topic-arrow">›</span>
    `;
    item.addEventListener('click', () => switchTopic(t.id));
    topicList.appendChild(item);
  });
}

/**
 * Cập nhật thanh Hành trình 15 hoạt động
 */
function renderJourneyTrack() {
  const trackContainer = $('journey-nodes-wrap');
  if (!trackContainer) return;

  const createNode = (act, idx) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = `journey-node node-tier-${act.tier}`;
    if (idx === state.currentActivityIndex) { node.classList.add('is-current'); node.setAttribute('aria-current', 'step'); }
    if (act.userAnswer) node.classList.add('is-answered');
    if (act.isCorrect === true) node.classList.add('is-correct');
    if (act.isCorrect === false) node.classList.add('is-incorrect');

    node.textContent = act.number;
    node.setAttribute('aria-label', `Câu ${act.number} (${act.levelName})`);
    node.addEventListener('click', () => showActivity(idx));
    return node;
  };

  const khaActs = state.activities.filter(a => a.tang === 'kha');
  const nangCaoActs = state.activities.filter(a => a.tang === 'nangCao');
  const hsgActs = state.activities.filter(a => a.tang === 'hsg');
  const rangeLabel = (name, acts) => acts.length
    ? `${name} (Câu ${acts[0].number}${acts.length > 1 ? ' – ' + acts[acts.length - 1].number : ''})`
    : `${name} (0 câu)`;
  const heading = document.querySelector('.journey-title-box h2');
  if (heading) heading.innerHTML = `<span class="journey-eyebrow">Hành trình học tập</span><span class="journey-position">Câu ${state.currentActivityIndex + 1}<small> / ${state.activities.length}</small></span>`;

  trackContainer.innerHTML = `
    <div class="journey-group">
      <div class="journey-tier-badge badge-kha">${rangeLabel('Khá', khaActs)}</div>
      <div class="journey-nodes-row" id="group-nodes-kha"></div>
    </div>
    <div class="journey-divider-line"></div>
    <div class="journey-group">
      <div class="journey-tier-badge badge-nangCao">${rangeLabel('Nâng cao', nangCaoActs)}</div>
      <div class="journey-nodes-row" id="group-nodes-nangCao"></div>
    </div>
    <div class="journey-divider-line"></div>
    <div class="journey-group">
      <div class="journey-tier-badge badge-hsg">${rangeLabel('HSG', hsgActs)}</div>
      <div class="journey-nodes-row" id="group-nodes-hsg"></div>
    </div>
  `;

  for (const row of trackContainer.querySelectorAll('.journey-nodes-row')) {
    const acts = row.id.endsWith('kha') ? khaActs : row.id.endsWith('nangCao') ? nangCaoActs : hsgActs;
    row.parentElement.hidden = acts.length === 0;
  }

  const khaRow = $('group-nodes-kha');
  const nangCaoRow = $('group-nodes-nangCao');
  const hsgRow = $('group-nodes-hsg');

  if (khaRow) khaActs.forEach((act, i) => khaRow.appendChild(createNode(act, act.number - 1)));
  if (nangCaoRow) nangCaoActs.forEach((act, i) => nangCaoRow.appendChild(createNode(act, act.number - 1)));
  if (hsgRow) hsgActs.forEach((act, i) => hsgRow.appendChild(createNode(act, act.number - 1)));
}


/**
 * Chuẩn hoá số thập phân và phân số thành phân số tối giản để so khớp chính xác.
 */
export function normalizeAnswer(value) {
  const text = String(value ?? '').normalize('NFC').replace(/\s+/g, '').replace(/[−–]/g, '-').replace(/,/g, '.');
  if (!text || text.length > 200) return null;
  const decimal = token => {
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(token)) return null;
    const sign = token.startsWith('-') ? -1n : 1n;
    const [whole, fraction = ''] = token.replace(/^[+-]/, '').split('.');
    return [sign * BigInt((whole || '0') + fraction), 10n ** BigInt(fraction.length)];
  };
  const parts = text.split('/');
  if (parts.length > 2) return null;
  const a = decimal(parts[0]);
  const b = parts.length === 2 ? decimal(parts[1]) : [1n, 1n];
  if (!a || !b || b[0] === 0n) return null;
  let n = a[0] * b[1], d = a[1] * b[0];
  if (d < 0n) { n = -n; d = -d; }
  let x = n < 0n ? -n : n, y = d;
  while (y) [x, y] = [y, x % y];
  return String(n / x) + '/' + String(d / x);
}

export function checkInputAnswer(value, activity) {
  const normalized = normalizeAnswer(value);
  return normalized !== null && [activity.correctAnswer, ...(activity.dapAnChapNhan || [])]
    .some(answer => normalizeAnswer(answer) === normalized);
}

function renderEmptyState(message) {
  renderJourneyTrack();
  recalculateStats();
  if ($('activity-render-stage')) $('activity-render-stage').innerHTML =
    '<p class="question-sub-prompt" role="status">' + escapeHtml(message) + '</p>';
  if ($('stage-indicator')) $('stage-indicator').textContent = 'Câu 0/0';
  if ($('stage-tier-badge')) $('stage-tier-badge').textContent = '';
  for (const id of ['btn-prev-act', 'btn-prev-act-bottom', 'btn-next-act', 'btn-next-act-bottom', 'btn-skip-act', 'btn-submit-act']) {
    if ($(id)) $(id).disabled = true;
  }
}

function renderWrittenAnswer(activity) {
  const value = escapeHtml(activity.userAnswer || '');
  if (state.mode === 'clc' && activity.dang !== 'chon') {
    return '<label for="proof-answer">Bài tự luận — trình bày đầy đủ cách giải</label>' +
      '<textarea id="proof-answer" class="form-select" rows="8"' + (state.submitted ? ' disabled' : '') + '>' + value + '</textarea>' +
      (state.submitted ? '<div class="solution-box"><strong>Lời giải tham khảo — điểm tự luận chờ giáo viên chấm</strong>' + formatSolutionText(activity.solution) + '</div>' : '<p>Lời giải tham khảo được mở sau khi nộp bài.</p>');
  }
  if (activity.dang === 'dien') {
    return '<label for="written-answer">Đáp số</label>' +
      '<input id="written-answer" class="form-select" type="text" autocomplete="off" aria-describedby="written-answer-hint" value="' + value + '"' +
      (state.submitted ? ' disabled' : '') + '>' +
      '<p id="written-answer-hint" class="written-answer-hint">Chỉ nhập số, không viết x =. Ví dụ: -0,5</p>';
  }
  return '<label for="proof-answer">Bài làm của bạn</label>' +
    '<textarea id="proof-answer" class="form-select" rows="5">' + value + '</textarea>' +
    '<button type="button" class="btn-stage-secondary" id="btn-proof-solution">Xem lời giải</button>' +
    (activity.solutionVisible
      ? '<div class="solution-box">' + formatSolutionText(activity.solution) +
        '<fieldset><legend>Tự đánh giá bài chứng minh</legend>' +
        '<label><input type="radio" name="proof-assessment" value="correct"' +
        (activity.selfAssessment === true ? ' checked' : '') + '> Tôi làm đúng</label> ' +
        '<label><input type="radio" name="proof-assessment" value="review"' +
        (activity.selfAssessment === false ? ' checked' : '') + '> Tôi chưa làm đúng</label>' +
        '</fieldset></div>'
      : '');
}

function bindWrittenAnswer(activity, stage) {
  const input = stage.querySelector('#written-answer, #proof-answer');
  input?.addEventListener('input', () => {
    if (state.submitted && (state.mode === 'clc' || activity.dang !== 'chungMinh')) return;
    activity.userAnswer = input.value;
    activity.status = input.value.trim() ? 'answered' : 'unanswered';
    recalculateStats();
    renderJourneyTrack();
  });
  stage.querySelector('#btn-proof-solution')?.addEventListener('click', () => {
    activity.solutionVisible = true;
    showActivity(state.currentActivityIndex);
  });
  stage.querySelectorAll('[name="proof-assessment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      activity.selfAssessment = radio.value === 'correct';
      recalculateStats();
    });
  });
}

/**
 * Hiển thị câu hỏi tại vị trí index
 */
export function showActivity(index) {
  if (index < 0 || index >= state.activities.length) return;
  state.currentActivityIndex = index;

  const activity = state.activities[index];
  if (!activity) return;

  // Cập nhật thanh hành trình
  renderJourneyTrack();

  // Cập nhật chỉ số câu hỏi
  $('stage-indicator').textContent = `Câu ${activity.number}/${state.activities.length}`;

  // Cập nhật thẻ độ khó
  const badge = $('stage-tier-badge');
  if (badge) {
    badge.className = `stage-tier-badge tier-${activity.tier}`;
    badge.textContent = `● ${activity.tierLabel}`;
  }

  // Render nội dung bài tập
  const stage = $('activity-render-stage');
  if (!stage) return;

  stage.innerHTML = `
    <div class="question-header">
      <h3 class="question-title">
        <span class="question-num">Câu ${activity.number}.</span>
        ${formatMathText(activity.intro || (activity.svg ? activity.title : activity.prompt))}
      </h3>
    </div>

    ${activity.svg ? `<div class="question-visual-box">${activity.svg}</div>` : ''}

    ${activity.intro || activity.svg ? `
      <p class="question-sub-prompt" style="font-size: 0.92rem; font-weight: 750; color: #1e293b; margin: 10px 0 12px 0;">
        ${formatMathText(activity.prompt)}
      </p>
    ` : ''}

    ${activity.dang === 'chon' ? `<div class="options-container" role="radiogroup" aria-label="Phương án lựa chọn">
      ${activity.options.map((opt, optIdx) => {
        const letter = ['A', 'B', 'C', 'D'][optIdx];
        const textOnly = opt.replace(/^[A-D]\.\s*/, '');
        const isSelected = activity.userAnswer === letter;
        let optClass = 'opt-choice-btn';
        if (isSelected) optClass += ' is-selected';
        if (state.submitted) {
          if (letter === activity.correctAnswer) optClass += ' is-correct-opt';
          else if (isSelected && !activity.isCorrect) optClass += ' is-incorrect-opt';
        }

        return `
          <button type="button" class="${optClass}" data-letter="${letter}" role="radio" aria-checked="${isSelected}" ${state.submitted ? 'disabled' : ''}>
            <span class="opt-letter-circle">${letter}</span>
            <span class="opt-math-text">${formatMathText(textOnly)}</span>
          </button>
        `;
      }).join('')}
    </div>` : renderWrittenAnswer(activity)}

    <!-- Hộp lời giải chi tiết (hiển thị khi đã nộp bài) -->
    <div class="feedback-panel" id="feedback-panel" style="${state.submitted && activity.dang !== 'chungMinh' ? 'display:block;' : 'display:none;'}">
      ${state.submitted && activity.dang !== 'chungMinh' ? `
        <div class="solution-box ${activity.isCorrect ? 'solution-correct' : 'solution-review'}">
          <div class="solution-header">
            <strong>${activity.isCorrect ? '✓ Chính xác!' : '✕ Cần xem lại'}</strong>
            <span>Đáp án đúng: <b>${activity.correctAnswer}</b></span>
          </div>
          <div class="solution-content">
            <strong>Lời giải:</strong>${formatSolutionText(activity.solution)}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Gắn sự kiện chọn đáp án
  stage.querySelectorAll('.opt-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.submitted) return;
      const chosenLetter = btn.dataset.letter;
      selectOption(activity, chosenLetter);
    });
  });

  bindWrittenAnswer(activity, stage);

  // Cập nhật trạng thái nút chuyển câu
  const prevBtn = $('btn-prev-act');
  const nextBtn = $('btn-next-act');
  if (prevBtn) prevBtn.disabled = index === 0;
  if ($('btn-prev-act-bottom')) $('btn-prev-act-bottom').disabled = index === 0;
  if ($('btn-skip-act')) $('btn-skip-act').disabled = false;
  if (nextBtn) nextBtn.disabled = index === state.activities.length - 1;
  if ($('btn-next-act-bottom')) $('btn-next-act-bottom').disabled = index === state.activities.length - 1;

  // Nút Nộp đáp án / Nộp bài
  const submitBtn = $('btn-submit-act');
  if (submitBtn) {
    submitBtn.disabled = false;
    if (state.submitted) {
      submitBtn.textContent = 'Xem kết quả';
      submitBtn.onclick = () => openResultModal();
    } else {
      const isLast = index === state.activities.length - 1;
      submitBtn.textContent = isLast ? 'Nộp bài ✓' : 'Nộp đáp án →';
      submitBtn.onclick = () => {
        if (isLast) {
          submitExam();
        } else {
          showActivity(index + 1);
        }
      };
    }
  }
}

/**
 * Xử lý khi chọn một phương án
 */
function selectOption(activity, letter) {
  if (state.submitted || activity.dang !== 'chon') return;
  activity.userAnswer = letter;
  activity.status = 'answered';

  // Tính lại tiến độ
  recalculateStats();
  showActivity(state.currentActivityIndex);
}

/**
 * Tính toán thống kê tiến độ
 */
function recalculateStats() {
  const answered = state.activities.filter(a => state.mode !== 'clc' && a.dang === 'chungMinh'
    ? a.selfAssessment !== null
    : a.userAnswer !== null && a.userAnswer.trim() !== '').length;
  state.completed = answered;

  const progressFraction = $('progress-fraction');
  if (progressFraction) {
    progressFraction.textContent = `${answered}/${state.activities.length}`;
  }

  // Cập nhật 3 ô thống kê bên cột phải
  const khaDone = state.activities.filter(a => a.tier === 'kha' && a.userAnswer).length;
  const nangCaoDone = state.activities.filter(a => a.tier === 'nangCao' && a.userAnswer).length;
  const hsgDone = state.activities.filter(a => a.tier === 'hsg' && (state.mode !== 'clc' && a.dang === 'chungMinh' ? a.selfAssessment !== null : a.userAnswer)).length;

  if ($('stat-box-kha')) $('stat-box-kha').textContent = `${khaDone}/${state.activities.filter(a => a.tang === 'kha').length}`;
  if ($('stat-box-nangCao')) $('stat-box-nangCao').textContent = `${nangCaoDone}/${state.activities.filter(a => a.tang === 'nangCao').length}`;
  if ($('stat-box-hsg')) $('stat-box-hsg').textContent = `${hsgDone}/${state.activities.filter(a => a.tang === 'hsg').length}`;
}

/**
 * Chấm điểm và nộp bài
 */
export function submitExam() {
  if (!state.activities.length) return;
  if (state.submitted) {
    openResultModal();
    return;
  }
  state.submitted = true;
  clearInterval(state.clcTimer);
  state.correct = 0;
  state.review = 0;
  state.activities.forEach(act => {
    if (act.dang === 'chungMinh') {
      act.isCorrect = null;
      return;
    }
    act.isCorrect = act.dang === 'chon'
      ? act.userAnswer === act.correctAnswer
      : checkInputAnswer(act.userAnswer, act);
    if (act.isCorrect) state.correct++;
    else state.review++;
  });
  showActivity(state.currentActivityIndex);
  openResultModal();
}

/**
 * Mở modal kết quả
 */
function openResultModal() {
  const modal = $('result-modal');
  if (!modal) return;

  const proofs = state.activities.filter(a => a.dang === 'chungMinh');
  const total = state.activities.length - proofs.length;
  if (state.mode === 'clc') {
    const autoTotal = state.activities.filter(a => a.dang !== 'chungMinh').length;
    const autoCorrect = state.activities.filter(a => a.dang !== 'chungMinh' && a.isCorrect).length;
    const essayTotal = state.activities.filter(a => a.dang === 'chungMinh').length;
    $('result-score-num').textContent = `Trắc nghiệm: ${(autoCorrect * 0.5).toLocaleString('vi-VN')}/2,5 điểm (${autoCorrect}/${autoTotal} câu) · Tự luận: ${essayTotal} câu chờ chấm / 7,5 điểm`;
  } else $('result-score-num').textContent = `Điểm: ${state.correct}/${total}`;
  $('result-detail-text').textContent = state.mode === 'clc' ? 'Chưa có tổng điểm toàn bài. Mở từng câu để đối chiếu bài làm với lời giải tham khảo.' : `(${proofs.length} câu chứng minh tự đánh giá) · ${state.review} câu tự động cần xem lại · ${proofs.filter(a => a.selfAssessment !== null).length}/${proofs.length} câu chứng minh đã tự đánh giá`;

  // Grid câu hỏi
  const grid = $('result-q-grid');
  if (grid) {
    grid.innerHTML = state.activities.map((a, i) => `
      <button type="button" class="result-q-chip ${a.dang === 'chungMinh' ? '' : a.isCorrect ? 'chip-correct' : 'chip-incorrect'}" onclick="window.IMathCap2.showActivity(${i}); document.getElementById('result-modal').close();">
        Câu ${a.number} ${a.dang === 'chungMinh' ? (state.mode === 'clc' ? 'Chờ chấm' : 'Tự đánh giá') : a.isCorrect ? '✓' : '✕'}
      </button>
    `).join('');
  }

  if (!modal.open) modal.showModal();
}

/**
 * Chuyển lớp
 */
export async function switchGrade(newGrade) {
  newGrade = Number(newGrade);
  if (!curriculumCatalog[newGrade]) return;
  if (state.grade === newGrade && gradeDataCache[newGrade]) return;
  const requestId = ++gradeRequestId;
  state.grade = newGrade;
  state.topicId = 'all';
  const gradeSelect = $('field-select-grade');
  if (gradeSelect) gradeSelect.value = newGrade;
  syncTopicDropdown();
  renderHeroGradeButtons();
  renderTopicSidebar();
  state.activities = [];
  renderEmptyState('Đang tải ngân hàng câu hỏi…');
  try {
    await loadGradeData(newGrade);
    if (requestId !== gradeRequestId) return;
    startNewSession();
  } catch (error) {
    if (requestId === gradeRequestId) renderEmptyState('Không thể tải ngân hàng câu hỏi. Vui lòng tải lại trang.');
  }
}

/**
 * Chuyển chủ đề
 */
export function switchTopic(newTopicId) {
  if (state.mode === 'clc') return;
  if (!curriculumCatalog[state.grade]?.topics.some(t => t.id === newTopicId)) return;
  state.topicId = newTopicId;

  // Cập nhật dropdown
  const topicSelect = $('field-select-topic');
  if (topicSelect) topicSelect.value = newTopicId;

  // Cập nhật tiêu đề trên stage
  const currTopic = curriculumCatalog[state.grade]?.topics.find(t => t.id === newTopicId);
  if ($('stage-topic-title')) {
    $('stage-topic-title').textContent = `Luyện tập: ${currTopic ? currTopic.title : 'Toán Lớp ' + state.grade}`;
  }

  renderTopicSidebar();
  startNewSession();
}

/**
 * Bắt đầu phiên làm bài mới
 */
export function startNewSession() {
  if (state.mode === 'clc') return startCLCExam();
  const count = Number($('field-select-count')?.value || 15);
  const tier = $('field-select-tier')?.value || 'balanced';
  const previous = state.activities.map(q => q.id).join('|');
  state.submitted = false;
  state.currentActivityIndex = 0;
  state.correct = 0;
  state.review = 0;
  state.startedAt = Date.now();
  $('result-modal')?.close();
  state.activities = generate15Activities(state.grade, state.topicId, { count, tier });
  // Tránh lặp đúng thứ tự phiên vừa làm nếu vẫn có thể đổi trong cùng nhóm.
  if (state.activities.map(q => q.id).join('|') === previous) {
    const first = state.activities.findIndex((q,i,all) => all.slice(i+1).some(other => other.tang===q.tang && other.dang===q.dang));
    if (first >= 0) {
      const next = state.activities.findIndex((q,i) => i>first && q.tang===state.activities[first].tang && q.dang===state.activities[first].dang);
      [state.activities[first],state.activities[next]] = [state.activities[next],state.activities[first]];
      state.activities.forEach((q,i) => q.number=i+1);
    }
  }
  if ($('btn-create-15')) $('btn-create-15').textContent = `✦ Tạo ${count} hoạt động`;
  const topic = curriculumCatalog[state.grade]?.topics.find(t => t.id === state.topicId);
  if ($('stage-topic-title')) $('stage-topic-title').textContent = `Luyện tập: ${topic?.title || ''}` +
    (state.activities.length && state.activities.length < count ? ` — Kho chỉ có ${state.activities.length}/${count} câu phù hợp` : '');
  recalculateStats();
  if (!state.activities.length) {
    const hasOtherTier = tier !== 'balanced' && generate15Activities(state.grade, state.topicId).length > 0;
    renderEmptyState(hasOtherTier ? 'Chủ đề này chưa có câu hỏi thuộc tầng đã chọn' : 'Chủ đề này chưa có ngân hàng câu hỏi');
    return;
  }
  showActivity(0);
}

function updateSchoolTitle() {
  if (state.mode !== 'clc') return;
  $('stage-topic-title').textContent = state.targetSchool ? `Ôn thi hướng tới ${state.targetSchool}` : 'Thi vào lớp 10 CLC · 10 câu · 120 phút';
  $('btn-create-15').textContent = 'Tạo đề ôn luyện mới';
}

function initSchoolSelector() {
  const saved = readCLCStorage('imath-cap2-clc-school', '');
  state.targetSchool = clcSchools.includes(saved) ? saved : '';
  const select = $('field-select-school');
  const search = $('field-school-search');
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase();
  function render() {
    const matches = clcSchools.filter(name => normalize(name).includes(normalize(search.value.trim())));
    const visible = state.targetSchool && !matches.includes(state.targetSchool) ? [state.targetSchool, ...matches] : matches;
    select.innerHTML = '<option value="">Chọn trường mục tiêu</option>' + visible.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    select.value = state.targetSchool;
    $('clc-school-search-status').textContent = search.value.trim() ? `${matches.length} trường phù hợp` : '';
  }
  search.addEventListener('input', render);
  select.addEventListener('change', () => {
    state.targetSchool = clcSchools.includes(select.value) ? select.value : '';
    writeCLCStorage('imath-cap2-clc-school', state.targetSchool);
    updateSchoolTitle();
  });
  $('clc-school-notice').textContent = clcSchoolNotice;
  render();
}

function syncCLCControls() {
  const clc = state.mode === 'clc';
  $('clc-school-settings').hidden = !clc;
  for (const id of ['field-select-tier', 'field-select-count', 'field-select-topic']) {
    const el = $(id);
    if (el) { el.disabled = clc; el.closest('.form-group').hidden = clc; }
  }
  // Ô chọn trường nằm cùng nhóm với ô lớp.
  $('field-select-grade').disabled = clc;
}
export function startCLCExam() {
  if (state.mode === 'clc' && !state.submitted && state.activities.some(q => q.userAnswer) &&
      !confirm('Tạo đề mới sẽ thay bài đang làm. Bạn có muốn tiếp tục?')) return;
  let activities;
  try { activities = generateCLCActivities(); }
  catch (error) { alert(error.message); return; }
  state.mode = 'clc'; state.grade = 9; state.topicId = 'all'; state.submitted = false;
  state.currentActivityIndex = 0; state.correct = 0; state.review = 0;
  state.startedAt = Date.now(); state.clcSecondsLeft = 7200;
  clearInterval(state.clcTimer); state.activities = activities;
  $('result-modal')?.close();
  $('field-select-grade').value = '9'; syncTopicDropdown(); renderTopicSidebar(); renderHeroGradeButtons();
  syncCLCControls(); updateSchoolTitle(); recalculateStats(); showActivity(0);
  const deadline = Date.now() + 7200000;
  const tick = () => {
    if (state.submitted || state.mode !== 'clc') return;
    state.clcSecondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    $('clc-timer').textContent = `Còn ${Math.floor(state.clcSecondsLeft / 60)}:${String(state.clcSecondsLeft % 60).padStart(2, '0')}`;
    if (!state.clcSecondsLeft) submitExam();
  };
  tick(); state.clcTimer = setInterval(tick, 1000);
}
/**
 * Đồng bộ dropdown chủ đề
 */
function syncTopicDropdown() {
  const topicSelect = $('field-select-topic');
  if (!topicSelect) return;

  const topics = curriculumCatalog[state.grade]?.topics || [];
  topicSelect.innerHTML = topics.map(t => `<option value="${t.id}">${escapeHtml(t.title)}</option>`).join('');
  topicSelect.value = state.topicId;
}

/**
 * Lắng nghe phím tắt bàn phím
 */
function bindKeyShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const key = e.key.toUpperCase();
    if (['1', 'A'].includes(key)) selectByLetter('A');
    else if (['2', 'B'].includes(key)) selectByLetter('B');
    else if (['3', 'C'].includes(key)) selectByLetter('C');
    else if (['4', 'D'].includes(key)) selectByLetter('D');
    else if (e.key === 'ArrowLeft') showActivity(state.currentActivityIndex - 1);
    else if (e.key === 'ArrowRight') showActivity(state.currentActivityIndex + 1);
  });

  function selectByLetter(letter) {
    if (state.submitted) return;
    const currentAct = state.activities[state.currentActivityIndex];
    if (currentAct) selectOption(currentAct, letter);
  }
}

/**
 * Khởi động ứng dụng Toán Cấp 2
 */
export async function initCap2App() {
  if (initialized) return;
  initialized = true;
  const params = new URLSearchParams(window.location.search);
  const requestedGrade = Number(params.get('lop'));
  if ([6, 7, 8, 9].includes(requestedGrade)) state.grade = requestedGrade;
  if (params.get('che-do') === 'clc') {
    state.mode = 'clc';
    state.grade = 9;
  }
  $('field-select-grade').value = String(state.grade);
  $('field-select-mode').value = state.mode;
  // HTML giữ nguyên: nhận diện hai select theo nhãn rồi gán giá trị ngữ nghĩa lúc chạy.
  for (const group of document.querySelectorAll('#form-settings .form-group')) {
    const label = group.querySelector('label'), select = group.querySelector('select');
    if (!label || !select) continue;
    if (label.textContent.trim() === 'Phân tầng độ khó') {
      select.id = 'field-select-tier';
      [...select.options].forEach((option,i) => option.value=['balanced','kha','nangCao','hsg'][i]);
    } else if (label.textContent.trim() === 'Số hoạt động') {
      select.id = 'field-select-count';
      [...select.options].forEach(option => option.value=String(parseInt(option.textContent,10)));
    } else continue;
    label.htmlFor = select.id;
    select.addEventListener('change', () => startNewSession());
  }
  renderHeroGradeButtons();
  initSchoolSelector();
  syncTopicDropdown();

  // Nạp đủ bốn kho để API kiểm tra độ phủ có cùng dữ liệu với ứng dụng.
  await Promise.all([6, 7, 8, 9].map(loadGradeData));
  renderTopicSidebar();
  startNewSession();
  bindKeyShortcuts();

  // Gắn sự kiện các nút điều hướng
  $('btn-prev-act')?.addEventListener('click', () => showActivity(state.currentActivityIndex - 1));
  $('btn-prev-act-bottom')?.addEventListener('click', () => showActivity(state.currentActivityIndex - 1));
  $('btn-next-act')?.addEventListener('click', () => showActivity(state.currentActivityIndex + 1));
  $('btn-next-act-bottom')?.addEventListener('click', () => showActivity(state.currentActivityIndex + 1));
  $('btn-skip-act')?.addEventListener('click', () => {
    if (!state.activities.length) return;
    const nextUnanswered = state.activities.findIndex((a, idx) => idx > state.currentActivityIndex && !a.userAnswer);
    if (nextUnanswered !== -1) showActivity(nextUnanswered);
    else showActivity((state.currentActivityIndex + 1) % state.activities.length);
  });

  // Sự kiện form tạo bài ở cột phải
  $('field-select-grade')?.addEventListener('change', (e) => switchGrade(Number(e.target.value)));
  $('field-select-mode')?.addEventListener('change', (e) => {
    if (state.mode === 'clc' && !state.submitted && state.activities.some(q => q.userAnswer) &&
        !confirm('Chuyển chế độ sẽ bỏ bài thi đang làm. Bạn có muốn tiếp tục?')) { e.target.value = 'clc'; return; }
    if (e.target.value === 'clc') { state.activities = []; startCLCExam(); }
    else { state.mode = 'practice'; clearInterval(state.clcTimer); $('clc-timer').textContent = ''; syncCLCControls(); startNewSession(); }
  });
  $('field-select-topic')?.addEventListener('change', (e) => switchTopic(e.target.value));
  $('btn-create-15')?.addEventListener('click', () => startNewSession());

  console.log('iMath Toán Cấp 2 đã sẵn sàng!');
}

// Public API
if (typeof window !== 'undefined') {
  window.IMathCap2 = Object.freeze({
    catalog: curriculumCatalog,
    banks: publicBanks,
    state,
    showActivity,
    switchGrade,
    switchTopic,
    startNewSession,
    submitExam,
    formatMathText,
    formatSolutionText,
    solutionLines,
    getSnapshot: () => ({
      grade: state.grade,
      topicId: state.topicId,
      activities: state.activities,
      score: state.correct
    })
  });
}

export default initCap2App;

if (typeof document !== 'undefined') {
  const start = () => initCap2App().catch(error => {
    console.error('Không thể khởi động tiện ích Toán Cấp 2:', error);
    renderEmptyState('Không thể tải ngân hàng câu hỏi. Vui lòng tải lại trang.');
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}
