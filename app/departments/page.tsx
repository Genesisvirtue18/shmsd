import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { DepartmentCard } from '@/components/cards'
import { StaggerGroup, StaggerItem } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { DEPARTMENTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Departments',
  description:
    'Explore the specialised departments at Signature Hospital — cardiology, orthopaedics, neurology, general surgery, gynaecology, critical care, emergency and diagnostics.',
}

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Our Departments"
        description="Multispeciality expertise across the areas that matter most to your health, delivered by experienced specialists."
        breadcrumb={[{ label: 'Departments' }]}
      />
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((dept) => (
              <StaggerItem key={dept.slug} className="h-full">
                <DepartmentCard department={dept} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
