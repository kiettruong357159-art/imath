(function (window, document) {
  'use strict';

  // Export is a snapshot of the current worksheet. It never regenerates questions
  // or reads pupils' answers, names, scores, scratchpads or stored progress.
  const TIERS = { kha: 'Khá', gioi: 'Giỏi', hsg: 'Thử thách' };
  const XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
  const REL = 'http://schemas.openxmlformats.org/package/2006/relationships';
  const OFFICE = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
  const encoder = new TextEncoder();
  let root, snapshot, pageModels = [], returnFocus, oldOverflow, savedScroll = 0, implicitPrint = false;
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  // Small allowlist shared by print and Word: no source styles, scripts, hidden
  // drawers or answer-revealing diagrams are copied into a pupil worksheet.
  function paragraphs(html) {
    const parsed = new DOMParser().parseFromString(String(html || ''), 'text/html');
    const result = [[]];
    const newline = () => { if (result[result.length - 1].length) result.push([]); };
    function walk(node, format = {}) {
      if (node.nodeType === 3) {
        const text = node.nodeValue.replace(/[\t\r\n ]+/g, ' ');
        if (text.trim() || result[result.length - 1].length) result[result.length - 1].push({ text, ...format });
        return;
      }
      if (node.nodeType !== 1 || /^(SCRIPT|STYLE|SVG|IMG|IFRAME|OBJECT|TEMPLATE)$/.test(node.tagName)) return;
      if (node.tagName === 'BR') return newline();
      const block = /^(DIV|P|LI|H[1-6])$/.test(node.tagName);
      if (block) newline();
      const next = { ...format };
      if (/^(B|STRONG)$/.test(node.tagName) || node.classList.contains('sol-final-text')) next.bold = true;
      if (/^(I|EM)$/.test(node.tagName)) next.italic = true;
      if (node.tagName === 'SUP') next.script = 'superscript';
      if (node.tagName === 'SUB') next.script = 'subscript';
      node.childNodes.forEach(child => walk(child, next));
      if (block) newline();
    }
    parsed.body.childNodes.forEach(child => walk(child));
    return result.filter(line => line.some(run => run.text.trim()));
  }
  const textLine = (text, format = {}) => [{ text: String(text), ...format }];
  function lineNode(runs, className) {
    const p = element('p', className);
    for (const run of runs) {
      let node = element(run.script === 'superscript' ? 'sup' : run.script === 'subscript' ? 'sub' : 'span', '', run.text);
      if (run.bold) node.style.fontWeight = '700';
      if (run.italic) node.style.fontStyle = 'italic';
      p.append(node);
    }
    return p;
  }
  function capture() {
    if (window.IMathWorksheetExportSource) return window.IMathWorksheetExportSource.capture();
    const state = window.IMathWordProblemAPI?.getState();
    if (!state?.questions.length) throw new Error('Chưa có câu hỏi để xuất. Hãy tạo một đề trước.');
    return {
      grade: String(state.grade), code: state.examCode || '',
      minutes: state.mode === 'exam' ? 45 : state.mode === 'teacher' ? state.teacherConfig?.minutes : null,
      teacherKey: Boolean(state.mode === 'teacher' && state.teacherConfig?.answerKey),
      questions: state.questions.map((q, i) => ({
        number: i + 1, tier: TIERS[q.tier] || 'Luyện tập', prompt: paragraphs(q.text),
        solution: paragraphs(q.sol1), answer: String(q.answerText || q.answer),
        templateId: q.templateId
      }))
    };
  }
  function settings() {
    // Branding is mandatory for every export, including direct browser printing.
    return { lines: Number($('wp-export-lines').value), solutions: $('wp-export-solutions').checked, watermark: true };
  }
  function makeHeader(kind, first) {
    const header = element('header', 'wp-paper-header');
    const brand = element('div', 'wp-paper-brand');
    brand.append(element('strong', '', 'iMath'), element('span', '', '.vn'));
    brand.append(element('small', '', 'HỌC TOÁN MỖI NGÀY'));
    header.append(brand);
    if (first) {
      const title = element('div', 'wp-paper-title-block');
      title.append(element('p', 'wp-paper-eyebrow', kind === 'solutions' ? 'ĐỐI CHIẾU VÀ TỰ KIỂM TRA' : 'PHIẾU BÀI TẬP TỰ LUYỆN'));
      title.append(element('h1', '', kind === 'solutions' ? 'Đáp án và lời giải' : snapshot.title || 'Toán lời văn'));
      title.append(element('p', 'wp-paper-meta', `${snapshot.questions.length} câu${snapshot.minutes ? `   ·   ${snapshot.minutes} phút` : ''}   ·   ${[...new Set(snapshot.questions.map(q => q.tier))].join(' · ')}`));
      const badge = element('div', 'wp-paper-grade');
      badge.append(element('span', '', 'LỚP'), element('b', '', snapshot.grade));
      title.append(badge); header.append(title);
      if (kind === 'questions') {
        const student = element('div', 'wp-pupil-fields');
        student.append(element('p', '', 'Họ và tên: ............................................................................'));
        student.append(element('p', '', 'Lớp: ...................     Ngày: ....../....../............'));
        const score = element('div', 'wp-pupil-score');
        score.append(element('small', '', 'ĐIỂM'), element('b', '', '..... / 10'));
        student.append(score); header.append(student);
        header.append(element('p', 'wp-paper-instruction', 'Đọc kỹ đề  →  Trình bày cách giải  →  Kiểm tra đáp số và đơn vị'));
      }
      if (snapshot.code) header.append(element('p', 'wp-paper-code', 'Mã đề: ' + snapshot.code));
    } else {
      header.append(element('p', 'wp-paper-running', `${kind === 'solutions' ? 'Đáp án và lời giải' : snapshot.title || 'Toán lời văn'} · Lớp ${snapshot.grade} · Tiếp theo`));
    }
    return header;
  }
  function questionNode(q, kind, lines) {
    const article = element('article', 'wp-paper-question');
    article.dataset.exportQuestion = String(q.number);
    article.dataset.tier = q.tier;
    const heading = element('h2', 'wp-question-heading');
    heading.append(element('span', 'wp-question-number', `Câu ${q.number}`), document.createTextNode(' '), element('span', 'wp-question-tier', q.tier));
    article.append(heading);
    (kind === 'solutions' ? q.solution : q.prompt).forEach(runs => article.append(lineNode(runs, 'wp-question-text')));
    if (q.visual) {
      const img = element('img', 'wp-question-visual');
      img.src = q.visual.src; img.alt = q.visual.alt;
      img.width = q.visual.width; img.height = Math.round(q.visual.height);
      article.append(img);
    }
    if (kind === 'solutions' && !q.solution.some(p => p.some(r => /đáp số/i.test(r.text)))) {
      article.append(lineNode(textLine('Đáp số: ' + q.answer, { bold: true }), 'wp-question-text'));
    }
    if (kind === 'questions' && lines) {
      const workspace = element('div', 'wp-workspace');
      workspace.setAttribute('aria-label', `${lines} dòng để làm bài`);
      workspace.append(element('span', 'wp-workspace-label', 'BÀI GIẢI'));
      for (let i = 0; i < lines; i++) workspace.append(element('div', 'wp-writing-line'));
      article.append(workspace);
    }
    return article;
  }
  function paginate() {
    const target = $('wp-export-pages'), options = settings();
    target.style.transform = 'none';
    target.replaceChildren(); pageModels = [];
    function page(kind, first) {
      const paper = element('section', 'wp-paper');
      paper.dataset.paperKind = kind;
      if (options.watermark) {
        const watermark = element('div', 'wp-paper-watermark', '© iMath.vn');
        watermark.setAttribute('aria-hidden', 'true'); paper.append(watermark);
      }
      const header = makeHeader(kind, first), body = element('div', 'wp-paper-body'), footer = element('footer', 'wp-paper-footer');
      footer.append(element('span', '', '© iMath.vn · Tài liệu dùng cho học tập'), element('span', 'wp-page-number'));
      paper.append(header, body, footer); target.append(paper);
      const model = { kind, first, questions: [], header };
      pageModels.push(model);
      return { body, model };
    }
    for (const kind of options.solutions ? ['questions', 'solutions'] : ['questions']) {
      let current = page(kind, true);
      for (const q of snapshot.questions) {
        const node = questionNode(q, kind, options.lines);
        current.body.append(node);
        if (current.body.scrollHeight > current.body.clientHeight + 1 && current.model.questions.length) {
          node.remove(); current = page(kind, false); current.body.append(node);
        }
        // Never silently crop a newly added long question. A future bank with
        // oversized items must be detected rather than exported with missing text.
        if (current.body.scrollHeight > current.body.clientHeight + 1) throw new Error(`Câu ${q.number} quá dài cho trang A4. Hãy giảm số dòng làm bài.`);
        current.model.questions.push(q);
      }
    }
    target.querySelectorAll('.wp-page-number').forEach((node, i) => { node.textContent = `Trang ${i + 1} / ${pageModels.length}`; });
    $('wp-export-status').textContent = `${snapshot.questions.length} câu · ${pageModels.length} trang A4${options.solutions ? ' · Có phần lời giải riêng' : ' · Không kèm đáp án'}`;
    $('wp-export-print').disabled = $('wp-export-word').disabled = false;
    fitPreview();
  }
  function fitPreview() {
    if (!root || root.hidden) return;
    const area = root.querySelector('.wp-export-scroll'), pages = $('wp-export-pages');
    const css = getComputedStyle(area);
    const available = area.clientWidth - parseFloat(css.paddingLeft) - parseFloat(css.paddingRight);
    // Transform scales only the preview pixels. CSS zoom can reflow rounded font
    // metrics on phones and invalidate the already measured A4 page breaks.
    const scale = Math.min(1, available / pages.offsetWidth);
    pages.style.transform = `scale(${scale})`;
    const frame = $('wp-export-frame');
    frame.style.width = `${pages.offsetWidth * scale}px`;
    frame.style.height = `${pages.offsetHeight * scale}px`;
  }
  function update() {
    try { paginate(); }
    catch (error) {
      $('wp-export-status').textContent = error.message;
      $('wp-export-print').disabled = $('wp-export-word').disabled = true;
    }
  }
  function ensureUI() {
    if (root) return;
    root = element('div', 'wp-export-root'); root.id = 'wp-export-root'; root.hidden = true;
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-labelledby', 'wp-export-title');
    root.innerHTML = `<div class="wp-export-toolbar">
      <div class="wp-export-title"><h2 id="wp-export-title">Xuất phiếu bài tập</h2><p id="wp-export-status" role="status"></p></div>
      <div class="wp-export-options"><label for="wp-export-lines">Chỗ làm bài <select id="wp-export-lines"><option value="0">Không kẻ dòng</option><option value="2">2 dòng / câu</option><option value="4" selected>4 dòng / câu</option><option value="6">6 dòng / câu</option></select></label>
      <label class="wp-export-check"><input id="wp-export-solutions" type="checkbox"> Kèm lời giải ở cuối</label>
      <span class="wp-export-copyright">© iMath.vn · Luôn kèm bản quyền</span></div>
      <div class="wp-export-actions"><button id="wp-export-print" type="button">In / Lưu PDF</button><button id="wp-export-word" type="button">Tải Word (.docx)</button><button id="wp-export-close" type="button" aria-label="Đóng xem trước">Đóng</button></div>
      <p class="wp-export-note">PDF: chọn A4, tỉ lệ 100%, tắt “Đầu trang và chân trang” của trình duyệt. Word: nội dung sửa được; số trang có thể thay đổi tùy ứng dụng và phông chữ.</p>
    </div><div class="wp-export-scroll"><div id="wp-export-frame"><div id="wp-export-pages"></div></div></div>`;
    document.body.append(root);
    $('wp-export-lines').addEventListener('change', update);
    $('wp-export-solutions').addEventListener('change', update);
    $('wp-export-close').addEventListener('click', close);
    $('wp-export-print').addEventListener('click', async () => {
      try {
        await Promise.all([...root.querySelectorAll('.wp-question-visual')].map(img => img.decode()));
        document.title = filename(); window.print();
      } catch (error) { $('wp-export-status').textContent = 'Không tải được hình dữ kiện. Hãy đóng và mở lại bản xuất.'; }
    });
    $('wp-export-word').addEventListener('click', downloadWord);
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(root.querySelectorAll('button:not(:disabled),input,select'));
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }
  let originalTitle = document.title;
  function open() {
    try {
      snapshot = capture(); ensureUI(); returnFocus = document.activeElement; originalTitle = document.title;
      oldOverflow = document.body.style.overflow;
      savedScroll = window.scrollY;
      document.body.classList.add('wp-export-open');
      document.body.style.overflow = 'hidden'; root.hidden = false;
      $('wp-export-solutions').checked = snapshot.teacherKey;
      update(); $('wp-export-close').focus();
    } catch (error) { window.alert(error.message); }
  }
  function close() {
    if (!root || root.hidden) return;
    root.hidden = true; document.body.style.overflow = oldOverflow || '';
    document.body.classList.remove('wp-export-open');
    document.title = originalTitle;
    if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
    window.scrollTo(0, savedScroll);
  }
  function filename() {
    if (snapshot.filename) return snapshot.filename;
    return `imath-toan-loi-van-lop-${snapshot.grade}${snapshot.code ? '-' + snapshot.code.split('~')[0] : ''}`;
  }

  // Minimal standards-based OOXML package (ZIP, uncompressed). Unlike HTML renamed
  // to .doc, this produces editable Word paragraphs, styles and page-number fields.
  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) { crc ^= byte; for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); }
    return (crc ^ 0xffffffff) >>> 0;
  }
  function zip(files) {
    const entries = Object.entries(files).map(([name, data]) => ({ name: encoder.encode(name), data: data instanceof Uint8Array ? data : encoder.encode(data) }));
    const chunks = [], central = []; let offset = 0, centralSize = 0;
    const header = (size, signature) => { const bytes = new Uint8Array(size); new DataView(bytes.buffer).setUint32(0, signature, true); return [bytes, new DataView(bytes.buffer)]; };
    for (const entry of entries) {
      const crc = crc32(entry.data), [local, l] = header(30, 0x04034b50), [record, c] = header(46, 0x02014b50);
      l.setUint16(4, 20, true); l.setUint16(6, 0x800, true); l.setUint16(12, 33, true);
      l.setUint32(14, crc, true); l.setUint32(18, entry.data.length, true); l.setUint32(22, entry.data.length, true); l.setUint16(26, entry.name.length, true);
      c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x800, true); c.setUint16(14, 33, true);
      c.setUint32(16, crc, true); c.setUint32(20, entry.data.length, true); c.setUint32(24, entry.data.length, true); c.setUint16(28, entry.name.length, true); c.setUint32(42, offset, true);
      chunks.push(local, entry.name, entry.data); central.push(record, entry.name);
      offset += local.length + entry.name.length + entry.data.length; centralSize += record.length + entry.name.length;
    }
    const [end, e] = header(22, 0x06054b50);
    e.setUint16(8, entries.length, true); e.setUint16(10, entries.length, true); e.setUint32(12, centralSize, true); e.setUint32(16, offset, true);
    return new Blob([...chunks, ...central, end], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }
  function wordRun(run) {
    return `<w:r><w:rPr>${run.bold ? '<w:b/>' : ''}${run.italic ? '<w:i/>' : ''}${run.color ? `<w:color w:val="${run.color}"/>` : ''}${run.script ? `<w:vertAlign w:val="${run.script}"/>` : ''}</w:rPr><w:t xml:space="preserve">${escape(run.text.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, ''))}</w:t></w:r>`;
  }
  function wordParagraph(runs, style = 'Normal', more = '') {
    return `<w:p><w:pPr><w:pStyle w:val="${style}"/>${more}</w:pPr>${runs.map(wordRun).join('')}</w:p>`;
  }
  async function rasterVisual(visual) {
    const img = new Image(); img.src = visual.src;
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(visual.width * 3); canvas.height = Math.round(visual.height * 3);
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Không tạo được hình trong Word.');
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Không kết xuất được hình dữ kiện sang Word.');
    return new Uint8Array(await blob.arrayBuffer());
  }
  function wordVisual(q, drawingId, keepNext) {
    const cx = Math.round(q.visual.width * 9525), cy = Math.round(q.visual.height * 9525);
    return `<w:p><w:pPr><w:jc w:val="center"/>${keepNext ? '<w:keepNext/>' : ''}<w:spacing w:after="80"/></w:pPr><w:r><w:drawing><wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${drawingId}" name="HinhCau${q.number}" descr="${escape(q.visual.alt)}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="0" name="q${q.number}.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="image${q.number}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
  }
  async function createDocx() {
    const options = settings(), body = [];
    // Capture all models before the first await so a UI change cannot mix two
    // worksheets or options in one file. Rasterization stays local in-browser.
    const visualQuestions = snapshot.questions.filter(q => q.visual);
    pageModels.forEach((page, pageIndex) => {
      if (pageIndex) body.push('<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/></w:pPr><w:r><w:br w:type="page"/></w:r></w:p>');
      body.push(wordParagraph([{ text: 'iMath', bold: true, color: '1263BA' }, { text: '.vn', bold: true, color: '158263' }], 'Brand', '<w:keepNext/>'));
      if (page.first) {
        body.push(wordParagraph(textLine(page.kind === 'solutions' ? 'ĐỐI CHIẾU VÀ TỰ KIỂM TRA' : 'PHIẾU BÀI TẬP TỰ LUYỆN'), 'Eyebrow', '<w:keepNext/>'));
        body.push(wordParagraph(textLine(page.kind === 'solutions' ? 'Đáp án và lời giải' : snapshot.title || 'Toán lời văn'), 'Title', '<w:keepNext/>'));
        body.push(wordParagraph(textLine(`Lớp ${snapshot.grade}   ·   ${snapshot.questions.length} câu${snapshot.minutes ? `   ·   ${snapshot.minutes} phút` : ''}`), 'Meta', '<w:keepNext/>'));
        if (page.kind === 'questions') {
          body.push(wordParagraph(textLine('Họ và tên: .............................................................................'), 'Pupil', '<w:keepNext/>'));
          body.push(wordParagraph(textLine('Lớp: ............     Ngày: ....../....../............     Điểm: ..... / 10'), 'Pupil', '<w:keepNext/>'));
          body.push(wordParagraph(textLine('Đọc kỹ đề → Trình bày cách giải → Kiểm tra đáp số và đơn vị'), 'Instruction', '<w:keepNext/>'));
        }
        if (snapshot.code) body.push(wordParagraph(textLine('Mã đề: ' + snapshot.code), 'Code', '<w:keepNext/>'));
      } else {
        body.push(wordParagraph(textLine(`${page.kind === 'solutions' ? 'Đáp án và lời giải' : snapshot.title || 'Toán lời văn'} · Lớp ${snapshot.grade} · Tiếp theo`), 'Meta', '<w:keepNext/>'));
      }
      page.questions.forEach(q => {
        body.push(wordParagraph(textLine(`Câu ${q.number}   ·   ${q.tier}`), 'Heading2', '<w:keepNext/>'));
        const lines = page.kind === 'questions' ? q.prompt : q.solution.slice();
        if (page.kind === 'solutions' && !q.solution.some(p => p.some(r => /đáp số/i.test(r.text)))) lines.push(textLine('Đáp số: ' + q.answer, { bold: true }));
        lines.forEach((runs, i) => body.push(wordParagraph(runs, 'Normal', '<w:keepLines/>' + (i < lines.length - 1 || q.visual || (page.kind === 'questions' && options.lines) ? '<w:keepNext/>' : ''))));
        if (q.visual) body.push(wordVisual(q, pageIndex * snapshot.questions.length + q.number, page.kind === 'questions' && options.lines));
        if (page.kind === 'questions') for (let i = 0; i < options.lines; i++) body.push(wordParagraph([], 'Writing', `<w:pBdr><w:bottom w:val="dotted" w:sz="4" w:space="1" w:color="BBBBBB"/><w:between w:val="dotted" w:sz="4" w:space="1" w:color="BBBBBB"/></w:pBdr>${i < options.lines - 1 ? '<w:keepNext/>' : ''}`));
      });
    });
    const styles = [
      ['Normal', 25, 0, 0, 70, 340], ['Title', 44, 1, 60, 100, 280], ['Meta', 20, 0, 0, 80, 280],
      ['Brand', 34, 1, 0, 120, 260], ['Eyebrow', 16, 1, 0, 40, 260, '158263'], ['Instruction', 18, 0, 0, 80, 270, '436875'],
      ['Code', 15, 0, 0, 140, 250, '586C7E'], ['Pupil', 21, 0, 0, 100, 280], ['Heading2', 22, 1, 160, 60, 280, '125596'], ['Writing', 22, 0, 0, 0, 425], ['Footer', 16, 0, 0, 0, 240, '586C7E']
    ].map(([id, size, bold, before, after, line, color = '000000']) => `<w:style w:type="paragraph" w:styleId="${id}"${id === 'Normal' ? ' w:default="1"' : ''}><w:name w:val="${id}"/><w:pPr><w:spacing w:before="${before}" w:after="${after}" w:line="${line}" w:lineRule="${id === 'Writing' ? 'exact' : 'auto'}"/>${id === 'Heading2' ? '<w:outlineLvl w:val="1"/>' : ''}</w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:color w:val="${color}"/><w:sz w:val="${size}"/><w:szCs w:val="${size}"/>${bold ? '<w:b/>' : ''}</w:rPr></w:style>`).join('');
    const files = {
      '[Content_Types].xml': XML + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>',
      '_rels/.rels': XML + `<Relationships xmlns="${REL}"><Relationship Id="rId1" Type="${OFFICE}officeDocument" Target="word/document.xml"/></Relationships>`,
      'word/_rels/document.xml.rels': XML + `<Relationships xmlns="${REL}"><Relationship Id="rId1" Type="${OFFICE}styles" Target="styles.xml"/><Relationship Id="rId2" Type="${OFFICE}footer" Target="footer1.xml"/></Relationships>`,
      'word/styles.xml': XML + `<w:styles xmlns:w="${W}"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:lang w:val="vi-VN"/></w:rPr></w:rPrDefault></w:docDefaults>${styles}</w:styles>`,
      'word/document.xml': XML + `<w:document xmlns:w="${W}" xmlns:r="${OFFICE.slice(0, -1)}"><w:body>${body.join('')}<w:sectPr><w:footerReference w:type="default" r:id="rId2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="794" w:right="907" w:bottom="680" w:left="907" w:header="340" w:footer="340"/></w:sectPr></w:body></w:document>`,
      'word/footer1.xml': XML + `<w:ftr xmlns:w="${W}"><w:p><w:pPr><w:pStyle w:val="Footer"/><w:tabs><w:tab w:val="right" w:pos="10092"/></w:tabs></w:pPr>${wordRun({ text: '© iMath.vn · Tài liệu dùng cho học tập' })}<w:r><w:tab/></w:r>${wordRun({ text: 'Trang ' })}<w:fldSimple w:instr="PAGE"/>${wordRun({ text: ' / ' })}<w:fldSimple w:instr="NUMPAGES"/></w:p></w:ftr>`
    };
    if (options.watermark) {
      // Word-native header watermark, behind document text on every page. A light
      // solid fill avoids relying on application-specific transparency handling.
      files['word/header1.xml'] = XML + `<w:hdr xmlns:w="${W}" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><w:p><w:pPr><w:spacing w:before="0" w:after="0"/></w:pPr><w:r><w:pict><v:shapetype id="_x0000_t136" coordsize="21600,21600" o:spt="136" adj="10800" path="m@7,l@8,m@5,21600l@6,21600e"><v:formulas><v:f eqn="sum #0 0 10800"/><v:f eqn="prod #0 2 1"/><v:f eqn="sum 21600 0 @1"/><v:f eqn="sum 0 0 @2"/><v:f eqn="sum 21600 0 @3"/><v:f eqn="if @0 @3 0"/><v:f eqn="if @0 21600 @1"/><v:f eqn="if @0 0 @2"/><v:f eqn="if @0 @4 21600"/><v:f eqn="mid @5 @6"/><v:f eqn="mid @8 @5"/><v:f eqn="mid @7 @8"/><v:f eqn="mid @6 @7"/><v:f eqn="sum @6 0 @5"/></v:formulas><v:path textpathok="t"/><v:textpath on="t" fitshape="t"/></v:shapetype><v:shape id="ImathWatermark" o:spid="_x0000_s1025" type="#_x0000_t136" style="position:absolute;margin-left:0;margin-top:0;width:390pt;height:72pt;rotation:332;z-index:-251654144;mso-position-horizontal:center;mso-position-horizontal-relative:page;mso-position-vertical:center;mso-position-vertical-relative:page" fillcolor="#eef3f8" stroked="f"><v:textpath style="font-family:Arial;font-size:1pt;font-weight:bold" string="© iMath.vn"/></v:shape></w:pict></w:r></w:p></w:hdr>`;
      files['[Content_Types].xml'] = files['[Content_Types].xml'].replace('</Types>', '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/></Types>');
      files['word/_rels/document.xml.rels'] = files['word/_rels/document.xml.rels'].replace('</Relationships>', `<Relationship Id="rId3" Type="${OFFICE}header" Target="header1.xml"/></Relationships>`);
      files['word/document.xml'] = files['word/document.xml'].replace('<w:sectPr>', '<w:sectPr><w:headerReference w:type="default" r:id="rId3"/>');
    }
    if (visualQuestions.length) {
      files['[Content_Types].xml'] = files['[Content_Types].xml'].replace('</Types>', '<Default Extension="png" ContentType="image/png"/></Types>');
      files['word/_rels/document.xml.rels'] = files['word/_rels/document.xml.rels'].replace('</Relationships>', visualQuestions.map(q => `<Relationship Id="image${q.number}" Type="${OFFICE}image" Target="media/q${q.number}.png"/>`).join('') + '</Relationships>');
      for (const q of visualQuestions) files[`word/media/q${q.number}.png`] = await rasterVisual(q.visual);
    }
    return zip(files);
  }
  async function downloadWord() {
    if (!pageModels.length || $('wp-export-word').disabled) return;
    const name = filename(), button = $('wp-export-word'); button.disabled = true;
    try {
      const blob = await createDocx(), url = URL.createObjectURL(blob);
      const a = element('a'); a.href = url; a.download = name + '.docx';
      document.body.append(a); a.click(); a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (error) { $('wp-export-status').textContent = 'Không xuất được Word: ' + error.message; }
    finally { button.disabled = $('wp-export-print').disabled; }
  }
  window.IMathWordProblemExport = { open };
  window.IMathWorksheetExport = { open };
  window.addEventListener('resize', fitPreview);
  $('btn-export-word')?.addEventListener('click', open);
  window.addEventListener('beforeprint', () => {
    if (!root || root.hidden) { implicitPrint = true; open(); }
  });
  window.addEventListener('afterprint', () => { document.title = originalTitle; if (implicitPrint) { implicitPrint = false; close(); } });
})(window, document);
