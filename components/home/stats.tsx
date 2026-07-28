import { STATS } from '@/lib/data'
import { Counter } from '@/components/counter'
import { StaggerGroup, StaggerItem } from '@/components/reveal'

export function StatsBar() {
  return (
    <section className="relative z-10 px-6">
      <div className="mx-auto -mt-8 max-w-6xl">
        <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-xl lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="bg-card p-6 text-center sm:p-8">
              <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
