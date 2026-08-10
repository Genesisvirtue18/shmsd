import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ComponentType, ReactNode } from 'react'
import {
  BadgeCheck,
  BookOpen,
  BriefcaseMedical,
  Eye,
  MessageSquareQuote,
  ShieldCheck,
  ShieldAlert,
  Target,
  Users,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { DIRECTOR_PROFILE, MANAGEMENT_TEAM } from '@/lib/doctor-directory'

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
    <section id={id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
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

           
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
