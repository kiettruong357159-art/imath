import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.interactiveTool.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    return NextResponse.json({ items, total: items.length });
  } catch (err) {
    console.error('[GET /api/tools]', err);
    return NextResponse.json({ error: 'Không thể tải danh sách tiện ích.' }, { status: 500 });
  }
}
