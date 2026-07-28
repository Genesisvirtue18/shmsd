import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/cards'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the medical specialties at Signature Heart & Multispeciality Hospital across medicine, surgery, cardiology, gynaecology, orthopaedics, neurology and more.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="A closer look at the specialties and expert care available across our hospital departments."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Specialities"
          title="Specialist care for every stage of treatment"
          description="Each card below reflects the specialist services and clinical areas highlighted in your reference images."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
