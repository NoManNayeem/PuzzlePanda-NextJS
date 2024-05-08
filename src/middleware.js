import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';


// Specify routes for admin and regular users
const adminProtectedRoutes = ['/admin'];
const userProtectedRoutes = ['/user'];
const publicRoutes = ['/login', '/register', '/'];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const isAdminRoute = adminProtectedRoutes.includes(pathname);
  const isUserRoute = userProtectedRoutes.includes(pathname);

  // Ensure Middleware does not run on API routes or static files
  if (pathname.match(/^\/api|^\/_next\/|^\/favicon.ico/)) {
    return NextResponse.next();
  }

  // Retrieve cookies using cookies-next
  const token = getCookie('token', { req });
  const userType = getCookie('usertype', { req });

  // Check if the request is attempting to access a protected route
  if (isAdminRoute || isUserRoute) {
    // If the user is not authenticated, redirect them to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // If the user is authenticated, ensure they have the correct userType for the route
    if ((isAdminRoute && userType !== 'Admin') || (isUserRoute && userType !== 'User')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Redirect authenticated users away from public pages to their dashboards
  if (publicRoutes.includes(pathname) && token) {
    const dashboardUrl = userType === 'Admin' ? '/admin' : '/user';
    return NextResponse.redirect(new URL(dashboardUrl, req.url));
  }

  return NextResponse.next();
}

// Ensure Middleware does not run on API routes or static files
export const config = {
  matcher: ['/((?!api|_next\/static|_next\/image|favicon.ico).*)'],
};
