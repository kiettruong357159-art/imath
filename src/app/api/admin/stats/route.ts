import { NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const GET = withAuth(async () => {
  const [totalPosts, totalDocs, totalTools, totalCategories, postsByGrade] = await Promise.all([
    prisma.post.count(),
    prisma.mathDocument.count(),
    prisma.interactiveTool.count({ where: { isActive: true } }),
    prisma.category.count({ where: { isActive: true } }),
    prisma.post.groupBy({
      by: ['status'],
      _count: { _all: true },
    }),
  ]);

  return NextResponse.json({
    totalPosts,
    totalDocs,
    totalTools,
    totalCategories,
    postsByStatus: postsByGrade.map((g) => ({ status: g.status, count: g._count._all })),
    serverTime: new Date().toISOString(),
  });
}, 'admin:view');
