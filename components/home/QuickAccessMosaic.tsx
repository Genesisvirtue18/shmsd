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
    accent: 'red',
  },
  {
    title: 'Find a Doctor',
    description: 'Meet specialists and choose the right doctor for your care needs.',
    href: ROUTES.doctors,
    icon: Users,
    accent: 'blue',
  },
  {
    title: 'Latest Blogs',
    description: 'Read helpful health guidance and hospital updates.',
    href: ROUTES.blog,
    icon: FileText,
    accent: 'red',
  },
  {
    title: 'Emergency Support',
    description: 'Fast response for urgent situations and round-the-clock support.',
    href: ROUTES.contact,
    icon: HeartPulse,
    accent: 'blue',
  },
] as const

type Card = (typeof cards)[number]

function CardTile({ card }: { card: Card }) {
  const Icon = card.icon
  const tone = card.accent === 'red' ? 'bg-[#B71C1C]' : 'bg-[#235B91]'

  return (
    <Link
      href={card.href}
      className={[
        'group relative block min-h-[12rem] overflow-hidden rounded-md border border-white/10 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
      ].join(' ')}
      aria-label={card.title}
    >
      <div className={['absolute inset-0', tone].join(' ')} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 via-white/5 to-transparent" />
      <div className="pointer-events-none absolute -right-6 top-4 h-28 w-28 opacity-15 sm:h-32 sm:w-32" aria-hidden>
        <Icon className="h-full w-full text-white" strokeWidth={1.5} />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className={[
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-md backdrop-blur-sm',
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
          <h3 className="text-lg font-bold text-white">
            {card.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/85">{card.description}</p>
        </div>
      </div>
    </Link>
  )
}

export function QuickAccessMosaic() {
  return (
    <section className="relative z-20 px-4 py-12 sm:px-6 sm:py-16 lg:-mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
          <div className="border-l-4 border-primary bg-white p-6 shadow-lg sm:p-8">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Quick Access
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl text-balance text-3xl font-bold leading-tight text-[#235B91] sm:text-4xl">
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
                  className="inline-flex items-center gap-2 rounded-md border-2 border-[#B71C1C] bg-white px-5 py-3 text-sm font-bold text-[#B71C1C] transition-colors hover:bg-[#B71C1C] hover:text-white"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href={ROUTES.specialities}
                  className="inline-flex items-center gap-2 rounded-md bg-[#235B91] px-5 py-3 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5"
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
