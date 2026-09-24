'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MessageCircle, Phone, ArrowUp, CalendarCheck, Plus, X } from 'lucide-react'
import { HOSPITAL } from '@/lib/data'
import { cn } from '@/lib/utils'

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const actions = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${HOSPITAL.whatsapp}`,
      icon: MessageCircle,
      className: 'bg-success text-success-foreground',
      external: true,
    },
    {
      label: 'Call now',
      href: HOSPITAL.phoneHref,
      icon: Phone,
      className: 'bg-primary text-primary-foreground',
      external: false,
    },
    {
      label: 'Book appointment',
      href: '/appointment',
      icon: CalendarCheck,
      className: 'bg-accent text-accent-foreground',
      external: false,
    },
  ]

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showTop ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" aria-hidden />
          </button>
        ) : null}

        <div
          className={cn(
            'flex flex-col items-end gap-2 transition-all',
            open ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
          )}
        >
          {actions.map((a) => {
            const Ico = a.icon
            const content = (
              <>
                <span className={cn('flex h-11 w-11 items-center justify-center rounded-full shadow-lg', a.className)}>
                  <Ico className="h-5 w-5" aria-hidden />
                </span>
                <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground shadow-sm">
                  {a.label}
                </span>
              </>
            )
            return a.external ? (
              <a
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {content}
              </a>
            ) : (
              <Link key={a.label} href={a.href} className="flex items-center gap-2">
                {content}
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:-translate-y-0.5"
          aria-label={open ? 'Close quick actions' : 'Open quick actions'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Plus className="h-6 w-6" aria-hidden />}
        </button>
      </div>
    </>
  )
}
