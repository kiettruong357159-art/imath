import { NextRequest, NextResponse } from 'next/server';
import { verifySessionTokenEdge } from './lib/auth-edge';
import { SESSION_COOKIE_NAME, getSessionSecret } from './lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    const session = token ? await verifySessionTokenEdge(token, getSessionSecret()) : null;

    if (!session || (session.role !== 'ADMIN' && !session.permissions.includes('*'))) {
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl, 307);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
