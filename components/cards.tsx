import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck } from 'lucide-react'

import { Icon } from '@/components/icon'
import type { Department, Doctor, Service } from '@/lib/data'

//
// SERVICE CARD
//
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
      aria-label={`View details for ${service.title}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-2xl font-semibold leading-tight text-foreground">{service.title}</h3>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{service.description}</p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
        View service details
        <ArrowRight className="h-4 w-4" aria-hidden />
      </span>
    </Link>
  )
}

//
// DEPARTMENT CARD
//
export function DepartmentCard({
  department,
}: {
  department: Department;
}) {
  return (
    <article className="group h-full rounded-lg bg-white border border-slate-200 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <div className="flex h-8 w-8 items-center justify-center">
        <Icon name={department.icon} className="h-8 w-8 text-primary" strokeWidth={1.8} />
      </div>

      <h3 className="mt-2 text-xl font-semibold leading-tight text-[#00000]">
        {department.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-4 text-slate-600">
        {department.description}
      </p>
    </article>
  )
}

//
// DOCTOR CARD (UNCHANGED)
//
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.specialty}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {doctor.experience}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {doctor.name}
        </h3>

        <p className="text-sm font-medium text-primary">
          {doctor.specialty}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {doctor.bio}
        </p>

        <Link
          href="/appointment"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Appointment
        </Link>
      </div>
    </article>
  )
}
