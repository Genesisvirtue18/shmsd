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
  Shield,
  Stethoscope,
  Package,
  Ambulance,
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

const services = [
  {
    icon: Shield,
    label: 'Travel Insurance',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Stethoscope,
    label: 'Health Checkups',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Package,
    label: 'Medical Kit',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Ambulance,
    label: 'Emergency Services',
    color: 'from-red-500 to-red-600',
  },
]

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
      <section className="relative isolate overflow-hidden bg-white md:min-h-[520px]">
        <h1 className="sr-only">Multispeciality Hospital in Yamuna Vihar, Delhi</h1>
        <div className="absolute inset-0 z-0 hidden overflow-hidden md:block">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide.image}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
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
                className="object-contain md:object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.93)_34%,rgba(255,255,255,0.44)_62%,rgba(18,45,72,0.12)_100%)]" />
        </div>

      {/* MOBILE BANNER - SIMPLE HORIZONTAL WITH IMAGE BACKGROUND */}
      <div className="relative z-10 mx-auto px-4 py-3 sm:px-6 md:hidden ">
        <div className="relative">
    {/* Background Image */}
    <div className="relative h-[245px] w-full overflow-hidden rounded-md">
      <AnimatePresence initial={false}>
        <motion.div
          key={`mobile-image-${currentSlide.image}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.alt}
            fill
            priority={activeSlide === 0}
            sizes="100vw"
            className="object-cover  object-center"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#163A5F]/90 via-[#163A5F]/65 to-black/20" />
      
      {/* Text Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-center px-5 py-4 text-white">
        <motion.span
          key={`mobile-eyebrow-${currentSlide.eyebrow}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
        >
          {currentSlide.eyebrow}
        </motion.span>
        
        <motion.h2
          key={`mobile-title-${currentSlide.title}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-2 max-w-[85%] text-balance font-serif text-xl font-bold leading-tight tracking-tight text-white"
        >
          {currentSlide.title}
        </motion.h2>
        
        {/* <motion.p
          key={`mobile-subtitle-${currentSlide.subtitle}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-1 max-w-[80%] text-[0.65rem] leading-4 text-white/85"
        >
          {currentSlide.subtitle}
        </motion.p> */}
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-2.5"
        >
          <Link
            href={currentSlide.href}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-transform active:scale-95"
          >
            <CalendarCheck className="h-3 w-3" aria-hidden />
            {currentSlide.ctaLabel}
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Slide Indicators */}
    <div className="flex items-center justify-center gap-2 bg-transparent py-2">
      {heroSlides.map((slide, index) => (
        <button
          key={slide.image}
          type="button"
          onClick={() => goToSlide(index)}
          aria-label={`Go to banner ${index + 1}`}
          aria-pressed={index === activeSlide}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full after:h-2 after:w-2 after:rounded-full after:bg-primary aria-pressed:after:w-6"
        />
      ))}
    </div>

        </div>
      </div>

        <div className="absolute inset-x-0 top-0 z-20 h-1 bg-[#B71C1C]" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-10 pt-8 sm:px-6 md:min-h-[520px] md:justify-center lg:py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center lg:text-left md:block hidden"
          >
            <motion.span
              variants={item}
              className="mx-auto inline-flex items-center gap-2 border-l-4 border-primary bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm lg:mx-0"
            >
              <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {HOSPITAL.tagline || 'Health Equality, Always'}
            </motion.span>

            <motion.p
              variants={item}
              className="mx-auto mt-5 text-xs font-bold uppercase tracking-[0.22em] text-primary lg:mx-0"
            >
              {currentSlide.eyebrow}
            </motion.p>

            <motion.h2
              key={currentSlide.title}
              variants={item}
              className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-[#235B91] sm:text-5xl lg:mx-0 lg:text-6xl"
            >
              {currentSlide.title}
            </motion.h2>

            <motion.p
              key={currentSlide.subtitle}
              variants={item}
              className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-[#33475B] sm:text-lg lg:mx-0"
            >
              {currentSlide.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href={currentSlide.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#B71C1C] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#951616] sm:w-auto"
              >
                <CalendarCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                {currentSlide.ctaLabel}
              </Link>

              <Link
                href={ROUTES.specialities}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-[#235B91] bg-white/85 px-6 py-3 text-sm font-bold text-[#235B91] shadow-sm transition-all hover:bg-[#235B91] hover:text-white sm:w-auto"
              >
                Explore Treatments
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-6 hidden gap-4 md:grid lg:mt-0 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous banner"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-[#235B91] shadow-sm transition hover:bg-slate-50"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <div className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to banner ${index + 1}`}
                    aria-pressed={index === activeSlide}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide ? 'w-8 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next banner"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-[#235B91] shadow-sm transition hover:bg-slate-50"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Modal - keep as is */}
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
                Fill in your details and we&apos;ll get back to you shortly
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
                    We&apos;ll contact you shortly to confirm your appointment.
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
