import React from 'react';

export default function TaiLieuLoading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 52, width: '45%', marginBottom: '1rem' }} />
      <div className="skeleton-box" style={{ height: 72, width: '100%', marginBottom: '1.5rem' }} />
      <div className="grid-3col-safe">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="skeleton-box" style={{ height: 220 }} />
        ))}
      </div>
    </div>
  );
}
