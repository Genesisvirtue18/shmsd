import { STATS } from '@/lib/data'
import { Counter } from '@/components/counter'
import { StaggerGroup, StaggerItem } from '@/components/reveal'
import { Activity, Building2, HeartPulse, Users2 } from 'lucide-react'

const icons = [HeartPulse, Users2, Activity, Building2]

export function StatsBar() {
  return (
    <section className="relative z-10 px-6">
      <div className="mx-auto -mt-8 max-w-7xl">
        <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, index) => {
            const Icon = icons[index % icons.length]
            return (
              <StaggerItem key={s.label} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-lg shadow-primary/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="font-serif text-3xl font-bold leading-none text-primary sm:text-4xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
