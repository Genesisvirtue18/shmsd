'use client'

import { useState } from 'react'
import {
  CalendarCheck,
  Loader2,
  MessageCircle,
} from 'lucide-react'
import { DEPARTMENTS } from '@/lib/data'

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle')

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus('loading')

    const whatsappMessage = `Hello Signature Hospital,

I would like to book an appointment.

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email || 'Not Provided'}
🏥 Department: ${form.department}
📅 Preferred Date: ${form.date}
🕒 Preferred Time: ${form.time}

📝 Message:
${form.message || 'No additional message.'}

Please contact me to confirm my appointment.

Thank you.`

    const whatsappURL = `https://wa.me/917012109635?text=${encodeURIComponent(
      whatsappMessage,
    )}`

    setTimeout(() => {
      setStatus('idle')
      window.open(whatsappURL, '_blank')
    }, 600)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
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
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
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
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
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
          <label
            htmlFor="department"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Department
          </label>

          <select
            id="department"
            name="department"
            required
            value={form.department}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a department
            </option>

            {DEPARTMENTS.map((department) => (
              <option
                key={department.slug}
                value={department.title}
              >
                {department.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Preferred Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Preferred Time
          </label>

          <input
            id="time"
            name="time"
            type="time"
            required
            value={form.time}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
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
            Book via WhatsApp
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Clicking the button will open WhatsApp with your appointment details
        pre-filled.
      </p>
    </form>
  )
}