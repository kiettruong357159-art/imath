import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getCachedCategoryByPathOrSlug,
  getCachedPostBySlug,
  getCachedHubPage,
  postCardSelect,
} from '@/lib/cached-queries';
import { prisma } from '@/lib/prisma';
import { SafeImage } from '@/components/ui/SafeImage';
import { PostRatingWidget } from '@/components/storefront/PostRatingWidget';
import { formatVnDate } from '@/lib/date-utils';

interface CatchAllPageProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = slug.join('/');
  const lastSlug = slug[slug.length - 1];

  const [category, post, hub] = await Promise.all([
    getCachedCategoryByPathOrSlug(fullPath),
    getCachedPostBySlug(lastSlug),
    getCachedHubPage(fullPath),
  ]);

  if (category) {
    return {
      title: `${category.name} - Chuyên Mục Toán Học iMath.vn`,
      description: category.description || `Tổng hợp bài học và chuyên đề ${category.name} trên iMath.vn`,
    };
  }
  if (post) {
    return {
      title: `${post.title} - iMath.vn`,
      description: post.excerpt,
    };
  }
  if (hub) {
    return {
      title: hub.title,
      description: hub.description,
    };
  }
  return { title: 'iMath.vn — Học Toán Online Lớp 1 Đến 12' };
}

export default async function CatchAllSlugPage({ params, searchParams }: CatchAllPageProps) {
  const { slug } = await params;
  const resolvedSearch = await searchParams;
  const currentPage = Math.max(1, Number(resolvedSearch.page || '1') || 1);
  const pageSize = 12;

  const fullPath = slug.join('/');
  const lastSlug = slug[slug.length - 1];

  // 1. Check if this path matches a Category (e.g., /phuong-phap-hoc-toan or /toan-tieu-hoc-chuong-trinh-lop-1-den-lop-5/toan-lop-1)
  const category = await getCachedCategoryByPathOrSlug(fullPath);
  if (category) {
    const where = {
      status: 'PUBLISHED',
      categoryId: category.id,
    };
    const [posts, totalCount, subCategories] = await Promise.all([
      prisma.post.findMany({
        where,
        select: postCardSelect,
        orderBy: { publishedAt: 'desc' },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      }),
      prisma.post.count({ where }),
      prisma.category.findMany({
        where: { isActive: true, id: { not: category.id } },
        take: 15,
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

    return (
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 2rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
            CHUYÊN MỤC KIẾN THỨC • {totalCount} BÀI VIẾT
          </div>
          <h1 style={{ margin: '0 0 0.5rem', fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
            {category.name}
          </h1>
          {category.description && (
            <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.98rem' }}>
              {category.description}
            </p>
          )}

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.1rem' }}>
            {subCategories.map((c) => (
              <Link
                key={c.id}
                href={`/${c.fullPath}`}
                style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--color-surface-muted)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid-3col-safe">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'var(--color-text)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: 180, overflow: 'hidden', background: '#eff6ff' }}>
                <SafeImage
                  src={post.featuredImage}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                  {category.name} • {formatVnDate(post.publishedAt)}
                </div>
                <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.4 }}>
                  {post.title}
                </h2>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  {post.excerpt.slice(0, 120)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {Array.from({ length: totalPages }, (v, idx) => {
              void v;
              const p = idx + 1;
              const active = p === currentPage;
              return (
                <Link
                  key={p}
                  href={`/${fullPath}?page=${p}`}
                  style={{
                    minWidth: 38,
                    height: 38,
                    borderRadius: 'var(--radius-sm)',
                    background: active ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: active ? '#fff' : 'var(--color-text)',
                    border: active ? 'none' : '1px solid var(--color-border-strong)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  {p}
                </Link>
              );
            })}
          </div>
        )}
      </main>
    );
  }

  // 2. Check if this path matches a Post
  const post = await getCachedPostBySlug(lastSlug);
  if (post) {
    const relatedPosts = await prisma.post.findMany({
      where: {
        status: 'PUBLISHED',
        categoryId: post.categoryId,
        id: { not: post.id },
      },
      select: postCardSelect,
      orderBy: { publishedAt: 'desc' },
      take: 6,
    });

    return (
      <main style={{ maxWidth: 1024, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>
            Trang chủ
          </Link>
          {post.category && (
            <>
              <span style={{ color: 'var(--color-text-muted)' }}>/</span>
              <Link
                href={`/${post.category.fullPath}`}
                style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}
              >
                {post.category.name}
              </Link>
            </>
          )}
        </div>

        <article
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <h1 style={{ margin: '0 0 0.75rem', fontSize: '2rem', fontWeight: 900, lineHeight: 1.35, fontFamily: 'var(--font-display)' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', color: 'var(--color-text-secondary)', fontSize: '0.9rem', fontWeight: 700 }}>
            <span>📅 Cập nhật: {formatVnDate(post.publishedAt)}</span>
            {post.category && <span>📂 Chuyên mục: {post.category.name}</span>}
          </div>

          <PostRatingWidget
            postId={post.id}
            initialAvg={post.ratingAvg}
            initialCount={post.ratingCount}
          />

          <div
            className="imath-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {relatedPosts.length > 0 && (
          <section style={{ marginTop: '2.5rem' }}>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 900, marginBottom: '1rem' }}>
              📚 Bài Viết Cùng Chuyên Đề
            </h2>
            <div className="grid-3col-safe">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/${rp.slug}`}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.1rem',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
                    {formatVnDate(rp.publishedAt)}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, lineHeight: 1.4 }}>
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    );
  }

  // 3. Check if this path matches a HubPage
  const hub = await getCachedHubPage(fullPath);
  if (hub) {
    return <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />;
  }

  notFound();
}
