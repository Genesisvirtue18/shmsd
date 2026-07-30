import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react'
import { PartnerLogo } from '@/components/partner-logo'

export const metadata: Metadata = {
  title: 'Empanelled TPA',
  description: 'Information about empanelled TPAs and insurance support at Signature Heart & Multispeciality Hospital.',
  alternates: { canonical: '/empanelled-tpa' },
}

type Partner = {
  name: string
  logo: string
}

const insurancePartners: Partner[] = [
  { name: 'The New India Assurance Company Limited', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/New_India_Assurance.svg' },
  { name: 'United India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/United_India_Insurance.svg/3840px-United_India_Insurance.svg.png' },
  { name: 'National Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs_532A5ZSG5jrJUJDntsx8MpFT_D0eqdVnx-dqYwrAg_xocFb27KzPg&s=10' },
  { name: 'The Oriental Insurance Company Limited', logo: 'https://logo.clearbit.com/orientalinsurance.org.in' },
  { name: 'Bajaj Allianz', logo: 'https://logo.clearbit.com/bajajallianz.com' },
  { name: 'IFFCO TOKIO', logo: 'https://logo.clearbit.com/iffcotokio.co.in' },
  { name: 'Chola MS General Insurance', logo: 'https://logo.clearbit.com/cholamandalammsgeneralinsurance.com' },
  { name: 'Navi General Insurance', logo: 'https://logo.clearbit.com/navi.com' },
  { name: 'Universal Sompo General Insurance', logo: 'https://logo.clearbit.com/universalsompo.com' },
  { name: 'BSES (BYPL Yamuna Power Limited)', logo: 'https://logo.clearbit.com/byplonline.com' },
  { name: 'HDFC ERGO General Insurance', logo: 'https://logo.clearbit.com/hdfcergo.com' },
  { name: 'Medi Assist TPA', logo: 'https://logo.clearbit.com/mediassist.in' },
  { name: 'Ericson Insurance TPA Pvt. Ltd.', logo: 'https://logo.clearbit.com/ericsontpa.com' },
  { name: 'Tata AIG General Insurance', logo: 'https://logo.clearbit.com/tataaig.com' },
  { name: 'SBI General Insurance', logo: 'https://logo.clearbit.com/sbigeneral.in' },
  { name: 'Future Generali Insurance', logo: 'https://logo.clearbit.com/futuregenerali.in' },
  { name: 'Aditya Birla Capital', logo: 'https://logo.clearbit.com/adityabirlacapital.com' },
  { name: 'Niva Bupa General Insurance', logo: 'https://logo.clearbit.com/nivabupa.com' },
  { name: 'Heritage TPA', logo: 'https://logo.clearbit.com/portal.heritagehealthtpa.com' },
  { name: 'Safeway TPA', logo: 'https://logo.clearbit.com/safewaytpa.in' },
  { name: 'FHPL TPA', logo: 'https://logo.clearbit.com/fhpl.net' },
  { name: 'ACKO TPA', logo: 'https://logo.clearbit.com/acko.com' },
  { name: 'Link-K TPA', logo: 'https://logo.clearbit.com/linkk.co.in' },
  { name: 'Paramount TPA', logo: 'https://logo.clearbit.com/paramounttpa.com' },
  { name: 'Park Mediclaim', logo: 'https://logo.clearbit.com/parkmediclaim.co.in' },
]

const supportSteps = [
  'Admission TPA form submission',
  'Initial pre-auth status',
  'Interim documents and queries',
  'Discharge summary review',
  'Final claim approval',
]

export default function EmpanelledTpaPage() {
  return (
    <section className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(200,30,47,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(15,108,189,0.06),transparent_22%)]" />
      <div className="mx-auto max-w-[1600px]">
        <div className="relative grid gap-6 xl:grid-cols-[1.35fr_0.8fr]">
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md xl:flex"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md xl:flex"
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>

          <div className="rounded-[2.25rem] border border-border bg-card p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-6">
            <div className="rounded-[1.9rem] border border-border bg-background/80 p-5 sm:p-7">
              <div className="flex flex-col gap-5 border-b border-border pb-5 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                    Insurance Partners
                  </span>
                  <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                    Signature Heart & Multi-speciality Hospital
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Our hospital is empanelled with the following insurance and TPA companies.
                  </p>
                </div>

                <div className="flex shrink-0 items-center justify-center xl:pt-1">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-primary/30 bg-background shadow-sm">
                    <div className="text-center">
                      <p className="font-serif text-2xl font-semibold leading-none text-foreground">25</p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        empanelled
                        <br />
                        partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {insurancePartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="group flex min-h-[4.1rem] items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
                  >
                    <PartnerLogo name={partner.name} src={partner.logo} className="h-7 w-7 rounded-md border border-border/60" />
                    <p className="text-[0.92rem] font-medium leading-snug text-foreground">{partner.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-muted-foreground">
                Legal | Policy | Privacy | Terms of Use. All rights reserved
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2.25rem] border border-border bg-card p-5 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-6">
              <div className="rounded-[1.9rem] border border-border bg-background p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-muted text-primary">
                    <PhoneCall className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">Need help with insurance?</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Our front desk can guide you on TPA documents, approvals and the admission process.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.95))] p-4 shadow-inner">
                  <div className="rounded-[1.5rem] border border-border bg-background p-4">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="text-center sm:text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                          Check your coverage
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">Talk to an advisor for cashless support.</p>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href="tel:+917012109635"
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                        >
                          Check Your Coverage
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                        >
                          Talk to an Advisor
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.4rem] border border-border bg-muted/50 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Support milestones
                        </p>
                        <span className="text-xs text-muted-foreground">(Your claims journey)</span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-border">
                        <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
                      </div>
                      <ol className="mt-4 space-y-3">
                        {supportSteps.map((step, index) => (
                          <li key={step} className="flex items-start gap-3 text-sm text-foreground">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {index + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.25rem] border border-border bg-foreground p-5 text-background shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:p-6">
              <div className="rounded-[1.9rem] border border-background/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-background/10 bg-background/10 text-background">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">Smooth, guided support</h3>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-background/85">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Help with cashless and reimbursement processes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Support for documentation and verification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Clear communication from admission to discharge
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
