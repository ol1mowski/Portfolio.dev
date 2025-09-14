import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const path = request.nextUrl.pathname;

  if (path.startsWith('/Thanks/')) {
    if (!session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(de|en|pl)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)', '/Thanks/:path*'],
};
