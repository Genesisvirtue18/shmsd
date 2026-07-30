import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CalendarCheck, Check, ChevronRight, Phone, ShieldCheck } from 'lucide-react'
import { Icon } from '@/components/icon'
import { SERVICES } from '@/lib/data'

type Params = { slug: string }

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    title: `${service.title} | Services`,
    description: service.overview,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const relatedServices = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 6)

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-primary">
            Service Detail & Treatments
          </span>
         
        </div>

        <div className="grid gap-6 xl:grid-cols-2]">
          <div className="rounded-[2.25rem] border border-border bg-card p-5 shadow-[0_18px_60px_rgba(15,23,42,0.1)] sm:p-6">
            <div className="rounded-[1.9rem] border border-border bg-background/90 p-5 sm:p-7">
              <div className="flex flex-col gap-5 border-b border-border pb-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    <Icon name={service.icon} className="h-4 w-4" />
                    {service.title}
                  </div>
                  <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.7rem]">
                    {service.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {service.overview}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-[1.6rem] border border-border bg-card px-4 py-3 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Specialist care
                    </p>
                    <p className="text-sm font-semibold text-foreground">Treatment focused</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.9rem] border border-border bg-card p-4">
                  <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-muted">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1100}
                      height={720}
                      className="h-[18rem] w-full object-cover sm:h-[24rem]"
                      priority
                    />
                  </div>

                  <div className="mt-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Clinical Overview</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                      {service.description} We keep the process calm, clear and coordinated so patients can move from
                      consultation to treatment without confusion.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Treatment Journey & Milestones
                    </h3>
                    <div className="mt-4 space-y-4">
                      {service.steps.map((step, index) => (
                        <div key={step.title} className="flex gap-4">
                          <div className="relative flex w-8 flex-col items-center">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary">
                              {index + 1}
                            </span>
                            {index !== service.steps.length - 1 ? (
                              <span className="mt-2 h-full w-px bg-border" aria-hidden />
                            ) : null}
                          </div>
                          <div className="pb-2">
                            <h4 className="font-semibold text-foreground">{step.title}</h4>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-border bg-card p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Benefits</h3>
                      <ul className="mt-4 space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                              <Check className="h-3.5 w-3.5" aria-hidden />
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[1.4rem] border border-border bg-card p-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Quick Summary</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {service.title} care is delivered by specialists with a focus on safe planning, clear
                        communication and follow-up support throughout the treatment journey.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-foreground/10 bg-foreground p-4 text-background">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-background/60">
                          Ready to take the next step?
                        </p>
                        <p className="mt-1 text-[0.6rem] text-background/80">
                          Request a consultation with our specialist team.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href="/appointment"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                        >
                          Book Appointment
                          <CalendarCheck className="h-4 w-4" aria-hidden />
                        </Link>
                        <a
                          href="tel:+917012109635"
                          className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-background/15"
                        >
                          <Phone className="h-4 w-4" aria-hidden />
                          Call Now
                        </a>
                      </div>
                      
                    </div>
                  </div>
                    <div className="mt-5 rounded-[1.9rem] border border-border bg-card p-4 sm:p-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Treatment Specific FAQs
                    </h2>
                    <div className="mt-4 space-y-3">
                      {service.faqs.map((faq) => (
                        <details
                          key={faq.question}
                          className="group rounded-2xl border border-border bg-background px-4 py-3"
                        >
                          <summary className="cursor-pointer list-none text-sm font-medium text-foreground">
                            {faq.question}
                          </summary>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="grid gap-5">
                  <div className="rounded-[1.9rem] border border-border bg-card p-4 sm:p-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Treatment Catalog</h2>
                    <div className="mt-4 space-y-2">
                      {SERVICES.map((item) => {
                        const active = item.slug === service.slug
                        return (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className={`flex items-center gap-3 rounded-2xl border px-3 py-3 transition-all ${
                              active
                                ? 'border-primary/25 bg-primary/5 shadow-sm'
                                : 'border-border bg-background hover:border-primary/20 hover:bg-muted/40'
                            }`}
                          >
                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                active ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              <Icon name={item.icon} className="h-4 w-4" />
                            </span>
                            <span className="flex-1 text-sm font-medium text-foreground">{item.title}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden />
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                

                  
                </aside>
              </div>
            </div>
          </div>

          {/* <div className="rounded-[2.25rem] border border-border bg-card p-5 shadow-[0_18px_60px_rgba(15,23,42,0.1)] sm:p-6">
            <div className="rounded-[1.9rem] border border-border bg-background p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">At a Glance</h2>
              <div className="mt-4 grid gap-3">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Check className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
