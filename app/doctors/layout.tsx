import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doctors in Yamuna Vihar, Delhi',
  description:
    'Find doctors and specialists at Signature Heart & Multispeciality Hospital in Yamuna Vihar, Delhi. Search by doctor name or speciality.',
  alternates: { canonical: '/hospitals-near-me/yamuna-vihar/doctors' },
}

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
