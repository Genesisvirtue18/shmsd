import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { HOSPITAL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'Important information about the health content and appointment requests on this website.',
  alternates: { canonical: '/medical-disclaimer' },
}

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHeader title="Medical Disclaimer" breadcrumb={[{ label: 'Medical Disclaimer' }]} />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-base leading-7 text-muted-foreground">
        <p>
          Website content is for general information and does not replace an examination, diagnosis or treatment
          plan from a qualified clinician.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Emergencies</h2>
        <p>
          Do not wait for an online response in an emergency. Call the hospital at{' '}
          <a className="font-semibold text-primary" href={HOSPITAL.phoneHref}>{HOSPITAL.phone}</a> or contact local
          emergency services.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Appointment requests</h2>
        <p>An online or WhatsApp request is not confirmed until the hospital team contacts you.</p>
        <p>Last updated: 20 August 2026.</p>
      </article>
    </>
  )
}
