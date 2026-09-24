// app/api/instagram/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 })
  }

  try {
    // Fetch from Instagram's oEmbed via the Next.js server (bypasses CORS)
    const response = await fetch(
      `https://www.instagram.com/oembed?url=${encodeURIComponent(url)}&omitscript=true`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NextJS-Server)',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Instagram API returned ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Instagram proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Instagram media' },
      { status: 500 }
    )
  }
}