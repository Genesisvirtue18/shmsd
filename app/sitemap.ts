import type { MetadataRoute } from 'next'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'
import { SERVICES } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.specialities,
    ROUTES.doctors,
    ROUTES.facilities,
    ROUTES.gallery,
    ROUTES.contact,
    ROUTES.tpa,
    ROUTES.appointment,
    ROUTES.blog,
  ]

  const serviceRoutes = SERVICES.map((service) => ROUTES.service(service.slug))
  const doctorRoutes = MANAGEMENT_TEAM.filter((member) => member.slug).map((member) => ROUTES.doctor(member.slug))

  const routes = [...staticRoutes, ...serviceRoutes, ...doctorRoutes]

  return routes.map((route) => ({
    url: `https://shmsd.in${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === ROUTES.home ? 1 : 0.8,
  }))
}
