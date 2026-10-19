import React from 'react';

export default function DocumentDetailLoading() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1.25rem' }}>
      <div className="skeleton-box" style={{ height: 32, width: '35%', marginBottom: '0.75rem' }} />
      <div className="skeleton-box" style={{ height: 54, width: '85%', marginBottom: '1.5rem' }} />
      <div className="skeleton-box" style={{ height: 420, width: '100%' }} />
    </div>
  );
}
