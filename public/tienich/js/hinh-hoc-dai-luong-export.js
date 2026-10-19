(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const labels = { compact: 'Gọn', standard: 'Tiêu chuẩn', large: 'Rộng' };
  const encoder = new TextEncoder();
  const XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
  const REL = 'http://schemas.openxmlformats.org/package/2006/relationships';
  const OFFICE = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/';
  let previousTitle = document.title;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function safeFilename(value) {
    const normalized = String(value || 'phieu-hinh-hoc-dai-luong')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D')
      .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    return normalized || 'phieu-hinh-hoc-dai-luong';
  }

  function options() {
    return {
      title: $('worksheet-title').value.trim() || 'Phiếu Hình học & Đại lượng trực quan',
      studentName: $('student-name').value.trim(),
      studentClass: $('student-class').value.trim(),
      workSpace: $('work-space').value,
      includeAnswer: $('include-answer').checked,
      includeGuide: $('include-guide').checked
    };
  }

  function getSnapshot() {
    const api = window.IMathVisualGeometry;
    if (!api || typeof api.getSnapshot !== 'function') throw new Error('Chưa sẵn sàng dữ liệu phiên học.');
    const snapshot = api.getSnapshot();
    if (!snapshot.activities?.length) throw new Error('Chưa có hoạt động để xuất.');
    return snapshot;
  }

  function getTierName(activity) {
    if (activity.tier === 'kha' || activity.tierLabel?.includes('Khá')) return 'Khá';
    if (activity.tier === 'gioi' || activity.tierLabel?.includes('Giỏi')) return 'Giỏi';
    if (activity.tier === 'hsg' || activity.tierLabel?.includes('HSG')) return 'Thi HSG';
    return '';
  }

  function tierSummary(activities) {
    const counts = activities.reduce((result, activity) => {
      const tier = activity.tier || 'kha';
      result[tier] = (result[tier] || 0) + 1;
      return result;
    }, { kha: 0, gioi: 0, hsg: 0 });
    const detail = [
      counts.kha ? `${counts.kha} Khá` : '',
      counts.gioi ? `${counts.gioi} Giỏi` : '',
      counts.hsg ? `${counts.hsg} Thi HSG` : ''
    ].filter(Boolean).join(' · ');
    return `${activities.length} hoạt động${detail ? ` (${detail})` : ''}`;
  }

  function optionText(option, optionIndex) {
    const expected = String.fromCharCode(65 + optionIndex);
    return String(option ?? '').replace(new RegExp(`^${expected}\\s*[.、):\\-]\\s*`, 'iu'), '').trim();
  }

  function activityMarkup(activity, workSpace, index) {
    const visualHtml = activity.svg ? `<div class="print-visual">${prepareSvg(activity.svg).source}</div>` : '';
    const optionsHtml = (Array.isArray(activity.options) && activity.options.length)
      ? `<div class="print-options">${activity.options.map((opt, optionIndex) => `<span class="print-opt"><b>${String.fromCharCode(65 + optionIndex)}</b><span>${escapeHtml(optionText(opt, optionIndex))}</span></span>`).join('')}</div>`
      : '';
    const tierName = getTierName(activity);
    return `<section class="print-activity">
      <h2>${index + 1}. ${escapeHtml(activity.title)} ${tierName ? `<small class="print-tier-tag">[${tierName}]</small>` : ''}</h2>
      <p class="print-prompt">${escapeHtml(activity.prompt)}</p>
      ${visualHtml}
      ${optionsHtml}
      <div class="print-placeholder ${escapeHtml(workSpace)}"><span>Bài làm</span></div>
    </section>`;
  }

  function extraMarkup(snapshot, settings) {
    const parts = [];
    if (settings.includeAnswer) {
      parts.push(`<section class="print-extra"><h2>Đáp án tham khảo</h2>${snapshot.activities.map((activity, index) => {
        const tierName = getTierName(activity);
        return `<p><strong>Câu ${index + 1} ${tierName ? `(${tierName})` : ''}:</strong> ${escapeHtml(activity.answer || 'Chưa có đáp án.')}</p>`;
      }).join('')}</section>`);
    }
    if (settings.includeGuide) {
      parts.push(`<section class="print-extra"><h2>Hướng dẫn dành cho người lớn</h2>${snapshot.activities.map((activity, index) => {
        const tierName = getTierName(activity);
        return `<p><strong>Hoạt động ${index + 1} (${escapeHtml(activity.title)} - ${tierName}):</strong> ${escapeHtml(activity.solution || 'Chưa có hướng dẫn.')}</p>`;
      }).join('')}</section>`);
    }
    return parts.join('');
  }

  function documentBody(snapshot, settings) {
    const config = snapshot.config;
    const date = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short' }).format(new Date());
    const summary = tierSummary(snapshot.activities);
    return `<article class="print-document">
      <header class="print-header">
        <div class="print-brand"><strong>iMath</strong><span>HỌC TOÁN THẬT VUI</span><em>imath.vn</em></div>
        <h1>${escapeHtml(settings.title)}</h1>
        <p>Hình học &amp; Đại lượng trực quan · Lớp ${config.grade}</p>
      </header>
      <section class="print-meta">
        <span><strong>Họ và tên:</strong> ${escapeHtml(settings.studentName) || '................................................'}</span>
        <span><strong>Lớp:</strong> ${escapeHtml(settings.studentClass) || '....................'}</span>
        <span><strong>Chủ đề:</strong> ${escapeHtml(config.topicLabel)}</span>
        <span><strong>Phân tầng:</strong> ${escapeHtml(summary)}</span>
        <span><strong>Ngày:</strong> ${date}</span>
        <span><strong>Khoảng làm bài:</strong> ${labels[settings.workSpace] || labels.standard}</span>
      </section>
      <p class="print-instruction">Đọc kỹ đề, quan sát hình và trình bày bài làm rõ ràng.</p>
      ${snapshot.activities.map((activity, index) => activityMarkup(activity, settings.workSpace, index)).join('')}
      ${extraMarkup(snapshot, settings)}
      <footer class="print-footer">© ${new Date().getFullYear()} iMath.vn · Bản quyền thuộc iMath · Học Toán thật vui</footer>
    </article>`;
  }

  function notify(message, error = false) {
    if (window.IMathVisualGeometry?.notify) window.IMathVisualGeometry.notify(message, error);
  }

  function preparePrint() {
    try {
      const snapshot = getSnapshot();
      const settings = options();
      $('print-sheet').innerHTML = documentBody(snapshot, settings);
      previousTitle = document.title;
      document.title = safeFilename(settings.title);
      window.print();
      notify('Đã mở hộp thoại in. Chọn “Lưu dưới dạng PDF” để tạo file PDF.');
    } catch (error) {
      notify(`Không thể chuẩn bị bản in: ${error.message}`, true);
    }
  }

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {
      crc ^= byte;
      for (let index = 0; index < 8; index += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function zip(files) {
    const entries = Object.entries(files).map(([name, data]) => ({
      name: encoder.encode(name),
      data: (data instanceof Uint8Array) ? data : encoder.encode(data)
    }));
    const chunks = [];
    const central = [];
    let offset = 0;
    let centralSize = 0;
    const header = (size, signature) => {
      const bytes = new Uint8Array(size);
      const view = new DataView(bytes.buffer);
      view.setUint32(0, signature, true);
      return [bytes, view];
    };

    entries.forEach((entry) => {
      const checksum = crc32(entry.data);
      const [local, localView] = header(30, 0x04034b50);
      const [record, recordView] = header(46, 0x02014b50);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0x800, true);
      localView.setUint16(12, 0x0021, true);
      localView.setUint32(14, checksum, true);
      localView.setUint32(18, entry.data.length, true);
      localView.setUint32(22, entry.data.length, true);
      localView.setUint16(26, entry.name.length, true);
      recordView.setUint16(4, 20, true);
      recordView.setUint16(6, 20, true);
      recordView.setUint16(8, 0x800, true);
      recordView.setUint16(14, 0x0021, true);
      recordView.setUint32(16, checksum, true);
      recordView.setUint32(20, entry.data.length, true);
      recordView.setUint32(24, entry.data.length, true);
      recordView.setUint16(28, entry.name.length, true);
      recordView.setUint32(42, offset, true);
      chunks.push(local, entry.name, entry.data);
      central.push(record, entry.name);
      offset += local.length + entry.name.length + entry.data.length;
      centralSize += record.length + entry.name.length;
    });

    const [end, endView] = header(22, 0x06054b50);
    endView.setUint16(8, entries.length, true);
    endView.setUint16(10, entries.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, offset, true);
    return new Blob([...chunks, ...central, end], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }

  function wordRun(text, bold = false, color = '') {
    const safe = escapeHtml(String(text).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, ''));
    return `<w:r><w:rPr>${bold ? '<w:b/>' : ''}${color ? `<w:color w:val="${color}"/>` : ''}</w:rPr><w:t xml:space="preserve">${safe}</w:t></w:r>`;
  }

  function wordParagraph(text, style = 'Normal', bold = false, properties = '') {
    return `<w:p><w:pPr><w:pStyle w:val="${style}"/>${properties}</w:pPr>${wordRun(text, bold)}</w:p>`;
  }

  function pageBreak() {
    return '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
  }

  function wordOptionTable(options) {
    if (!Array.isArray(options) || !options.length) return '';
    const cells = options.map((option, index) => {
      const letter = String.fromCharCode(65 + index);
      return `<w:tc><w:tcPr><w:tcW w:w="4550" w:type="dxa"/><w:tcMar><w:top w:w="90" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="90" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar><w:shd w:fill="F7FBFF"/></w:tcPr><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="280" w:lineRule="auto"/></w:pPr>${wordRun(`${letter}. `, true, '1468C3')}${wordRun(optionText(option, index))}</w:p></w:tc>`;
    });
    if (cells.length % 2) cells.push('<w:tc><w:tcPr><w:tcW w:w="4550" w:type="dxa"/><w:tcMar><w:top w:w="90" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="90" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar></w:tcPr><w:p/></w:tc>');
    const rows = [];
    for (let index = 0; index < cells.length; index += 2) rows.push(`<w:tr>${cells[index]}${cells[index + 1]}</w:tr>`);
    return `<w:tbl><w:tblPr><w:tblW w:w="9100" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="55" w:type="dxa"/><w:left w:w="55" w:type="dxa"/><w:bottom w:w="55" w:type="dxa"/><w:right w:w="55" w:type="dxa"/></w:tblCellMar><w:tblBorders><w:top w:val="single" w:sz="8" w:color="C8DDED"/><w:left w:val="single" w:sz="8" w:color="C8DDED"/><w:bottom w:val="single" w:sz="8" w:color="C8DDED"/><w:right w:val="single" w:sz="8" w:color="C8DDED"/><w:insideH w:val="single" w:sz="8" w:color="C8DDED"/><w:insideV w:val="single" w:sz="8" w:color="C8DDED"/></w:tblBorders><w:tblCellSpacing w:w="70" w:type="dxa"/></w:tblPr><w:tblGrid><w:gridCol w:w="4550"/><w:gridCol w:w="4550"/></w:tblGrid>${rows.join('')}</w:tbl>`;
  }

  function wordMetaTable(rows) {
    const content = rows.map((row) => `<w:tr>${row.map((cell) => `<w:tc><w:tcPr><w:tcW w:w="4550" w:type="dxa"/><w:tcMar><w:top w:w="75" w:type="dxa"/><w:left w:w="120" w:type="dxa"/><w:bottom w:w="75" w:type="dxa"/><w:right w:w="120" w:type="dxa"/></w:tcMar><w:shd w:fill="F3F9FD"/></w:tcPr><w:p><w:pPr><w:spacing w:after="0"/></w:pPr>${wordRun(cell.label + ': ', true, '153B69')}${wordRun(cell.value)}</w:p></w:tc>`).join('')}</w:tr>`).join('');
    return `<w:tbl><w:tblPr><w:tblW w:w="9100" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="6" w:color="D6E7F3"/><w:left w:val="single" w:sz="6" w:color="D6E7F3"/><w:bottom w:val="single" w:sz="6" w:color="D6E7F3"/><w:right w:val="single" w:sz="6" w:color="D6E7F3"/><w:insideH w:val="single" w:sz="6" w:color="D6E7F3"/><w:insideV w:val="single" w:sz="6" w:color="D6E7F3"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="4550"/><w:gridCol w:w="4550"/></w:tblGrid>${content}</w:tbl>`;
  }

  function writingLines(workSpace) {
    const count = workSpace === 'compact' ? 2 : workSpace === 'large' ? 6 : 4;
    const label = `<w:p><w:pPr><w:spacing w:before="100" w:after="0"/><w:keepNext/></w:pPr>${wordRun('Bài làm:', true, '6B8195')}</w:p>`;
    const lines = Array.from({ length: count }, (_, index) => wordParagraph('', 'Writing', false, `<w:pBdr><w:bottom w:val="dotted" w:sz="4" w:space="1" w:color="AAAAAA"/></w:pBdr>${index < count - 1 ? '<w:keepNext/>' : ''}`)).join('');
    return label + lines;
  }

  function svgDataUrl(svgSource) {
    const bytes = encoder.encode(svgSource);
    let binary = '';
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    return `data:image/svg+xml;base64,${btoa(binary)}`;
  }

  function prepareSvg(source) {
    if (!/<svg\b[^>]*\sxmlns\s*=/.test(source)) source = source.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    const parsed = new DOMParser().parseFromString(source, 'image/svg+xml');
    const svg = parsed.documentElement;
    if (parsed.querySelector('parsererror') || svg.localName !== 'svg') throw new Error('Hình SVG không hợp lệ.');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const original = (svg.getAttribute('viewBox') || '0 0 340 160').trim().split(/[\s,]+/).map(Number);
    let [x, y, width, height] = original;
    if (original.length !== 4 || !original.every(Number.isFinite) || width <= 0 || height <= 0) throw new Error('Kích thước hình SVG không hợp lệ.');
    const holder = document.createElement('div');
    holder.style.cssText = 'position:fixed;left:-10000px;top:0;visibility:hidden;pointer-events:none;';
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    holder.append(document.importNode(svg, true));
    document.body.append(holder);
    try {
      const bounds = holder.firstElementChild.getBBox();
      if (bounds.width > 0 && bounds.height > 0) {
        const right = Math.max(x + width, bounds.x + bounds.width + 4);
        const bottom = Math.max(y + height, bounds.y + bounds.height + 4);
        x = Math.min(x, bounds.x - 4);
        y = Math.min(y, bounds.y - 4);
        width = right - x;
        height = bottom - y;
      }
    } finally {
      holder.remove();
    }
    svg.setAttribute('viewBox', [x, y, width, height].join(' '));
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    return { source: new XMLSerializer().serializeToString(svg), width, height };
  }

  function svgToPngBytes(svgString, defaultW = 340, defaultH = 160) {
    return new Promise((resolve) => {
      try {
        if (typeof window === 'undefined' || typeof Image === 'undefined' || typeof document === 'undefined') {
          return resolve(null);
        }
        const prepared = prepareSvg(String(svgString || '').trim());
        const cleanSvg = prepared.source;
        const scale = Math.min(1, 460 / prepared.width, 280 / prepared.height);
        const w = Math.max(1, Math.round(prepared.width * scale));
        const h = Math.max(1, Math.round(prepared.height * scale));

        const sourceUrl = svgDataUrl(cleanSvg);
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            canvas.width = w * 2;
            canvas.height = h * 2;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            canvas.toBlob((pngBlob) => {
              if (!pngBlob) return resolve(null);
              pngBlob.arrayBuffer().then((buf) => {
                resolve({ bytes: new Uint8Array(buf), width: w, height: h });
              }).catch(() => resolve(null));
            }, 'image/png');
          } catch (err) {
            resolve(null);
          }
        };
        img.onerror = () => resolve(null);
        img.src = sourceUrl;
      } catch (e) {
        console.error('Không thể chuyển SVG sang PNG:', e);
        resolve(null);
      }
    });
  }

  function wordDrawing(rId, id, name, cx, cy) {
    return `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="120" w:after="160"/></w:pPr><w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="${escapeHtml(name)}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${id}" name="${escapeHtml(name)}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rId}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
  }

  async function createDocx(snapshot, settings) {
    const config = snapshot.config;
    const date = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'short' }).format(new Date());
    const summary = tierSummary(snapshot.activities);
    const body = [
      wordParagraph('iMath', 'Brand', true, '<w:jc w:val="center"/>'),
      wordParagraph('HỌC TOÁN THẬT VUI · IMATH.VN', 'BrandTagline', true, '<w:jc w:val="center"/>'),
      wordParagraph(settings.title, 'Title', true, '<w:jc w:val="center"/>'),
      wordParagraph(`Hình học & Đại lượng trực quan · Lớp ${config.grade}`, 'Subtitle', false, '<w:jc w:val="center"/>'),
      wordMetaTable([
        [{ label: 'Họ và tên', value: settings.studentName || '........................................' }, { label: 'Lớp', value: settings.studentClass || '................' }],
        [{ label: 'Chủ đề', value: config.topicLabel }, { label: 'Ngày', value: date }],
        [{ label: 'Phân tầng', value: summary }, { label: 'Khoảng làm bài', value: labels[settings.workSpace] || labels.standard }]
      ]),
      wordParagraph('Quan sát kỹ hình vẽ, đọc yêu cầu và hoàn thành bài làm.', 'Instruction')
    ];

    const imageFiles = {};
    const imageRels = [];
    let imageCounter = 0;

    for (let index = 0; index < snapshot.activities.length; index += 1) {
      const activity = snapshot.activities[index];
      const tierName = getTierName(activity);
      body.push(wordParagraph(`${index + 1}. ${activity.title} ${tierName ? `[${tierName}]` : ''}`, 'Heading2', true, '<w:keepNext/>'));
      body.push(wordParagraph(activity.prompt, 'Normal', false, '<w:keepNext/>'));

      if (activity.svg) {
        let pngResult = null;
        try {
          pngResult = await svgToPngBytes(activity.svg);
        } catch (err) {
          pngResult = null;
        }

        if (pngResult && pngResult.bytes) {
          imageCounter += 1;
          const rId = `rIdImg${imageCounter}`;
          const imgName = `image${imageCounter}.png`;
          imageFiles[`word/media/${imgName}`] = pngResult.bytes;
          imageRels.push(`<Relationship Id="${rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${imgName}"/>`);
          const cx = Math.round(pngResult.width * 9525);
          const cy = Math.round(pngResult.height * 9525);
          body.push(wordDrawing(rId, imageCounter, imgName, cx, cy).replace('<w:pPr>', '<w:pPr><w:keepNext/>'));
        } else {
          throw new Error('Không thể nhúng hình câu ' + (index + 1) + '. Vui lòng thử xuất lại.');
        }
      }

      if (Array.isArray(activity.options) && activity.options.length) {
        body.push(wordOptionTable(activity.options));
      }
      body.push(writingLines(settings.workSpace));
    }

    if (settings.includeAnswer) {
      body.push(pageBreak(), wordParagraph('Đáp án tham khảo', 'Title', true));
      snapshot.activities.forEach((activity, index) => body.push(wordParagraph(`Câu ${index + 1}: ${activity.answer || 'Chưa có đáp án.'}`)));
    }
    if (settings.includeGuide) {
      body.push(pageBreak(), wordParagraph('Hướng dẫn dành cho người lớn', 'Title', true));
      snapshot.activities.forEach((activity, index) => body.push(wordParagraph(`Hoạt động ${index + 1} (${activity.title}): ${activity.solution || 'Chưa có hướng dẫn.'}`)));
    }

    const styles = [
      ['Normal', 22, 0, 0, 90, '17324D'],
      ['Title', 34, 1, 80, 80, '153B69'],
      ['Subtitle', 21, 0, 0, 120, '526D84'],
      ['Brand', 34, 1, 0, 10, '1468C3'],
      ['BrandTagline', 15, 1, 0, 65, '526D84'],
      ['Pupil', 22, 0, 100, 70, '17324D'],
      ['Meta', 19, 0, 0, 45, '526D84'],
      ['Instruction', 19, 0, 80, 130, '387761'],
      ['Heading2', 23, 1, 150, 55, '125596'],
      ['Writing', 22, 0, 0, 190, '17324D'],
      ['Footer', 16, 0, 0, 0, '60758A']
    ].map(([id, size, bold, before, after, color]) => `<w:style w:type="paragraph" w:styleId="${id}"${id === 'Normal' ? ' w:default="1"' : ''}><w:name w:val="${id}"/><w:pPr><w:spacing w:before="${before}" w:after="${after}" w:line="300" w:lineRule="auto"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:color w:val="${color}"/><w:sz w:val="${size}"/><w:szCs w:val="${size}"/>${bold ? '<w:b/>' : ''}</w:rPr></w:style>`).join('');

    const files = {
      '[Content_Types].xml': XML + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>',
      '_rels/.rels': XML + `<Relationships xmlns="${REL}"><Relationship Id="rId1" Type="${OFFICE}officeDocument" Target="word/document.xml"/></Relationships>`,
      'word/_rels/document.xml.rels': XML + `<Relationships xmlns="${REL}"><Relationship Id="rId1" Type="${OFFICE}styles" Target="styles.xml"/><Relationship Id="rId2" Type="${OFFICE}footer" Target="footer1.xml"/>${imageRels.join('')}</Relationships>`,
      'word/styles.xml': XML + `<w:styles xmlns:w="${W}"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:lang w:val="vi-VN"/></w:rPr></w:rPrDefault></w:docDefaults>${styles}</w:styles>`,
      'word/document.xml': XML + `<w:document xmlns:w="${W}" xmlns:r="${OFFICE.slice(0, -1)}" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>${body.join('')}<w:sectPr><w:footerReference w:type="default" r:id="rId2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="850" w:right="850" w:bottom="760" w:left="850" w:header="340" w:footer="340"/></w:sectPr></w:body></w:document>`,
      'word/footer1.xml': XML + `<w:ftr xmlns:w="${W}"><w:p><w:pPr><w:pStyle w:val="Footer"/><w:jc w:val="center"/></w:pPr>${wordRun(`© ${new Date().getFullYear()} iMath.vn · Bản quyền thuộc iMath · Học Toán thật vui · Trang `)}<w:fldSimple w:instr="PAGE"><w:r><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>`,
      ...imageFiles
    };
    return zip(files);
  }

  async function downloadWord() {
    const button = $('export-word');
    try {
      button.disabled = true;
      const snapshot = getSnapshot();
      const settings = options();
      notify('Đang chuẩn bị file Word (.docx) kèm hình ảnh...');
      const blob = await createDocx(snapshot, settings);
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${safeFilename(settings.title)}.docx`;
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1500);
      notify('Đã tạo file Word (.docx) thành công.');
    } catch (error) {
      notify(`Không thể xuất Word: ${error.message}`, true);
    } finally {
      button.disabled = false;
    }
  }

  if (typeof window !== 'undefined') {
    window.IMathVisualGeometryExport = {
      createDocx,
      zip,
      options,
      preparePrint
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    $('export-print').addEventListener('click', preparePrint);
    $('export-word').addEventListener('click', downloadWord);
    window.addEventListener('afterprint', () => { document.title = previousTitle; });
  });
}());
