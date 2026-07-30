import { STATS } from '@/lib/data'
import { Counter } from '@/components/counter'
import { StaggerGroup, StaggerItem } from '@/components/reveal'
import { Activity, Building2, HeartPulse, Users2 } from 'lucide-react'

const icons = [HeartPulse, Users2, Activity, Building2]

export function StatsBar() {
  return (
    <section className="relative z-10 px-6">
      <div className="mx-auto -mt-8 max-w-7xl">
        <StaggerGroup className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {STATS.map((s, index) => {
            const Icon = icons[index % icons.length]
            return (
              <StaggerItem key={s.label} className="h-full">
                <div className="flex h-full min-w-0 flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 text-center shadow-lg shadow-primary/5 sm:flex-row sm:items-center sm:gap-4 sm:p-5 sm:text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-serif text-xs md:text-lg font-bold leading-none text-primary sm:text-3xl sm:leading-none">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-[8px] font-medium leading-tight text-muted-foreground sm:mt-2 sm:text-sm">
                      {s.label}
                    </p>
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
