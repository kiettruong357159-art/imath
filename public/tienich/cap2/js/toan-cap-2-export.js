/**
 * toan-cap-2-export.js
 * Bộ xuất file PDF (khổ in A4) và Word (.docx) chuyên dụng Toán Cấp 2
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 */

(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const COPYRIGHT = 'Bản quyền © iMath.vn';

  // Chỉ dùng cho bản in; không thay lời nhắc trả lời trên website.
  function printText(value) {
    return String(value ?? '').replace(/(^|[.;]\s*|\n)(?:[Nn]hập|Chỉ nhập|chỉ nhập|Giá trị cần nhập là|giá trị cần nhập là)\s+(?:\$[^$]*\$|[^.\n])*(?:\.|$)/g,
      (all, prefix) => prefix.trim() === ';' ? '.' : prefix)
      .replace(/\s+\./g, '.').trim();
  }

  function printSolution(value) {
    // Giữ đáp số ở câu “Giá trị cần nhập là …”, chỉ bỏ từ chỉ thao tác.
    return printText(String(value ?? '').replace(/Giá trị cần nhập là/g, 'Giá trị cần tìm là'));
  }

  function exportModel(snapshot) {
    const clc = snapshot.mode === 'clc';
    const grades = [...new Set(snapshot.activities.map(a => a.lop).filter(Boolean))];
    const grade = grades.length === 1 ? grades[0] : snapshot.grade;
    const activities = snapshot.activities.map((act, index) => ({
      ...act,
      exportKind: clc && index >= 5 ? 'chungMinh' : act.dang
    }));
    const names = { chon: 'TRẮC NGHIỆM', dien: 'ĐIỀN ĐÁP SỐ', chungMinh: clc ? 'TỰ LUẬN' : 'TRÌNH BÀY VÀ CHỨNG MINH' };
    const groups = ['chon', 'dien', 'chungMinh'].map(kind => ({ kind, title: names[kind], items: activities.filter(a => a.exportKind === kind) })).filter(g => g.items.length);
    groups.forEach((g, i) => g.heading = `PHẦN ${['I','II','III'][i]} - ${g.title}`);
    const title = clc ? 'ĐỀ LUYỆN THI VÀO LỚP 10 CLC' : `PHIẾU BÀI TẬP TOÁN LỚP ${grade}`;
    const topic = window.IMathCap2?.catalog?.[grade]?.topics.find(item => item.id === snapshot.topicId)?.title || '';
    const written = activities.filter(a => a.exportKind === 'chungMinh').length;
    return { clc, grade, activities, groups, title, topic, written,
      school: clc ? snapshot.targetSchool || '' : '',
      score: clc ? '120 phút · 5 trắc nghiệm + 5 tự luận · Trắc nghiệm: ....../2,5 điểm · Tự luận: ....../7,5 điểm (người chấm)' :
        `Điểm tự động: ....../${activities.length - written} · ${written} câu trình bày/chứng minh đánh giá riêng`,
      answerHeading: `PHẦN ${['I','II','III','IV'][groups.length]} - ĐÁP ÁN VÀ LỜI GIẢI`
    };
  }

  function formatText(value) {
    return window.IMathCap2.formatMathText(value);
  }

  function answerSpace(act) {
    if (act.exportKind === 'chon') {
      return '<div class="print-q-opts">' + act.options.map(opt =>
        '<span class="print-opt">' + formatText(opt) + '</span>').join(' ') + '</div>';
    }
    if (act.exportKind === 'dien') return '<p>Đáp số: ................................................</p>';
    return '<div style="border:1px solid #cbd5e1; padding:8px;">' +
      Array.from({ length: 5 }, () => '<div style="height:8mm; border-bottom:1px dotted #94a3b8;"></div>').join('') +
      '</div>';
  }

  function answerLabel(act) {
    const kind = act.sourceDang || act.dang;
    if (kind === 'chungMinh') return 'Xem kết luận trong lời giải dưới đây.';
    if (kind === 'dien') {
      const solution = printSolution(act.solution);
      const finalStep = solution.split(/(?:^|\n)Bước \d+:\s*/).filter(Boolean).pop() || '';
      const lines = finalStep.split(/\r?\n/).filter(Boolean);
      const conclusion = lines.length > 1 ? lines.slice(1).join(' ') : finalStep;
      // Dẫn đúng kết luận đã biên soạn, không suy đoán đơn vị từ số đáp án.
      return conclusion || String(act.correctAnswer) + ' - ' + act.title;
    }
    return choiceAnswer(act).letter;
  }

  function choiceAnswer(act) {
    // Tra trên chính thứ tự phương án của câu trong bản đề xuất.
    const letter = act.correctAnswer;
    const index = 'ABCD'.indexOf(letter);
    if (!/^[ABCD]$/.test(letter) || typeof act.options?.[index] !== 'string') {
      throw new Error(`Câu ${act.number}: đáp án trắc nghiệm không khớp phương án.`);
    }
    return { letter, content: act.options[index].replace(/^[ABCD]\.\s*/, '') };
  }

  async function preparePdfPrint() {
    const api = window.IMathCap2;
    if (!api || !api.state || !api.state.activities.length) {
      alert('Chưa có danh sách câu hỏi để xuất PDF.');
      return;
    }

    const model = exportModel(api.state);
    const { grade, activities } = model;
    const printArea = $('print-area') || createPrintArea();

    printArea.innerHTML = `
      <style>
        @media print {
          @page { size: A4; margin: 14mm 14mm 20mm;
            @bottom-center { content: '${COPYRIGHT} · Trang ' counter(page); font: 9pt Arial, sans-serif; color: #555; }
          }
          body { margin: 0 !important; padding: 0 !important; background: white !important; }
          body > :not(#print-area) { display: none !important; }
          #print-area[hidden] { display: block !important; }
          #print-area { position: static !important; width: auto !important; padding: 0 !important; color: #111; font: 11pt/1.5 Arial, sans-serif; }
          #print-area h1 { font-size: 17pt; text-align: center; margin: 0 0 4mm; }
          #print-area h2 { font-size: 13pt; margin: 7mm 0 3mm; break-after: avoid; }
          #print-area p { margin: 2mm 0; }
          #print-area .print-header { border-bottom: 1px solid #aaa; padding-bottom: 4mm; }
          #print-area .print-q-item { margin: 0 0 5mm; break-inside: avoid; }
          #print-area .print-q-title { break-after: avoid; break-inside: avoid; }
          #print-area .print-q-svg { text-align: center; break-inside: avoid; }
          #print-area .print-q-svg svg { width: 100%; height: auto; max-height: 85mm; }
          #print-area .print-q-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm 6mm; }
          #print-area .print-opt { display: block; }
          #print-area .print-solution { margin-bottom: 5mm; }
          #print-area .print-solution-start { break-inside: avoid; }
          #print-area .print-solution h3 { font-size: 11pt; margin: 3mm 0 1mm; break-after: avoid; }
          #print-area .print-solution h4 { font-size: 11pt; margin: 2mm 0 1mm; break-after: avoid; }
          #print-area .print-result { margin: 1mm 0 2mm; break-after: avoid; }
          #print-area .print-choice-content { break-after: avoid; }
          #print-area .print-question-break { height: 4mm; }
          #print-area .print-solution:last-child { margin-bottom: 0; }
          #print-area .print-solution:last-child .print-question-break { display: none; }
          #print-area .solution-step-title { font-weight: normal; break-after: avoid; break-inside: avoid; }
          #print-area .print-answer-key { break-before: page; }
          #print-area .print-copyright { display: none; }
        }
      </style>
      <div class="print-header">
        <div class="print-brand">
          <h1>${model.title}</h1>
          ${model.school ? `<p>${formatText('Ôn thi hướng tới ' + model.school)}</p><p>Đề ôn luyện do iMath biên soạn; không đại diện cho cấu trúc tuyển sinh riêng của trường.</p>` : ''}
          <p>${model.clc ? 'Kiến thức Toán lớp 9' : formatText(model.topic)} · Chương trình GDPT 2018 · iMath.vn</p>
        </div>
        <div class="print-pupil-box">
          <p>Họ và tên: .............................................................. Lớp: ................. Trường: ............................................</p>
          <p>Ngày làm bài: ....../....../..........</p><p>${model.score}</p>
        </div>
      </div>

      <div class="print-content">
        ${model.groups.map(group => `<section><h2>${group.heading}</h2>${group.items.map(act => `
          <div class="print-q-item">
            <p class="print-q-title"><strong>Câu ${act.number}${model.clc ? '' : ' (' + formatText(act.levelName || act.tang) + ')'}.</strong> ${formatText(printText(act.prompt || act.title))}</p>
            ${act.svg ? `<div class="print-q-svg">${act.svg}</div>` : ''}
            ${answerSpace(act)}
          </div>
        `).join('')}</section>`).join('')}
      </div>

      <div class="print-answer-key" style="page-break-before: always; margin-top: 2rem;">
        <h2>${model.answerHeading}</h2>
            ${activities.map(act => `
              <article class="print-solution"><h3>Câu ${act.number}.</h3>
              <p class="print-result"><strong>${(act.sourceDang || act.dang) === 'chon' ? 'Đáp án' : 'Kết quả'}: ${formatText(answerLabel(act))}</strong></p>
              ${(act.sourceDang || act.dang) === 'chon' ? `<p class="print-choice-content">Nội dung đáp án: ${formatText(choiceAnswer(act).content)}</p>` : ''}
              <h4>Lời giải</h4>
              ${window.IMathCap2.formatSolutionText(printSolution(act.solution))}
              <div class="print-question-break"></div></article>
            `).join('')}
      </div>
      <footer class="print-copyright">${COPYRIGHT}</footer>
    `;
    // Giữ đầu câu đến đoạn đầu lời giải; phần còn lại vẫn được tiếp trang.
    for (const solution of printArea.querySelectorAll('.print-solution')) {
      const opening = document.createElement('div');
      opening.className = 'print-solution-start';
      while (solution.firstElementChild && !solution.firstElementChild.classList.contains('print-question-break')) {
        const block = solution.firstElementChild;
        opening.appendChild(block);
        if (block.tagName === 'P' && !block.matches('.print-result, .print-choice-content, .solution-step-title')) break;
      }
      solution.prepend(opening);
    }
    await document.fonts?.ready;
    window.print();
  }

  function createPrintArea() {
    const el = document.createElement('div');
    el.id = 'print-area';
    el.className = 'print-area';
    el.hidden = true;
    window.addEventListener('afterprint', () => { el.hidden = true; });
    document.body.appendChild(el);
    return el;
  }

  function mathToUnicode(value) {
    const superscripts = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', n: 'ⁿ', i: 'ⁱ' };
    const subscripts = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
    const fractions = { '1/2': '½', '1/3': '⅓', '2/3': '⅔', '1/4': '¼', '3/4': '¾', '1/5': '⅕', '2/5': '⅖', '3/5': '⅗', '4/5': '⅘' };
    const symbols = { cdot: '·', times: '×', div: '÷', pm: '±', neq: '≠', leq: '≤', geq: '≥', le: '≤', ge: '≥', approx: '≈', sqrt: '√', pi: 'π', alpha: 'α', beta: 'β', gamma: 'γ', Delta: 'Δ', degree: '°', parallel: '∥', perp: '⊥', in: '∈', subset: '⊂', Rightarrow: '⇒', Leftrightarrow: '⇔', sin: 'sin', cos: 'cos', tan: 'tan', cot: 'cot', mid: '|' };
    const script = (text, map, prefix) => [...text].every(char => map[char])
      ? [...text].map(char => map[char]).join('') : prefix + '(' + text + ')';
    let text = String(value ?? '').replace(/\$/g, '')
      .replace(/(\\(?:dfrac|tfrac|frac))\s*(\{[^{}]*\}|[0-9a-zA-Z])\s*(\{[^{}]*\}|[0-9a-zA-Z])/g,
        (_, command, a, b) => command + (a.startsWith('{') ? a : '{' + a + '}') + (b.startsWith('{') ? b : '{' + b + '}'))
      .replace(/\{,\}/g, ',')
      .replace(/\^\{?\\circ\}?/g, '°')
      .replace(/\\(?:widehat|hat)\{([^{}]+)\}/g, '∠$1')
      .replace(/\\overline\{([^{}]+)\}/g, '$1')
      .replace(/\\sqrt\[3\]\{([^{}]+)\}/g, '∛($1)')
      .replace(/\\(?:left|right)\b/g, '')
      .replace(/\^\{([^{}]+)\}|\^([0-9]+|[a-zA-Z])/g, (_, grouped, simple) => script(grouped || simple, superscripts, '^'))
      .replace(/_\{([^{}]+)\}|_([0-9]+|[a-zA-Z])/g, (_, grouped, simple) => script(grouped || simple, subscripts, '_'));
    let previous;
    do {
      previous = text;
      text = text.replace(/\\(?:dfrac|tfrac|frac)\{([^{}]+)\}\{([^{}]+)\}/g, (_, a, b) => {
        const compact = a.trim() + '/' + b.trim();
        const group = part => /^[+-]?(?:\d+(?:[.,]\d+)?|[a-zA-Z])$/.test(part.trim()) ? part.trim() : '(' + part.trim() + ')';
        return fractions[compact] || group(a) + '/' + group(b);
      }).replace(/\\sqrt\{([^{}]+)\}/g, (_, radicand) =>
        '√' + (/^[0-9a-zA-Z]+$/.test(radicand) ? radicand : '(' + radicand + ')'));
    } while (text !== previous);
    return text
      .replace(/\\(?:mathrm|text|mathbb)\{([^{}]*)\}/g, '$1')
      .replace(/\\begin\{cases\}/g, '{ ')
      .replace(/\\end\{cases\}/g, '')
      .replace(/\\\\/g, '; ')
      .replace(/\\leftrightarrow(?![a-zA-Z])/g, '↔')
      .replace(/\\rightarrow(?![a-zA-Z])/g, '→')
      .replace(/\\leftarrow(?![a-zA-Z])/g, '←')
      .replace(/\\ne(?![a-zA-Z])/g, '≠')
      .replace(/\\(?:,|;|:|!| )/g, ' ')
      .replace(/\\([a-zA-Z]+)/g, (match, name) => symbols[name] || name)
      .replace(/\\([{}])/g, '$1')
      .replace(/&(?:lt|gt|amp);/g, entity => ({ '&lt;': '<', '&gt;': '>', '&amp;': '&' }[entity]))
      .trim();
  }

  async function svgToPng(svg) {
    // Một số nhãn SVG có ký tự & tự do. Chuẩn hóa trước khi DOMParser đọc XML.
    const safeSvg = String(svg).replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[\da-f]+;)/gi, '&amp;');
    const xml = new DOMParser().parseFromString(safeSvg, 'image/svg+xml');
    const parsed = xml.documentElement;
    if (!parsed || parsed.localName !== 'svg' || xml.querySelector('parsererror')) {
      throw new Error('Hình minh họa SVG không hợp lệ.');
    }
    parsed.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const box = (parsed.getAttribute('viewBox') || '0 0 460 200').split(/[ ,]+/).map(Number);
    const scale = Math.min(600 / (box[2] || 460), 340 / (box[3] || 200), 1);
    const width = (box[2] || 460) * scale;
    const height = (box[3] || 200) * scale;
    parsed.setAttribute('width', String(width * 2));
    parsed.setAttribute('height', String(height * 2));
    // CSP cho phép ảnh data: nhưng chặn blob:. Giữ nguyên chính sách bảo mật.
    const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(parsed));
      const image = new Image();
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error('Không thể chuyển hình minh họa sang Word.'));
        image.src = url;
      });
      const canvas = document.createElement('canvas');
      canvas.width = width * 2;
      canvas.height = height * 2;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Trình duyệt không hỗ trợ chuyển hình sang PNG.');
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('Không thể tạo hình PNG cho Word.');
      return { data: new Uint8Array(await blob.arrayBuffer()), width, height };
  }

  async function createWordBlob(snapshot, library = window.docx) {
    if (!library?.Packer || !library?.Document) {
      throw new Error('Thiếu thư viện DOCX offline trong cap2/vendor/. Không thể xuất Word.');
    }
    const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, HeadingLevel, ImageRun, Footer, PageNumber } = library;
    const model = exportModel(snapshot);
    const { grade, activities } = model;
    const paragraph = (text, extra = {}) => new Paragraph({
      children: [new TextRun({ text: mathToUnicode(text), font: 'Arial', size: 22 })],
      spacing: { after: 100, line: 280 },
      ...extra
    });
    const children = [
      new Paragraph({ text: model.title, heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER }),
      ...(model.school ? [paragraph('Ôn thi hướng tới ' + model.school, { alignment: AlignmentType.CENTER }), paragraph('Đề ôn luyện do iMath biên soạn; không đại diện cho cấu trúc tuyển sinh riêng của trường.')] : []),
      paragraph(model.clc ? 'Kiến thức lớp 9 · iMath.vn' : model.topic || 'iMath.vn', { alignment: AlignmentType.CENTER }),
      paragraph('Họ và tên: ........................................ Lớp: ............ Ngày: ................'),
      paragraph(model.score),
      paragraph('Chọn phương án đúng, điền đáp số và trình bày bài chứng minh. Đáp án và lời giải ở phần cuối.')
    ];
    const border = { style: BorderStyle.SINGLE, size: 4, color: 'D9D9D9' };
    // Tách array trước khi chuyển công thức sang Unicode để giữ cấu trúc bảng.
    function richBlocks(value, extra = {}) {
      const text = String(value ?? '');
      const pattern = /\$?\\begin\{array\}\{[^}]*\}([\s\S]*?)\\end\{array\}\$?/g;
      const blocks = []; let cursor = 0;
      for (const match of text.matchAll(pattern)) {
        const before = text.slice(cursor, match.index).trim();
        if (before) blocks.push(paragraph(before.replace(/[.:]$/, '') + ':', {...extra, keepNext:true}));
        const rows = match[1].split(/\\\\/).map(row => row.replace(/\\hline/g,'').trim()).filter(Boolean).map(row=>row.split('&').map(cell=>cell.trim()));
        const columns = Math.max(...rows.map(row=>row.length));
        if (!rows.length || rows.some(row=>row.length!==columns)) throw new Error('Bảng toán có số cột không nhất quán.');
        blocks.push(new Table({width:{size:7200,type:WidthType.DXA},columnWidths:Array(columns).fill(7200/columns),
          borders:{top:border,bottom:border,left:border,right:border,insideHorizontal:border,insideVertical:border},
          rows:rows.map((row,index)=>new TableRow({cantSplit:true,children:row.map(cell=>new TableCell({
            margins:{top:90,bottom:90,left:120,right:120},children:[paragraph(cell,{alignment:AlignmentType.CENTER,keepNext:index<rows.length-1})]
          }))}))}));
        // Phương án cuối không cần đoạn trống có thể tràn thành một trang trắng.
        if (extra.keepNext !== false) blocks.push(paragraph('',{spacing:{after:80},keepNext:extra.keepNext,keepLines:true}));
        cursor=match.index+match[0].length;
      }
      if(cursor===0) return [paragraph(text,extra)];
      const after=text.slice(cursor).trim().replace(/^\.\s*/, ''); if(after) blocks.push(paragraph(after,extra));
      return blocks;
    }
    for (const group of model.groups) {
      children.push(new Paragraph({text: group.heading, heading: HeadingLevel.HEADING_1}));
    for (const act of group.items) {
      const questionText = printText(act.prompt || act.title);
      children.push(new Paragraph({
        children: [
          new TextRun({ text: 'Câu ' + act.number + (model.clc ? '' : ' (' + (act.levelName || act.tang) + ')') + '. ', bold: true }),
          new TextRun(questionText.includes('\\begin{array}') ? '' : mathToUnicode(questionText))
        ],
        spacing: { before: 120, after: 100, line: 280 },
        keepNext: true,
        keepLines: true
      }));
      if (questionText.includes('\\begin{array}')) children.push(...richBlocks(questionText, {keepNext:true,keepLines:true}));
      if (act.svg) {
        let image;
        try { image = await svgToPng(act.svg); }
        catch (error) { throw new Error(`Câu ${act.number}: ${error.message}`); }
        children.push(new Paragraph({
          children: [new ImageRun({ type: 'png', data: image.data, transformation: { width: image.width, height: image.height } })],
          alignment: AlignmentType.CENTER,
          keepNext: true
        }));
      }
      if (act.exportKind === 'chon') {
        act.options.forEach((option, index) => children.push(...richBlocks(option, { indent: { left: 240 }, keepNext: index < act.options.length - 1, keepLines: true })));
      } else if (act.exportKind === 'dien') {
        children.push(paragraph('Đáp số: ................................................................................'));
      } else {
        children.push(new Table({
          width: { size: 9638, type: WidthType.DXA },
          columnWidths: [9638],
          borders: { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border },
          rows: [new TableRow({
            cantSplit: true,
            children: [new TableCell({
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: Array.from({ length: 5 }, () => paragraph('........................................................................................', { spacing: { after: 60, line: 360 } }))
            })]
          })]
        }));
        children.push(paragraph(''));
      }
    }
    }
    children.push(new Paragraph({ text: model.answerHeading, heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
    for (const act of activities) {
      const answer = answerLabel(act);
      children.push(new Paragraph({ children: [new TextRun({ text: 'Câu ' + act.number + '.', bold: true })], spacing: { before: 180, after: 60 }, keepNext: true, keepLines: true }));
      const answerPrefix = (act.sourceDang || act.dang) === 'chon' ? 'Đáp án: ' : 'Kết quả: ';
      if (answer.includes('\\begin{array}')) children.push(...richBlocks(answerPrefix + answer,{keepNext:true,keepLines:true}));
      else children.push(new Paragraph({ children: [new TextRun({ text: answerPrefix + mathToUnicode(answer), bold: true })], spacing: { after: 60 }, keepNext: true, keepLines: true }));
      if ((act.sourceDang || act.dang) === 'chon') children.push(...richBlocks('Nội dung đáp án: ' + choiceAnswer(act).content, {keepNext:true,keepLines:true}));
      children.push(new Paragraph({ children: [new TextRun({ text: 'Lời giải', bold: true })], spacing: { after: 80 }, keepNext: true, keepLines: true }));
      const lines = window.IMathCap2.solutionLines(printSolution(act.solution));
      for (const [index, line] of lines.entries()) {
        if (/^Bước \d+:/.test(line)) {
          const m = line.match(/^(Bước \d+:)([\s\S]*)$/);
          const hasBody = index + 1 < lines.length && !/^Bước \d+:/.test(lines[index + 1]);
          children.push(new Paragraph({ children: [new TextRun({ text: mathToUnicode(m[1]), bold: true, font: 'Arial', size: 22 }), new TextRun({ text: ' ' + mathToUnicode(m[2]), bold: false, font: 'Arial', size: 22 })], keepNext: hasBody, keepLines: true, spacing: { before: 160, after: 80 } }));
        }
        else children.push(...richBlocks(line, {keepLines:true}));
      }
      children.push(paragraph(''));
    }
    const doc = new Document({
      creator: 'iMath.vn',
      title: model.title,
      styles: {
        default: { document: { run: { font: 'Arial', size: 22, color: '000000' }, paragraph: { spacing: { line: 280, after: 100 } } } },
        paragraphStyles: [
          { id: 'Title', name: 'Title', basedOn: 'Normal', next: 'Normal', run: { size: 32, bold: true, color: '000000' }, paragraph: { spacing: { after: 160 } } },
          { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', run: { size: 28, bold: true, color: '000000' }, paragraph: { spacing: { after: 160 }, keepNext: true } }
        ]
      },
      sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134, footer: 567 } } },
        footers: { default: new Footer({children: [new Paragraph({alignment: AlignmentType.CENTER, children: [
          new TextRun({text: COPYRIGHT + '  ·  Trang ',font:'Arial',size:18,color:'555555'}),
          new TextRun({children:[PageNumber.CURRENT],font:'Arial',size:18}),
          new TextRun({text:' / ',size:18}),new TextRun({children:[PageNumber.TOTAL_PAGES],font:'Arial',size:18})
        ]})]}) }, children }]
    });
    return Packer.toBlob(doc);
  }

  async function exportWordDoc() {
    const api = window.IMathCap2;
    if (!api?.state?.activities.length) {
      alert('Chưa có câu hỏi để xuất Word.');
      return;
    }
    const button = $('btn-export-word');
    button.disabled = true;
    try {
      const snapshot = { ...api.state, activities: api.state.activities.map(act => ({ ...act })) };
      const blob = await createWordBlob(snapshot);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const model = exportModel(snapshot);
      link.download = snapshot.mode === 'clc' ? 'De_Thi_Vao_10_CLC_iMath.docx' : 'Phieu_Toan_Lop_' + model.grade + '_iMath.docx';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('Lỗi xuất DOCX:', error);
      alert('Không thể xuất DOCX: ' + error.message);
    } finally {
      button.disabled = false;
    }
  }

  window.IMathCap2Export = Object.freeze({ createWordBlob, mathToUnicode });

  document.addEventListener('DOMContentLoaded', () => {
    $('btn-export-pdf')?.addEventListener('click', preparePdfPrint);
    $('btn-export-word')?.addEventListener('click', exportWordDoc);
  });
})();
