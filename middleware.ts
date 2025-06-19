// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const isAdminRoute = request.nextUrl.pathname.startsWith('/dashboard')

  // Debug log (hilangkan saat production)
  console.log('[Middleware] token:', token)

  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
