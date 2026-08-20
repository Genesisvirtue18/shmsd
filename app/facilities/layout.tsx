import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospital Facilities in Yamuna Vihar, Delhi',
  description:
    'Explore the ICU, operation theatre, diagnostics, emergency and patient facilities at Signature Hospital in Yamuna Vihar, Delhi.',
  alternates: { canonical: '/hospitals-near-me/yamuna-vihar/facilities' },
}

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
