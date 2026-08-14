'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3">
      {FAQS.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={faq.question}
            className={cn(
              'overflow-hidden rounded-2xl border bg-card transition-colors',
              isOpen ? 'border-primary/40 shadow-md' : 'border-border',
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left sm:items-center sm:gap-4 sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium leading-snug text-foreground sm:text-base">
                {faq.question}
              </span>
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8',
                  isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-primary/10 text-primary',
                )}
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-xs leading-snug text-muted-foreground sm:px-6 sm:pb-5 sm:text-sm sm:leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
