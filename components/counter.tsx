'use client'

import { useEffect, useRef, useState } from 'react'

export function Counter({
  value,
  suffix = '',
  duration = 1600,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  const formatted = display >= 1000 ? display.toLocaleString('en-IN') : String(display)

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}
