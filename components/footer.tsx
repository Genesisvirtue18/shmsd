import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { HOSPITAL, NAV_LINKS, DEPARTMENTS } from '@/lib/data'

export function Footer() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}&output=embed`

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
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-background">Departments</h3>
            <ul className="mt-5 grid gap-3 text-sm text-background/75 sm:grid-cols-2">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <li key={dept.slug}>
                  <Link href="/departments" className="transition-colors hover:text-accent">
                    {dept.title}
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
                src={mapSrc}
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
