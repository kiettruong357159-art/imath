import React from 'react';

export default function CatchAllLoading() {
  return (
    <div style={{ maxWidth: 1080, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 28, width: '30%', marginBottom: '0.85rem' }} />
      <div className="skeleton-box" style={{ height: 52, width: '80%', marginBottom: '1.5rem' }} />
      <div className="skeleton-box" style={{ height: 380, width: '100%' }} />
    </div>
  );
}
