import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { HOSPITAL, NAV_LINKS, SERVICE_LINKS } from '@/lib/data'

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex rounded-2xl bg-background px-3 py-2">
                <Image src="/images/logo.webp" alt={HOSPITAL.name} width={220} height={60} className="h-10 w-auto" />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/75">
              Clean, specialist-led healthcare with modern diagnostics, ICU support and 24x7 emergency care.
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-background">Follow Us</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background transition-transform hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    aria-label={social.label}
                  >
                    <SocialIcon kind={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={HOSPITAL.phoneHref} className="hover:text-background">
                  {HOSPITAL.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${HOSPITAL.email}`} className="hover:text-background">
                  {HOSPITAL.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{HOSPITAL.address}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-background">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/75">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-background">Specialities</h3>
            <ul className="mt-5 grid gap-3 text-sm text-background/75 sm:grid-cols-2">
              {SERVICE_LINKS.slice(0, 8).map((dept) => (
                <li key={dept.slug}>
                  <Link href={dept.href} className="transition-colors hover:text-accent">
                    {dept.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-background">Visit Us</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-background/10">
              <iframe
                title="Hospital location map"
                src={HOSPITAL.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-background/75">
              <Clock3 className="h-4 w-4 text-accent" aria-hidden />
              24x7 emergency and admission support
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Signature Heart & Multispeciality Hospital. All rights reserved.</p>
          <p>Delhi multispeciality care, simplified.</p>
        </div>
      </div>
    </footer>
  )
}
