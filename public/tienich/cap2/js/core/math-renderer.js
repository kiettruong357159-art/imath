/**
 * math-renderer.js
 * Tiện ích: Toán Cấp 2 trực quan - iMath
 * Định dạng hiển thị công thức toán học cấp 2 (phân số, căn thức, số mũ, hệ thức)
 */

import katex from '../../vendor/katex/katex.mjs';

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c]));
}

/**
 * Tách công thức $...$ trước khi escape phần chữ thường.
 */
export function formatMathText(text) {
  if (text == null || text === '') return '';
  return String(text).split(/(\$[^$]*\$)/g).map(part => {
    if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
      return katex.renderToString(part.slice(1, -1), { throwOnError: false });
    }
    return escapeHtml(part);
  }).join('');
}

// Dấu ~ ngoài công thức là dấu ngắt ý của dữ liệu cũ, không phải ký hiệu toán.
export function solutionLines(value) {
  return String(value ?? '').split(/(\$[^$]*\$)/g)
    .map(part => part.startsWith('$') ? part : part.replace(/~/g, '\n'))
    .join('').split(/\r?\n/).map(line => line.trim()).filter(Boolean);
}

// Chỉ nhãn Bước n: in đậm; tên bước và nội dung giữ chữ thường.
export function formatSolutionText(value) {
  return solutionLines(value).map(line => {
    const match = line.match(/^(Bước \d+:)([\s\S]*)$/);
    if (match) {
      return '<p class="solution-step-title"><strong>' + formatMathText(match[1]) + '</strong> ' + formatMathText(match[2].trim()) + '</p>';
    }
    return '<p>' + formatMathText(line) + '</p>';
  }).join('');
}

export default { formatMathText, formatSolutionText, solutionLines, escapeHtml };
