import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Ambulance } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { AppointmentForm } from '@/components/appointment-form'
import { HOSPITAL } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact Signature Heart & Multispeciality Hospital. Call ${HOSPITAL.phone}, email ${HOSPITAL.email} or visit us at ${HOSPITAL.address}. 24x7 emergency services available.`,
  alternates: { canonical: '/hospitals-near-me/yamuna-vihar/contact' },
}

const CONTACT_ITEMS = [
  { icon: MapPin, label: 'Address', value: HOSPITAL.address },
  { icon: Phone, label: 'Phone', value: HOSPITAL.phone, href: HOSPITAL.phoneHref },
  { icon: Mail, label: 'Email', value: HOSPITAL.email, href: `mailto:${HOSPITAL.email}` },
  { icon: Clock, label: 'Hours', value: HOSPITAL.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a question or need to reach us? We are here around the clock to help you and your family."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="We would love to hear from you"
              description="Reach out for appointments, general enquiries or emergency assistance."
            />
            <div className="mt-8 space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <Reveal key={item.label}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
             
            </div>
          </div>

          <Reveal delay={0.1}>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">Book an Appointment</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and our team will confirm your slot shortly.
              </p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Map" className="border-t border-border">
        <div className="relative h-[360px] w-full overflow-hidden">
          <iframe
            title={`Map of ${HOSPITAL.name}`}
            src={HOSPITAL.mapEmbedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
