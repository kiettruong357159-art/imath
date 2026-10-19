import { NextResponse } from 'next/server';
import { getCurrentUserFromCookie } from '@/lib/auth';

export async function GET(req: Request) {
  const user = await getCurrentUserFromCookie(req);
  if (!user) {
    return NextResponse.json({ error: 'UNAUTHORIZED', message: 'Phiên đăng nhập đã hết hạn.' }, { status: 401 });
  }
  return NextResponse.json({ user });
}
