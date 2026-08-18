'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Building2, Siren, HeartPulse, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HOSPITAL } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

const stats = [
  {
    icon: BadgeCheck,
    title: 'Specialist care',
    text: 'Cardiology, orthopaedics, neurology, surgery and more under one roof.',
  },
  {
    icon: Siren,
    title: '24x7 emergency',
    text: 'Round-the-clock support for urgent care and trauma handling.',
  },
  {
    icon: HeartPulse,
    title: 'Critical care support',
    text: 'ICU-backed treatment pathways for closely monitored recovery.',
  },
]

const servicePoints = [
  'Consultations with experienced doctors',
  'In-house diagnostics and imaging support',
  'Operation theatre and surgical care',
  'Emergency and follow-up support',
]

export function HospitalOverview() {
  return (
    <section className="px-6 py-5 md:py-24">
      <div className="mx-auto max-w-7xl">
        

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-border bg-white p-5 shadow-xl shadow-primary/5 sm:p-8 lg:p-10">
        <Reveal >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-7 w-[2px] bg-[#B71C1C]" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              <span className="font-bold">{HOSPITAL.shortName}</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="max-w-xl pb-3 text-xs md:text-sm leading-7 text-muted-foreground sm:text-base">
            We thrive on building a healthier community for individuals and families with accessible, dependable
            care across Delhi NCR.
          </p>
        </Reveal>
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-4 top-4 hidden h-48 w-48 rounded-full bg-primary/5 blur-3xl lg:block" />
            <div className="absolute bottom-0 right-0 hidden h-72 w-72 rounded-full bg-[#B71C1C]/5 blur-3xl lg:block" />
          </div>

          <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal direction="right">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-sm">
                  <Image
                    src="/images/about_preview.png"
                    alt="Signature Heart & Multispeciality Hospital"
                    width={760}
                    height={580}
                    className="h-full w-full object-cover"
                  />
                </div>
                  <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={ROUTES.contact}
                    className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C] bg-white px-5 py-3 text-sm font-semibold text-[#B71C1C] transition-colors hover:bg-[#B71C1C] hover:text-white"
                  >
                    Know More
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link
                    href={ROUTES.specialities}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                  >
                    Explore Services
                    <Building2 className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>

                {/* <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {stats.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="rounded-[1.35rem] border border-border bg-card p-4 shadow-sm"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#B71C1C]/20 bg-[#B71C1C]/8 text-[#B71C1C]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                      </div>
                    )
                  })}
                </div> */}
              </div>
            </Reveal>

            <div className="relative pt-2 sm:pt-4 lg:pt-0">
              <div
                className="pointer-events-none absolute right-0 top-5 z-10 h-44 w-44 opacity-[0.08] sm:h-44 sm:w-44 lg:right-4 lg:top-2 lg:h-72 lg:w-72"
                aria-hidden
              >
                <Image
                  src="/favicon.jpeg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 144px, 288px"
                  className="object-contain object-right-top"
                />
              </div>

              <Reveal>
                <p className="text-sm leading-7 text-foreground sm:text-base">
                  {HOSPITAL.name} brings specialist consultations, emergency care, critical care, diagnostics and
                  surgery together so patients can move through their treatment journey with less stress and more
                  confidence. Our team focuses on clear communication, fast response and practical care planning.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  From the first consultation to follow-up, we aim to keep care coordinated, affordable, and easy to
                  understand. We also support patients through in-house testing, operation theatre services, and
                  round-the-clock emergency readiness.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 hidden md:grid gap-3 md:grid-cols-2">
                  {servicePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[1.25rem] border border-border bg-card p-4 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <p className="text-[0.5rem] md:text-xs  leading-6 text-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
