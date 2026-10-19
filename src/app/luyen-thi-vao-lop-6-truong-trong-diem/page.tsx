import React from 'react';
import Script from 'next/script';
import { getCachedHubPage } from '@/lib/cached-queries';

export default async function LuyenThiVaoLop6Page() {
  const hub = await getCachedHubPage('luyen-thi-vao-lop-6-truong-trong-diem');
  return (
    <div>
      {hub?.mainHtml && <div dangerouslySetInnerHTML={{ __html: hub.mainHtml }} />}
      <Script src="/imath-assets/js/luyen-thi-lop-6/Cau_Hinh_Ma_Tran_Luyen_Thi_Lop_6.js" strategy="afterInteractive" />
      <Script src="/imath-assets/js/luyen-thi-lop-6/Bo_Sung_54_Cau_Lop_6.js" strategy="afterInteractive" />
      <Script src="/imath-assets/js/luyen-thi-lop-6/Du_Lieu_Luyen_Thi_Lop_6_Truong_Trong_Diem.js" strategy="afterInteractive" />
      <Script src="/imath-assets/js/luyen-thi-lop-6/Bo_Chon_De_Luyen_Thi_Lop_6.js" strategy="afterInteractive" />
      <Script src="/imath-assets/js/luyen-thi-lop-6/app-init.js" strategy="lazyOnload" />
    </div>
  );
}
