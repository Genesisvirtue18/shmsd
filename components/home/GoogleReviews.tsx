'use client'

import { useMemo, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from 'lucide-react'
import { ROUTES } from '@/lib/routes'

type Review = {
  name: string
  initials: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Rahul Chauhan',
    initials: 'RC',
    date: '5 days ago',
    text: 'The doctors were very clear, kind and quick to respond. The admission process felt smooth and well guided.',
  },
  {
    name: 'Gopal Gupta',
    initials: 'GG',
    date: '3 weeks ago',
    text: 'The care team explained everything properly and stayed attentive throughout the treatment journey.',
  },
  {
    name: 'Varun Yadav',
    initials: 'VY',
    date: '3 weeks ago',
    text: 'We felt supported from reception to discharge. The hospital environment is calm, clean and reassuring.',
  },
  {
    name: 'Anita Sharma',
    initials: 'AS',
    date: '1 month ago',
    text: 'The doctors listened carefully and the follow-up coordination was excellent for my family.',
  },
  {
    name: 'Mohit Verma',
    initials: 'MV',
    date: '1 month ago',
    text: 'Emergency support was fast and the staff handled everything with confidence and care.',
  },
]

const writeReviewHref = 'https://www.google.com/search?q=Signature+Heart+%26+Multispeciality+Hospital+Delhi+reviews'

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" aria-hidden />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const averageRating = useMemo(() => 5, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const distance = Math.min(el.clientWidth * 0.84, 420)
    el.scrollBy({ left: direction === 'right' ? distance : -distance, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#eef6fb] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C]/15 bg-white px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#B71C1C] shadow-sm">
            Google Reviews
          </span>
          <h2 className="mt-4 text-balance font-sans text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
            What patients say about Signature Hospital
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            A warm, attentive experience matters as much as the treatment itself. These reviews reflect the care and
            communication patients value most.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold tracking-tight text-[#102033] sm:text-4xl">{averageRating}.0</span>
                <Stars />
                <span className="text-sm text-muted-foreground">(370)</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                on Google · showing a few featured reviews below
              </p>
            </div>

            <a
              href={writeReviewHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#12b5b0] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#12b5b0]/20 transition-transform hover:-translate-y-0.5"
            >
              Write a Review
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:border-[#B71C1C]/30 hover:text-[#B71C1C]"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-colors hover:border-[#B71C1C]/30 hover:text-[#B71C1C]"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div
            ref={trackRef}
            className="mt-4 grid grid-flow-col auto-cols-[minmax(18rem,1fr)] gap-4 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[minmax(20rem,1fr)] lg:auto-cols-[minmax(0,1fr)] lg:grid-cols-3"
          >
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative min-w-0 rounded-[1.6rem] border border-border bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <Quote className="absolute right-5 top-5 h-10 w-10 text-[#B71C1C]/10" aria-hidden />
                <Stars />
                <p className="mt-4 text-sm leading-7 text-foreground sm:text-[0.98rem]">{review.text}</p>

                <div className="mt-6 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B71C1C]/10 text-sm font-semibold text-[#B71C1C]">
                      {review.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Learn more about patient experiences on our{' '}
            <Link href={ROUTES.contact} className="font-semibold text-primary">
              contact page
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  )
}
