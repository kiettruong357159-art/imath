/**
 * Mô-đun lõi (Core Engine) - Tiện ích Hình học & Đại lượng trực quan (iMath)
 */

import { svgs, normalizeSvg, makeQ } from './svg.js';
import {
  buildPedagogyV2Tiers,
  getP0AuditSnapshot,
  getP11AuditSnapshot
} from './pedagogy-v2.js?v=2.1.0';
import {
  TIER_EXPERIENCE,
  HSG_SKILL_GROUPS,
  classifyHsgSkill,
  summarizeTopicTiers,
  summarizeHsgJourney,
  recordP2Attempt,
  getLearnerProfile,
  buildTopicResourceLinks,
  buildResourceManifest,
  clearP2Progress
} from './experience-p2.js?v=2.0.0';

const moduleLabels = {
    geometry: 'Hình học',
    measurement: 'Đo lường',
    fractions: 'Phân số trực quan',
    mixed: 'Thực hành tổng hợp'
  };

  const mixedTopics = [
    ['real-life', 'Tình huống thực tế'],
    ['project', 'Nhiệm vụ khám phá'],
    ['review', 'Ôn tập tổng hợp']
  ];

  const curriculumCatalog = {
    1: {
      modules: [
        { id: 'geometry', label: 'Hình học', topics: [
          ['basic-shapes', 'Hình tròn, hình vuông, hình tam giác, hình chữ nhật'],
          ['solid-blocks', 'Khối hộp chữ nhật và khối lập phương'],
          ['position-direction', 'Vị trí và định hướng']
        ] },
        { id: 'measurement', label: 'Đo lường', topics: [
          ['compare-length', 'Dài hơn và ngắn hơn'],
          ['basic-length', 'Đo độ dài cơ bản'],
          ['whole-hour', 'Xem giờ đúng'],
          ['weekdays', 'Các ngày trong tuần']
        ] },
        { id: 'mixed', label: 'Thực hành tổng hợp', topics: mixedTopics }
      ]
    },
    2: {
      modules: [
        { id: 'geometry', label: 'Hình học', topics: [
          ['points-lines', 'Điểm, đoạn thẳng, đường thẳng và đường cong'],
          ['quadrilaterals', 'Hình tứ giác'],
          ['solid-shapes', 'Khối hình'],
          ['fold-cut-compose', 'Gấp, cắt, ghép và xếp hình']
        ] },
        { id: 'measurement', label: 'Đo lường', topics: [
          ['length-units', 'Xăng-ti-mét, đề-xi-mét, mét và ki-lô-mét'],
          ['mass-capacity', 'Ki-lô-gam và lít'],
          ['time-calendar', 'Giờ, phút, ngày và tháng'],
          ['measurement-puzzles', 'Thử thách đo lường']
        ] },
        { id: 'mixed', label: 'Thực hành tổng hợp', topics: mixedTopics }
      ]
    },
    3: {
      modules: [
        { id: 'geometry', label: 'Hình học', topics: [
          ['right-angles', 'Góc vuông và góc không vuông'],
          ['midpoint-circle', 'Trung điểm và đường tròn'],
          ['rectangle-square-measures', 'Chu vi, diện tích hình vuông và hình chữ nhật']
        ] },
        { id: 'measurement', label: 'Đo lường', topics: [
          ['millimetre-gram', 'Milimét và gam'],
          ['millilitre-temperature', 'Mililít và nhiệt độ'],
          ['time', 'Thời gian']
        ] },
        { id: 'fractions', label: 'Phân số trực quan', topics: [
          ['unit-fractions', 'Một phần mấy của một hình'],
          ['fraction-quantities', 'Một phần mấy của một nhóm đồ vật']
        ] },
        { id: 'mixed', label: 'Thực hành tổng hợp', topics: mixedTopics }
      ]
    },
    4: {
      modules: [
        { id: 'geometry', label: 'Hình học', topics: [
          ['angle-types', 'Góc nhọn, góc tù và góc bẹt'],
          ['parallel-perpendicular', 'Hai đường thẳng song song và vuông góc'],
          ['parallelogram-rhombus', 'Hình bình hành và hình thoi'],
          ['area', 'Diện tích các hình']
        ] },
        { id: 'measurement', label: 'Đo lường', topics: [
          ['mass-conversion', 'Đổi đơn vị khối lượng'],
          ['area-conversion', 'Đổi đơn vị diện tích'],
          ['time-conversion', 'Đổi đơn vị thời gian']
        ] },
        { id: 'fractions', label: 'Phân số trực quan', topics: [
          ['equivalent-fractions', 'Phân số bằng nhau'],
          ['simplify-common-denominator', 'Rút gọn và quy đồng phân số'],
          ['compare-fractions', 'So sánh phân số'],
          ['add-subtract-fractions', 'Cộng và trừ phân số']
        ] },
        { id: 'mixed', label: 'Thực hành tổng hợp', topics: mixedTopics }
      ]
    },
    5: {
      modules: [
        { id: 'geometry', label: 'Hình học', topics: [
          ['triangle-trapezoid-circle', 'Hình tam giác, hình thang và hình tròn'],
          ['area', 'Diện tích các hình'],
          ['box-cube-volume', 'Hình hộp chữ nhật, hình lập phương và thể tích']
        ] },
        { id: 'measurement', label: 'Đo lường', topics: [
          ['area-units', 'Đại lượng và đơn vị diện tích'],
          ['volume-units', 'Đại lượng và đơn vị thể tích'],
          ['time', 'Thời gian'],
          ['motion-quantities', 'Chuyển động gắn với đại lượng']
        ] },
        { id: 'fractions', label: 'Phân số & tỉ lệ trực quan', topics: [
          ['fractions', 'Phân số'],
          ['decimals', 'Số thập phân'],
          ['percent', 'Tỉ số phần trăm']
        ] },
        { id: 'mixed', label: 'Thực hành tổng hợp', topics: mixedTopics }
      ]
    }
  };

  const state = {
    grade: 1,
    moduleId: 'geometry',
    topicId: 'all',
    level: 'tiered',
    count: 15,
    mode: 'activity',
    activities: [],
    currentActivityIndex: 0,
    completed: 0,
    correct: 0,
    review: 0,
    startedAt: Date.now(),
    p2Journey: null
  };

  const registry = new Map();
  const $ = (id) => document.getElementById(id);
  let toastTimer;
  let clockTimer;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // ==========================================
  // SVG VISUAL GENERATORS (RESPONSIVE, HIGH-CONTRAST & PEDAGOGICALLY DETAILED)
  // ==========================================

const numRegex = /^\s*(\d+(?:[.,]\d+)?|\d+\/\d+)\s*(cm²|dm²|m²|ha|km²|cm³|dm³|m³|cm|dm|m|km|mm|g|kg|tạ|tấn|lít|ml|giờ|phút|giây|°C|°|%|học sinh|đồng|đoạn|hình|ô|góc)?\s*$/i;

  function parseNumAndUnit(str) {
    if (!str || typeof str !== 'string') return null;
    const m = str.match(numRegex);
    if (!m) return null;
    return { num: m[1], unit: m[2] || '' };
  }


  const GRADE_CHOICE_OFFSETS = {
    1: 0,
    2: 139,
    3: 288,
    4: 438,
    5: 622
  };

  const allTopics = {};
  const gradeDataCache = {};
  let currentGradeRequestId = 0;
  const sessionRecentByGrade = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  const MAX_SESSION_HISTORY = 50;

  const TIER_PLAN = Object.freeze({
    kha: Object.freeze({ count: 3, difficulty: 3, level: 'advanced', estimatedTime: 90, label: 'Khá (1–2 bước)' }),
    gioi: Object.freeze({ count: 7, difficulty: 4, level: 'expert', estimatedTime: 150, label: 'Giỏi (phân tích)' }),
    hsg: Object.freeze({ count: 5, difficulty: 5, level: 'olympiad', estimatedTime: 240, label: 'Thi HSG (tư duy)' })
  });
  const TIER_SEQUENCE = Object.freeze(Object.entries(TIER_PLAN).flatMap(([tier, plan]) => Array(plan.count).fill(tier)));
  const ALLOWED_SKILLS = new Set([
    'visual_reasoning',
    'spatial_thinking',
    'pattern_recognition',
    'reverse_reasoning',
    'area_strategy',
    'geometry_problem_solving'
  ]);

  function inferQuestionSkill(topicId, question) {
    const text = `${topicId} ${question.clusterId || ''} ${question.title || ''} ${question.prompt || ''}`.toLowerCase();
    if (/quy luật|pattern|dãy|lặp lại|chu kì|chu kỳ/.test(text)) return 'pattern_recognition';
    if (/tìm ngược|reverse|còn thiếu|chưa biết|find-side|find-width|find-length|find-total/.test(text)) return 'reverse_reasoning';
    if (/diện tích|chu vi|area|perimeter|phần tô|phần còn lại/.test(text)) return 'area_strategy';
    if (/xoay|đối xứng|gấp|ghép|cắt|ẩn|khối|solid|vị trí|direction|góc|song song|vuông góc/.test(text)) return 'spatial_thinking';
    if (/quan sát|đếm hình|đo|thước|đồng hồ|hình vẽ|fraction|phân số|độ dài|dung tích|khối lượng/.test(text)) return 'visual_reasoning';
    return 'geometry_problem_solving';
  }

  function buildQuestionMetadata(grade, topicId, tier, question) {
    const plan = TIER_PLAN[tier];
    const skill = ALLOWED_SKILLS.has(question.skill) ? question.skill : inferQuestionSkill(topicId, question);
    return {
      grade,
      topic: topicId,
      clusterId: question.clusterId || null,
      skill,
      difficulty: plan.difficulty,
      level: plan.level,
      estimatedTime: Number(question.estimatedTime) > 0 ? Number(question.estimatedTime) : plan.estimatedTime,
      explanation: question.explanation || (tier === 'hsg'
        ? 'Yêu cầu học sinh phân tích hình hoặc dữ kiện, lựa chọn chiến lược và thực hiện chuỗi suy luận.'
        : tier === 'gioi'
          ? 'Yêu cầu kết hợp dữ kiện và suy luận trước khi tính hoặc lựa chọn đáp án.'
          : 'Kiểm tra nền tảng bằng một đến hai bước suy luận phù hợp chương trình lớp.')
    };
  }

  function processGradeData(grade, rawGradeTopics) {
    if (!rawGradeTopics) return;
    allTopics[grade] = {};
    const letters = ['A', 'B', 'C', 'D'];
    let choiceCounter = GRADE_CHOICE_OFFSETS[grade] || 0;

    for (const tid in rawGradeTopics) {
      const topicData = rawGradeTopics[tid];
      allTopics[grade][tid] = { kha: [], gioi: [], hsg: [] };
      let convertedInTopic = 0;

      // P1.1: giữ tổng 15 câu/chủ đề nhưng chỉ để câu vượt cổng chất lượng
      // trong tầng HSG; câu chưa đạt được chuyển về Giỏi.
      const tierQuestions = buildPedagogyV2Tiers(grade, tid, topicData);

      for (const tier of ['kha', 'gioi', 'hsg']) {
        for (const q of tierQuestions[tier]) {
          const metadata = buildQuestionMetadata(grade, tid, tier, q);
          const parsed = parseNumAndUnit(q.correctText);
          // Convert up to 2 numerical questions per topic into input questions
          if (parsed && convertedInTopic < 2 && (q.svg || tier !== 'kha')) {
            const normNum = parsed.num.trim();
            const unit = parsed.unit.trim();
            const displayAns = normNum + (unit ? ' ' + unit : '');
            const accepted = [normNum, displayAns];
            if (unit) accepted.push(normNum + unit);
            if (normNum.includes('.')) accepted.push(normNum.replace('.', ','));
            if (normNum.includes(',')) accepted.push(normNum.replace(',', '.'));

            allTopics[grade][tid][tier].push({
              title: q.title,
              prompt: q.prompt,
              svg: q.svg,
              type: 'input',
              options: [],
              unit: unit,
              correctAnswer: normNum,
              answer: displayAns,
              acceptedAnswers: [...new Set(accepted)],
              solution: q.solution,
              topicId: tid,
              p0Review: q.p0Review || null,
              p11Review: q.p11Review || null,
              ...metadata
            });
            convertedInTopic++;
          } else {
            // Keep as choice, rotate target letter evenly across A, B, C, D
            const targetIdx = choiceCounter % 4;
            choiceCounter++;
            const targetLetter = letters[targetIdx];

            const newOpts = [];
            let distIdx = 0;
            for (let i = 0; i < 4; i++) {
              if (i === targetIdx) newOpts.push(q.correctText);
              else newOpts.push(q.distractors[distIdx++]);
            }

            allTopics[grade][tid][tier].push({
              title: q.title,
              prompt: q.prompt,
              svg: q.svg,
              type: 'choice',
              options: [
                'A. ' + newOpts[0],
                'B. ' + newOpts[1],
                'C. ' + newOpts[2],
                'D. ' + newOpts[3]
              ],
              correctAnswer: targetLetter,
              answer: targetLetter + '. ' + q.correctText,
              solution: q.solution,
              topicId: tid,
              p0Review: q.p0Review || null,
              p11Review: q.p11Review || null,
              ...metadata
            });
          }
        }
      }
    }
  }

  async function loadGradeData(grade) {
    const requestId = ++currentGradeRequestId;
    const createBtn = $('create-activities');
    const testBtn = $('create-test');

    if (gradeDataCache[grade]) {
      if (requestId === currentGradeRequestId) {
        if (createBtn) {
          createBtn.disabled = false;
          createBtn.removeAttribute('aria-busy');
        }
        if (testBtn) {
          testBtn.disabled = false;
          testBtn.removeAttribute('aria-busy');
        }
      }
      return gradeDataCache[grade];
    }

    if (createBtn) {
      createBtn.disabled = true;
      createBtn.setAttribute('aria-busy', 'true');
    }
    if (testBtn) {
      testBtn.disabled = true;
      testBtn.setAttribute('aria-busy', 'true');
    }

    notify(`Đang tải dữ liệu Lớp ${grade}...`);

    try {
      const mod = await import(`./data-lop-${grade}.js?v=0.5.0`);
      const getTopicsFn = mod.default || mod[`getGrade${grade}Topics`];
      if (typeof getTopicsFn !== 'function') {
        throw new Error(`Dữ liệu Lớp ${grade} không hợp lệ hoặc thiếu hàm khởi tạo.`);
      }

      const rawTopics = getTopicsFn(makeQ, svgs);
      processGradeData(grade, rawTopics);
      gradeDataCache[grade] = allTopics[grade];

      if (requestId === currentGradeRequestId) {
        if (createBtn) {
          createBtn.disabled = false;
          createBtn.removeAttribute('aria-busy');
        }
        if (testBtn) {
          testBtn.disabled = false;
          testBtn.removeAttribute('aria-busy');
        }
      }
      return gradeDataCache[grade];
    } catch (error) {
      console.error(`Lỗi tải dữ liệu Lớp ${grade}:`, error);
      if (requestId === currentGradeRequestId) {
        if (createBtn) {
          createBtn.disabled = false;
          createBtn.removeAttribute('aria-busy');
        }
        if (testBtn) {
          testBtn.disabled = false;
          testBtn.removeAttribute('aria-busy');
        }
        notify(`Không thể tải dữ liệu Lớp ${grade}. Vui lòng kiểm tra kết nối mạng và thử lại.`, true);
      }
      throw error;
    }
  }


function generateTieredActivities(config) {
    const grade = Number(config.grade) || 1;
    const topicId = config.topicId;
    const gradeBank = allTopics[grade];

    if (!gradeBank) {
      throw new Error('Chưa tìm thấy ngân hàng câu hỏi cho Lớp ' + grade);
    }

    if (topicId === 'all') {
      const topicKeys = Object.keys(gradeBank);
      const N = topicKeys.length;
      const shuffled = shuffle([...topicKeys]);

      // Gán chủ đề theo tầng còn dữ liệu sau P1.1. HSG được gán trước để
      // không rơi vào chủ đề đã bị hạ toàn bộ câu HSG; các vị trí còn lại
      // vẫn bảo đảm độ phủ chủ đề cho bài Tổng hợp.
      const slotTopics = new Array(15);
      const hsgSlots = [10, 11, 12, 13, 14];
      const standardSlots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const coveredTopics = new Set();
      const hsgTopics = shuffle(topicKeys.filter(tid => gradeBank[tid]?.hsg?.length));

      for (let i = 0; i < hsgSlots.length && hsgTopics.length; i++) {
        const tid = hsgTopics[i % hsgTopics.length];
        slotTopics[hsgSlots[i]] = tid;
        coveredTopics.add(tid);
      }

      const uncoveredTopics = shuffled.filter(tid => !coveredTopics.has(tid));
      for (let i = 0; i < standardSlots.length && i < uncoveredTopics.length; i++) {
        slotTopics[standardSlots[i]] = uncoveredTopics[i];
        coveredTopics.add(uncoveredTopics[i]);
      }

      const slotsByTier = {
        kha: [0, 1, 2],
        gioi: [3, 4, 5, 6, 7, 8, 9],
        hsg: hsgSlots
      };
      for (const tier of ['kha', 'gioi', 'hsg']) {
        const eligible = shuffle(topicKeys.filter(tid => gradeBank[tid]?.[tier]?.length));
        if (!eligible.length) {
          throw new Error('Không còn câu đạt chuẩn cho tầng ' + tier + ' của Lớp ' + grade + '.');
        }
        let cursor = 0;
        for (const slot of slotsByTier[tier]) {
          if (!slotTopics[slot]) {
            slotTopics[slot] = eligible[cursor++ % eligible.length];
          }
        }
      }

      const usedQuestionSignatures = new Set();
      const usedClusters = new Set();
      const recentHistory = new Set(sessionRecentByGrade[grade] || []);
      const selected15 = [];

      for (let i = 0; i < 15; i++) {
        const tier = TIER_SEQUENCE[i];
        const tierLabel = TIER_PLAN[tier].label;
        const level = TIER_PLAN[tier].level;
        const tid = slotTopics[i];
        const bank = (gradeBank[tid] && gradeBank[tid][tier]) ? gradeBank[tid][tier] : [];
        const candidates = shuffle([...bank]);

        let chosen = null;

        // Pass 1: Unused in test + Not in recent history + No cluster collision
        for (const q of candidates) {
          const sig = q.title + '::' + q.prompt;
          const cluster = q.clusterId || null;
          if (!usedQuestionSignatures.has(sig) && !recentHistory.has(sig) && (!cluster || !usedClusters.has(cluster))) {
            chosen = q;
            break;
          }
        }

        // Pass 2: Relax recent history, still enforce no cluster collision & unused in test
        if (!chosen) {
          for (const q of candidates) {
            const sig = q.title + '::' + q.prompt;
            const cluster = q.clusterId || null;
            if (!usedQuestionSignatures.has(sig) && (!cluster || !usedClusters.has(cluster))) {
              chosen = q;
              break;
            }
          }
        }

        // Pass 3: Relax cluster collision, enforce unused in current test
        if (!chosen) {
          for (const q of candidates) {
            const sig = q.title + '::' + q.prompt;
            if (!usedQuestionSignatures.has(sig)) {
              chosen = q;
              break;
            }
          }
        }

        // Pass 4: Safety fallback if all available items were exhausted
        if (!chosen && bank.length > 0) {
          chosen = candidates[0] || bank[0];
        }

        if (chosen) {
          const chosenSig = chosen.title + '::' + chosen.prompt;
          usedQuestionSignatures.add(chosenSig);
          if (chosen.clusterId) {
            usedClusters.add(chosen.clusterId);
          }
        }

        selected15.push({
          ...chosen,
          tier,
          tierLabel,
          level,
          originalTopic: tid,
          topicId: tid
        });
      }

      // Record selected questions into session history for this grade
      if (!sessionRecentByGrade[grade]) {
        sessionRecentByGrade[grade] = [];
      }
      for (const item of selected15) {
        if (item) {
          const sig = item.title + '::' + item.prompt;
          sessionRecentByGrade[grade].push(sig);
        }
      }
      if (sessionRecentByGrade[grade].length > MAX_SESSION_HISTORY) {
        sessionRecentByGrade[grade] = sessionRecentByGrade[grade].slice(-MAX_SESSION_HISTORY);
      }

      return selected15.map((item, index) => ({
        id: `g${grade}-syn-${index + 1}-${item.originalTopic || 'topic'}-${(item.title || '').replace(/\s+/g, '')}`,
        number: index + 1,
        topicId: item.originalTopic || item.topicId,
        originalTopic: item.originalTopic || item.topicId,
        ...item,
        userAnswer: null,
        status: 'unanswered',
        isCorrect: null
      }));
    }

    const topicData = gradeBank[topicId];
    if (!topicData) {
      throw new Error('Chưa tìm thấy ngân hàng câu hỏi cho Lớp ' + grade + ', chủ đề: ' + topicId);
    }

    const khaList = (topicData.kha || []).map((q, i) => ({
      ...q,
      tier: 'kha',
      tierLabel: TIER_PLAN.kha.label,
      level: TIER_PLAN.kha.level
    }));

    const gioiList = (topicData.gioi || []).map((q, i) => ({
      ...q,
      tier: 'gioi',
      tierLabel: TIER_PLAN.gioi.label,
      level: TIER_PLAN.gioi.level
    }));

    const hsgList = (topicData.hsg || []).map((q, i) => ({
      ...q,
      tier: 'hsg',
      tierLabel: TIER_PLAN.hsg.label,
      level: TIER_PLAN.hsg.level
    }));

    // Tổng vẫn đúng 15 câu. Số câu HSG của từng chủ đề phụ thuộc kết quả
    // kiểm định P1.1; phần thiếu được bù bằng chính các câu đã hạ về Giỏi.
    const selected15 = [
      ...khaList.slice(0, 3),
      ...gioiList,
      ...hsgList
    ].slice(0, 15);

    return selected15.map((item, index) => ({
      id: config.moduleId + '-' + grade + '-' + topicId + '-' + (index + 1),
      number: index + 1,
      ...item,
      userAnswer: null,
      status: 'unanswered',
      isCorrect: null
    }));
  }

  // Router functions for modules
  function generateGeometry(config) { return generateTieredActivities(config); }
  function generateMeasurement(config) { return generateTieredActivities(config); }
  function generateFractions(config) { return generateTieredActivities(config); }
  function generateMixed(config) { return generateTieredActivities(config); }

  // ==========================================
  // CARD RENDERER & INTERACTIVE LOGIC
  // ==========================================

  function renderActivityCard(activity, currentState) {
    const article = document.createElement('article');
    article.className = 'activity-card';
    article.id = 'activity-' + activity.number;
    article.dataset.activityId = activity.id;
    article.tabIndex = -1;

    const header = document.createElement('div');
    header.className = 'card-header-bar';

    const metaLeft = document.createElement('div');
    metaLeft.className = 'card-meta-left';

    const numSpan = document.createElement('span');
    numSpan.className = 'activity-number';
    numSpan.textContent = activity.number;

    const tags = document.createElement('div');
    tags.className = 'card-tags';

    // Tier badge: Khá, Giỏi, Thi HSG
    const tierBadge = document.createElement('span');
    tierBadge.className = 'tag-badge tag-tier-' + (activity.tier || 'kha');
    tierBadge.textContent = activity.tierLabel || TIER_PLAN[activity.tier || 'kha'].label;
    tags.append(tierBadge);

    metaLeft.append(numSpan, tags);

    const statusBadge = document.createElement('span');
    statusBadge.className = 'card-status-badge status-unanswered';
    statusBadge.id = 'status-badge-' + activity.number;
    statusBadge.textContent = 'Chưa trả lời';

    header.append(metaLeft, statusBadge);

    const titleEl = document.createElement('h3');
    titleEl.textContent = activity.title;

    const promptEl = document.createElement('p');
    promptEl.className = 'activity-prompt';
    promptEl.textContent = activity.prompt;

    article.append(header, titleEl, promptEl);

    let visualWrap = null;
    if (activity.svg) {
      visualWrap = document.createElement('div');
      visualWrap.className = 'activity-visual-wrap';
      visualWrap.innerHTML = activity.svg;
      article.append(visualWrap);
    }

    if (activity.type === 'choice' && Array.isArray(activity.options)) {
      const optGrid = document.createElement('div');
      optGrid.className = 'options-grid';
      optGrid.setAttribute('role', 'radiogroup');
      optGrid.setAttribute('aria-label', 'Các lựa chọn cho câu ' + activity.number);

      activity.options.forEach((optText) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', 'false');

        const letter = optText.trim().charAt(0);
        const letterSpan = document.createElement('span');
        letterSpan.className = 'opt-letter';
        letterSpan.textContent = letter;

        const textSpan = document.createElement('span');
        textSpan.className = 'opt-text';
        textSpan.textContent = optText.substring(optText.indexOf('.') + 1).trim() || optText;

        btn.append(letterSpan, textSpan);

        btn.addEventListener('click', () => {
          handleOptionSelect(activity, letter, btn, article, statusBadge);
        });

        optGrid.append(btn);
      });

      article.append(optGrid);

      // SVG click interaction for choices
      if (visualWrap) {
        visualWrap.addEventListener('click', (e) => {
          const target = e.target.closest('[data-opt], [data-choice], .clickable-shape, .clickable-sector');
          if (target) {
            const optLetter = target.dataset.opt || target.dataset.choice;
            if (optLetter) {
              const btn = [...optGrid.querySelectorAll('.option-btn')].find(b => b.querySelector('.opt-letter')?.textContent.trim() === optLetter);
              if (btn) btn.click();
            }
          }
        });
      }
    } else if (activity.type === 'input') {
      const inputRow = document.createElement('div');
      inputRow.className = 'input-control-row';

      const inputEl = document.createElement('input');
      inputEl.type = 'text';
      inputEl.className = 'activity-input';
      inputEl.id = 'input-' + activity.number;
      inputEl.placeholder = 'Nhập kết quả...';
      inputEl.setAttribute('aria-label', 'Nhập câu trả lời cho câu ' + activity.number);
      if (activity.userAnswer) inputEl.value = activity.userAnswer;

      inputRow.append(inputEl);

      if (activity.unit) {
        const unitBadge = document.createElement('span');
        unitBadge.className = 'unit-badge';
        unitBadge.textContent = activity.unit;
        inputRow.append(unitBadge);
      }

      const confirmBtn = document.createElement('button');
      confirmBtn.type = 'button';
      confirmBtn.className = 'btn-check-item';
      confirmBtn.textContent = 'Lưu câu trả lời';
      confirmBtn.setAttribute('title', 'Lưu câu trả lời');
      inputRow.append(confirmBtn);

      const commitAnswer = () => {
        handleInputAnswer(activity, inputEl.value, inputEl, article, statusBadge);
      };

      confirmBtn.addEventListener('click', commitAnswer);
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          commitAnswer();
        }
      });
      inputEl.addEventListener('blur', () => {
        if (!state.submitted && inputEl.value.trim() && activity.userAnswer !== inputEl.value.trim()) {
          commitAnswer();
        }
      });

      article.append(inputRow);
    }

    const feedbackBox = document.createElement('div');
    feedbackBox.id = 'feedback-' + activity.number;
    feedbackBox.className = 'feedback-box';
    feedbackBox.style.display = 'none';
    article.append(feedbackBox);

    return article;
  }

  function handleOptionSelect(activity, letter, clickedBtn, cardEl, statusBadge) {
    if (state.submitted || state.submitting) return;
    activity.userAnswer = letter;
    activity.status = 'answered';
    activity.isCorrect = null;

    const buttons = cardEl.querySelectorAll('.option-btn');
    buttons.forEach((b) => {
      b.classList.remove('is-selected', 'is-correct-opt', 'is-incorrect-opt');
      b.setAttribute('aria-checked', 'false');
    });
    clickedBtn.classList.add('is-selected');
    clickedBtn.setAttribute('aria-checked', 'true');

    cardEl.classList.remove('is-correct', 'is-review', 'is-incorrect');
    cardEl.classList.add('is-complete');

    const feedbackEl = cardEl.querySelector('#feedback-' + activity.number);
    if (feedbackEl) {
      feedbackEl.style.display = 'none';
    }

    statusBadge.className = 'card-status-badge status-answered';
    statusBadge.textContent = 'Đã trả lời';

    recalculateProgress();
  }

  function checkInputAnswer(value, activity) {
    const normalize = text => String(text ?? '').normalize('NFC').trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
    let submitted = normalize(value);
    const unit = normalize(activity.unit);
    if (unit && submitted.endsWith(unit)) submitted = submitted.slice(0, -unit.length);
    const expected = normalize(activity.correctAnswer);
    if (!submitted) return false;
    if (submitted === expected) return true;
    const number = text => {
      if (/^[+-]?\d+(?:\.\d+)?$/.test(text)) return Number(text);
      const fraction = text.match(/^([+-]?\d+)\/(\d+)$/);
      return fraction && Number(fraction[2]) !== 0 ? Number(fraction[1]) / Number(fraction[2]) : NaN;
    };
    const actualNumber = number(submitted), expectedNumber = number(expected);
    return Number.isFinite(actualNumber) && Number.isFinite(expectedNumber) && Math.abs(actualNumber - expectedNumber) <= 1e-9;
  }

  function handleInputAnswer(activity, textVal, inputEl, cardEl, statusBadge) {
    if (state.submitted || state.submitting) return;
    const trimmed = (textVal || '').trim();
    activity.userAnswer = trimmed;

    cardEl.classList.remove('is-correct', 'is-review', 'is-complete', 'is-incorrect');
    const feedbackEl = cardEl.querySelector('#feedback-' + activity.number);
    if (feedbackEl) {
      feedbackEl.style.display = 'none';
    }

    if (trimmed) {
      activity.status = 'answered';
      activity.isCorrect = null;
      cardEl.classList.add('is-complete');
      statusBadge.className = 'card-status-badge status-answered';
      statusBadge.textContent = 'Đã trả lời';
    } else {
      activity.status = 'unanswered';
      activity.isCorrect = null;
      statusBadge.className = 'card-status-badge status-unanswered';
      statusBadge.textContent = 'Chưa trả lời';
    }

    recalculateProgress();
  }

  function recalculateProgress() {
    let completed = 0;
    let correct = 0;
    let review = 0;

    state.activities.forEach((act) => {
      const hasAns = (act.userAnswer !== undefined && act.userAnswer !== null && String(act.userAnswer).trim() !== '');
      if (hasAns) {
        completed += 1;
        if (act.status === 'correct') correct += 1;
        else if (act.status === 'incorrect') review += 1;
      }
    });

    state.completed = completed;
    state.correct = correct;
    state.review = review;
    updateProgress();
  }

  function evaluateSession(activities, config) {
    let correctCount = 0;
    let reviewCount = 0;

    activities.forEach((act) => {
      const cardEl = document.getElementById('activity-' + act.number);
      const statusBadge = document.getElementById('status-badge-' + act.number);
      const feedbackEl = document.getElementById('feedback-' + act.number);
      const buttons = cardEl ? cardEl.querySelectorAll('.option-btn') : [];

      const hasAnswer = (act.userAnswer !== undefined && act.userAnswer !== null && String(act.userAnswer).trim() !== '');
      let isRight = false;
      if (act.type === 'input') {
        isRight = hasAnswer && checkInputAnswer(act.userAnswer, act);
      } else {
        isRight = hasAnswer && (act.userAnswer === act.correctAnswer);
      }

      // DIRECT MUTATION OF ACTIVITY STATE
      if (hasAnswer) {
        if (isRight) {
          correctCount += 1;
          act.status = 'correct';
          act.isCorrect = true;
        } else {
          reviewCount += 1;
          act.status = 'incorrect';
          act.isCorrect = false;
        }
      } else {
        reviewCount += 1;
        act.status = 'unanswered';
        act.isCorrect = false;
      }

      // Update DOM elements if present
      if (cardEl && statusBadge && feedbackEl) {
        cardEl.classList.remove('is-correct', 'is-review', 'is-complete', 'is-incorrect');
        statusBadge.className = 'card-status-badge';

        if (act.type === 'choice') {
          buttons.forEach((b) => {
            const bLetter = b.querySelector('.opt-letter')?.textContent.trim();
            if (bLetter === act.correctAnswer) b.classList.add('is-correct-opt');
            else if (bLetter === act.userAnswer && !isRight) b.classList.add('is-incorrect-opt');
            else b.classList.remove('is-correct-opt', 'is-incorrect-opt');
          });
        }

        feedbackEl.style.display = 'flex';
        if (isRight) {
          cardEl.classList.add('is-correct');
          statusBadge.classList.add('status-correct');
          statusBadge.textContent = 'Đúng ✓';
          feedbackEl.className = 'feedback-box is-correct';
          feedbackEl.innerHTML = `
            <span class="feedback-icon">✓</span>
            <div><strong>Chính xác!</strong> <p style="margin: 3px 0 0 0;">${escapeHtml(act.solution)}</p></div>
          `;
        } else {
          cardEl.classList.add('is-review', 'is-incorrect');
          statusBadge.classList.add('status-review');
          if (hasAnswer) {
            statusBadge.textContent = 'Cần xem lại ✕';
            feedbackEl.className = 'feedback-box is-review';
            feedbackEl.innerHTML = `
              <span class="feedback-icon">✕</span>
              <div><strong>Cần xem lại:</strong> Đáp án đúng là <b>${escapeHtml(act.answer)}</b>.<p style="margin: 3px 0 0 0;">${escapeHtml(act.solution)}</p></div>
            `;
          } else {
            statusBadge.textContent = 'Chưa làm (0 điểm)';
            feedbackEl.className = 'feedback-box is-review';
            feedbackEl.innerHTML = `
              <span class="feedback-icon">✕</span>
              <div><strong>Chưa trả lời (0 điểm):</strong> Đáp án đúng là <b>${escapeHtml(act.answer)}</b>.<p style="margin: 3px 0 0 0;">${escapeHtml(act.solution)}</p></div>
            `;
          }
        }
      }
    });

    const total = activities.length;
    const msg = 'Kết quả: ' + correctCount + '/' + total + ' câu đúng. ' + (correctCount === total ? 'Xuất sắc!' : 'Hãy xem lại các câu chưa đúng nhé!');
    return {
      completed: total,
      correct: correctCount,
      review: reviewCount,
      message: msg
    };
  }

  function registerModule(moduleId, adapter) {
    if (!moduleLabels[moduleId]) throw new Error('Mô-đun không hợp lệ: ' + moduleId);
    if (!adapter || typeof adapter.generate !== 'function') throw new Error('Mô-đun cần có hàm generate(config).');
    registry.set(moduleId, {
      generate: adapter.generate,
      render: typeof adapter.render === 'function' ? adapter.render : renderActivityCard,
      check: typeof adapter.check === 'function' ? adapter.check : evaluateSession,
      solution: typeof adapter.solution === 'function' ? adapter.solution : null
    });
  }

  // Register modules
  registerModule('geometry', {
    generate: generateGeometry,
    render: renderActivityCard,
    check: evaluateSession
  });

  registerModule('measurement', {
    generate: generateMeasurement,
    render: renderActivityCard,
    check: evaluateSession
  });

  registerModule('fractions', {
    generate: generateFractions,
    render: renderActivityCard,
    check: evaluateSession
  });

  registerModule('mixed', {
    generate: generateMixed,
    render: renderActivityCard,
    check: evaluateSession
  });

  // ==========================================
  // CONFIG & SYNC LOGIC
  // ==========================================

  function currentConfig() {
    const moduleSelect = $('module-select');
    const topicSelect = $('topic-select');
    const isAll = (topicSelect.value === 'all');
    const journey = state.p2Journey;
    return {
      grade: state.grade,
      moduleId: state.moduleId,
      moduleLabel: journey ? 'Hành trình HSG' : (isAll ? 'Tổng hợp toàn diện' : (moduleSelect.options[moduleSelect.selectedIndex]?.text || moduleLabels[state.moduleId] || 'Hình học')),
      topicId: journey ? ('hsg-' + journey.skillKey) : topicSelect.value,
      topicLabel: journey ? ('Hành trình HSG · ' + journey.label) : (isAll ? ('Tổng hợp kiến thức Lớp ' + state.grade) : (topicSelect.options[topicSelect.selectedIndex]?.text || '')),
      level: 'tiered',
      levelLabel: 'Khá → Giỏi → Thi HSG',
      count: 15,
      mode: state.mode
    };
  }

  function currentCurriculum() {
    return curriculumCatalog[state.grade] || curriculumCatalog[1];
  }

  function copyCurriculum(grade = state.grade) {
    const numericGrade = Number(grade);
    const resolvedGrade = curriculumCatalog[numericGrade] ? numericGrade : state.grade;
    const curriculum = curriculumCatalog[resolvedGrade] || curriculumCatalog[1];
    return {
      grade: resolvedGrade,
      modules: curriculum.modules.map((module) => ({
        id: module.id,
        label: module.label,
        topics: module.topics.map(([id, label]) => [id, label])
      }))
    };
  }

  function syncModules() {
    const select = $('module-select');
    const previous = state.moduleId;
    const modules = currentCurriculum().modules;
    select.replaceChildren(...modules.map((module) => {
      const option = document.createElement('option');
      option.value = module.id;
      option.textContent = module.label;
      return option;
    }));
    select.value = modules.some((module) => module.id === previous) ? previous : modules[0].id;
    state.moduleId = select.value;
    syncTopics();
  }

  function syncTopics() {
    const select = $('topic-select');
    const previous = state.topicId;
    const module = currentCurriculum().modules.find((item) => item.id === state.moduleId) || currentCurriculum().modules[0];
    select.innerHTML = '';

    // First option: "Tổng hợp kiến thức Lớp X"
    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Tổng hợp kiến thức Lớp ' + state.grade;
    select.append(allOpt);

    module.topics.forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      select.append(option);
    });
    if ([...select.options].some((option) => option.value === previous)) {
      select.value = previous;
    } else {
      select.value = select.options[0]?.value || 'all';
    }
    state.topicId = select.value;
    renderTopicNavigation();
    updateSummary();
  }

  let pendingResetAction = null;

  function confirmBeforeReset(actionCallback) {
    const isWorkingOrSubmitted = (state.completed > 0 || state.submitted);
    if (!isWorkingOrSubmitted) {
      actionCallback();
      return;
    }

    pendingResetAction = actionCallback;
    const msg = state.submitted
      ? 'Em đã nộp bài và đang xem lại kết quả. Em có chắc chắn muốn làm bài mới? Toàn bộ kết quả hiện tại sẽ bị xóa.'
      : 'Em đang làm bài dở (đã trả lời ' + state.completed + '/' + state.activities.length + ' câu). Toàn bộ câu trả lời hiện tại sẽ bị xóa. Em có chắc chắn muốn làm bài mới?';
    if ($('reset-message')) $('reset-message').textContent = msg;
    openDialog('reset-dialog');
  }

  function renderTopicNavigation() {
    const navigation = $('topic-navigation');
    if (!navigation) return;
    const module = currentCurriculum().modules.find((item) => item.id === state.moduleId) || currentCurriculum().modules[0];
    const entries = [['all', 'Tổng hợp kiến thức Lớp ' + state.grade], ...module.topics];
    navigation.replaceChildren(...entries.map(([value, label]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'topic-nav-button' + (value === 'all' ? ' is-all' : '') + (value === state.topicId ? ' is-active' : '');
      button.textContent = label;
      button.setAttribute('aria-pressed', String(value === state.topicId));
      button.addEventListener('click', () => {
        if (value === state.topicId) return;
        confirmBeforeReset(() => {
          const select = $('topic-select');
          select.value = value;
          state.topicId = value;
          renderTopicNavigation();
          updateSummary();
          buildActivities(state.mode);
          $('topic-rail')?.classList.remove('is-open');
          $('topics-toggle')?.setAttribute('aria-expanded', 'false');
        });
      });
      return button;
    }));
  }

  function updateSummary() {
    const config = currentConfig();
    $('hero-grade').textContent = 'Lớp ' + config.grade;
    $('hero-module').textContent = config.moduleLabel;
    $('hero-topic').textContent = config.topicLabel;
    if ($('journey-message')) {
      $('journey-message').innerHTML = state.p2Journey
        ? 'Thử thách theo kỹ năng<br><strong>' + escapeHtml(state.p2Journey.label) + '</strong>'
        : 'Mỗi thử thách là một bước tiến.<br><strong>Cùng chinh phục 15 hoạt động nhé!</strong>';
    }
    $('mobile-config-summary').textContent = '15 hoạt động đa tầng';
    $('session-summary').textContent = 'Phân tầng theo kiểm định HSG';
    $('total-count').textContent = 15;
    if ($('stage-total-count')) $('stage-total-count').textContent = 15;
    if ($('topic-rail-title')) $('topic-rail-title').textContent = 'Lớp ' + config.grade;
    if ($('topic-rail-module')) $('topic-rail-module').textContent = config.moduleLabel;
    renderTopicNavigation();
    updateP2EntrySummary();
  }

  function updateTierSummary(activities) {
    const counts = { kha: 0, gioi: 0, hsg: 0 };
    for (const activity of activities) {
      if (counts[activity.tier] !== undefined) counts[activity.tier]++;
    }
    const summaryText = counts.kha + ' Khá · ' + counts.gioi + ' Giỏi · ' + counts.hsg + ' HSG';
    if ($('session-summary')) $('session-summary').textContent = summaryText;
    if ($('mobile-config-summary')) $('mobile-config-summary').textContent = activities.length + ' hoạt động · ' + summaryText;
    if ($('total-count')) $('total-count').textContent = String(activities.length);
    if ($('stage-total-count')) $('stage-total-count').textContent = String(activities.length);

    const signs = {
      kha: document.querySelector('.tier-sign-kha'),
      gioi: document.querySelector('.tier-sign-gioi'),
      hsg: document.querySelector('.tier-sign-hsg')
    };
    let start = 1;
    for (const tier of ['kha', 'gioi', 'hsg']) {
      const sign = signs[tier];
      const count = counts[tier];
      if (sign) {
        sign.hidden = count === 0;
        const range = sign.querySelector('span');
        if (range && count > 0) {
          range.textContent = count === 1
            ? 'Câu ' + start
            : 'Câu ' + start + ' – ' + (start + count - 1);
        }
      }
      start += count;
    }
    return { counts, summaryText };
  }

  function selectedTopicContext() {
    const select = $('topic-select');
    const topicId = select?.value || state.topicId || 'all';
    const topicLabel = topicId === 'all'
      ? 'Tổng hợp kiến thức Lớp ' + state.grade
      : (select?.options?.[select.selectedIndex]?.text || topicId);
    return { topicId, topicLabel };
  }

  function updateP2EntrySummary() {
    if (!$('p2-current-level') || !$('p2-current-route')) return;
    const { topicId } = selectedTopicContext();
    const profile = getLearnerProfile(state.grade, topicId);
    $('p2-current-level').textContent = profile.levelLabel;
    $('p2-current-route').textContent = profile.recommendation;
  }

  function accuracyText(stat) {
    return stat?.accuracy === null || stat?.accuracy === undefined
      ? 'Chưa có kết quả'
      : stat.accuracy + '% đúng';
  }

  function openCompetencyDashboard() {
    const content = $('competency-content');
    if (!content) return;
    const { topicId, topicLabel } = selectedTopicContext();
    const profile = getLearnerProfile(state.grade, topicId);
    const counts = summarizeTopicTiers(allTopics, state.grade, topicId);
    const resources = buildTopicResourceLinks(state.grade, topicId);
    const levelIcon = profile.level === 'hsg' ? '★' : profile.level === 'gioi' ? '◆' : profile.level === 'kha' ? '●' : '◎';

    content.innerHTML = `
      <section class="competency-hero competency-level-${escapeHtml(profile.level)}">
        <span class="competency-level-icon" aria-hidden="true">${levelIcon}</span>
        <div><small>Lớp ${state.grade} · ${escapeHtml(topicLabel)}</small><h3>${escapeHtml(profile.levelLabel)}</h3><p>${escapeHtml(profile.message)}</p></div>
        <span class="attempt-badge"><strong>${profile.attemptCount}</strong> lượt đã nộp</span>
      </section>
      <div class="p2-section-title"><h3>Ba tầng học tập</h3><span>${counts.total} câu hiện có trong phạm vi này</span></div>
      <section class="tier-capability-grid" aria-label="Năng lực theo tầng">
        ${['kha', 'gioi', 'hsg'].map(tier => {
          const guide = TIER_EXPERIENCE[tier];
          const stat = profile.tiers[tier];
          const width = stat.accuracy === null ? 0 : stat.accuracy;
          return `<article class="tier-capability-card tier-${tier}"><div class="tier-capability-top"><strong>${guide.label}</strong><b>${counts[tier]}</b></div><h4>${guide.purpose}</h4><p>${guide.description}</p><div class="tier-progress" aria-label="${escapeHtml(accuracyText(stat))}"><span style="width:${width}%"></span></div><div class="tier-capability-footer"><span>${accuracyText(stat)}</span><span>${stat.correct}/${stat.total} câu</span></div></article>`;
        }).join('')}
      </section>
      <div class="p2-section-title"><h3>Lộ trình gợi ý</h3><span>Dựa trên các lượt đã nộp</span></div>
      <section class="learning-route-card"><span aria-hidden="true">➜</span><div><strong>${escapeHtml(profile.recommendation)}</strong><p>iMath chỉ tăng mức khi kết quả ở tầng trước đã đủ ổn định.</p></div><button class="button button-primary" type="button" data-p2-focus-tier="${profile.nextTier}">Luyện mức ${escapeHtml(TIER_EXPERIENCE[profile.nextTier].label)}</button></section>
      <div class="p2-section-title"><h3>Liên kết chuyên đề với Tài liệu</h3><span>Kiến trúc sẵn sàng cho Toán lớp 1–5</span></div>
      <nav class="resource-path" aria-label="Năm chặng học tập">
        ${resources.map(item => `<a class="resource-step" href="${escapeHtml(item.url)}" target="_blank" rel="noopener"><span>${item.icon}</span><strong>${escapeHtml(item.label)}</strong><small>${item.key === 'foundation' ? 'Đọc và nhớ kiến thức cốt lõi.' : item.key === 'practice' ? 'Củng cố tầng Khá.' : item.key === 'advanced' ? 'Vận dụng ở tầng Giỏi.' : item.key === 'olympiad' ? 'Thử thách chiến lược HSG.' : 'Đánh giá sau chuyên đề.'}</small><b>Mở Tài liệu ↗</b></a>`).join('')}
      </nav>`;

    content.querySelectorAll('[data-p2-focus-tier]').forEach(button => button.addEventListener('click', () => {
      const tier = button.dataset.p2FocusTier;
      const index = state.activities.findIndex(activity => activity.tier === tier);
      closeDialog('competency-dialog');
      if (index >= 0) {
        showActivity(index, true);
      } else if (tier === 'hsg') {
        openHsgJourneyDashboard();
      } else {
        notify('Phiên hiện tại chưa có câu ở mức ' + (TIER_EXPERIENCE[tier]?.label || tier) + '.');
      }
    }));
    openDialog('competency-dialog');
  }

  function openHsgJourneyDashboard() {
    const content = $('hsg-journey-content');
    if (!content) return;
    const profile = getLearnerProfile(state.grade, 'all');
    const groups = summarizeHsgJourney(allTopics, state.grade, profile.allGradeAttempts);
    const total = groups.reduce((sum, group) => sum + group.count, 0);
    $('hsg-journey-title').textContent = 'Hành trình HSG · Lớp ' + state.grade;
    content.innerHTML = `
      <div class="p2-section-title"><h3>${total} bài HSG đã vượt cổng chất lượng</h3><span>Chọn theo kỹ năng tư duy</span></div>
      <section class="hsg-skill-grid">
        ${groups.map(group => `<article class="hsg-skill-card"><div class="hsg-skill-heading"><span aria-hidden="true">${group.icon}</span><div><h3>${escapeHtml(group.label)}</h3><small>${group.count} bài · ${group.topicCount} chủ đề</small></div></div><p>${escapeHtml(group.description)}</p><div class="hsg-skill-stat"><span>Đã làm: <strong>${group.answered}</strong></span><span>${group.accuracy === null ? 'Chưa có kết quả' : group.accuracy + '% đúng'}</span></div><button class="button button-hsg" type="button" data-hsg-skill="${group.key}" ${group.count ? '' : 'disabled'}>${group.count ? 'Bắt đầu hành trình' : 'Chưa có bài đạt chuẩn'}</button></article>`).join('')}
      </section>`;
    content.querySelectorAll('[data-hsg-skill]').forEach(button => button.addEventListener('click', () => startHsgSkillJourney(button.dataset.hsgSkill)));
    closeDialog('competency-dialog');
    openDialog('hsg-journey-dialog');
  }

  function buildHsgSkillActivities(skillKey) {
    const group = HSG_SKILL_GROUPS.find(item => item.key === skillKey);
    const gradeBank = allTopics[state.grade] || {};
    const pool = [];
    const signatures = new Set();
    for (const [topicId, tiers] of Object.entries(gradeBank)) {
      for (const question of tiers.hsg || []) {
        if (classifyHsgSkill(question) !== skillKey) continue;
        const signature = (question.clusterId || question.title) + '::' + question.prompt;
        if (signatures.has(signature)) continue;
        signatures.add(signature);
        pool.push({ ...question, originalTopic: topicId, topicId });
      }
    }
    if (!group || !pool.length) {
      notify('Lớp ' + state.grade + ' chưa có bài đạt chuẩn cho kỹ năng này.', true);
      return;
    }

    const activities = shuffle(pool).slice(0, 15).map((question, index) => ({
      ...question,
      id: 'p2-hsg-' + state.grade + '-' + skillKey + '-' + (index + 1),
      number: index + 1,
      tier: 'hsg',
      tierLabel: TIER_PLAN.hsg.label,
      level: TIER_PLAN.hsg.level,
      userAnswer: null,
      status: 'unanswered',
      isCorrect: null
    }));

    state.p2Journey = { skillKey, label: group.label };
    state.submitted = false;
    state.submitting = false;
    state.finishedAt = null;
    state.sessionResult = null;
    state.mode = 'hsg-journey';
    state.completed = 0;
    state.correct = 0;
    state.review = 0;
    state.startedAt = Date.now();
    state.currentActivityIndex = 0;
    state.activities = activities;
    ['check-session', 'bottom-check'].forEach(id => { if ($(id)) $(id).textContent = 'Nộp bài'; });

    const adapter = registry.get(state.moduleId) || registry.get('geometry');
    const container = $('activity-list');
    container.innerHTML = '';
    activities.forEach(activity => container.append(adapter.render(activity, state)));
    updateSummary();
    updateTierSummary(activities);
    renderActivityMap();
    renderActivityDots();
    showActivity(0);
    updateProgress();
    updateClock();
    if ($('view-tab-practice')) $('view-tab-practice').textContent = 'Hành trình HSG';
    $('view-tab-practice')?.classList.add('is-active');
    $('view-tab-practice')?.setAttribute('aria-current', 'page');
    $('view-tab-result')?.classList.remove('is-active');
    $('view-tab-result')?.removeAttribute('aria-current');
    closeDialog('hsg-journey-dialog');
    document.querySelector('.practice-stage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    notify('Đã tạo Hành trình HSG “' + group.label + '” gồm ' + activities.length + ' bài đạt chuẩn.');
  }

  function startHsgSkillJourney(skillKey) {
    confirmBeforeReset(() => buildHsgSkillActivities(skillKey));
  }

  function buildActivities(mode = 'activity') {
    state.p2Journey = null;
    state.submitted = false;
    state.submitting = false;
    state.finishedAt = null;
    state.sessionResult = null;
    ['check-session', 'bottom-check'].forEach(id => { if ($(id)) $(id).textContent = 'Nộp bài'; });
    state.mode = mode;
    state.completed = 0;
    state.correct = 0;
    state.review = 0;
    state.startedAt = Date.now();
    state.currentActivityIndex = 0;

    const config = currentConfig();
    const adapter = registry.get(config.moduleId) || registry.get('geometry');
    const container = $('activity-list');
    container.innerHTML = '';

    try {
      const activities = adapter.generate(config);
      state.activities = activities;
      const tierSummary = updateTierSummary(activities);

      activities.forEach((activity) => {
        const card = adapter.render(activity, state);
        container.append(card);
      });

      renderActivityMap();
      renderActivityDots();
      showActivity(0);
      updateProgress();
      updateClock();

      const practiceTab = $('view-tab-practice');
      if (practiceTab) {
        practiceTab.textContent = (mode === 'test' ? 'Kiểm tra' : 'Thực hành');
        practiceTab.classList.add('is-active');
        practiceTab.setAttribute('aria-current', 'page');
        $('view-tab-result')?.classList.remove('is-active');
        $('view-tab-result')?.removeAttribute('aria-current');
      }

      notify('Đã tạo 15 hoạt động (' + tierSummary.summaryText + ') cho ' + config.topicLabel);
    } catch (error) {
      container.innerHTML = '<div class="activity-placeholder" role="alert">Không thể tạo hoạt động: ' + escapeHtml(error.message) + '</div>';
      notify(error.message, true);
    }
  }

  function renderActivityMap() {
    const map = $('activity-map');
    map.innerHTML = '';
    document.body.classList.toggle('is-hsg-journey', state.mode === 'hsg-journey');

    state.activities.forEach((activity, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'map-button tier-' + (activity.tier || 'kha');
      button.id = 'map-btn-' + activity.number;
      button.textContent = activity.number;
      const tierNames = { kha: 'Khá', gioi: 'Giỏi', hsg: 'Thi HSG' };
      const tierName = tierNames[activity.tier] || 'Khá';
      button.setAttribute('aria-label', 'Đến hoạt động ' + activity.number + ' (' + tierName + ')');
      button.setAttribute('title', 'Hoạt động ' + activity.number + ' - Tầng: ' + tierName);
      if (state.mode === 'hsg-journey') {
        const denominator = Math.max(1, state.activities.length - 1);
        button.style.setProperty('--map-x', (44 + (index / denominator) * 46).toFixed(2) + '%');
        button.style.setProperty('--map-y', (148 + ((index % 3) - 1) * 10) + 'px');
      }
      button.addEventListener('click', () => {
        showActivity(activity.number - 1, true);
      });
      map.append(button);
    });
    updateProgress();
  }

  function renderActivityDots() {
    const dots = $('activity-dots');
    if (!dots) return;
    dots.replaceChildren(...state.activities.map((activity, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'activity-dot' + (index === state.currentActivityIndex ? ' is-current' : '');
      dot.dataset.activity = String(activity.number);
      dot.textContent = activity.number;
      dot.setAttribute('aria-label', 'Đến câu ' + activity.number);
      dot.addEventListener('click', () => showActivity(index));
      return dot;
    }));
  }

  function showActivity(index, focusStage = false) {
    if (!state.activities.length) return;
    const bounded = Math.max(0, Math.min(state.activities.length - 1, Number(index) || 0));
    state.currentActivityIndex = bounded;
    document.querySelectorAll('.activity-card').forEach((card, cardIndex) => {
      const current = cardIndex === bounded;
      card.classList.toggle('is-current', current);
      card.setAttribute('aria-hidden', String(!current));
    });
    document.querySelectorAll('.map-button').forEach((button, buttonIndex) => button.classList.toggle('is-current', buttonIndex === bounded));
    document.querySelectorAll('.activity-dot').forEach((dot, dotIndex) => dot.classList.toggle('is-current', dotIndex === bounded));
    if ($('current-activity-number')) $('current-activity-number').textContent = String(bounded + 1);
    if ($('stage-total-count')) $('stage-total-count').textContent = String(state.activities.length);
    if ($('previous-activity')) $('previous-activity').disabled = bounded === 0;
    if ($('next-activity')) {
      $('next-activity').disabled = false;
      $('next-activity').textContent = bounded === state.activities.length - 1 ? (state.submitted ? 'Xem kết quả' : 'Nộp bài ✓') : 'Câu tiếp →';
    }
    if (focusStage) {
      $('practice-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => document.getElementById('activity-' + (bounded + 1))?.focus?.({ preventScroll: true }), 250);
    }
  }

  function updateProgress() {
    const total = state.activities.length || 15;
    const percent = total ? Math.round((state.completed / total) * 100) : 0;
    $('completed-count').textContent = state.completed;
    $('total-count').textContent = total;
    $('progress-fill').style.width = percent + '%';
    if ($('rail-progress-fraction')) $('rail-progress-fraction').textContent = state.completed + '/' + total;
    const track = document.querySelector('.progress-track');
    track?.setAttribute('aria-valuenow', String(percent));

    const statCorrect = $('stat-correct') || $('correct-count')?.parentElement;
    const statReview = $('stat-review') || $('review-count')?.parentElement;
    const railScore = $('rail-score-grid') || document.querySelector('.rail-score-grid');

    if (state.submitted) {
      document.body.classList.remove('is-pre-submit');
      if (statCorrect) statCorrect.style.display = '';
      if (statReview) statReview.style.display = '';
      if (railScore) railScore.style.display = '';
      $('correct-count').textContent = state.correct;
      $('review-count').textContent = state.review;

      const correctByTier = { kha: 0, gioi: 0, hsg: 0 };
      state.activities.forEach((activity) => {
        if (activity.status === 'correct' && Object.hasOwn(correctByTier, activity.tier)) correctByTier[activity.tier] += 1;
      });
      if ($('score-kha')) $('score-kha').textContent = correctByTier.kha;
      if ($('score-gioi')) $('score-gioi').textContent = correctByTier.gioi;
      if ($('score-hsg')) $('score-hsg').textContent = correctByTier.hsg;
    } else {
      document.body.classList.add('is-pre-submit');
      if (statCorrect) statCorrect.style.display = 'none';
      if (statReview) statReview.style.display = 'none';
      if (railScore) railScore.style.display = 'none';
      $('correct-count').textContent = '0';
      $('review-count').textContent = '0';
      if ($('score-kha')) $('score-kha').textContent = '0';
      if ($('score-gioi')) $('score-gioi').textContent = '0';
      if ($('score-hsg')) $('score-hsg').textContent = '0';
    }

    state.activities.forEach((act) => {
      const mapBtn = document.getElementById('map-btn-' + act.number);
      if (!mapBtn) return;
      mapBtn.classList.remove('is-complete', 'is-correct', 'is-review', 'is-incorrect');
      if (state.submitted) {
        if (act.status === 'correct') {
          mapBtn.classList.add('is-correct');
        } else {
          mapBtn.classList.add('is-review', 'is-incorrect');
        }
      } else {
        if (act.userAnswer !== undefined && act.userAnswer !== null && String(act.userAnswer).trim() !== '') {
          mapBtn.classList.add('is-complete');
        }
      }
      mapBtn.classList.toggle('is-current', act.number - 1 === state.currentActivityIndex);
    });
  }

  function setProgress(result = {}) {
    const total = state.activities.length || 15;
    const clamp = (value, maximum) => Math.max(0, Math.min(maximum, Math.round(Number(value) || 0)));
    const completed = clamp(result.completed, total);
    const correct = clamp(result.correct, completed);
    const review = clamp(result.review, completed - correct);
    state.completed = completed;
    state.correct = correct;
    state.review = review;
    updateProgress();
    return { completed, correct, review };
  }

  function checkCurrentSession() {
    if (state.submitting || !state.activities.length) return;
    if (state.submitted) { showSessionResult(); return; }
    state.activities.forEach(act => {
      if (act.type === 'input') {
        const val = $('input-' + act.number)?.value.trim() || '';
        act.userAnswer = val;
        act.status = val ? 'answered' : 'unanswered';
      }
    });
    recalculateProgress();

    const unanswered = state.activities.filter(act => !String(act.userAnswer ?? '').trim()).length;
    $('submit-message').textContent = unanswered
      ? 'Em còn ' + unanswered + '/' + state.activities.length + ' câu chưa trả lời. Em muốn quay lại làm tiếp hay vẫn nộp bài?'
      : 'Em đã trả lời đủ ' + state.activities.length + '/' + state.activities.length + ' câu. Em có chắc chắn muốn nộp bài để xem kết quả không?';
    openDialog('submit-dialog');
  }

  function showSessionResult() {
    const result = state.sessionResult;
    if (!result) { notify('Em chưa nộp bài. Hãy hoàn thành rồi bấm Nộp bài nhé!'); return; }
    const tiers = [['Khá', 'kha'], ['Giỏi', 'gioi'], ['Thi HSG', 'hsg']];
    const profile = getLearnerProfile(state.grade, state.p2Journey ? 'all' : state.topicId);
    $('result-content').innerHTML = `
      <div class="result-score"><span>${result.score.toFixed(1).replace('.', ',')}<small>/10</small></span><div><strong>${result.correct === result.total ? 'Em đã hoàn thành xuất sắc!' : 'Em đã hoàn thành lượt học!'}</strong><p>${result.correct}/${result.total} câu đúng · Thời gian ${result.time}</p></div></div>
      <p class="result-note">${state.mode === 'test' ? 'Bài kiểm tra' : 'Lượt thực hành'} · Điểm = số câu đúng ÷ tổng số câu × 10. Các câu có trọng số bằng nhau.</p>
      <div class="result-counts"><span>Đúng<strong>${result.correct}</strong></span><span>Sai<strong>${result.wrong}</strong></span><span>Chưa làm<strong>${result.unanswered}</strong></span></div>
      <div class="result-tiers">${tiers.map(([name, tier]) => { const group = state.activities.filter(a => a.tier === tier); return group.length ? `<div><span>${name}</span><strong>${group.filter(a => a.isCorrect).length}/${group.length} câu đúng</strong></div>` : ''; }).join('')}</div>
      <div class="result-competency"><span aria-hidden="true">◎</span><div><strong>${escapeHtml(profile.levelLabel)}</strong><p>${escapeHtml(profile.recommendation)}</p></div><button type="button" data-open-competency-result>Xem năng lực</button></div>
      <h3>Xem lại từng câu</h3><p class="result-note">✓ Đúng · ✕ Sai · — Chưa làm. Bấm số câu để xem đáp án và lời giải.</p>
      <div class="result-questions">${state.activities.map((act, index) => `<button type="button" class="result-question ${act.isCorrect ? 'answer-correct' : 'answer-review'}" data-review-index="${index}" aria-label="Câu ${index + 1}: ${act.isCorrect ? 'đúng' : String(act.userAnswer ?? '').trim() ? 'sai' : 'chưa làm'}">${index + 1}<span>${act.isCorrect ? '✓' : String(act.userAnswer ?? '').trim() ? '✕' : '—'}</span></button>`).join('')}</div>`;
    $('result-content').querySelectorAll('[data-review-index]').forEach(button => button.addEventListener('click', () => { closeDialog('result-dialog'); showActivity(Number(button.dataset.reviewIndex), true); }));
    $('result-content').querySelector('[data-open-competency-result]')?.addEventListener('click', () => { closeDialog('result-dialog'); openCompetencyDashboard(); });
    openDialog('result-dialog');
  }

  async function submitCurrentSession() {
    if (state.submitted || state.submitting) return;
    closeDialog('submit-dialog');
    const adapter = registry.get(state.moduleId) || registry.get('geometry');
    if (!adapter?.check) {
      notify('Mô-đun nội dung chưa gắn bộ chấm', true);
      return;
    }

    try {
      state.submitting = true;
      // Pass state.activities directly, NOT a clone!
      const result = await adapter.check(state.activities, currentConfig());
      if (!result || typeof result !== 'object') throw new Error('Bộ chấm chưa trả về kết quả hợp lệ.');
      state.submitted = true;
      state.finishedAt = Date.now();
      setProgress(result);
      updateProgress();
      updateClock();
      const total = state.activities.length;
      const correct = state.activities.filter(a => a.isCorrect === true).length;
      const unanswered = state.activities.filter(a => !String(a.userAnswer ?? '').trim()).length;
      state.sessionResult = { total, correct, unanswered, wrong: total - correct - unanswered, score: total ? correct / total * 10 : 0, time: $('session-time').textContent };
      recordP2Attempt({
        grade: state.grade,
        topicId: state.p2Journey ? 'all' : state.topicId,
        topicLabel: currentConfig().topicLabel,
        mode: state.mode,
        activities: state.activities,
        durationSeconds: Math.floor((state.finishedAt - state.startedAt) / 1000)
      });
      updateP2EntrySummary();
      document.querySelectorAll('.activity-card .option-btn, .activity-input, .btn-check-item').forEach(control => { control.disabled = true; });
      ['check-session', 'bottom-check'].forEach(id => { $(id).textContent = 'Xem kết quả'; });
      showActivity(state.currentActivityIndex);
      showSessionResult();
    } catch (error) {
      notify('Không thể kiểm tra kết quả: ' + error.message, true);
    } finally {
      state.submitting = false;
    }
  }

  function updateClock() {
    const elapsed = Math.max(0, Math.floor(((state.finishedAt || Date.now()) - state.startedAt) / 1000));
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    $('session-time').textContent = minutes + ':' + seconds;
  }

  function openDialog(id) {
    const dialog = $(id);
    if (!dialog) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  function closeDialog(id) {
    const dialog = $(id);
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  }

  function notify(message, isError = false) {
    const toast = $('app-toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle('is-error', isError);
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3800);
  }

  function snapshot() {
    const config = currentConfig();
    return {
      generatedAt: new Date().toISOString(),
      config: {
        grade: config.grade,
        moduleId: config.moduleId,
        moduleLabel: config.moduleLabel,
        topicId: config.topicId,
        topicLabel: config.topicLabel,
        level: config.level,
        levelLabel: config.levelLabel,
        count: state.activities.length || 15,
        mode: state.mode,
        journeySkill: state.p2Journey?.skillKey || null
      },
      activities: state.activities.map((activity) => ({
        id: activity.id,
        number: activity.number,
        tier: activity.tier || 'kha',
        tierLabel: activity.tierLabel || TIER_PLAN[activity.tier || 'kha'].label,
        grade: activity.grade,
        topic: activity.topic || activity.topicId,
        clusterId: activity.clusterId || null,
        skill: activity.skill,
        difficulty: activity.difficulty,
        level: activity.level,
        estimatedTime: activity.estimatedTime,
        explanation: activity.explanation,
        title: activity.title || '',
        prompt: activity.prompt || '',
        type: activity.type || 'choice',
        options: Array.isArray(activity.options) ? [...activity.options] : [],
        userAnswer: activity.userAnswer !== undefined ? activity.userAnswer : null,
        correctAnswer: activity.correctAnswer || '',
        answer: activity.answer || '',
        solution: activity.solution || '',
        svg: activity.svg || '',
        status: activity.status || 'unanswered',
        isCorrect: activity.isCorrect !== undefined ? activity.isCorrect : null
      })),
      progress: {
        completed: state.completed,
        correct: state.correct,
        review: state.review,
        total: state.activities.length || 15
      }
    };
  }

  function resetSession() {
    const journeySkill = state.p2Journey?.skillKey || null;
    confirmBeforeReset(() => {
      state.activities = [];
      if (journeySkill) buildHsgSkillActivities(journeySkill);
      else buildActivities('activity');
      notify('Đã làm mới phiên học.');
    });
  }

  function toggleOptions(open) {
    const rail = $('lesson-options');
    const toggle = $('options-toggle');
    rail.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (open && window.matchMedia('(max-width: 900px)').matches) $('topic-select').focus({ preventScroll: true });
  }

  function bindEvents() {
    $('confirm-reset')?.addEventListener('click', () => {
      closeDialog('reset-dialog');
      if (typeof pendingResetAction === 'function') {
        const action = pendingResetAction;
        pendingResetAction = null;
        action();
      }
    });
    $('reset-dialog')?.addEventListener('close', () => {
      pendingResetAction = null;
    });

    $('grade-select').addEventListener('change', (event) => {
      const newGrade = Number(event.target.value);
      const prevGrade = state.grade;
      if (newGrade === prevGrade) return;
      confirmBeforeReset(async () => {
        $('grade-select').value = String(newGrade);
        state.grade = newGrade;
        state.moduleId = 'geometry';
        state.topicId = 'all';
        try {
          await loadGradeData(newGrade);
          if (state.grade === newGrade) {
            syncModules();
            buildActivities(state.mode);
          }
        } catch (err) {
          // Handled in loadGradeData
        }
      });
      if (pendingResetAction) {
        $('grade-select').value = String(prevGrade);
      }
    });

    $('module-select').addEventListener('change', (event) => {
      const newModule = event.target.value;
      const prevModule = state.moduleId;
      if (newModule === prevModule) return;
      confirmBeforeReset(() => {
        $('module-select').value = newModule;
        state.moduleId = newModule;
        syncTopics();
        buildActivities(state.mode);
      });
      if (pendingResetAction) {
        $('module-select').value = prevModule;
      }
    });

    $('activity-form').addEventListener('submit', (event) => {
      event.preventDefault();
      confirmBeforeReset(() => {
        buildActivities('activity');
        if (window.matchMedia('(max-width: 900px)').matches) toggleOptions(false);
      });
    });
    $('create-activities')?.addEventListener('click', (event) => {
      event.preventDefault();
      confirmBeforeReset(() => {
        buildActivities('activity');
        if (window.matchMedia('(max-width: 900px)').matches) toggleOptions(false);
      });
    });
    $('create-test').addEventListener('click', () => {
      confirmBeforeReset(() => {
        buildActivities('test');
        if (window.matchMedia('(max-width: 900px)').matches) toggleOptions(false);
      });
    });
    $('nav-create-test')?.addEventListener('click', () => {
      confirmBeforeReset(() => {
        buildActivities('test');
        document.querySelector('.practice-stage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    $('check-session').addEventListener('click', checkCurrentSession);
    $('bottom-check').addEventListener('click', checkCurrentSession);
    $('topic-select').addEventListener('change', () => {
      const newTopic = $('topic-select').value;
      const prevTopic = state.topicId;
      if (newTopic === prevTopic) return;
      confirmBeforeReset(() => {
        $('topic-select').value = newTopic;
        state.topicId = newTopic;
        updateSummary();
        buildActivities(state.mode);
      });
      if (pendingResetAction) {
        $('topic-select').value = prevTopic;
      }
    });
    $('level-select').addEventListener('change', updateSummary);
    $('count-select').addEventListener('change', updateSummary);
    $('reset-session').addEventListener('click', resetSession);
    $('options-toggle').addEventListener('click', () => toggleOptions(!$('lesson-options').classList.contains('is-open')));
    $('options-close').addEventListener('click', () => {
      toggleOptions(false);
      $('options-toggle').focus();
    });
    $('previous-activity')?.addEventListener('click', () => showActivity(state.currentActivityIndex - 1, true));
    $('next-activity')?.addEventListener('click', () => state.currentActivityIndex === state.activities.length - 1 ? checkCurrentSession() : showActivity(state.currentActivityIndex + 1, true));
    $('confirm-submit').addEventListener('click', submitCurrentSession);
    $('review-submitted').addEventListener('click', () => { closeDialog('result-dialog'); const first = state.activities.findIndex(a => a.isCorrect === false); showActivity(first >= 0 ? first : 0, true); });
    $('retry-submitted').addEventListener('click', () => {
      closeDialog('result-dialog');
      const journeySkill = state.p2Journey?.skillKey || null;
      confirmBeforeReset(() => {
        if (journeySkill) buildHsgSkillActivities(journeySkill);
        else buildActivities(state.mode);
      });
    });
    $('topics-toggle')?.addEventListener('click', () => {
      const rail = $('topic-rail');
      const open = !rail.classList.contains('is-open');
      rail.classList.toggle('is-open', open);
      $('topics-toggle').setAttribute('aria-expanded', String(open));
    });
    $('topics-close')?.addEventListener('click', () => {
      $('topic-rail')?.classList.remove('is-open');
      $('topics-toggle')?.setAttribute('aria-expanded', 'false');
      $('topics-toggle')?.focus();
    });
    $('nav-toggle')?.addEventListener('click', () => {
      const navigation = document.querySelector('.main-nav');
      const open = !navigation.classList.contains('is-open');
      navigation.classList.toggle('is-open', open);
      $('nav-toggle').setAttribute('aria-expanded', String(open));
    });

    const tabPractice = $('view-tab-practice');
    const tabCompetency = $('view-tab-competency');
    const tabResult = $('view-tab-result');
    if (tabPractice && tabResult) {
      tabPractice.addEventListener('click', () => {
        tabPractice.classList.add('is-active');
        tabPractice.setAttribute('aria-current', 'page');
        tabResult.classList.remove('is-active');
        tabResult.removeAttribute('aria-current');
        showActivity(state.currentActivityIndex, true);
      });
      tabResult.addEventListener('click', () => {
        showSessionResult();
      });
    }
    tabCompetency?.addEventListener('click', openCompetencyDashboard);

    ['hero-guide', 'show-guide'].forEach((id) => $(id)?.addEventListener('click', () => openDialog('guide-dialog')));
    ['open-competency'].forEach((id) => $(id)?.addEventListener('click', openCompetencyDashboard));
    ['open-hsg-journey', 'support-hsg'].forEach((id) => $(id)?.addEventListener('click', openHsgJourneyDashboard));
    $('competency-open-hsg')?.addEventListener('click', openHsgJourneyDashboard);
    $('support-guide')?.addEventListener('click', () => {
      $('include-answer').checked = true;
      $('include-guide').checked = true;
      openDialog('export-dialog');
    });
    ['open-export', 'bottom-export', 'support-export', 'support-download'].forEach((id) => $(id)?.addEventListener('click', () => openDialog('export-dialog')));
    document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => closeDialog(button.dataset.closeDialog)));
    document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog(dialog.id);
    }));

    // Keyboard navigation with suppression when typing in input/textarea
    document.addEventListener('keydown', (event) => {
      if (document.querySelector('dialog[open]') || event.ctrlKey || event.altKey || event.metaKey) return;
      const activeEl = document.activeElement;
      const activeTag = activeEl ? activeEl.tagName.toUpperCase() : '';
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT' || activeEl?.isContentEditable) {
        return; // Don't trigger keyboard shortcuts when typing in inputs/textareas
      }

      const key = event.key.toUpperCase();
      if (['1', '2', '3', '4', 'A', 'B', 'C', 'D'].includes(key)) {
        const optMap = { '1': 0, 'A': 0, '2': 1, 'B': 1, '3': 2, 'C': 2, '4': 3, 'D': 3 };
        const targetIdx = optMap[key];
        const cards = Array.from(document.querySelectorAll('.activity-card'));
        const targetCard = cards[state.currentActivityIndex] || cards[0];

        if (targetCard) {
          const buttons = targetCard.querySelectorAll('.option-btn');
          if (buttons[targetIdx]) {
            buttons[targetIdx].click();
          }
        }
      }
    });
  }

  // Public contract
  window.IMathVisualGeometry = Object.freeze({
    registerModule,
    getCurriculum: copyCurriculum,
    getSnapshot: snapshot,
    setProgress,
    rebuild: () => buildActivities(state.mode),
    showActivity,
    notify,
    openExport: () => openDialog('export-dialog'),
    openCompetency: openCompetencyDashboard,
    openHsgJourney: openHsgJourneyDashboard,
    startHsgSkillJourney,
    getLearnerProfile: (topicId = selectedTopicContext().topicId) => getLearnerProfile(state.grade, topicId),
    getHsgJourney: (grade = state.grade) => summarizeHsgJourney(allTopics, grade, getLearnerProfile(grade, 'all').allGradeAttempts),
    getResourceManifest: () => buildResourceManifest(curriculumCatalog),
    clearLearnerProgress: () => { clearP2Progress(); updateP2EntrySummary(); },
    allTopics,
    loadGradeData,
    gradeDataCache,
    state
  });
  window.getSnapshot = snapshot;
  window.getPedagogyV2Audit = getP0AuditSnapshot;
  window.getPedagogyP11Audit = getP11AuditSnapshot;
  window.getP2LearnerProfile = (topicId = selectedTopicContext().topicId) => getLearnerProfile(state.grade, topicId);
  window.getP2HsgJourney = (grade = state.grade) => summarizeHsgJourney(allTopics, grade, getLearnerProfile(grade, 'all').allGradeAttempts);
  window.getP2ResourceManifest = () => buildResourceManifest(curriculumCatalog);

async function initVisualGeometryApp() {
  bindEvents();
  clockTimer = window.setInterval(updateClock, 1000);
  window.addEventListener('pagehide', () => window.clearInterval(clockTimer), { once: true });

  try {
    await loadGradeData(1);
    syncModules();
    buildActivities('activity');
  } catch (err) {
    console.error('Lỗi khi tải dữ liệu khởi động Lớp 1:', err);
    notify('Không thể tải dữ liệu Lớp 1. Vui lòng làm mới trang.', true);
  }
}

export {
  initVisualGeometryApp,
  loadGradeData,
  state,
  allTopics,
  buildActivities,
  curriculumCatalog,
  svgs,
  getP0AuditSnapshot,
  getP11AuditSnapshot
};

export default initVisualGeometryApp;
