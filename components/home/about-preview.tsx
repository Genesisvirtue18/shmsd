import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Eye, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To deliver specialist-led care that is accessible, respectful and centered on each patient’s needs.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted multispeciality hospital in our region for outcomes, experience and compassion.',
  },
]

export function AboutPreview() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-primary/10">
              <Image
                src="/images/about-team.png"
                alt="Our team of doctors and nurses"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-xl sm:block">
              <p className="font-serif text-3xl font-bold">50k+</p>
              <p className="text-xs text-primary-foreground/80">Patients treated</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
              About Signature Hospital
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-serif text-xl font-semibold leading-tight text-foreground sm:text-2xl md:text-4xl">
              Compassionate care, organized like a premier hospital brand
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Our doctors, nurses and support teams work together to make every visit smoother, clearer and more
              reassuring. We focus on diagnosis, treatment and recovery as one connected experience, so patients feel
              guided at every step.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {missionVision.map((m, i) => (
              <Reveal key={m.title} delay={0.15 + i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                'Specialist-led multispeciality care',
                '24x7 emergency and ICU readiness',
                'Diagnostic support under one roof',
                'Respectful, patient-first service',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                Explore Specialities
                <ShieldCheck className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
