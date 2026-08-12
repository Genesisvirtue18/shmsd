'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CalendarCheck, Phone, Building2, X, User, Mail, Calendar, MessageSquare, CheckCircle } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form Data:', formData)
    setIsSubmitted(true)
    setIsLoading(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: ''
      })
      setIsFormOpen(false)
    }, 3000)
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#f8fbff]">
       {/* Background Video + Responsive Overlay */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    className="h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    poster="/images/hero-doctor.png"
    preload="metadata"
    aria-hidden
  >
    <source src="/images/hero.mp4" type="video/mp4" />
  </video>

  {/* Desktop overlay - light and transparent */}
  <div className="absolute inset-0 hidden bg-[linear-gradient(110deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.25)_45%,rgba(255,255,255,0.10)_100%)] md:block" />

  {/* Mobile overlay - stronger behind text, transparent elsewhere */}
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.20)_20%,rgba(255,255,255,0.68)_34%,rgba(255,255,255,0.62)_62%,rgba(255,255,255,0.18)_78%,rgba(255,255,255,0.05)_100%)] md:hidden" />

  {/* Soft desktop center readability */}
  <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)] md:block" />

  {/* Very subtle brand tint */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,28,28,0.025),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,180,216,0.025),transparent_48%)]" />
</div>

{/* Decorative accent line */}
<div
  className="absolute inset-x-0 top-0 z-20 h-1 bg-[#B71C1C]"
  aria-hidden
/>

{/* Hero Content */}
<div className="relative z-10 flex min-h-screen max-w-7xl flex-col justify-center px-5 py-24 sm:px-6 md:py-28">
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
    className="max-w-3xl"
  >
    {/* Tagline */}
    <motion.span
      variants={item}
      className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C]/20 bg-white/75 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#B71C1C] shadow-sm backdrop-blur-md sm:px-4 sm:text-[0.7rem]"
    >
      <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {HOSPITAL.tagline || "Even Hospitals | Even Clinics"}
    </motion.span>

    {/* Main Headline */}
    <motion.h1
      variants={item}
      className="mt-5 max-w-2xl text-balance text-[2rem] font-bold leading-[1.08] tracking-tight text-black drop-shadow-sm sm:text-5xl lg:text-6xl"
    >
      Designed to keep you
      <span className="block text-[#B71C1C]">
        healthy, not hospitalised
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={item}
      className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-800 drop-shadow-sm sm:text-lg"
    >
      Experience healthcare that starts early, supports you throughout,
      and helps you stay well even after you leave.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      variants={item}
      className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
    >
      <button
        onClick={() => setIsFormOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B71C1C] to-[#00B4D8] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-[#B71C1C]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#B71C1C]/40 sm:px-8 sm:py-3.5 sm:text-sm"
      >
        <CalendarCheck className="h-4 w-4" aria-hidden />
        Book Appointment
      </button>

      <a
        href={HOSPITAL.phoneHref || "tel:+918047495555"}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-6 py-3 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-md transition-all hover:border-slate-300 hover:bg-white sm:px-8 sm:py-3.5 sm:text-sm"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call Now
      </a>
    </motion.div>
  </motion.div>
</div>
             </section>

      {/* Pop-up Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Form Header */}
            <div className="rounded-t-2xl bg-gradient-to-r from-[#B71C1C] to-[#00B4D8] p-6">
              <h2 className="text-2xl font-bold text-white">Book an Appointment</h2>
              <p className="mt-1 text-white/80 text-sm">
                Fill in your details and we'll get back to you shortly
              </p>
            </div>

            {/* Form Body */}
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
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-[#B71C1C] focus:ring-2 focus:ring-[#B71C1C]/20 outline-none transition-colors resize-none"
                        placeholder="Any specific requirements or concerns..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-gradient-to-r from-[#B71C1C] to-[#00B4D8] py-3 text-white font-semibold transition-all hover:shadow-lg hover:shadow-[#B71C1C]/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
