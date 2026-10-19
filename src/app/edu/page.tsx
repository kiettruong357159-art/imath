import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function EduPortalPage() {
  const tools = await prisma.interactiveTool.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
    take: 25,
  });

  return (
    <main style={{ maxWidth: 1440, margin: '0 auto', padding: '1.5rem 1.25rem 3rem' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #d5e8ec',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: '0 14px 34px rgba(32, 85, 156, 0.10)',
          marginBottom: '2.5rem',
        }}
      >
        <iframe
          src="/edu-static/index.html"
          title="Cổng Học Tập Thông Minh — edu.imath.vn"
          style={{ width: '100%', height: '82vh', minHeight: 680, border: 'none', display: 'block' }}
        />
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem', color: '#12366d' }}>
        Chọn Nhanh Phòng Luyện Tập Trực Tuyến ({tools.length} Tiện Ích)
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
