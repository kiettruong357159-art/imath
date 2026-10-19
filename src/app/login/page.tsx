'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, ShieldCheck } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export default function LoginPage() {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('admin@imath.vn');
  const [password, setPassword] = useState('Admin@123');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { message?: string };
      if (!res.ok) {
        toast.error(data.message || 'Đăng nhập thất bại.');
        setSubmitting(false);
        return;
      }
      toast.success('Đăng nhập quản trị thành công!');
      router.replace('/admin');
    } catch {
      toast.error('Lỗi kết nối máy chủ.');
      setSubmitting(false);
    }
  };

  return (
    <main style={{ maxWidth: 440, margin: '4rem auto', padding: '0 1.25rem' }}>
      <div
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.25rem 2rem',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 900 }}>Quản Trị Hệ Thống iMath</h1>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
              Xác thực HMAC-SHA256 Edge Security
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label
              htmlFor="login-email"
              style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', marginBottom: '0.35rem' }}
            >
              Email quản trị
            </label>
            <input
              id="login-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-strong)',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-main)',
              }}
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              style={{ display: 'block', fontWeight: 800, fontSize: '0.88rem', marginBottom: '0.35rem' }}
            >
              Mật khẩu
            </label>
            <input
              id="login-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-strong)',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-main)',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: 'var(--color-primary)',
              color: '#fff',
              fontWeight: 900,
              fontSize: '0.98rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {submitting && <Loader2 size={18} className="animate-spin" />}
            <span>Đăng nhập vào CMS</span>
          </button>
        </form>
      </div>
    </main>
  );
}
