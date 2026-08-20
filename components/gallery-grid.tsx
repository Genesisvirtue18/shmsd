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
              width={'width' in item ? item.width : 600}
              height={'height' in item ? item.height : 400}
              sizes={thumbSizes}
              quality={88}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#101C2B]/95 via-[#101C2B]/75 to-transparent px-4 pb-4 pt-10 text-left text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
              {item.alt}
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
          <div className="relative max-h-[92vh] w-[min(96vw,1200px)]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={openAt.src}
              alt={openAt.alt}
              width={'width' in openAt ? openAt.width : 1800}
              height={'height' in openAt ? openAt.height : 1200}
              sizes="100vw"
              quality={92}
              className="h-auto max-h-[92vh] w-full rounded-2xl object-contain"
            />
            <p className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-[#101C2B]/85 px-5 py-3 text-center text-sm font-semibold text-white">
              {openAt.alt}
            </p>
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
