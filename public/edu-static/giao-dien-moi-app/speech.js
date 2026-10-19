(() => {
  'use strict';

  const root = typeof window !== 'undefined' ? window : globalThis;
  const synth = root.speechSynthesis;
  let voices = [];
  let activeButton = null;

  const escapeAttribute = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  function decodeEntities(value) {
    if (typeof document === 'undefined') {
      return String(value).replace(/&nbsp;/giu, ' ').replace(/&lt;/giu, '<').replace(/&gt;/giu, '>').replace(/&amp;/giu, '&').replace(/&quot;/giu, '"').replace(/&#39;/giu, "'");
    }
    const node = document.createElement('textarea');
    node.innerHTML = value;
    return node.value;
  }

  function stripMarkup(value) {
    return decodeEntities(String(value ?? '')
      .replace(/<svg\b[\s\S]*?<\/svg>/giu, ' ')
      .replace(/<(?:script|style)\b[\s\S]*?<\/(?:script|style)>/giu, ' ')
      .replace(/<br\s*\/?\s*>/giu, '. ')
      .replace(/<\/?[A-Za-z][A-Za-z0-9-]*(?:\s+[^<>]*?)?\s*\/?>/gu, ' '));
  }

  function fractionText(numerator, denominator, lang) {
    return lang === 'vi' ? `${numerator} phần ${denominator}` : `${numerator} over ${denominator}`;
  }

  function normalizeForSpeech(value, language = 'vi') {
    const lang = language === 'vi' ? 'vi' : 'en';
    let text = stripMarkup(value)
      .replace(/\\(?:left|right)/gu, '')
      .replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/gu, (_, numerator, denominator) => fractionText(numerator, denominator, lang))
      .replace(/\\[()[\]]/gu, ' ')
      .replace(/\$+/gu, ' ')
      .replace(/\b\d{1,3}(?:[\u00a0\u202f ]\d{3})+\b/gu, (number) => number.replace(/[\u00a0\u202f ]/gu, ''));

    if (lang === 'vi') {
      text = text.replace(/\b([01]?\d|2[0-3]):([0-5]\d)\b/gu, (_, hour, minute) => `${Number(hour)} giờ ${Number(minute)} phút`);
    }

    text = text
      .replace(/\b(\d+)\s+(\d+)\s*\/\s*(\d+)\b/gu, (_, whole, numerator, denominator) => lang === 'vi'
        ? `${whole} và ${fractionText(numerator, denominator, lang)}`
        : `${whole} and ${fractionText(numerator, denominator, lang)}`)
      .replace(/\b(\d+)\s*\/\s*(\d+)\b/gu, (_, numerator, denominator) => fractionText(numerator, denominator, lang))
      .replace(/\b(\d+),(\d+)\b/gu, (_, whole, decimal) => `${whole} ${lang === 'vi' ? 'phẩy' : 'point'} ${decimal}`);

    const unitNames = lang === 'vi' ? {
      'cm²': 'xăng-ti-mét vuông', 'dm²': 'đề-xi-mét vuông', 'm²': 'mét vuông', 'km²': 'ki-lô-mét vuông', 'mm²': 'mi-li-mét vuông',
      'cm³': 'xăng-ti-mét khối', 'dm³': 'đề-xi-mét khối', 'm³': 'mét khối', 'mm³': 'mi-li-mét khối',
      kg: 'ki-lô-gam', ml: 'mi-li-lít', km: 'ki-lô-mét', mm: 'mi-li-mét', cm: 'xăng-ti-mét', dm: 'đề-xi-mét', g: 'gam', l: 'lít', m: 'mét', 'đồng': 'đồng'
    } : {
      'cm²': 'square centimetres', 'dm²': 'square decimetres', 'm²': 'square metres', 'km²': 'square kilometres', 'mm²': 'square millimetres',
      'cm³': 'cubic centimetres', 'dm³': 'cubic decimetres', 'm³': 'cubic metres', 'mm³': 'cubic millimetres',
      kg: 'kilograms', ml: 'millilitres', km: 'kilometres', mm: 'millimetres', cm: 'centimetres', dm: 'decimetres', g: 'grams', l: 'litres', m: 'metres', 'đồng': 'Vietnamese dong'
    };
    const unitPattern = Object.keys(unitNames).sort((a, b) => b.length - a.length).join('|');
    text = text.replace(new RegExp(`\\(\\s*(${unitPattern})\\s*\\)`, 'giu'), (_, unit) => ` ${unitNames[unit.toLowerCase()] || unitNames[unit]} `);
    text = text.replace(new RegExp(`(\\d(?:[\\d,.]*))\\s*(${unitPattern})(?![\\p{L}])`, 'giu'), (_, number, unit) => `${number} ${unitNames[unit.toLowerCase()] || unitNames[unit]}`);

    const words = lang === 'vi'
      ? { plus: ' cộng ', minus: ' trừ ', times: ' nhân ', divide: ' chia ', equals: ' bằng ', less: ' bé hơn ', greater: ' lớn hơn ', blank: 'bao nhiêu' }
      : { plus: ' plus ', minus: ' minus ', times: ' times ', divide: ' divided by ', equals: ' equals ', less: ' less than ', greater: ' greater than ', blank: 'what number' };
    text = text
      .replace(/([=:]\s*)(?:\?|…|\.{3})/gu, `$1 ${words.blank}`)
      .replace(/(?<![\p{L}\p{N}])\?(?=\s*(?:[+−×*/:=<>.,;\-]|$))/gu, ` ${words.blank} `)
      .replace(/(?<![\p{L}\p{N}])(?:…|\.{3})(?=\s*[+−×*/:=<>\-])/gu, ` ${words.blank} `)
      .replace(/\s+[−-]\s+(?=\d)/gu, words.minus)
      .replace(/(\d)\s*[−-]\s*(?=\d)/gu, `$1${words.minus}`)
      .replace(/(\d)\s+:\s+(?=\d)/gu, `$1${words.divide}`)
      .replace(/\+/gu, words.plus)
      .replace(/[×·]/gu, words.times)
      .replace(/=/gu, words.equals)
      .replace(/</gu, words.less)
      .replace(/>/gu, words.greater)
      .replace(/_{2,}/gu, ` ${words.blank} `)
      .replace(/\.{3,}|…/gu, ' ')
      .replace(/\s+([,.;:!?])/gu, '$1')
      .replace(/\s+/gu, ' ')
      .trim();
    return text;
  }

  function loadVoices() {
    voices = synth?.getVoices?.() || [];
    refreshButtons();
  }

  function voiceScore(voice, language) {
    const name = String(voice.name || '');
    const voiceLang = String(voice.lang || '').toLowerCase();
    const target = language === 'vi' ? 'vi' : 'en';
    if (!voiceLang.startsWith(target)) return -1;
    let score = 0;
    if (/natural|online/iu.test(name)) score += 100;
    if (/microsoft\s+(hoaimy|namminh)/iu.test(name)) score += 60;
    if (/google/iu.test(name)) score += 30;
    if (language === 'vi' && voiceLang.startsWith('vi-vn')) score += 20;
    if (language !== 'vi' && voiceLang.startsWith('en-gb')) score += 25;
    else if (language !== 'vi' && voiceLang.startsWith('en-us')) score += 15;
    if (voice.default) score += 2;
    return score;
  }

  function selectVoice(language) {
    return voices
      .map((voice) => ({ voice, score: voiceScore(voice, language) }))
      .filter((item) => item.score >= 0)
      .sort((a, b) => b.score - a.score)[0]?.voice || null;
  }

  function stop() {
    synth?.cancel?.();
    if (activeButton) {
      activeButton.classList.remove('is-speaking');
      activeButton.setAttribute('aria-pressed', 'false');
    }
    activeButton = null;
  }

  function toggle(button) {
    if (!synth || !button) return;
    if (activeButton === button && synth.speaking) { stop(); return; }
    stop();
    const language = button.dataset.speechLang === 'vi' ? 'vi' : 'en';
    const voice = selectVoice(language);
    if (!voice) { button.hidden = true; return; }
    const text = normalizeForSpeech(button.dataset.speechText || '', language);
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.lang = voice.lang || (language === 'vi' ? 'vi-VN' : 'en-GB');
    utterance.rate = 0.9;
    utterance.onend = utterance.onerror = () => {
      if (activeButton === button) stop();
    };
    activeButton = button;
    button.classList.add('is-speaking');
    button.setAttribute('aria-pressed', 'true');
    synth.speak(utterance);
  }

  function buttonHtml(text, language = 'vi', large = false) {
    if (!synth || root.IMATH_SPEECH_ENABLED === false || !String(text ?? '').trim()) return '';
    const lang = language === 'vi' ? 'vi' : 'en';
    const label = lang === 'vi' ? 'Đọc to' : 'Read aloud';
    return `<button type="button" class="speech-button${large ? ' speech-button-large' : ''}" data-speech-button="1" data-speech-lang="${lang}" data-speech-text="${escapeAttribute(text)}" aria-label="${label}" title="${label}" aria-pressed="false" ${selectVoice(lang) ? '' : 'hidden'}><span aria-hidden="true">🔊</span><span class="speech-button-label">${label}</span></button>`;
  }

  function refreshButtons(root = document) {
    root.querySelectorAll?.('[data-speech-button]').forEach((button) => {
      button.hidden = globalThis.IMATH_SPEECH_ENABLED === false
        || !selectVoice(button.dataset.speechLang === 'vi' ? 'vi' : 'en');
    });
  }

  if (synth) {
    loadVoices();
    if ('onvoiceschanged' in synth) synth.addEventListener('voiceschanged', loadVoices);
  }

  const api = Object.freeze({ buttonHtml, normalize: normalizeForSpeech, refreshButtons, stop, toggle });
  root.IMATH_SPEECH = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})();
