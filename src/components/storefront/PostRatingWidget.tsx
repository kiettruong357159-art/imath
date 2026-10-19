'use client';

import React, { useOptimistic, useTransition, useState } from 'react';
import { Star, Loader2 } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

interface PostRatingWidgetProps {
  postId: string;
  initialAvg: number;
  initialCount: number;
}

export function PostRatingWidget({ postId, initialAvg, initialCount }: PostRatingWidgetProps) {
  const toast = useToast();
  const [isPending, startTransition] = useTransition();
  const [persistedState, setPersistedState] = useState({ avg: initialAvg, count: initialCount });
  const [optimisticState, addOptimisticRating] = useOptimistic(
    persistedState,
    (current, newStars: number) => {
      const nextCount = current.count + 1;
      const nextAvg = Number(((current.avg * current.count + newStars) / nextCount).toFixed(1));
      return { avg: nextAvg, count: nextCount };
    }
  );

  const handleRate = (stars: number) => {
    if (isPending) return;
    startTransition(async () => {
      addOptimisticRating(stars);
      try {
        const res = await fetch(`/api/posts/${postId}/rate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stars }),
        });
        if (!res.ok) {
          throw new Error('FAILED');
        }
        const data = (await res.json()) as { ratingAvg: number; ratingCount: number };
        setPersistedState({ avg: data.ratingAvg, count: data.ratingCount });
        toast.success(`Cảm ơn bạn đã đánh giá ${stars} sao!`);
      } catch {
        toast.error('Không thể gửi đánh giá lúc này. Vui lòng thử lại.');
      }
    });
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.65rem 1.1rem',
        borderRadius: 'var(--radius-pill)',
        background: '#fffbeb',
        border: '1px solid #fde68a',
        margin: '1.25rem 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={isPending}
            onClick={() => handleRate(star)}
            title={`Đánh giá ${star} sao`}
            style={{
              border: 'none',
              background: 'transparent',
              padding: 2,
              cursor: isPending ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Star
              size={20}
              fill={star <= Math.round(optimisticState.avg) ? '#f59e0b' : 'none'}
              color="#f59e0b"
            />
          </button>
        ))}
      </div>
      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#92400e' }}>
        {optimisticState.avg.toFixed(1)}/5 ({optimisticState.count} đánh giá)
      </span>
      {isPending && <Loader2 size={15} className="animate-spin" color="#92400e" />}
    </div>
  );
}
