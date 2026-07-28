import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read hospital updates, health tips and stories from Signature Heart & Multispeciality Hospital.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights, announcements and helpful health information for patients and families."
        breadcrumb={[{ label: 'Blog' }]}
      />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Coming soon</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We are preparing articles and hospital updates for this section. For appointments or urgent care, please
            use the contact page.
          </p>
        </div>
      </section>
    </>
  )
}
