import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react'
import { PartnerLogo } from '@/components/partner-logo'
import { ExternalLink } from "lucide-react";
import { HOSPITAL } from '@/lib/data'
import { ROUTES } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Empanelled TPA',
  description: 'Information about empanelled TPAs and insurance support at Signature Heart & Multispeciality Hospital.',
  alternates: { canonical: '/hospitals-near-me/yamuna-vihar/tpa' },
}

type Partner = {
  name: string
  logo?: string
  url?: string
}

const insurancePartners: Partner[] = [
  {
    name: 'The New India Assurance Company Limited',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_India_Assurance.svg/1280px-New_India_Assurance.svg.png',
    url: 'https://www.newindia.co.in',
  },
  {
    name: 'United India',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/United_India_Insurance.svg/1280px-United_India_Insurance.svg.png',
    url: 'https://uiic.co.in',
  },
  {
    name: 'National Insurance',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SP8Pmb7-uGATLA9g2Oaeqy6viC5jFjdC-PcFi7rR6Sjbx9nsJhfXPxE&s=10',
    url: 'https://nationalinsurance.nic.co.in',
  },
  {
    name: 'The Oriental Insurance Company Limited',
    logo: 'https://content.jdmagicbox.com/v2/comp/mumbai/k4/022pxx22.xx22.180723103553.v3k4/catalogue/the-oriental-insurance-company-ltd-customer-care--mumbai-insurance-companies-1uddqxfh3m.jpg',
    url: 'https://orientalinsurance.org.in',
  },
  {
    name: 'Bajaj Allianz',
    logo: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-8636,resizemode-75,msid-123831134/mf/mf-news/bajaj-allianz-life-insurance-launches-bse-500-enhanced-value-50-index-fund.jpg',
    url: 'https://www.bajajallianz.com',
  },
  {
    name: 'IFFCO TOKIO',
    logo: 'https://hellohyderabad.org/wp-content/uploads/2025/06/IFFCO-Tokio.jpg',
    url: 'https://www.iffcotokio.co.in',
  },
  {
    name: 'Chola MS General Insurance',
    logo: 'https://5.imimg.com/data5/SELLER/Default/2024/6/425261585/OX/VZ/RJ/149898913/chola-ms-general-insurance.png',
    url: 'https://www.cholainsurance.com',
  },
  {
    name: 'Navi General Insurance',
    logo: 'https://staticimg.insurancedekho.com/imagegallery/How-To-Pay-Navi-Health-Insurance-Premium-Online.jpg',
    url: 'https://navi.com',
  },
  {
    name: 'Universal Sompo General Insurance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/UniversalSompo_LOGO.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20151125095913',
    url: 'https://www.universalsompo.com',
  },
  {
    name: 'BSES (BYPL Yamuna Power Limited)',
    logo: 'https://www.bsesdelhi.com/image/layout_set_logo?img_id=91257&t=1785997571762',
    url: 'https://www.bsesdelhi.com',
  },
  {
    name: 'Medi Assist TPA',
    logo: 'https://cdn.prod.website-files.com/6145f7156a1337613524d548/63207cafaf68ca072f8192df_TPA__medi%20assist.webp',
    url: 'https://www.mediassist.in',
  },
  {
    name: 'Ericson Insurance TPA Pvt. Ltd.',
    logo: 'https://cdn.prod.website-files.com/6145f7156a1337613524d548/632085285d1a9d213e365cb1_TPA__ericson.webp',
    url: 'https://www.ericsontpa.com',
  },
  {
    name: 'Tata AIG General Insurance',
    logo: 'https://5.imimg.com/data5/SELLER/Default/2024/12/472788947/PT/LN/VX/37122931/tata-aig.png',
    url: 'https://www.tataaig.com',
  },
  {
    name: 'SBI General Insurance',
    logo: 'https://etimg.etb2bimg.com/photo/85833252.cms',
    url: 'https://www.sbigeneral.in',
  },
  {
    name: 'Future Generali Insurance',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Future_Generali_India_Life_Insurance_logo.jpg/3840px-Future_Generali_India_Life_Insurance_logo.jpg',
    url: 'https://www.futuregenerali.in',
  },
  {
    name: 'Aditya Birla Capital',
    logo: 'https://yt3.googleusercontent.com/uUY7opMn6nCWdMr3irO4pcWTFL6udN-vj7oVN_suwM1tqcblrnuqG0FjaWoFNG47Hl_YSaLLjes=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.adityabirlacapital.com',
  },
  {
    name: 'Niva Bupa General Insurance',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSrlD_dP9ALsmo8YowcwtGDDtRtJls6DXXkL6LJil0e339J9cRyWPxUY&s=10',
    url: 'https://www.nivabupa.com',
  },
  {
    name: 'Heritage TPA',
    logo: 'https://heritagehealthtpa.in/HospitalPortal/assets/images/APP_ICON.jpg',
    url: 'https://heritagehealthtpa.in',
  },
  {
    name: 'Safeway TPA',
    logo: 'https://cdn.prod.website-files.com/6145f7156a1337613524d548/632085aeaf68ca0fe183d5b2_TPA__safeway.webp',
    url: 'https://www.safewaytpa.in',
  },
  {
    name: 'FHPL TPA',
    logo: 'https://cdn.prod.website-files.com/6145f7156a1337613524d548/6340111fb32bf8c9638bff48_TPA__FHPL.webp',
    url: 'https://www.fhpl.net',
  },
  {
    name: 'ACKO TPA',
    logo: 'https://asiancancerinstitute.com/wp-content/uploads/2025/02/18.png',
    url: 'https://www.acko.com',
  },
  {
    name: 'Link-K TPA',
    logo: 'https://shrigurujirugnalaya.com/wp-content/uploads/2025/11/link-k-logo.jpg',
    url: 'https://www.linkk.co.in',
  },
  {
    name: 'Paramount TPA',
    logo: 'https://www.paramounttpa.com/home/assets/img/PHS_Logo.png',
    url: 'https://www.paramounttpa.com',
  },
  ...[
    'Akna',
    'Park Mediclaim',
    'Raksha TPA',
    'HITPA',
    'Med Save',
    'Vidal',
    'MD India',
    'Genins TPA',
    'Star Health',
    'Reliance General',
    'Go Digit',
    'Manipal Cigna',
    'Volo Health TPA',
    'Good Health TPA',
    'Galaxy Health Insurance',
    'ICICI',
    'Zurich Kotak',
    'Royal Sundaram',
    'Delhi University',
  ].map((name) => ({ name })),
];

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
      <div className="mx-auto max-w-full">
        <div className="relative grid gap-6 xl:grid-cols-1">
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
            <div className="flex flex-col gap-5 border-b border-border pb-5 xl:flex-row xl:items-start xl:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    <ShieldCheck className="h-4 w-4" aria-hidden />
                    Insurance Partners
                  </span>
                  <h1 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-[2.6rem]">
                    Signature Heart & Multi-speciality Hospital
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Our hospital is empanelled with the following insurance and TPA companies.
                  </p>
                </div>

              
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
               {insurancePartners.map((partner) => {
                 const content = (
                   <>
                     <PartnerLogo
                       name={partner.name}
                       src={partner.logo}
                       className="h-7 w-7 rounded-md border border-border/60 transition-transform duration-300 group-hover:scale-105"
                     />
                     <div className="flex-1">
                       <p className="text-[0.92rem] font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                         {partner.name}
                       </p>
                     </div>
                     {partner.url ? (
                       <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary" />
                     ) : null}
                   </>
                 )
                 const className = "group flex min-h-[4.1rem] items-center gap-3 rounded-md border border-border bg-card px-3 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/5 hover:shadow-md"

                 return partner.url ? (
                   <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className={className}>
                     {content}
                   </a>
                 ) : (
                   <div key={partner.name} className={className}>
                     {content}
                   </div>
                 )
               })}
              </div>

              <div className="mt-4 text-xs text-muted-foreground">
                Legal | Policy | Privacy | Terms of Use. All rights reserved
              </div>
          </div>

          {/* <div className="grid gap-6">
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
                          href={HOSPITAL.phoneHref}
                          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                        >
                          Check Your Coverage
                        </a>
                        <a
                          href={ROUTES.contact}
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
          </div> */}
        </div>
      </div>
    </section>
  )
}
