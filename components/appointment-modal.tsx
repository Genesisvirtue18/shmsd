'use client'

import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, PhoneCall, X } from 'lucide-react'
import { AppointmentForm } from '@/components/appointment-form'

type AppointmentModalProps = {
  open: boolean
  onClose: () => void
  doctorName?: string
  speciality?: string
}

export function AppointmentModal({
  open,
  onClose,
  doctorName,
  speciality,
}: AppointmentModalProps) {
  if (typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close appointment popup"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-modal-title"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-gradient-to-b from-[#B71C1C] to-[#D32F2F] p-6 text-white sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                    Book Appointment
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h2
                  id="appointment-modal-title"
                  className="mt-6 text-2xl font-bold leading-tight sm:text-3xl"
                >
                  {doctorName ? `Book with ${doctorName}` : 'Book a Quick Consultation'}
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/90">
                  {doctorName
                    ? 'Your selected doctor and speciality are already included. Add your contact details and WhatsApp will open with the request ready to send.'
                    : 'Fill in your details and our team will contact you shortly to help you book the right doctor and appointment.'}
                </p>

                {doctorName ? (
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <PhoneCall className="h-5 w-5 shrink-0" />
                      <span className="text-sm">
                        Doctor: {doctorName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <CalendarDays className="h-5 w-5 shrink-0" />
                      <span className="text-sm">
                        Speciality: {speciality || 'Auto-filled'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <PhoneCall className="h-5 w-5 shrink-0" />
                      <span className="text-sm">
                        Speak directly with our hospital team.
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                      <CalendarDays className="h-5 w-5 shrink-0" />
                      <span className="text-sm">
                        Get appointment guidance and treatment planning.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 p-6 sm:p-8">
                <AppointmentForm
                  initialValues={{
                    doctor: doctorName ?? '',
                    speciality: speciality ?? '',
                  }}
                  onSubmitted={onClose}
                  submitLabel="Continue on WhatsApp"
                  note="We will open WhatsApp with your details pre-filled, including the selected doctor and speciality."
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
