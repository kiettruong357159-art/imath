export const FALLBACK_SVG = '/images/placeholder-default.svg';
export const DEFAULT_REMOTE_FALLBACK = 'https://imath.vn/wp-content/uploads/2026/09/hero-math-world-2026-1024x341.webp';

const INVALID_IMAGE_VALUES = new Set(['', 'null', 'undefined', '[]', '{}', 'none', 'false']);

export function resolveSafeImageSrc(src: unknown): string {
  if (typeof src !== 'string') {
    return FALLBACK_SVG;
  }
  const cleaned = src.trim();
  if (INVALID_IMAGE_VALUES.has(cleaned.toLowerCase())) {
    return FALLBACK_SVG;
  }
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://') || cleaned.startsWith('/')) {
    return cleaned;
  }
  return FALLBACK_SVG;
}

export function safeParseJsonArray(raw: unknown): string[] {
  if (Array.isArray(raw)) {
    return raw.map((item) => resolveSafeImageSrc(item)).filter((item) => item !== FALLBACK_SVG);
  }
  if (typeof raw !== 'string') return [];
  const trimmed = raw.trim();
  if (!trimmed || INVALID_IMAGE_VALUES.has(trimmed.toLowerCase())) return [];
  try {
    const parsed: unknown = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => resolveSafeImageSrc(item)).filter((item) => item !== FALLBACK_SVG);
    }
    return [];
  } catch {
    const single = resolveSafeImageSrc(trimmed);
    return single !== FALLBACK_SVG ? [single] : [];
  }
}
