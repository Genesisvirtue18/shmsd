'use client'

import { type FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, PhoneCall, X } from 'lucide-react'

const STORAGE_KEY = 'signature-hospital-appointment-popup-dismissed-until'
const HIDE_FOR_MS = 24 * 60 * 60 * 1000
const SHOW_AFTER_MS = 5000

export function AppointmentPopup() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [concern, setConcern] = useState('General consultation')

  useEffect(() => {
    setMounted(true)

    if (typeof window === 'undefined') return

    const now = Date.now()
    const dismissedUntil = Number(
      window.localStorage.getItem(STORAGE_KEY) || 0,
    )

    if (dismissedUntil > now) return

    const timer = window.setTimeout(() => {
      setOpen(true)
    }, SHOW_AFTER_MS)

    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = () => {
    const until = Date.now() + HIDE_FOR_MS
    window.localStorage.setItem(STORAGE_KEY, String(until))
    setOpen(false)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const message = `Hello Signature Hospital,

I would like to request a callback.

Name: ${name}
Phone: ${phone}
Concern: ${concern}`

    const whatsappUrl = `https://wa.me/917012109635?text=${encodeURIComponent(
      message,
    )}`

    dismiss()
    window.open(whatsappUrl, '_blank')
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
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
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-popup-title"
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
              {/* Left Side */}
              <div className="bg-gradient-to-b from-[#B71C1C] to-[#D32F2F] p-6 text-white sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                    Request a Callback
                  </div>

                  <button
                    type="button"
                    onClick={dismiss}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h2
                  id="appointment-popup-title"
                  className="mt-6 text-2xl font-bold leading-tight sm:text-3xl"
                >
                  Book a Quick Consultation
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/90">
                  Fill in your details and our team will contact you shortly to
                  help you book the right doctor and appointment.
                </p>

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
              </div>

              {/* Right Side */}
              <form
                onSubmit={onSubmit}
                className="bg-white p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#B71C1C]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Mobile Number
                    </label>

                    <input
                      required
                      type="tel"
                      inputMode="numeric"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#B71C1C]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Treatment / Concern
                    </label>

                    <select
                      value={concern}
                      onChange={(e) => setConcern(e.target.value)}
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#B71C1C]"
                    >
                      <option>General consultation</option>
                      <option>Cardiology</option>
                      <option>Orthopaedics</option>
                      <option>Emergency care</option>
                      <option>Mother and child care</option>
                      <option>Neurology</option>
                      <option>Gynaecology</option>
                      <option>Paediatrics</option>
                      <option>Other concern</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-[#B71C1C] text-sm font-semibold text-white transition hover:bg-[#9f1818]"
                  >
                    Continue on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={dismiss}
                    className="w-full text-center text-sm text-gray-500 transition hover:text-black"
                  >
                    Maybe Later
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}