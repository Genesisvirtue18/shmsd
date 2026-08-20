import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, HeartPulse, ShieldCheck, Stethoscope, TimerReset } from 'lucide-react'
import {Hero} from '@/components/home/hero'
import { GoogleReviews } from '@/components/home/GoogleReviews'
import { LatestBlogs } from '@/components/home/LatestBlogs'
import { InstagramFeed } from '@/components/home/InstagramFeed'
import { StatsBar } from '@/components/home/stats'
import { HospitalOverview } from '@/components/home/HospitalOverview'
import { QuickAccessMosaic } from '@/components/home/QuickAccessMosaic'
import { ServiceCarousel } from '@/components/home/Service-carousel'
import { DoctorsCarousel } from '@/components/home/doctors-carousel'
import { PatientJourney } from '@/components/home/patient-journey'
import { FaqAccordion } from '@/components/faq'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/reveal'
import {  DoctorCard,ServiceCard } from '@/components/cards'
import { SERVICES, DOCTORS } from '@/lib/data'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'
import { ROUTES } from '@/lib/routes'

const pillars = [

  {
    icon: Stethoscope,
    title: 'Specialist consultations',
    text: 'Consultant-led care across cardiology, orthopaedics, neurology and more.',
  },
  {
    icon: HeartPulse,
    title: 'Emergency ready',
    text: 'Fast escalation pathways and round-the-clock support when every minute matters.',
  },
  {
    icon: TimerReset,
    title: 'Focused follow-up',
    text: 'We make discharge, reports and review visits easier to understand and complete.',
  },
]

const HOME_TPA_PARTNERS = [
  'The New India Assurance Company Limited',
  'United India',
  'National Insurance',
  'The Oriental Insurance Company Limited',
  'Bajaj Allianz',
  'IFFCO TOKIO',
  'Chola MS General Insurance',
  'Navi General Insurance',
  'Universal Sompo General Insurance',
  'BSES (BYPL Yamuna Power Limited)',
  'Medi Assist TPA',
  'Ericson Insurance TPA Pvt. Ltd.',
  'Tata AIG General Insurance',
  'SBI General Insurance',
  'Future Generali Insurance',
  'Aditya Birla Capital',
  'Niva Bupa General Insurance',
  'Heritage TPA',
  'Safeway TPA',
  'FHPL TPA',
  'ACKO TPA',
  'Link-K TPA',
  'Paramount TPA',
  'Akna',
  'Park Mediclaim',
  'Raksha TPA',
  'HITPA',
  'Med Save',
  'Vidal',
  'MD India',
  'Genins TPA',
  'Star Health',
  'Reliance General',
  'Go Digit',
  'Manipal Cigna',
  'Volo Health TPA',
  'Good Health TPA',
  'Galaxy Health Insurance',
  'ICICI',
  'Zurich Kotak',
  'Royal Sundaram',
  'Delhi University',
] as const

export default function Home() {
  return (
    <div className="overflow-hidden bg-background">
      <Hero />
      <StatsBar />
      <section className="border-y border-[#235B91]/20 bg-[#EEF4FA] px-6 py-5">
        <details className="group mx-auto max-w-7xl rounded-md border border-[#235B91]/20 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#235B91] text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#173E66]">Empanelled TPA & Insurance Support</h2>
                <p className="text-sm text-muted-foreground">Select to view our cashless and insurance partners.</p>
              </div>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white">
              <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" aria-hidden />
            </span>
          </summary>
          <div className="border-t border-border px-4 py-5 sm:px-5">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_TPA_PARTNERS.map((partner) => (
                <div key={partner} className="rounded-md border border-border border-l-4 border-l-[#235B91] bg-[#F8FAFC] px-3 py-2.5 text-sm font-semibold text-foreground">
                  {partner}
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                href={ROUTES.tpa}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#951616]"
              >
                View Full TPA / Insurance Details
              </Link>
            </div>
          </div>
        </details>
      </section>
      <HospitalOverview />
      <QuickAccessMosaic />

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Leadership"
            title="Meet the people leading patient care"
            description="Our management team combines medical experience, calm leadership and a patient-first approach."
          />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {MANAGEMENT_TEAM.map((member) => (
                <article
                  key={member.slug || member.name}
                  className="flex h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="grid gap-0 md:grid-cols-[180px_minmax(0,1fr)]">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 via-white to-muted/40 md:min-h-[240px]">
                    <Image
                      src={member.image || '/images/about-team.png'}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 180px"
                    />
                  </div>

                  <div className="flex h-full flex-col p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                      {member.department}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {member.qualification}
                    </p>
                    <p className="mt-4 flex-1 line-clamp-6 text-sm leading-7 text-muted-foreground">
                      {member.description}
                    </p>

                    {member.slug ? (
                      <div className="mt-5">
                        <Link
                          href={ROUTES.doctor(member.department, member.slug!)}
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                        >
                          View Profile
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Why patients trust us"
            title="A hospital experience that feels calm, coordinated and caring"
            description="We focus on the details that reduce stress for patients and families: simple communication, quick response and a cleaner care journey."
          />
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <StaggerItem key={pillar.title} className="h-full">
                  <div className="h-full rounded-[1.5rem] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#B71C1C]/10 text-[#B71C1C] md:h-12 md:w-12">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground md:text-lg">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-[#fff7f7] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Specialities"
            title="Core Service built around patient needs"
            description="Find the right care quickly through a multispeciality setup that keeps consultation, diagnostics and treatment connected."
          />
          <div className="mt-10 lg:hidden">
            <ServiceCarousel Service={SERVICES.slice(0, 12)} />
          </div>
          <StaggerGroup className="mt-10 hidden gap-6 lg:grid lg:grid-cols-6">
            {SERVICES.slice(0, 12).map((service) => (
              <StaggerItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Doctors"
            title="Meet the specialists behind your care"
            description="A focused team of doctors and surgeons work together to provide practical treatment plans and supportive follow-up."
          />
          <div className="mt-10 lg:hidden">
            <DoctorsCarousel doctors={DOCTORS} />
          </div>
          <StaggerGroup className="mt-10 hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-4">
            {DOCTORS.map((doctor) => (
              <StaggerItem key={doctor.name} className="h-full">
                <DoctorCard doctor={doctor} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <PatientJourney />
      <GoogleReviews />
      <LatestBlogs />
      <InstagramFeed />
      

      <section className="bg-muted px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="General Questions"
            title="Helpful answers before you visit"
            description="If you need more guidance, our front desk can help with appointment timing, Service and the right next step."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </div>
  )
}
