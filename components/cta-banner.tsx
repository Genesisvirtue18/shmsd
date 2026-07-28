import Link from 'next/link'
import { Phone, CalendarCheck, MapPin, Siren } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOSPITAL.address)}`
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground shadow-2xl shadow-primary/30 sm:px-12 sm:py-16">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-secondary/40 blur-3xl" aria-hidden />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                  <Siren className="h-4 w-4" aria-hidden />
                  Emergency & Trauma Care
                </span>
                <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  Medical emergency? We are ready 24x7.
                </h2>
                <p className="mt-3 text-pretty text-primary-foreground/85">
                  Call our emergency line now or book an appointment. Our stand-by ambulance and expert team are always
                  prepared to help.
                </p>
                <a href={HOSPITAL.phoneHref} className="mt-6 inline-flex items-baseline gap-2">
                  <span className="text-sm text-primary-foreground/80">Emergency</span>
                  <span className="font-serif text-2xl font-bold sm:text-3xl">{HOSPITAL.emergencyNumber}</span>
                </a>
              </div>
              <div className="flex w-full flex-col gap-3 sm:max-w-xs">
                <a
                  href={HOSPITAL.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call Emergency
                </a>
                <Link
                  href="/appointment"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  Book Appointment
                </Link>
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  <MapPin className="h-4 w-4" aria-hidden />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
