import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { GalleryGrid } from '@/components/gallery-grid'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Take a visual tour of Signature Heart & Multispeciality Hospital through our building, reception, patient rooms, ICU, operation theatre, laboratory, pharmacy and more.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Signature Heart & Multispeciality Hospital',
    description:
      'Take a visual tour of Signature Heart & Multispeciality Hospital through our facilities, care teams and patient environment.',
    url: 'https://shmsd.in/gallery',
    siteName: 'Signature Heart & Multispeciality Hospital',
    type: 'website',
    images: [
      {
        url: '/images/hero-hospital.png',
        alt: 'Signature Heart & Multispeciality Hospital gallery preview',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Signature Heart & Multispeciality Hospital',
    description:
      'Take a visual tour of Signature Heart & Multispeciality Hospital through our facilities, care teams and patient environment.',
    images: ['/images/hero-hospital.png'],
  },
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
