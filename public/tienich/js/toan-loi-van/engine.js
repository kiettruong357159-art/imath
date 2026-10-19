(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = arr => {
    const result=[...arr];
    for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
    return result;
  };
  const BANK_VERSION = 'WP3';
  const formatNum = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const cleanMathMarkup = value => String(value || '')
    .replace(/\$/g, '')
    .replace(/\\([×→])/g, '$1');
  function normalizeQuestion(q) {
    const normalized = { ...q };
    ['hint1', 'hint2', 'hint3', 'hint4', 'hint5', 'sol1', 'diagramSvg'].forEach(key => {
      if (normalized[key]) normalized[key] = cleanMathMarkup(normalized[key]);
    });
    const rawSol2 = cleanMathMarkup(normalized.sol2);
    normalized.sol2 = /\{[A-Za-z][^}]*\}/.test(rawSol2)
      ? `<div class="sol-body"><b>Cách làm nhanh:</b> ${normalized.hint2 || ''}<br>${normalized.hint3 || ''}</div>`
      : rawSol2;
    return normalized;
  }
  const normalizeUnit = raw => String(raw || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/²/g, '2')
    .replace(/³/g, '3')
    .replace(/[()]/g, '')
    .replace(/[.,;:]+$/g, '')
    .replace(/[-–—]/g, ' ')
    .replace(/\s*\/\s*/g, '/')
    .replace(/\s+/g, ' ');
  const UNIT_ALIASES = {
    'xang ti met': 'cm', 'xang ti met vuong': 'cm2', 'xang ti met khoi': 'cm3',
    'de xi met': 'dm', 'de xi met vuong': 'dm2', 'de xi met khoi': 'dm3',
    'met': 'm', 'met vuong': 'm2', 'met khoi': 'm3',
    'ki lo met': 'km', 'ki lo met/gio': 'km/gio', 'km/h': 'km/gio',
    'ki lo gam': 'kg', 'kilogam': 'kg', 'kilogram': 'kg', 'gam': 'g', 'gram': 'g',
    'lit': 'l', 'l': 'l', 'gio': 'gio', 'h': 'gio', 'phut': 'phut',
    'dong': 'dong', 'vnd': 'dong'
  };
  const canonicalUnit = raw => {
    const normalized = normalizeUnit(raw);
    return UNIT_ALIASES[normalized] || normalized;
  };
  function parseStudentResponse(raw) {
    if (raw == null) return { valid: false, value: null, unit: '', kind: '', error: 'empty' };
    const str = String(raw).replace(/\u00a0/g, ' ').trim().toLowerCase();
    if (!str) return { valid: false, value: null, unit: '', kind: '', error: 'empty' };
    let match;
    let value;
    let consumed = '';
    let kind = '';
    let isReduced = false;
    match = str.match(/^([-+]?\d+)\s+(\d+)\s*\/\s*(\d+)/);
    if (match) {
      const denominator = Number(match[3]);
      if (denominator === 0) return { valid: false, value: null, unit: '', kind: '', error: 'zero-denominator' };
      const whole = Number(match[1]);
      const fraction = Number(match[2]) / denominator;
      value = whole < 0 ? whole - fraction : whole + fraction;
      consumed = match[0];
      kind = 'mixed';
    } else {
      match = str.match(/^([-+]?\d+(?:[.,]\d+)?)\s*\/\s*([-+]?\d+(?:[.,]\d+)?)/);
      if (match) {
        const denominator = Number(match[2].replace(',', '.'));
        if (denominator === 0) return { valid: false, value: null, unit: '', kind: '', error: 'zero-denominator' };
        const numerator = Number(match[1].replace(',', '.'));
        value = numerator / denominator;
        consumed = match[0];
        kind = 'fraction';
        if (Number.isInteger(numerator) && Number.isInteger(denominator)) {
          let a = Math.abs(numerator), b = Math.abs(denominator);
          while (b) [a, b] = [b, a % b];
          isReduced = a === 1;
        }
      } else {
        match = str.match(/^([-+]?\d+(?:[.,]\d+)?)\s*k(?=\s|$)/);
        if (match) {
          value = Number(match[1].replace(',', '.')) * 1000;
          consumed = match[0];
          kind = 'shorthand';
        } else {
          match = str.match(/^([-+]?(?:\d{1,3}(?: \d{3})+|\d+)(?:[.,]\d+)?)/);
          if (!match) return { valid: false, value: null, unit: '', kind: '', error: 'format' };
          value = Number(match[1].replace(/[ ]/g, '').replace(',', '.'));
          consumed = match[0];
          kind = 'number';
        }
      }
    }
    const unit = str.slice(consumed.length).trim();
    if (!Number.isFinite(value)) return { valid: false, value: null, unit, kind, error: 'format' };
    if (unit && (!/^[\p{L}\d²³/().\-\s]+$/u.test(unit) || /^[+*=×÷]/.test(unit))) {
      return { valid: false, value: null, unit, kind, error: 'format' };
    }
    return { valid: true, value, unit, kind, isReduced, error: '' };
  }
  function parseStudentAnswer(raw) {
    const parsed = parseStudentResponse(raw);
    return parsed.valid ? parsed.value : null;
  }
  function evaluateStudentAnswer(userRaw, targetVal, tolerance = null, expectedUnit = '', expectedFormat = '') {
    const parsed = parseStudentResponse(userRaw);
    if (!parsed.valid) return { correct: false, reason: parsed.error, parsed };
    if (expectedFormat === 'fraction' && (parsed.kind !== 'fraction' || !parsed.isReduced)) {
      return { correct: false, reason: 'fraction-format', parsed };
    }
    if (parsed.unit) {
      const expected = canonicalUnit(expectedUnit);
      const actual = canonicalUnit(parsed.unit);
      if (!expected || actual !== expected) return { correct: false, reason: 'unit', parsed, expectedUnit };
    }
    const targetNum = Number(targetVal);
    if (!Number.isFinite(targetNum)) return { correct: false, reason: 'target', parsed };
    const diff = Math.abs(parsed.value - targetNum);
    const hasCustomTolerance = tolerance !== null && tolerance !== undefined && Number.isFinite(Number(tolerance));
    const allowed = hasCustomTolerance
      ? Math.max(0, Number(tolerance))
      : (Number.isInteger(targetNum) ? 1e-9 : 0.005);
    return { correct: diff <= allowed, reason: diff <= allowed ? '' : 'value', parsed, diff, allowed };
  }
  function isAnswerMatch(userRaw, targetVal, tolerance = null, expectedUnit = '', expectedFormat = '') {
    return evaluateStudentAnswer(userRaw, targetVal, tolerance, expectedUnit, expectedFormat).correct;
  }
  window.parseStudentAnswer = parseStudentAnswer;
  window.isAnswerMatch = isAnswerMatch;
  const TOPIC_LABELS = {
    all: 'Tất cả', numbers: 'Số học', measure: 'Đại lượng',
    geometry: 'Hình học', logic: 'Logic', motion: 'Chuyển động'
  };
  const STORAGE_KEYS = {
    stats: 'imath_word_problem_stats_v1',
    wrong: 'imath_word_problem_wrong_v1',
    recentStructures: 'imath_word_problem_recent_structures_WP3',
    seenQuestions: 'imath_word_problem_seen_questions_WP3',
    draft: 'imath_word_problem_active_draft_WP3'
  };
  const readLocalData = (key, fallback) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value && typeof value === 'object' ? value : fallback;
    } catch (_) { return fallback; }
  };
  const writeLocalData = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* Storage may be disabled. */ }
  };
  const readSessionData = (key, fallback) => {
    try {
      const value = JSON.parse(window.sessionStorage.getItem(key));
      return value && typeof value === 'object' ? value : fallback;
    } catch (_) { return fallback; }
  };
  const writeSessionData = (key, value) => {
    try { window.sessionStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* Anti-repeat is optional. */ }
  };
  const recentExamLists = grade => {
    const store = readSessionData(STORAGE_KEYS.recentStructures, {});
    return Array.isArray(store[grade]) ? store[grade].filter(Array.isArray).slice(0, 5) : [];
  };
  const rememberStructures = (grade, questions) => {
    if (!Array.isArray(questions) || !questions.length) return;
    const store = readSessionData(STORAGE_KEYS.recentStructures, {});
    const archetypes = questions.map(question => String(question.templateFamily || question.archetype || '')).filter(Boolean);
    store[grade] = [archetypes].concat(Array.isArray(store[grade]) ? store[grade] : []).slice(0, 5);
    writeSessionData(STORAGE_KEYS.recentStructures, store);
  };
  const recentWeights = [16, 8, 4, 2, 1];
  const recentPenalty = (grade, archetype) => recentExamLists(grade).reduce((score, list, index) => score + (list.includes(archetype) ? recentWeights[index] : 0), 0);
  const rankFactoriesAgainstHistory = (grade, factories) => shuffle(factories.map(factory => {
    const sample = factory();
    return { factory, archetype: String(sample.templateFamily || sample.archetype || '') };
  })).sort((a, b) => recentPenalty(grade, a.archetype) - recentPenalty(grade, b.archetype));
  const stripHtml = value => String(value || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const getGradePool = grade => {
    if (grade === '1') return window.LOP1_POOLS;
    if (grade === '2') return window.LOP2_POOLS;
    if (grade === '3') return window.LOP3_POOLS;
    if (grade === '5') return window.LOP5_POOLS;
    return window.LOP4_POOLS || {};
  };
  const getTierCapacities = grade => {
    const pool = getGradePool(String(grade));
    return {
      kha: new Set((pool.kha || []).map(f=>f.templateFamily)).size,
      gioi: new Set((pool.gioi || []).map(f=>f.templateFamily)).size,
      hsg: new Set((pool.hsg || []).map(f=>f.templateFamily)).size
    };
  };
  const classifyQuestion = q => {
    const source = `${q.archetype || ''} ${q.domain || ''} ${stripHtml(q.text)}`.toLowerCase();
    if (/chuyển động|vận tốc|đoàn tàu|ca-nô|dòng nước|đuổi|đường đua|rô-bốt/.test(source)) return 'motion';
    if (/hình học|hình vuông|hình chữ nhật|tam giác|hình thang|chu vi|diện tích|đoạn thẳng|cạnh/.test(source)) return 'geometry';
    if (/cân|khối lượng|độ dài|lít|ki-lô-gam|nồng độ|dung dịch|tiền|vé|tuổi|thời gian|đồng hồ|công việc/.test(source)) return 'measure';
    if (/logic|suy luận|hàng lối|lịch|quy luật|giả thiết|gà|thỏ|trồng cây|chuyển.*bằng nhau|mã khóa/.test(source)) return 'logic';
    return 'numbers';
  };
  const hashSeed = value => {
    let hash = 2166136261;
    for (const char of String(value)) {
      hash ^= char.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  };
  const seededRandom = seedValue => {
    let seed = hashSeed(seedValue) || 1;
    return () => {
      seed += 0x6D2B79F5;
      let value = seed;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    };
  };
  const withSeed = (seed, callback) => {
    const originalRandom = Math.random;
    Math.random = seededRandom(seed);
    try { return callback(); } finally { Math.random = originalRandom; }
  };
  const createSeed = () => Math.random().toString(36).slice(2, 8).toUpperCase().padEnd(6, '0');
  const questionDataKey = (grade, q) => JSON.stringify([String(grade),q.templateFamily,window.WordProblemVerification.numbers(q.text)]);
  const questionSignature = (grade, q) => `${grade}|${q.archetype}|${stripHtml(q.text)}`;
  const seenQuestionSignatures = grade => {
    const store = readSessionData(STORAGE_KEYS.seenQuestions, {});
    return new Set(Array.isArray(store[grade]) ? store[grade].filter(Array.isArray).slice(0,5).flat() : []);
  };
  const rememberQuestionSignatures = (grade, questions) => {
    if (!Array.isArray(questions) || !questions.length) return;
    const store = readSessionData(STORAGE_KEYS.seenQuestions, {});
    const previous = Array.isArray(store[grade]) ? store[grade] : [];
    const current = questions.map(question => questionDataKey(grade, question));
    store[grade] = [current,...previous.filter(Array.isArray)].slice(0,5);
    writeSessionData(STORAGE_KEYS.seenQuestions, store);
  };
  const validateGeneratedQuestion = (question, grade, expectedTier) => {
    const normalized = normalizeQuestion(question);
    const validator = window.WordProblemQuality?.validateQuestion;
    if (typeof validator !== 'function') return null;
    const audit = validator(normalized, { grade, expectedTier: expectedTier || normalized.tier });
    if (!audit.valid) return null;
    normalized.difficultyProfile = {
      score: audit.difficulty.score,
      steps: audit.difficulty.steps,
      operations: audit.difficulty.operations,
      reasoningSignals: audit.difficulty.reasoningSignals
    };
    return normalized;
  };
  const generateValidatedQuestions = (grade, tier, factories, count, usedSignatures, usedFamilies = new Set(), useHistory = false, generation = null) => {
    const wanted=Math.max(0,Math.trunc(Number(count)||0));
    if(!wanted)return [];
    const ranked=useHistory && !generation?rankFactoriesAgainstHistory(grade,factories).map(item=>item.factory):shuffle(factories);
    const seen=useHistory?seenQuestionSignatures(grade):new Set();
    const selected=[],rejected={invalid:0,family:0,data:0,duplicate:0};
    const maxAttempts=Math.max(300,ranked.length*80);
    let schedule=Array.from({length:maxAttempts},(_,i)=>i);
    if(generation?.recipe) schedule=generation.recipe.slice();
    else if(useHistory && generation) schedule.sort((a,b)=>recentPenalty(grade,ranked[a%ranked.length]?.templateFamily)-recentPenalty(grade,ranked[b%ranked.length]?.templateFamily)||a-b);
    for(const attempt of schedule){
      if(selected.length>=wanted || !ranked.length)break;
      if(!Number.isInteger(attempt)||attempt<0||attempt>=maxAttempts)throw new Error('Mã đề có lựa chọn không hợp lệ.');
      const factory=ranked[attempt%ranked.length];
      if(usedFamilies.has(factory.templateFamily)){rejected.family++;continue;}
      const raw=generation?withSeed(generation.seed+'|'+tier+'|'+attempt,()=>factory()):factory();
      const candidate=validateGeneratedQuestion(raw,grade,tier);
      if(!candidate){rejected.invalid++;continue;}
      const signature=questionSignature(grade,candidate);
      if(seen.has(questionDataKey(grade,candidate))){rejected.data++;continue;}
      if(usedSignatures.has(signature)){rejected.duplicate++;continue;}
      usedSignatures.add(signature);usedFamilies.add(candidate.templateFamily);
      if(generation)candidate.generationAttempt=attempt;
      selected.push(candidate);
    }
    if(selected.length<wanted){
      const error=new Error('Chưa đủ câu khác dạng hoặc dữ kiện mới cho lớp '+grade+', mức '+(tier||'chuyên đề')+'. Đề chưa được thay đổi.');
      error.diagnostics={grade,tier,wanted,generated:selected.length,maxAttempts,rejected};throw error;
    }
    return selected;
  };
  const getWrongQuestions = grade => {
    const store = readLocalData(STORAGE_KEYS.wrong, {});
    return Array.isArray(store[grade]) ? store[grade].filter(q=>q.bankVersion===BANK_VERSION && validateGeneratedQuestion(q,grade,q.tier)) : [];
  };
  const setWrongQuestions = (grade, list) => {
    const store = readLocalData(STORAGE_KEYS.wrong, {});
    store[grade] = list.slice(0, 50);
    writeLocalData(STORAGE_KEYS.wrong, store);
  };
  const syncWrongQuestion = (q, isCorrect, userAnswer) => {
    const signature = questionSignature(state.grade, q);
    let list = getWrongQuestions(state.grade).filter(item => item.signature !== signature);
    if (!isCorrect) {
      const snapshot = JSON.parse(JSON.stringify({ ...q, index: undefined }));
      list.unshift({ ...snapshot, signature, userAnswer: String(userAnswer || ''), savedAt: Date.now() });
    }
    setWrongQuestions(state.grade, list);
  };
  const getStats = () => {
    const saved = readLocalData(STORAGE_KEYS.stats, {});
    return {
      attempts: Number(saved.attempts) || 0,
      correct: Number(saved.correct) || 0,
      streak: Number(saved.streak) || 0,
      lastDay: typeof saved.lastDay === 'string' ? saved.lastDay : '',
      grades: saved.grades && typeof saved.grades === 'object' ? saved.grades : {}
    };
  };
  const localDay = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const updateStudyStreak = stats => {
    const today = localDay();
    if (stats.lastDay === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    stats.streak = stats.lastDay === localDay(yesterday) ? (stats.streak || 0) + 1 : 1;
    stats.lastDay = today;
  };
  const recordAttempt = (q, isCorrect, userAnswer) => {
    syncWrongQuestion(q, isCorrect, userAnswer);
    if (state.recorded[q.index]) return;
    state.recorded[q.index] = true;
    const stats = getStats();
    updateStudyStreak(stats);
    stats.attempts = (stats.attempts || 0) + 1;
    stats.correct = (stats.correct || 0) + (isCorrect ? 1 : 0);
    const savedGradeStats = stats.grades[state.grade] || {};
    const gradeStats = { ...savedGradeStats, attempts: Number(savedGradeStats.attempts) || 0, correct: Number(savedGradeStats.correct) || 0 };
    gradeStats.attempts += 1;
    gradeStats.correct += isCorrect ? 1 : 0;
    gradeStats.recent = [...(Array.isArray(savedGradeStats.recent) ? savedGradeStats.recent : []), Boolean(isCorrect)].slice(-10);
    stats.grades[state.grade] = gradeStats;
    writeLocalData(STORAGE_KEYS.stats, stats);
    refreshPracticeUI();
  };
  const recordHintUsage = index => {
    const questionIndex = Number(index);
    if (!state.questions.some(q => q.index === questionIndex)) return 0;
    state.hintsUsed[questionIndex] = Math.min(5, (state.hintsUsed[questionIndex] || 0) + 1);
    const stats = getStats();
    const savedGradeStats = stats.grades[state.grade] || {};
    stats.grades[state.grade] = { ...savedGradeStats, hints: (Number(savedGradeStats.hints) || 0) + 1 };
    writeLocalData(STORAGE_KEYS.stats, stats);
    saveDraft();
    return state.hintsUsed[questionIndex];
  };
  const GeneratorEngine = {
    generateCustomExam(grade, counts = { kha: 3, gioi: 7, hsg: 5 }, generation = null) {
      grade=String(grade);
      const pool = getGradePool(grade);
      const questions = [];
      const usedSignatures = new Set(), usedFamilies=new Set();
      let recipeOffset=0;
      ['kha', 'gioi', 'hsg'].forEach(tier => {
        const tierPool = pool[tier] || [];
        const part=generation?{...generation,recipe:generation.recipe?.slice(recipeOffset,recipeOffset+counts[tier])}:null;
        questions.push(...generateValidatedQuestions(grade,tier,tierPool,counts[tier],usedSignatures,usedFamilies,Boolean(generation?.history),part));
        recipeOffset+=counts[tier];
      });
      questions.forEach((q, i) => { q.index = i + 1; });
      return questions;
    },
    generateExam(grade, seed = createSeed(), options = {}) {
      return withSeed(seed, () => this.generateCustomExam(grade,{kha:3,gioi:7,hsg:5},{...options,seed}));
    },
    generateTeacherExam(grade, counts, seed = createSeed(), options = {}) {
      return withSeed(seed, () => this.generateCustomExam(grade,counts,{...options,seed}));
    },
    generateAdaptive(grade, level = 'kha', count = 10, seed = createSeed()) {
      const pool = getGradePool(grade);
      const selectedLevel = ['kha', 'gioi', 'hsg'].includes(level) ? level : 'kha';
      return withSeed(seed, () => {
        const source = pool[selectedLevel] || [];
        const actualCount = Math.min(count,new Set(source.map(f=>f.templateFamily)).size);
        const questions = generateValidatedQuestions(grade, selectedLevel, source, actualCount, new Set(), new Set(), true);
        questions.forEach((q, i) => { q.index = i + 1; });
        return questions;
      });
    },
    generatePractice(grade, topic = 'all', count = 10) {
      const pool = getGradePool(grade);
      const records = ['kha', 'gioi', 'hsg'].flatMap(tier => (pool[tier] || []).map(factory => ({ factory, sample: factory() })));
      const matching = topic === 'all' ? records : records.filter(item => classifyQuestion(item.sample) === topic);
      const source = (matching.length ? matching : records).map(item => item.factory);
      const actualCount = Math.min(count,new Set(source.map(f=>f.templateFamily)).size);
      const questions = generateValidatedQuestions(grade, '', source, actualCount, new Set(), new Set(), true);
      questions.forEach((q, i) => { q.index = i + 1; });
      return questions;
    },
    getAvailableTopics(grade) {
      const pool = getGradePool(grade);
      const topics = new Set(['all']);
      const counts = Object.create(null);
      ['kha', 'gioi', 'hsg'].forEach(tier => (pool[tier] || []).forEach(factory => {
        const topic = classifyQuestion(factory());
        counts[topic] = (counts[topic] || 0) + 1;
      }));
      Object.keys(counts).forEach(topic => { if (counts[topic] >= 3) topics.add(topic); });
      return topics;
    }
  };
  window.GeneratorEngine = GeneratorEngine;
  const generateFreshStandardExam = grade => {
    let lastError=null;
    const maxAttempts=8;
    for(let attempt=0;attempt<maxAttempts;attempt++){
      const seed=createSeed();
      try{return {seed,questions:GeneratorEngine.generateExam(grade,seed,{history:true})};}
      catch(error){lastError=error;}
    }
    const error=new Error('Chưa đủ câu khác dạng hoặc dữ kiện mới trong 5 lượt gần đây. Hãy chọn chuyên đề hoặc mức luyện khác.');
    error.diagnostics={grade,maxAttempts,cause:lastError?.diagnostics};throw error;
  };
  window.WordProblemGeneration=Object.freeze({
    version:BANK_VERSION,fresh:generateFreshStandardExam,dataKey:questionDataKey,
    remember(grade,questions){rememberStructures(grade,questions);rememberQuestionSignatures(grade,questions);}
  });
  const state = {
    grade: '4',
    mode: 'exam',
    topic: 'all',
    examSeed: '',
    examRecipe: null,
    teacherConfig: null,
    adaptiveLevel: 'kha',
    answerStyle: 'variety',
    hintsUsed: {},
    questions: [],
    userAnswers: {},
    recorded: {},
    graded: false,
    startTime: null,
    timerInterval: null
  };
  function readDraft() {
    const draft = readSessionData(STORAGE_KEYS.draft, null);
    return draft && Array.isArray(draft.questions) && draft.questions.length && Date.now() - Number(draft.updatedAt || 0) < 12 * 60 * 60 * 1000 ? draft : null;
  }
  function saveDraft() {
    if (!state.questions.length || state.graded) return;
    writeSessionData(STORAGE_KEYS.draft, {
      grade: state.grade, mode: state.mode, topic: state.topic, examSeed: state.examSeed,
      teacherConfig: state.teacherConfig, adaptiveLevel: state.adaptiveLevel, answerStyle: state.answerStyle,
      questions: state.questions, userAnswers: state.userAnswers, recorded: state.recorded,
      hintsUsed: state.hintsUsed, startTime: state.startTime, updatedAt: Date.now()
    });
  }
  function clearDraft() { try { window.sessionStorage.removeItem(STORAGE_KEYS.draft); } catch (_) { /* Draft storage is optional. */ } }
  function restoreDraftState(draft) {
    if (!draft || !['1', '2', '3', '4', '5'].includes(String(draft.grade)) || !['exam', 'practice', 'wrong', 'adaptive', 'teacher'].includes(draft.mode)) return false;
    if (draft.mode === 'teacher' && (!draft.teacherConfig || !draft.teacherConfig.counts)) return false;
    state.grade = String(draft.grade); state.mode = draft.mode; state.topic = TOPIC_LABELS[draft.topic] ? draft.topic : 'all';
    state.examSeed = String(draft.examSeed || ''); state.examRecipe=draft.questions.map(q=>q.generationAttempt); state.teacherConfig = draft.teacherConfig || null;
    state.adaptiveLevel = ['kha', 'gioi', 'hsg'].includes(draft.adaptiveLevel) ? draft.adaptiveLevel : 'kha';
    state.answerStyle = draft.answerStyle === 'number' ? 'number' : 'variety'; state.questions = draft.questions;
    state.userAnswers = draft.userAnswers && typeof draft.userAnswers === 'object' ? draft.userAnswers : {};
    state.recorded = draft.recorded && typeof draft.recorded === 'object' ? draft.recorded : {};
    state.hintsUsed = draft.hintsUsed && typeof draft.hintsUsed === 'object' ? draft.hintsUsed : {};
    state.startTime = Number(draft.startTime) || null; state.graded = false;
    return true;
  }
  function restoreDraftInputs() {
    Object.entries(state.userAnswers).forEach(([index, value]) => {
      const input = document.querySelector('.q-number-input[data-qindex="' + index + '"]');
      if (input) input.value = value;
    });
  }
  const modeTitle = () => {
    if (state.mode === 'exam') return 'Đề thi thử';
    if (state.mode === 'teacher') return 'Đề giáo viên';
    if (state.mode === 'adaptive') return `Luyện thích ứng · ${state.adaptiveLevel.toUpperCase()}`;
    if (state.mode === 'wrong') return 'Ôn câu sai';
    return `Luyện ${TOPIC_LABELS[state.topic]}`;
  };
  const getAdaptiveLevel = grade => {
    const stats = getStats();
    const current = stats.grades[grade] || {};
    const attempts = Number(current.attempts) || 0;
    const recent = Array.isArray(current.recent) ? current.recent.slice(-10) : [];
    const accuracy = recent.length >= 5 ? recent.filter(Boolean).length / recent.length : attempts ? (Number(current.correct) || 0) / attempts : 0;
    if ((attempts < 5 && recent.length < 5) || accuracy < 0.55) return 'kha';
    if (accuracy < 0.8) return 'gioi';
    return 'hsg';
  };
  const examCounts = () => state.mode === 'teacher' && state.teacherConfig
    ? state.teacherConfig.counts
    : { kha: 3, gioi: 7, hsg: 5 };
  const getExamCode = () => {
    const counts = examCounts();
    const recipe=state.questions.map(q=>q.generationAttempt.toString(36).toUpperCase()).join('.');
    return `${BANK_VERSION}-L${state.grade}-K${counts.kha}G${counts.gioi}H${counts.hsg}-${state.examSeed}~${recipe}`;
  };
  const notifyRendered = () => document.dispatchEvent(new CustomEvent('imath:questions-rendered', {
    detail: {
      grade: state.grade,
      mode: state.mode,
      topic: state.topic,
      questions: state.questions,
      examCode: ['exam', 'teacher'].includes(state.mode) ? getExamCode() : '',
      answerStyle: state.answerStyle,
      teacherConfig: state.teacherConfig
    }
  }));
  function refreshPracticeUI() {
    document.body.dataset.practiceMode = state.mode;
    document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === state.mode));
    const availableTopics = GeneratorEngine.getAvailableTopics(state.grade);
    document.querySelectorAll('.topic-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.topic === state.topic);
      btn.disabled = ['wrong', 'teacher', 'adaptive'].includes(state.mode) || !availableTopics.has(btn.dataset.topic);
    });
    const stats = getStats();
    const gradeStats = stats.grades[state.grade] || { attempts: 0, correct: 0 };
    const wrongCount = getWrongQuestions(state.grade).length;
    if ($('stats-grade')) $('stats-grade').textContent = state.grade;
    if ($('stat-attempts')) $('stat-attempts').textContent = gradeStats.attempts;
    if ($('stat-accuracy')) $('stat-accuracy').textContent = `${gradeStats.attempts ? Math.round(gradeStats.correct / gradeStats.attempts * 100) : 0}%`;
    if ($('stat-wrong')) $('stat-wrong').textContent = wrongCount;
    if ($('stat-streak')) $('stat-streak').textContent = stats.streak || 0;
    if ($('wrong-mode-count')) $('wrong-mode-count').textContent = wrongCount ? `${wrongCount} câu đang chờ ôn` : 'Chưa có câu cần ôn';
    if ($('active-topic-label')) $('active-topic-label').textContent = state.mode === 'wrong' ? 'Sổ câu sai' : state.mode === 'adaptive' ? state.adaptiveLevel.toUpperCase() : state.mode === 'teacher' ? 'Tùy chỉnh' : TOPIC_LABELS[state.topic];
    if ($('topic-help')) {
      $('topic-help').textContent = state.mode === 'exam'
        ? 'Ở chế độ thi thử, đề giữ đủ ba mức Khá – Giỏi – HSG. Chọn một chuyên đề sẽ tự chuyển sang luyện tập.'
        : state.mode === 'adaptive'
          ? `Hệ thống đang chọn mức ${state.adaptiveLevel.toUpperCase()} theo kết quả đã lưu trên thiết bị.`
          : state.mode === 'teacher'
            ? 'Đề giáo viên đang dùng cấu trúc, thời gian và kiểu trả lời đã thiết lập.'
        : state.mode === 'wrong'
          ? 'Làm đúng một câu trong sổ ôn tập, câu đó sẽ tự được xóa khỏi danh sách cần ôn.'
          : `Đang luyện ${TOPIC_LABELS[state.topic].toLowerCase()}; có thể kiểm tra từng câu và xem gợi ý ngay.`;
    }
  }
  function startTimer(preserveStartTime) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    const timerPill = $('exam-timer');
    if (!['exam', 'teacher'].includes(state.mode)) {
      if (timerPill) {
        timerPill.textContent = '⏱️ Không giới hạn';
        timerPill.classList.remove('urgent');
      }
      return;
    }
    if (!preserveStartTime || !Number.isFinite(state.startTime) || state.startTime <= 0) state.startTime = Date.now();
    const totalSeconds = (state.mode === 'teacher' && state.teacherConfig ? state.teacherConfig.minutes : 45) * 60;
    state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      const remain = Math.max(0, totalSeconds - elapsed);
      const m = String(Math.floor(remain / 60)).padStart(2, '0');
      const s = String(remain % 60).padStart(2, '0');
      if (timerPill) {
        timerPill.textContent = `⏱️ ${m}:${s}`;
        timerPill.classList.toggle('urgent', remain <= 300);
      }
      if (remain <= 0) {
        clearInterval(state.timerInterval);
        gradeExam();
      }
    }, 1000);
  }
  function updateProgress() {
    const answeredCount = Object.keys(state.userAnswers).filter(k => state.userAnswers[k] && state.userAnswers[k].trim()).length;
    $('exam-progress').textContent = `📝 Đã làm: ${answeredCount}/${state.questions.length} câu`;
  }
  function renderExam(options = {}) {
    const snapshot={...state};
    try{renderExamContents(options);return true;}
    catch(error){
      Object.assign(state,snapshot);
      console.error('WORD_PROBLEM_GENERATION_FAILED',error.diagnostics||error);
      window.alert(error.message||'Chưa tạo được bộ câu hỏi hợp lệ. Vui lòng thử lại.');
      return false;
    }
  }
  function renderExamContents(options = {}) {
    const restoring = Boolean(options.restore);
    if (!restoring && state.mode === 'exam') {
      state.topic = 'all';
      if (state.examSeed) {
        state.questions = GeneratorEngine.generateExam(state.grade,state.examSeed,{recipe:state.examRecipe});
      } else {
        const fresh = generateFreshStandardExam(state.grade);
        state.examSeed = fresh.seed;
        state.examRecipe=fresh.questions.map(q=>q.generationAttempt);
        state.questions = fresh.questions;
      }
    } else if (!restoring && state.mode === 'teacher') {
      state.topic = 'all';
      state.examSeed = state.examSeed || createSeed();
      state.questions = GeneratorEngine.generateTeacherExam(state.grade,state.teacherConfig.counts,state.examSeed,{recipe:state.examRecipe});
    } else if (!restoring && state.mode === 'adaptive') {
      state.topic = 'all';
      state.adaptiveLevel = getAdaptiveLevel(state.grade);
      state.examSeed = createSeed();
      state.questions = GeneratorEngine.generateAdaptive(state.grade, state.adaptiveLevel, 10, state.examSeed);
    } else if (!restoring && state.mode === 'wrong') {
      state.topic = 'all';
      state.questions = getWrongQuestions(state.grade).slice(0, 10).map((q, i) => normalizeQuestion({ ...q, index: i + 1 }));
    } else if (!restoring) {
      const available = GeneratorEngine.getAvailableTopics(state.grade);
      if (!available.has(state.topic)) state.topic = 'all';
      state.questions = GeneratorEngine.generatePractice(state.grade, state.topic, 10);
    }
    if (!restoring) {
      if (state.mode !== 'wrong') {
        rememberStructures(state.grade, state.questions);
        rememberQuestionSignatures(state.grade, state.questions);
      }
      state.userAnswers = {};
      state.recorded = {};
      state.hintsUsed = {};
      state.startTime = null;
    }
    state.graded = false;
    document.body.dataset.teacherHints = String(state.mode === 'teacher' && Boolean(state.teacherConfig?.includeHints));
    delete document.body.dataset.examGraded;
    $('result-dashboard').classList.add('hidden');
    const total = state.questions.length;
    const currentModeTitle = modeTitle();
    $('print-grade-label').textContent = `Toán Lớp ${state.grade} · ${currentModeTitle}${['exam', 'teacher'].includes(state.mode) ? ` · Mã ${getExamCode()}` : ''}`;
    $('print-structure-label').textContent = `Cấu trúc: ${total} câu`;
    $('current-grade-badge').textContent = `${state.mode === 'exam' ? '🏆' : state.mode === 'teacher' ? '🧑‍🏫' : state.mode === 'wrong' ? '📕' : state.mode === 'adaptive' ? '🧭' : '🎯'} ${currentModeTitle} Lớp ${state.grade} (${total} câu)`;
    $('profile-grade').textContent = `Toán Lớp ${state.grade}`;
    $('btn-generate-exam').textContent = ['exam', 'teacher'].includes(state.mode) ? '🔄 Sinh Đề Mới' : state.mode === 'wrong' ? '↻ Tải lại sổ câu sai' : '🔄 Bộ câu mới';
    $('btn-submit-exam').textContent = ['exam', 'teacher'].includes(state.mode) ? '✓ Nộp Bài & Chấm Điểm' : '✓ Hoàn thành lượt luyện';
    document.querySelectorAll('.grade-card-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.grade === String(state.grade));
    });
    refreshPracticeUI();
    const container = $('questions-container');
    if (!total) {
      container.innerHTML = `<div class="practice-empty-state"><div class="empty-icon">📗</div><h3>Sổ câu sai đang trống</h3><p>Hãy luyện một đề mới. Những câu làm chưa đúng sẽ tự xuất hiện tại đây.</p></div>`;
      startTimer(restoring);
      updateProgress();
      notifyRendered();
      saveDraft();
      return;
    }
    let html = '';
    state.questions.forEach(q => {
      if (state.mode !== 'exam' && q.index === 1) {
        const sectionTitle = state.mode === 'wrong' ? '📕 SỔ CÂU SAI' : state.mode === 'teacher' ? `🧑‍🏫 ĐỀ GIÁO VIÊN · ${getExamCode()}` : state.mode === 'adaptive' ? `🧭 LUYỆN THÍCH ỨNG · MỨC ${state.adaptiveLevel.toUpperCase()}` : `🎯 LUYỆN CHUYÊN ĐỀ: ${TOPIC_LABELS[state.topic].toUpperCase()}`;
        const sectionTime = state.mode === 'teacher' ? `${state.teacherConfig.minutes} phút` : 'Không giới hạn thời gian';
        html += `<div class="section-tier-banner ${state.mode === 'wrong' ? 'tier-hsg' : 'tier-gioi'}"><div class="section-tier-title">${sectionTitle}</div><div class="section-tier-desc">${total} câu · ${sectionTime}</div></div>`;
      } else if (state.mode === 'exam' && q.index === 1) {
        html += `
          <div class="section-tier-banner tier-kha">
            <div class="section-tier-title">🟡 PHẦN I: MỨC KHÁ (Câu 1 – 3)</div>
            <div class="section-tier-desc">Kiến thức nền và vận dụng ngắn</div>
          </div>
        `;
      } else if (state.mode === 'exam' && q.index === 4) {
        html += `
          <div class="section-tier-banner tier-gioi">
            <div class="section-tier-title">🟠 PHẦN II: MỨC GIỎI (Câu 4 – 10)</div>
            <div class="section-tier-desc">Vận dụng tư duy logic & phân tích đa chiều</div>
          </div>
        `;
      } else if (state.mode === 'exam' && q.index === 11) {
        html += `
          <div class="section-tier-banner tier-hsg">
            <div class="section-tier-title">🔴 PHẦN III: THI HSG (Câu 11 – 15)</div>
            <div class="section-tier-desc">Đội tuyển / Luyện thi Chuyên CLC</div>
          </div>
        `;
      }
      const step1 = q.hint1 || 'Đọc kỹ đề bài, xác định các đại lượng đã cho và đại lượng cần tìm.';
      const step2 = q.hint2 || 'Gạch chân từ khóa quan hệ logic và phân tích mối liên hệ cốt lõi giữa các số liệu.';
      const step3 = q.hint3 || 'Lập kế hoạch suy luận ngược: Muốn tính kết quả cuối cùng cần tìm bước trung gian nào trước?';
      const step4 = q.hint4 || `Thiết lập phép tính theo đúng bản chất của dạng <b>${q.archetype}</b> với đơn vị ${q.unit ? '<b>(' + q.unit + ')</b>' : 'chuẩn'}.`;
      const step5 = q.hint5 || `Thử lại: Lấy kết quả <b>${q.answerText || q.answer}</b> đối chiếu ngược vào đề bài để kiểm tra tính hợp lý thực tế.`;
      html += `
        <article class="imath-question-card" id="qcard-${q.index}">
          <div class="q-head-row">
            <div class="q-meta-group">
              <span class="q-num-pill">Câu ${q.index}</span>
              <span class="q-archetype-pill">${q.archetype}</span>
              <span class="q-domain-pill">${q.domain}</span>
            </div>
            <span class="q-grade-tag">Lớp ${state.grade}</span>
          </div>
          <div class="q-body-container">${q.text}</div>
          <div class="q-interactive-zone">
            <div class="q-input-box-wrap">
              <input class="q-number-input" type="text" data-qindex="${q.index}" placeholder="Đáp số" autocomplete="off" inputmode="decimal" aria-label="Nhập đáp án câu ${q.index}">
              <span class="q-unit-label">${q.unit ? `(${q.unit})` : ''}</span>
            </div>
             <button class="btn-check-answer" data-qindex="${q.index}" type="button">${['exam', 'teacher'].includes(state.mode) ? 'Lưu đáp án' : 'Kiểm tra đáp án'}</button>
            <span class="q-status-feedback" id="feedback-${q.index}" role="status" aria-live="polite"></span>
          </div>
          <div class="accordion-tab-bar">
            <button class="acc-button" data-target="diagram-${q.index}" type="button">📊 Sơ đồ trực quan (SVG)</button>
            <button class="acc-button" data-target="hints-${q.index}" type="button">💡 Quy trình 5 tầng tư duy (Pólya)</button>
            <button class="acc-button" data-target="solution-${q.index}" type="button">📝 Lời giải chi tiết</button>
          </div>
          <!-- Accordion Diagram -->
          <div class="acc-drawer diagram hidden" id="diagram-${q.index}">
            <div style="font-weight:800; font-size:13px; color:var(--imath-muted); margin-bottom:4px;">📐 MÔ HÌNH TOÁN HỌC TRỰC QUAN (SVG):</div>
            <div style="overflow-x:auto;">${q.diagramSvg}</div>
          </div>
          <!-- Accordion 5-Tier Pólya Heuristics -->
          <div class="acc-drawer hints hidden" id="hints-${q.index}">
            <div class="polya-step-card step-1">
              <div class="polya-step-header">
                <span class="polya-badge">TẦNG 1</span>
                <span class="polya-title">ĐỌC ĐỀ &amp; XÁC ĐỊNH ĐÍCH ĐẾN</span>
                <span class="polya-virtue">Rèn tính cẩn thận</span>
              </div>
              <p class="polya-desc">${step1}</p>
            </div>
            <div class="polya-step-card step-2">
              <div class="polya-step-header">
                <span class="polya-badge">TẦNG 2</span>
                <span class="polya-title">TỪ KHÓA &amp; MÔ HÌNH HÓA</span>
                <span class="polya-virtue">Rèn tính gọn gàng</span>
              </div>
              <p class="polya-desc">${step2}</p>
            </div>
            <div class="polya-step-card step-3">
              <div class="polya-step-header">
                <span class="polya-badge">TẦNG 3</span>
                <span class="polya-title">SUY LUẬN NGƯỢC &amp; LẬP KẾ HOẠCH</span>
                <span class="polya-virtue">Rèn tư duy chiến lược</span>
              </div>
              <p class="polya-desc">${step3}</p>
            </div>
            <div class="polya-step-card step-4">
              <div class="polya-step-header">
                <span class="polya-badge">TẦNG 4</span>
                <span class="polya-title">CÔNG THỨC &amp; THIẾT LẬP PHÉP TÍNH</span>
                <span class="polya-virtue">Rèn tính chính xác</span>
              </div>
              <p class="polya-desc">${step4}</p>
            </div>
            <div class="polya-step-card step-5">
              <div class="polya-step-header">
                <span class="polya-badge">TẦNG 5</span>
                <span class="polya-title">TỰ THỬ LẠI &amp; BÀI HỌC TƯ DUY</span>
                <span class="polya-virtue">Rèn tinh thần trách nhiệm</span>
              </div>
              <p class="polya-desc">${step5}</p>
            </div>
          </div>
          <!-- Accordion Solutions -->
          <div class="acc-drawer solution hidden" id="solution-${q.index}">
            <div class="sol-method-tabs">
              <button class="sol-tab-item active" data-tab="sol1-${q.index}" type="button">Cách 1: Tự luận chuẩn thi HSG</button>
              <button class="sol-tab-item" data-tab="sol2-${q.index}" type="button">Cách 2: Mẹo suy luận nhanh</button>
            </div>
            <div class="sol-content-body" id="sol1-${q.index}">${q.sol1}</div>
            <div class="sol-content-body hidden" id="sol2-${q.index}">${q.sol2}</div>
          </div>
          <!-- Print Only: Blank Workspace for Handwriting Solution -->
          <div class="print-answer-workspace">
            <b>Bài giải:</b>
            <div class="print-dotted-space"></div>
            <div class="print-dotted-space"></div>
            <div style="text-align:right; font-weight:bold; margin-top:4px;">Đáp số: .......................................</div>
          </div>
        </article>
      `;
    });
    container.innerHTML = html;
    bindQuestionEvents();
    if (restoring) restoreDraftInputs();
    startTimer(restoring);
    updateProgress();
    notifyRendered();
    saveDraft();
  }
  function bindQuestionEvents() {
    document.querySelectorAll('.q-number-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const idx = e.target.dataset.qindex;
        state.userAnswers[idx] = e.target.value;
        updateProgress();
        saveDraft();
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const idx = e.target.dataset.qindex;
          checkSingle(idx);
        }
      });
    });
    document.querySelectorAll('.btn-check-answer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.dataset.qindex;
        checkSingle(idx);
      });
    });
    document.querySelectorAll('.acc-button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.dataset.target;
        const drawer = $(targetId);
        if (drawer) {
          const isHidden = drawer.classList.contains('hidden');
          drawer.classList.toggle('hidden', !isHidden);
          e.currentTarget.classList.toggle('active', isHidden);
        }
      });
    });
    document.querySelectorAll('.sol-tab-item').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetBodyId = e.currentTarget.dataset.tab;
        const parentDrawer = e.currentTarget.closest('.acc-drawer.solution');
        if (parentDrawer) {
          parentDrawer.querySelectorAll('.sol-tab-item').forEach(t => t.classList.remove('active'));
          parentDrawer.querySelectorAll('.sol-content-body').forEach(b => b.classList.add('hidden'));
          e.currentTarget.classList.add('active');
          const targetBody = $(targetBodyId);
          if (targetBody) targetBody.classList.remove('hidden');
        }
      });
    });
  }
  function diagnoseWrong(q, userVal, evaluation = evaluateStudentAnswer(userVal, q.answer, q.tolerance, q.unit, q.answerFormat)) {
    const entered = evaluation.parsed?.value ?? null;
    const target = Number(q.answer);
    const source = `${q.archetype || ''} ${q.domain || ''} ${stripHtml(q.text)}`.toLowerCase();
    if (evaluation.reason === 'zero-denominator') return 'Phân số không hợp lệ vì mẫu số phải khác 0.';
    if (evaluation.reason === 'format' || evaluation.reason === 'empty' || entered === null || Number.isNaN(entered)) return 'Con hãy chỉ nhập một số hoặc một phân số hợp lệ, ví dụ: 12; 2,5; 3/4.';
    if (evaluation.reason === 'fraction-format') return 'Câu này yêu cầu viết đáp án dưới dạng phân số tối giản, ví dụ 6/7.';
    if (evaluation.reason === 'unit') return q.unit
      ? `Đơn vị chưa đúng. Câu này dùng đơn vị ${q.unit}; con cũng có thể chỉ nhập phần số.`
      : 'Câu này không cần nhập thêm đơn vị hoặc chữ phía sau đáp số.';
    if (/trồng cây|cột điện|hàng cây/.test(source) && Math.abs(Math.abs(entered - target) - 1) < 1e-9) {
      return 'Con kiểm tra lại số khoảng cách và số cây ở hai đầu nhé.';
    }
    if (/tỉ số|phân số|phần trăm|nồng độ/.test(source)) return 'Con hãy xác định rõ đại lượng được so sánh và toàn bộ trước khi tính.';
    if (/đổi|mét|ki-lô-mét|ki-lô-gam|gam|lít|phút|giờ/.test(source)) return 'Con kiểm tra xem các đại lượng đã được đổi về cùng một đơn vị chưa.';
    if (Number.isFinite(target) && (Math.abs(entered - target * 2) < 1e-9 || Math.abs(entered * 2 - target) < 1e-9)) {
      return 'Kết quả đang gấp đôi hoặc bằng một nửa đáp số; con xem lại bước chia đều hay gộp hai phần.';
    }
    return 'Con mở Gợi ý 1, xác định dữ kiện cần dùng rồi thử lại trước khi xem lời giải.';
  }
  function checkSingle(idx) {
    const q = state.questions.find(item => item.index === parseInt(idx, 10));
    if (!q) return;
    const userVal = state.userAnswers[idx];
    const feedback = $(`feedback-${idx}`);
    const card = $(`qcard-${idx}`);
    if (userVal === undefined || userVal === null || String(userVal).trim() === '') {
      if (feedback) {
        feedback.textContent = '⚠️ Con chưa nhập đáp số';
        feedback.className = 'q-status-feedback wrong';
      }
      return;
    }
    if (['exam', 'teacher'].includes(state.mode) && !state.graded) {
      if (feedback) {
        feedback.textContent = '✓ Đã lưu đáp án';
        feedback.className = 'q-status-feedback correct';
      }
      return;
    }
    const evaluation = evaluateStudentAnswer(userVal, q.answer, q.tolerance, q.unit, q.answerFormat);
    const isCorrect = evaluation.correct;
    recordAttempt(q, isCorrect, userVal);
    if (feedback && card) {
      if (isCorrect) {
        feedback.textContent = '✓ Chính xác!';
        feedback.className = 'q-status-feedback correct';
        card.classList.add('status-correct');
        card.classList.remove('status-wrong');
      } else {
        feedback.textContent = `✗ Chưa đúng. ${diagnoseWrong(q, userVal, evaluation)}`;
        feedback.className = 'q-status-feedback wrong';
        card.classList.add('status-wrong');
        card.classList.remove('status-correct');
      }
    }
    saveDraft();
  }
  function gradeExam() {
    const total = state.questions.length;
    if (!total) return;
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.graded = true;
    clearDraft();
    document.body.dataset.examGraded = 'true';
    let correctCount = 0;
    let khaCorrect = 0, gioiCorrect = 0, hsgCorrect = 0;
    const topicResults={numbers:{total:0,correct:0},geometry:{total:0,correct:0},logic:{total:0,correct:0}};
    state.questions.forEach(q => {
      const userVal = state.userAnswers[q.index];
      const isCorrect = isAnswerMatch(userVal, q.answer, q.tolerance, q.unit, q.answerFormat);
      const topic=classifyQuestion(q);
      const group=topic==='geometry'?'geometry':topic==='logic'?'logic':'numbers';
      topicResults[group].total++;
      topicResults[group].correct+=Number(isCorrect);
      const card = $(`qcard-${q.index}`);
      const feedback = $(`feedback-${q.index}`);
      recordAttempt(q, isCorrect, userVal);
      if (isCorrect) {
        correctCount++;
        if (q.tier === 'kha') khaCorrect++;
        else if (q.tier === 'gioi') gioiCorrect++;
        else if (q.tier === 'hsg') hsgCorrect++;
        if (card) {
          card.classList.add('status-correct');
          card.classList.remove('status-wrong');
        }
        if (feedback) {
          feedback.textContent = '✓ Chính xác!';
          feedback.className = 'q-status-feedback correct';
        }
      } else {
        if (card) {
          card.classList.add('status-wrong');
          card.classList.remove('status-correct');
        }
        if (feedback) {
          feedback.textContent = `✗ Chưa đúng. Đáp số: ${q.answerText || q.answer}`;
          feedback.className = 'q-status-feedback wrong';
        }
      }
    });
    const rawScore = (correctCount / total) * 10;
    const hintCount = Object.values(state.hintsUsed).reduce((sum, count) => sum + Number(count || 0), 0);
    const hintPenalty = Math.min(2, hintCount * 0.2);
    const score = Math.max(0, rawScore - hintPenalty).toFixed(1);
    const pct = Math.round((correctCount / total) * 100);
    const finalPct = Math.round(Number(score) * 10);
    $('result-dashboard').classList.remove('hidden');
    $('kpi-score').textContent = score;
    $('score-pct-label').textContent = `${pct}%`;
    $('correct-ratio-label').textContent = `🎯 Đúng: ${correctCount}/${total} câu (${score} điểm${hintPenalty ? ` · trừ ${hintPenalty.toFixed(1)} điểm gợi ý` : ''})`;
    const circle = $('score-circle');
    if (circle) {
      circle.style.setProperty('--score-pct', pct);
    }
    const tierTotals = state.questions.reduce((totals, q) => {
      totals[q.tier] = (totals[q.tier] || 0) + 1;
      return totals;
    }, { kha: 0, gioi: 0, hsg: 0 });
    const tierHeight = (correct, tier) => tierTotals[tier] ? Math.round(correct / tierTotals[tier] * 100) : 0;
    $('bar-kha').style.height = `${tierHeight(khaCorrect, 'kha')}%`;
    $('bar-gioi').style.height = `${tierHeight(gioiCorrect, 'gioi')}%`;
    $('bar-hsg').style.height = `${tierHeight(hsgCorrect, 'hsg')}%`;
    $('label-kha').textContent = `Khá (${tierTotals.kha})`;
    $('label-gioi').textContent = `Giỏi (${tierTotals.gioi})`;
    $('label-hsg').textContent = `HSG (${tierTotals.hsg})`;
    document.querySelectorAll('[data-result-topic]').forEach(row=>{
      const result=topicResults[row.dataset.resultTopic];
      const percent=result.total?Math.round(result.correct/result.total*100):0;
      row.querySelector('.skill-bar-inner').style.width=percent+'%';
      row.querySelector('.skill-val').textContent=result.total?percent+'%':'—';
      row.title=result.total?`${result.correct}/${result.total} câu đúng trong đề này`:'Đề này không có câu thuộc nhóm này';
    });
    let badge = 'Cố Gắng Thêm';
    if (finalPct >= 90) badge = 'Xuất Sắc 🏆';
    else if (finalPct >= 73) badge = 'Giỏi 🏅';
    else if (finalPct >= 53) badge = 'Khá ⭐';
    $('badge-title').textContent = badge;
    if (finalPct >= 80) {
      launchConfetti();
    }
    $('result-dashboard').scrollIntoView({ behavior: 'smooth' });
  }
  function launchConfetti() {
    const canvas = $('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const colors = ['#0066ff', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 8 + 4,
        color: pick(colors),
        speed: Math.random() * 4 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 4 - 2
      });
    }
    let animationFrame;
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.speed;
        p.angle += p.spin;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      if (pieces.some(p => p.y < canvas.height)) {
        animationFrame = requestAnimationFrame(update);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    update();
    setTimeout(() => cancelAnimationFrame(animationFrame), 4000);
  }
  window.IMathWordProblemAPI = {
    getTierCapacities: grade => ({ ...getTierCapacities(String(grade || state.grade)) }),
    getState: () => ({
      grade: state.grade,
      mode: state.mode,
      topic: state.topic,
      questions: state.questions,
      examCode: ['exam', 'teacher'].includes(state.mode) ? getExamCode() : '',
      hintsUsed: { ...state.hintsUsed },
      answerStyle: state.answerStyle,
      teacherConfig: state.teacherConfig
    }),
    setAnswer(index, value) {
      const key = String(index);
      state.userAnswers[key] = String(value);
      const input = document.querySelector(`.q-number-input[data-qindex="${key}"]`);
      if (input) input.value = value;
      updateProgress();
      saveDraft();
    },
    checkAnswer: index => checkSingle(String(index)),
    useHint: index => recordHintUsage(index),
    createNewExam() {
      state.examSeed = ''; state.examRecipe = null;
      renderExam();
    },
    loadExamCode(rawCode) {
      const code = String(rawCode || '').trim().toUpperCase();
      if(code.length>180)return {ok:false,message:'Mã đề quá dài.'};
      const match = code.match(/^WP3-L([1-5])-K(\d{1,2})G(\d{1,2})H(\d{1,2})-([A-Z0-9]{4,12})(?:~([A-Z0-9.]+))?$/);
      if (!match) return {ok:false,message:'Cần mã đề phiên bản WP3. Mã cũ không được tạo lại bằng ngân hàng đã thay đổi.'};
      const counts = { kha: Number(match[2]), gioi: Number(match[3]), hsg: Number(match[4]) };
      const total = counts.kha + counts.gioi + counts.hsg;
      if (total < 1 || total > 30) return { ok: false, message: 'Mã đề phải có từ 1 đến 30 câu.' };
      const capacities = getTierCapacities(match[1]);
      const overTier = ['kha', 'gioi', 'hsg'].find(tier => counts[tier] > capacities[tier]);
      if (overTier) {
        const labels = { kha: 'Khá', gioi: 'Giỏi', hsg: 'HSG' };
        return { ok: false, message: `Mã đề yêu cầu quá số cấu trúc ${labels[overTier]} của lớp ${match[1]} (tối đa ${capacities[overTier]} câu).` };
      }
      const recipe=match[6]?match[6].split('.').map(value=>parseInt(value,36)):null;
      if(recipe && (recipe.length!==total || recipe.some(n=>!Number.isSafeInteger(n)||n<0||n>10000)))return {ok:false,message:'Mã đề thiếu hoặc sai dữ liệu lựa chọn câu.'};
      state.grade = match[1];
      state.examSeed = match[5];state.examRecipe=recipe;
      const isStandard = counts.kha === 3 && counts.gioi === 7 && counts.hsg === 5;
      state.mode = isStandard ? 'exam' : 'teacher';
      state.teacherConfig = isStandard ? null : { counts, minutes: 45, includeHints: false, answerStyle: 'number', answerKey: true };
      state.answerStyle = isStandard ? 'variety' : 'number';
      if(!renderExam())return {ok:false,message:'Không tạo được đề hợp lệ.'};
      return { ok: true, code: getExamCode() };
    },
    configureTeacher(config) {
      const counts = {
        kha: Math.max(0, Math.min(20, Math.trunc(Number(config.counts?.kha) || 0))),
        gioi: Math.max(0, Math.min(20, Math.trunc(Number(config.counts?.gioi) || 0))),
        hsg: Math.max(0, Math.min(20, Math.trunc(Number(config.counts?.hsg) || 0)))
      };
      const total = counts.kha + counts.gioi + counts.hsg;
      if (total < 1 || total > 30) return { ok: false, message: 'Hãy chọn tổng số câu từ 1 đến 30.' };
      const selectedGrade = String(config.grade || state.grade);
      const capacities = getTierCapacities(selectedGrade);
      const overTier = ['kha', 'gioi', 'hsg'].find(tier => counts[tier] > capacities[tier]);
      if (overTier) {
        const labels = { kha: 'Khá', gioi: 'Giỏi', hsg: 'HSG' };
        return { ok: false, message: `Lớp ${selectedGrade} chỉ có ${capacities[overTier]} cấu trúc ${labels[overTier]} khác nhau. Hãy giảm số câu để đề không bị lặp.` };
      }
      state.grade = selectedGrade;
      state.mode = 'teacher';
      state.topic = 'all';
      state.examSeed = createSeed();state.examRecipe=null;
      state.teacherConfig = {
        counts,
        minutes: Math.max(5, Math.min(180, Number(config.minutes) || 45)),
        includeHints: Boolean(config.includeHints),
        answerKey: config.answerKey !== false,
        workspace: config.workspace !== false,
        answerStyle: config.answerStyle === 'variety' ? 'variety' : 'number'
      };
      state.answerStyle = state.teacherConfig.answerStyle;
      if(!renderExam())return {ok:false,message:'Không tạo được đề hợp lệ.'};
      return { ok: true, code: getExamCode() };
    },
    startAdaptive() {
      state.mode = 'adaptive';
      state.examSeed = ''; state.examRecipe = null;
      state.answerStyle = 'variety';
      renderExam();
    },
    grade: gradeExam
  };
  document.querySelectorAll('.grade-card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const g = e.currentTarget.dataset.grade;
      if (g && g !== state.grade) {
        state.grade = g;
        state.examSeed = ''; state.examRecipe = null;
        renderExam();
      }
    });
  });
  document.querySelectorAll('.practice-mode-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const mode = e.currentTarget.dataset.mode;
      if (!['exam', 'practice', 'wrong', 'adaptive'].includes(mode)) return;
      state.mode = mode;
      state.examSeed = ''; state.examRecipe = null;
      state.answerStyle = 'variety';
      if (mode !== 'practice') state.topic = 'all';
      renderExam();
    });
  });
  document.querySelectorAll('.topic-chip').forEach(btn => {
    btn.addEventListener('click', e => {
      if (e.currentTarget.disabled) return;
      state.mode = 'practice';
      state.topic = e.currentTarget.dataset.topic || 'all';
      state.answerStyle = 'variety';
      renderExam();
    });
  });
  const btnClearWrong = $('btn-clear-wrong');
  if (btnClearWrong) {
    btnClearWrong.addEventListener('click', () => {
      const wrongCount = getWrongQuestions(state.grade).length;
      if (!wrongCount || !window.confirm(`Xóa ${wrongCount} câu trong sổ câu sai lớp ${state.grade}?`)) return;
      setWrongQuestions(state.grade, []);
      if (state.mode === 'wrong') renderExam();
      else refreshPracticeUI();
    });
  }
  const btnGen = $('btn-generate-exam');
  if (btnGen) btnGen.addEventListener('click', () => {
    state.examSeed = ''; state.examRecipe = null;
    renderExam();
  });
  const btnHeroStart = $('btn-hero-start');
  if (btnHeroStart) {
    btnHeroStart.addEventListener('click', () => {
      $('exam-controls').scrollIntoView({ behavior: 'smooth' });
    });
  }
  const btnHeroPrint = $('btn-hero-print');
  if (btnHeroPrint) btnHeroPrint.addEventListener('click', () => window.IMathWordProblemExport ? window.IMathWordProblemExport.open() : window.print());
  const btnPrint = $('btn-print-exam');
  if (btnPrint) btnPrint.addEventListener('click', () => window.IMathWordProblemExport ? window.IMathWordProblemExport.open() : window.print());
  const btnSubmit = $('btn-submit-exam');
  if (btnSubmit) btnSubmit.addEventListener('click', () => gradeExam());
  const btnReTest = $('btn-re-test');
  if (btnReTest) btnReTest.addEventListener('click', () => renderExam());
  const hasUnfinishedAnswers = () => !state.graded && Object.values(state.userAnswers).some(value => String(value || '').trim());
  window.addEventListener('beforeunload', event => {
    if (!hasUnfinishedAnswers()) return;
    event.preventDefault();
    event.returnValue = '';
  });
  window.addEventListener('pagehide', saveDraft);
  const initialise = () => {
    const navigationEntry = typeof performance?.getEntriesByType === 'function'
      ? performance.getEntriesByType('navigation')[0]
      : null;
    const isReload = navigationEntry?.type === 'reload' || performance?.navigation?.type === 1;
    if (isReload) clearDraft();
    const draft = isReload ? null : readDraft();
    if (restoreDraftState(draft)) {
      renderExam({ restore: true });
      const badge = $('current-grade-badge');
      if (badge) badge.textContent += ' · Đã khôi phục bài đang làm';
    } else {
      renderExam();
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialise);
  } else {
    initialise();
  }
})();
