import type { MetadataRoute } from 'next'

const BASE_URL = 'https://shmsd.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/departments',
    '/doctors',
    '/services',
    '/facilities',
    '/gallery',
    '/contact',
    '/appointment',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
