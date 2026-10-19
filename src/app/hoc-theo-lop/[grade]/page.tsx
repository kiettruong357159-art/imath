import React from 'react';
import Link from 'next/link';
import { getCachedHubPage, postCardSelect, docCardSelect } from '@/lib/cached-queries';
import { prisma } from '@/lib/prisma';

export default async function HocTheoLopGradePage({ params }: { params: Promise<{ grade: string }> }) {
  const { grade } = await params;
  const [hub, posts, docs] = await Promise.all([
    getCachedHubPage(`hoc-theo-lop/${grade}`),
    prisma.post.findMany({
      where: { status: 'PUBLISHED', gradeSlug: grade },
      select: postCardSelect,
      orderBy: { publishedAt: 'desc' },
      take: 12,
    }),
    prisma.mathDocument.findMany({
      where: { status: 'PUBLISHED', gradeSlug: `toan-${grade}` },
      select: docCardSelect,
      orderBy: { publishedAt: 'desc' },
      take: 9,
    }),
  ]);

  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}

      <section style={{ maxWidth: 1280, margin: '2.5rem auto', padding: '0 1.25rem' }}>
        {docs.length > 0 && (
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>
              📖 Phiếu Bài Tập & Đề Kiểm Tra ({grade.toUpperCase()})
            </h2>
            <div className="grid-3col-safe">
              {docs.map((d) => (
                <Link
                  key={d.id}
                  href={`/tai-lieu/${d.slug}`}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.15rem',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
                    {d.gradeName} • {d.topicName}
                  </div>
                  <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.02rem', fontWeight: 800 }}>{d.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                    {d.excerpt.slice(0, 110)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {posts.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>
              📚 Chuyên Đề & Bài Học Trọng Tâm ({grade.toUpperCase()})
            </h2>
            <div className="grid-3col-safe">
              {posts.map((p) => (
                <Link
                  key={p.id}
                  href={`/${p.slug}`}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.15rem',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.02rem', fontWeight: 800 }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                    {p.excerpt.slice(0, 110)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
