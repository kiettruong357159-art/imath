import React from 'react';

export default function HomeLoading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 340, width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }} />
      <div className="grid-4col-safe" style={{ marginBottom: '2.5rem' }}>
        <div className="skeleton-box" style={{ height: 140 }} />
        <div className="skeleton-box" style={{ height: 140 }} />
        <div className="skeleton-box" style={{ height: 140 }} />
        <div className="skeleton-box" style={{ height: 140 }} />
      </div>
      <div className="grid-3col-safe">
        <div className="skeleton-box" style={{ height: 280 }} />
        <div className="skeleton-box" style={{ height: 280 }} />
        <div className="skeleton-box" style={{ height: 280 }} />
      </div>
    </div>
  );
}
