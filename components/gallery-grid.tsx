'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY } from '@/lib/data'

export function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = GALLERY
  const thumbSizes = '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'

  const openAt = lightbox !== null ? items[lightbox] : null
  const move = (dir: number) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length))

  return (
    <div>
      <div className="columns-2 gap-2 sm:gap-4 lg:columns-3 [&>*]:mb-2 sm:[&>*]:mb-4">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              sizes={thumbSizes}
              quality={100}
              unoptimized
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
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
          <div className="relative max-h-[92vh] w-[min(96vw,1200px)]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={openAt.src}
              alt={openAt.alt}
              width={1800}
              height={1200}
              sizes="100vw"
              quality={100}
              unoptimized
              className="h-auto max-h-[92vh] w-full rounded-2xl object-contain"
            />
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
