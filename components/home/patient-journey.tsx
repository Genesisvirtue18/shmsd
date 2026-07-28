import { PATIENT_JOURNEY } from '@/lib/data'
import { Icon } from '@/components/icon'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/reveal'

export function PatientJourney() {
  return (
    <section className="bg-muted px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Patient Journey"
          title="Your care, step by step"
          description="From your first appointment to full recovery, we make every stage simple, clear and reassuring."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PATIENT_JOURNEY.map((stage) => (
            <StaggerItem key={stage.step} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon name={stage.icon} className="h-7 w-7" aria-hidden />
                </div>
                <span className="mt-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                  Step {stage.step}
                </span>
                <h3 className="mt-3 font-semibold text-foreground">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
