import React from 'react';
import { getCachedHubPage } from '@/lib/cached-queries';

export default async function HocTheoLopPage() {
  const hub = await getCachedHubPage('hoc-theo-lop');
  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
    </div>
  );
}
