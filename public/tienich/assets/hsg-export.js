(function (window) {
  'use strict';

  // Read-only bridge to the existing file-13 worksheet. No generation, scoring,
  // storage, difficulty selection or bank data is changed by an export.
  const labels = { kho: 'Khó', 'rat-kho': 'Thử thách', 'chinh-phuc': 'Chinh phục HSG' };
  const modes = { full: ['Chinh phục đầy đủ', 60], exam: ['Thi thử', 45], practice: ['Luyện chuyên đề', 0], wrong: ['Ôn câu sai', 0] };
  const line = (text, extra = {}) => [{ text: String(text), ...extra }];

  function visual(question) {
    if (!question.svgGivens) return null;
    const svg = window.IMathHSGBank.renderSvg(question.svgGivens);
    if (!svg) throw new Error('Không thể xuất hình dữ kiện của câu ' + question.number + '.');
    // Only the original given-data renderer is used, never interactive hints,
    // completed diagrams, scratchpads or the pupil's answer DOM.
    return { src: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg), width: 440, height: 440 * 210 / 520, alt: 'Hình dữ kiện câu ' + question.number };
  }

  window.IMathWorksheetExportSource = {
    capture() {
      const state = window.IMathHSGPracticeAPI?.getState();
      if (!state?.questions.length) throw new Error('Chưa có câu hỏi để xuất. Hãy tạo một đề trước.');
      const mode = modes[state.mode] || modes.full;
      return {
        title: 'Luyện đề nâng cao', subtitle: mode[0], grade: String(state.grade),
        code: '', minutes: mode[1], teacherKey: false,
        filename: 'imath-luyen-de-nang-cao-lop-' + state.grade,
        questions: state.questions.map((q, i) => ({
          number: i + 1, tier: labels[q.difficulty] || 'Luyện tập',
          prompt: [line(q.prompt)],
          solution: (q.solution || []).map(text => line(text)).concat(q.keyPoint ? [line('Điểm mấu chốt: ' + q.keyPoint, { italic: true })] : []),
          answer: String(q.answerText), templateId: q.templateId, visual: visual(q)
        }))
      };
    }
  };
})(window);
