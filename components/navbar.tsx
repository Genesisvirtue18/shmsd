'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, HOSPITAL } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const brand = '#B71C1C'
  const brandSoft = 'rgba(183, 28, 28, 0.1)'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-primary/10 bg-primary text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs font-medium">
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-primary-foreground/12 px-3 py-1">24x7 Emergency Care</span>
            <span>{HOSPITAL.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={HOSPITAL.phoneHref} className="hover:underline">
              {HOSPITAL.phone}
            </a>
            <span className="text-primary-foreground/60">|</span>
            <Link href="/appointment" className="hover:underline">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          'border-b bg-white transition-all duration-300',
          scrolled ? ' border-border shadow-sm' : 'border-transparent bg-background',
        )}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
          <Link href="/" className="flex items-center gap-3" aria-label={`${HOSPITAL.shortName} home`}>
            <Image
              src="/images/logo.webp"
              alt={HOSPITAL.name}
              width={220}
              height={60}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      active ? 'text-foreground' : 'text-foreground/80 hover:text-foreground',
                    )}
                    style={
                      active
                        ? {
                            color: brand,
                            backgroundColor: brandSoft,
                          }
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={HOSPITAL.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:text-primary lg:inline-flex"
            >
              Call Now
            </a>
            <Link
              href="/appointment"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-foreground/40 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-background shadow-2xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      active ? 'text-foreground' : 'text-foreground hover:bg-muted',
                    )}
                    style={active ? { color: brand, backgroundColor: brandSoft } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
