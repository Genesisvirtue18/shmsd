import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
import { BadgeCheck, BookOpen, Eye, Target, Users } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { MANAGEMENT_TEAM } from '@/lib/doctor-directory'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Signature Heart & Multispeciality Hospital - our vision, mission, management team, values and quality policies in Delhi.',
}

const sectionNav = [
  { id: 'management-team', label: 'Management Team', icon: Users },
  { id: 'vision-mission', label: 'Vision & Mission', icon: Target },
  { id: 'our-story', label: 'Our Story', icon: BookOpen },
]

const missionPoints = [
  'Specialist-led multispeciality care',
  '24x7 emergency and ICU readiness',
  'Diagnostic support under one roof',
  'Respectful, patient-first service',
]

const visionPoints = [
  'A trusted hospital experience for every family',
  'Clear treatment plans with compassionate care',
  'Modern clinical standards with affordable access',
]



function SectionLink({
  id,
  label,
  icon: Icon,
}: {
  id: string
  label: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}) {
  return (
    <a
      href={`#${id}`}
      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0F4C81]"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81] transition-colors group-hover:bg-[#0F4C81] group-hover:text-white">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span>{label}</span>
    </a>
  )
}

function SectionCard({
  title,
  children,
  eyebrow,
  id,
}: {
  title: string
  children: ReactNode
  eyebrow?: string
  id: string
}) {
  return (
    <section id={id} className="scroll-mt-28">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F4C81]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Explore our vision, management team, policies and story, with quick section navigation on the left."
        breadcrumb={[{ label: 'About' }]}
      />

      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <aside className="lg:sticky lg:top-24 lg:w-72 lg:flex-none">
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="px-3 py-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">On this page</p>
                </div>
                <nav className="mt-2 grid gap-1">
                  {sectionNav.map((item) => (
                    <SectionLink key={item.id} id={item.id} label={item.label} icon={item.icon} />
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 space-y-8">
              <SectionCard id="vision-mission" eyebrow="Vision & Mission" title="Vision and mission">
                <div className="grid gap-5 lg:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                        <Target className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
                        <p className="text-sm text-slate-500">Patient-first care at every step</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      To deliver specialist-led care that is respectful, accessible and centered on each patient&apos;s
                      needs, while keeping treatment clear, calm and supportive.
                    </p>
                    <ul className="mt-5 space-y-3">
                      {missionPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                        <Eye className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Our Vision</h3>
                        <p className="text-sm text-slate-500">Trusted care for the region</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      To be the most trusted multispeciality hospital in our region, where world-class, compassionate
                      healthcare is always accessible and affordable.
                    </p>
                    <ul className="mt-5 space-y-3">
                      {visionPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionCard>

              <SectionCard id="management-team" eyebrow="Management Team" title="Management team">
                <div className="grid gap-5 lg:grid-cols-2">
                  {MANAGEMENT_TEAM.map((member) => (
                    <article
                      key={member.name}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
                    >
                      <div className="grid gap-0 md:grid-cols-1">
                        <div className="relative min-h-[220px] bg-slate-100">
                          <Image
                            src={member.image || '/images/about-team.png'}
                            alt={member.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 180px"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F4C81]">
                            {member.department}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-slate-900">{member.name}</h3>
                          <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                            {member.qualification}
                          </p>
                          <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
                          {member.slug ? (
                            <div className="mt-5">
                              <Link
                                href={`/about/management/${member.slug}`}
                                className="inline-flex items-center gap-2 rounded-full bg-[#0F4C81] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                              >
                                View details
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </SectionCard>

              <SectionCard id="our-story" eyebrow="Our Story" title="Our story">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src="/images/about_preview.png"
                      alt="Signature Hospital medical team"
                      width={720}
                      height={620}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-slate-600">
                    <p>
                      Signature Heart & Multispeciality Hospital was built to make specialist healthcare feel more
                      connected, more understandable and more human.
                    </p>
                    <p>
                      From diagnosis to recovery, we aim to keep patients informed and supported with a care pathway
                      that is organized, efficient and respectful.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        'Specialist-led consultations',
                        'Modern diagnostics and ICU support',
                        '24x7 emergency readiness',
                        'Affordable treatment planning',
                      ].map((item) => (
                        <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
