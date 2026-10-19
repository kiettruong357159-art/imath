import React from 'react';

export default function RouteLoading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 220, width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }} />
      <div className="grid-3col-safe">
        <div className="skeleton-box" style={{ height: 260 }} />
        <div className="skeleton-box" style={{ height: 260 }} />
        <div className="skeleton-box" style={{ height: 260 }} />
      </div>
    </div>
  );
}
