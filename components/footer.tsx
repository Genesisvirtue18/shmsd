import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Globe, MessageCircle, Share2, Send } from 'lucide-react'
import { HOSPITAL, NAV_LINKS, DEPARTMENTS } from '@/lib/data'

export function Footer() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(HOSPITAL.address)}&output=embed`
  const socialLinks = [
    { icon: Globe, label: 'Visit website', href: '#' },
    { icon: MessageCircle, label: 'Message us', href: '#' },
    { icon: Share2, label: 'Share page', href: '#' },
    { icon: Send, label: 'Send message', href: '#' },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex rounded-2xl bg-background/95 px-3 py-2">
                <Image
                  src="/images/logo.webp"
                  alt={HOSPITAL.name}
                  width={220}
                  height={60}
                  className="h-10 w-auto"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
              Health equality, always. Committed to personalized, affordable and world-class multispeciality care in
              Delhi.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-background/80">
              <li>
                <a href={HOSPITAL.phoneHref} className="flex items-center gap-3 hover:text-background">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {HOSPITAL.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${HOSPITAL.email}`} className="flex items-center gap-3 hover:text-background">
                  <Mail className="h-4 w-4 text-accent" aria-hidden />
                  {HOSPITAL.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {HOSPITAL.address}
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-background/70">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background">Departments</h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-background/70 sm:grid-cols-2">
              {DEPARTMENTS.slice(0, 8).map((d) => (
                <li key={d.slug}>
                  <Link href="/departments" className="transition-colors hover:text-accent">
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + map */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background">Newsletter</h3>
            <p className="mt-5 text-sm text-background/70">Get health tips and hospital updates.</p>
            <form className="mt-4 flex overflow-hidden rounded-full bg-background/10 p-1" action="#">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-background placeholder:text-background/50 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-secondary"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </form>
            <div className="mt-5 overflow-hidden rounded-2xl border border-background/15">
              <iframe
                title="Hospital location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-36 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-background/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Signature Heart & Multispeciality Hospital. All Rights Reserved.</p>
          <p>Premium healthcare, redesigned.</p>
        </div>
      </div>
    </footer>
  )
}
