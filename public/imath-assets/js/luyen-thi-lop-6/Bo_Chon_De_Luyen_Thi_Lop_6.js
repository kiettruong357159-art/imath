(function (root, factory) {
  const engine = factory();
  if (typeof module === 'object' && module.exports) module.exports = engine;
  else root.IMathGrade6Engine = engine;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const countBy = (items, key) => items.reduce((result, item) => {
    const value = typeof key === 'function' ? key(item) : item[key];
    result[value] = (result[value] || 0) + 1;
    return result;
  }, {});

  function hashSeed(value) {
    let hash = 2166136261;
    const text = String(value);
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function parseNumericAnswer(value) {
    const source = String(value == null ? '' : value)
      .trim()
      .toLowerCase()
      .replace(/[\u00a0\u202f]/g, ' ');
    if (!source) return NaN;
    const mixed = source.match(/^([+-]?\d+)\s*(?:\+|\s)\s*(\d+)\s*\/\s*(\d+)$/);
    if (mixed && Number(mixed[3]) !== 0) {
      const whole = Number(mixed[1]);
      const fraction = Number(mixed[2]) / Number(mixed[3]);
      return whole < 0 ? whole - fraction : whole + fraction;
    }
    const fraction = source.match(/^([+-]?\d+(?:[.,]\d+)?)\s*\/\s*([+-]?\d+(?:[.,]\d+)?)$/);
    if (fraction) {
      const numerator = Number(fraction[1].replace(',', '.'));
      const denominator = Number(fraction[2].replace(',', '.'));
      return denominator !== 0 ? numerator / denominator : NaN;
    }
    const groupedNumber = /^[+-]?\d{1,3}(?:\s+\d{3})+(?:[.,]\d+)?$/;
    const plainNumber = /^[+-]?\d+(?:[.,]\d+)?$/;
    if (!groupedNumber.test(source) && !plainNumber.test(source)) return NaN;
    return Number(source.replace(/\s+/g, '').replace(',', '.'));
  }

  function isAnswerCorrect(question, value) {
    if (!question || !question.scoringRule) return false;
    if (question.scoringRule.type === 'numeric') {
      const parsed = parseNumericAnswer(value);
      const expected = Number(question.scoringRule.expected);
      const tolerance = Number(question.scoringRule.tolerance || 0);
      return Number.isFinite(parsed) && Number.isFinite(expected) && Math.abs(parsed - expected) <= tolerance;
    }
    if (question.scoringRule.type === 'choice') return String(value || '') === String(question.scoringRule.expected);
    return false;
  }

  function validateRichMarkup(markup, allowedTags) {
    const errors = [];
    const source = String(markup || '');
    const tagSet = new Set(
      (allowedTags || ['b','strong','em','i','span','sup','sub','br','p','table','thead','tbody','tr','th','td'])
        .map(tag => String(tag).toLowerCase())
    );

    if (/<\s*\/?\s*(script|iframe|object|embed|style|link|meta|form|input|button|textarea|select|video|audio)\b/i.test(source)) {
      errors.push('Nội dung chứa thẻ HTML không an toàn.');
    }
    if (/\bon[a-z]+\s*=/i.test(source)) errors.push('Nội dung chứa trình xử lý sự kiện không an toàn.');
    if (/\b(?:href|src|xlink:href|style)\s*=/i.test(source)) errors.push('Nội dung chứa thuộc tính liên kết hoặc kiểu nội tuyến không được phép.');
    if (/javascript\s*:|data\s*:\s*text\/html/i.test(source)) errors.push('Nội dung chứa giao thức không an toàn.');

    const tags = [...source.matchAll(/<\s*\/?\s*([a-z0-9:-]+)\b[^>]*>/gi)].map(match => match[1].toLowerCase());
    const invalidTag = tags.find(tag => !tagSet.has(tag));
    if (invalidTag) errors.push(`Thẻ <${invalidTag}> không nằm trong danh sách cho phép.`);

    return {valid:errors.length === 0, errors};
  }

  function validateIllustration(illustration) {
    if (!illustration) return {valid:true, errors:[]};
    const errors = [];
    const markup = String(illustration.markup || '');
    const allowedTags = new Set(['div','span','i','svg','g','path','rect','circle','line','polyline','polygon','text']);
    if (!['svg','html-css'].includes(illustration.type)) errors.push('Loại hình minh họa không được hỗ trợ.');
    if (!markup.trim()) errors.push('Hình minh họa không có nội dung.');
    if (/<\s*(script|foreignobject|iframe|object|embed|img|style|link|meta)\b/i.test(markup)) errors.push('Hình chứa thẻ không an toàn.');
    if (/\son[a-z]+\s*=/i.test(markup) || /javascript\s*:/i.test(markup) || /data\s*:\s*text\/html/i.test(markup)) errors.push('Hình chứa thuộc tính hoặc liên kết không an toàn.');
    const tags = [...markup.matchAll(/<\/?\s*([a-z0-9-]+)/gi)].map(match => match[1].toLowerCase());
    const invalidTag = tags.find(tag => !allowedTags.has(tag));
    if (invalidTag) errors.push(`Hình chứa thẻ ngoài danh sách cho phép: ${invalidTag}.`);
    if (illustration.type === 'svg' && (!/^\s*<svg\b/i.test(markup) || !/<\/svg>\s*$/i.test(markup))) errors.push('SVG không có cặp thẻ gốc hợp lệ.');
    return {valid:errors.length === 0, errors};
  }

  function validateQuestion(question) {
    const errors = [];
    const required = ['id','version','status','displayLabel','internalDifficulty','difficultyScore','mainTopic','subTopics','skills','templateFamily','answerType','promptHtml','answerUnit','scoringRule','answerDisplay','solutionSteps','expectedMinutes','provenance','review'];
    required.forEach(field => {
      if (!own(question, field)) errors.push(`Thiếu trường ${field}.`);
    });
    if (!['draft','needs-review','approved','retired'].includes(question.status)) errors.push('Trạng thái không hợp lệ.');
    if (!question.id || !String(question.id).trim()) errors.push('ID rỗng.');
    if (!question.templateFamily || !String(question.templateFamily).trim()) errors.push('Thiếu templateFamily.');
    if (!Array.isArray(question.subTopics) || !Array.isArray(question.skills)) errors.push('Chủ đề phụ hoặc kỹ năng không phải danh sách.');
    const promptCheck = validateRichMarkup(question.promptHtml);
    errors.push(...promptCheck.errors.map(error => `Nội dung câu hỏi: ${error}`));
    (question.options || []).forEach((option, index) => {
      const optionText = typeof option === 'string' ? option : option && option.label;
      if (typeof optionText !== 'string') return;
      const optionCheck = validateRichMarkup(optionText);
      errors.push(...optionCheck.errors.map(error => `Lựa chọn ${index + 1}: ${error}`));
    });
    if (!question.scoringRule || !own(question.scoringRule, 'expected')) errors.push('Thiếu đáp án trong quy tắc chấm.');
    if (!Array.isArray(question.solutionSteps) || !question.solutionSteps.length) errors.push('Thiếu lời giải từng bước.');
    const reviewStatuses = ['draft','needs-review','approved','retired'];
    ['content','difficulty'].forEach(dimension => {
      const dimensionReview = question.review && question.review[dimension];
      if (!dimensionReview) {
        errors.push(`Thiếu trạng thái kiểm duyệt ${dimension === 'content' ? 'nội dung' : 'độ khó'}.`);
        return;
      }
      if (!reviewStatuses.includes(dimensionReview.status)) errors.push(`Trạng thái kiểm duyệt ${dimension === 'content' ? 'nội dung' : 'độ khó'} không hợp lệ.`);
      if (!dimensionReview.reviewer || !dimensionReview.reviewedAt || !dimensionReview.note) errors.push(`Hồ sơ kiểm duyệt ${dimension === 'content' ? 'nội dung' : 'độ khó'} chưa đầy đủ.`);
    });
    if (!['draft','retired'].includes(question.status) && question.review?.content && question.review?.difficulty) {
      const derivedStatus = question.review.content.status === 'approved' && question.review.difficulty.status === 'approved' ? 'approved' : 'needs-review';
      if (question.status !== derivedStatus) errors.push('Trạng thái chung không khớp hai trạng thái kiểm duyệt độc lập.');
    }
    if (/class=["']math-frac["']/i.test(question.promptHtml || '')) {
      const opened = (question.promptHtml.match(/class=["']math-frac["']/gi) || []).length;
      const closed = (question.promptHtml.match(/<\/span>/gi) || []).length;
      if (closed < opened * 3) errors.push('Cấu trúc phân số HTML có dấu hiệu thiếu thẻ đóng.');
    }
    const illustrationCheck = validateIllustration(question.illustration);
    errors.push(...illustrationCheck.errors);
    return {valid:errors.length === 0, errors};
  }

  function validateQuestionGroup(group) {
    const errors = [];
    if (!group || !group.groupId) errors.push('Nhóm câu hỏi thiếu groupId.');
    if (!group || !group.sharedStimulusHtml) errors.push('Nhóm câu hỏi thiếu dữ kiện chung.');
    if (!group || !Array.isArray(group.questions) || group.questions.length < 2 || group.questions.length > 3) errors.push('Nhóm câu hỏi phải có 2–3 câu con.');
    if (group && group.positionsOccupied !== group.questions?.length) errors.push('positionsOccupied không khớp số câu con.');
    if (group && group.consecutive !== true) errors.push('Nhóm câu hỏi phải được đặt liên tiếp.');
    (group?.questions || []).forEach(child => {
      const childCheck = validateQuestion(child);
      if (!childCheck.valid) errors.push(...childCheck.errors.map(error => `${child.id || 'câu con'}: ${error}`));
    });
    return {valid:errors.length === 0, errors};
  }

  function validateBank(bank) {
    const errors = [];
    const warnings = [];
    const questions = Array.isArray(bank?.questions) ? bank.questions : [];
    const groups = Array.isArray(bank?.questionGroups) ? bank.questionGroups : [];
    const allQuestions = [...questions, ...groups.flatMap(group => group.questions || [])];
    const idCounts = countBy(allQuestions, 'id');
    Object.entries(idCounts).filter(([, count]) => count > 1).forEach(([id]) => errors.push(`ID bị trùng: ${id}.`));
    const groupCounts = countBy(groups, 'groupId');
    Object.entries(groupCounts).filter(([, count]) => count > 1).forEach(([id]) => errors.push(`groupId bị trùng: ${id}.`));
    allQuestions.forEach(question => {
      const check = validateQuestion(question);
      if (!check.valid) errors.push(...check.errors.map(error => `${question.id || 'unknown'}: ${error}`));
      if (question.review?.content?.status !== 'approved') warnings.push(`${question.id}: nội dung/đáp án chưa được duyệt.`);
      if (question.review?.difficulty?.status !== 'approved') warnings.push(`${question.id}: độ khó chưa được duyệt.`);
    });
    groups.forEach(group => {
      const check = validateQuestionGroup(group);
      if (!check.valid) errors.push(...check.errors.map(error => `${group.groupId || 'unknown-group'}: ${error}`));
    });
    return {valid:errors.length === 0, errors, warnings, counts:{questions:questions.length, groups:groups.length, allItems:allQuestions.length}};
  }

  function isEligibleForSchool(question, schoolId, eligibleStatuses, recentIds) {
    const targets = question.schoolTargets || ['all'];
    return eligibleStatuses.includes(question.status)
      && (targets.includes('all') || targets.includes(schoolId))
      && !recentIds.has(question.id);
  }

  function blockFits(block, startIndex, config, state) {
    if (startIndex + block.questions.length > config.slots.length) return false;
    if (block.groupId && config.constraints.requireConsecutiveQuestionGroups && block.consecutive !== true) return false;
    const topicCounts = {...state.topicCounts};
    const families = new Set(state.templateFamilies);
    for (let offset = 0; offset < block.questions.length; offset += 1) {
      const question = block.questions[offset];
      const slot = config.slots[startIndex + offset];
      if (question.internalDifficulty !== slot.internalDifficulty) return false;
      const minimumDepth = Number(config.constraints.minimumReasoningDepthByPosition?.[slot.position] || 0);
      if (Number(question.reasoningDepth || 0) < minimumDepth) return false;
      if (state.usedIds.has(question.id)) return false;
      if (config.constraints.forbidSameTemplateFamily && families.has(question.templateFamily)) return false;
      families.add(question.templateFamily);
      topicCounts[question.mainTopic] = (topicCounts[question.mainTopic] || 0) + 1;
      if (topicCounts[question.mainTopic] > config.constraints.maxSameMainTopic) return false;
    }
    return true;
  }

  function buildExam(options) {
    const {bank, config, schoolId='caugiay', seed='de-mau-01', recentQuestionIds=[], appearanceCounts={}, skipFutureViabilityCheck=false} = options || {};
    const questions = Array.isArray(bank?.questions) ? bank.questions : [];
    const groups = Array.isArray(bank?.questionGroups) ? bank.questionGroups : [];
    const recentIds = new Set(recentQuestionIds.slice(-config.constraints.recentQuestionLimit));
    const eligibleStatuses = config.constraints.eligibleStatuses;
    const eligibleStandalone = questions.filter(question => isEligibleForSchool(question, schoolId, eligibleStatuses, recentIds));
    const eligibleGroups = groups.filter(group => (group.questions || []).every(question => isEligibleForSchool(question, schoolId, eligibleStatuses, recentIds)));
    const eligibleAll = [...eligibleStandalone, ...eligibleGroups.flatMap(group => group.questions || [])];
    const requiredByDifficulty = countBy(config.slots, 'internalDifficulty');
    const availableByDifficulty = countBy(eligibleAll, 'internalDifficulty');
    const conflicts = [];
    Object.entries(requiredByDifficulty).forEach(([difficulty, required]) => {
      const available = availableByDifficulty[difficulty] || 0;
      if (available < required) conflicts.push({
        code:'INSUFFICIENT_DIFFICULTY_POOL',
        difficulty,
        required,
        available,
        message:`Mức ${config.difficultyLabels[difficulty] || difficulty} cần ${required} câu nhưng chỉ có ${available} câu phù hợp.`
      });
    });
    if (conflicts.length) return {ok:false, seed:String(seed), questions:[], conflicts, stats:{requiredByDifficulty,availableByDifficulty,searchNodes:0}};

    const blocks = [
      ...eligibleStandalone.map(question => ({key:`q:${question.id}`,groupId:null,consecutive:true,questions:[question]})),
      ...eligibleGroups.map(group => ({key:`g:${group.groupId}`,groupId:group.groupId,consecutive:group.consecutive,sharedStimulusHtml:group.sharedStimulusHtml,questions:group.questions}))
    ];
    const state = {questions:[],usedIds:new Set(),usedGroups:new Set(),templateFamilies:new Set(),topicCounts:{},visualCount:0};
    const maxNodes = 250000;
    let searchNodes = 0;
    let targetTopicCounts = null;

    function canStillSatisfySlots(slotIndexes) {
      const remainingSlots = slotIndexes.map(index => config.slots[index]);
      const topicDemands=[];
      if(targetTopicCounts){
        for(const [topic,target] of Object.entries(targetTopicCounts)){
          const stillNeeded=target-(state.topicCounts[topic]||0);
          if(stillNeeded<0)return false;
          for(let index=0;index<stillNeeded;index+=1)topicDemands.push(topic);
        }
      }else{
        config.constraints.requiredMainTopics.filter(topic=>!(state.topicCounts[topic]>0)).forEach(topic=>topicDemands.push(topic));
      }
      if (topicDemands.length > remainingSlots.length) return false;
      const remainingDifficulties = new Set(remainingSlots.map(slot => slot.internalDifficulty));
      const futureQuestions = eligibleAll.filter(question => {
        if (state.usedIds.has(question.id)) return false;
        if (!remainingDifficulties.has(question.internalDifficulty)) return false;
        if (config.constraints.forbidSameTemplateFamily && state.templateFamilies.has(question.templateFamily)) return false;
        const topicLimit=targetTopicCounts?.[question.mainTopic]??config.constraints.maxSameMainTopic;
        if ((state.topicCounts[question.mainTopic] || 0) >= topicLimit) return false;
        return true;
      });
      if (topicDemands.some(topic => !futureQuestions.some(question => question.mainTopic === topic))) return false;
      const topicOptions = topicDemands.map((topic,demandIndex) => ({
        demandIndex,
        topic,
        slots:slotIndexes.filter(slotIndex => futureQuestions.some(question => {
          const slot=config.slots[slotIndex];
          const minimumDepth=Number(config.constraints.minimumReasoningDepthByPosition?.[slot.position]||0);
          return question.mainTopic===topic
            && question.internalDifficulty===slot.internalDifficulty
            && Number(question.reasoningDepth||0)>=minimumDepth;
        }))
      })).sort((left,right)=>left.slots.length-right.slots.length);
      if (topicOptions.some(option=>option.slots.length===0)) return false;
      const slotAssignments=new Map();
      function assignTopic(demandIndex,visitedSlots) {
        for(const slotIndex of topicOptions[demandIndex].slots){
          if(visitedSlots.has(slotIndex))continue;
          visitedSlots.add(slotIndex);
          const previousDemand=slotAssignments.get(slotIndex);
          if(previousDemand===undefined||assignTopic(previousDemand,visitedSlots)){
            slotAssignments.set(slotIndex,demandIndex);
            return true;
          }
        }
        return false;
      }
      for(let demandIndex=0;demandIndex<topicOptions.length;demandIndex+=1){
        if(!assignTopic(demandIndex,new Set()))return false;
      }
      const remainingByDifficulty = countBy(remainingSlots, 'internalDifficulty');
      const futureFamiliesByDifficulty={};
      futureQuestions.forEach(question=>{
        if(!futureFamiliesByDifficulty[question.internalDifficulty])futureFamiliesByDifficulty[question.internalDifficulty]=new Set();
        futureFamiliesByDifficulty[question.internalDifficulty].add(question.templateFamily);
      });
      if (Object.entries(remainingByDifficulty).some(([difficulty, needed]) => (futureFamiliesByDifficulty[difficulty]?.size || 0) < needed)) return false;
      const visualNeeded = Math.max(0, config.constraints.minVisualQuestions - state.visualCount);
      const futureVisualFamilies=new Set(futureQuestions.filter(question=>question.illustration).map(question=>question.templateFamily));
      if (futureVisualFamilies.size < visualNeeded) return false;
      return true;
    }

    function canStillSatisfy(nextSlotIndex) {
      return canStillSatisfySlots(config.slots.slice(nextSlotIndex).map((slot,index)=>nextSlotIndex+index));
    }

    function candidatePriority(block, slotIndex) {
      let priority = 0;
      block.questions.forEach(question => {
        // Prefer less-used questions within a topic/visual priority tier.
        // The root rotation below prevents a tier from starving another tier.
        const appearances = Number(appearanceCounts?.[question.id]);
        if (Number.isFinite(appearances) && appearances > 0) priority += 100 / (1 + Math.floor(appearances));
        else priority += 100;
        const topicTarget=targetTopicCounts?.[question.mainTopic]??(config.constraints.requiredMainTopics.includes(question.mainTopic)?1:0);
        if ((state.topicCounts[question.mainTopic]||0)<topicTarget) priority += 1000;
        priority -= (state.topicCounts[question.mainTopic] || 0) * 500;
        if (question.illustration && state.visualCount < config.constraints.minVisualQuestions) priority += 700;
      });
      return priority + hashSeed(`${seed}|${slotIndex}|${block.key}`) / 0xffffffff;
    }

    function finalConstraintsSatisfied() {
      const hasTopics = config.constraints.requiredMainTopics.every(topic => (state.topicCounts[topic] || 0) > 0);
      if (!hasTopics || state.visualCount < config.constraints.minVisualQuestions) return false;
      if(targetTopicCounts&&Object.entries(targetTopicCounts).some(([topic,target])=>(state.topicCounts[topic]||0)!==target))return false;
      const shouldCheckNext = config.constraints.preserveNextExamFeasibility
        && !skipFutureViabilityCheck
        && eligibleAll.length >= config.constraints.exactQuestionCount * 2
        && eligibleAll.length < config.constraints.exactQuestionCount * 4;
      if (!shouldCheckNext) return true;
      const followup = buildExam({
        bank,
        config,
        schoolId,
        seed:`${seed}|kiem-tra-de-tiep`,
        recentQuestionIds:state.questions.map(question => question.id),
        appearanceCounts,
        skipFutureViabilityCheck:true
      });
      return followup.ok;
    }

    function visit(slotIndex) {
      searchNodes += 1;
      if (searchNodes > maxNodes) return false;
      if (slotIndex === config.slots.length) {
        return finalConstraintsSatisfied();
      }
      const candidates = blocks
        .filter(block => !block.groupId || !state.usedGroups.has(block.groupId))
        .filter(block => blockFits(block, slotIndex, config, state))
        .sort((left, right) => candidatePriority(right, slotIndex) - candidatePriority(left, slotIndex));
      for (const block of candidates) {
        const previous = {
          length:state.questions.length,
          topicCounts:{...state.topicCounts},
          visualCount:state.visualCount,
          templateFamilies:new Set(state.templateFamilies)
        };
        if (block.groupId) state.usedGroups.add(block.groupId);
        block.questions.forEach((question, offset) => {
          const position = config.slots[slotIndex + offset].position;
          state.questions.push({...question, position, groupId:block.groupId, sharedStimulusHtml:block.sharedStimulusHtml || null});
          state.usedIds.add(question.id);
          state.templateFamilies.add(question.templateFamily);
          state.topicCounts[question.mainTopic] = (state.topicCounts[question.mainTopic] || 0) + 1;
          if (question.illustration) state.visualCount += 1;
        });
        const nextSlotIndex = slotIndex + block.questions.length;
        if (canStillSatisfy(nextSlotIndex) && visit(nextSlotIndex)) return true;
        block.questions.forEach(question => state.usedIds.delete(question.id));
        if (block.groupId) state.usedGroups.delete(block.groupId);
        state.questions.length = previous.length;
        state.topicCounts = previous.topicCounts;
        state.visualCount = previous.visualCount;
        state.templateFamilies = previous.templateFamilies;
      }
      return false;
    }

    function visitStandalone(remainingIndexes) {
      searchNodes += 1;
      if (searchNodes > maxNodes) return false;
      if (remainingIndexes.length === 0) {
        return finalConstraintsSatisfied();
      }
      const slotChoices=remainingIndexes.map(slotIndex=>({
        slotIndex,
        candidates:eligibleStandalone
          .map(question=>({key:`q:${question.id}`,groupId:null,consecutive:true,questions:[question]}))
          .filter(block=>blockFits(block,slotIndex,config,state))
          .filter(block=>{
            const question=block.questions[0];
            const topicLimit=targetTopicCounts?.[question.mainTopic]??config.constraints.maxSameMainTopic;
            return (state.topicCounts[question.mainTopic]||0)<topicLimit;
          })
      })).sort((left,right)=>left.candidates.length-right.candidates.length||right.slotIndex-left.slotIndex);
      // Rotate the starting question across ALL difficulty slots. Otherwise MRV
      // fills scarce high-level slots first and can starve whole topic/level cells.
      const isRotationRoot = state.questions.length === 0;
      const seenRootIds = new Set();
      const candidates = isRotationRoot
        ? slotChoices.flatMap(choice => choice.candidates.filter(block => {
            const id = block.questions[0].id;
            if (seenRootIds.has(id)) return false;
            seenRootIds.add(id); return true;
          }).map(block => ({block,slotIndex:choice.slotIndex}))).sort((left,right) => {
            const count = entry => Math.max(0, Number(appearanceCounts?.[entry.block.questions[0].id]) || 0);
            return count(left)-count(right) || hashSeed(`${seed}|root|${left.block.key}`)-hashSeed(`${seed}|root|${right.block.key}`);
          })
        : slotChoices[0].candidates.sort((left,right)=>candidatePriority(right,slotChoices[0].slotIndex)-candidatePriority(left,slotChoices[0].slotIndex))
          .map(block => ({block,slotIndex:slotChoices[0].slotIndex}));
      for (const {block,slotIndex} of candidates) {
        const question=block.questions[0],previousTopicCounts={...state.topicCounts},previousVisualCount=state.visualCount,previousFamilies=new Set(state.templateFamilies);
        state.questions.push({...question,position:config.slots[slotIndex].position,groupId:null,sharedStimulusHtml:null});
        state.usedIds.add(question.id);state.templateFamilies.add(question.templateFamily);state.topicCounts[question.mainTopic]=(state.topicCounts[question.mainTopic]||0)+1;if(question.illustration)state.visualCount+=1;
        const nextIndexes=remainingIndexes.filter(index=>index!==slotIndex);
        if(canStillSatisfySlots(nextIndexes)&&visitStandalone(nextIndexes))return true;
        state.questions.pop();state.usedIds.delete(question.id);state.topicCounts=previousTopicCounts;state.visualCount=previousVisualCount;state.templateFamilies=previousFamilies;
      }
      return false;
    }

    let found=false;
    if(eligibleGroups.length){
      found=visit(0);
    }else{
      const topics=config.constraints.requiredMainTopics;
      const capacity=topics.length*config.constraints.maxSameMainTopic;
      const deficit=capacity-config.constraints.exactQuestionCount;
      const configuredTargets=config.constraints.topicTargetsPerExam;
      const targetPatterns=configuredTargets
        ? [{...configuredTargets}]
        : deficit===1
          ? topics.map(singleTopic=>Object.fromEntries(topics.map(topic=>[topic,topic===singleTopic?config.constraints.maxSameMainTopic-1:config.constraints.maxSameMainTopic])))
          : [null];
      for(const pattern of targetPatterns){
        targetTopicCounts=pattern;
        if(visitStandalone(config.slots.map((slot,index)=>index))){found=true;break;}
        searchNodes=0;
      }
    }
    if (!found) {
      return {
        ok:false,
        seed:String(seed),
        questions:[],
        conflicts:[{code:'CONSTRAINT_CONFLICT',message:'Có đủ số lượng theo mức nhưng không tìm được tổ hợp thỏa đồng thời chủ đề, hình minh họa, họ dạng toán, độ sâu suy luận và lịch sử làm bài.'}],
        stats:{requiredByDifficulty,availableByDifficulty,searchNodes}
      };
    }
    state.questions.sort((left,right)=>left.position-right.position);
    const validation = validateGeneratedExam(state.questions, config, recentQuestionIds);
    return {ok:validation.valid, seed:String(seed), questions:state.questions, conflicts:validation.errors.map(message=>({code:'POST_VALIDATION_FAILED',message})), stats:{requiredByDifficulty,availableByDifficulty,searchNodes}, validation};
  }

  function validateGeneratedExam(questions, config, recentQuestionIds=[]) {
    const errors = [];
    const recentIds = new Set(recentQuestionIds.slice(-config.constraints.recentQuestionLimit));
    if (questions.length !== config.constraints.exactQuestionCount) errors.push(`Đề có ${questions.length}/${config.constraints.exactQuestionCount} câu.`);
    questions.forEach((question, index) => {
      const slot = config.slots[index];
      if (!slot || question.internalDifficulty !== slot.internalDifficulty) errors.push(`Câu ${index + 1} bị xếp sai mức.`);
      if (recentIds.has(question.id)) errors.push(`Câu ${question.id} vừa được làm gần đây.`);
    });
    const families = countBy(questions, 'templateFamily');
    Object.entries(families).filter(([, count]) => count > 1).forEach(([family]) => errors.push(`Hai câu cùng họ dạng toán: ${family}.`));
    const topics = countBy(questions, 'mainTopic');
    Object.entries(topics).filter(([, count]) => count > config.constraints.maxSameMainTopic).forEach(([topic, count]) => errors.push(`Chủ đề ${topic} xuất hiện ${count} lần.`));
    config.constraints.requiredMainTopics.filter(topic => !topics[topic]).forEach(topic => errors.push(`Thiếu chủ đề bắt buộc: ${topic}.`));
    Object.entries(config.constraints.topicTargetsPerExam || {}).forEach(([topic,target]) => {
      if ((topics[topic] || 0) !== target) errors.push(`Chủ đề ${topic} có ${topics[topic] || 0}/${target} câu theo mục tiêu đề.`);
    });
    const visualCount = questions.filter(question => question.illustration).length;
    if (visualCount < config.constraints.minVisualQuestions) errors.push(`Chỉ có ${visualCount}/${config.constraints.minVisualQuestions} câu trực quan.`);
    return {valid:errors.length === 0, errors, topicCounts:topics, difficultyCounts:countBy(questions,'internalDifficulty'), visualCount};
  }

  function toPublicQuestion(question, config) {
    const slot = config.slots[question.position - 1];
    return {
      id: question.id,
      number: question.position,
      displayLabel: slot.displayLabel,
      promptHtml: question.promptHtml,
      illustration: question.illustration,
      answerType: question.answerType,
      options: [...(question.options || [])],
      answerUnit: question.answerUnit,
      groupId: question.groupId || null,
      sharedStimulusHtml: question.sharedStimulusHtml || null
    };
  }

  function gradeExam(questions, answers) {
    const results = {};
    let correct = 0;
    questions.forEach(question => {
      const isCorrect = isAnswerCorrect(question, answers?.[question.id]);
      if (isCorrect) correct += 1;
      results[question.id] = {
        correct:isCorrect,
        answerDisplay:question.answerDisplay,
        solutionSteps:[...question.solutionSteps]
      };
    });
    return {correct,total:questions.length,score:questions.length ? correct / questions.length * 10 : 0,results};
  }

  return {
    hashSeed,
    parseNumericAnswer,
    isAnswerCorrect,
    validateRichMarkup,
    validateIllustration,
    validateQuestion,
    validateQuestionGroup,
    validateBank,
    validateGeneratedExam,
    buildExam,
    toPublicQuestion,
    gradeExam,
    countBy
  };
});
