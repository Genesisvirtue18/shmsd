import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Check, ShieldPlus } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section-heading'
import { StatsBar } from '@/components/home/stats'
import { CtaBanner } from '@/components/cta-banner'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/reveal'
import { Icon } from '@/components/icon'
import { WHY_CHOOSE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Signature Heart & Multispeciality Hospital — our mission, vision and commitment to personalized, affordable, world-class healthcare in Delhi.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Signature Hospital"
        description="Committed to delivering personalized care and creating a positive, comfortable environment for every patient during their stay with us."
        breadcrumb={[{ label: 'About' }]}
      />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="right">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image
                src="/images/about-team.png"
                alt="Signature Hospital medical team"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <ShieldPlus className="h-4 w-4" aria-hidden />
                Health Equality, Always
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Personalized care that puts you first
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At Signature Heart & Multispeciality Hospital, our top priority is providing individualized care that
                meets the unique needs of each patient. We go above and beyond to ensure that our patients feel at ease
                and comfortable during their stay with us.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With a team of expert doctors, nurses and support staff, we are fully committed to delivering the
                highest quality care and services. Whether you are receiving inpatient or outpatient care, you can rest
                assured you are in the best possible hands.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              text: 'To enhance the quality of life of our patients by treating everyone with the utmost respect and care, ensuring they feel valued, heard and supported throughout their treatment journey.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To be the most trusted multispeciality hospital in the region, where world-class, compassionate healthcare is always accessible and affordable.',
            },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <m.icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What sets us apart"
            description="From prevention to rehabilitation, our Centres of Excellence make sure every aspect of your care is seamless."
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <StaggerItem key={w.title} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={w.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground">Protect yourself and those you love</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Vaccination is crucial in preventing the spread of diseases and protecting individuals from severe
                illness. We encourage preventive care to safeguard the health of patients and the wider community — an
                ounce of prevention is worth a pound of cure.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {['Preventive check-ups', 'Vaccination drives', 'Community health'].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
