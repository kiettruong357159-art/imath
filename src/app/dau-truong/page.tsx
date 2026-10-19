import React from 'react';

export default function DauTruongPage() {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 76px)' }}>
      <iframe
        src="/dau-truong-static/index.html"
        title="Đấu Trường Toán Học - iMath Super Arena"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
