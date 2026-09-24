'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, HeartPulse, ShieldCheck, Stethoscope, Timer, Users2 } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'

const heroBadges = [
  '24x7 Emergency',
  'Cashless TPA Support',
  'Specialist Consultations',
  'Diagnostics & ICU',
]

const quickFacts = [
  { icon: ShieldCheck, label: 'Safe, guided admissions' },
  { icon: Users2, label: 'Consultant-led care teams' },
  { icon: Timer, label: 'Fast response for urgent cases' },
]

export function HeroPremium() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(183,28,28,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(211,47,47,0.12),transparent_24%),linear-gradient(180deg,#fffefc_0%,#fff7f7_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(183,28,28,0.92),rgba(183,28,28,0.68),rgba(183,28,28,0.22))] opacity-[0.88]" aria-hidden />
      <div className="absolute inset-0 bg-[url('/images/hero-hospital.png')] bg-cover bg-center opacity-20 mix-blend-multiply" aria-hidden />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#D32F2F]/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 text-white lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-md"
          >
            <HeartPulse className="h-4 w-4" aria-hidden />
            Signature Heart & Multispeciality Hospital
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-balance font-sans text-3xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-7xl"
          >
            Premium multispeciality care, designed around every patient.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/86 sm:text-base lg:text-lg"
          >
            From emergency treatment and ICU support to specialist consultations and follow-up care, our team
            combines clarity, comfort and clinical excellence under one red-branded hospital experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#B71C1C] shadow-2xl shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              <CalendarDays className="h-4 w-4" aria-hidden />
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/18"
            >
              Explore Specialities
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/12 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/20"
            >
              <Stethoscope className="h-4 w-4" aria-hidden />
              Call {HOSPITAL.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {quickFacts.map((fact) => {
              const Icon = fact.icon
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/18 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-sm font-medium leading-snug text-white/92">{fact.label}</p>
                </div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-4 top-8 hidden rounded-3xl border border-white/20 bg-white/14 px-4 py-3 text-white backdrop-blur-xl lg:block">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/75">Emergency</p>
            <p className="mt-1 text-lg font-semibold">Ready 24x7</p>
          </div>

          <div className="absolute -bottom-6 left-6 hidden rounded-3xl border border-white/20 bg-white/14 px-4 py-3 text-white backdrop-blur-xl md:block">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/75">Care teams</p>
            <p className="mt-1 text-lg font-semibold">Specialist-led support</p>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/15 backdrop-blur-xl sm:p-5">
            <div className="overflow-hidden rounded-[1.6rem] bg-white/10">
              <Image
                src="/images/hero-hospital.png"
                alt={HOSPITAL.name}
                width={980}
                height={900}
                priority
                className="h-[26rem] w-full object-cover sm:h-[34rem] lg:h-[42rem]"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Admission</p>
                <p className="mt-1 text-sm font-semibold">Calm and guided</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Diagnostics</p>
                <p className="mt-1 text-sm font-semibold">Fast, in-house support</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Care</p>
                <p className="mt-1 text-sm font-semibold">Personalized follow-up</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
