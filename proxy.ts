import { randomUUID } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

const isDevelopment = process.env.NODE_ENV === 'development'

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(randomUUID()).toString('base64')
  const contentSecurityPolicy = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    // Keep host allowlisting effective for Vercel Analytics, while nonces
    // continue to authorize Next.js and our inline structured-data scripts.
    `script-src 'self' 'nonce-${nonce}'${isDevelopment ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-src 'self' https://www.google.com https://www.youtube.com https://youtube.com",
    'upgrade-insecure-requests',
  ].join('; ')

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicy)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('Content-Security-Policy', contentSecurityPolicy)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
