'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Phân trang" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          padding: '0.45rem 0.7rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--color-border-strong)',
          background: 'var(--color-surface)',
          cursor: currentPage <= 1 ? 'not-allowed' : 'pointer',
          opacity: currentPage <= 1 ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((p) => {
        const active = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            style={{
              minWidth: 36,
              height: 36,
              borderRadius: 'var(--radius-sm)',
              border: active ? 'none' : '1px solid var(--color-border-strong)',
              background: active ? 'var(--color-primary)' : 'var(--color-surface)',
              color: active ? '#fff' : 'var(--color-text)',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            {p}
          </button>
        );
      })}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          padding: '0.45rem 0.7rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--color-border-strong)',
          background: 'var(--color-surface)',
          cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
          opacity: currentPage >= totalPages ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
