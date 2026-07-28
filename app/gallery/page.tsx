import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { GalleryGrid } from '@/components/gallery-grid'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Take a visual tour of Signature Heart & Multispeciality Hospital — our building, reception, patient rooms, ICU, operation theatre, laboratory, pharmacy and more.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A glimpse into our facilities, care teams and the welcoming environment we have built for our patients."
        breadcrumb={[{ label: 'Gallery' }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <GalleryGrid />
      </section>
      <CtaBanner />
    </>
  )
}
