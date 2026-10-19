import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { docCardSelect } from '@/lib/cached-queries';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Math.max(1, Number(url.searchParams.get('page') || '1') || 1);
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit') || '15') || 15));
  const q = (url.searchParams.get('q') || '').trim();
  const grade = (url.searchParams.get('grade') || '').trim();

  const where = {
    ...(grade ? { gradeSlug: grade } : {}),
    ...(q ? { title: { contains: q } } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.mathDocument.findMany({
      where,
      select: docCardSelect,
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.mathDocument.count({ where }),
  ]);

  return NextResponse.json({
    items,
    total,
    page,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  });
}
