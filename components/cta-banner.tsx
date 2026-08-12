import Link from 'next/link'
import { Phone, CalendarCheck, MapPin, Siren } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function CtaBanner() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    HOSPITAL.address
  )}`

  return (
    <section className="px-4 py-4 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-foreground px-3 py-4 text-background shadow-lg sm:px-8 sm:py-8">
            
            {/* Decorative background */}
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
              aria-hidden
            />

            <div className="relative flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

              {/* Text Block */}
              <div className="max-w-lg">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-background/10 px-2 py-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-background sm:gap-2 sm:px-3 sm:py-1 sm:text-[0.6rem]">
                  <Siren
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    aria-hidden
                  />
                  Emergency & Trauma Care
                </span>

                <h2 className="mt-2 text-balance font-serif text-sm font-semibold leading-tight sm:mt-3 sm:text-xl md:text-2xl">
                  Medical emergency? We are ready 24x7.
                </h2>

                <p className="mt-1 text-pretty text-[0.6rem] leading-snug text-background/80 sm:mt-2 sm:text-sm sm:leading-relaxed">
                  Call our emergency line now or book an appointment. Our
                  stand-by ambulance and expert team are always prepared to
                  help.
                </p>

                <a
                  href={HOSPITAL.phoneHref}
                  className="mt-2 inline-flex items-baseline gap-1.5 sm:mt-4 sm:gap-2"
                >
                  <span className="text-[0.5rem] text-background/70 sm:text-[0.65rem]">
                    Emergency
                  </span>

                  <span className="font-serif text-sm font-bold sm:text-base md:text-xl">
                    {HOSPITAL.emergencyNumber}
                  </span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="w-full lg:max-w-[220px]">

                {/* 
                  Mobile / Tablet:
                  3 buttons in one grid row.

                  Laptop:
                  Remove the outer panel completely.
                */}
                <div className="grid grid-cols-3 gap-1.5  lg:grid-cols-1 lg:items-center lg:justify-end lg:gap-3">

                  {/* Call Emergency */}
                  <a
                    href={HOSPITAL.phoneHref}
                    className="group flex min-w-0 items-center justify-center gap-1 rounded-lg bg-primary px-2 py-2 text-center text-[0.55rem] font-semibold text-primary-foreground shadow-md transition-all hover:scale-[1.02] sm:gap-2 sm:px-3 sm:py-2.5 sm:text-[0.65rem] lg:rounded-full lg:px-5 lg:py-3 lg:text-sm"
                  >
                    <Phone className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden />
                    <span className="truncate">Call Emergency</span>
                  </a>

                  {/* Book Appointment */}
                  <Link
                    href="/appointment"
                    className="group flex min-w-0 items-center justify-center gap-1 rounded-lg bg-card/90 px-2 py-2 text-center text-[0.55rem] font-semibold text-foreground shadow-sm transition-all hover:scale-[1.02] sm:gap-2 sm:px-3 sm:py-2.5 sm:text-[0.65rem] lg:rounded-full lg:px-5 lg:py-3 lg:text-sm"
                  >
                    <CalendarCheck
                      className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5"
                      aria-hidden
                    />
                    <span className="truncate">Book Appointment</span>
                  </Link>

                  {/* Get Directions */}
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-0 items-center justify-center gap-1 rounded-lg border border-background/20 px-2 py-2 text-center text-[0.55rem] font-semibold text-background transition-all hover:scale-[1.02] hover:bg-background/10 sm:gap-2 sm:px-3 sm:py-2.5 sm:text-[0.65rem] lg:rounded-full lg:px-5 lg:py-3 lg:text-sm"
                  >
                    <MapPin
                      className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5"
                      aria-hidden
                    />
                    <span className="truncate">Get Directions</span>
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