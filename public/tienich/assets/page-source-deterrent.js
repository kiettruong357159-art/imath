(function () {
  'use strict';

  function stopShortcut(event) {
    const key = String(event.key || '').toLowerCase();
    const ctrlOrMeta = event.ctrlKey || event.metaKey;
    const developerShortcut =
      key === 'f12' ||
      key === 'contextmenu' ||
      (event.shiftKey && key === 'f10') ||
      (ctrlOrMeta && key === 'u') ||
      (ctrlOrMeta && key === 's') ||
      (ctrlOrMeta && event.shiftKey && ['c', 'i', 'j'].includes(key)) ||
      (event.metaKey && event.altKey && ['c', 'i', 'j', 'u'].includes(key));

    if (!developerShortcut) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  }, { capture: true });
  document.addEventListener('keydown', stopShortcut, { capture: true });
}());
