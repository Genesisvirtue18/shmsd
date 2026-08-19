"use client";

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { buildAppointmentHref } from '@/lib/appointment'
import { DIRECTOR_PROFILE, DOCTOR_DIRECTORY, type DoctorProfile } from '@/lib/doctor-directory'
import { ROUTES } from '@/lib/routes'

const DirectorSection = () => {
  return (
    <div className="relative mb-8 flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-8 md:p-10">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300a2a8\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="z-10 space-y-4 md:w-2/3">
        <h3 className="text-4xl font-bold tracking-tight text-slate-800">OUR DOCTOR</h3>
        <h4 className="text-2xl font-semibold text-slate-900">Patients deserve the best from us</h4>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
          {DIRECTOR_PROFILE.description}
        </p>
        <div className="pt-2">
          <div className="text-xl font-bold text-slate-900">{DIRECTOR_PROFILE.name}</div>
          <div className="text-sm font-medium text-slate-500">{DIRECTOR_PROFILE.department}</div>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={ROUTES.doctor(DIRECTOR_PROFILE.department, DIRECTOR_PROFILE.slug!)}
            className="inline-flex rounded-full border border-[#0F4C81] px-5 py-2 text-sm font-medium text-[#0F4C81] transition-colors hover:bg-[#0F4C81] hover:text-white"
          >
            View profile
          </Link>
          <Link
            href={buildAppointmentHref({
              doctor: DIRECTOR_PROFILE.name,
              speciality: DIRECTOR_PROFILE.bookingSpeciality ?? DIRECTOR_PROFILE.department,
            })}
            className="inline-flex rounded-full bg-[#B71C1C] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#861717]"
          >
            Book appointment
          </Link>
        </div>
      </div>

      <div className="z-10 flex justify-center md:w-1/3">
        <img
          src={DIRECTOR_PROFILE.image}
          alt={DIRECTOR_PROFILE.name}
          className="h-80 w-64 rounded-xl object-cover shadow-xl transition-transform duration-300 hover:scale-[1.02] md:h-96 md:w-72"
        />
      </div>
    </div>
  )
}

const DoctorCard = ({
  doctor,
}: {
  doctor: DoctorProfile
}) => {
  const bookingSpeciality = doctor.bookingSpeciality ?? doctor.department
  const appointmentHref = buildAppointmentHref({
    doctor: doctor.name,
    speciality: bookingSpeciality,
  })
  const profileHref = doctor.slug ? ROUTES.doctor(doctor.department, doctor.slug) : undefined

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex-1 space-y-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-slate-800">{doctor.name}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              {doctor.qualification}
            </p>
          </div>
        </div>

        <div className="font-semibold text-blue-600 text-sm">{doctor.department}</div>
        <p className="max-w-3xl text-xs leading-6 text-slate-500">{doctor.description}</p>

        <div className="flex flex-wrap gap-3 pt-2">
          {profileHref ? (
            <Link
              href={profileHref}
              className="inline-flex rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-[#0F4C81] hover:text-[#0F4C81]"
            >
              View profile
            </Link>
          ) : null}
          <Link
            href={appointmentHref}
            className="inline-flex rounded-full bg-[#B71C1C] px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#861717]"
          >
            Book appointment
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function DoctorsPage() {
  const doctors = DOCTOR_DIRECTORY
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const departments = useMemo(
    () => [...new Set(doctors.map((doctor) => doctor.department).filter(Boolean))],
    [doctors],
  )

  const filteredDoctors = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    return doctors.filter((doctor) => {
      const matchesSearch =
        search.length === 0 ||
        doctor.name.toLowerCase().includes(search) ||
        doctor.department.toLowerCase().includes(search)

      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(doctor.department)

      return matchesSearch && matchesDepartment
    })
  }, [doctors, searchTerm, selectedDepartments])

  const toggleDepartment = (department: string) => {
    setSelectedDepartments((current) =>
      current.includes(department)
        ? current.filter((item) => item !== department)
        : [...current, department],
    )
  }

  const clearFilters = () => {
    setSelectedDepartments([])
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-white p-4 text-slate-800 md:p-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-slate-50/30 p-4 md:p-6">
        <div className="-m-4 mb-8 rounded-t-3xl border-b border-blue-100/50 bg-blue-50/50 p-8 md:-m-6 md:p-12">
          <h1 className="mb-2 text-3xl font-bold text-slate-800 md:text-5xl">
            Doctors who don&apos;t just treat.
            <br />
            They lead your care.
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            They&apos;re independent, experienced, and fully aligned with our
            preventive, people-first approach to care.
          </p>
        </div>

        <DirectorSection />

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Find a doctor</h2>
            <p className="text-sm text-slate-500">
              Search by doctor name or department, then filter by speciality if needed.
            </p>
          </div>

          {(searchTerm || selectedDepartments.length > 0) ? (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-[#B71C1C] hover:text-[#B71C1C]"
            >
              <X className="h-4 w-4" />
              Clear filters
            </button>
          ) : null}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="space-y-6 lg:w-1/4 lg:flex-shrink-0">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <label htmlFor="doctor-search" className="mb-2 block text-sm font-semibold text-slate-700">
                Search doctors
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="doctor-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by name or department"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/15"
                />
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-700">
                Specialities
              </h4>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                {departments.slice(0, 12).map((speciality) => (
                  <label
                    key={speciality}
                    className="flex cursor-pointer items-center gap-3 group"
                  >
                    <input
                      type="checkbox"
                      className="h-5 w-5 cursor-pointer rounded border-gray-300 text-[#B71C1C] focus:ring-[#B71C1C]"
                      checked={selectedDepartments.includes(speciality)}
                      onChange={() => toggleDepartment(speciality)}
                    />
                    <span className="text-sm text-slate-700 transition-colors group-hover:text-[#B71C1C]">
                      {speciality}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 lg:w-3/4">
            <div>
              <h2 className="mb-4 text-xl font-bold text-slate-800">
                Our Specialists{' '}
                {filteredDoctors.length !== doctors.length || selectedDepartments.length > 0 || searchTerm
                  ? `(${filteredDoctors.length})`
                  : ''}
              </h2>
              <div className="space-y-2">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor, index) => (
                    <DoctorCard
                      key={`${doctor.name}-${doctor.department}-${index}`}
                      doctor={doctor}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500">
                    No doctors found for {searchTerm ? `"${searchTerm}"` : 'the selected filters'}.
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
