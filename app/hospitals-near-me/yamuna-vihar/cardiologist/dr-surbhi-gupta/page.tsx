import { redirect } from 'next/navigation'
import { ROUTES } from '@/lib/routes'

export default function SurbhiCardiologistLegacyPage() {
  redirect(ROUTES.doctor('Obs. & Gynae', 'surbhi-gupta'))
}
