import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { SessionPayload, verifySessionTokenEdge } from './auth-edge';

export const SESSION_COOKIE_NAME = 'session_token';

export function getSessionSecret(): string {
  return process.env.SESSION_SECRET || 'imath-super-secret-hmac-key-2026-production-32b';
}

function parseCookieHeader(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};
  const result: Record<string, string> = {};
  for (const part of cookieHeader.split(';')) {
    const idx = part.indexOf('=');
    if (idx > -1) {
      const k = part.slice(0, idx).trim();
      const v = part.slice(idx + 1).trim();
      result[k] = decodeURIComponent(v);
    }
  }
  return result;
}

export async function getCurrentUserFromCookie(reqOrCookieHeader?: Request | string | null): Promise<SessionPayload | null> {
  let token: string | undefined;

  if (typeof reqOrCookieHeader === 'string') {
    token = parseCookieHeader(reqOrCookieHeader)[SESSION_COOKIE_NAME];
  } else if (reqOrCookieHeader && typeof reqOrCookieHeader === 'object' && 'headers' in reqOrCookieHeader) {
    const cookieHeader = reqOrCookieHeader.headers.get('cookie');
    token = parseCookieHeader(cookieHeader)[SESSION_COOKIE_NAME];
  }

  if (!token) {
    try {
      const cookieStore = await cookies();
      token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    } catch {
      // Called outside Next.js request context (e.g. unit test)
    }
  }

  if (!token) return null;
  return verifySessionTokenEdge(token, getSessionSecret());
}

export function hasPermission(userPermissions: string[], requiredPermission?: string): boolean {
  if (!requiredPermission) return true;
  if (userPermissions.includes('*')) return true;
  if (userPermissions.includes(requiredPermission)) return true;
  const [resource] = requiredPermission.split(':');
  if (resource && userPermissions.includes(`${resource}:*`)) return true;
  return false;
}

export function withAuth<TContext = unknown>(
  handler: (req: Request, context: TContext, user: SessionPayload) => Promise<Response>,
  requiredPermission?: string
) {
  return async (req: Request, context: TContext): Promise<Response> => {
    const user = await getCurrentUserFromCookie(req);
    if (!user) {
      return NextResponse.json(
        { error: 'UNAUTHORIZED', message: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.' },
        { status: 401 }
      );
    }
    if (!hasPermission(user.permissions, requiredPermission)) {
      return NextResponse.json(
        { error: 'FORBIDDEN', message: 'Bạn không có quyền thực hiện thao tác này.' },
        { status: 403 }
      );
    }
    return handler(req, context, user);
  };
}
