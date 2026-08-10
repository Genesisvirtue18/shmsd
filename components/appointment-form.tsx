'use client'

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Loader2, MessageCircle } from 'lucide-react'
import { DOCTOR_DIRECTORY, DOCTOR_SPECIALITIES, findDoctorByName } from '@/lib/doctor-directory'
import { HOSPITAL } from '@/lib/data'

type AppointmentFormValues = {
  name: string
  phone: string
  email: string
  speciality: string
  doctor: string
  date: string
  time: string
  message: string
}

type AppointmentFormProps = {
  initialValues?: Partial<AppointmentFormValues>
  submitLabel?: string
  note?: string
  onSubmitted?: () => void
}

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

const normalizeValue = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ')

const createInitialValues = (
  initialValues?: Partial<AppointmentFormValues>,
): AppointmentFormValues => {
  const doctorName = initialValues?.doctor ?? ''
  const doctor = doctorName ? findDoctorByName(doctorName) : undefined

  return {
    name: initialValues?.name ?? '',
    phone: initialValues?.phone ?? '',
    email: initialValues?.email ?? '',
    speciality: initialValues?.speciality ?? doctor?.department ?? '',
    doctor: doctor?.name ?? doctorName,
    date: initialValues?.date ?? '',
    time: initialValues?.time ?? '',
    message: initialValues?.message ?? '',
  }
}

export function AppointmentForm({
  initialValues,
  submitLabel = 'Book via WhatsApp',
  note = 'Clicking the button will open WhatsApp with your appointment details pre-filled.',
  onSubmitted,
}: AppointmentFormProps) {
  const defaultValues = useMemo(
    () => createInitialValues(initialValues),
    [
      initialValues?.name,
      initialValues?.phone,
      initialValues?.email,
      initialValues?.speciality,
      initialValues?.doctor,
      initialValues?.date,
      initialValues?.time,
      initialValues?.message,
    ],
  )

  const [status, setStatus] = useState<'idle' | 'loading'>('idle')
  const [form, setForm] = useState<AppointmentFormValues>(defaultValues)

  useEffect(() => {
    setForm(defaultValues)
  }, [defaultValues])

  const selectedDoctor = useMemo(
    () => findDoctorByName(form.doctor),
    [form.doctor],
  )

  const filteredDoctors = useMemo(() => {
    if (!form.speciality) return DOCTOR_DIRECTORY

    const selectedSpeciality = normalizeValue(form.speciality)

    return DOCTOR_DIRECTORY.filter((doctor) => normalizeValue(doctor.department) === selectedSpeciality)
  }, [form.speciality])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    if (name === 'speciality') {
      setForm((prev) => {
        const doctor = prev.doctor ? findDoctorByName(prev.doctor) : undefined
        const doctorMatchesSpeciality =
          doctor && normalizeValue(doctor.department) === normalizeValue(value)

        return {
          ...prev,
          speciality: value,
          doctor: doctorMatchesSpeciality ? prev.doctor : '',
        }
      })

      return
    }

    if (name === 'doctor') {
      const doctor = findDoctorByName(value)

      setForm((prev) => ({
        ...prev,
        doctor: value,
        speciality: doctor?.department ?? prev.speciality,
      }))

      return
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const speciality = selectedDoctor?.department || form.speciality
    const doctorName = selectedDoctor?.name || form.doctor

    const whatsappMessage = [
      `Hello ${HOSPITAL.shortName},`,
      '',
      'I would like to book an appointment.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Speciality: ${speciality || 'Not selected'}`,
      `Doctor: ${doctorName || 'Not selected'}`,
      `Preferred Date: ${form.date || 'Not selected'}`,
      `Preferred Time: ${form.time || 'Not selected'}`,
      '',
      `Message: ${form.message || 'No additional message.'}`,
      '',
      'Please contact me to confirm my appointment.',
      'Thank you.',
    ].join('\n')

    const whatsappURL = `https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent(
      whatsappMessage,
    )}`

    window.setTimeout(() => {
      setStatus('idle')
      window.open(whatsappURL, '_blank')
      onSubmitted?.()
    }, 500)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="speciality" className="mb-1.5 block text-sm font-medium text-foreground">
            Speciality
          </label>
          <select
            id="speciality"
            name="speciality"
            required
            value={form.speciality}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a speciality
            </option>
            {DOCTOR_SPECIALITIES.map((speciality) => (
              <option key={speciality} value={speciality}>
                {speciality}
              </option>
            ))}
          </select>
          {form.doctor ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Auto-filled from the selected doctor.
            </p>
          ) : form.speciality ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Showing doctors for {form.speciality}.
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="doctor" className="mb-1.5 block text-sm font-medium text-foreground">
            Doctor
          </label>
          <select
            id="doctor"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a doctor</option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor.name} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your symptoms or reason for visit"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Opening WhatsApp...
          </>
        ) : (
          <>
            <MessageCircle className="h-4 w-4" />
            {submitLabel}
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        {note}
      </p>
    </form>
  )
}
