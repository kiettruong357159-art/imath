import React from 'react';

export default function AdminLoading() {
  return (
    <div className="admin-shell">
      <div className="admin-sidebar">
        <div className="skeleton-box" style={{ height: 42, width: '100%', marginBottom: '1rem' }} />
        <div className="skeleton-box" style={{ height: 38, width: '100%' }} />
        <div className="skeleton-box" style={{ height: 38, width: '100%' }} />
        <div className="skeleton-box" style={{ height: 38, width: '100%' }} />
      </div>
      <div className="admin-main">
        <div className="skeleton-box" style={{ height: 48, width: '35%', marginBottom: '1.25rem' }} />
        <div className="skeleton-box" style={{ height: 68, width: '100%', marginBottom: '1.25rem' }} />
        <div className="skeleton-box" style={{ height: 420, width: '100%' }} />
      </div>
    </div>
  );
}
