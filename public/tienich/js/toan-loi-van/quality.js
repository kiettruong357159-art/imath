(() => {
  'use strict';

  const stripHtml = value => String(value || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&times;/gi, '×')
    .replace(/&divide;/gi, '÷')
    .replace(/\s+/g, ' ')
    .trim();

  const closeEnough = (left, right, tolerance = 1e-7) => {
    const a = Number(left);
    const b = Number(right);
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    return Math.abs(a - b) <= Math.max(tolerance, Math.abs(b) * 1e-9);
  };

  const normalizeNumberText = value => String(value || '')
    .replace(/(\d)\s+(?=\d{3}(?:\D|$))/g, '$1')
    .replace(/,/g, '.');

  function parseSimpleNumber(value) {
    const normalized = normalizeNumberText(value).trim();
    const fraction = normalized.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)/);
    if (fraction) {
      const denominator = Number(fraction[2]);
      return denominator === 0 ? NaN : Number(fraction[1]) / denominator;
    }
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : NaN;
  }

  function calculateExpression(rawExpression) {
    const expression = normalizeNumberText(rawExpression)
      .replace(/[−–—]/g, '-')
      .replace(/[×xX·]/g, '*')
      .replace(/[÷:]/g, '/')
      .replace(/\s+/g, '');
    if (!expression || /[^0-9.+\-*/()]/.test(expression)) return NaN;

    let position = 0;
    const peek = () => expression[position];
    const consume = () => expression[position++];

    function parseNumber() {
      const start = position;
      while (/[0-9.]/.test(peek() || '')) consume();
      if (start === position) return NaN;
      const value = Number(expression.slice(start, position));
      return Number.isFinite(value) ? value : NaN;
    }

    function parseFactor() {
      if (peek() === '+') {
        consume();
        return parseFactor();
      }
      if (peek() === '-') {
        consume();
        return -parseFactor();
      }
      if (peek() === '(') {
        consume();
        const value = parseAddSubtract();
        if (peek() !== ')') return NaN;
        consume();
        return value;
      }
      return parseNumber();
    }

    function parseMultiplyDivide() {
      let value = parseFactor();
      while (peek() === '*' || peek() === '/') {
        const operator = consume();
        const right = parseFactor();
        if (!Number.isFinite(value) || !Number.isFinite(right) || (operator === '/' && right === 0)) return NaN;
        value = operator === '*' ? value * right : value / right;
      }
      return value;
    }

    function parseAddSubtract() {
      let value = parseMultiplyDivide();
      while (peek() === '+' || peek() === '-') {
        const operator = consume();
        const right = parseMultiplyDivide();
        if (!Number.isFinite(value) || !Number.isFinite(right)) return NaN;
        value = operator === '+' ? value + right : value - right;
      }
      return value;
    }

    const result = parseAddSubtract();
    return position === expression.length && Number.isFinite(result) ? result : NaN;
  }

  function auditEquations(question) {
    const checks = [];
    function numericPiece(piece, side) {
      const match = side === 'left' ? piece.match(/[0-9\s.,()+\-−–—×xX·*÷/:]+$/) : piece.match(/^[0-9\s.,()+\-−–—×xX·*÷/:]+/);
      if (!match) return null;
      let expression = match[0].replace(/^[\s.,:]+|[\s.,:]+$/g, '');
      const before = side === 'left' ? piece.slice(0, match.index) : '';
      if (before.trim() && /^[\s]*[+\-−–—×xX·*÷/:]/.test(match[0])) return null;
      if (/\.\.\.|…|\{[A-Za-z]/.test(piece) || (before.trim() && /^[+\-−–—×xX·*÷/:]/.test(expression))) return null;
      if ((expression.match(/\(/g)||[]).length !== (expression.match(/\)/g)||[]).length) return null;
      const value = calculateExpression(expression);
      return Number.isFinite(value) ? {expression,value} : null;
    }
    for (const field of ['hint1','hint2','hint3','hint4','hint5','sol1','sol2']) {
      const source = normalizeNumberText(stripHtml(String(question[field] || '').replace(/<br\s*\/?>/gi, '|')).replace(/,\s+/g, '|'))
        .replace(/(\d+(?:[.,]\d+)?)%/g, '($1/100)')
        .replace(/((?:thùng|bước|tầng|vòi)\s+\d+)\s*:/gi, '$1 |');
      for (const segment of source.split('|')) {
        const parts=segment.split('=');
        for(let i=0;i<parts.length-1;i++){
          const left=numericPiece(parts[i],'left'), right=numericPiece(parts[i+1],'right');
          if(!left||!right)continue;
          const remainder=parts[i+1].match(/^\s*\d+\s+dư\s+(\d+)/i);
          const division=left.expression.match(/^(\d+)\s*[:/÷]\s*(\d+)$/);
          const valid=remainder&&division
            ? right.value===Math.floor(Number(division[1])/Number(division[2])) && Number(remainder[1])===Number(division[1])%Number(division[2])
            : closeEnough(left.value,right.value,0.005);
          checks.push({field,expression:left.expression,displayed:right.value,calculated:left.value,valid});
        }
      }
    }
    return checks;
  }
  const REASONING_SIGNALS = [
    /tính ngược|ban đầu|lúc đầu|số cần tìm|chưa biết/i,
    /tổng\s*[-–—]\s*hiệu|tổng\s*[-–—]\s*tỉ|hiệu\s*[-–—]\s*tỉ|tỉ số|tỉ lệ/i,
    /trung bình cộng|phần trăm|%|phân số|hỗn số/i,
    /giả thiết|loại trừ|quy luật|suy luận|mã khóa|xếp thứ tự|sắp xếp|bậc thang/i,
    /vận tốc|chuyển động|đuổi nhau|ngược chiều|cùng chiều|ca-nô|đoàn tàu/i,
    /diện tích|chu vi|thể tích|hình thang|tam giác|cắt ghép/i,
    /công việc chung|vòi nước|nồng độ|dung dịch/i,
    /đánh số trang|trồng cây|gà và (?:chó|thỏ)|chân/i
  ];

  const TIER_RUBRIC = Object.freeze({
    kha: Object.freeze({ label: 'Khá', minimumScore: 1, description: 'Thực hành kiến thức nền hoặc vận dụng ngắn, không đánh giá khó bằng độ dài lời giải.' }),
    gioi: Object.freeze({ label: 'Giỏi', minimumScore: 2, description: 'Có từ hai bước hoặc dữ kiện cần suy ra.' }),
    hsg: Object.freeze({ label: 'HSG', minimumScore: 3, description: 'Có chiến lược, quy luật, suy luận ngược, nhiều ràng buộc hoặc kiến thức tổng hợp theo độ tuổi.' })
  });

  function assessDifficulty(question) {
    const spec=window.WordProblemVerification?.specFor(question);
    return spec
      ? {score:{kha:1,gioi:2,hsg:3}[spec.tier],calculatedTier:spec.tier,basis:'reviewed-template'}
      : {score:0,calculatedTier:null,basis:'unreviewed'};
  }

  function gradeKnowledgeGuard(question, grade) {
    const prompt = stripHtml(question.text).toLowerCase();
    const numericAnswer = Number(question.answer);
    const limits = { '1': 100, '2': 1000, '3': 100000, '4': 1000000000, '5': Number.MAX_SAFE_INTEGER };
    if (!(String(grade) in limits)) return { valid: false, reason: 'Lớp không hợp lệ' };
    const givens = window.WordProblemVerification?.numbers(question.text) || [];
    if (givens.some(n => n < 0 || n > limits[String(grade)])) return { valid: false, reason: 'Dữ kiện vượt phạm vi số của lớp' };
    if (Number(grade) <= 3 && (!Number.isInteger(numericAnswer) || givens.some(n => !Number.isInteger(n)))) return { valid: false, reason: 'Chưa dùng số thập phân tại lớp này' };
    if (Number.isFinite(numericAnswer) && numericAnswer > limits[String(grade)]) {
      return { valid: false, reason: `Đáp án vượt phạm vi số lớp ${grade}` };
    }
    if (String(grade) === '1' && (/[×÷%]|phân số|phần trăm|số thập phân|vận tốc/.test(prompt) || /[×÷]|\d\s*[:/]\s*\d/.test([question.sol1,question.sol2,question.hint1,question.hint2,question.hint3].map(stripHtml).join(' ')))) {
      return { valid: false, reason: 'Kiến thức vượt phạm vi lớp 1' };
    }
    if (String(grade) === '2' && /%|phân số|số thập phân|vận tốc|diện tích/.test(prompt)) {
      return { valid: false, reason: 'Kiến thức vượt phạm vi lớp 2' };
    }
    if (String(grade) === '3' && /%|số thập phân|vận tốc|thể tích hình hộp/.test(prompt)) {
      return { valid: false, reason: 'Kiến thức vượt phạm vi lớp 3' };
    }
    return { valid: true, reason: '' };
  }

  function validateQuestion(question, options = {}) {
    if(!question || typeof question!=='object')return {valid:false,errors:['Câu hỏi không hợp lệ']};
    const errors = [];
    const requiredTextFields = ['archetype', 'domain', 'text', 'answerText', 'sol1'];
    requiredTextFields.forEach(field => {
      if (!String(question?.[field] || '').trim()) errors.push(`Thiếu ${field}`);
    });
    const answer = Number(question?.answer);
    if (!Number.isFinite(answer)) errors.push('Đáp án không phải số hữu hạn');
    if (answer < 0) errors.push('Đáp án âm');

    const serialized = JSON.stringify(question || {});
    if (/\b(?:NaN|undefined|Infinity)\b/.test(serialized)) errors.push('Câu chứa giá trị không hợp lệ');

    const answerFromText = parseSimpleNumber(question?.answerText);
    if (!Number.isFinite(answerFromText) || !closeEnough(answerFromText, answer, Number(question?.tolerance) || 0.005)) {
      errors.push('Đáp án số và đáp án trình bày không khớp');
    }

    const equations = auditEquations(question);
    const invalidEquations = equations.filter(check => !check.valid);
    if (invalidEquations.length) errors.push('Phép tính trong lời giải hoặc gợi ý bị sai');
    const equationMatchesAnswer = equations.some(check => closeEnough(check.calculated, answer, Number(question?.tolerance) || 0.005));
    const solutionText = stripHtml(question?.sol1);
    const finalAnswerPart = solutionText.match(/đáp số\s*:\s*([^|]+)/i);
    const answerFromSolution = finalAnswerPart ? parseSimpleNumber(finalAnswerPart[1]) : NaN;
    const solutionMatches = Number.isFinite(answerFromSolution) && closeEnough(answerFromSolution, answer, Number(question?.tolerance) || 0.005);
    const independent = window.WordProblemVerification?.verify(question, options.grade || question.grade);
    if (!independent?.valid) errors.push(independent?.reason || 'Thiếu bộ kiểm chứng dữ kiện');
    if (!solutionMatches) errors.push('Đáp số cuối lời giải không khớp');

    const expectedTier = String(options.expectedTier || question?.tier || '');
    const rubric = TIER_RUBRIC[expectedTier];
    const difficulty = assessDifficulty(question || {});
    if (!rubric) errors.push('Mức độ không hợp lệ');
    else if (difficulty.score < rubric.minimumScore) errors.push(`Chưa đạt tiêu chí mức ${rubric.label}`);
    else if (difficulty.calculatedTier !== expectedTier) errors.push('Mức độ không khớp khuôn đã rà soát');

    const gradeCheck = gradeKnowledgeGuard(question || {}, String(options.grade || ''));
    if (!gradeCheck.valid) errors.push(gradeCheck.reason);

    return {
      valid: errors.length === 0,
      errors,
      answerChecks: {
        independentGivens: Boolean(independent?.valid),
        numeric: answer,
        answerText: answerFromText,
        solutionAnswer: answerFromSolution,
        equationCount: equations.length,
        equationMatchesAnswer,
        invalidEquationCount: invalidEquations.length,
        invalidEquations
      },
      difficulty
    };
  }

  window.WordProblemQuality = Object.freeze({
    TIER_RUBRIC,
    assessDifficulty,
    validateQuestion,
    calculateExpression
  });
})();
