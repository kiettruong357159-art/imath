import { describe, it, expect } from 'vitest';
import { normalizeIso } from '../src/lib/date-utils';
import { resolveSafeImageSrc, FALLBACK_SVG } from '../src/lib/image-fallback';
import { signSessionToken, verifySessionTokenEdge } from '../src/lib/auth-edge';

describe('Core Architecture Utilities', () => {
  it('normalizes VN date strings with +07:00 offset', () => {
    expect(normalizeIso('2026-10-19')).toBe('2026-10-19T00:00:00+07:00');
  });

  it('filters garbage image values and falls back safely', () => {
    expect(resolveSafeImageSrc('null')).toBe(FALLBACK_SVG);
    expect(resolveSafeImageSrc('')).toBe(FALLBACK_SVG);
    expect(resolveSafeImageSrc('https://imath.vn/hero.webp')).toBe('https://imath.vn/hero.webp');
  });

  it('signs and verifies WebCrypto HMAC-SHA256 session tokens', async () => {
    const secret = 'test-secret-32-bytes-long-key-123';
    const token = await signSessionToken(
      { userId: 'u1', email: 'admin@imath.vn', role: 'ADMIN', permissions: ['*'], exp: Date.now() + 60000 },
      secret
    );
    const verified = await verifySessionTokenEdge(token, secret);
    expect(verified?.email).toBe('admin@imath.vn');
    expect(await verifySessionTokenEdge(token + 'tampered', secret)).toBeNull();
  });
});
