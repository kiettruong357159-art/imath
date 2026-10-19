(() => {
  'use strict';

  const TOTAL = 15;
  const body = document.body;
  const grade = Number(body.dataset.grade || 1);
  const $ = id => document.getElementById(id);
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = values => values[random(0, values.length - 1)];
  const shuffle = values => {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = random(0, i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const ICONS = {
    sparkles: '<path d="M12 3l1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z"/><path d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 13l.7 1.8 1.8.7-1.8.7L19 18l-.7-1.8-1.8-.7 1.8-.7L19 13Z"/>',
    book: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 4H11v15H7.5A3.5 3.5 0 0 0 4 20.5v-15Z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 4H13v15h3.5a3.5 3.5 0 0 1 3.5 1.5v-15Z"/>',
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6-4.4-4.3 6.1-.9L12 3Z"/>',
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5v1a4 4 0 0 0 4 4M16 6h3v1a4 4 0 0 1-4 4M12 12v5M8 20h8M9 17h6"/>',
    refresh: '<path d="M20 7v5h-5"/><path d="M19 12a7 7 0 1 1-2-5l3 3"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
    printer: '<path d="M7 8V4h10v4M7 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v6H7z"/>',
    shield: '<path d="M12 3 5 6v5c0 4.6 2.9 7.8 7 10 4.1-2.2 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/>',
    chart: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>',
    undo: '<path d="M9 7 4 12l5 5"/><path d="M5 12h8a6 6 0 0 1 6 6"/>',
    backpack: '<path d="M7 8V6a5 5 0 0 1 10 0v2"/><rect x="5" y="7" width="14" height="14" rx="4"/><path d="M8 12h8v5H8zM5 11H3v6h2M19 11h2v6h-2"/>',
    bike: '<circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="m6 17 4-7 4 7H6Zm4-7h5l3 7M8 7h4M15 7h3"/>',
    rocket: '<path d="M14 4c3-1 5-1 6-1 0 1 0 3-1 6l-6 6-4-4 5-7Z"/><path d="m9 11-4 1-2 3 6 1M13 15l-1 4-3 2-1-6M15 8h.01"/><path d="m6 18-3 3"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m14 10 6-6M17 4h3v3"/>'
  };
  const uiIcon = (name, className = '') => `<svg class="ui-icon ${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.sparkles}</svg>`;
  const setButtonIcon = (id, icon, label) => {
    const button = $(id);
    if (button) button.innerHTML = `${uiIcon(icon)}<span>${escapeHTML(label)}</span>`;
  };
  const formatNumber = value => {
    const parts = String(value).replace('.', ',').split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join(',');
  };
  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) [a, b] = [b, a % b];
    return a || 1;
  };
  const fraction = (n, d) => {
    const divisor = gcd(n, d);
    return `${n / divisor}/${d / divisor}`;
  };
  const fractionDisplay = value => {
    const [n, d] = String(value).split('/').map(Number);
    return d === 1 ? formatNumber(n) : `${formatNumber(n)}/${formatNumber(d)}`;
  };
  const storageKey = `imath-grade-practice-used-v3-${grade}`;
  const state = { questions: [], topic: 'mixed', difficulty: 'kha', started: false, graded: false, used: new Set() };

  const DIFFICULTIES = {
    kha: { label: 'Luyện thêm 1', icon: 'star', description: 'Ôn và vận dụng kiến thức theo chương trình.', minScore: 3, maxScore: 7 },
    'nang-cao': { label: 'Luyện thêm 2', icon: 'trophy', description: 'Thay đổi dạng bài để con luyện tập thêm.', minScore: 6, maxScore: 10 }
  };

  const CONFIG = {
    1: {
      icon: 'backpack', name: 'Toán lớp 1', subtitle: 'Khởi đầu vững vàng với số học, phép tính và hình học gần gũi.',
      topics: [
        ['mixed', 'Tổng hợp'], ['arithmetic', 'Cộng trừ 10–100'], ['mental', 'Tính nhẩm & so sánh'],
        ['numberline', 'Tia số'], ['time', 'Xem giờ'], ['geometry', 'Hình cơ bản'], ['word', 'Toán lời văn']
      ]
    },
    2: {
      icon: 'bike', name: 'Toán lớp 2', subtitle: 'Tăng tốc kỹ năng tính toán và giải toán một bước.',
      topics: [
        ['mixed', 'Tổng hợp'], ['arithmetic', 'Cộng trừ có nhớ'], ['mental', 'Tính nhẩm & nhân chia'],
        ['measure', 'Độ dài'], ['time', 'Giờ & ngày tháng'], ['geometry', 'Đường gấp khúc & hình'], ['word', 'Toán lời văn']
      ]
    },
    3: {
      icon: 'rocket', name: 'Toán lớp 3', subtitle: 'Nắm chắc nhân chia, đại lượng và tư duy nhiều bước.',
      topics: [
        ['mixed', 'Tổng hợp'], ['multiply', 'Nhân chia'], ['unknown', 'Tìm thành phần'],
        ['time', 'Thời gian'], ['geometry', 'Chu vi & diện tích'], ['word', 'Toán nhiều bước']
      ]
    },
    4: {
      icon: 'trophy', name: 'Toán lớp 4', subtitle: 'Bứt phá với biểu thức, phân số, hình học và bài toán điển hình.',
      topics: [
        ['mixed', 'Tổng hợp'], ['arithmetic', 'Bốn phép tính'], ['fractions', 'Phân số'],
        ['measure', 'Đổi đơn vị'], ['geometry', 'Góc & hình học'], ['word', 'Toán điển hình']
      ]
    },
    5: {
      icon: 'target', name: 'Toán lớp 5', subtitle: 'Hoàn thiện nền tảng với số thập phân, phần trăm, thể tích và chuyển động.',
      topics: [
        ['mixed', 'Tổng hợp'], ['decimals', 'Số thập phân'], ['fractions', 'Phân số'],
        ['percent', 'Tỉ số phần trăm'], ['measure', 'Đại lượng'], ['geometry', 'Diện tích & thể tích'], ['motion', 'Chuyển động đều']
      ]
    }
  };

  function readUsed() {
    try { return new Set(JSON.parse(sessionStorage.getItem(storageKey) || '[]')); }
    catch (error) { return new Set(); }
  }
  function saveUsed() {
    try { sessionStorage.setItem(storageKey, JSON.stringify([...state.used].slice(-3000))); }
    catch (error) { /* Storage is optional. */ }
  }

  function numberQuestion(text, answer, suffix = '') {
    return { text, answer: Number(answer), answerText: `${formatNumber(answer)}${suffix}`, kind: 'number', suffix };
  }
  function choiceQuestion(text, answer, choices) {
    return { text, answer: String(answer), answerText: String(answer), kind: 'choice', choices: shuffle([...new Set(choices.map(String))]) };
  }
  function fractionQuestion(text, numerator, denominator) {
    const answer = fraction(numerator, denominator);
    return { text, answer, answerText: fractionDisplay(answer), kind: 'fraction' };
  }
  function timeQuestion(text, hour, minute, visual = '') {
    const total = hour * 60 + minute;
    return { text, answer: total, answerText: minute ? `${hour} giờ ${minute} phút` : `${hour} giờ`, kind: 'time', visual };
  }
  function finalizeQuestion(question, topic) {
    question.topic = topic;
    question.key = `${question.templateId || ''}|${question.difficulty}|${topic}|${question.text}|${question.answer}|${question.visual || ''}`;
    return question;
  }

  function clockSVG(hour, minute) {
    const hourAngle = (hour % 12) * 30 + minute * .5;
    const minuteAngle = minute * 6;
    const hand = (angle, length) => {
      const radians = (angle - 90) * Math.PI / 180;
      return [60 + Math.cos(radians) * length, 60 + Math.sin(radians) * length];
    };
    const [hx, hy] = hand(hourAngle, 27);
    const [mx, my] = hand(minuteAngle, 39);
    const ticks = Array.from({ length: 60 }, (_, index) => {
      const angle = index * 6 * Math.PI / 180;
      const inner = index % 5 === 0 ? 48 : 51;
      const outer = 54;
      const x1 = 60 + Math.sin(angle) * inner;
      const y1 = 60 - Math.cos(angle) * inner;
      const x2 = 60 + Math.sin(angle) * outer;
      const y2 = 60 - Math.cos(angle) * outer;
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${index % 5 === 0 ? '#284760' : '#9fb6c5'}" stroke-width="${index % 5 === 0 ? 2 : 1}"/>`;
    }).join('');
    const numbers = Array.from({ length: 12 }, (_, index) => {
      const value = index + 1;
      const angle = value * 30 * Math.PI / 180;
      const x = 60 + Math.sin(angle) * 41;
      const y = 60 - Math.cos(angle) * 41 + 3;
      return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" font-size="8" font-weight="800" fill="#173b5d">${value}</text>`;
    }).join('');
    return `<svg class="clock-svg" viewBox="0 0 120 120" role="img" aria-label="Đồng hồ kim"><circle cx="60" cy="60" r="57" fill="#fff" stroke="#58a8dd" stroke-width="3"/>${ticks}${numbers}<line x1="60" y1="60" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#ef6b3a" stroke-width="6" stroke-linecap="round"/><line x1="60" y1="60" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#1477c7" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#173b5d"/></svg>`;
  }

  function svgShell(content, label) {
    return '<svg class="geometry-svg" viewBox="0 0 280 170" role="img" aria-label="' + escapeHTML(label) + '">' +
      '<rect x="1" y="1" width="278" height="168" rx="18" fill="#f8fcff" stroke="#cbe1ef" stroke-width="2"/>' +
      content + '</svg>';
  }

  function shapeCountSVG(counts) {
    const shapes = [];
    Object.entries(counts).forEach(([kind, count]) => {
      for (let index = 0; index < count; index++) shapes.push(kind);
    });
    return svgShell(shuffle(shapes).map((kind, index) => {
      const column = index % 6, row = Math.floor(index / 6);
      const x = 28 + column * 43, y = 34 + row * 58;
      if (kind === 'triangle') return '<polygon points="' + x + ',' + (y - 17) + ' ' + (x - 18) + ',' + (y + 16) + ' ' + (x + 18) + ',' + (y + 16) + '" fill="#ffd45a" stroke="#d68a00" stroke-width="3"/>';
      if (kind === 'square') return '<rect x="' + (x - 17) + '" y="' + (y - 17) + '" width="34" height="34" rx="3" fill="#72d78b" stroke="#168449" stroke-width="3"/>';
      return '<circle cx="' + x + '" cy="' + y + '" r="17" fill="#79c7ff" stroke="#2477b9" stroke-width="3"/>';
    }).join(''), 'Các hình học nhiều màu để học sinh quan sát và đếm');
  }

  function rectangleSVG(length, width, hideWidth = false, hideLength = false) {
    const numericLength = Number(length);
    const numericWidth = Number(width);
    const ratio = Number.isFinite(numericLength) && Number.isFinite(numericWidth) && numericWidth > 0
      ? Math.max(1.15, Math.min(2.4, numericLength / numericWidth))
      : 1.6;
    const drawingWidth = 150, drawingHeight = Math.round(drawingWidth / ratio);
    const x = 65, y = Math.round((150 - drawingHeight) / 2);
    const lengthLabel = hideLength ? '?' : formatNumber(length);
    const widthLabel = hideWidth ? '?' : formatNumber(width);
    return svgShell(
      '<rect x="' + x + '" y="' + y + '" width="' + drawingWidth + '" height="' + drawingHeight + '" rx="4" fill="#e4f4ff" stroke="#176db1" stroke-width="4"/>' +
      '<text x="140" y="' + (y - 10) + '" text-anchor="middle">' + lengthLabel + ' cm</text>' +
      '<text x="' + (x + drawingWidth + 14) + '" y="' + (y + drawingHeight / 2) + '" dominant-baseline="middle">' + widthLabel + ' cm</text>',
      'Hình chữ nhật có chiều dài ' + lengthLabel + ' cm và chiều rộng ' + widthLabel + ' cm'
    );
  }

  function polylineSVG(lengths, hiddenIndex = -1) {
    const points = [[28, 125], [82, 55], [145, 112], [215, 42], [255, 116]];
    const path = points.slice(0, lengths.length + 1).map(point => point.join(',')).join(' ');
    const labels = lengths.map((value, index) => {
      const a = points[index], b = points[index + 1];
      return '<text x="' + ((a[0] + b[0]) / 2) + '" y="' + (((a[1] + b[1]) / 2) - 8) + '" text-anchor="middle">' + (index === hiddenIndex ? '?' : value) + ' cm</text>';
    }).join('');
    const dots = points.slice(0, lengths.length + 1).map(point => '<circle cx="' + point[0] + '" cy="' + point[1] + '" r="5" fill="#f28a13"/>').join('');
    return svgShell('<polyline points="' + path + '" fill="none" stroke="#176db1" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' + dots + labels, 'Đường gấp khúc có các đoạn được ghi số đo');
  }

  function angleSVG(angle) {
    const radians = angle * Math.PI / 180;
    const x = 125 + Math.cos(radians) * 82, y = 125 - Math.sin(radians) * 82;
    const arcX = 125 + Math.cos(radians) * 32, arcY = 125 - Math.sin(radians) * 32;
    return svgShell(
      '<line x1="125" y1="125" x2="235" y2="125" stroke="#176db1" stroke-width="5" stroke-linecap="round"/>' +
      '<line x1="125" y1="125" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#f28a13" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M157 125 A32 32 0 0 0 ' + arcX.toFixed(1) + ' ' + arcY.toFixed(1) + '" fill="none" stroke="#9250e8" stroke-width="3"/>' +
      '<circle cx="125" cy="125" r="6" fill="#12376d"/><text x="150" y="104">' + angle + '°</text>',
      'Góc có số đo ' + angle + ' độ'
    );
  }

  function lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight) {
    const x = 45, y = 24, width = 180, height = 124;
    const cutX = x + width * (outerWidth - cutWidth) / outerWidth;
    const cutY = y + height * cutHeight / outerHeight;
    const path = 'M' + x + ' ' + y + ' H' + (x + width) + ' V' + cutY + ' H' + cutX + ' V' + (y + height) + ' H' + x + ' Z';
    return svgShell(
      '<path d="' + path + '" fill="#e8f7ec" stroke="#188452" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M' + cutX + ' ' + cutY + ' H' + (x + width) + ' V' + (y + height) + '" fill="none" stroke="#e75151" stroke-width="3" stroke-dasharray="6 5"/>' +
      '<text x="' + (x + width / 2) + '" y="18" text-anchor="middle">' + outerWidth + ' cm</text>' +
      '<text x="22" y="' + (y + height / 2) + '" text-anchor="middle">' + outerHeight + ' cm</text>' +
      '<text x="' + ((cutX + x + width) / 2) + '" y="' + (cutY - 8) + '" text-anchor="middle">' + cutWidth + ' cm</text>' +
      '<text x="' + (x + width + 16) + '" y="' + ((cutY + y + height) / 2) + '">' + (outerHeight - cutHeight) + ' cm</text>',
      'Hình chữ L tạo từ hình chữ nhật lớn bỏ đi một hình chữ nhật nhỏ'
    );
  }

  function triangleSVG(base, height) {
    return svgShell(
      '<polygon points="45,140 235,140 125,30" fill="#fff1d8" stroke="#e17a0b" stroke-width="4"/>' +
      '<line x1="125" y1="30" x2="125" y2="140" stroke="#2477b9" stroke-width="3" stroke-dasharray="6 5"/>' +
      '<rect x="125" y="127" width="13" height="13" fill="none" stroke="#2477b9" stroke-width="2"/>' +
      '<text x="140" y="160" text-anchor="middle">' + base + ' cm</text><text x="139" y="86">' + height + ' cm</text>',
      'Hình tam giác có đáy ' + base + ' cm và chiều cao ' + height + ' cm'
    );
  }

  function boxSVG(length, width, height) {
    return svgShell(
      '<polygon points="55,62 172,62 222,32 105,32" fill="#e5f7ff" stroke="#1973b5" stroke-width="3"/>' +
      '<polygon points="172,62 222,32 222,113 172,145" fill="#c9ebff" stroke="#1973b5" stroke-width="3"/>' +
      '<rect x="55" y="62" width="117" height="83" fill="#eefaff" stroke="#1973b5" stroke-width="3"/>' +
      '<text x="113" y="160" text-anchor="middle">' + length + ' cm</text><text x="203" y="137">' + width + ' cm</text><text x="38" y="105">' + height + ' cm</text>',
      'Hình hộp chữ nhật có ba kích thước ' + length + ', ' + width + ' và ' + height + ' cm'
    );
  }

  function withDifficulty(question, level, metrics, solution) {
    const details = Object.assign({ steps: 2, concepts: 1, hidden: 0, cases: 0, visual: question.visual ? 1 : 0 }, metrics || {});
    const score = details.steps * 2 + Math.max(0, details.concepts - 1) + details.hidden + details.cases + details.visual;
    const range = DIFFICULTIES[level];
    question.difficulty = level;
    question.difficultyLabel = range.label;
    question.difficultyScore = score;
    question.steps = details.steps;
    question.solution = solution || 'Thực hiện lần lượt các phép tính theo dữ kiện của đề bài.';
    question.validDifficulty = score >= range.minScore && score <= range.maxScore;
    return question;
  }

  function geometryChallenge(currentGrade, level) {
    const advanced = level === 'nang-cao';
    if (currentGrade === 1) {
      const triangles = random(2, 5), squares = random(2, 5), circles = random(1, 4);
      const question = advanced
        ? numberQuestion('Không tính hình tròn, trong hình có tất cả bao nhiêu hình?', triangles + squares)
        : numberQuestion('Trong hình có bao nhiêu hình tam giác?', triangles);
      question.visual = shapeCountSVG({ triangle: triangles, square: squares, circle: circles });
      return withDifficulty(question, level, advanced ? { steps: 2, concepts: 2, hidden: 1 } : { steps: 1, concepts: 1 }, advanced
        ? 'Đếm số hình tam giác, đếm số hình vuông rồi cộng hai kết quả.'
        : 'Quan sát lần lượt từ trái sang phải và đếm các hình tam giác.');
    }
    if (currentGrade === 2) {
      const lengths = [random(3, 12), random(3, 12), random(3, 12), random(3, 12)];
      if (advanced) {
        const hidden = random(0, 3), total = lengths.reduce((sum, value) => sum + value, 0);
        const question = numberQuestion('Đường gấp khúc dài ' + total + ' cm. Đoạn chưa biết dài bao nhiêu xăng-ti-mét?', lengths[hidden]);
        question.visual = polylineSVG(lengths, hidden);
        return withDifficulty(question, level, { steps: 3, concepts: 2, hidden: 1 }, 'Cộng ba đoạn đã biết rồi lấy tổng độ dài trừ đi kết quả đó.');
      }
      const question = numberQuestion('Đường gấp khúc trong hình dài bao nhiêu xăng-ti-mét?', lengths.reduce((sum, value) => sum + value, 0));
      question.visual = polylineSVG(lengths);
      return withDifficulty(question, level, { steps: 2, concepts: 1 }, 'Cộng độ dài của bốn đoạn thẳng.');
    }
    if (currentGrade === 3) {
      const length = random(6, 20), width = random(3, length - 1);
      if (advanced) {
        const perimeter = (length + width) * 2;
        const question = numberQuestion('Hình chữ nhật có chu vi ' + perimeter + ' cm. Chiều rộng chưa biết là bao nhiêu xăng-ti-mét?', width);
        question.visual = rectangleSVG(length, width, true);
        return withDifficulty(question, level, { steps: 3, concepts: 2, hidden: 1 }, 'Tính nửa chu vi, sau đó lấy nửa chu vi trừ chiều dài.');
      }
      const areaMode = Math.random() < .5;
      const question = numberQuestion(areaMode ? 'Tính diện tích hình chữ nhật.' : 'Tính chu vi hình chữ nhật.', areaMode ? length * width : (length + width) * 2);
      question.visual = rectangleSVG(length, width);
      return withDifficulty(question, level, { steps: areaMode ? 1 : 2, concepts: 1 }, areaMode ? 'Lấy chiều dài nhân chiều rộng.' : 'Cộng chiều dài với chiều rộng rồi nhân 2.');
    }
    if (currentGrade === 4) {
      if (!advanced && Math.random() < .45) {
        const angle = pick([35, 50, 90, 115, 140]);
        const answer = angle < 90 ? 'Góc nhọn' : angle === 90 ? 'Góc vuông' : 'Góc tù';
        const question = choiceQuestion('Góc trong hình thuộc loại nào?', answer, ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt']);
        question.visual = angleSVG(angle);
        return withDifficulty(question, level, { steps: 1, concepts: 1 }, 'So sánh số đo góc với 90°.');
      }
      const outerWidth = random(10, 18), outerHeight = random(8, 14), cutWidth = random(3, outerWidth - 4), cutHeight = random(2, outerHeight - 3);
      const area = outerWidth * outerHeight - cutWidth * (outerHeight - cutHeight);
      const question = numberQuestion('Tính diện tích phần được tô màu của hình chữ L.', area);
      question.visual = lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight);
      return withDifficulty(question, level, advanced ? { steps: 3, concepts: 2, hidden: 1 } : { steps: 2, concepts: 1 }, 'Tính diện tích hình chữ nhật lớn rồi trừ diện tích phần hình chữ nhật bị khuyết.');
    }
    if (!advanced && Math.random() < .5) {
      const base = random(4, 20) * 2, height = random(3, 16);
      const question = numberQuestion('Tính diện tích hình tam giác trong hình.', base * height / 2);
      question.visual = triangleSVG(base, height);
      return withDifficulty(question, level, { steps: 2, concepts: 1 }, 'Lấy đáy nhân chiều cao rồi chia 2.');
    }
    if (advanced && Math.random() < .5) {
      const outerWidth = random(12, 24), outerHeight = random(9, 18), cutWidth = random(3, outerWidth - 5), cutHeight = random(3, outerHeight - 4);
      const area = outerWidth * outerHeight - cutWidth * (outerHeight - cutHeight);
      const question = numberQuestion('Tính diện tích hình ghép sau khi bỏ phần nét đứt.', area);
      question.visual = lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight);
      return withDifficulty(question, level, { steps: 3, concepts: 2, hidden: 1 }, 'Tính diện tích hình chữ nhật bao ngoài rồi trừ diện tích phần bị cắt.');
    }
    const length = random(5, 14), width = random(3, 10), height = random(2, 8);
    const question = numberQuestion('Tính thể tích hình hộp chữ nhật trong hình.', length * width * height);
    question.visual = boxSVG(length, width, height);
    return withDifficulty(question, level, advanced ? { steps: 3, concepts: 2 } : { steps: 2, concepts: 1 }, 'Nhân chiều dài, chiều rộng và chiều cao.');
  }

  function grade1(topic) {
    if (topic === 'arithmetic') {
      const limit = Math.random() < .45 ? 20 : 100;
      const add = Math.random() < .5;
      let a = random(0, limit), b = random(0, limit);
      if (add) b = random(0, limit - a); else if (b > a) [a, b] = [b, a];
      return numberQuestion(`${a} ${add ? '+' : '−'} ${b} = ?`, add ? a + b : a - b);
    }
    if (topic === 'mental') {
      if (Math.random() < .55) {
        const a = random(0, 100), b = random(0, 100);
        return choiceQuestion(`Điền dấu thích hợp: ${a} … ${b}`, a > b ? '>' : a < b ? '<' : '=', ['>', '<', '=']);
      }
      const tens = random(1, 9) * 10, units = random(0, 9);
      return numberQuestion(`${tens} + ${units} = ?`, tens + units);
    }
    if (topic === 'numberline') {
      const step = pick([1, 2, 5]);
      const start = random(0, 50);
      const missing = random(1, 3);
      const values = Array.from({ length: 5 }, (_, index) => start + index * step);
      const answer = values[missing];
      const shown = values.map((value, index) => index === missing ? '□' : value).join(' — ');
      return numberQuestion(`Số còn thiếu trên tia số: ${shown}`, answer);
    }
    if (topic === 'time') {
      const hour = random(1, 12), minute = pick([0, 30]);
      return timeQuestion('Đồng hồ chỉ mấy giờ?', hour, minute, clockSVG(hour, minute));
    }
    if (topic === 'geometry') {
      if (Math.random() < .6) {
        const triangles = random(1, 9);
        const circles = random(1, 9);
        return numberQuestion(`Có ${triangles} hình tam giác và ${circles} hình tròn. Có tất cả bao nhiêu hình?`, triangles + circles);
      }
      const items = [
        ['Hình nào có 3 cạnh?', 'Hình tam giác', ['Hình tam giác', 'Hình vuông', 'Hình tròn', 'Hình chữ nhật']],
        ['Hình nào không có cạnh?', 'Hình tròn', ['Hình tròn', 'Hình tam giác', 'Hình vuông', 'Hình chữ nhật']],
        ['Hình nào có 4 cạnh bằng nhau?', 'Hình vuông', ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Đoạn thẳng']],
        ['Khối nào lăn được?', 'Khối cầu', ['Khối cầu', 'Khối lập phương', 'Khối hộp chữ nhật', 'Hình vuông']]
      ];
      const item = pick(items);
      return choiceQuestion(item[0], item[1], item[2]);
    }
    const a = random(5, 30), add = Math.random() < .5, b = add ? random(1, 20) : random(1, a);
    const names = pick(['Lan', 'Nam', 'Mai', 'Minh']);
    return numberQuestion(add
      ? `${names} có ${a} viên bi, được cho thêm ${b} viên. ${names} có tất cả bao nhiêu viên bi?`
      : `${names} có ${a} chiếc kẹo, cho bạn ${b} chiếc. ${names} còn lại bao nhiêu chiếc?`, add ? a + b : a - b);
  }

  function grade2(topic) {
    if (topic === 'arithmetic') {
      const add = Math.random() < .5;
      let a = random(20, 999), b = random(10, 499);
      if (!add && b > a) [a, b] = [b, a];
      return numberQuestion(`${formatNumber(a)} ${add ? '+' : '−'} ${formatNumber(b)} = ?`, add ? a + b : a - b);
    }
    if (topic === 'mental') {
      if (Math.random() < .55) {
        const factor = pick([2, 5]), other = random(1, 10);
        return numberQuestion(`${factor} × ${other} = ?`, factor * other);
      }
      const a = random(1, 9) * 10, b = random(1, 9) * 10;
      return numberQuestion(`${a} + ${b} = ?`, a + b);
    }
    if (topic === 'measure') {
      const type = random(0, 2);
      if (type === 0) { const m = random(1, 20); return numberQuestion(`${m} m = … cm`, m * 100); }
      if (type === 1) { const dm = random(1, 50); return numberQuestion(`${dm} dm = … cm`, dm * 10); }
      const cm = random(1, 30) * 10;
      return numberQuestion(`${cm} cm = … dm`, cm / 10);
    }
    if (topic === 'time') {
      if (Math.random() < .7) {
        const hour = random(1, 12), minute = pick([0, 15, 30, 45]);
        return timeQuestion('Đồng hồ chỉ mấy giờ?', hour, minute, clockSVG(hour, minute));
      }
      const days = ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'];
      const index = random(0, 5);
      return choiceQuestion(`Hôm nay là ${days[index]}, ngày mai là ngày nào?`, days[index + 1], days);
    }
    const a = random(30, 250), add = Math.random() < .5, b = add ? random(10, 200) : random(5, a);
    return numberQuestion(add
      ? `Thư viện có ${a} quyển truyện, nhận thêm ${b} quyển. Thư viện có tất cả bao nhiêu quyển?`
      : `Cửa hàng có ${a} quả bóng, đã bán ${b} quả. Cửa hàng còn lại bao nhiêu quả?`, add ? a + b : a - b);
  }

  function grade3(topic) {
    if (topic === 'multiply') {
      const divide = Math.random() < .45;
      const a = random(2, 10), b = random(2, 10);
      return divide ? numberQuestion(`${a * b} : ${a} = ?`, b) : numberQuestion(`${a} × ${b} = ?`, a * b);
    }
    if (topic === 'unknown') {
      const form = random(0, 3), x = random(2, 100), b = random(2, 100);
      if (form === 0) return numberQuestion(`x + ${b} = ${x + b}. Tìm x.`, x);
      if (form === 1) return numberQuestion(`x − ${b} = ${x}. Tìm x.`, x + b);
      if (form === 2) return numberQuestion(`${x + b} − x = ${b}. Giá trị của x là?`, x);
      const factor = random(2, 9), result = x * factor;
      return numberQuestion(`x × ${factor} = ${result}. Tìm x.`, x);
    }
    if (topic === 'time') {
      if (Math.random() < .5) { const hours = random(1, 12); return numberQuestion(`${hours} giờ = … phút`, hours * 60); }
      const start = random(6, 17) * 60 + pick([0, 15, 30]);
      const duration = pick([30, 45, 60, 75, 90]);
      const end = start + duration;
      const sh = Math.floor(start / 60), sm = start % 60, eh = Math.floor(end / 60), em = end % 60;
      return numberQuestion(`Từ ${sh}:${String(sm).padStart(2, '0')} đến ${eh}:${String(em).padStart(2, '0')} là bao nhiêu phút?`, duration);
    }
    if (topic === 'geometry') {
      const length = random(3, 20), width = random(2, length);
      return Math.random() < .5
        ? numberQuestion(`Hình chữ nhật dài ${length} cm, rộng ${width} cm. Chu vi bằng bao nhiêu xăng-ti-mét?`, (length + width) * 2)
        : numberQuestion(`Hình chữ nhật dài ${length} cm, rộng ${width} cm. Diện tích bằng bao nhiêu xăng-ti-mét vuông?`, length * width);
    }
    const boxes = random(2, 8), each = random(3, 10), used = random(1, boxes * each - 1);
    return numberQuestion(`Có ${boxes} hộp, mỗi hộp ${each} chiếc bút. Đã dùng ${used} chiếc. Còn lại bao nhiêu chiếc bút?`, boxes * each - used);
  }

  function grade4(topic) {
    if (topic === 'arithmetic') {
      const a = random(20, 300), b = random(2, 20), c = random(2, 20);
      return Math.random() < .5
        ? numberQuestion(`${a} + ${b} × ${c} = ?`, a + b * c)
        : numberQuestion(`(${a} − ${b}) × ${c} = ?`, (a - b) * c);
    }
    if (topic === 'fractions') {
      const d = random(3, 12), a = random(1, d - 1), b = random(1, d - 1);
      if (Math.random() < .6) return fractionQuestion(`${a}/${d} + ${b}/${d} = ?`, a + b, d);
      const top = Math.max(a, b), bottom = Math.min(a, b);
      return fractionQuestion(`${top}/${d} − ${bottom}/${d} = ?`, top - bottom, d);
    }
    if (topic === 'measure') {
      const mode = random(0, 3);
      if (mode === 0) { const kg = random(1, 40); return numberQuestion(`${kg} kg = … g`, kg * 1000); }
      if (mode === 1) { const m = random(1, 60); return numberQuestion(`${m} m = … cm`, m * 100); }
      if (mode === 2) { const minutes = random(2, 10) * 60; return numberQuestion(`${minutes} phút = … giờ`, minutes / 60); }
      const century = random(2, 20);
      return numberQuestion(`${century} thế kỉ = … năm`, century * 100);
    }
    if (topic === 'geometry') {
      if (Math.random() < .35) {
        const angle = pick([[35, 'Góc nhọn'], [90, 'Góc vuông'], [120, 'Góc tù'], [180, 'Góc bẹt']]);
        return choiceQuestion(`Góc ${angle[0]}° là loại góc nào?`, angle[1], ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt']);
      }
      const side = random(4, 30);
      return Math.random() < .5
        ? numberQuestion(`Hình vuông cạnh ${side} cm có chu vi bao nhiêu xăng-ti-mét?`, side * 4)
        : numberQuestion(`Hình vuông cạnh ${side} cm có diện tích bao nhiêu xăng-ti-mét vuông?`, side * side);
    }
    const mode = random(0, 2);
    if (mode === 0) {
      const average = random(10, 100), delta = random(2, 20);
      return numberQuestion(`Trung bình cộng của ${average - delta} và ${average + delta} là bao nhiêu?`, average);
    }
    if (mode === 1) {
      const small = random(10, 80), difference = random(5, 40);
      return numberQuestion(`Hai số có tổng ${small * 2 + difference} và hiệu ${difference}. Số bé là bao nhiêu?`, small);
    }
    const packs = random(2, 9), each = random(10, 50), sold = random(5, packs * each - 1);
    return numberQuestion(`Có ${packs} thùng, mỗi thùng ${each} chai. Đã bán ${sold} chai. Còn lại bao nhiêu chai?`, packs * each - sold);
  }

  function grade5(topic) {
    if (topic === 'decimals') {
      const a = random(10, 999) / 10, b = random(10, 500) / 10, add = Math.random() < .55;
      const left = add ? a : Math.max(a, b), right = add ? b : Math.min(a, b);
      return numberQuestion(`${formatNumber(left)} ${add ? '+' : '−'} ${formatNumber(right)} = ?`, Number((add ? left + right : left - right).toFixed(1)));
    }
    if (topic === 'fractions') {
      const d1 = random(2, 10), d2 = random(2, 10), n1 = random(1, d1 - 1), n2 = random(1, d2 - 1);
      return fractionQuestion(`${n1}/${d1} + ${n2}/${d2} = ?`, n1 * d2 + n2 * d1, d1 * d2);
    }
    if (topic === 'percent') {
      const percent = pick([10, 20, 25, 50, 75]), base = random(2, 40) * 20;
      return numberQuestion(`${percent}% của ${formatNumber(base)} là bao nhiêu?`, base * percent / 100);
    }
    if (topic === 'measure') {
      const mode = random(0, 3);
      if (mode === 0) { const km = random(1, 50); return numberQuestion(`${km} km = … m`, km * 1000); }
      if (mode === 1) { const m2 = random(1, 30); return numberQuestion(`${m2} m² = … dm²`, m2 * 100); }
      if (mode === 2) { const litres = random(1, 20); return numberQuestion(`${litres} lít = … ml`, litres * 1000); }
      const hours = random(1, 8), minutes = random(1, 59);
      return numberQuestion(`${hours} giờ ${minutes} phút = … phút`, hours * 60 + minutes);
    }
    if (topic === 'geometry') {
      const mode = random(0, 2);
      if (mode === 0) {
        const base = random(4, 30) * 2, height = random(3, 20);
        return numberQuestion(`Tam giác có đáy ${base} cm, cao ${height} cm. Diện tích bằng bao nhiêu xăng-ti-mét vuông?`, base * height / 2);
      }
      if (mode === 1) {
        const length = random(3, 15), width = random(2, 10), height = random(2, 8);
        return numberQuestion(`Hộp chữ nhật dài ${length} cm, rộng ${width} cm, cao ${height} cm. Thể tích bằng bao nhiêu xăng-ti-mét khối?`, length * width * height);
      }
      const a = random(5, 25), b = random(5, 25), h = random(2, 15) * 2;
      return numberQuestion(`Hình thang có hai đáy ${a} cm và ${b} cm, chiều cao ${h} cm. Diện tích bằng bao nhiêu xăng-ti-mét vuông?`, (a + b) * h / 2);
    }
    const mode = random(0, 2), speed = pick([30, 40, 45, 50, 60]), hours = random(2, 6), distance = speed * hours;
    if (mode === 0) return numberQuestion(`Xe đi với vận tốc ${speed} km/giờ trong ${hours} giờ. Quãng đường dài bao nhiêu ki-lô-mét?`, distance);
    if (mode === 1) return numberQuestion(`Xe đi ${distance} km trong ${hours} giờ. Vận tốc là bao nhiêu km/giờ?`, speed);
    return numberQuestion(`Xe đi ${distance} km với vận tốc ${speed} km/giờ. Thời gian đi là bao nhiêu giờ?`, hours);
  }

  function challengeGrade1(topic, level) {
    const advanced = level === 'nang-cao';
    if (topic === 'geometry') return geometryChallenge(1, level);
    if (topic === 'arithmetic') {
      if (advanced) {
        const start = random(10, 60), add = random(5, 25), subtract = random(2, Math.min(start + add - 1, 20));
        const result = start + add - subtract;
        return withDifficulty(numberQuestion('Một số được cộng thêm ' + add + ', sau đó bớt ' + subtract + ' thì được ' + result + '. Số ban đầu là bao nhiêu?', start), level, { steps: 3, concepts: 2, hidden: 1 }, 'Lấy kết quả cộng lại số đã bớt, rồi trừ số đã thêm.');
      }
      const a = random(15, 60), b = random(5, 25), c = random(2, Math.min(a + b, 20));
      return withDifficulty(numberQuestion(a + ' + ' + b + ' − ' + c + ' = ?', a + b - c), level, { steps: 2, concepts: 2 }, 'Tính từ trái sang phải: cộng trước rồi trừ.');
    }
    if (topic === 'mental') {
      if (advanced) {
        const start = random(3, 15), up = random(2, 6), down = random(1, up - 1);
        const values = [start, start + up, start + up - down, start + up * 2 - down, start + up * 2 - down * 2];
        return withDifficulty(numberQuestion('Điền số tiếp theo: ' + values.join(', ') + ', …', values[4] + up), level, { steps: 3, concepts: 2 }, 'Dãy số lần lượt cộng ' + up + ' rồi trừ ' + down + '.');
      }
      const a = random(5, 35), b = random(2, 20), c = random(5, 35), d = random(2, 20);
      const left = a + b, right = c + d;
      return withDifficulty(choiceQuestion('Điền dấu: ' + a + ' + ' + b + ' … ' + c + ' + ' + d, left > right ? '>' : left < right ? '<' : '=', ['>', '<', '=']), level, { steps: 2, concepts: 2 }, 'Tính giá trị hai vế rồi so sánh.');
    }
    if (topic === 'numberline') {
      const step = random(2, 8), start = random(0, 30);
      if (advanced) {
        const end = start + step * 4;
        return withDifficulty(numberQuestion('Trên tia số có 5 vạch cách đều: ' + start + ', …, □, …, ' + end + '. Số ở ô vuông là?', start + step * 2), level, { steps: 3, concepts: 1, hidden: 1 }, 'Tìm khoảng cách giữa hai đầu, chia thành 4 bước rồi đi 2 bước từ số đầu.');
      }
      return withDifficulty(numberQuestion('Điền số còn thiếu: ' + start + ' — ' + (start + step) + ' — □ — ' + (start + step * 3), start + step * 2), level, { steps: 2, concepts: 1 }, 'Mỗi lần tăng thêm ' + step + '.');
    }
    if (topic === 'time') {
      const hour = random(1, 10), minute = pick([0, 30]), duration = advanced ? 90 : 30;
      const total = (hour * 60 + minute + duration) % 720;
      const answerHour = Math.floor(total / 60) || 12, answerMinute = total % 60;
      const question = timeQuestion('Đồng hồ đang chỉ giờ như hình. Sau ' + duration + ' phút là mấy giờ?', answerHour, answerMinute, clockSVG(hour, minute));
      return withDifficulty(question, level, advanced ? { steps: 3, concepts: 2 } : { steps: 2, concepts: 1 }, 'Cộng thêm ' + duration + ' phút vào thời điểm trên đồng hồ.');
    }
    const start = random(12, 35), add = random(4, 15), give = random(2, 12);
    if (advanced) {
      const left = start + add - give;
      return withDifficulty(numberQuestion('Lan có một số nhãn vở. Được cho thêm ' + add + ' chiếc rồi tặng bạn ' + give + ' chiếc, Lan còn ' + left + ' chiếc. Lúc đầu Lan có bao nhiêu chiếc?', start), level, { steps: 3, concepts: 2, hidden: 1 }, 'Lấy số còn lại cộng số đã tặng, rồi trừ số được cho thêm.');
    }
    return withDifficulty(numberQuestion('Lan có ' + start + ' nhãn vở, được cho thêm ' + add + ' chiếc rồi tặng bạn ' + give + ' chiếc. Lan còn bao nhiêu chiếc?', start + add - give), level, { steps: 2, concepts: 2 }, 'Cộng số được cho rồi trừ số đã tặng.');
  }

  function challengeGrade2(topic, level) {
    const advanced = level === 'nang-cao';
    if (topic === 'geometry') return geometryChallenge(2, level);
    if (topic === 'arithmetic') {
      const a = random(120, 600), b = random(40, 250), c = random(20, Math.min(a + b - 1, 180));
      if (advanced) {
        const result = a + b - c;
        return withDifficulty(numberQuestion('Một số cộng ' + b + ' rồi trừ ' + c + ' được ' + result + '. Tìm số đó.', a), level, { steps: 3, concepts: 2, hidden: 1 }, 'Làm ngược: cộng lại số đã trừ rồi trừ số đã cộng.');
      }
      return withDifficulty(numberQuestion(formatNumber(a) + ' + ' + formatNumber(b) + ' − ' + formatNumber(c) + ' = ?', a + b - c), level, { steps: 2, concepts: 2 }, 'Thực hiện phép cộng rồi phép trừ.');
    }
    if (topic === 'mental') {
      const boxes = random(3, 8), each = pick([2, 5]), extra = random(2, 15);
      if (advanced) {
        const total = boxes * each + extra, shared = pick([2, 5]);
        const adjusted = total + (shared - total % shared) % shared;
        const added = adjusted - boxes * each;
        return withDifficulty(numberQuestion('Có ' + boxes + ' nhóm, mỗi nhóm ' + each + ' bạn. Thêm ' + added + ' bạn rồi chia đều thành ' + shared + ' đội. Mỗi đội có bao nhiêu bạn?', adjusted / shared), level, { steps: 3, concepts: 3 }, 'Nhân để tìm số bạn ban đầu, cộng số bạn được thêm rồi chia đều.');
      }
      return withDifficulty(numberQuestion('Có ' + boxes + ' hộp, mỗi hộp ' + each + ' chiếc bút và thêm ' + extra + ' chiếc lẻ. Có tất cả bao nhiêu chiếc?', boxes * each + extra), level, { steps: 2, concepts: 2 }, 'Nhân số hộp với số bút mỗi hộp rồi cộng số bút lẻ.');
    }
    if (topic === 'measure') {
      const metres = random(2, 12), centimetres = random(10, 90);
      if (advanced) {
        const cut = random(20, 90);
        return withDifficulty(numberQuestion('Sợi dây dài ' + metres + ' m ' + centimetres + ' cm, cắt đi ' + cut + ' cm. Còn lại bao nhiêu xăng-ti-mét?', metres * 100 + centimetres - cut), level, { steps: 3, concepts: 2 }, 'Đổi mét ra xăng-ti-mét, cộng phần lẻ rồi trừ đoạn đã cắt.');
      }
      return withDifficulty(numberQuestion(metres + ' m ' + centimetres + ' cm = … cm', metres * 100 + centimetres), level, { steps: 2, concepts: 2 }, 'Đổi mét ra xăng-ti-mét rồi cộng thêm phần xăng-ti-mét.');
    }
    if (topic === 'time') {
      const hour = random(6, 18), minute = pick([0, 15, 30]), duration = advanced ? pick([75, 90, 105]) : pick([30, 45, 60]);
      const end = hour * 60 + minute + duration, endHour = Math.floor(end / 60), endMinute = end % 60;
      const question = timeQuestion('Bắt đầu lúc ' + hour + ':' + String(minute).padStart(2, '0') + ', kéo dài ' + duration + ' phút. Kết thúc lúc mấy giờ?', endHour, endMinute);
      return withDifficulty(question, level, advanced ? { steps: 3, concepts: 2 } : { steps: 2, concepts: 1 }, 'Đổi thời lượng thành giờ và phút rồi cộng vào thời điểm bắt đầu.');
    }
    const packs = random(3, 8), each = random(5, 15), used = random(4, 20);
    if (advanced) {
      const add = random(5, 20);
      return withDifficulty(numberQuestion('Có ' + packs + ' túi, mỗi túi ' + each + ' viên bi. Cho đi ' + used + ' viên rồi được tặng thêm ' + add + ' viên. Có tất cả bao nhiêu viên?', packs * each - used + add), level, { steps: 3, concepts: 3 }, 'Nhân để tìm tổng ban đầu, trừ số cho đi rồi cộng số được tặng.');
    }
    return withDifficulty(numberQuestion('Có ' + packs + ' túi, mỗi túi ' + each + ' viên bi. Đã dùng ' + used + ' viên. Còn lại bao nhiêu viên?', packs * each - used), level, { steps: 2, concepts: 2 }, 'Nhân để tìm tổng rồi trừ số đã dùng.');
  }

  function challengeGrade3(topic, level) {
    const advanced = level === 'nang-cao';
    if (topic === 'geometry') return geometryChallenge(3, level);
    if (topic === 'multiply') {
      const a = random(4, 12), b = random(3, 10), add = random(2, 25);
      if (advanced) {
        const divisor = pick([2, 3, 4, 5]), product = a * b;
        const extra = (divisor - product % divisor) % divisor + divisor * random(1, 3);
        return withDifficulty(numberQuestion('(' + a + ' × ' + b + ' + ' + extra + ') : ' + divisor + ' = ?', (product + extra) / divisor), level, { steps: 3, concepts: 3 }, 'Nhân trong ngoặc, cộng tiếp rồi thực hiện phép chia.');
      }
      return withDifficulty(numberQuestion(a + ' × ' + b + ' + ' + add + ' = ?', a * b + add), level, { steps: 2, concepts: 2 }, 'Thực hiện phép nhân trước rồi cộng.');
    }
    if (topic === 'unknown') {
      const x = random(5, 50), factor = random(2, 9), add = random(3, 30);
      if (advanced) {
        const subtract = random(2, 20), result = x * factor + add - subtract;
        return withDifficulty(numberQuestion('x × ' + factor + ' + ' + add + ' − ' + subtract + ' = ' + result + '. Tìm x.', x), level, { steps: 3, concepts: 3, hidden: 1 }, 'Làm ngược phép trừ, phép cộng rồi phép nhân để tìm x.');
      }
      return withDifficulty(numberQuestion('x × ' + factor + ' + ' + add + ' = ' + (x * factor + add) + '. Tìm x.', x), level, { steps: 2, concepts: 2, hidden: 0 }, 'Trừ số hạng đã cộng rồi chia cho thừa số đã biết.');
    }
    if (topic === 'time') {
      const start = random(7, 16) * 60 + pick([0, 15, 30]), first = pick([30, 45, 60]), rest = advanced ? pick([15, 30]) : 0, second = pick([30, 45, 60]);
      const total = first + rest + second, end = start + total;
      return withDifficulty(numberQuestion('Một hoạt động bắt đầu lúc ' + Math.floor(start / 60) + ':' + String(start % 60).padStart(2, '0') + ', gồm ' + first + ' phút học' + (rest ? ', nghỉ ' + rest + ' phút' : '') + ' và ' + second + ' phút luyện tập. Hoạt động kéo dài bao nhiêu phút?', total), level, advanced ? { steps: 3, concepts: 2 } : { steps: 2, concepts: 1 }, 'Cộng các khoảng thời gian; hoạt động kết thúc lúc ' + Math.floor(end / 60) + ':' + String(end % 60).padStart(2, '0') + '.');
    }
    const boxes = random(3, 9), each = random(8, 20), sold = random(5, 30);
    if (advanced) {
      const addBoxes = random(1, 4);
      return withDifficulty(numberQuestion('Có ' + boxes + ' hộp, mỗi hộp ' + each + ' quyển. Bán ' + sold + ' quyển rồi nhập thêm ' + addBoxes + ' hộp cùng loại. Có tất cả bao nhiêu quyển?', (boxes + addBoxes) * each - sold), level, { steps: 3, concepts: 3 }, 'Tính số sách ban đầu, trừ số bán và cộng số sách mới nhập.');
    }
    return withDifficulty(numberQuestion('Có ' + boxes + ' hộp, mỗi hộp ' + each + ' quyển. Bán ' + sold + ' quyển. Còn lại bao nhiêu quyển?', boxes * each - sold), level, { steps: 2, concepts: 2 }, 'Nhân để tìm tổng rồi trừ số đã bán.');
  }

  function challengeGrade4(topic, level) {
    const advanced = level === 'nang-cao';
    if (topic === 'geometry') return geometryChallenge(4, level);
    if (topic === 'arithmetic') {
      const a = random(100, 500), b = random(5, 30), c = random(3, 15), d = random(10, 80);
      if (advanced) return withDifficulty(numberQuestion('(' + a + ' + ' + b + ' × ' + c + ') − ' + d + ' = ?', a + b * c - d), level, { steps: 3, concepts: 3 }, 'Nhân trước, cộng trong ngoặc rồi trừ.');
      return withDifficulty(numberQuestion(a + ' + ' + b + ' × ' + c + ' = ?', a + b * c), level, { steps: 2, concepts: 2 }, 'Nhân trước rồi cộng.');
    }
    if (topic === 'fractions') {
      const denominator = random(5, 15), a = random(1, denominator - 2), b = random(1, denominator - a);
      if (advanced) {
        const total = denominator * random(4, 15);
        return withDifficulty(numberQuestion('Một lớp có ' + total + ' học sinh. Hai nhóm không trùng nhau: ' + a + '/' + denominator + ' số học sinh tham gia Toán và ' + b + '/' + denominator + ' tham gia Cờ vua. Cả hai nhóm có bao nhiêu học sinh?', total * (a + b) / denominator), level, { steps: 3, concepts: 3 }, 'Cộng hai phân số rồi tìm phân số đó của tổng số học sinh.');
      }
      return withDifficulty(fractionQuestion(a + '/' + denominator + ' + ' + b + '/' + denominator + ' = ?', a + b, denominator), level, { steps: 2, concepts: 1 }, 'Cộng các tử số và giữ nguyên mẫu số, sau đó rút gọn.');
    }
    if (topic === 'measure') {
      const km = random(2, 20), metres = random(100, 900), used = random(50, 500);
      if (advanced) return withDifficulty(numberQuestion(km + ' km ' + metres + ' m − ' + used + ' m = … m', km * 1000 + metres - used), level, { steps: 3, concepts: 2 }, 'Đổi ki-lô-mét ra mét, cộng phần mét rồi trừ.');
      return withDifficulty(numberQuestion(km + ' km ' + metres + ' m = … m', km * 1000 + metres), level, { steps: 2, concepts: 2 }, 'Đổi ki-lô-mét ra mét rồi cộng phần mét.');
    }
    const small = random(20, 90), difference = random(8, 50), total = small * 2 + difference;
    if (advanced) {
      const extra = random(5, 25);
      return withDifficulty(numberQuestion('Hai kho có tổng ' + total + ' thùng, kho lớn hơn kho bé ' + difference + ' thùng. Sau khi kho bé nhận thêm ' + extra + ' thùng, kho bé có bao nhiêu thùng?', small + extra), level, { steps: 3, concepts: 3, hidden: 1 }, 'Tìm số bé theo bài toán tổng–hiệu rồi cộng số nhận thêm.');
    }
    return withDifficulty(numberQuestion('Hai số có tổng ' + total + ' và hiệu ' + difference + '. Số bé là bao nhiêu?', small), level, { steps: 2, concepts: 2 }, 'Lấy tổng trừ hiệu rồi chia 2.');
  }

  function challengeGrade5(topic, level) {
    const advanced = level === 'nang-cao';
    if (topic === 'geometry') return geometryChallenge(5, level);
    if (topic === 'decimals') {
      const a = random(300, 900) / 10, b = random(20, 250) / 10, c = random(10, 150) / 10;
      if (advanced) return withDifficulty(numberQuestion(formatNumber(a) + ' + ' + formatNumber(b) + ' − ' + formatNumber(c) + ' = ?', Number((a + b - c).toFixed(1))), level, { steps: 3, concepts: 2 }, 'Đặt thẳng hàng dấu phẩy, cộng rồi trừ.');
      return withDifficulty(numberQuestion(formatNumber(a) + ' − ' + formatNumber(b) + ' + ' + formatNumber(c) + ' = ?', Number((a - b + c).toFixed(1))), level, { steps: 2, concepts: 1 }, 'Tính lần lượt từ trái sang phải.');
    }
    if (topic === 'fractions') {
      const d = random(4, 12), a = random(1, d - 2), b = random(1, d - a), c = random(1, Math.max(1, a + b - 1));
      if (advanced) return withDifficulty(fractionQuestion(a + '/' + d + ' + ' + b + '/' + d + ' − ' + c + '/' + d + ' = ?', a + b - c, d), level, { steps: 3, concepts: 2 }, 'Cộng rồi trừ các tử số, giữ nguyên mẫu và rút gọn.');
      return withDifficulty(fractionQuestion(a + '/' + d + ' + ' + b + '/' + d + ' = ?', a + b, d), level, { steps: 2, concepts: 1 }, 'Cộng tử số, giữ nguyên mẫu rồi rút gọn.');
    }
    if (topic === 'percent') {
      const percent = pick([10, 20, 25, 50]), base = random(5, 40) * 20;
      if (advanced) {
        const after = base * (100 - percent) / 100;
        return withDifficulty(numberQuestion('Một món hàng giảm ' + percent + '% còn ' + formatNumber(after) + ' nghìn đồng. Giá trước khi giảm là bao nhiêu nghìn đồng?', base), level, { steps: 3, concepts: 2, hidden: 1 }, 'Số tiền còn lại bằng ' + (100 - percent) + '% giá ban đầu; lấy giá sau giảm chia tỉ lệ còn lại.');
      }
      return withDifficulty(numberQuestion('Một món hàng giá ' + formatNumber(base) + ' nghìn đồng, giảm ' + percent + '%. Số tiền được giảm là bao nhiêu nghìn đồng?', base * percent / 100), level, { steps: 2, concepts: 2 }, 'Tìm ' + percent + '% của giá ban đầu.');
    }
    if (topic === 'measure') {
      const hours = random(1, 6), minutes = random(10, 55), extra = random(10, 50);
      if (advanced) return withDifficulty(numberQuestion(hours + ' giờ ' + minutes + ' phút + ' + extra + ' phút = … phút', hours * 60 + minutes + extra), level, { steps: 3, concepts: 2 }, 'Đổi giờ ra phút rồi cộng hai phần phút.');
      return withDifficulty(numberQuestion(hours + ' giờ ' + minutes + ' phút = … phút', hours * 60 + minutes), level, { steps: 2, concepts: 2 }, 'Đổi giờ ra phút rồi cộng số phút lẻ.');
    }
    const speed1 = pick([30, 36, 40, 45, 50]), speed2 = pick([24, 30, 36, 40]), hours = random(2, 5);
    if (advanced) return withDifficulty(numberQuestion('Hai xe khởi hành cùng lúc ngược chiều, vận tốc ' + speed1 + ' km/giờ và ' + speed2 + ' km/giờ. Sau ' + hours + ' giờ, khoảng cách hai xe tăng thêm bao nhiêu ki-lô-mét?', (speed1 + speed2) * hours), level, { steps: 3, concepts: 3 }, 'Cộng hai vận tốc rồi nhân với thời gian.');
    return withDifficulty(numberQuestion('Xe đi ' + hours + ' giờ với vận tốc ' + speed1 + ' km/giờ, sau đó đi thêm 1 giờ với vận tốc ' + speed2 + ' km/giờ. Tổng quãng đường là bao nhiêu ki-lô-mét?', speed1 * hours + speed2), level, { steps: 2, concepts: 2 }, 'Tính quãng đường từng chặng rồi cộng lại.');
  }

  function generateForTopic(topic, blueprint) {
    const bank = window.IMathDiverseBank;
    let question;
    if (bank && typeof bank.create === 'function') {
      question = bank.create({
        grade,
        topic,
        level: state.difficulty,
        family: blueprint.family,
        copy: blueprint.copy,
        utils: {
          random, pick, shuffle, formatNumber, numberQuestion, choiceQuestion, fractionQuestion, timeQuestion,
          clockSVG, shapeCountSVG, rectangleSVG, polylineSVG, angleSVG, lShapeSVG, triangleSVG, boxSVG, withDifficulty
        }
      });
    } else {
      const generators = { 1: challengeGrade1, 2: challengeGrade2, 3: challengeGrade3, 4: challengeGrade4, 5: challengeGrade5 };
      question = generators[grade](topic, state.difficulty);
    }
    return finalizeQuestion(question, topic);
  }
  function actualTopic(selected) {
    if (selected !== 'mixed') return selected;
    return pick(CONFIG[grade].topics.filter(item => item[0] !== 'mixed').map(item => item[0]));
  }

  function buildBlueprints(selected) {
    const familyCount = window.IMathDiverseBank?.familyCount || 8;
    if (selected !== 'mixed') {
      return shuffle(Array.from({ length: TOTAL }, (_, index) => ({
        topic: selected,
        family: index % familyCount,
        copy: Math.floor(index / familyCount)
      })));
    }
    const topics = shuffle(CONFIG[grade].topics.filter(item => item[0] !== 'mixed').map(item => item[0]));
    const counters = Object.fromEntries(topics.map(topic => [topic, 0]));
    return Array.from({ length: TOTAL }, (_, index) => {
      const topic = topics[index % topics.length];
      const occurrence = counters[topic]++;
      return { topic, family: (topics.indexOf(topic) * 2 + occurrence) % familyCount, copy: 0 };
    });
  }

  function generateSet() {
    const selected = $('topic-select').value;
    state.topic = selected;
    state.started = false;
    state.graded = false;
    state.questions = [];
    $('results').classList.add('hidden');
    $('answer-panel').classList.add('hidden');
    const blueprints = buildBlueprints(selected);
    blueprints.forEach(blueprint => {
      let chosen = null;
      for (let attempt = 0; attempt < 120; attempt++) {
        const question = generateForTopic(blueprint.topic || actualTopic(selected), blueprint);
        if (!question.validDifficulty || state.used.has(question.key) || state.questions.some(item => item.key === question.key)) continue;
        chosen = question;
        break;
      }
      if (!chosen) {
        state.used.clear();
        for (let attempt = 0; attempt < 120; attempt++) {
          const question = generateForTopic(blueprint.topic || actualTopic(selected), blueprint);
          if (!question.validDifficulty || state.questions.some(item => item.key === question.key)) continue;
          chosen = question;
          break;
        }
      }
      if (chosen) {
        state.questions.push(chosen);
        state.used.add(chosen.key);
      }
    });
    saveUsed();
    renderQuestions();
    const label = CONFIG[grade].topics.find(item => item[0] === selected)?.[1] || 'Tổng hợp';
    const difficulty = DIFFICULTIES[state.difficulty];
    $('sheet-title').textContent = `Đề ${label} · ${difficulty.label}`;
    $('sheet-description').innerHTML = `${uiIcon(difficulty.icon, 'ui-icon-inline')}<span>${escapeHTML(difficulty.label)}: ${escapeHTML(difficulty.description)}</span>`;
    history.replaceState(null, '', `${location.pathname}?chu-de=${encodeURIComponent(selected)}&muc-do=${encodeURIComponent(state.difficulty)}`);
  }

  function renderQuestions() {
    $('questions').innerHTML = state.questions.map((question, index) => {
      const visual = question.visual ? `<div class="q-visual">${question.visual}</div>` : '';
      const meta = `<div class="q-meta"><span class="q-level-icon">${uiIcon(DIFFICULTIES[question.difficulty].icon)}${escapeHTML(question.difficultyLabel)}</span><span>${escapeHTML(question.skillFamily || 'Vận dụng')}</span></div>`;
      const answer = question.kind === 'choice'
        ? `<div class="choice-list">${question.choices.map(choice => `<label class="choice"><input type="radio" name="q-${index}" value="${escapeHTML(choice)}"><span>${escapeHTML(choice)}</span></label>`).join('')}</div>`
        : `<input class="answer-input" id="answer-${index}" type="text" inputmode="${question.kind === 'number' ? 'decimal' : 'text'}" autocomplete="off" aria-label="Đáp án câu ${index + 1}" placeholder="Đáp án">`;
      return `<article class="question" data-index="${index}" data-level="${escapeHTML(question.difficulty)}" data-score="${question.difficultyScore}" data-steps="${question.steps}" data-template="${escapeHTML(question.templateId || '')}" data-family="${escapeHTML(question.templateFamily || question.skillFamily || '')}"><span class="q-number">${index + 1}</span><div class="q-body">${meta}${visual}<p class="q-text">${escapeHTML(question.text)}</p>${answer}<span class="feedback" aria-live="polite"></span></div></article>`;
    }).join('');
  }

  function getUserAnswer(index) {
    const question = state.questions[index];
    if (question.kind === 'choice') return document.querySelector(`input[name="q-${index}"]:checked`)?.value || '';
    return $(`answer-${index}`)?.value.trim() || '';
  }
  function parseNumber(value) {
    const match = String(value).replace(/\s+/g, '').replace(',', '.').match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : NaN;
  }
  function parseFraction(value) {
    const clean = String(value).replace(/\s+/g, '').replace(',', '.');
    if (/^-?\d+\/-?\d+$/.test(clean)) {
      const [n, d] = clean.split('/').map(Number);
      if (d) return n / d;
    }
    const numeric = Number(clean);
    return Number.isFinite(numeric) ? numeric : NaN;
  }
  function parseTime(value) {
    const clean = String(value).toLowerCase().trim().replace(/h/g, ' giờ ');
    const colon = clean.match(/(\d{1,2})\s*:\s*(\d{1,2})/);
    if (colon) return Number(colon[1]) * 60 + Number(colon[2]);
    const words = clean.match(/(\d{1,2})\s*giờ(?:\s*(\d{1,2})\s*phút)?/);
    if (words) return Number(words[1]) * 60 + Number(words[2] || 0);
    return NaN;
  }
  function isCorrect(question, value) {
    if (!value) return false;
    if (question.kind === 'choice') return value === question.answer;
    if (question.kind === 'fraction') return Math.abs(parseFraction(value) - parseFraction(question.answer)) < 1e-9;
    if (question.kind === 'time') return parseTime(value) === question.answer;
    return Math.abs(parseNumber(value) - question.answer) < 1e-9;
  }

  function checkAnswers() {
    let correct = 0;
    const details = state.questions.map((question, index) => {
      const value = getUserAnswer(index);
      const ok = isCorrect(question, value);
      if (ok) correct++;
      const card = document.querySelector(`.question[data-index="${index}"]`);
      card.classList.toggle('is-correct', ok);
      card.classList.toggle('is-wrong', !ok);
      card.querySelector('.feedback').textContent = ok ? '✓ Chính xác' : `✗ Đáp án: ${question.answerText}`;
      return { question, value: value || 'Chưa trả lời', ok };
    });
    state.graded = true;
    renderResults(correct, details);
  }

  function renderResults(correct, details) {
    const wrong = TOTAL - correct;
    const score = (correct / TOTAL * 10).toFixed(1).replace('.', ',');
    const message = correct >= 13 ? 'Xuất sắc! Con làm bài rất chắc chắn.' : correct >= 10 ? 'Rất tốt! Con hãy xem lại vài câu chưa đúng nhé.' : correct >= 8 ? 'Con đã có nền tảng tốt, cố gắng thêm một chút nữa!' : 'Không sao, mỗi lần sửa một câu là con tiến bộ thêm một bước.';
    $('results').innerHTML = `<h2 class="result-heading">${uiIcon('chart')}<span>Kết quả bài làm</span></h2><div class="result-summary"><div class="metric good"><b>${correct}/${TOTAL}</b>Đúng</div><div class="metric bad"><b>${wrong}/${TOTAL}</b>Sai</div><div class="metric score"><b>${score}</b>Điểm</div></div><p class="encouragement">${escapeHTML(message)}</p><div class="result-table-wrap"><table class="result-table"><thead><tr><th>Câu</th><th>Đề bài</th><th>Con trả lời</th><th>Đáp án</th><th>Kết quả</th></tr></thead><tbody>${details.map((detail, index) => `<tr class="${detail.ok ? '' : 'wrong'}"><td>${index + 1}</td><td>${escapeHTML(detail.question.text)}</td><td>${escapeHTML(detail.value)}</td><td>${escapeHTML(detail.question.answerText)}</td><td class="${detail.ok ? 'result-status-good' : 'result-status-bad'}">${detail.ok ? '✓ Đúng' : '✗ Sai'}</td></tr>`).join('')}</tbody></table></div><div class="sheet-actions"><button class="btn btn-outline" id="retry" type="button">${uiIcon('undo')}<span>Làm lại đề này</span></button><button class="btn btn-primary" id="new-after-result" type="button">${uiIcon('refresh')}<span>Làm đề mới</span></button></div>`;
    $('results').classList.remove('hidden');
    $('retry').addEventListener('click', retrySet);
    $('new-after-result').addEventListener('click', generateSet);
    $('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function retrySet() {
    state.graded = false;
    document.querySelectorAll('.question').forEach(card => {
      card.classList.remove('is-correct', 'is-wrong');
      card.querySelector('.feedback').textContent = '';
    });
    $('results').classList.add('hidden');
    $('questions').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function showAnswers() {
    $('answer-grid').innerHTML = state.questions.map((question, index) => `<div class="answer-item"><b>Câu ${index + 1}:</b> ${escapeHTML(question.answerText)}<small>${escapeHTML(question.solution)}</small></div>`).join('');
    $('answer-panel').classList.remove('hidden');
    $('answer-panel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function syncTopic(topic) {
    const allowed = CONFIG[grade].topics.map(item => item[0]);
    const selected = allowed.includes(topic) ? topic : 'mixed';
    $('topic-select').value = selected;
    document.querySelectorAll('[data-topic]').forEach(button => button.setAttribute('aria-selected', String(button.dataset.topic === selected)));
  }

  function syncDifficulty(level) {
    const selected = Object.prototype.hasOwnProperty.call(DIFFICULTIES, level) ? level : 'kha';
    state.difficulty = selected;
    document.querySelectorAll('[data-difficulty]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.difficulty === selected));
    });
  }

  function applyIconSystem() {
    const eyebrow = document.querySelector('.eyebrow');
    if (eyebrow) eyebrow.innerHTML = `${uiIcon('sparkles')}<span>Luyện tập đúng chương trình</span>`;
    const difficultySymbol = document.querySelector('.difficulty-symbol');
    if (difficultySymbol) difficultySymbol.innerHTML = uiIcon('book');
    const easyIcon = document.querySelector('[data-difficulty="kha"] .difficulty-icon');
    if (easyIcon) easyIcon.innerHTML = uiIcon('star');
    const advancedIcon = document.querySelector('[data-difficulty="nang-cao"] .difficulty-icon');
    if (advancedIcon) advancedIcon.innerHTML = uiIcon('trophy');
    const safeIcon = document.querySelector('.safe-note > span');
    if (safeIcon) safeIcon.innerHTML = uiIcon('shield');
    setButtonIcon('generate', 'refresh', 'Tạo đề mới');
    setButtonIcon('check', 'check', 'Kiểm tra');
    setButtonIcon('answers', 'list', 'Xem đáp án');
    setButtonIcon('print', 'printer', 'In đề');
    setButtonIcon('check-bottom', 'check', 'Kiểm tra bài làm');
    setButtonIcon('answers-bottom', 'list', 'Xem đáp án');
  }

  function initialize() {
    const config = CONFIG[grade];
    state.used = readUsed();
    applyIconSystem();
    $('grade-icon').innerHTML = uiIcon(config.icon, 'grade-icon-svg');
    $('grade-name').textContent = config.name;
    $('grade-subtitle').textContent = config.subtitle;
    $('topic-select').innerHTML = config.topics.map(([value, label]) => `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`).join('');
    $('topic-tabs').innerHTML = config.topics.map(([value, label]) => `<button type="button" data-topic="${escapeHTML(value)}" aria-selected="false">${escapeHTML(label)}</button>`).join('');
    const params = new URLSearchParams(location.search);
    syncTopic(params.get('chu-de') || 'mixed');
    syncDifficulty(params.get('muc-do') || 'kha');

    $('difficulty-options').addEventListener('click', event => {
      const button = event.target.closest('[data-difficulty]');
      if (!button || button.getAttribute('aria-pressed') === 'true') return;
      syncDifficulty(button.dataset.difficulty);
      generateSet();
    });

    $('topic-select').addEventListener('change', () => { syncTopic($('topic-select').value); generateSet(); });
    $('topic-tabs').addEventListener('click', event => {
      const button = event.target.closest('[data-topic]');
      if (!button) return;
      syncTopic(button.dataset.topic);
      generateSet();
    });
    $('generate').addEventListener('click', generateSet);
    $('check').addEventListener('click', checkAnswers);
    $('check-bottom').addEventListener('click', checkAnswers);
    $('answers').addEventListener('click', showAnswers);
    $('answers-bottom').addEventListener('click', showAnswers);
    $('print').addEventListener('click', () => window.print());
    $('questions').addEventListener('input', () => { state.started = true; });
    $('questions').addEventListener('change', () => { state.started = true; });
    window.addEventListener('beforeunload', event => {
      if (state.started && !state.graded) {
        event.preventDefault();
        event.returnValue = '';
      }
    });
    generateSet();
  }

  initialize();
})();
