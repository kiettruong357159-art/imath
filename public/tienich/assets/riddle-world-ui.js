/* Navigation only: the directory never starts or restores a game. */
(function () {
  'use strict';
  const topics = {
    all: 'Câu đố vui tổng hợp',
    logic: 'Câu đố suy luận logic',
    'tieng-viet': 'Câu đố Tiếng Việt và văn học dân gian',
    'tu-nhien': 'Câu đố khám phá tự nhiên',
    'doi-song': 'Câu đố quan sát đời sống',
    toan: 'Câu đố Toán tư duy'
  };
  const requested = new URLSearchParams(window.location.search).get('chu-de');
  if (document.body.classList.contains('riddle-landing')) {
    // Preserve existing shared topic links; normal cards are real page links.
    if (Object.prototype.hasOwnProperty.call(topics, requested)) {
      const target = new URL('cau-do-vui-lam-bai.html', window.location.href);
      target.searchParams.set('chu-de', requested);
      window.location.replace(target.href);
    }
    return;
  }
  const select = document.getElementById('topic-select');
  if (!select) return;
  function syncHeading() {
    const title = topics[select.value] || topics.all;
    document.getElementById('page-title').textContent = title;
    document.title = title + ' – Làm bài | iMath.vn';
    const url = new URL(window.location.href);
    url.searchParams.set('chu-de', select.value);
    window.history.replaceState(null, '', url.href);
  }
  select.addEventListener('change', syncHeading);
  syncHeading();
}());
