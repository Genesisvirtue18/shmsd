import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/data'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'

const BASE_URL = 'https://shmsd.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
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

  const serviceRoutes = SERVICES.map((service) => `/services/${service.slug}`)
  const managementRoutes = MANAGEMENT_TEAM.filter((member) => member.slug).map(
    (member) => `/about/management/${member.slug}`,
  )

  const routes = [...staticRoutes, ...serviceRoutes, ...managementRoutes]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
