import React from 'react';
import { getCachedHubPage } from '@/lib/cached-queries';

export default async function LuyenThiVaoLop6Page() {
  const hub = await getCachedHubPage('luyen-thi-vao-lop-6-truong-trong-diem');
  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
    </div>
  );
}
