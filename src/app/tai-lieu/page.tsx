import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { docCardSelect } from '@/lib/cached-queries';
import { DocumentFilterBar } from '@/components/storefront/DocumentFilterBar';
import { EmptyState } from '@/components/ui/EmptyState';
import { formatVnDate } from '@/lib/date-utils';

interface TaiLieuPageProps {
  searchParams: Promise<{ q?: string; grade?: string; topic?: string; page?: string }>;
}

export default async function TaiLieuPage({ searchParams }: TaiLieuPageProps) {
  const params = await searchParams;
  const q = (params.q || '').trim();
  const grade = (params.grade || '').trim();
  const topic = (params.topic || '').trim();
  const currentPage = Math.max(1, Number(params.page || '1') || 1);
  const pageSize = 15;

  const where = {
    status: 'PUBLISHED',
    ...(grade ? { gradeSlug: grade } : {}),
    ...(topic ? { topicSlug: topic } : {}),
    ...(q
      ? {
          OR: [{ title: { contains: q } }, { excerpt: { contains: q } }],
        }
      : {}),
  };

  const [docs, totalCount] = await Promise.all([
    prisma.mathDocument.findMany({
      where,
      select: docCardSelect,
      orderBy: { publishedAt: 'desc' },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    }),
    prisma.mathDocument.count({ where }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const buildPageHref = (page: number) => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (grade) sp.set('grade', grade);
    if (topic) sp.set('topic', topic);
    sp.set('page', String(page));
    return `/tai-lieu?${sp.toString()}`;
  };

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: '0 0 0.4rem', fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
          📖 Kho Tài Liệu & Phiếu Bài Tập Toán Có Lời Giải
        </h1>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontWeight: 700 }}>
          Tổng cộng {totalCount} bộ phiếu bài tập theo tuần, đề kiểm tra giữa kỳ và cuối kỳ chuẩn chương trình
        </p>
      </div>

      <DocumentFilterBar initialSearch={q} initialGrade={grade} initialTopic={topic} />

      {docs.length === 0 ? (
        <EmptyState
          title="Không tìm thấy tài liệu phù hợp"
          description="Hãy thử đổi bộ lọc Lớp học hoặc Chủ đề để xem thêm các bộ phiếu bài tập khác."
        />
      ) : (
        <>
          <div className="grid-3col-safe">
            {docs.map((doc) => (
              <Link
                key={doc.id}
                href={`/tai-lieu/${doc.slug}`}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  color: 'var(--color-text)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                    {doc.gradeName && (
                      <span
                        style={{
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-pill)',
                          background: 'var(--color-primary-light)',
                          color: 'var(--color-primary)',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                        }}
                      >
                        {doc.gradeName}
                      </span>
                    )}
                    {doc.topicName && (
                      <span
                        style={{
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-pill)',
                          background: 'var(--color-secondary-light)',
                          color: 'var(--color-secondary-dark)',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                        }}
                      >
                        {doc.topicName}
                      </span>
                    )}
                  </div>
                  <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.08rem', fontWeight: 800, lineHeight: 1.4 }}>
                    {doc.title}
                  </h2>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                    {doc.excerpt.slice(0, 130)}...
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                  }}
                >
                  <span>Cập nhật: {formatVnDate(doc.publishedAt)}</span>
                  <span>Xem & Tải phiếu →</span>
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
                    href={buildPageHref(p)}
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
        </>
      )}
    </main>
  );
}
