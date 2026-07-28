import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import { Icon } from '@/components/icon'
import type { Department, Doctor, Service } from '@/lib/data'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </div>
    </div>
  )
}

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={department.image ?? '/images/facility-icu.png'}
          alt={department.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <span className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-4 ring-white/85 backdrop-blur">
          <Icon name={department.icon} className="h-7 w-7" strokeWidth={2.2} aria-hidden />
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{department.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{department.description}</p>
        <Link
          href="/departments"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  )
}

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
        <h3 className="text-lg font-semibold text-foreground">{doctor.name}</h3>
        <p className="text-sm font-medium text-primary">{doctor.specialty}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>
        <Link
          href="/appointment"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden />
          Book Appointment
        </Link>
      </div>
    </article>
  )
}
