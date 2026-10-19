import React from 'react';

export default function RouteLoading() {
  return (
    <div style={{ maxWidth: 440, margin: '4rem auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 360, width: '100%', borderRadius: 'var(--radius-lg)' }} />
    </div>
  );
}
