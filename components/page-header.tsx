import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PageHeader({
  title,
  description,
  breadcrumb,
}: {
  title: string
  description?: string
  breadcrumb: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
              <li>
                <Link href="/" className="flex items-center gap-1 hover:text-primary">
                  <Home className="h-3.5 w-3.5" aria-hidden />
                  Home
                </Link>
              </li>
              {breadcrumb.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-primary">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 text-balance font-sans text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
