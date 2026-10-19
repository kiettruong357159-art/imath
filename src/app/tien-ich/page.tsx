import React from 'react';
import Link from 'next/link';
import { getCachedHubPage } from '@/lib/cached-queries';
import { prisma } from '@/lib/prisma';

export default async function TienIchPage() {
  const [hub, tools] = await Promise.all([
    getCachedHubPage('tien-ich'),
    prisma.interactiveTool.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      take: 50,
    }),
  ]);

  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
      <section style={{ maxWidth: 1280, margin: '2rem auto', padding: '0 1.25rem' }}>
        <h2 style={{ fontSize: '1.65rem', fontWeight: 900, marginBottom: '1rem' }}>
          Danh Sách Toàn Bộ 24 Công Cụ & Tiện Ích Tương Tác
        </h2>
        <div className="grid-3col-safe">
          {tools.map((t) => (
            <Link
              key={t.id}
              href={t.toolUrl}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem',
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
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}
              >
                {t.iconText}
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.05rem', fontWeight: 800 }}>
                  {t.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  {t.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
