import { redirect, notFound } from 'next/navigation'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'
import { ROUTES } from '@/lib/routes'

type Params = { slug: string }

export function generateStaticParams() {
  return MANAGEMENT_TEAM.filter((member) => member.slug).map((member) => ({ slug: `dr-${member.slug}` }))
}

export default async function LegacyDoctorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const normalized = slug.replace(/^dr-/, '')
  const member = MANAGEMENT_TEAM.find((item) => item.slug === normalized)

  if (!member) {
    notFound()
  }

  redirect(ROUTES.doctor(member.department, member.slug!))
}
