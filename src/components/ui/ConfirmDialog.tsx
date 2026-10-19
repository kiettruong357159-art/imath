'use client';

import React, { useRef } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Loader2, AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'primary';
  loading?: boolean;
  onConfirm: () => void | Promise<void>;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy bỏ',
  variant = 'danger',
  loading = false,
  onConfirm,
}: ConfirmDialogProps) {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleConfirmClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (loading) return;
    await onConfirm();
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998,
          }}
        />
        <AlertDialog.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            cancelRef.current?.focus();
          }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '92vw',
            maxWidth: '440px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-border)',
            zIndex: 9999,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                backgroundColor: variant === 'danger' ? 'var(--color-danger-light)' : 'var(--color-primary-light)',
                color: variant === 'danger' ? 'var(--color-danger)' : 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AlertTriangle size={20} />
            </div>
            <AlertDialog.Title style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
              {title}
            </AlertDialog.Title>
          </div>
          <AlertDialog.Description
            style={{
              margin: '0 0 1.5rem 0',
              color: 'var(--color-text-secondary)',
              fontSize: '0.95rem',
            }}
          >
            {description}
          </AlertDialog.Description>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <AlertDialog.Cancel asChild>
              <button
                ref={cancelRef}
                type="button"
                disabled={loading}
                style={{
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
              >
                {cancelLabel}
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                type="button"
                disabled={loading}
                onClick={handleConfirmClick}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  background: variant === 'danger' ? 'var(--color-danger)' : 'var(--color-primary)',
                  color: '#fff',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.75 : 1,
                }}
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                <span>{confirmLabel}</span>
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
