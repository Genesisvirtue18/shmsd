import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance font-sans text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
