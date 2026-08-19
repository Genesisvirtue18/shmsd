import { redirect, notFound } from 'next/navigation'
import { ROUTES } from '@/lib/routes'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'

type Params = { slug: string }

export default async function ManagementDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const member = MANAGEMENT_TEAM.find((item) => item.slug === slug)

  if (!member) {
    notFound()
  }

  redirect(ROUTES.doctor(member.department, member.slug!))
}
