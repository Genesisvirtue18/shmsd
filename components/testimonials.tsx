'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'
import { cn } from '@/lib/utils'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

export function TestimonialSlider() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total)
  const active = TESTIMONIALS[index]

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" aria-hidden />
        <div className="flex items-center gap-1" aria-label={`${active.rating} out of 5 stars`}>
          {Array.from({ length: active.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden />
          ))}
        </div>
        <blockquote className="relative mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
          “{active.quote}”
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {initials(active.name)}
          </span>
          <div>
            <p className="font-semibold text-foreground">{active.name}</p>
            <p className="text-sm text-muted-foreground">{active.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                i === index ? 'w-8 bg-primary' : 'w-2.5 bg-border hover:bg-primary/40',
              )}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  )
}
