'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarCheck, Phone, Siren, ShieldCheck, Star, Activity } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden />
            {HOSPITAL.tagline}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
          >
            Healthy does not mean <span className="text-gradient">expensive</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Signature Heart & Multispeciality Hospital we deliver personalized, world-class care in a comfortable
            environment — with expert doctors, advanced ICU and 24x7 emergency services.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Book Appointment
            </Link>
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {HOSPITAL.phone}
            </a>
            <a
              href={HOSPITAL.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-emergency px-6 py-3.5 text-sm font-semibold text-emergency-foreground shadow-lg shadow-emergency/25 transition-transform hover:-translate-y-0.5"
            >
              <Siren className="h-4 w-4" aria-hidden />
              Emergency
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
            {[
              { icon: Star, label: 'Rated 4.9 by patients' },
              { icon: Activity, label: 'ICU available 24x7' },
              { icon: ShieldCheck, label: 'Quality assured care' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="h-5 w-5 text-accent" aria-hidden />
                {b.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-hospital.png"
              alt="Signature Heart & Multispeciality Hospital building"
              width={720}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 left-4 hidden items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:flex"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-xl">
              <Image src="/images/hero-doctor.png" alt="Doctor" fill sizes="64px" className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Expert Specialists</p>
              <p className="text-xs text-muted-foreground">Cardiology · Ortho · Neuro</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -right-3 top-6 rounded-2xl border border-border bg-card px-5 py-4 shadow-xl"
          >
            <p className="font-serif text-2xl font-bold text-primary">15+</p>
            <p className="text-xs text-muted-foreground">Years of care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
