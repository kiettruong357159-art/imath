import React from 'react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer
      style={{
        background: '#0f2342',
        color: '#e2e8f0',
        padding: '3rem 1.25rem 2rem',
        marginTop: '4rem',
        borderTop: '4px solid var(--color-primary)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '2rem',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 0.75rem', color: '#fff', fontSize: '1.3rem', fontWeight: 900 }}>
            iMath.vn
          </h3>
          <p style={{ margin: 0, fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65 }}>
            Nền tảng học Toán online miễn phí từ Lớp 1 đến Lớp 12: luyện bài theo đúng tuần học trên lớp, phiếu bài tập có lời giải chi tiết, ba mẹ theo dõi kết quả học tập của con.
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.75rem', color: '#fff', fontSize: '1rem', fontWeight: 800 }}>
            Học Theo Cấp Học
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem', fontSize: '0.9rem' }}>
            <li><Link href="/toan-tieu-hoc-chuong-trinh-lop-1-den-lop-5" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Toán Tiểu Học (Lớp 1 – 5)</Link></li>
            <li><Link href="/toan-trung-hoc-co-so" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Toán THCS (Lớp 6 – 9)</Link></li>
            <li><Link href="/toan-thpt" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Toán THPT (Lớp 10 – 12)</Link></li>
            <li><Link href="/phuong-phap-hoc-toan" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Phương Pháp Học Toán</Link></li>
            <li><Link href="/ky-nang-vs-tam-ly" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Kỹ Năng & Tâm Lý</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.75rem', color: '#fff', fontSize: '1rem', fontWeight: 800 }}>
            Tiện Ích & Đấu Trường
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem', fontSize: '0.9rem' }}>
            <li><Link href="/tien-ich" style={{ color: '#cbd5e1', textDecoration: 'none' }}>24 Tiện Ích Toán Tương Tác</Link></li>
            <li><Link href="/dau-truong" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Đấu Trường Toán Học iMath</Link></li>
            <li><Link href="/edu" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Lộ Trình Học Cá Nhân Hóa (Edu)</Link></li>
            <li><Link href="/cau-do-vui" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Câu Đố Vui Tư Duy Logic</Link></li>
            <li><Link href="/tai-lieu" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Kho Tài Liệu & Đề Thi Có Lời Giải</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ margin: '0 0 0.75rem', color: '#fff', fontSize: '1rem', fontWeight: 800 }}>
            Tài Liệu Theo Lớp
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem', fontSize: '0.9rem' }}>
            <li><Link href="/tai-lieu-lop/toan-lop-1" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 1</Link></li>
            <li><Link href="/tai-lieu-lop/toan-lop-2" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 2</Link></li>
            <li><Link href="/tai-lieu-lop/toan-lop-3" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 3</Link></li>
            <li><Link href="/tai-lieu-lop/toan-lop-4" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 4</Link></li>
            <li><Link href="/tai-lieu-lop/toan-lop-5" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 5</Link></li>
            <li><Link href="/tai-lieu-lop/toan-lop-6" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tài liệu Toán Lớp 6</Link></li>
          </ul>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '2rem auto 0',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#94a3b8',
        }}
      >
        <span>© 2026 iMath.vn — Học Toán Online Miễn Phí Lớp 1 Đến 12.</span>
        <span>Kiến trúc Next.js 15 + React 19 + Prisma ORM (Unified Core Architecture).</span>
      </div>
    </footer>
  );
}
