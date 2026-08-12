'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS, HOSPITAL, SERVICE_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Signaturehospital/',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/signature.hospital',
    icon: 'instagram',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@SignatureHospital-o1e',
    icon: 'youtube',
  },
]

function SocialIcon({ kind }: { kind: 'facebook' | 'instagram' | 'youtube' }) {
  if (kind === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <path
          d="M14 8.5V7.2c0-.8.5-1.2 1.2-1.2h1.3V3H14.5C12.2 3 11 4.4 11 6.7v1.8H9v3h2V21h3.2v-9.5h2.4l.4-3h-2.8Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (kind === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M21.6 8.2c-.2-1.3-1.2-2.3-2.5-2.5C17.2 5.4 12 5.4 12 5.4s-5.2 0-7.1.3C3.6 5.9 2.6 6.9 2.4 8.2 2.1 10 2.1 12 2.1 12s0 2 .3 3.8c.2 1.3 1.2 2.3 2.5 2.5 1.9.3 7.1.3 7.1.3s5.2 0 7.1-.3c1.3-.2 2.3-1.2 2.5-2.5.3-1.8.3-3.8.3-3.8s0-2-.3-3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
    </svg>
  )
}

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
          'border-b bg-white transition-all duration-300 shadow-sm' ,
          scrolled ? ' border-border shadow-sm' : 'border-transparent bg-white',
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

              if (link.label === 'Specialities') {
                const specialitiesActive = pathname.startsWith('/departments')
                return (
                  <li key={link.href} className="relative group">
                    <button
                      type="button"
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                        specialitiesActive
                          ? 'text-foreground'
                          : 'text-foreground/80 hover:text-foreground',
                      )}
                      style={
                        specialitiesActive
                          ? {
                              color: brand,
                              backgroundColor: brandSoft,
                            }
                          : undefined
                      }
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" aria-hidden />
                    </button>

                    <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 rounded-3xl border border-border bg-background p-3 opacity-0 shadow-2xl shadow-black/10 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="grid max-h-[380px] gap-1 overflow-y-auto">
                        {SERVICE_LINKS.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.href}
                            className="rounded-2xl px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                )
              }

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
            <div className="hidden items-center gap-2 lg:flex">
              {SOCIAL_LINKS.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    aria-label={social.label}
                  >
                    <SocialIcon kind={social.icon} />
                  </a>
                )
              })}
            </div>
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
              const specialitiesActive = pathname.startsWith('/departments')

              if (link.label === 'Specialities') {
                return (
                  <li key={link.href} className="space-y-2">
                    <div
                      className={cn(
                        'rounded-xl px-4 py-3 text-base font-medium',
                        specialitiesActive ? 'text-foreground' : 'text-foreground',
                      )}
                      style={specialitiesActive ? { color: brand, backgroundColor: brandSoft } : undefined}
                    >
                      {link.label}
                    </div>
                    <div className="ml-3 grid gap-1 border-l border-border pl-3">
                      {SERVICE_LINKS.map((item) => (
                        <Link
                          key={item.slug}
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                )
              }

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
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    aria-label={social.label}
                  >
                    <SocialIcon kind={social.icon} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
