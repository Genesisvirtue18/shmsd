import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { HOSPITAL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Signature Hospital handles information submitted through this website.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumb={[{ label: 'Privacy Policy' }]} />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-base leading-7 text-muted-foreground">
        <p>
          Information submitted through appointment forms is used to respond to your request and coordinate your
          visit. Appointment requests may open WhatsApp with the details you entered.
        </p>
        <h2 className="text-2xl font-semibold text-foreground">Information you provide</h2>
        <p>We may receive your name, phone number, email address, requested speciality, doctor, date and message.</p>
        <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
        <p>
          Do not submit urgent or highly sensitive medical information through the website. To ask about your data,
          contact <a className="font-semibold text-primary" href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a>.
        </p>
        <p>Last updated: 20 August 2026.</p>
      </article>
    </>
  )
}
