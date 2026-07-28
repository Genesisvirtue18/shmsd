'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/data'
import { cn } from '@/lib/utils'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
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
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-foreground">{faq.question}</span>
              <span
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
                  isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-primary/10 text-primary',
                )}
              >
                <Plus className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
