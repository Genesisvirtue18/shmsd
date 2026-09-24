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
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-2 border-l-4 border-primary pl-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance font-sans text-2xl font-bold leading-tight tracking-tight text-[#235B91] sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
