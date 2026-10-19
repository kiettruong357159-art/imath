import React from 'react';

export default function LoginLoading() {
  return (
    <div style={{ maxWidth: 440, margin: '4rem auto', padding: '0 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 340, width: '100%', borderRadius: 'var(--radius-lg)' }} />
    </div>
  );
}
