'use client'

import {
  useEffect,
  useRef,
  useState,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'
import { FACILITIES } from '@/lib/data'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const GLOW_COLORS = [
  '#ffb3c6', // Pink
  '#b3d0ff', // Blue
  '#b3f0d1', // Mint
  '#ffe0b3', // Orange
  '#d9b3ff', // Purple
  '#ffb3b3', // Soft Red
]

export default function FacilitiesPage() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const imageRefs = useRef<Array<HTMLDivElement | null>>([])
  
  const activeIndexRef = useRef(0)
  const animationInProgressRef = useRef(false)

  const [isMobile, setIsMobile] = useState(false)
  const [activeIndexForUI, setActiveIndexForUI] = useState(0)

  const totalSlides = FACILITIES.length

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    const handleMediaChange = () => setIsMobile(mediaQuery.matches)
    handleMediaChange()
    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  // --- LOGIC 1: SCROLL DETECTION ---
  useEffect(() => {
    if (isMobile || !sectionRef.current || totalSlides === 0) return

    const section = sectionRef.current
    const imageElements = imageRefs.current.filter((el): el is HTMLDivElement => Boolean(el))

    ScrollTrigger.getAll().forEach((st) => st.kill())

    gsap.set(imageElements, { autoAlpha: 0, scale: 0.97 })
    if (imageElements[0]) gsap.set(imageElements[0], { autoAlpha: 1, scale: 1 })
    if (glowRef.current) gsap.set(glowRef.current, { backgroundColor: GLOW_COLORS[0] })
    activeIndexRef.current = 0

    const changeSlide = (nextIndex: number) => {
      if (nextIndex === activeIndexRef.current || animationInProgressRef.current) return
      
      const previousImage = imageElements[activeIndexRef.current]
      const nextImage = imageElements[nextIndex]

      animationInProgressRef.current = true

      if (previousImage && nextImage) {
        gsap.killTweensOf([previousImage, nextImage])
        
        gsap.to(previousImage, {
          autoAlpha: 0,
          scale: 1.035,
          duration: 0.45,
          ease: 'power2.inOut',
          onComplete: () => {
            animationInProgressRef.current = false 
          }
        })

        gsap.fromTo(
          nextImage,
          { autoAlpha: 0, scale: 0.97 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            ease: 'power3.out',
          }
        )
      }

      activeIndexRef.current = nextIndex
      setActiveIndexForUI(nextIndex)
    }

    const textBlocks = section.querySelectorAll('.text-block')
    const triggers: ScrollTrigger[] = []

    textBlocks.forEach((block, index) => {
      const st = ScrollTrigger.create({
        trigger: block,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => changeSlide(index),
        onEnterBack: () => changeSlide(index),
      })
      triggers.push(st)
    })

    ScrollTrigger.refresh()

    return () => {
      triggers.forEach(st => st.kill())
      ScrollTrigger.getAll().forEach((st) => st.kill())
      animationInProgressRef.current = false
    }
  }, [isMobile, totalSlides])

  // --- LOGIC 2: TRIGGER GLOW CHANGE ONLY ON IMAGE CHANGE ---
  useEffect(() => {
    if (!glowRef.current) return
    
    gsap.killTweensOf(glowRef.current)
    
    gsap.to(glowRef.current, {
      backgroundColor: GLOW_COLORS[activeIndexForUI % GLOW_COLORS.length],
      duration: 0.7,
      ease: 'power2.inOut',
    })
  }, [activeIndexForUI])

  // --- MOBILE LAYOUT ---
  if (isMobile) {
    return (
      <>
        <PageHeader
          title="Facilities & Infrastructure"
          description="World-class infrastructure designed to support safe, effective and comfortable care at every stage."
          breadcrumb={[{ label: 'Facilities' }]}
        />

        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="flex flex-col gap-16 sm:gap-20">
            {FACILITIES.map((facility, index) => {
              const reversed = index % 2 === 1
              return (
                <article key={facility.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                  <div className={reversed ? 'md:order-2' : 'md:order-1'}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
                      <Image src={facility.image} alt={facility.title} fill priority={index === 0} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                  <div className={reversed ? 'md:order-1' : 'md:order-2'}>
                    <h2 className="mt-3 text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">{facility.title}</h2>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{facility.description}</p>
                    <ul className="mt-6 space-y-3">
                      {facility.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                      Book appointment <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
        <CtaBanner />
      </>
    )
  }

  // --- DESKTOP LAYOUT ---
  return (
    <>
      <PageHeader
        title="Facilities & Infrastructure"
        description="World-class infrastructure designed to support safe, effective and comfortable care at every stage."
        breadcrumb={[{ label: 'Facilities' }]}
      />

      <section ref={sectionRef} className="relative bg-white pb-24">
        {/* CENTRAL ANIMATED GLOW */}
        <div
          ref={glowRef}
          className="absolute top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[800px] rounded-full blur-[160px] opacity-60 pointer-events-none z-0"
          aria-hidden="true"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 z-0" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 xl:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
            
            {/* LEFT: Natural Scrolling Text Blocks */}
            <div className="flex flex-col lg:pb-24">
              {FACILITIES.map((facility, index) => (
                <div
                  key={facility.title}
                  className="text-block flex flex-col justify-center min-h-[85vh] lg:min-h-[80vh] py-10 lg:py-8"
                >
                  <h2 className="text-balance text-[2.6rem] leading-[1.1] font-bold tracking-tight text-slate-900 md:text-[3.2rem] xl:text-[3.8rem]">
                    {facility.title}
                  </h2>

                  <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-slate-600 md:text-base">
                    {facility.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {facility.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        <span className="text-sm leading-6 text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/appointment"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#1d4ed8] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Book appointment
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>

            {/* RIGHT: Sticky Image Container */}
            <div className="relative lg:sticky mt-10 lg:top-[100px] h-fit lg:max-h-[calc(100vh-140px)] flex items-center justify-center py-10 lg:py-0">
              <div className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl bg-white/80 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-slate-100/80">
                {FACILITIES.map((facility, index) => (
                  <div
                    key={facility.title}
                    ref={(element) => { imageRefs.current[index] = element }}
                    className="invisible absolute inset-0 overflow-hidden opacity-0 will-change-transform"
                  >
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
