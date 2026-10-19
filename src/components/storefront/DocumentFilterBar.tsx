'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { Search } from 'lucide-react';

interface DocumentFilterBarProps {
  initialSearch: string;
  initialGrade: string;
  initialTopic: string;
}

const GRADE_OPTIONS = [
  { value: '', label: 'Tất cả các lớp (Lớp 1 – 6)' },
  { value: 'toan-lop-1', label: 'Toán Lớp 1' },
  { value: 'toan-lop-2', label: 'Toán Lớp 2' },
  { value: 'toan-lop-3', label: 'Toán Lớp 3' },
  { value: 'toan-lop-4', label: 'Toán Lớp 4' },
  { value: 'toan-lop-5', label: 'Toán Lớp 5' },
  { value: 'toan-lop-6', label: 'Toán Lớp 6' },
];

const TOPIC_OPTIONS = [
  { value: '', label: 'Tất cả chủ đề' },
  { value: 'cong-tru-nhan-chia', label: 'Cộng trừ nhân chia' },
  { value: 'toan-loi-van', label: 'Toán có lời văn' },
  { value: 'hinh-hoc', label: 'Hình học' },
  { value: 'so-sanh', label: 'So sánh số' },
  { value: 'so-thap-phan', label: 'Số thập phân' },
  { value: 'thi-trong-ki', label: 'Đề thi giữa kỳ & cuối kỳ' },
  { value: 'thi-hsg', label: 'Bồi dưỡng Học sinh giỏi' },
];

export function DocumentFilterBar({
  initialSearch,
  initialGrade,
  initialTopic,
}: DocumentFilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState(initialSearch);
  const [grade, setGrade] = useState(initialGrade);
  const [topic, setTopic] = useState(initialTopic);
  const [, startTransition] = useTransition();

  const applyFilters = (nextSearch: string, nextGrade: string, nextTopic: string) => {
    const params = new URLSearchParams();
    if (nextSearch.trim()) params.set('q', nextSearch.trim());
    if (nextGrade) params.set('grade', nextGrade);
    if (nextTopic) params.set('topic', nextTopic);
    const qs = params.toString();
    startTransition(() => {
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    });
  };

  useEffect(() => {
    if (search === initialSearch) return;
    const timer = setTimeout(() => {
      applyFilters(search, grade, topic);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="admin-filter-card">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.55rem 0.9rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--color-border-strong)',
          background: 'var(--color-surface)',
        }}
      >
        <Search size={17} color="var(--color-text-muted)" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm phiếu bài tập theo tuần, đề thi học kỳ..."
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontSize: '0.92rem',
            fontFamily: 'var(--font-main)',
          }}
        />
      </div>

      <CustomSelect
        value={grade}
        options={GRADE_OPTIONS}
        placeholder="Chọn lớp học"
        onChange={(val) => {
          setGrade(val);
          applyFilters(search, val, topic);
        }}
      />

      <CustomSelect
        value={topic}
        options={TOPIC_OPTIONS}
        placeholder="Chọn chủ đề"
        searchable
        onChange={(val) => {
          setTopic(val);
          applyFilters(search, grade, val);
        }}
      />
    </div>
  );
}
