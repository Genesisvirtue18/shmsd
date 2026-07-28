import type { Metadata } from 'next'
import { CalendarCheck, Clock, ShieldCheck, PhoneCall } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { AppointmentForm } from '@/components/appointment-form'
import { FaqAccordion } from '@/components/faq'
import { SectionHeading } from '@/components/section-heading'
import { HOSPITAL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description:
    'Book an appointment at Signature Heart & Multispeciality Hospital. Choose your department, pick a convenient time and our team will confirm your visit.',
  alternates: { canonical: '/appointment' },
}

const PERKS = [
  { icon: Clock, title: 'Quick Confirmation', text: 'Our team responds promptly to every request.' },
  { icon: ShieldCheck, title: 'Expert Specialists', text: 'Consult experienced doctors across specialities.' },
  { icon: PhoneCall, title: '24x7 Support', text: 'Reach us any time for urgent assistance.' },
]

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        title="Book an Appointment"
        description="Reserve your consultation in a few simple steps. We will confirm your slot as quickly as possible."
        breadcrumb={[{ label: 'Appointment' }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Schedule a Visit
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Your health, on your schedule
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Whether it is a routine check-up or a specialist consultation, booking with us is simple. Prefer to talk?
              Call us directly at{' '}
              <a href={HOSPITAL.phoneHref} className="font-semibold text-primary hover:underline">
                {HOSPITAL.phone}
              </a>
              .
            </p>
            <div className="mt-8 space-y-4">
              {PERKS.map((perk) => (
                <Reveal key={perk.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/15 text-secondary">
                      <perk.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{perk.title}</p>
                      <p className="text-sm text-muted-foreground">{perk.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
              <AppointmentForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to the questions our patients ask most often."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
