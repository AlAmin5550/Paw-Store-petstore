import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;

  if (!secret) {
    return NextResponse.next();
  }

  let token = null;
  try {
    token = await getToken({ req: request, secret });
  } catch {
    token = null;
  }

  if (!token) {
    return NextResponse.next();
  }

  const userRole = String(token?.role || '').trim().toLowerCase();

  if (userRole !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
