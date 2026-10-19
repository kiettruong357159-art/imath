import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { getCachedHubPage, postCardSelect, docCardSelect } from '@/lib/cached-queries';
import { SafeImage } from '@/components/ui/SafeImage';
import { EmptyState } from '@/components/ui/EmptyState';
import { formatVnDate } from '@/lib/date-utils';

interface HomePageProps {
  searchParams: Promise<{ s?: string; page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedParams = await searchParams;
  const searchQuery = (resolvedParams.s || '').trim();
  const currentPage = Math.max(1, Number(resolvedParams.page || '1') || 1);
  const pageSize = 12;

  if (searchQuery) {
    const whereClause = {
      status: 'PUBLISHED',
      OR: [
        { title: { contains: searchQuery } },
        { excerpt: { contains: searchQuery } },
      ],
    };

    const [posts, totalPosts, docs] = await Promise.all([
      prisma.post.findMany({
        where: whereClause,
        select: postCardSelect,
        orderBy: { publishedAt: 'desc' },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      }),
      prisma.post.count({ where: whereClause }),
      prisma.mathDocument.findMany({
        where: {
          status: 'PUBLISHED',
          OR: [
            { title: { contains: searchQuery } },
            { excerpt: { contains: searchQuery } },
          ],
        },
        select: docCardSelect,
        orderBy: { publishedAt: 'desc' },
        take: 6,
      }),
    ]);

    return (
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <h1 style={{ margin: '0 0 0.4rem', fontSize: '1.85rem', fontWeight: 900 }}>
            Kết quả tìm kiếm cho: “{searchQuery}”
          </h1>
          <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontWeight: 700 }}>
            Tìm thấy {totalPosts} bài viết và {docs.length} phiếu bài tập phù hợp
          </p>
        </div>

        {docs.length > 0 && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '1rem' }}>
              📖 Phiếu Bài Tập & Đề Thi Liên Quan
            </h2>
            <div className="grid-3col-safe">
              {docs.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/tai-lieu/${doc.slug}`}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.15rem',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {doc.gradeName && (
                      <span
                        style={{
                          padding: '0.2rem 0.6rem',
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
                          padding: '0.2rem 0.6rem',
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
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>{doc.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                    {doc.excerpt.slice(0, 110)}...
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '1rem' }}>
            📚 Bài Học & Chuyên Đề Toán Học ({totalPosts})
          </h2>
          {posts.length === 0 ? (
            <EmptyState
              title="Không tìm thấy bài viết nào"
              description={`Không có bài viết nào khớp với từ khóa "${searchQuery}". Hãy thử từ khóa khác như "Toán lớp 1", "Phân số", "Hình học".`}
            />
          ) : (
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
                  <div style={{ height: 175, overflow: 'hidden', background: '#eff6ff' }}>
                    <SafeImage
                      src={post.featuredImage}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                      {post.category?.name || 'Chuyên đề Toán'} • {formatVnDate(post.publishedAt)}
                    </div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {post.excerpt.slice(0, 120)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    );
  }

  const [hubHome, latestPosts, latestDocs, tools] = await Promise.all([
    getCachedHubPage('home'),
    prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      select: postCardSelect,
      orderBy: { publishedAt: 'desc' },
      take: 9,
    }),
    prisma.mathDocument.findMany({
      where: { status: 'PUBLISHED' },
      select: docCardSelect,
      orderBy: { publishedAt: 'desc' },
      take: 6,
    }),
    prisma.interactiveTool.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      take: 24,
    }),
  ]);

  return (
    <div>
      {/* Original iMath.vn 2026 Home Layout rendered seamlessly */}
      {hubHome?.mainHtml && (
        <div dangerouslySetInnerHTML={{ __html: hubHome.mainHtml }} />
      )}

      {/* Dynamic Database-Driven Interactive Tools, Latest Documents & Posts */}
      <section style={{ maxWidth: 1280, margin: '3rem auto', padding: '0 1.25rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
              🧰 Trọn Bộ 24 Tiện Ích Luyện Toán Trực Quan
            </h2>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontWeight: 700 }}>
              Sinh đề tự động, làm bài trực tiếp trên trình duyệt và chấm điểm ngay lập tức
            </p>
          </div>
          <Link
            href="/tien-ich"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            Xem toàn bộ tiện ích →
          </Link>
        </div>

        <div className="grid-4col-safe">
          {tools.slice(0, 12).map((tool) => (
            <Link
              key={tool.id}
              href={tool.toolUrl}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem',
                textDecoration: 'none',
                color: 'var(--color-text)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                }}
              >
                {tool.iconText}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                  {tool.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  Mở công cụ luyện tập →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Math Documents from SQLite Database */}
      <section style={{ maxWidth: 1280, margin: '3rem auto', padding: '0 1.25rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
              📄 Phiếu Bài Tập & Đề Thi Mới Nhất (Có Lời Giải)
            </h2>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontWeight: 700 }}>
              Đồng bộ 244+ bộ phiếu bài tập theo tuần và đề ôn thi học kỳ từ Lớp 1 đến Lớp 6
            </p>
          </div>
          <Link
            href="/tai-lieu"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-secondary-light)',
              color: 'var(--color-secondary-dark)',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            Kho tài liệu (244+) →
          </Link>
        </div>

        <div className="grid-3col-safe">
          {latestDocs.map((doc) => (
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
                gap: '0.6rem',
              }}
            >
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
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
                      background: 'var(--color-accent-amber-light)',
                      color: '#92400e',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    }}
                  >
                    {doc.topicName}
                  </span>
                )}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.08rem', fontWeight: 800, lineHeight: 1.4 }}>
                {doc.title}
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                {doc.excerpt.slice(0, 120)}...
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts from SQLite Database */}
      <section style={{ maxWidth: 1280, margin: '3rem auto', padding: '0 1.25rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
              📚 Bài Viết & Chuyên Đề Học Toán Mới Nhất (322 Bài)
            </h2>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-secondary)', fontWeight: 700 }}>
              Kiến thức trọng tâm, mẹo giải nhanh và phương pháp đồng hành cùng con
            </p>
          </div>
          <Link
            href="/phuong-phap-hoc-toan"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            Xem chuyên mục →
          </Link>
        </div>

        <div className="grid-3col-safe">
          {latestPosts.map((post) => (
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
                  {post.category?.name || 'Toán Tư Duy'} • {formatVnDate(post.publishedAt)}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  {post.excerpt.slice(0, 115)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
