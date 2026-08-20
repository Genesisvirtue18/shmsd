'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function PartnerLogo({
  name,
  src,
  className,
}: {
  name: string
  src?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  if (!src || failed) {
    return (
      <span
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-[10px] font-semibold tracking-wide text-primary',
          className,
        )}
        aria-hidden
      >
        {initials}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt=""
      className={cn('h-8 w-8 shrink-0 rounded-md object-contain bg-white', className)}
      onError={() => setFailed(true)}
    />
  )
}
