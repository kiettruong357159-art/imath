import type { Metadata } from 'next';
import './globals.css';
import { ToastProvider } from '@/context/ToastContext';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';

export const metadata: Metadata = {
  title: 'Học Toán Online Miễn Phí Lớp 1 Đến 12 - iMath',
  description:
    'Học toán online miễn phí lớp 1 đến 12: luyện bài theo đúng tuần học trên lớp, phiếu bài tập có lời giải, ba mẹ xem kết quả của con.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/imath-assets/css/imath-bundle.css" />
      </head>
      <body>
        <ToastProvider>
          <SiteHeader />
          <div style={{ minHeight: '75vh' }}>{children}</div>
          <SiteFooter />
        </ToastProvider>
      </body>
    </html>
  );
}
