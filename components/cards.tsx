import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck } from 'lucide-react'

import { Icon } from '@/components/icon'
import { buildAppointmentHref } from '@/lib/appointment'
import type { Department, Doctor, Service } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

//
// SERVICE CARD
//
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={ROUTES.service(service.slug)}
      className="group relative block h-full rounded-md border border-border border-t-4 border-t-[#235B91] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
      aria-label={`View details for ${service.title}`}
    >
      {/* The Red Glowing Border Effect */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[#B71C1C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#B71C1C]/10 text-[#B71C1C] transition-colors duration-300 group-hover:bg-[#B71C1C]/20">
          <img src={service.icon} alt={service.title} className="h-10 w-10 object-contain" />
        </div>
        <h3 className="mt-4 text-base font-bold text-[#235B91]">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>
      </div>
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
    <article
      id={department.slug}
      className="group h-full rounded-md border border-border border-t-4 border-t-[#235B91] bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon name={department.icon} className="h-6 w-6" strokeWidth={1.8} />
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground sm:text-xl">
        {department.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
        {department.description}
      </p>
    </article>
  )
}

//
// DOCTOR CARD (UNCHANGED)
//
export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const appointmentHref = buildAppointmentHref({
    doctor: doctor.name,
    speciality: doctor.department,
  })

  return (
    <article className="group h-full overflow-hidden rounded-md border border-border border-t-4 border-t-[#235B91] bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {doctor.name}
        </h3>

        <p className="text-sm font-medium text-primary">
          {doctor.department}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {doctor.description}
        </p>

        <Link
          href={appointmentHref}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#951616]"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Appointment
        </Link>
      </div>
    </article>
  )
}
