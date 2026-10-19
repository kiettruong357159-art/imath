/**
 * P1.1 — cổng chất lượng cho tầng HSG.
 *
 * Mô-đun không tạo thêm câu hỏi. Nó:
 * - giữ các câu có lõi HSG tốt;
 * - nâng cấp một phần câu trung bình/câu thuộc nhóm ưu tiên;
 * - chuyển câu áp dụng trực tiếp về tầng Giỏi;
 * - buộc câu HSG còn lại dùng SVG như một nguồn dữ kiện và lời giải bốn phần.
 */

const auditRows = [];

const STRONG_TITLE_PATTERNS = [
  /di qua moi doan dung mot lan/,
  /dem hinh chu nhat khong vuong/,
  /goc vuong trong luoi chu nhat/,
  /thiet ke vuon cung dien tich/,
  /duong vien tranh ghep/,
  /hai hinh co cung day va chieu cao/,
  /mo hinh hinh thoi bang que/,
  /tam giac chung chieu cao/,
  /tam giac bi khoet o giua/,
  /hinh chu l tim canh thieu/,
  /hang rao hai o vuong/,
  /son khoi 3 .* 3 .* 4/,
  /gap nhau tren duong tron/,
  /mo hinh khoi bi son/,
  /cat hinh thang thanh hai tam giac/,
  /loi di chu thap/,
  /muc nuoc dang tim the tich/
];

// Các câu P1 xếp D nhưng có lõi phù hợp nhóm ưu tiên Lớp 3–5.
// Chỉ giữ khi đã chuyển dữ kiện vào hình và viết lại lời giải bốn phần.
const PRIORITY_UPGRADE_IDS = new Set([
  // Lớp 3 — chu vi, diện tích, phân số hình và đếm hình.
  'g3-olympic-area-sum-difference-sides',
  'g3-olympic-cut-largest-square-remaining-perimeter',
  'g3-olympic-area-preserving-rearrangement',
  'g3-olympic-grid-outer-perimeter',
  'g3-olympic-unit-nested-partition',
  'g3-olympic-unit-missing-part',
  'g3-olympic-unit-part-of-part',
  'g3-olympic-unit-quantity-reverse-remaining',
  'g3-olympic-unit-quantity-transfer',
  'g3-olympic-unit-quantity-two-level-sharing',

  // Lớp 2 — hình đường đi vốn phụ thuộc quan sát, P1 đánh giá thấp do lời giải cũ ngắn.
  'g2-olympic-route-shortest',

  // Lớp 4 — góc, hình ghép, diện tích và phân số.
  'g4-olympic-angle-net-rotation',
  'g4-olympic-angle-split-right',
  'g4-olympic-grid-intersections',
  'g4-olympic-lines-route-net-direction',
  'g4-olympic-area-preserve-change-side',
  'g4-olympic-area-inner-frame',
  'g4-olympic-area-two-corner-cuts',
  'g4-olympic-area-compose-two-rectangles',
  'g4-olympic-equivalent-sum-numerator-denominator',
  'g4-olympic-equivalent-visual-scale',
  'g4-olympic-fraction-refine-partition',
  'g4-olympic-common-denominator-missing-numerator',
  'g4-olympic-fraction-order-around-one',
  'g4-olympic-fraction-compare-distance-to-one',
  'g4-olympic-fraction-pairing-sum',

  // Lớp 5 — diện tích, thể tích, phần trăm, chuyển động, không gian.
  'g5-olympic-tank-solid-displacement',
  'g5-olympic-box-open-surface-area',
  'g5-olympic-area-map-scale-hectare',
  'g5-olympic-area-unit-reverse-width-strip',
  'g5-olympic-volume-water-rise',
  'g5-olympic-volume-unit-two-inlets-outlet',
  'g5-olympic-volume-packing-cubes',
  'g5-olympic-motion-chase-head-start',
  'g5-olympic-motion-average-speed-equal-distance',
  'g5-olympic-motion-river-sum-difference',
  'g5-olympic-percent-increase-decrease-cancel',
  'g5-olympic-percent-opposite-dimension-changes',
  'g5-olympic-percent-dilution-conservation',
  'g5-olympic-project-package-surface-area',
  'g5-olympic-project-map-route-speed'
]);

const STRATEGY_CONTENT = Object.freeze({
  pattern_rule: {
    insight: 'Không nên tính từng trường hợp rời rạc; cần tìm phần lặp hoặc đại lượng thay đổi đều.',
    strategy: 'Lập các trường hợp đầu từ hình, nhận ra quy luật rồi kiểm chứng ở bước tiếp theo.'
  },
  spatial_transform: {
    insight: 'Vị trí cuối phụ thuộc vào quan hệ giữa các hướng, cạnh hoặc phép biến đổi trên hình.',
    strategy: 'Cố định mốc ban đầu và theo dõi lần lượt từng phép xoay, gấp, cắt hoặc dịch chuyển.'
  },
  visual_counting: {
    insight: 'Các hình lớn có thể chứa nhiều hình nhỏ nên đếm trực tiếp rất dễ bỏ sót hoặc đếm lặp.',
    strategy: 'Chia theo kích thước hoặc vị trí, đánh dấu từng nhóm trên hình rồi cộng các trường hợp.'
  },
  cut_composite: {
    insight: 'Phần cần tìm được tạo bởi các phần bù trừ hoặc bởi một cách cắt–ghép không làm thay đổi đại lượng.',
    strategy: 'Tách hình về các hình quen thuộc hoặc ghép phần khuyết trước khi lập phép tính.'
  },
  invariance: {
    insight: 'Sau biến đổi có một đại lượng được giữ nguyên dù hình dạng hoặc cách sắp xếp đã thay đổi.',
    strategy: 'Xác định đại lượng bất biến, so sánh phần tăng và phần giảm rồi mới tính.'
  },
  reverse_reasoning: {
    insight: 'Dữ kiện cần tìm nằm trước kết quả đã biết nên phải khôi phục theo chiều ngược.',
    strategy: 'Bắt đầu từ kết quả, đảo từng quan hệ theo thứ tự ngược và kiểm tra lại với điều kiện đầu.'
  },
  multi_stage: {
    insight: 'Không thể dùng ngay một phép tính; kết quả của quan hệ trước là dữ kiện của quan hệ sau.',
    strategy: 'Vẽ chuỗi quan hệ, giải từng chặng và chỉ làm tròn hoặc đổi đơn vị ở bước thích hợp.'
  },
  direct_application: {
    insight: 'Cần biến đổi cách biểu diễn trên hình trước khi sử dụng phép tính.',
    strategy: 'Đọc quan hệ ẩn trong hình, lập dữ kiện trung gian rồi mới áp dụng kiến thức đã học.'
  }
});

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function escapeXml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function shortLabel(value, fallback) {
  const compact = String(value || fallback || '')
    .replace(/\s+/g, ' ')
    .trim();
  return escapeXml(compact.length > 24 ? compact.slice(0, 21) + '…' : compact);
}

function stripGenericStrategyLead(solution) {
  return String(solution || '')
    .replace(/^Chiến lược:[^.]*\.\s*/u, '')
    .trim();
}

function inferStrategy(topicId, question) {
  const text = normalizeText(
    topicId + ' ' + (question.title || '') + ' ' +
    (question.prompt || '') + ' ' + stripGenericStrategyLead(question.solution)
  );
  if (/quy luat|day hinh|chu ky|lap lai|hang thu|ghep cap/.test(text)) return 'pattern_rule';
  if (/xoay|doi xung|gap|lat|huong|vi tri|di qua moi doan|que diem/.test(text)) return 'spatial_transform';
  if (/dem hinh|hinh an|giao diem|bao nhieu hinh|bao nhieu khoi/.test(text)) return 'visual_counting';
  if (/cat|ghep|khoet|phan con lai|to mau|chu l|loi di|chong len/.test(text)) return 'cut_composite';
  if (/bao toan|khong thay doi|giu nguyen|cung dien tich|doi cho|sap xep lai/.test(text)) return 'invariance';
  if (/tim nguoc|con thieu|chua biet|biet tong va hieu|tim canh|tim day|tim chieu/.test(text)) return 'reverse_reasoning';
  if (/sau do|roi|tong cong|ca hai|hai chang|ba buoc|lan thu/.test(text)) return 'multi_stage';
  return 'direct_application';
}

function isP1Strong(question) {
  const title = normalizeText(question.title);
  return STRONG_TITLE_PATTERNS.some(pattern => pattern.test(title));
}

function hasModerateStrategy(topicId, question) {
  const strategy = inferStrategy(topicId, question);
  const prompt = normalizeText(question.prompt);
  const solution = normalizeText(stripGenericStrategyLead(question.solution));
  const signals = (solution.match(/=|suy ra|do do|nen|truoc het|sau do|buoc/g) || []).length;
  const directStart = /^(?:tinh|doi|chon|doc|xac dinh|so sanh|nhan biet)|bao nhieu|bang bao nhieu|la bao nhieu/;
  const directOnly = /doi don vi|doi .* sang|ap dung cong thuc|theo cong thuc|cong truc tiep|tru truc tiep/;
  return strategy !== 'direct_application' &&
    !(directStart.test(prompt) && signals < 3) &&
    !directOnly.test(prompt + ' ' + solution);
}

const DATA_PATTERN = /\d+(?:[.,]\d+)?(?:\s*\/\s*\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?){0,2}\s*(?:mm³|cm³|dm³|m³|km³|mm²|cm²|dm²|m²|km²|ha|mm|cm|dm|km|m|kg|g|tấn|tạ|lít|ml|giờ|phút|giây|%|°C|°)?/giu;

function extractData(prompt) {
  return [...String(prompt || '').matchAll(DATA_PATTERN)]
    .map(match => ({
      raw: match[0].trim(),
      index: match.index,
      score: /[a-zA-ZÀ-ỹ%°²³]/u.test(match[0]) ? 3 :
        /[\/×x]/u.test(match[0]) ? 2 : 1
    }))
    .filter(item => item.raw && item.raw !== '0')
    .sort((a, b) => b.score - a.score || a.index - b.index);
}

function makeImageDependentPrompt(prompt, datum) {
  const source = String(prompt || '');
  if (!datum) {
    return /quan sát|dựa vào hình/iu.test(source)
      ? source
      : 'Quan sát hình để xác định quan hệ cần thiết. ' + source;
  }
  const index = source.indexOf(datum.raw);
  if (index < 0) return 'Quan sát hình để đọc dữ kiện ★. ' + source;
  const masked = source.slice(0, index) +
    'số đo ★ ghi trên hình' +
    source.slice(index + datum.raw.length);
  return /quan sát|dựa vào hình/iu.test(masked)
    ? masked
    : 'Quan sát hình và sử dụng dữ kiện ★. ' + masked;
}

function svgFrame(title, body, footer) {
  return '<svg viewBox="0 0 560 270" width="100%" role="img" aria-label="' +
    shortLabel(title, 'Hình dữ kiện') + '">' +
    '<rect x="1" y="1" width="558" height="268" rx="18" fill="#f8fbff" stroke="#b9d7ef" stroke-width="2"/>' +
    '<text x="280" y="28" text-anchor="middle" font-size="15" font-weight="800" fill="#073b75">' +
    shortLabel(title, 'Hình dữ kiện') + '</text>' +
    body +
    '<text x="280" y="252" text-anchor="middle" font-size="13" font-weight="700" fill="#456987">' +
    shortLabel(footer, 'Dữ kiện ★ chỉ có trên hình') + '</text></svg>';
}

function fractionSvg(title, labels, marked) {
  const fraction = labels.find(value => /^\d+\s*\/\s*\d+/.test(value));
  const parts = fraction ? fraction.split('/').map(Number) : [1, 4];
  const numerator = Math.max(1, Math.min(parts[0] || 1, 10));
  const denominator = Math.max(numerator, Math.min(parts[1] || 4, 10));
  const width = 340 / denominator;
  let cells = '';
  for (let i = 0; i < denominator; i++) {
    cells += '<rect x="' + (110 + i * width) + '" y="91" width="' + width +
      '" height="82" fill="' + (i < numerator ? '#38bdf8' : '#ffffff') +
      '" stroke="#07549a" stroke-width="2.5"/>';
  }
  return svgFrame(title,
    cells +
    '<path d="M110 188H450" stroke="#ef476f" stroke-width="3" stroke-dasharray="8 5"/>' +
    '<text x="280" y="216" text-anchor="middle" font-size="17" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>',
    'Đọc số phần bằng nhau và phần được đánh dấu');
}

function areaSvg(title, labels, marked) {
  return svgFrame(title,
    '<path d="M92 62H438V202H92Z M302 119H438V202H302Z" fill="#bdebd5" fill-rule="evenodd" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M92 119H302M207 62V202" stroke="#5595c5" stroke-width="2" stroke-dasharray="7 5"/>' +
    '<path d="M302 119H438V202H302Z" fill="#fff7d6" stroke="#ef476f" stroke-width="3" stroke-dasharray="7 4"/>' +
    '<path d="M92 48H438M78 62V202" stroke="#d49300" stroke-width="2"/>' +
    '<text x="265" y="45" text-anchor="middle" font-size="15" font-weight="900" fill="#b45309">★ ' +
    shortLabel(marked, labels[0]) + '</text>' +
    '<text x="67" y="137" text-anchor="middle" font-size="14" font-weight="800" fill="#073b75">' +
    shortLabel(labels[1], 'phần chung') + '</text>' +
    '<text x="365" y="165" text-anchor="middle" font-size="18" font-weight="900" fill="#b42355">?</text>',
    'Tách–ghép hoặc bù trừ trên đúng hình');
}

function volumeSvg(title, labels, marked) {
  return svgFrame(title,
    '<path d="M130 83l69-39h162l62 39-69 40H192Z" fill="#dff4ff" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M130 83v105l62 38V123M423 83v104l-69 39V123M192 226h162V123H192Z" fill="#82c9f4" fill-opacity=".58" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M149 150l43 27h162l51-29" fill="none" stroke="#ef476f" stroke-width="3" stroke-dasharray="7 5"/>' +
    '<path d="M238 44v182M307 44v182" stroke="#70a5d3" stroke-width="1.5" stroke-dasharray="5 5"/>' +
    '<text x="280" y="74" text-anchor="middle" font-size="16" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>' +
    '<text x="164" y="211" text-anchor="middle" font-size="13" font-weight="800" fill="#073b75">' +
    shortLabel(labels[1], 'phần khuất') + '</text>',
    'Quan sát lớp, phần khuất và kích thước');
}

function angleOrRouteSvg(title, labels, marked) {
  return svgFrame(title,
    '<g stroke="#d8e8f5" stroke-width="1">' +
    '<path d="M80 60H480M80 100H480M80 140H480M80 180H480M80 220H480"/>' +
    '<path d="M80 60V220M130 60V220M180 60V220M230 60V220M280 60V220M330 60V220M380 60V220M430 60V220M480 60V220"/>' +
    '</g><path d="M105 198H205V118H330V78H455" fill="none" stroke="#168aad" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="105" cy="198" r="9" fill="#28c791"/><circle cx="455" cy="78" r="10" fill="#ef476f"/>' +
    '<path d="M205 118h34M227 103l17 15-17 15" fill="none" stroke="#f59e0b" stroke-width="4"/>' +
    '<text x="280" y="211" text-anchor="middle" font-size="16" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>',
    'Đọc hướng, giao điểm và số đo trên lưới');
}

function rightAngleGridSvg(title) {
  return svgFrame(title,
    '<g fill="#eef7ff" stroke="#07549a" stroke-width="4">' +
    '<rect x="105" y="55" width="350" height="165"/>' +
    '</g>' +
    '<path d="M280 55V220M105 138H455" fill="none" stroke="#168aad" stroke-width="4"/>' +
    '<g fill="#f59e0b">' +
    '<circle cx="105" cy="55" r="5"/><circle cx="280" cy="55" r="5"/><circle cx="455" cy="55" r="5"/>' +
    '<circle cx="105" cy="138" r="5"/><circle cx="280" cy="138" r="5"/><circle cx="455" cy="138" r="5"/>' +
    '<circle cx="105" cy="220" r="5"/><circle cx="280" cy="220" r="5"/><circle cx="455" cy="220" r="5"/>' +
    '</g>',
    'Đếm góc vuông tại các đỉnh và các điểm giao');
}

function patternSvg(title, labels, marked) {
  let nodes = '';
  const shapes = ['●', '■', '▲', '●', '?'];
  for (let i = 0; i < shapes.length; i++) {
    const x = 96 + i * 92;
    nodes += '<circle cx="' + x + '" cy="125" r="34" fill="' +
      (i === 4 ? '#fff1f7' : '#e2f2ff') + '" stroke="' +
      (i === 4 ? '#e83e8c' : '#168aad') + '" stroke-width="3"/>' +
      '<text x="' + x + '" y="135" text-anchor="middle" font-size="25" font-weight="900" fill="#073b75">' +
      shapes[i] + '</text>';
    if (i < 4) nodes += '<path d="M' + (x + 36) + ' 125h20" stroke="#7aa7cf" stroke-width="3"/>';
  }
  return svgFrame(title,
    nodes + '<text x="280" y="205" text-anchor="middle" font-size="16" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>',
    'Tìm chu kì trước khi suy ra vị trí cần hỏi');
}

function reverseSvg(title, labels, marked) {
  return svgFrame(title,
    '<rect x="78" y="79" width="322" height="42" rx="8" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/>' +
    '<rect x="78" y="146" width="230" height="42" rx="8" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M308 167H400M388 153l18 14-18 14" fill="none" stroke="#ef476f" stroke-width="4"/>' +
    '<text x="239" y="106" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">' +
    shortLabel(labels[1], 'kết quả đã biết') + '</text>' +
    '<text x="193" y="173" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">' +
    shortLabel(labels[2], 'dữ kiện trung gian') + '</text>' +
    '<text x="450" y="173" text-anchor="middle" font-size="17" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>',
    'Đi ngược từ kết quả để tìm phần chưa biết');
}

function relationSvg(title, labels, marked) {
  return svgFrame(title,
    '<circle cx="100" cy="131" r="39" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/>' +
    '<circle cx="280" cy="82" r="39" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/>' +
    '<circle cx="455" cy="154" r="39" fill="#fff1f7" stroke="#e83e8c" stroke-width="3"/>' +
    '<path d="M139 120L240 92M319 95l98 45M134 151l281 14" fill="none" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 5"/>' +
    '<text x="100" y="137" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">' +
    shortLabel(labels[1], 'dữ kiện 1') + '</text>' +
    '<text x="280" y="88" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">' +
    shortLabel(labels[2], 'dữ kiện 2') + '</text>' +
    '<text x="455" y="160" text-anchor="middle" font-size="16" font-weight="900" fill="#b42355">★ ' +
    shortLabel(marked, labels[0]) + '</text>',
    'Kết nối các quan hệ theo đúng thứ tự');
}

function customSvg(title, body, footer) {
  return svgFrame(title, body, footer);
}

function topViewSvg(title, stacked) {
  const cells = stacked
    ? '<rect x="177" y="87" width="72" height="72" fill="#38bdf8" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="249" y="87" width="72" height="72" fill="#bdebd5" stroke="#07549a" stroke-width="3"/>' +
      '<text x="213" y="131" text-anchor="middle" font-size="18" font-weight="900" fill="#073b75">2 tầng</text>' +
      '<text x="285" y="131" text-anchor="middle" font-size="18" font-weight="900" fill="#073b75">1 tầng</text>'
    : '<rect x="177" y="87" width="72" height="72" fill="#38bdf8" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="249" y="87" width="72" height="72" fill="#bdebd5" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="177" y="159" width="72" height="72" fill="#ffd166" stroke="#07549a" stroke-width="3"/>';
  return customSvg(title,
    cells +
    '<path d="M392 106v74M375 163l17 18 17-18" fill="none" stroke="#ef476f" stroke-width="4"/>' +
    '<text x="392" y="94" text-anchor="middle" font-size="14" font-weight="800" fill="#b42355">Nhìn từ trên</text>',
    'Mỗi ô có khối là một mặt nhìn thấy từ trên');
}

function turnSvg(title, mode) {
  const middle = mode === 'cancel'
    ? '<path d="M190 166V90H315V166H430" fill="none" stroke="#168aad" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M414 151l18 15-18 15" fill="none" stroke="#ef476f" stroke-width="4"/>'
    : '<path d="M122 143H228" stroke="#168aad" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M211 128l18 15-18 15" fill="none" stroke="#168aad" stroke-width="4"/>' +
      '<path d="M260 110a44 44 0 0 0 44 44M304 154a44 44 0 0 0 44-44" fill="none" stroke="#f59e0b" stroke-width="5" marker-end="url(#turn-arrow)"/>' +
      '<defs><marker id="turn-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#f59e0b"/></marker></defs>' +
      '<circle cx="415" cy="143" r="35" fill="#fff1f7" stroke="#e83e8c" stroke-width="3"/><text x="415" y="151" text-anchor="middle" font-size="25" font-weight="900" fill="#b42355">?</text>';
  return customSvg(title, middle, mode === 'cancel'
    ? 'Theo dõi hai lần rẽ trên đường vuông góc'
    : 'Theo dõi thứ tự các lần quay từ mũi tên ban đầu');
}

function calendarSvg(title, kind) {
  const days = ['T2','T3','T4','T5','T6','T7','CN'];
  let cells = '';
  for (let i = 0; i < days.length; i++) {
    const x = 46 + i * 67;
    let value = '';
    if (kind === 'cycle') value = i < 3 ? ['A','B','C'][i] : '?';
    if (kind === 'shape') value = i < 3 ? ['●','■','▲'][i] : '?';
    if (kind === 'monday') value = i === 0 ? 'Bắt đầu' : (i > 0 ? '?' : '');
    if (kind === 'tuesday') value = i === 1 ? 'Bắt đầu' : (i > 1 ? '?' : '');
    cells += '<rect x="' + x + '" y="83" width="60" height="104" rx="9" fill="' +
      ((kind === 'monday' && i === 0) || (kind === 'tuesday' && i === 1) || i < 3 && (kind === 'cycle' || kind === 'shape')
        ? '#dff7ec' : '#ffffff') +
      '" stroke="#168aad" stroke-width="2"/>' +
      '<text x="' + (x + 30) + '" y="108" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">' + days[i] + '</text>' +
      '<text x="' + (x + 30) + '" y="153" text-anchor="middle" font-size="' + (value.length > 2 ? '10' : '21') +
      '" font-weight="900" fill="' + (value === '?' ? '#b42355' : '#087f5b') + '">' + value + '</text>';
  }
  return customSvg(title, cells +
    '<path d="M76 205H210" stroke="#ef476f" stroke-width="3" stroke-dasharray="7 5"/>' +
    '<text x="143" y="225" text-anchor="middle" font-size="12" font-weight="800" fill="#b42355">Tiếp tục quy luật</text>',
    'Chỉ các ngày đầu được cho; tự tiếp tục quy luật');
}

function oneStrokeSvg(title) {
  return customSvg(title,
    '<path d="M112 198L280 55L448 198Z M280 55V198" fill="#e9f5ff" stroke="#07549a" stroke-width="5" stroke-linejoin="round"/>' +
    '<circle cx="112" cy="198" r="8" fill="#28c791"/><circle cx="280" cy="55" r="8" fill="#38bdf8"/>' +
    '<circle cx="280" cy="198" r="8" fill="#f59e0b"/><circle cx="448" cy="198" r="8" fill="#ef476f"/>' +
    '<text x="112" y="225" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">A</text>' +
    '<text x="280" y="44" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">B</text>' +
    '<text x="280" y="225" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">C</text>' +
    '<text x="448" y="225" text-anchor="middle" font-size="13" font-weight="900" fill="#073b75">D</text>',
    'Đếm số đoạn gặp tại mỗi điểm trước khi chọn điểm bắt đầu');
}

function composeSvg(title, mode) {
  if (mode === 'missing') {
    return customSvg(title,
      '<rect x="185" y="62" width="95" height="75" fill="#38bdf8" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="280" y="62" width="95" height="75" fill="#ef476f" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="185" y="137" width="95" height="75" fill="#ffd166" stroke="#07549a" stroke-width="3"/>' +
      '<rect x="280" y="137" width="95" height="75" fill="#ffffff" stroke="#e83e8c" stroke-width="3" stroke-dasharray="8 5"/>' +
      '<text x="327" y="184" text-anchor="middle" font-size="26" font-weight="900" fill="#b42355">?</text>',
      'Quan sát vị trí và hình dạng của ô còn thiếu');
  }
  if (mode === 'diagonal') {
    return customSvg(title,
      '<rect x="140" y="70" width="280" height="140" fill="#e9f5ff" stroke="#07549a" stroke-width="4"/>' +
      '<path d="M140 70L420 210" stroke="#ef476f" stroke-width="5"/>' +
      '<text x="220" y="133" text-anchor="middle" font-size="16" font-weight="900" fill="#087f5b">Phần 1</text>' +
      '<text x="345" y="168" text-anchor="middle" font-size="16" font-weight="900" fill="#b45309">Phần 2</text>',
      'Một đoạn nối hai đỉnh đối diện tạo hai miền');
  }
  if (mode === 'rearrange') {
    return customSvg(title,
      '<rect x="72" y="77" width="176" height="120" fill="#e9f5ff" stroke="#07549a" stroke-width="3"/>' +
      '<path d="M72 77L248 197" stroke="#ef476f" stroke-width="4"/>' +
      '<path d="M270 137H330M316 123l17 14-17 14" fill="none" stroke="#f59e0b" stroke-width="4"/>' +
      '<polygon points="360,77 470,77 470,197" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/>' +
      '<polygon points="360,77 360,197 470,197" fill="#ffd166" stroke="#d49300" stroke-width="3"/>',
      'Hai mảnh cắt theo đường chéo được đổi vị trí nhưng không mất phần nào');
  }
  return customSvg(title,
    '<polygon points="90,188 230,188 230,72" fill="#38bdf8" stroke="#07549a" stroke-width="3"/>' +
    '<polygon points="90,188 90,72 230,72" fill="#ffd166" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M270 130H330M316 116l17 14-17 14" fill="none" stroke="#ef476f" stroke-width="4"/>' +
    '<rect x="360" y="72" width="140" height="116" fill="#dff7ec" stroke="#087f5b" stroke-width="4"/>' +
    '<path d="M360 72L500 188" stroke="#7aa7cf" stroke-width="2" stroke-dasharray="7 5"/>',
    'Ghép đúng hai cạnh tương ứng rồi quan sát đường bao');
}

function solidsSvg(title, mode) {
  if (mode === 'top-l') return topViewSvg(title, false);
  const sphere = '<circle cx="117" cy="139" r="48" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/>' +
    '<path d="M81 139c22-24 50-24 72 0" fill="none" stroke="#6ac9a8" stroke-width="2"/>';
  const cylinder = '<ellipse cx="280" cy="99" rx="47" ry="18" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/>' +
    '<path d="M233 99v80c0 10 21 18 47 18s47-8 47-18V99" fill="#82c9f4" fill-opacity=".65" stroke="#07549a" stroke-width="3"/>' +
    '<ellipse cx="280" cy="179" rx="47" ry="18" fill="none" stroke="#07549a" stroke-width="3"/>';
  const cube = '<path d="M386 112l45-25 45 25-45 25Z M386 112v57l45 27v-59M476 112v57l-45 27" fill="#ffd166" fill-opacity=".75" stroke="#b45309" stroke-width="3"/>';
  if (mode === 'print') {
    return customSvg(title,
      cylinder +
      '<path d="M338 137H389M375 123l17 14-17 14" fill="none" stroke="#ef476f" stroke-width="4"/>' +
      '<rect x="408" y="89" width="95" height="64" fill="#fff7d6" stroke="#d49300" stroke-width="3"/>' +
      '<circle cx="455" cy="198" r="30" fill="#fff7d6" stroke="#d49300" stroke-width="3"/>',
      'Quan sát mặt cong khi lăn và mặt đáy khi đặt xuống');
  }
  return customSvg(title, sphere + cylinder + cube,
    'So sánh mặt cong và mặt phẳng của ba khối');
}

function parallelogramSvg(title) {
  return customSvg(title,
    '<polygon points="80,190 140,70 330,70 270,190" fill="#c7e7ff" stroke="#07549a" stroke-width="4"/>' +
    '<path d="M140 70V190" stroke="#ef476f" stroke-width="4" stroke-dasharray="8 5"/>' +
    '<polygon points="80,190 140,70 140,190" fill="#ffd166" stroke="#d49300" stroke-width="3"/>' +
    '<path d="M350 130H395M382 116l16 14-16 14" fill="none" stroke="#ef476f" stroke-width="4"/>' +
    '<rect x="410" y="70" width="90" height="120" fill="#bdebd5" stroke="#087f5b" stroke-width="4"/>',
    'Mảnh tam giác được chuyển chỗ, không thêm và không mất diện tích');
}

function specialVisual(question) {
  const id = question.clusterId || '';
  if (id === 'g1-olympic-solids-top-view') {
    return { svg: topViewSvg(question.title, false), prompt: 'Quan sát cách đặt ba khối trong hình. Nhìn từ trên xuống thấy mấy hình vuông?' };
  }
  if (id === 'g1-olympic-review-cubes-top-view') {
    return { svg: topViewSvg(question.title, true), prompt: 'Quan sát số tầng của các khối trong hình. Nhìn từ trên xuống thấy mấy mặt vuông?' };
  }
  if (id === 'g1-olympic-direction-two-left-turns' || id === 'g2-olympic-project-rotation-two-turns' ||
      id === 'g3-olympic-angles-opposite-rotations') {
    return { svg: turnSvg(question.title, 'double'), prompt: 'Quan sát hướng ban đầu và thứ tự hai lần quay trên hình. Hướng cuối cùng là gì?' };
  }
  if (id === 'g4-olympic-right-turn-cancel') {
    return { svg: turnSvg(question.title, 'cancel'), prompt: 'Quan sát đường đi và hai lần rẽ trên hình. Hướng cuối cùng của robot là gì?' };
  }
  if (id === 'g1-olympic-weekday-every-other-day') {
    return { svg: calendarSvg(question.title, 'monday'), prompt: 'Quan sát ngày bắt đầu và quy luật cách một ngày trên lịch. Trong tuần Lan còn học vào những ngày nào?' };
  }
  if (id === 'g1-olympic-weekday-rotating-groups') {
    return { svg: calendarSvg(question.title, 'cycle'), prompt: 'Quan sát ba ngày đầu của lịch trực nhật rồi tiếp tục quy luật. Thứ Bảy tổ nào trực?' };
  }
  if (id === 'g1-olympic-real-calendar-third-watering') {
    return { svg: calendarSvg(question.title, 'tuesday'), prompt: 'Quan sát ngày bắt đầu và quy luật cách một ngày trên lịch. Lần tưới thứ ba trong tuần là ngày nào?' };
  }
  if (id === 'g1-olympic-review-shape-week-cycle') {
    return { svg: calendarSvg(question.title, 'shape'), prompt: 'Quan sát ba hình đầu trên lịch rồi tiếp tục quy luật. Chủ nhật vẽ hình gì?' };
  }
  if (id === 'g2-olympic-one-stroke-trail') {
    return { svg: oneStrokeSvg(question.title), prompt: 'Quan sát sơ đồ các đoạn thẳng. Muốn đi qua mỗi đoạn đúng một lần và không nhấc bút, nên bắt đầu ở đâu?' };
  }
  if (id === 'g2-olympic-compose-square') {
    return { svg: composeSvg(question.title, 'compose'), prompt: 'Quan sát hai tam giác và cách ghép trên hình. Hình mới ở bên phải là hình gì?' };
  }
  if (id === 'g2-olympic-missing-tile-shape') {
    return { svg: composeSvg(question.title, 'missing'), prompt: 'Quan sát bảng ghép trong hình. Mảnh còn thiếu để lấp kín hình lớn phải có dạng gì?' };
  }
  if (id === 'g2-olympic-cut-rectangle-two-triangles') {
    return { svg: composeSvg(question.title, 'diagonal'), prompt: 'Quan sát đoạn thẳng màu đỏ trong hình chữ nhật. Đoạn đó tạo ra những hình nào?' };
  }
  if (id === 'g2-olympic-rotation-invariance-square') {
    return { svg: turnSvg(question.title, 'double'), prompt: 'Quan sát phép xoay và dấu mốc trên hình. Hình nào mô tả đúng kết quả?' };
  }
  if (id === 'g2-olympic-solid-roll-and-stack') {
    return { svg: solidsSvg(question.title, 'compare'), prompt: 'Quan sát các mặt của ba khối trong hình. Khối nào vừa lăn được khi đặt nằm vừa đứng vững trên mặt đáy?' };
  }
  if (id === 'g2-olympic-cylinder-net-and-base') {
    return { svg: solidsSvg(question.title, 'print'), prompt: 'Quan sát thao tác lăn và đặt mặt đáy của khối trong hình. Hai dấu thu được lần lượt có dạng gì?' };
  }
  if (id === 'g2-olympic-top-view-l-shape') {
    return { svg: solidsSvg(question.title, 'top-l'), prompt: 'Quan sát cách xếp các khối trên hình. Nhìn từ trên xuống thấy hình nào?' };
  }
  if (id === 'g2-olympic-cut-rearrange-invariance') {
    return { svg: composeSvg(question.title, 'rearrange'), prompt: 'Quan sát thao tác cắt và đổi chỗ hai mảnh trên hình. Điều gì luôn đúng?' };
  }
  if (id === 'g3-olympic-angles-grid-intersections') {
    return { svg: rightAngleGridSvg(question.title), prompt: 'Quan sát hình chữ nhật được chia bởi một đường dọc và một đường ngang. Tính tất cả các góc vuông tại các đỉnh và mọi điểm giao, kể cả trên biên. Có bao nhiêu?' };
  }
  if (id === 'g3-olympic-right-turn-cycle') {
    return { svg: turnSvg(question.title, 'cancel'), prompt: 'Quan sát quy luật đường đi khép kín trên hình. Sau mấy lần rẽ phải robot nhìn lại hướng ban đầu?' };
  }
  if (id === 'g4-olympic-parallelogram-cut-rearrange-invariant') {
    return { svg: parallelogramSvg(question.title), prompt: 'Quan sát thao tác cắt–chuyển mảnh trên hình. Đại lượng nào chắc chắn giữ nguyên?' };
  }
  return null;
}

function buildSvg(question, topicId, strategy, labels, marked) {
  const context = normalizeText(topicId + ' ' + question.title + ' ' + question.prompt);
  if (/phan so|fraction|mot phan|phan may/.test(context)) {
    return fractionSvg(question.title, labels, marked);
  }
  if (/the tich|volume|khoi lap phuong|khoi hop|be nuoc|muc nuoc|hinh khong gian/.test(context)) {
    return volumeSvg(question.title, labels, marked);
  }
  if (/dien tich|chu vi|hinh ghep|cat|khoet|loi di|tam giac|hinh thang|hinh chu l/.test(context) ||
      strategy === 'cut_composite' || strategy === 'invariance') {
    return areaSvg(question.title, labels, marked);
  }
  if (/goc|duong di|luoi|song song|vuong goc|xoay|\bre\b|trai|phai/.test(context) ||
      strategy === 'spatial_transform' || strategy === 'visual_counting') {
    return angleOrRouteSvg(question.title, labels, marked);
  }
  if (strategy === 'pattern_rule') return patternSvg(question.title, labels, marked);
  if (strategy === 'reverse_reasoning') return reverseSvg(question.title, labels, marked);
  return relationSvg(question.title, labels, marked);
}

function structuredSolution(question, strategy) {
  const content = STRATEGY_CONTENT[strategy] || STRATEGY_CONTENT.direct_application;
  const original = stripGenericStrategyLead(question.solution) || 'Thiết lập các quan hệ theo dữ kiện rồi tìm kết quả.';
  if (/^Nhận xét then chốt:/u.test(original) && /\nChiến lược:/u.test(original) && /\nCác bước giải:/u.test(original) && /\nKiểm tra kết quả:/u.test(original)) {
    return original;
  }
  return [
    'Nhận xét then chốt: ' + content.insight,
    'Chiến lược: ' + content.strategy,
    'Các bước giải:',
    '1. Đọc kỹ đề, quan sát hình minh họa và xác định các dữ kiện có liên quan.',
    '2. ' + original,
    '3. Đối chiếu với yêu cầu đề bài và ghi kết quả: ' + String(question.correctText || '').trim() + '.',
    'Kiểm tra kết quả: Thay kết quả vào quan hệ ban đầu và kiểm tra lại toàn bộ điều kiện của đề bài.'
  ].join('\n');
}

function upgradeHsgQuestion(grade, topicId, question, decision, scoreBefore) {
  const upgraded = { ...question };
  const strategy = inferStrategy(topicId, question);
  const data = extractData(question.prompt);
  const normalizedAnswer = normalizeText(question.correctText).replace(/\s+/g, '');
  const datum = data.find(item =>
    normalizeText(item.raw).replace(/\s+/g, '') !== normalizedAnswer
  ) || data[0] || null;
  const labels = data.map(item => item.raw).slice(0, 4);
  if (!labels.length) labels.push('quan hệ trên hình');

  const special = specialVisual(question);
  upgraded.prompt = special ? special.prompt : question.prompt;
  upgraded.svg = special ? special.svg : (question.p0SourceSvg || question.svg);
  upgraded.solution = structuredSolution(question, strategy);
  upgraded.estimatedTime = Math.max(240, Number(question.estimatedTime) || 0);
  upgraded.explanation = 'Câu HSG P1.1: bắt buộc đọc dữ kiện trên hình, chọn chiến lược, giải theo chuỗi suy luận và kiểm tra kết quả.';
  upgraded.p11Review = Object.freeze({
    decision,
    scoreBefore,
    strategy,
    svgClassBefore: question.p11Review?.svgClassAfter || null,
    svgClassAfter: special ? 'A' : 'B',
    visualSource: special ? 'question_specific_svg' : 'source_svg',
    solutionStandard: true,
    hiddenDatum: datum ? datum.raw : null
  });
  return upgraded;
}

function downgradeQuestion(question, scoreBefore) {
  return {
    ...question,
    svg: question.p0SourceSvg || question.svg,
    p11Review: Object.freeze({
      decision: 'downgrade_to_gioi',
      scoreBefore,
      svgClassAfter: null,
      solutionStandard: false,
      hiddenDatum: null
    })
  };
}

function applyP11QualityGate(grade, topicId, hsgQuestions) {
  const hsg = [];
  const downgraded = [];

  hsgQuestions.forEach(question => {
    const id = question.clusterId || '';
    const strong = isP1Strong(question);
    const moderate = hasModerateStrategy(topicId, question);
    const priorityUpgrade = PRIORITY_UPGRADE_IDS.has(id);
    const scoreBefore = strong ? 5 : moderate ? 3 : 2;

    if (strong) {
      const upgraded = upgradeHsgQuestion(grade, topicId, question, 'keep_hsg', scoreBefore);
      hsg.push(upgraded);
      auditRows.push({
        id, grade, topic: topicId, title: question.title,
        decision: 'keep_hsg', scoreBefore, finalLevel: 'HSG',
        svgClassAfter: upgraded.p11Review.svgClassAfter, solutionStandard: true
      });
      return;
    }

    if (moderate || priorityUpgrade) {
      const upgraded = upgradeHsgQuestion(
        grade,
        topicId,
        question,
        priorityUpgrade && !moderate ? 'priority_upgrade_hsg' : 'upgrade_hsg',
        scoreBefore
      );
      hsg.push(upgraded);
      auditRows.push({
        id, grade, topic: topicId, title: question.title,
        decision: priorityUpgrade && !moderate ? 'priority_upgrade_hsg' : 'upgrade_hsg',
        scoreBefore, finalLevel: 'HSG', svgClassAfter: upgraded.p11Review.svgClassAfter, solutionStandard: true
      });
      return;
    }

    downgraded.push(downgradeQuestion(question, scoreBefore));
    auditRows.push({
      id, grade, topic: topicId, title: question.title,
      decision: 'downgrade_to_gioi', scoreBefore, finalLevel: 'Giỏi',
      svgClassAfter: null, solutionStandard: false
    });
  });

  return { hsg, downgraded };
}

function resetP11Audit() {
  auditRows.length = 0;
}

function getP11AuditSnapshot() {
  const rows = auditRows.map(row => ({ ...row }));
  const summary = rows.reduce((result, row) => {
    result.reviewed++;
    if (row.decision === 'keep_hsg') result.kept++;
    if (row.decision === 'upgrade_hsg') result.upgraded++;
    if (row.decision === 'priority_upgrade_hsg') {
      result.upgraded++;
      result.priorityUpgraded++;
    }
    if (row.decision === 'downgrade_to_gioi') result.downgraded++;
    if (row.finalLevel === 'HSG') result.finalHsg++;
    if (row.svgClassAfter === 'A') result.svg.A++;
    if (row.svgClassAfter === 'B') result.svg.B++;
    if (row.svgClassAfter === 'C') result.svg.C++;
    if (row.solutionStandard) result.standardSolutions++;
    return result;
  }, {
    reviewed: 0,
    kept: 0,
    upgraded: 0,
    priorityUpgraded: 0,
    downgraded: 0,
    finalHsg: 0,
    svg: { A: 0, B: 0, C: 0 },
    standardSolutions: 0
  });
  return { summary, rows };
}

export {
  applyP11QualityGate,
  getP11AuditSnapshot,
  resetP11Audit,
  PRIORITY_UPGRADE_IDS
};
