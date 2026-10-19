import React from 'react';

export default function TaiLieuLoading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 52, width: '45%', marginBottom: '1rem' }} />
      <div className="skeleton-box" style={{ height: 72, width: '100%', marginBottom: '1.5rem' }} />
      <div className="grid-3col-safe">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="skeleton-box" style={{ height: 220 }} />
        ))}
      </div>
    </div>
  );
}
