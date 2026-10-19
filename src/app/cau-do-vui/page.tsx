import React from 'react';
import { getCachedHubPage } from '@/lib/cached-queries';

export default async function CauDoVuiPage() {
  const hub = await getCachedHubPage('cau-do-vui');
  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
    </div>
  );
}
