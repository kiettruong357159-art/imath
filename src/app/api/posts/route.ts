import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/auth';
import { postCardSelect } from '@/lib/cached-queries';

const CreatePostSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  gradeSlug: z.string().optional(),
  status: z.enum(['PUBLISHED', 'DRAFT', 'ARCHIVED']).optional(),
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = Math.max(1, Number(url.searchParams.get('page') || '1') || 1);
  const limit = Math.min(100, Math.max(1, Number(url.searchParams.get('limit') || '15') || 15));
  const q = (url.searchParams.get('q') || '').trim();
  const status = (url.searchParams.get('status') || '').trim();

  const where = {
    ...(status ? { status } : {}),
    ...(q ? { title: { contains: q } } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.post.findMany({
      where,
      select: {
        ...postCardSelect,
        status: true,
      },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.post.count({ where }),
  ]);

  return NextResponse.json({
    items,
    total,
    page,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  });
}

export const POST = withAuth(async (req: Request) => {
  const body: unknown = await req.json();
  const parsed = CreatePostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'VALIDATION_ERROR', message: 'Dữ liệu bài viết không hợp lệ.' }, { status: 400 });
  }

  const created = await prisma.post.create({
    data: {
      title: parsed.data.title,
      slug: parsed.data.slug,
      excerpt: parsed.data.excerpt || '',
      content: parsed.data.content || '',
      gradeSlug: parsed.data.gradeSlug || '',
      status: parsed.data.status || 'PUBLISHED',
    },
  });

  return NextResponse.json({ item: created }, { status: 201 });
}, 'posts:write');
