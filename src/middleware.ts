/**
 * Middleware configuration for Next.js authentication and route protection
 * This file handles authentication checks and route protection using NextAuth.js
 */

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

/**
 * Default middleware function that wraps the application with authentication
 * This ensures that protected routes are only accessible to authenticated users
 */
export default withAuth(
  /**
   * Custom middleware function that can be extended with additional logic
   * Currently returns the next response without additional processing
   * @param req - The incoming request object
   * @returns NextResponse - The response to be sent to the client
   */
  function middleware(req) {
    // Add custom middleware logic here if needed
    return NextResponse.next();
  },
  {
    /**
     * Configuration options for the authentication middleware
     * callbacks: Defines how to handle authorization checks
     * pages: Specifies custom pages for authentication flows
     */
    callbacks: {
      /**
       * Authorization callback that checks if a valid token exists
       * @param token - The authentication token from NextAuth.js
       * @returns boolean - True if the token exists, false otherwise
       */
      authorized: ({ token }) => !!token,
    },
    pages: {
      // Custom sign-in page path
      signIn: '/auth/signin',
    },
  }
);

/**
 * Route matcher configuration
 * Defines which routes should be protected by the authentication middleware
 * Uses Next.js route matching patterns
 */
export const config = {
  matcher: [
    '/profile/:path*',      // Protect all profile-related routes
    '/reviews/new/:path*',  // Protect new review creation routes
    '/reviews/edit/:path*', // Protect review editing routes
    '/reviews/delete/:path*', // Protect review deletion routes
  ],
};
