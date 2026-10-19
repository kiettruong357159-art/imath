# iMath.vn Fullstack Clone (Sub-project 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Next.js 15 + React 19 + Prisma SQLite fullstack platform replicating `imath.vn` (all 617 sitemap URLs, 24 interactive math tools `/tienich/*`, Hub pages, and Golden Reference Admin CMS) compliant with `PROJECT_RULES_TEMPLATE.md`.

**Architecture:** Next.js 15 App Router with Server Components for SEO/initial rendering (`React.cache` + `Promise.all` + selective column projection), Prisma ORM on local SQLite (`dev.db`) populated by an automated WordPress REST API + HTML/Asset crawler (`scripts/crawl-imath.ts`), static/iframe serving of the 24 interactive math tools under `public/tienich/`, WebCrypto HMAC-SHA256 Edge Middleware (`src/middleware.ts`), and a Multi-Tab SPA Admin Portal (`/admin`) using the Boutique Luxury UI Stack (`sonner`, `@radix-ui/react-alert-dialog`, `react-day-picker`).

**Tech Stack:** Next.js 15, React 19, TypeScript (Strict, `noUnusedLocals`, `noUnusedParameters`), Prisma ORM (SQLite), Zod, Sonner, Radix UI Alert Dialog, React Day Picker v10, Lucide React, Vitest.

**Spec:** [`docs/superpowers/specs/2026-10-19-imath-platform-design.md`](../specs/2026-10-19-imath-platform-design.md)

## Global Constraints

- Strict TypeScript: `"strict": true`, `"noUnusedLocals": true`, `"noUnusedParameters": true`; never prefix unused variables with `_`.
- Database Queries: Every list query MUST enforce bounded pagination (`take <= 500`, `skip`), use `prisma.model.count`/`aggregate`/`groupBy` for metrics, and never run Prisma queries inside loops.
- 4 UI States & Zero CLS: Every route MUST provide a tailored `loading.tsx` skeleton without static loading text; mutation buttons MUST disable and show `Loader2` while pending.
- Boutique UI Stack: No native `alert()`, `window.confirm()`, or `<input type="date">`. Use `ToastProvider` (`sonner`), `ConfirmDialog` (`@radix-ui/react-alert-dialog`), `DateTimePicker` (`react-day-picker`), `CustomSelect` (Portal `z-index: 10000`), and `SafeImage` (2-tier fallback to `/images/placeholder-default.svg`).
- Dual-Layer Security: Edge Middleware (`src/middleware.ts`) verifies HMAC-SHA256 session tokens via WebCrypto (`crypto.subtle`); API routes verify permissions via `withAuth` and dual-source cookie reader (`getCurrentUserFromCookie`).

## Review Focus

- Crawler URL & Asset Normalization: Rewriting internal `https://imath.vn/...` links in WordPress HTML content must preserve `/wp-content/uploads/...` media URLs (or proxy/download them) while converting page links to local relative paths `/...` so images never break and clicks stay local.
- Catch-All Permalink Resolution (`/[...slug]`): WordPress URLs include both nested category paths (`/toan-tieu-hoc-chuong-trinh-lop-1-den-lop-5/toan-lop-1/`) and root-level post slugs (`/on-tap-toan-lop-6-hoc-ky-1-con-da-vung-chua/`). The resolver must match the terminal slug against `Category` first, then `Post`, then `HubPage`, returning 404 only when all three miss.
- Interactive Tools Relative Asset Resolution (`/tienich/*`): Tools like `/tienich/08-toan-lop-1.html` and `/tienich/cap2/toan-cap-2-truc-quan.html?lop=6` load relative scripts (`assets/grade-question-bank.js`). The crawler must download every referenced relative JS/CSS/JSON asset into `public/tienich/` preserving directory hierarchy.
- Concurrent Rating Submission (`PostRating`): Submitting a star rating on a post/document must run inside `prisma.$transaction` to insert `PostRating` and atomically recalculate `ratingAvg` and `ratingCount` on `Post` / `MathDocument`.
- Safe Deletion Guards in Admin CMS: Deleting a `Category` that still has `Post` records must be blocked (`400 Bad Request` with clear message suggesting `isActive: false`) rather than throwing an unhandled Prisma foreign-key error.

---

### Task 1: Project Scaffolding, Prisma Schema & Core Utilities

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.env`
- Create: `prisma/schema.prisma`
- Create: `src/lib/prisma.ts`, `src/lib/date-utils.ts`, `src/lib/image-fallback.ts`, `src/lib/auth-edge.ts`, `src/lib/auth.ts`
- Create: `public/images/placeholder-default.svg`
- Test: `tests/core-utils.test.ts`

**Interfaces:**
- Consumes: none
- Produces:
  - `prisma` singleton in `src/lib/prisma.ts`
  - `normalizeIso(str: string, defaultTime?: string): string` in `src/lib/date-utils.ts`
  - `resolveSafeImageSrc(src: unknown): string` in `src/lib/image-fallback.ts`
  - `signSessionToken(payload: SessionPayload, secret: string): Promise<string>` and `verifySessionTokenEdge(token: string, secret: string): Promise<SessionPayload | null>` in `src/lib/auth-edge.ts`
  - `getCurrentUserFromCookie(req?: Request): Promise<SessionPayload | null>` and `withAuth(handler, requiredPermission?: string)` in `src/lib/auth.ts`

- [ ] **Step 1: Initialize Next.js 15 + React 19 + Prisma SQLite + Vitest configuration**

Create `package.json`, `tsconfig.json` (with `"noUnusedLocals": true`, `"noUnusedParameters": true`), `next.config.ts`, `.env` (`DATABASE_URL="file:./dev.db"`, `SESSION_SECRET="imath-super-secret-hmac-key-2026-production"`), and `prisma/schema.prisma` containing models `Role`, `User`, `Category`, `Post`, `MathDocument`, `InteractiveTool`, `HubPage`, `PostRating`, `Comment`. Install dependencies and run `npx prisma db push`.

- [ ] **Step 2: Write failing unit tests for core utilities and HMAC Edge Auth**

```typescript
// tests/core-utils.test.ts
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
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run tests/core-utils.test.ts`
Expected: FAIL (modules not created yet)

- [ ] **Step 4: Implement `prisma.ts`, `date-utils.ts`, `image-fallback.ts`, `auth-edge.ts`, `auth.ts`, and `public/images/placeholder-default.svg`**

Implement the utilities following `PROJECT_RULES_TEMPLATE.md` sections 5, 6, 7, and 11.

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run tests/core-utils.test.ts`
Expected: PASS (3 passed)

---

### Task 2: Boutique Luxury UI Stack & Global Design Tokens

**Files:**
- Create: `src/app/globals.css`
- Create: `src/context/ToastContext.tsx`
- Create: `src/components/ui/SafeImage.tsx`
- Create: `src/components/ui/ConfirmDialog.tsx`
- Create: `src/components/ui/CustomSelect.tsx`
- Create: `src/components/ui/DateTimePicker.tsx`
- Create: `src/components/ui/Pagination.tsx`
- Create: `src/components/ui/EmptyState.tsx`
- Create: `src/middleware.ts`

**Interfaces:**
- Consumes: `resolveSafeImageSrc` from `src/lib/image-fallback.ts`, `verifySessionTokenEdge` from `src/lib/auth-edge.ts`
- Produces:
  - `<ToastProvider>` & `useToast()` in `src/context/ToastContext.tsx`
  - `<SafeImage src alt className width height />` in `src/components/ui/SafeImage.tsx`
  - `<ConfirmDialog open onOpenChange title description onConfirm loading />` in `src/components/ui/ConfirmDialog.tsx`
  - `<CustomSelect value onChange options placeholder searchable />` in `src/components/ui/CustomSelect.tsx` (Portal `z-index: 10000`)
  - `<DateTimePicker value onChange mode />` in `src/components/ui/DateTimePicker.tsx`
  - `<Pagination currentPage totalPages onPageChange />` in `src/components/ui/Pagination.tsx`

- [ ] **Step 1: Implement `src/app/globals.css` with Design Tokens, Custom Scrollbar, `minmax(0, 1fr)` Grid utilities, and Golden Reference Admin classes**

Include all CSS variables (`--color-primary`, `--color-surface`, `--radius-md`, etc.), scrollbar rules (`::-webkit-scrollbar-button { display: none !important; }`), and `.admin-*` Golden Reference classes.

- [ ] **Step 2: Implement Boutique UI Components (`ToastContext`, `SafeImage`, `ConfirmDialog`, `CustomSelect`, `DateTimePicker`, `Pagination`, `EmptyState`) and `src/middleware.ts`**

Ensure `CustomSelect` and `DateTimePicker` render menus via `createPortal(..., document.body)` with `position: fixed; z-index: 10000`.

- [ ] **Step 3: Verify TypeScript compilation**

Run: `npx tsc --noEmit`
Expected: PASS with 0 errors

---

### Task 3: Full-Site Crawler & Asset Downloader (`imath.vn` + 24 `/tienich/*` + `edu.imath.vn` Discovery)

**Files:**
- Create: `src/lib/content-normalizer.ts`
- Create: `scripts/crawl-imath.ts`
- Test: `tests/content-normalizer.test.ts`

**Interfaces:**
- Consumes: `prisma` from `src/lib/prisma.ts`
- Produces:
  - `rewriteInternalUrls(html: string): string` in `src/lib/content-normalizer.ts`
  - Populated SQLite database (`dev.db`) with all Categories, Posts (~323), MathDocuments (~245), InteractiveTools (24+), HubPages, and default Admin User (`admin@imath.vn` / `Admin@123`)
  - Downloaded stylesheets in `public/imath-assets/css/` and full interactive tools + JS/CSS/data dependencies in `public/tienich/`

- [ ] **Step 1: Write failing test for `rewriteInternalUrls`**

```typescript
// tests/content-normalizer.test.ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/content-normalizer.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement `src/lib/content-normalizer.ts` and `scripts/crawl-imath.ts`**

`scripts/crawl-imath.ts` performs:
1. Downloads original `imath.vn` CSS bundles into `public/imath-assets/css/imath-bundle.css`.
2. Crawls all 24 `/tienich/*` pages and recursively downloads every local `<script src="...">` and `<link href="...">` asset (including `assets/grade-question-bank.js`, `assets/grade-practice.js`, `cap2/*`, etc.) into `public/tienich/`.
3. Fetches all WP REST API endpoints (`/wp-json/wp/v2/categories`, `/wp-json/wp/v2/posts`, `/wp-json/wp/v2/imath_document`, `/wp-json/wp/v2/imath_document_grade`, `/wp-json/wp/v2/imath_document_topic`) and Hub pages (`/`, `/hoc-theo-lop/`, `/hoc-theo-lop/lop-1/`..`lop-5/`, `/goc-phu-huynh/`, `/tien-ich/`, `/cau-do-vui/`, `/luyen-thi-vao-lop-6-truong-trong-diem/`) and upserts them into Prisma SQLite (`dev.db`).
4. Seeds default RBAC Roles (`ADMIN`, `TEACHER`, `PARENT`, `STUDENT`) and Admin user.

- [ ] **Step 4: Run test and execute crawler to populate database and assets**

Run: `npx vitest run tests/content-normalizer.test.ts && npx tsx scripts/crawl-imath.ts`
Expected: PASS test + Crawler logs 300+ posts, 240+ documents, 24+ interactive tools, and all Hub pages saved to `dev.db`.

---

### Task 4: Storefront Shell (`im26` Header/Footer), Homepage, Hub Pages, Document Library, Catch-All Post/Category Routes & Interactive Tools

**Files:**
- Create: `src/lib/cached-queries.ts`
- Create: `src/components/layout/SiteHeader.tsx`, `src/components/layout/SiteFooter.tsx`
- Create: `src/components/storefront/PostRatingWidget.tsx`, `src/components/storefront/DocumentFilterBar.tsx`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/loading.tsx`
- Create: `src/app/tai-lieu/page.tsx`, `src/app/tai-lieu/loading.tsx`, `src/app/tai-lieu/[slug]/page.tsx`, `src/app/tai-lieu/[slug]/loading.tsx`
- Create: `src/app/tai-lieu-lop/[grade]/page.tsx`, `src/app/chu-de-tai-lieu/[topic]/page.tsx`
- Create: `src/app/tien-ich/page.tsx`, `src/app/cau-do-vui/page.tsx`, `src/app/goc-phu-huynh/page.tsx`, `src/app/hoc-theo-lop/page.tsx`, `src/app/hoc-theo-lop/[grade]/page.tsx`, `src/app/luyen-thi-vao-lop-6-truong-trong-diem/page.tsx`
- Create: `src/app/[...slug]/page.tsx`, `src/app/[...slug]/loading.tsx`

**Interfaces:**
- Consumes: `prisma`, `SafeImage`, `CustomSelect`, `Pagination`, `EmptyState`, `rewriteInternalUrls`
- Produces:
  - Exact visual & functional replica of `imath.vn` across all 617 URLs and 24 interactive tools, plus live search, grade/topic filtering, server-side pagination, and optimistic 5-star ratings.

- [ ] **Step 1: Implement `src/lib/cached-queries.ts` using `React.cache()` and selective column projection (`postCardSelect`, `docCardSelect`)**

- [ ] **Step 2: Implement `SiteHeader.tsx` (exact `im26-header` mega-menu, live search panel with 400ms debounce, grade/tool dropdowns) and `SiteFooter.tsx`**

- [ ] **Step 3: Implement Homepage (`src/app/page.tsx`), Hub Pages (`/hoc-theo-lop/*`, `/goc-phu-huynh`, `/tien-ich`, `/cau-do-vui`, `/luyen-thi-vao-lop-6-truong-trong-diem`), Document Library (`/tai-lieu/*`, `/tai-lieu-lop/[grade]`, `/chu-de-tai-lieu/[topic]`), and Catch-All Route (`src/app/[...slug]/page.tsx`) with tailored `loading.tsx` skeletons**

---

### Task 5: Backend APIs (`withAuth`, `prisma.$transaction`, Safe Delete) & Golden Reference Admin CMS (`/admin`, `/login`)

**Files:**
- Create: `src/app/api/auth/login/route.ts`, `src/app/api/auth/logout/route.ts`, `src/app/api/auth/me/route.ts`
- Create: `src/app/api/posts/route.ts`, `src/app/api/posts/[id]/route.ts`, `src/app/api/posts/[id]/rate/route.ts`
- Create: `src/app/api/documents/route.ts`, `src/app/api/documents/[id]/route.ts`
- Create: `src/app/api/categories/route.ts`, `src/app/api/categories/[id]/route.ts`
- Create: `src/app/api/admin/stats/route.ts`
- Create: `src/app/login/page.tsx`, `src/app/login/loading.tsx`
- Create: `src/app/admin/page.tsx`, `src/app/admin/loading.tsx`
- Test: `tests/api-transactions.test.ts`

**Interfaces:**
- Consumes: `withAuth`, `prisma`, Boutique UI components
- Produces:
  - Atomic rating transaction endpoint `POST /api/posts/[id]/rate`
  - Safe category deletion guard `DELETE /api/categories/[id]`
  - Multi-tab SPA Admin Portal (`/admin?tab=dashboard|posts|documents|categories|tools`) with Lazy-Mount + Keep-Alive

- [ ] **Step 1: Write failing integration test for atomic rating calculation and safe category deletion guard**

```typescript
// tests/api-transactions.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { prisma } from '../src/lib/prisma';
import { ratePostAtomic, deleteCategorySafe } from '../src/lib/admin-services';

describe('Transactional Integrity & Safe Delete Guards', () => {
  beforeEach(async () => {
    await prisma.postRating.deleteMany({ where: { ipHash: 'test-ip' } });
  });

  it('recalculates ratingAvg and ratingCount atomically inside $transaction', async () => {
    const post = await prisma.post.findFirst();
    if (!post) return;
    const updated = await ratePostAtomic(post.id, 5, 'test-ip');
    expect(updated.ratingCount).toBeGreaterThanOrEqual(1);
    expect(updated.ratingAvg).toBeGreaterThan(0);
  });

  it('blocks hard deletion of a category that has posts', async () => {
    const catWithPosts = await prisma.category.findFirst({ where: { posts: { some: {} } } });
    if (!catWithPosts) return;
    await expect(deleteCategorySafe(catWithPosts.id)).rejects.toThrow('CATEGORY_IN_USE');
  });
});
```

- [ ] **Step 2: Implement `src/lib/admin-services.ts`, API Routes, `/login`, and `/admin` Golden Reference Multi-Tab SPA**

- [ ] **Step 3: Run tests, typecheck, and production build verification**

Run: `npx vitest run && npx tsc --noEmit && npm run build`
Expected: All tests PASS, 0 TypeScript errors, clean Next.js 15 production build.
