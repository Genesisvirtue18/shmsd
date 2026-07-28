import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To enhance the quality of life of our patients through personalized, respectful and accessible care.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted multispeciality hospital where quality healthcare is never out of reach.',
  },
]

export function AboutPreview() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
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
              <p className="text-xs text-primary-foreground/80">Happy patients</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              About Signature Hospital
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Improving lives, together
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our team of specialists and doctors share a common mission: to enhance the quality of life of our
              patients. We treat every patient with the utmost respect and care, ensuring they feel valued, heard and
              supported throughout their treatment journey — whether inpatient or outpatient.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {missionVision.map((m, i) => (
              <Reveal key={m.title} delay={0.15 + i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <m.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {['Prevention to rehabilitation', 'Quality assessment program', '24/7 trauma readiness', 'World-class doctors'].map(
                (point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {point}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
