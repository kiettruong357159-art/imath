import React from 'react';

export default function RouteLoading() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 580, width: '100%', borderRadius: 'var(--radius-lg)' }} />
    </div>
  );
}
