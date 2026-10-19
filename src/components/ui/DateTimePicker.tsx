'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { DayPicker } from 'react-day-picker';
import { vi } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { formatVnDate, normalizeIso } from '@/lib/date-utils';
import 'react-day-picker/style.css';

interface DateTimePickerProps {
  value: string;
  onChange: (isoString: string) => void;
  placeholder?: string;
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = 'Chọn ngày...',
}: DateTimePickerProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const portalRef = useRef<HTMLDivElement | null>(null);

  const selectedDate = value ? new Date(value) : undefined;

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const top = Math.min(rect.bottom + 6, window.innerHeight - 340);
    const left = Math.min(rect.left, window.innerWidth - 320);
    setCoords({ top: Math.max(8, top), left: Math.max(8, left) });
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        portalRef.current &&
        !portalRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, updatePosition]);

  return (
    <div style={{ minWidth: 0, width: '100%' }}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((p) => !p)}
        style={{
          width: '100%',
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.5rem',
          padding: '0.6rem 0.9rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--color-border-strong)',
          background: 'var(--color-surface)',
          color: selectedDate ? 'var(--color-text)' : 'var(--color-text-muted)',
          fontWeight: 700,
          fontSize: '0.92rem',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selectedDate ? formatVnDate(selectedDate) : placeholder}
        </span>
        <CalendarIcon size={16} style={{ flexShrink: 0 }} />
      </button>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={portalRef}
            style={{
              position: 'fixed',
              top: coords.top,
              left: coords.left,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border-strong)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              padding: '0.75rem',
              zIndex: 10000,
            }}
          >
            <DayPicker
              mode="single"
              locale={vi}
              selected={selectedDate}
              onSelect={(day) => {
                if (day) {
                  const yyyy = day.getFullYear();
                  const mm = String(day.getMonth() + 1).padStart(2, '0');
                  const dd = String(day.getDate()).padStart(2, '0');
                  onChange(normalizeIso(`${yyyy}-${mm}-${dd}`));
                  setOpen(false);
                }
              }}
            />
          </div>,
          document.body
        )}
    </div>
  );
}
