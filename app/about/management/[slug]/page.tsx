import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { ComponentType } from 'react'
import { ArrowLeft, BadgeCheck, BriefcaseMedical, CalendarCheck, HeartPulse, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { buildAppointmentHref } from '@/lib/appointment'
import { MANAGEMENT_TEAM, type DoctorProfile } from '@/lib/doctor-directory'

type Params = { slug: string }

function getMember(slug: string): DoctorProfile | undefined {
  return MANAGEMENT_TEAM.find((member) => member.slug === slug)
}

export function generateStaticParams() {
  return MANAGEMENT_TEAM.filter((member) => member.slug).map((member) => ({ slug: member.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const member = getMember(slug)
  if (!member) return {}

  return {
    title: `${member.name} | About`,
    description: member.description,
    alternates: { canonical: `/about/management/${member.slug}` },
  }
}

function DetailBlock({
  title,
  text,
  icon: Icon,
}: {
  title: string
  text: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  )
}

export default async function ManagementDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const member = getMember(slug)

  if (!member) {
    notFound()
  }

  const focusAreas =
    member.slug === 'ashish-singhal'
      ? [
          'Leading specialist-led care with a focus on clarity and accountability.',
          'Coordinating high-trust decision making for patients and clinical teams.',
          'Supporting a patient-first culture across services and departments.',
        ]
      : [
          "Delivering compassionate care for women's health and maternity journeys.",
          'Supporting safe, respectful consultations and continuous follow-up.',
          'Helping families feel informed and comfortable through each stage of care.',
        ]

  const principles =
    member.slug === 'ashish-singhal'
      ? ['Patient trust', 'Clinical leadership', 'Care coordination', 'Quality outcomes']
      : ['Compassion', 'Privacy', 'Continuity of care', 'Family support']

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <Link
            href="/about#management-team"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-[#0F4C81] hover:text-[#0F4C81]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to management
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[420px] bg-gradient-to-br from-slate-50 to-slate-100">
              <Image
                src={member.image || '/images/about-team.png'}
                alt={member.name}
                fill
                priority
                className="object-contain p-6 sm:p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0F4C81]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F4C81]">
                  {member.department}
                </span>
                <span className="rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Management Team
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{member.name}</h1>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {member.qualification}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">{member.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <DetailBlock
                  title="Leadership focus"
                  text={focusAreas[0]}
                  icon={member.slug === 'ashish-singhal' ? ShieldCheck : HeartPulse}
                />
                <DetailBlock
                  title="Care style"
                  text={focusAreas[1]}
                  icon={member.slug === 'ashish-singhal' ? BriefcaseMedical : Sparkles}
                />
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                    <Users className="h-4 w-4" aria-hidden />
                  </span>
                  <h2 className="text-base font-semibold text-slate-900">Core principles</h2>
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {principles.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={
                    member.slug === 'ashish-singhal'
                      ? '/contact'
                      : buildAppointmentHref({
                          doctor: member.name,
                          speciality: member.department,
                        })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden />
                  {member.slug === 'ashish-singhal' ? 'Contact us' : 'Book appointment'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">What this role supports</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <p>
                This profile highlights the leadership and care style associated with {member.name}, reflecting the
                patient-focused approach used across the hospital.
              </p>
              <p>{focusAreas[2]}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F4C81]">At a glance</h2>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Name</p>
                <p className="mt-1 text-sm font-medium text-slate-900">{member.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Department</p>
                <p className="mt-1 text-sm font-medium text-slate-900">{member.department}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Qualification</p>
                <p className="mt-1 text-sm font-medium text-slate-900">{member.qualification}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
