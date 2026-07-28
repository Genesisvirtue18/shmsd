import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { FACILITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Facilities & Infrastructure',
  description:
    'Modern infrastructure at Signature Hospital including a fully equipped ICU, sterile operation theatres, in-house laboratory, digital imaging and 24x7 ambulance and emergency services.',
  alternates: { canonical: '/facilities' },
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Facilities & Infrastructure"
        description="World-class infrastructure designed to support safe, effective and comfortable care at every stage."
        breadcrumb={[{ label: 'Facilities' }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="flex flex-col gap-16 sm:gap-24">
          {FACILITIES.map((facility, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={facility.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-lg">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                  <h2 className="text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                    {facility.title}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {facility.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {facility.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
