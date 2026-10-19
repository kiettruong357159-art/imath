/**
 * P2 — lớp trải nghiệm học tập dựa trên ngân hàng đã kiểm định.
 *
 * Không tạo câu hỏi. Mô-đun này chỉ:
 * - tổng hợp số lượng thật theo tầng;
 * - lưu kết quả cục bộ để hình thành hồ sơ năng lực;
 * - tổ chức HSG theo sáu nhóm tư duy;
 * - tạo manifest liên kết năm chặng với trang Tài liệu.
 */

const STORAGE_KEY = 'imath.geometry.p2.profile.v1';
const MAX_ATTEMPTS = 60;

const TIER_EXPERIENCE = Object.freeze({
  kha: Object.freeze({
    label: 'Khá',
    purpose: 'Củng cố kỹ năng nền tảng',
    description: 'Nắm chắc kiến thức đúng lớp và giải bài có một đến hai bước suy luận.',
    target: 0.7
  }),
  gioi: Object.freeze({
    label: 'Giỏi',
    purpose: 'Phát triển tư duy và vận dụng',
    description: 'Phân tích dữ kiện, kết hợp kiến thức và lựa chọn cách giải phù hợp.',
    target: 0.65
  }),
  hsg: Object.freeze({
    label: 'HSG',
    purpose: 'Thử thách chiến lược nhiều bước',
    description: 'Quan sát hình, phát hiện ý tưởng then chốt và kiểm tra chuỗi suy luận.',
    target: 0.6
  })
});

const HSG_SKILL_GROUPS = Object.freeze([
  Object.freeze({ key: 'cut_compose', label: 'Cắt ghép hình', icon: '✂', description: 'Tách, ghép và biến đổi hình về cấu trúc quen thuộc.' }),
  Object.freeze({ key: 'area_invariance', label: 'Bảo toàn diện tích', icon: '▦', description: 'Nhận ra phần tăng, phần giảm và đại lượng không đổi.' }),
  Object.freeze({ key: 'reverse_reasoning', label: 'Suy luận ngược', icon: '↶', description: 'Đi từ kết quả hoặc dữ kiện cuối để khôi phục điều chưa biết.' }),
  Object.freeze({ key: 'visual_counting', label: 'Đếm hình', icon: '◇', description: 'Phân nhóm hình theo kích thước và tránh đếm thiếu hoặc trùng.' }),
  Object.freeze({ key: 'pattern_rule', label: 'Quy luật', icon: '⌁', description: 'Tìm chu kỳ, quan hệ lặp và dự đoán bước tiếp theo.' }),
  Object.freeze({ key: 'spatial_solids', label: 'Không gian và khối', icon: '⬡', description: 'Xoay hình, nhìn từ các hướng và phân tích cấu trúc khối.' })
]);

const RESOURCE_STAGES = Object.freeze([
  Object.freeze({ key: 'foundation', label: 'Kiến thức nền', icon: '1' }),
  Object.freeze({ key: 'practice', label: 'Bài luyện tập', icon: '2' }),
  Object.freeze({ key: 'advanced', label: 'Bài Giỏi', icon: '3' }),
  Object.freeze({ key: 'olympiad', label: 'Bài HSG', icon: '4' }),
  Object.freeze({ key: 'test', label: 'Đề kiểm tra', icon: '5' })
]);

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function safeRatio(correct, total) {
  return total > 0 ? correct / total : null;
}

function percent(value) {
  return value === null ? null : Math.round(value * 100);
}

function classifyHsgSkill(question) {
  const strategy = question?.p11Review?.strategy || '';
  const text = normalizeText([
    question?.topic,
    question?.topicId,
    question?.clusterId,
    question?.title,
    question?.prompt,
    question?.skill
  ].join(' '));

  if (strategy === 'cut_composite' || /cat|ghep|khoet|phan con lai|hinh ghep|manh/.test(text)) return 'cut_compose';
  if (strategy === 'invariance' || /bao toan|khong doi|cung dien tich|dien tich.*tang|dien tich.*giam/.test(text)) return 'area_invariance';
  if (strategy === 'visual_counting' || /dem hinh|bao nhieu hinh|hinh an|luoi.*hinh/.test(text)) return 'visual_counting';
  if (strategy === 'pattern_rule' || /quy luat|chu ky|chu ki|lap lai|day hinh/.test(text)) return 'pattern_rule';
  if (strategy === 'spatial_transform' || /xoay|gap|huong|nhin tu tren|khong gian|khoi|the tich|lap phuong|hop chu nhat/.test(text)) return 'spatial_solids';
  if (strategy === 'reverse_reasoning' || /tim nguoc|con thieu|chua biet|tu ket qua|khoi phuc/.test(text)) return 'reverse_reasoning';

  if (/dien tich|chu vi|hinh thang|tam giac|hinh vuong|hinh chu nhat/.test(text)) return 'area_invariance';
  if (/phan so|phan tram|chuyen dong|thoi gian|quan he|tong.*hieu/.test(text)) return 'reverse_reasoning';
  return 'pattern_rule';
}

function summarizeTopicTiers(allTopics, grade, topicId = 'all') {
  const bank = allTopics?.[Number(grade)] || {};
  const topics = topicId === 'all'
    ? Object.entries(bank)
    : bank[topicId]
      ? [[topicId, bank[topicId]]]
      : [];
  const counts = { kha: 0, gioi: 0, hsg: 0, total: 0, topics: topics.length };
  for (const [, tiers] of topics) {
    for (const tier of ['kha', 'gioi', 'hsg']) {
      counts[tier] += Array.isArray(tiers?.[tier]) ? tiers[tier].length : 0;
    }
  }
  counts.total = counts.kha + counts.gioi + counts.hsg;
  return counts;
}

function summarizeHsgJourney(allTopics, grade, attempts = []) {
  const bank = allTopics?.[Number(grade)] || {};
  const progress = new Map(HSG_SKILL_GROUPS.map(group => [group.key, { correct: 0, total: 0 }]));
  for (const attempt of attempts) {
    for (const [key, value] of Object.entries(attempt.hsgSkills || {})) {
      if (!progress.has(key)) continue;
      progress.get(key).correct += Number(value.correct) || 0;
      progress.get(key).total += Number(value.total) || 0;
    }
  }

  const groups = new Map(HSG_SKILL_GROUPS.map(group => [group.key, {
    ...group,
    count: 0,
    topics: new Set(),
    questions: []
  }]));
  for (const [topicId, tiers] of Object.entries(bank)) {
    for (const question of tiers.hsg || []) {
      const key = classifyHsgSkill(question);
      const target = groups.get(key) || groups.get('reverse_reasoning');
      target.count++;
      target.topics.add(topicId);
      target.questions.push(question);
    }
  }

  return [...groups.values()].map(group => {
    const learned = progress.get(group.key) || { correct: 0, total: 0 };
    return {
      key: group.key,
      label: group.label,
      icon: group.icon,
      description: group.description,
      count: group.count,
      topicCount: group.topics.size,
      correct: learned.correct,
      answered: learned.total,
      accuracy: percent(safeRatio(learned.correct, learned.total)),
      questions: group.questions
    };
  });
}

function readAttempts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeAttempts(attempts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts.slice(-MAX_ATTEMPTS)));
  } catch (error) {
    // Chế độ riêng tư có thể chặn localStorage; phiên học vẫn hoạt động bình thường.
  }
}

function recordP2Attempt({ grade, topicId, topicLabel, mode, activities, durationSeconds }) {
  const tierStats = {
    kha: { correct: 0, total: 0 },
    gioi: { correct: 0, total: 0 },
    hsg: { correct: 0, total: 0 }
  };
  const hsgSkills = {};
  const topicStats = {};

  for (const activity of activities || []) {
    const tier = Object.hasOwn(tierStats, activity.tier) ? activity.tier : 'kha';
    tierStats[tier].total++;
    if (activity.isCorrect === true) tierStats[tier].correct++;
    const activityTopic = activity.originalTopic || activity.topicId || activity.topic || topicId || 'all';
    topicStats[activityTopic] ||= {
      kha: { correct: 0, total: 0 },
      gioi: { correct: 0, total: 0 },
      hsg: { correct: 0, total: 0 }
    };
    topicStats[activityTopic][tier].total++;
    if (activity.isCorrect === true) topicStats[activityTopic][tier].correct++;
    if (tier === 'hsg') {
      const key = classifyHsgSkill(activity);
      hsgSkills[key] ||= { correct: 0, total: 0 };
      hsgSkills[key].total++;
      if (activity.isCorrect === true) hsgSkills[key].correct++;
    }
  }

  const entry = {
    id: 'attempt-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
    completedAt: new Date().toISOString(),
    grade: Number(grade),
    topicId: topicId || 'all',
    topicLabel: topicLabel || '',
    mode: mode || 'activity',
    durationSeconds: Math.max(0, Number(durationSeconds) || 0),
    tierStats,
    topicStats,
    hsgSkills
  };
  const attempts = readAttempts();
  attempts.push(entry);
  writeAttempts(attempts);
  return entry;
}

function getLearnerProfile(grade, topicId = 'all') {
  const allAttempts = readAttempts().filter(item => Number(item.grade) === Number(grade));
  const attempts = topicId === 'all'
    ? allAttempts
    : allAttempts.filter(item => item.topicStats?.[topicId] || item.topicId === topicId);
  const tiers = {
    kha: { correct: 0, total: 0 },
    gioi: { correct: 0, total: 0 },
    hsg: { correct: 0, total: 0 }
  };
  for (const attempt of attempts) {
    const source = topicId === 'all'
      ? attempt.tierStats
      : (attempt.topicStats?.[topicId] || (attempt.topicId === topicId ? attempt.tierStats : null));
    if (!source) continue;
    for (const tier of Object.keys(tiers)) {
      tiers[tier].correct += Number(source?.[tier]?.correct) || 0;
      tiers[tier].total += Number(source?.[tier]?.total) || 0;
    }
  }
  for (const tier of Object.keys(tiers)) {
    tiers[tier].ratio = safeRatio(tiers[tier].correct, tiers[tier].total);
    tiers[tier].accuracy = percent(tiers[tier].ratio);
  }

  let level = 'unrated';
  let levelLabel = 'Chưa đủ dữ liệu';
  let message = 'Hãy hoàn thành và nộp một lượt bài để iMath xác định mức hiện tại.';
  let recommendation = 'Bắt đầu từ tầng Khá để kiểm tra nền tảng.';
  let nextTier = 'kha';

  if (attempts.length) {
    const lowerTierReadyForHsg = tiers.gioi.total === 0
      ? tiers.hsg.total >= 3
      : tiers.gioi.ratio >= TIER_EXPERIENCE.gioi.target;
    if (tiers.hsg.total >= 3 && tiers.hsg.ratio >= TIER_EXPERIENCE.hsg.target && lowerTierReadyForHsg) {
      level = 'hsg';
      levelLabel = 'Đang ở mức HSG';
      message = 'Em đã làm tốt bài vận dụng và có khả năng xử lý thử thách chiến lược.';
      recommendation = 'Tiếp tục Hành trình HSG theo nhóm kỹ năng còn có tỉ lệ đúng thấp.';
      nextTier = 'hsg';
    } else if (tiers.gioi.total >= 3 && tiers.gioi.ratio >= TIER_EXPERIENCE.gioi.target) {
      level = 'gioi';
      levelLabel = 'Đang ở mức Giỏi';
      message = 'Em đã có nền tảng tốt và biết kết hợp dữ kiện để giải bài vận dụng.';
      recommendation = 'Luyện thêm bài Giỏi, sau đó thử từng nhóm HSG phù hợp.';
      nextTier = 'gioi';
    } else if (tiers.kha.total >= 3 && tiers.kha.ratio >= TIER_EXPERIENCE.kha.target) {
      level = 'kha';
      levelLabel = 'Đang ở mức Khá';
      message = 'Em đã nắm phần lớn kiến thức nền và sẵn sàng tăng dần mức vận dụng.';
      recommendation = 'Củng cố các câu Khá còn sai rồi chuyển sang bài Giỏi.';
      nextTier = 'gioi';
    } else {
      level = 'foundation';
      levelLabel = 'Đang củng cố nền tảng';
      message = 'Một số kiến thức nền chưa ổn định; luyện chắc trước sẽ giúp em tiến nhanh hơn.';
      recommendation = 'Ôn kiến thức nền và luyện lại tầng Khá của chủ đề.';
      nextTier = 'kha';
    }
  }

  return {
    grade: Number(grade),
    topicId,
    attemptCount: attempts.length,
    attempts,
    allGradeAttempts: allAttempts,
    tiers,
    level,
    levelLabel,
    message,
    recommendation,
    nextTier
  };
}

function buildResourceUrl(grade, topicId, stage) {
  const url = new URL('https://imath.vn/tai-lieu/');
  url.searchParams.set('lop', String(grade));
  url.searchParams.set('chuyen-de', topicId || 'all');
  url.searchParams.set('lo-trinh', stage);
  url.searchParams.set('nguon', 'hinh-hoc-dai-luong');
  return url.toString();
}

function buildTopicResourceLinks(grade, topicId) {
  return RESOURCE_STAGES.map(stage => ({
    ...stage,
    url: buildResourceUrl(grade, topicId, stage.key)
  }));
}

function buildResourceManifest(curriculumCatalog) {
  const rows = [];
  for (const [gradeKey, curriculum] of Object.entries(curriculumCatalog || {})) {
    const seen = new Set();
    for (const module of curriculum.modules || []) {
      for (const [topicId, topicLabel] of module.topics || []) {
        if (seen.has(topicId)) continue;
        seen.add(topicId);
        rows.push({
          grade: Number(gradeKey),
          moduleId: module.id,
          moduleLabel: module.label,
          topicId,
          topicLabel,
          links: Object.fromEntries(buildTopicResourceLinks(gradeKey, topicId).map(item => [item.key, item.url]))
        });
      }
    }
  }
  return { version: '2.0', generatedAt: new Date().toISOString(), topics: rows };
}

function clearP2Progress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Không ảnh hưởng đến hoạt động chính.
  }
}

export {
  TIER_EXPERIENCE,
  HSG_SKILL_GROUPS,
  RESOURCE_STAGES,
  classifyHsgSkill,
  summarizeTopicTiers,
  summarizeHsgJourney,
  recordP2Attempt,
  getLearnerProfile,
  buildTopicResourceLinks,
  buildResourceManifest,
  clearP2Progress
};
