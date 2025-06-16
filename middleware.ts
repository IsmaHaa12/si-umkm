// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Contoh validasi token atau redirect
  const token = request.cookies.get('token')?.value
  const isAdminPage = request.nextUrl.pathname.startsWith('/dashboard')

  if (isAdminPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Optional: konfigurasi matcher
export const config = {
  matcher: ['/dashboard/:path*'],
}
