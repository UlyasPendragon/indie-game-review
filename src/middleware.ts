import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
    const isReviewerRoute = req.nextUrl.pathname.startsWith('/reviewer');
    const isEditorRoute = req.nextUrl.pathname.startsWith('/editor');

    // Redirect to sign in if not authenticated
    if (!token) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    // Role-based access control
    if (isAdminRoute && token.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (isReviewerRoute && !['reviewer', 'editor', 'admin'].includes(token.role as string)) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (isEditorRoute && !['editor', 'admin'].includes(token.role as string)) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/admin/:path*',
    '/reviewer/:path*',
    '/editor/:path*',
    '/api/admin/:path*',
    '/api/reviewer/:path*',
    '/api/editor/:path*',
  ],
}; 