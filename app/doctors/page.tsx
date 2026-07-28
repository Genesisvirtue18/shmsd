import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { DoctorCard } from '@/components/cards'
import { StaggerGroup, StaggerItem } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { DOCTORS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Our Doctors',
  description:
    'Meet the expert specialists at Signature Hospital — experienced, compassionate doctors across cardiology, gynaecology, orthopaedics and neurology.',
}

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Doctors"
        description="A team of highly skilled and experienced specialists dedicated to providing the best possible care to our patients."
        breadcrumb={[{ label: 'Doctors' }]}
      />
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((doc) => (
              <StaggerItem key={doc.name} className="h-full">
                <DoctorCard doctor={doc} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
