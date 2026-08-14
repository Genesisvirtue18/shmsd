'use client'

import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  FileText,
  HeartPulse,
  Stethoscope,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HOSPITAL } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

const cards = [
  {
    title: 'Book Appointment',
    description: 'Book appointment for personalised, expert healthcare services at your convenience.',
    href: ROUTES.appointment,
    icon: CalendarCheck,
    accent: 'red',
  },
  {
    title: 'Our Services',
    description: 'Explore specialities, treatment options and consultant-led care.',
    href: ROUTES.specialities,
    icon: Stethoscope,
    accent: 'blue',
  },
  {
    title: 'Facilities',
    description: 'ICU, OT, diagnostics, emergency care and recovery support in one place.',
    href: ROUTES.facilities,
    icon: Building2,
    accent: 'green',
  },
  {
    title: 'Find a Doctor',
    description: 'Meet specialists and choose the right doctor for your care needs.',
    href: ROUTES.doctors,
    icon: Users,
    accent: 'indigo',
  },
  {
    title: 'Latest Blogs',
    description: 'Read helpful health guidance and hospital updates.',
    href: ROUTES.blog,
    icon: FileText,
    accent: 'orange',
  },
  {
    title: 'Emergency Support',
    description: 'Fast response for urgent situations and round-the-clock support.',
    href: ROUTES.contact,
    icon: HeartPulse,
    accent: 'dark',
  },
] as const

type Card = (typeof cards)[number]

function CardTile({ card }: { card: Card }) {
  const Icon = card.icon
  const tone =
    card.accent === 'red'
      ? 'from-[#B71C1C] to-[#D32F2F]'
      : card.accent === 'blue'
        ? 'from-[#0F8FCF] to-[#29B6F6]'
        : card.accent === 'green'
          ? 'from-[#0F9D58] to-[#22C55E]'
          : card.accent === 'indigo'
            ? 'from-[#244A96] to-[#4F7DEB]'
            : card.accent === 'orange'
              ? 'from-[#EA580C] to-[#FB923C]'
              : 'from-[#0A1320] to-[#1F2937]'

  return (
    <Link
      href={card.href}
      className={[
        'group relative block h-[11rem] overflow-hidden rounded-[1.5rem] border border-white/10 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
      ].join(' ')}
      aria-label={card.title}
    >
      <div className={['absolute inset-0 bg-gradient-to-br', tone].join(' ')} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 via-white/5 to-transparent" />
      <div className="pointer-events-none absolute -right-6 top-4 h-28 w-28 opacity-15 sm:h-32 sm:w-32" aria-hidden>
        <Icon className="h-full w-full text-white" strokeWidth={1.5} />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className={[
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl backdrop-blur-sm',
              'bg-white/14 text-white',
            ].join(' ')}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <span
            className={[
              'inline-flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full shadow-sm transition-all duration-300',
              'bg-white/92 text-[#B71C1C] group-hover:bg-white group-hover:translate-x-0.5',
            ].join(' ')}
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>

        <div className="max-w-sm">
          <h3 className="text-sm  text-white sm:text-sm">
            {card.title}
          </h3>
          <p className="mt-3 text-xs  text-white/90">{card.description}</p>
        </div>
      </div>
    </Link>
  )
}

export function QuickAccessMosaic() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Quick Access
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Affordable & Connected {HOSPITAL.shortName}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Connect with your provider in the comfort of your home, track appointments, discover services, and
                stay informed about the care available at {HOSPITAL.shortName}.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-foreground">
                One hospital experience, from booking to recovery, with specialist-led care, diagnostics, ICU and
                emergency support.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={ROUTES.appointment}
                  className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C] bg-white px-5 py-3 text-sm font-semibold text-[#B71C1C] transition-colors hover:bg-[#B71C1C] hover:text-white"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href={ROUTES.specialities}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  View Services
                  <BadgeCheck className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div className="grid gap-4 grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <CardTile key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
