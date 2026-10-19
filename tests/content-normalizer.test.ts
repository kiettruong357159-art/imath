import { describe, it, expect } from 'vitest';
import { rewriteInternalUrls } from '../src/lib/content-normalizer';

describe('rewriteInternalUrls', () => {
  it('converts imath.vn page links to local relative paths while preserving wp-content media URLs', () => {
    const input = `<a href="https://imath.vn/hoc-theo-lop/lop-1/">Lớp 1</a><img src="https://imath.vn/wp-content/uploads/2026/09/hero.webp"/>`;
    const output = rewriteInternalUrls(input);
    expect(output).toContain('href="/hoc-theo-lop/lop-1"');
    expect(output).toContain('src="https://imath.vn/wp-content/uploads/2026/09/hero.webp"');
  });
});
