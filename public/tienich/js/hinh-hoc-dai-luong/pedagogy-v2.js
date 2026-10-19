import {
  applyP11QualityGate,
  getP11AuditSnapshot,
  resetP11Audit
} from './pedagogy-p1-1.js';

/**
 * Kiểm định và tái phân tầng P0 cho ngân hàng Hình học & Đại lượng 2.0.
 *
 * Phiên bản cũ đưa 3 câu Giỏi cuối của mỗi chủ đề sang HSG ở runtime.
 * Mô-đun này chấm lại đúng 8 ứng viên HSG cũ/chủ đề, chọn 5 câu có
 * năng lực phân loại cao nhất và trả 3 câu còn lại về tầng Giỏi.
 */

const STRATEGY_PATTERN = /cắt|ghép|phần còn lại|tìm ngược|biết[^.]{0,40}(?:chu vi|diện tích|thể tích)|không mất|thay đổi|đếm|hình ẩn|quy luật|xoay|đối xứng|trung điểm|tiếp xúc|chồng|lưới|đường chéo|tỉ lệ|cùng diện tích|chênh lệch|gấp|rẽ|khoét|sau khi|còn thừa|chia đều|ít nhất|lớn nhất|nhỏ nhất|đường viền|tổng[^.]{0,20}hiệu|nhiều bước|hai lần|ba lần|hai chặng/i;
const DIRECT_ONLY_PATTERN = /đổi\s+(?:đơn vị|\d)|(?:tính|cho)[^.]{0,40}(?:diện tích|chu vi|thể tích)[^.]{0,40}(?:hình vuông|hình chữ nhật|hình hộp|khối lập phương)|(?:bán kính|cạnh|chiều dài|chiều rộng)[^.]{0,30}(?:là|bằng)[^.]{0,15}\d[^.]{0,30}(?:tính|bao nhiêu)|(?:cộng|trừ)\s+trực tiếp/i;
const PRIORITY_PATTERN = /area|volume|percent|diện tích|thể tích|phần trăm|hình ghép|đếm hình|composite|grid|cut|count/i;
const ALLOWED_SKILLS = new Set([
  'visual_reasoning',
  'spatial_thinking',
  'pattern_recognition',
  'reverse_reasoning',
  'area_strategy',
  'geometry_problem_solving'
]);

// Hội đồng ưu tiên thủ công những bài có tải tư duy tốt hơn trong các chủ đề
// trọng điểm Lớp 3–5. Chỉ số 1–8 tương ứng tám ứng viên HSG của phiên bản cũ.
const PRIORITY_SELECTIONS = Object.freeze({
  '3/rectangle-square-measures': [4, 5, 6, 7, 8],
  '4/area': [2, 4, 5, 6, 8],
  '4/area-conversion': [4, 5, 6, 7, 8],
  '5/triangle-trapezoid-circle': [4, 5, 6, 7, 8],
  '5/area': [2, 3, 4, 6, 7],
  '5/box-cube-volume': [2, 4, 5, 6, 8],
  '5/area-units': [4, 5, 6, 7, 8],
  '5/volume-units': [2, 3, 4, 5, 8],
  '5/percent': [3, 4, 5, 7, 8]
});

const auditRows = [];

function escapeXml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function compactLabel(value, fallback) {
  const cleaned = String(value || fallback || '')
    .replace(/\s+/g, ' ')
    .replace(/[<>]/g, '')
    .trim();
  return escapeXml(cleaned.length > 32 ? `${cleaned.slice(0, 29)}…` : cleaned);
}

function countSvgShapes(svg) {
  const source = String(svg || '');
  const structural = (source.match(/<(path|polygon|polyline|circle|ellipse|line)\b/gi) || []).length;
  const rectangles = (source.match(/<rect\b/gi) || []).length;
  return structural + Math.max(0, rectangles - 1);
}

function hasMathematicalSvg(svg) {
  return /<svg\b/i.test(String(svg || '')) && countSvgShapes(svg) >= 2;
}

function inferSkill(topicId, question) {
  if (ALLOWED_SKILLS.has(question.skill)) return question.skill;
  const text = `${topicId} ${question.clusterId || ''} ${question.title || ''} ${question.prompt || ''}`.toLowerCase();
  if (/quy luật|pattern|dãy|lặp|chu kì|chu kỳ/.test(text)) return 'pattern_recognition';
  if (/tìm ngược|còn thiếu|chưa biết|find-side|find-width|find-length|find-total/.test(text)) return 'reverse_reasoning';
  if (/diện tích|chu vi|thể tích|area|perimeter|volume|phần tô|phần còn lại/.test(text)) return 'area_strategy';
  if (/xoay|đối xứng|gấp|ghép|cắt|ẩn|khối|vị trí|góc|song song|vuông góc/.test(text)) return 'spatial_thinking';
  if (/quan sát|đếm hình|đo|thước|đồng hồ|phân số|độ dài|dung tích|khối lượng/.test(text)) return 'visual_reasoning';
  return 'geometry_problem_solving';
}

function solutionStepCount(solution) {
  const text = String(solution || '');
  return Math.max(
    (text.match(/[.;:]/g) || []).length,
    (text.match(/(?:=|→|⇒|nên|suy ra|do đó|vì vậy|tiếp theo)/gi) || []).length
  );
}

function analyzeCandidate(grade, topicId, question, candidateIndex) {
  const skill = inferSkill(topicId, question);
  const fullText = `${question.title || ''} ${question.prompt || ''} ${question.solution || ''}`;
  const taskText = `${question.title || ''} ${question.prompt || ''}`;
  const hasStrategy = STRATEGY_PATTERN.test(fullText);
  const directOnly = DIRECT_ONLY_PATTERN.test(taskText) && !hasStrategy;
  const stepCount = solutionStepCount(question.solution);
  const mathematicalSvg = hasMathematicalSvg(question.svg);
  const priority = grade >= 3 && PRIORITY_PATTERN.test(`${topicId} ${fullText}`);
  let score = 0;
  if (hasStrategy) score += 5;
  if (skill !== 'visual_reasoning') score += 2;
  if (stepCount >= 2) score += 2;
  if (mathematicalSvg) score += 2;
  if (priority) score += 1;
  if (directOnly) score -= 20;

  return {
    grade,
    topicId,
    question,
    candidateIndex,
    skill,
    score,
    hasStrategy,
    directOnly,
    stepCount,
    mathematicalSvg,
    priority
  };
}

function extractPromptLabels(question) {
  const prompt = String(question.prompt || '');
  const compounds = prompt.match(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?){1,2}\s*(?:cm³|dm³|m³|cm²|dm²|m²|mm|cm|dm|km|m)?/gi) || [];
  const measures = prompt.match(/\d+(?:[.,]\d+)?(?:\s*\/\s*\d+)?\s*(?:cm³|dm³|m³|cm²|dm²|m²|mm|cm|dm|km|m|kg|g|ml|lít|giờ|phút|%|°)?/gi) || [];
  const unique = [...new Set([...compounds, ...measures].map(value => value.replace(/\s+/g, ' ').trim()))].slice(0, 3);
  return unique.length ? unique : ['Dữ kiện 1', 'Dữ kiện 2', '?'];
}

function strategyDiagram(question, topicId, skill) {
  const labels = extractPromptLabels(question).map((value, index) => compactLabel(value, `Dữ kiện ${index + 1}`));
  const l1 = labels[0] || 'Dữ kiện 1';
  const l2 = labels[1] || 'Dữ kiện 2';
  const l3 = labels[2] || '?';
  const title = compactLabel(question.title, 'Sơ đồ tư duy hình học');
  const baseStart = `<svg viewBox="0 0 520 230" width="100%" role="img" aria-label="${title}"><rect x="1" y="1" width="518" height="228" rx="16" fill="#f8fbff" stroke="#cbdff3"/><text x="260" y="27" text-anchor="middle" font-size="15" font-weight="800" fill="#073b75">Sơ đồ dữ kiện — không thể hiện đáp án</text>`;
  const baseEnd = `<text x="260" y="214" text-anchor="middle" font-size="13" font-weight="700" fill="#456987">Quan sát quan hệ trên hình trước khi tính</text></svg>`;
  const context = `${topicId} ${question.title || ''} ${question.prompt || ''}`.toLowerCase();

  if (/percent|phần trăm/.test(context)) {
    const cells = Array.from({ length: 100 }, (_, index) => {
      const x = 165 + (index % 10) * 19;
      const y = 42 + Math.floor(index / 10) * 15;
      const fill = index < 25 ? '#bae6fd' : '#ffffff';
      return `<rect x="${x}" y="${y}" width="18" height="14" fill="${fill}" stroke="#7aa7cf" stroke-width="0.7"/>`;
    }).join('');
    return `${baseStart}${cells}<path d="M126 117h27" stroke="#ef476f" stroke-width="3" marker-end="url(#p0-arrow)"/><defs><marker id="p0-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#ef476f"/></marker></defs><text x="92" y="106" text-anchor="middle" font-size="14" font-weight="800" fill="#075985">${l1}</text><text x="92" y="128" text-anchor="middle" font-size="13" font-weight="700" fill="#456987">${l2}</text>${baseEnd}`;
  }

  if (/thể tích|volume|khối lập phương|khối hộp|bể|mực nước|khối\s+\d+\s*[×x]/.test(context)) {
    return `${baseStart}<path d="M142 83l61-34 142 0 47 34-61 35-142 0Z" fill="#cdeaff" stroke="#07549a" stroke-width="3"/><path d="M142 83v83l47 32v-80M392 83v82l-61 33v-80M189 198h142V118H189Z" fill="#82c9f4" fill-opacity=".58" stroke="#07549a" stroke-width="3"/><path d="M158 137l31 21h142l45-25" fill="none" stroke="#ef476f" stroke-width="3" stroke-dasharray="7 5"/><path d="M236 49v149M284 49v149" stroke="#70a5d3" stroke-width="1.5" stroke-dasharray="5 5"/><text x="269" y="76" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="161" y="184" text-anchor="middle" font-size="13" font-weight="800" fill="#073b75">${l2}</text><text x="360" y="186" text-anchor="middle" font-size="19" font-weight="900" fill="#b42355">${l3}</text>${baseEnd}`;
  }

  if (/hình vuông lớn[^.]{0,90}hình vuông nhỏ|hình tròn nội tiếp hình vuông/.test(context)) {
    const hasCircle = /hình tròn nội tiếp/.test(context);
    const inner = hasCircle
      ? `<circle cx="260" cy="121" r="57" fill="#ffffff" stroke="#ef476f" stroke-width="3"/>`
      : `<rect x="215" y="76" width="90" height="90" fill="#fff7d6" stroke="#ef476f" stroke-width="3"/>`;
    return `${baseStart}<rect x="182" y="43" width="156" height="156" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/>${inner}<path d="M182 35h156M173 43v156" stroke="#70a5d3" stroke-width="2"/><text x="260" y="57" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="260" y="127" text-anchor="middle" font-size="14" font-weight="900" fill="#b45309">${l2}</text><text x="380" y="126" text-anchor="middle" font-size="19" font-weight="900" fill="#b42355">?</text>${baseEnd}`;
  }

  if (/lối đi[^.]{0,60}(?:chiều dài|chiều rộng|chữ thập|chạy giữa)|hai lối đi/.test(context)) {
    return `${baseStart}<rect x="105" y="45" width="310" height="151" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/><rect x="105" y="104" width="310" height="35" fill="#ffd166" stroke="#d49300" stroke-width="2"/><rect x="245" y="45" width="35" height="151" fill="#ffd166" stroke="#d49300" stroke-width="2"/><rect x="245" y="104" width="35" height="35" fill="#f59e0b"/><text x="164" y="82" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="348" y="178" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l2}</text><text x="262" y="128" text-anchor="middle" font-size="18" font-weight="900" fill="#7c2d12">?</text>${baseEnd}`;
  }

  if (/cắt[^.]{0,70}(?:hình vuông|góc)|bị cắt[^.]{0,50}góc/.test(context)) {
    return `${baseStart}<path d="M105 52H415V190H105V52M105 52h63v58h-63M352 132h63v58h-63" fill="#c7e7ff" fill-rule="evenodd" stroke="#07549a" stroke-width="3"/><path d="M105 110h63V52M352 190v-58h63" fill="none" stroke="#ef476f" stroke-width="3" stroke-dasharray="7 4"/><text x="260" y="80" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="136" y="86" text-anchor="middle" font-size="13" font-weight="900" fill="#b45309">${l2}</text><text x="384" y="168" text-anchor="middle" font-size="19" font-weight="900" fill="#b42355">?</text>${baseEnd}`;
  }

  if (/tam giác|hình thang|hình bình hành|hình thoi/.test(context)) {
    return `${baseStart}<polygon points="72,177 190,62 278,177" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/><path d="M190 62v115" stroke="#ef476f" stroke-width="2.5" stroke-dasharray="7 5"/><polygon points="309,78 423,78 464,177 278,177" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/><path d="M309 78v99" stroke="#ef476f" stroke-width="2.5" stroke-dasharray="7 5"/><text x="156" y="160" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="371" y="159" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l2}</text><text x="260" y="53" text-anchor="middle" font-size="18" font-weight="900" fill="#b42355">${l3}</text>${baseEnd}`;
  }

  if (/một nửa|mỗi phần|phần mấy|phần tô|phân số/.test(context)) {
    const cells = Array.from({ length: 8 }, (_, index) => `<rect x="100" y="${48 + index * 18}" width="320" height="18" fill="${index < 3 ? '#38bdf8' : '#ffffff'}" stroke="#07549a" stroke-width="1.5"/>`).join('');
    return `${baseStart}${cells}<path d="M260 48v144" stroke="#ef476f" stroke-width="2.5" stroke-dasharray="6 4"/><text x="156" y="116" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l1}</text><text x="358" y="116" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${l2}</text><text x="260" y="205" text-anchor="middle" font-size="17" font-weight="900" fill="#b42355">${l3}</text></svg>`;
  }

  if (skill === 'area_strategy' || /area|diện tích|chu vi|thể tích|volume|hình ghép|lát|mảnh đất|bồn hoa/.test(context)) {
    return `${baseStart}<path d="M105 58H390V181H105Z M275 110H390V181H275Z" fill="#c7e7ff" fill-rule="evenodd" stroke="#07549a" stroke-width="3"/><path d="M105 110H275M200 58V181" stroke="#70a5d3" stroke-width="2" stroke-dasharray="6 5"/><path d="M275 110H390V181H275Z" fill="#fff7d6" stroke="#f59e0b" stroke-width="3" stroke-dasharray="7 4"/><text x="151" y="91" text-anchor="middle" font-size="15" font-weight="800" fill="#073b75">${l1}</text><text x="235" y="151" text-anchor="middle" font-size="15" font-weight="800" fill="#073b75">${l2}</text><text x="333" y="151" text-anchor="middle" font-size="19" font-weight="900" fill="#b45309">${l3}</text>${baseEnd}`;
  }

  if (skill === 'spatial_thinking') {
    return `${baseStart}<polygon points="112,158 168,61 224,158" fill="#bdebd5" stroke="#087f5b" stroke-width="3"/><rect x="255" y="78" width="88" height="80" rx="5" fill="#c7e7ff" stroke="#07549a" stroke-width="3"/><path d="M365 118h55M405 100l18 18-18 18" fill="none" stroke="#ef476f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M151 61v97M255 118h88" stroke="#6b8ead" stroke-width="2" stroke-dasharray="6 5"/><text x="168" y="181" text-anchor="middle" font-size="14" font-weight="800" fill="#073b75">${l1}</text><text x="299" y="181" text-anchor="middle" font-size="14" font-weight="800" fill="#073b75">${l2}</text><text x="425" y="91" text-anchor="middle" font-size="17" font-weight="900" fill="#b42355">?</text>${baseEnd}`;
  }

  if (skill === 'pattern_recognition') {
    const nodes = [0, 1, 2, 3, 4].map((index) => {
      const x = 86 + index * 87;
      const label = index === 0 ? l1 : index === 1 ? l2 : index === 4 ? '?' : '…';
      return `<circle cx="${x}" cy="119" r="29" fill="${index === 4 ? '#fff1f7' : '#e2f2ff'}" stroke="${index === 4 ? '#e83e8c' : '#168aad'}" stroke-width="3"/><text x="${x}" y="126" text-anchor="middle" font-size="14" font-weight="900" fill="#073b75">${label}</text>${index < 4 ? `<path d="M${x + 31} 119h24" stroke="#7aa7cf" stroke-width="3"/>` : ''}`;
    }).join('');
    return `${baseStart}${nodes}${baseEnd}`;
  }

  if (/thời gian|đồng hồ|time|giờ|phút/.test(context)) {
    return `${baseStart}<path d="M84 121H438" stroke="#07549a" stroke-width="5" stroke-linecap="round"/><circle cx="119" cy="121" r="16" fill="#28c791"/><circle cx="260" cy="121" r="16" fill="#38bdf8"/><circle cx="401" cy="121" r="19" fill="#fff" stroke="#ef476f" stroke-width="4"/><path d="M119 93v56M260 93v56M401 90v62" stroke="#07549a" stroke-width="2"/><text x="119" y="82" text-anchor="middle" font-size="14" font-weight="800" fill="#073b75">${l1}</text><text x="260" y="82" text-anchor="middle" font-size="14" font-weight="800" fill="#073b75">${l2}</text><text x="401" y="127" text-anchor="middle" font-size="18" font-weight="900" fill="#b42355">?</text>${baseEnd}`;
  }

  if (/dung tích|lít|ml|khối lượng|cân|kg|gam|nước|bình|chai/.test(context)) {
    return `${baseStart}<path d="M89 68h93l-9 110H98Z" fill="#dff4ff" stroke="#07549a" stroke-width="3"/><path d="M96 127h79l-4 49h-70Z" fill="#38bdf8" opacity=".78"/><path d="M338 66h93l-10 112h-73Z" fill="#fff7d6" stroke="#07549a" stroke-width="3"/><path d="M345 145h79l-3 31h-73Z" fill="#ffd166" opacity=".86"/><path d="M194 122h119" stroke="#ef476f" stroke-width="4" stroke-dasharray="8 5"/><path d="M299 110l17 12-17 12" fill="none" stroke="#ef476f" stroke-width="4"/><text x="135" y="103" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">${l1}</text><text x="384" y="119" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">${l2}</text><text x="254" y="104" text-anchor="middle" font-size="18" font-weight="900" fill="#b42355">${l3}</text>${baseEnd}`;
  }

  return `${baseStart}<rect x="75" y="80" width="112" height="76" rx="12" fill="#dff4ff" stroke="#07549a" stroke-width="3"/><rect x="333" y="80" width="112" height="76" rx="12" fill="#fff1f7" stroke="#e83e8c" stroke-width="3"/><path d="M202 118h105" stroke="#28a6df" stroke-width="4" stroke-dasharray="9 6"/><path d="M294 105l18 13-18 13" fill="none" stroke="#28a6df" stroke-width="4"/><text x="131" y="125" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">${l1}</text><text x="389" y="125" text-anchor="middle" font-size="15" font-weight="900" fill="#073b75">${l2}</text><text x="260" y="93" text-anchor="middle" font-size="19" font-weight="900" fill="#b42355">${l3}</text>${baseEnd}`;
}

function strategyLead(skill) {
  if (skill === 'area_strategy') return 'Chiến lược: tách hoặc ghép hình, xác định phần bất biến rồi mới lập phép tính.';
  if (skill === 'spatial_thinking') return 'Chiến lược: cố định các điểm, cạnh hoặc hướng mốc; theo dõi từng phép biến đổi trên hình.';
  if (skill === 'pattern_recognition') return 'Chiến lược: lập các trường hợp đầu, tìm đại lượng thay đổi đều và kiểm tra quy luật ở bước kế tiếp.';
  if (skill === 'reverse_reasoning') return 'Chiến lược: đi ngược từ kết quả đã biết, khôi phục từng dữ kiện trung gian rồi đối chiếu điều kiện ban đầu.';
  if (skill === 'visual_reasoning') return 'Chiến lược: đánh dấu trực tiếp các phần cần đếm hoặc so sánh trên hình để tránh bỏ sót và đếm lặp.';
  return 'Chiến lược: biểu diễn quan hệ giữa các dữ kiện, giải theo từng chặng và dùng điều kiện đề bài để kiểm tra lại.';
}

function enhanceHsgQuestion(analysis, decision) {
  const question = { ...analysis.question };
  const svgWasUpgraded = !analysis.mathematicalSvg;
  const solutionWasUpgraded = !String(question.solution || '').startsWith('Chiến lược:');
  if (svgWasUpgraded) {
    question.p0SourceSvg = question.svg;
    question.svg = strategyDiagram(question, analysis.topicId, analysis.skill);
  }
  if (solutionWasUpgraded) question.solution = `${strategyLead(analysis.skill)} ${String(question.solution || '').trim()}`.trim();
  question.skill = analysis.skill;
  question.estimatedTime = Math.max(240, Number(question.estimatedTime) || 0);
  question.explanation = 'Câu hỏi yêu cầu đọc dữ kiện trên hình, lựa chọn chiến lược, thực hiện ít nhất hai quan hệ suy luận và kiểm tra kết quả.';
  question.p0Review = Object.freeze({
    decision,
    score: analysis.score,
    sourceCandidate: analysis.candidateIndex + 1,
    svgUpgraded: svgWasUpgraded,
    solutionUpgraded: solutionWasUpgraded,
    directOnly: analysis.directOnly,
    priority: analysis.priority
  });
  return question;
}

function buildPedagogyV2Tiers(grade, topicId, topicData) {
  const kha = [...(topicData.kha || []).slice(0, 3)];
  const originalGioi = [...(topicData.gioi || [])];
  const originalHsg = [...(topicData.hsg || [])];
  const currentHsgCandidates = [...originalGioi.slice(4, 7), ...originalHsg.slice(0, 5)];

  if (kha.length !== 3 || originalGioi.length < 7 || originalHsg.length < 5 || currentHsgCandidates.length !== 8) {
    throw new Error(`P0 ${grade}/${topicId}: ngân hàng nguồn phải có đúng cấu trúc 3 Khá, 7 Giỏi, 5 HSG.`);
  }

  const analyses = currentHsgCandidates.map((question, index) => analyzeCandidate(grade, topicId, question, index));
  const ranked = [...analyses].sort((a, b) => b.score - a.score || a.candidateIndex - b.candidateIndex);
  const preferred = PRIORITY_SELECTIONS[`${grade}/${topicId}`];
  const selectedIndexes = new Set(preferred
    ? preferred.map(value => value - 1)
    : ranked.slice(0, 5).map(row => row.candidateIndex));
  const selectedAnalyses = analyses.filter(row => selectedIndexes.has(row.candidateIndex));
  const downgradedAnalyses = analyses.filter(row => !selectedIndexes.has(row.candidateIndex));

  if (selectedAnalyses.some(row => row.directOnly)) {
    const titles = selectedAnalyses.filter(row => row.directOnly).map(row => row.question.title).join(', ');
    throw new Error(`P0 ${grade}/${topicId}: câu áp dụng trực tiếp không được giữ HSG: ${titles}`);
  }

  const p0Hsg = selectedAnalyses.map(analysis => {
    const needsUpgrade = analysis.score < 6 || !analysis.mathematicalSvg || analysis.stepCount < 2;
    const decision = needsUpgrade ? 'upgrade_hsg' : 'keep_hsg';
    const enhanced = enhanceHsgQuestion(analysis, decision);
    auditRows.push({
      id: analysis.question.clusterId || `g${grade}-${topicId}-candidate-${analysis.candidateIndex + 1}`,
      grade,
      topic: topicId,
      title: analysis.question.title,
      previousLevel: 'HSG',
      decision,
      finalLevel: 'HSG',
      score: analysis.score,
      reason: needsUpgrade
        ? 'Giữ vị trí HSG sau khi bổ sung sơ đồ toán học và lời giải chiến lược.'
        : 'Có suy luận nhiều bước, chiến lược và hình toán học đạt yêu cầu.',
      svgUpgraded: enhanced.p0Review.svgUpgraded,
      solutionUpgraded: enhanced.p0Review.solutionUpgraded,
      directOnly: false,
      priority: analysis.priority
    });
    return enhanced;
  });

  const downgraded = downgradedAnalyses.map(analysis => {
    auditRows.push({
      id: analysis.question.clusterId || `g${grade}-${topicId}-candidate-${analysis.candidateIndex + 1}`,
      grade,
      topic: topicId,
      title: analysis.question.title,
      previousLevel: 'HSG',
      decision: 'downgrade_to_gioi',
      finalLevel: 'Giỏi',
      score: analysis.score,
      reason: analysis.directOnly
        ? 'Chủ yếu đổi đơn vị, thay số, dùng công thức hoặc tính trực tiếp.'
        : 'Khả năng phân loại thấp hơn năm ứng viên HSG còn lại trong cùng chủ đề.',
      svgUpgraded: false,
      solutionUpgraded: false,
      directOnly: analysis.directOnly,
      priority: analysis.priority
    });
    return {
      ...analysis.question,
      skill: analysis.skill,
      p0Review: Object.freeze({
        decision: 'downgrade_to_gioi',
        score: analysis.score,
        sourceCandidate: analysis.candidateIndex + 1,
        svgUpgraded: false,
        solutionUpgraded: false,
        directOnly: analysis.directOnly,
        priority: analysis.priority
      })
    };
  });

  const p11Result = applyP11QualityGate(grade, topicId, p0Hsg);

  return {
    kha,
    gioi: [...originalGioi.slice(0, 4), ...downgraded, ...p11Result.downgraded],
    hsg: p11Result.hsg
  };
}

function resetP0Audit() {
  auditRows.length = 0;
  resetP11Audit();
}

function getP0AuditSnapshot() {
  const rows = auditRows.map(row => ({ ...row }));
  const summary = rows.reduce((result, row) => {
    result.reviewed += 1;
    if (row.decision === 'keep_hsg') result.kept += 1;
    if (row.decision === 'downgrade_to_gioi') result.downgraded += 1;
    if (row.decision === 'upgrade_hsg') result.upgraded += 1;
    if (row.svgUpgraded) result.svgUpgraded += 1;
    if (row.solutionUpgraded) result.solutionUpgraded += 1;
    if (row.directOnly && row.finalLevel === 'HSG') result.directOnlyRemaining += 1;
    return result;
  }, {
    reviewed: 0,
    kept: 0,
    downgraded: 0,
    upgraded: 0,
    replaced: 0,
    svgUpgraded: 0,
    solutionUpgraded: 0,
    directOnlyRemaining: 0
  });
  return { summary, rows };
}

export {
  buildPedagogyV2Tiers,
  getP0AuditSnapshot,
  resetP0Audit,
  getP11AuditSnapshot,
  hasMathematicalSvg
};
