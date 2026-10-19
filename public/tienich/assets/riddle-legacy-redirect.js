/* Fallback for static hosts missing the server-side 301 rules. No game/data changes. */
(function () {
  'use strict';
  const asset = document.currentScript.src;
  const topic = new URLSearchParams(window.location.search).get('chu-de');
  let target = new URL('../../cau-do-vui/', asset);
  if (['all', 'logic', 'tieng-viet', 'tu-nhien', 'doi-song', 'toan'].includes(topic)) {
    target = new URL('../cau-do-vui-lam-bai.html', asset);
    target.searchParams.set('chu-de', topic);
  } else if (topic === 'lich-su') {
    target = new URL('../cau-do-lich-su', asset);
  }
  window.location.replace(target.href);
}());
