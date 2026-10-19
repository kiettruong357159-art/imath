import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { signSessionToken } from '@/lib/auth-edge';
import { SESSION_COOKIE_NAME, getSessionSecret } from '@/lib/auth';
import { safeParseJsonArray } from '@/lib/image-fallback';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = LoginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'INVALID_INPUT', message: 'Email hoặc mật khẩu không hợp lệ.' }, { status: 400 });
    }

    const { email, password } = parsed.data;
    const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

    const user = await prisma.user.findFirst({
      where: { email: email.toLowerCase().trim(), isActive: true },
      include: { role: true },
    });

    if (!user || user.passwordHash !== passwordHash) {
      return NextResponse.json({ error: 'INVALID_CREDENTIALS', message: 'Email hoặc mật khẩu không chính xác.' }, { status: 401 });
    }

    const permissions = safeParseJsonArray(user.role.permissions);
    const parsedPerms = permissions.length > 0 ? permissions : ['*'];

    const token = await signSessionToken(
      {
        userId: user.id,
        email: user.email,
        role: user.role.code,
        permissions: parsedPerms,
        exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
      },
      getSessionSecret()
    );

    const res = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role.code,
      },
    });

    res.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;
  } catch {
    return NextResponse.json({ error: 'SERVER_ERROR', message: 'Đã xảy ra lỗi khi đăng nhập.' }, { status: 500 });
  }
}
