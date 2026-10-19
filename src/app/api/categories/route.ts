import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/auth';
import { deleteCategorySafe } from '@/lib/admin-services';

export async function GET() {
  const items = await prisma.category.findMany({
    orderBy: { name: 'asc' },
    take: 100,
    include: {
      _count: { select: { posts: true } },
    },
  });
  return NextResponse.json({ items });
}

export const DELETE = withAuth(async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get('id') || '';
  if (!id) {
    return NextResponse.json({ error: 'MISSING_ID' }, { status: 400 });
  }
  try {
    await deleteCategorySafe(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : '';
    if (msg === 'CATEGORY_IN_USE') {
      return NextResponse.json(
        {
          error: 'CATEGORY_IN_USE',
          message: 'Không thể xóa cứng chuyên mục đang chứa bài viết. Vui lòng chuyển sang trạng thái Ngưng hoạt động (isActive: false).',
        },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: 'SERVER_ERROR' }, { status: 500 });
  }
}, 'categories:delete');
