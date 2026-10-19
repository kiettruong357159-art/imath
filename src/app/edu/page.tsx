import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function EduPortalPage() {
  const tools = await prisma.interactiveTool.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    take: 24,
  });

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af, #2477f3)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          color: '#fff',
          marginBottom: '2rem',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <h1 style={{ margin: '0 0 0.5rem', fontSize: '2.1rem', fontWeight: 900, fontFamily: 'var(--font-display)' }}>
          🎓 Cổng Học Tập Thông Minh — edu.imath.vn
        </h1>
        <p style={{ margin: '0 0 1.25rem', fontSize: '1.05rem', opacity: 0.92, maxWidth: 720 }}>
          Lộ trình học toán cá nhân hóa từ Lớp 1 đến Lớp 12, kết hợp Đấu trường thi đấu trực tuyến và 24 phòng luyện tập tương tác.
        </p>
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
          <Link
            href="/dau-truong"
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-pill)',
              background: '#58cc02',
              color: '#fff',
              fontWeight: 900,
              textDecoration: 'none',
            }}
          >
            🏆 Vào Đấu Trường Super Arena
          </Link>
          <Link
            href="/tai-lieu"
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(255,255,255,0.18)',
              color: '#fff',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            📖 Kho Tài Liệu Tuần
          </Link>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>
        Chọn Lớp & Phòng Luyện Tập Trực Tuyến
      </h2>
      <div className="grid-3col-safe">
        {tools.map((tool) => (
          <Link
            key={tool.id}
            href={tool.toolUrl}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              textDecoration: 'none',
              color: 'var(--color-text)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}
            >
              {tool.iconText}
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.2rem', fontSize: '1.02rem', fontWeight: 800 }}>{tool.title}</h3>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 800 }}>
                Bắt đầu làm bài →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
