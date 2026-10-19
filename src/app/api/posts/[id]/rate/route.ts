import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { ratePostAtomic } from '@/lib/admin-services';

const RateSchema = z.object({
  stars: z.number().min(1).max(5),
});

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body: unknown = await req.json();
    const parsed = RateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'INVALID_STARS' }, { status: 400 });
    }

    const forwarded = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const ipHash = crypto.createHash('sha256').update(forwarded).digest('hex').slice(0, 16);

    const updated = await ratePostAtomic(id, parsed.data.stars, ipHash);
    return NextResponse.json(updated);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'ERROR';
    if (msg === 'POST_NOT_FOUND') {
      return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
    }
    return NextResponse.json({ error: 'SERVER_ERROR' }, { status: 500 });
  }
}
