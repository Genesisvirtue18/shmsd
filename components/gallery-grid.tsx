'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY } from '@/lib/data'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY.map((g) => g.category)))]

export function GalleryGrid() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = useMemo(
    () => (filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  )

  const openAt = lightbox !== null ? items[lightbox] : null
  const move = (dir: number) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length))

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat)
              setLightbox(null)
            }}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              filter === cat
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                : 'border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-background">{item.alt}</span>
            </span>
            <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {openAt ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25"
            aria-label="Close"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              move(-1)
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
          <div className="relative max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={openAt.src}
              alt={openAt.alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-background/80">{openAt.alt}</p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              move(1)
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/15 text-background hover:bg-background/25"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  )
}
