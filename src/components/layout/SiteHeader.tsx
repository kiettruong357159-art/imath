'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ChevronDown, Trophy, BookOpen, Wrench, ShieldCheck, GraduationCap, Menu, X } from 'lucide-react';

export function SiteHeader() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const timer = setTimeout(() => {
      startTransition(() => {
        router.replace(`/?s=${encodeURIComponent(trimmed)}`, { scroll: false });
      });
    }, 400);
    return () => clearTimeout(timer);
  }, [query, router]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setSearchOpen(false);
    startTransition(() => {
      router.push(`/?s=${encodeURIComponent(trimmed)}`);
    });
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'var(--color-text)',
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #2477f3, #58cc02)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.25rem',
              boxShadow: '0 4px 12px rgba(36, 119, 243, 0.28)',
            }}
          >
            ∑
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: '1.35rem', lineHeight: 1.1, color: '#14284b' }}>
              iMath<span style={{ color: '#2477f3' }}>.vn</span>
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
              Học Toán Online Lớp 1 – 12
            </div>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav
          aria-label="Điều hướng chính"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/hoc-theo-lop"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <GraduationCap size={17} color="#2477f3" />
            <span>Học theo lớp</span>
            <ChevronDown size={14} />
          </Link>

          <Link
            href="/goc-phu-huynh"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
            }}
          >
            👨‍👩‍👧 Góc phụ huynh
          </Link>

          <Link
            href="/dau-truong"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Trophy size={16} color="#f59e0b" />
            <span>Đấu trường</span>
          </Link>

          <Link
            href="/cau-do-vui"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
            }}
          >
            🧩 Câu đố vui
          </Link>

          <Link
            href="/tai-lieu"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <BookOpen size={16} color="#10b981" />
            <span>Tài liệu</span>
          </Link>

          <Link
            href="/tien-ich"
            style={{
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              color: 'var(--color-text)',
              fontWeight: 800,
              fontSize: '0.92rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Wrench size={16} color="#7c3aed" />
            <span>Tiện ích (24)</span>
          </Link>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            type="button"
            onClick={() => setSearchOpen((p) => !p)}
            aria-label="Tìm kiếm bài viết"
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              border: '1px solid var(--color-border-strong)',
              background: searchOpen ? 'var(--color-primary-light)' : 'var(--color-surface)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Search size={17} />
          </button>

          <Link
            href="/edu"
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-pill)',
              background: 'linear-gradient(135deg, #58cc02, #46a302)',
              color: '#fff',
              fontWeight: 900,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 3px 0 #388202',
              whiteSpace: 'nowrap',
            }}
          >
            Vào học
          </Link>

          <Link
            href="/admin"
            title="Quản trị CMS"
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--color-border-strong)',
              background: 'var(--color-surface)',
              color: 'var(--color-text-secondary)',
              fontWeight: 800,
              fontSize: '0.82rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <ShieldCheck size={15} />
            <span>CMS</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Mở menu"
            style={{
              display: 'none',
              width: 38,
              height: 38,
              borderRadius: 10,
              border: '1px solid var(--color-border)',
              background: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Live Search Bar Dropdown */}
      {searchOpen && (
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            background: 'var(--color-surface-muted)',
            padding: '0.85rem 1.25rem',
          }}
        >
          <form
            onSubmit={handleSearchSubmit}
            style={{
              maxWidth: 720,
              margin: '0 auto',
              display: 'flex',
              gap: '0.6rem',
            }}
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập bài toán, lớp học hoặc phiếu bài tập cần tìm (tự động lọc sau 400ms)..."
              style={{
                flex: 1,
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-border-strong)',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-main)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={isPending}
              style={{
                padding: '0.65rem 1.35rem',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: 'var(--color-primary)',
                color: '#fff',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              {isPending ? 'Đang tìm...' : 'Tìm bài viết'}
            </button>
          </form>
        </div>
      )}

      {/* Quick Grade Strip */}
      <div
        style={{
          background: '#eff6ff',
          borderTop: '1px solid #dbeafe',
          padding: '0.35rem 1.25rem',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.82rem',
            fontWeight: 800,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: 'var(--color-primary)' }}>Chọn nhanh:</span>
          {[1, 2, 3, 4, 5].map((g) => (
            <Link
              key={g}
              href={`/hoc-theo-lop/lop-${g}`}
              style={{
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-pill)',
                background: '#fff',
                border: '1px solid #bfdbfe',
                color: '#1e40af',
                textDecoration: 'none',
              }}
            >
              Lớp {g}
            </Link>
          ))}
          {[6, 7, 8, 9].map((g) => (
            <Link
              key={g}
              href={`/tienich/cap2/toan-cap-2-truc-quan.html?lop=${g}`}
              style={{
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-pill)',
                background: '#fff',
                border: '1px solid #c7d2fe',
                color: '#3730a3',
                textDecoration: 'none',
              }}
            >
              Toán Lớp {g}
            </Link>
          ))}
          <Link
            href="/luyen-thi-vao-lop-6-truong-trong-diem"
            style={{
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              background: '#fef3c7',
              border: '1px solid #fde68a',
              color: '#92400e',
              textDecoration: 'none',
            }}
          >
            🎯 Ôn vào lớp 6 CLC
          </Link>
          <Link
            href="/tienich/cap2/toan-cap-2-truc-quan.html?che-do=clc"
            style={{
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              background: '#ede9fe',
              border: '1px solid #ddd6fe',
              color: '#5b21b6',
              textDecoration: 'none',
            }}
          >
            🏅 Ôn vào lớp 10 CLC
          </Link>
        </div>
      </div>
    </header>
  );
}
