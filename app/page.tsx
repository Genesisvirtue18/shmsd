import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { StatsBar } from '@/components/home/stats'
import { AboutPreview } from '@/components/home/about-preview'
import { PatientJourney } from '@/components/home/patient-journey'
import { CtaBanner } from '@/components/cta-banner'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard, DepartmentCard, DoctorCard } from '@/components/cards'
import { StaggerGroup, StaggerItem, Reveal } from '@/components/reveal'
import { TestimonialSlider } from '@/components/testimonials'
import { FaqAccordion } from '@/components/faq'
import { Icon } from '@/components/icon'
import { SERVICES, DEPARTMENTS, DOCTORS, FACILITIES, WHY_CHOOSE } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Quick services
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our Services"
              title="Comprehensive care under one roof"
              description="From emergency response to routine consultations, our services are designed around your comfort and recovery."
            />
            <Reveal>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
              >
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
         
        </div>
      </section> */}

      <AboutPreview />

      {/* Why choose us */}
      <section className="bg-muted px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why patients trust Signature Hospital"
            description="Our Centres of Excellence ensure every aspect of your care is seamless, with experts working together to provide the care you need."
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((w) => (
              <StaggerItem key={w.title} className="h-full">
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={w.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Departments */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Departments"
              title="Specialised departments"
              description="Multispeciality expertise across the areas that matter most to your health."
            />
            <Reveal>
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
              >
                View all
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.slice(0, 4).map((dept) => (
              <StaggerItem key={dept.slug} className="h-full">
                <DepartmentCard department={dept} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-muted px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Doctors"
            title="Meet our expert specialists"
            description="A team of highly skilled, compassionate doctors dedicated to your wellbeing."
          />
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((doc) => (
              <StaggerItem key={doc.name} className="h-full">
                <DoctorCard doctor={doc} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Facilities alternating
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Facilities"
            title="World-class infrastructure"
            description="Advanced facilities and technology that support safe, effective and modern healthcare."
          />
          <div className="mt-14 space-y-16">
            {FACILITIES.map((facility, i) => {
              const reversed = i % 2 === 1
              return (
                <div key={facility.title} className="grid items-center gap-8 lg:grid-cols-2">
                  <Reveal direction={reversed ? 'left' : 'right'} className={reversed ? 'lg:order-2' : ''}>
                    <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        width={620}
                        height={420}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <Reveal direction={reversed ? 'right' : 'left'} className={reversed ? 'lg:order-1' : ''}>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                        {facility.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{facility.description}</p>
                      <ul className="mt-5 space-y-3">
                        {facility.points.map((p) => (
                          <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="h-3.5 w-3.5" aria-hidden />
                            </span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      <PatientJourney />

      {/* Testimonials */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="You are in good care"
            description="Real experiences from patients who trusted us with their health."
          />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <CtaBanner />

      {/* FAQ */}
      <section className="bg-muted px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="General Questions"
            title="How can we help you?"
            description="Answers to the questions our patients ask most often."
          />
          <div className="mt-14">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  )
}
