import Link from 'next/link'
import { Phone, CalendarCheck, MapPin, Siren } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOSPITAL.address)}`
  return (
    <section className="px-4 py-4 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground px-3 py-4 text-background shadow-lg sm:px-8 sm:py-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
            
            <div className="relative flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-4 lg:justify-between">
              {/* Text Block */}
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-background sm:gap-2 sm:px-3 sm:py-1 sm:text-[0.6rem]">
                  <Siren className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden />
                  Emergency & Trauma Care
                </span>
                <h2 className="mt-2 text-balance font-serif text-sm font-semibold leading-tight sm:mt-3 sm:text-xl md:text-2xl">
                  Medical emergency? We are ready 24x7.
                </h2>
                <p className="mt-1 text-pretty text-[0.6rem] leading-snug text-background/80 sm:mt-2 sm:text-sm sm:leading-relaxed">
                  Call our emergency line now or book an appointment. Our stand-by ambulance and expert team are always
                  prepared to help.
                </p>
                <a href={HOSPITAL.phoneHref} className="mt-2 inline-flex items-baseline gap-1.5 sm:mt-4 sm:gap-2">
                  <span className="text-[0.5rem] text-background/70 sm:text-[0.65rem]">Emergency</span>
                  <span className="font-serif text-sm font-bold sm:text-base md:text-xl">{HOSPITAL.emergencyNumber}</span>
                </a>
              </div>

              {/* Compact Action Panel for Buttons */}
              <div className="flex w-full flex-col gap-1.5 sm:max-w-[240px] sm:gap-2">
                {/* Only add the wrapper box on desktop, keep it slim on mobile */}
                <div className="flex flex-col gap-1.5 sm:gap-2 sm:rounded-xl sm:border sm:border-background/10 sm:bg-background/5 sm:p-2 sm:shadow-inner">
                  <a
                    href={HOSPITAL.phoneHref}
                    className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-[0.6rem] font-semibold text-primary-foreground shadow-md transition-all hover:scale-[1.02] sm:px-4 sm:py-2.5 sm:text-[0.65rem]"
                  >
                    <Phone className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden />
                    Call Emergency
                  </a>
                  <Link
                    href="/appointment"
                    className="group flex items-center justify-center gap-2 rounded-lg bg-card/90 px-3 py-1.5 text-[0.6rem] font-semibold text-foreground shadow-sm transition-all hover:scale-[1.02] sm:px-4 sm:py-2.5 sm:text-[0.65rem]"
                  >
                    <CalendarCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden />
                    Book Appointment
                  </Link>
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 rounded-lg border border-background/20 px-3 py-1.5 text-[0.6rem] font-semibold transition-all hover:bg-background/10 hover:scale-[1.02] sm:px-4 sm:py-2.5 sm:text-[0.65rem]"
                  >
                    <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}