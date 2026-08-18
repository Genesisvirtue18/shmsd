'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Calendar,
  CalendarCheck,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Building2,
  Mail,
  MessageSquare,
  Phone,
  User,
  X,
} from 'lucide-react'
import { HOSPITAL } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

type HeroSlide = {
  image: string
  eyebrow: string
  title: string
  subtitle: string
  ctaLabel: string
  href: string
  alt: string
}

const heroSlides: HeroSlide[] = [
  {
    image: '/images/1.png',
    eyebrow: 'Hospital Building',
    title: 'Trusted Multispeciality Care, Close to You',
    subtitle:
      'Advanced healthcare, experienced specialists, and 24×7 emergency support all under one roof.',
    ctaLabel: 'Explore Our Hospital',
    href: ROUTES.about,
    alt: 'Hospital building banner',
  },
  {
    image: '/images/2.png',
    eyebrow: 'Doctor Consultation',
    title: 'Compassionate Care for Every Family',
    subtitle:
      'Consult experienced specialists who listen, understand, and provide personalized treatment.',
    ctaLabel: 'Book an Appointment',
    href: ROUTES.appointment,
    alt: 'Doctor consultation banner',
  },
  {
    image: '/images/3.png',
    eyebrow: 'Heart Specialist',
    title: 'Expert Heart Care You Can Trust',
    subtitle:
      'Advanced cardiac diagnosis and personalized treatment from experienced heart specialists.',
    ctaLabel: 'Consult a Cardiologist',
    href: ROUTES.specialities,
    alt: 'Heart specialist banner',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const currentSlide = heroSlides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }

  const handlePrev = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form Data:', formData)
    setIsSubmitted(true)
    setIsLoading(false)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: '',
      })
      setIsFormOpen(false)
    }, 3000)
  }

  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#08111d]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide.image}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                fill
                priority={activeSlide === 0}
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,29,0.2)_0%,rgba(8,17,29,0.32)_26%,rgba(7,15,28,0.58)_66%,rgba(7,15,28,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(183,28,28,0.22),transparent_32%)]" />
        </div>

        <div className="sr-only" aria-hidden>
          {heroSlides.map((slide) => (
            <Image key={slide.image} src={slide.image} alt="" width={1} height={1} priority={false} />
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[#B71C1C]" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center lg:text-left"
          >
            <motion.span
              variants={item}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 backdrop-blur-md lg:mx-0 sm:text-[0.72rem]"
            >
              <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {HOSPITAL.tagline || 'Health Equality, Always'}
            </motion.span>

            <motion.p
              variants={item}
              className="mx-auto mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/72 lg:mx-0"
            >
              {currentSlide.eyebrow}
            </motion.p>

            <motion.h1
              key={currentSlide.title}
              variants={item}
              className="mx-auto mt-3 max-w-2xl text-balance font-serif text-[2rem] font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl lg:mx-0 lg:text-6xl"
            >
              {currentSlide.title}
            </motion.h1>

            <motion.p
              key={currentSlide.subtitle}
              variants={item}
              className="mx-auto mt-4 max-w-2xl text-pretty text-[0.95rem] leading-6 text-white/88 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:text-lg sm:leading-7 lg:mx-0"
            >
              {currentSlide.subtitle}
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href={currentSlide.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#B71C1C] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#B71C1C]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#B71C1C]/35 sm:w-auto sm:rounded-full sm:px-8 sm:py-3.5"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                {currentSlide.ctaLabel}
              </Link>

              <Link
                href={ROUTES.specialities}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/22 bg-white/10 px-6 py-4 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:bg-white/15 sm:w-auto sm:rounded-full sm:px-8 sm:py-3.5"
              >
                Explore Treatments
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-10 grid gap-4 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous banner"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 backdrop-blur-md">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to banner ${index + 1}`}
                    aria-pressed={index === activeSlide}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next banner"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Emergency</p>
                <p className="mt-1 text-sm font-semibold">Ready 24x7</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Specialists</p>
                <p className="mt-1 text-sm font-semibold">Multispeciality care</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">Support</p>
                <p className="mt-1 text-sm font-semibold">Family-first guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="rounded-t-2xl bg-gradient-to-r from-[#B71C1C] to-[#00B4D8] p-6">
              <h2 className="text-2xl font-bold text-white">Book an Appointment</h2>
              <p className="mt-1 text-sm text-white/80">
                Fill in your details and we'll get back to you shortly
              </p>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="rounded-full bg-green-100 p-3">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">Appointment Booked!</h3>
                  <p className="mt-2 text-center text-gray-600">
                    We'll contact you shortly to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition-colors focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition-colors focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition-colors focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-700">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition-colors focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full resize-none rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none transition-colors focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20"
                        placeholder="Any specific requirements or concerns..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-gradient-to-r from-[#B71C1C] to-[#00B4D8] py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#B71C1C]/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Book Appointment'
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting this form, you agree to our terms and privacy policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
