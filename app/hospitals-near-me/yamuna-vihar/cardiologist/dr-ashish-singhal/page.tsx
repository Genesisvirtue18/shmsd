import { redirect } from 'next/navigation'
import { ROUTES } from '@/lib/routes'

export default function AshishCardiologistLegacyPage() {
  redirect(ROUTES.doctor('Director', 'ashish-singhal'))
}
