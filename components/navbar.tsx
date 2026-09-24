'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS, HOSPITAL, SERVICE_LINKS } from '@/lib/data'
import { ROUTES } from '@/lib/routes'
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
] as const

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
    <header className="relative z-50 bg-white lg:sticky lg:top-0">
      <div className="hidden border-b border-slate-200 bg-white text-[#18283B] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs font-semibold">
          <div className="flex items-center gap-4">
            <span className="border-l-4 border-primary pl-3 text-primary">Hospital</span>
            <span>{HOSPITAL.address}</span>
          </div>
           <div className="flex items-center gap-3">
            <a href={HOSPITAL.phoneHref} className="hover:underline">
              {HOSPITAL.phone}
            </a>
            <span className="text-slate-400">|</span>
            <Link href={ROUTES.appointment} className="hover:underline">
              Request Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden bg-[#E9ECEF] lg:block">
        <div className="mx-auto flex h-32 max-w-7xl items-center justify-between gap-8 px-6 pb-7">
          <Link href="/" aria-label={`${HOSPITAL.shortName} home`}>
            <Image
              src="/images/logo.webp"
              alt={HOSPITAL.name}
              width={290}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </Link>
          <div className="flex items-center gap-10 text-base font-semibold text-[#101C2B]">
            <p>
              Appointment No.:
              <a href={HOSPITAL.phoneHref} className="ml-2 text-primary hover:underline">{HOSPITAL.phone}</a>
            </p>
            <p>
              24x7 Emergency Helpline:
              <a href={HOSPITAL.phoneHref} className="ml-2 text-primary hover:underline">{HOSPITAL.phone}</a>
            </p>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          'border-b-4 border-primary bg-white shadow-sm transition-all duration-300 lg:absolute lg:inset-x-0 lg:-bottom-9 lg:border-0 lg:bg-transparent lg:shadow-none',
          scrolled ? 'shadow-md' : '',
        )}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:gap-0 lg:overflow-visible lg:rounded-md lg:bg-[#E31E24] lg:p-0 lg:shadow-xl">
          <Link href="/" className="flex items-center gap-3 lg:hidden" aria-label={`${HOSPITAL.shortName} home`}>
            <Image
              src="/images/logo.webp"
              alt={HOSPITAL.name}
              width={220}
              height={60}
              priority
              className="h-11 w-auto sm:h-12"
            />
          </Link>

          <ul className="hidden flex-1 items-center justify-center gap-0 overflow-visible lg:flex lg:px-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href

              if (link.label === 'Specialities') {
                const specialitiesActive = pathname.startsWith(ROUTES.specialities)
                return (
                  <li key={link.href} className="relative group">
                    <button
                      type="button"
                      className={cn(
                        'inline-flex min-h-16 items-center gap-1 px-4 py-2 text-[0.95rem] font-semibold text-white transition-colors',
                        specialitiesActive
                          ? 'bg-white text-primary'
                          : 'text-white hover:bg-white/15',
                      )}
                      style={
                        specialitiesActive
                          ? {
                              color: brand,
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
                          className="rounded-2xl px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-muted hover:text-black"
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
                      'inline-flex min-h-16 items-center px-4 py-2 text-[0.95rem] font-semibold transition-colors',
                      active ? 'bg-white text-primary' : 'text-white hover:bg-white/15',
                    )}
                    style={
                      active
                        ? {
                            color: brand,
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
            <Link
              href={ROUTES.appointment}
              className="hidden min-h-20 items-center rounded-md bg-[#235B91] px-8 text-base font-bold text-white shadow-lg transition-colors hover:bg-[#194A79] lg:inline-flex"
            >
              Book an Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-black lg:hidden"
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
          'fixed inset-0 z-40 overflow-hidden lg:hidden',
          open ? 'pointer-events-auto visible' : 'pointer-events-none invisible',
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
              const specialitiesActive = pathname.startsWith(ROUTES.specialities)

              if (link.label === 'Specialities') {
                return (
                  <li key={link.href} className="space-y-2">
                    <div
                      className={cn(
                        'rounded-xl px-4 py-3 text-base font-semibold text-black',
                        specialitiesActive ? 'text-black' : 'text-black',
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
                          className="rounded-lg px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-muted hover:text-black"
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
                      'block rounded-xl px-4 py-3 text-base font-semibold text-black transition-colors hover:bg-muted',
                      active ? 'text-black' : 'text-black hover:bg-muted',
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
