import React from 'react';
import { getCachedHubPage } from '@/lib/cached-queries';

export default async function GocPhuHuynhPage() {
  const hub = await getCachedHubPage('goc-phu-huynh');
  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
    </div>
  );
}
