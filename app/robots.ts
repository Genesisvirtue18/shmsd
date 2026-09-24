import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://shmsd.in',
    sitemap: 'https://shmsd.in/sitemap.xml',
  }
}
