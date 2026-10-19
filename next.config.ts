import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingIncludes: {
    '/**': ['./prisma/dev.db'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      { protocol: 'https', hostname: 'imath.vn' },
      { protocol: 'https', hostname: 'edu.imath.vn' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
  async rewrites() {
    return [
      {
        source: '/tienich/cau-do-lich-su',
        destination: '/tienich/cau-do-lich-su.html',
      },
    ];
  },
};

export default nextConfig;
