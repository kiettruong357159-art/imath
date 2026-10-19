import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCachedDocumentBySlug, docCardSelect } from '@/lib/cached-queries';
import { prisma } from '@/lib/prisma';
import { formatVnDate } from '@/lib/date-utils';

interface DocDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DocDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getCachedDocumentBySlug(slug);
  if (!doc) return { title: 'Không tìm thấy tài liệu - iMath.vn' };
  return {
    title: `${doc.title} - iMath.vn`,
    description: doc.excerpt,
  };
}

export default async function DocumentDetailPage({ params }: DocDetailProps) {
  const { slug } = await params;
  const doc = await getCachedDocumentBySlug(slug);
  if (!doc) notFound();

  const relatedDocs = await prisma.mathDocument.findMany({
    where: {
      status: 'PUBLISHED',
      gradeSlug: doc.gradeSlug,
      id: { not: doc.id },
    },
    select: docCardSelect,
    orderBy: { publishedAt: 'desc' },
    take: 6,
  });

  return (
    <main style={{ maxWidth: 1024, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link href="/tai-lieu" style={{ color: 'var(--color-primary)', fontWeight: 800, textDecoration: 'none' }}>
          ← Kho Tài Liệu
        </Link>
        {doc.gradeSlug && (
          <Link
            href={`/tai-lieu-lop/${doc.gradeSlug}`}
            style={{
              padding: '0.2rem 0.7rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            {doc.gradeName || doc.gradeSlug}
          </Link>
        )}
        {doc.topicSlug && (
          <Link
            href={`/chu-de-tai-lieu/${doc.topicSlug}`}
            style={{
              padding: '0.2rem 0.7rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-secondary-light)',
              color: 'var(--color-secondary-dark)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            {doc.topicName || doc.topicSlug}
          </Link>
        )}
      </div>

      <article
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <h1 style={{ margin: '0 0 0.6rem', fontSize: '1.85rem', fontWeight: 900, lineHeight: 1.35 }}>
          {doc.title}
        </h1>
        <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '1.5rem' }}>
          Ngày đăng: {formatVnDate(doc.publishedAt)}
        </div>

        <div
          className="imath-article-content"
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      </article>

      {relatedDocs.length > 0 && (
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem' }}>
            📚 Các Phiếu Bài Tập Cùng Khối Lớp
          </h2>
          <div className="grid-3col-safe">
            {relatedDocs.map((item) => (
              <Link
                key={item.id}
                href={`/tai-lieu/${item.slug}`}
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
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                  {item.gradeName} • {item.topicName}
                </div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
