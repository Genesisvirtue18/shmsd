import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Empanelled TPA',
  description: 'Information about empanelled TPAs and insurance support at Signature Heart & Multispeciality Hospital.',
  alternates: { canonical: '/empanelled-tpa' },
}

export default function EmpanelledTpaPage() {
  return (
    <>
      <PageHeader
        title="Empanelled TPA"
        description="We are preparing a dedicated list of empanelled TPAs and network partners for patients and families."
        breadcrumb={[{ label: 'Empanelled TPA' }]}
      />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Coming soon</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Please contact the hospital directly for insurance and TPA assistance while this page is being finalized.
          </p>
        </div>
      </section>
    </>
  )
}
