import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/auth';
import { assertValidStatusTransition } from '@/lib/admin-services';

const PatchPostSchema = z.object({
  status: z.enum(['PUBLISHED', 'DRAFT', 'ARCHIVED']).optional(),
  title: z.string().min(3).optional(),
});

export const PATCH = withAuth(async (req: Request, context: { params: Promise<{ id: string }> }) => {
  const { id } = await context.params;
  const body: unknown = await req.json();
  const parsed = PatchPostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'INVALID_INPUT' }, { status: 400 });
  }

  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
  }

  if (parsed.data.status) {
    assertValidStatusTransition(existing.status, parsed.data.status);
  }

  const updated = await prisma.post.update({
    where: { id },
    data: {
      ...(parsed.data.status ? { status: parsed.data.status } : {}),
      ...(parsed.data.title ? { title: parsed.data.title } : {}),
    },
  });

  return NextResponse.json({ item: updated });
}, 'posts:write');

export const DELETE = withAuth(async (req: Request, context: { params: Promise<{ id: string }> }) => {
  void req;
  const { id } = await context.params;
  await prisma.post.deleteMany({ where: { id } });
  return NextResponse.json({ ok: true });
}, 'posts:delete');
