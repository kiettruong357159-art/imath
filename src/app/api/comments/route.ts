import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.comment.findMany({
      include: {
        post: { select: { title: true, slug: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json({ items, total: items.length });
  } catch (err) {
    console.error('[GET /api/comments]', err);
    return NextResponse.json({ error: 'Không thể tải danh sách bình luận.' }, { status: 500 });
  }
}
