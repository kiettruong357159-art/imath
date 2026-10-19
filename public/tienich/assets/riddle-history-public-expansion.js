(function () {
  'use strict';

  const baseBank = window.IMathHistoryRiddleBank;
  const expansion = window.IMathHistoryExpansion;

  if (!baseBank || !expansion || !expansion.collections) {
    throw new Error('Không thể gộp phần mở rộng của kho câu đố lịch sử.');
  }

  const collectionKeys = ['nguyen', 'tran', 'le', 'modern'];
  const additions = collectionKeys.reduce(function (all, key) {
    const collection = expansion.collections[key];
    if (!collection || !Array.isArray(collection.questions)) {
      throw new Error('Thiếu bộ câu hỏi lịch sử: ' + key + '.');
    }
    return all.concat(collection.questions);
  }, []);

  function normalized(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  function validateAddition(question, index, ids, prompts) {
    const label = 'Câu mở rộng #' + (index + 1);
    const promptKey = normalized(question && question.prompt);

    if (!question || !question.id || ids.has(question.id)) throw new Error(label + ': ID thiếu hoặc bị trùng.');
    if (!promptKey || prompts.has(promptKey)) throw new Error(label + ': câu hỏi thiếu hoặc bị trùng.');
    if (question.region !== 'viet-nam') throw new Error(label + ': phải thuộc lịch sử Việt Nam.');
    if (!baseBank.levelLabels[question.level]) throw new Error(label + ': mức chơi không hợp lệ.');
    if (!question.factId || !question.period || !question.hint || !question.explanation) throw new Error(label + ': thiếu dữ liệu học tập.');
    if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options.map(normalized)).size !== 4) {
      throw new Error(label + ': cần đúng bốn lựa chọn khác nhau.');
    }
    if (!Array.isArray(question.answers) || question.answers.length !== 1 || !question.options.includes(question.answers[0])) {
      throw new Error(label + ': đáp án không hợp lệ.');
    }
    if (!/^https:\/\//.test(question.sourceUrl || '')) throw new Error(label + ': nguồn tham khảo phải dùng HTTPS.');

    ids.add(question.id);
    prompts.add(promptKey);
  }

  const ids = new Set(baseBank.questions.map(function (question) { return question.id; }));
  const prompts = new Set(baseBank.questions.map(function (question) { return normalized(question.prompt); }));
  additions.forEach(function (question, index) { validateAddition(question, index, ids, prompts); });

  if (additions.length !== 550) throw new Error('Phần mở rộng lịch sử phải có đúng 550 câu.');

  const mergedQuestions = baseBank.questions.concat(additions).map(function (question) {
    return Object.freeze(Object.assign({}, question));
  });
  const regionCounts = mergedQuestions.reduce(function (counts, question) {
    counts[question.region] = (counts[question.region] || 0) + 1;
    return counts;
  }, {});

  if (mergedQuestions.length !== 800 || regionCounts['viet-nam'] !== 730 || regionCounts['the-gioi'] !== 70) {
    throw new Error('Phân bố kho lịch sử sau khi gộp không đúng: cần 800 câu (730 Việt Nam, 70 thế giới).');
  }

  window.IMathHistoryRiddleBank = Object.freeze({
    version: '1.1.0',
    questions: Object.freeze(mergedQuestions),
    regionLabels: baseBank.regionLabels,
    levelLabels: baseBank.levelLabels
  });
}());
