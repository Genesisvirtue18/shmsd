'use client'

import { useState } from 'react'
import { CalendarCheck, CheckCircle2, Loader2 } from 'lucide-react'
import { DEPARTMENTS } from '@/lib/data'

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('done'), 1200)
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-success/30 bg-success/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-success-foreground">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you. Our team will call you shortly to confirm your appointment slot.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
        >
          Book another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-lg sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" required placeholder="John Doe" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 90000 00000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="you@email.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="department" className="mb-1.5 block text-sm font-medium text-foreground">
            Department
          </label>
          <select id="department" name="department" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a department
            </option>
            {DEPARTMENTS.map((d) => (
              <option key={d.slug} value={d.title}>
                {d.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred date
          </label>
          <input id="date" name="date" type="date" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred time
          </label>
          <input id="time" name="time" type="time" required className={inputClass} />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your symptoms or reason for visit"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Submitting...
          </>
        ) : (
          <>
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Confirm Appointment
          </>
        )}
      </button>
    </form>
  )
}
