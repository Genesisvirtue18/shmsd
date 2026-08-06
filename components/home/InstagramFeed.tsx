'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Camera, Heart, MessageCircleMore } from 'lucide-react'
import Image from 'next/image'
const instagramHref = 'https://www.instagram.com/signature.hospital/'

// Your provided real Instagram Embed URLs
const instagramUrls = [
  'https://www.instagram.com/reel/C3XjdFTPNax/',
  'https://www.instagram.com/reel/C3iS8YXiETC/',
  'https://www.instagram.com/reel/Dbk3rdHjpsD/',
  'https://www.instagram.com/reel/DbfZTkqjzbP/',
]

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Inject Instagram's official embed.js script
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }

    // Trigger Instagram's processor to turn blockquotes into iframes
    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C]/15 bg-[#fff4f4] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#B71C1C]">
            Stay Connected
          </span>
          <h2 className="mt-4 text-balance font-sans text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
            Follow Signature Hospital on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Real-time reels directly from our Instagram profile.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info Card - Kept exactly as you had it */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.08)" }}
  className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 text-white shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
>
  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
    {/* Avatar Section */}
    <div className="relative shrink-0">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1e293b,#334155)] shadow-md border-2 border-zinc-800">
        {/* Actual Logo Container */}
        <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-zinc-800 shadow-inner">
          <Image 
            src="/images/favicon.jpg" 
            alt="Signature Hospital Logo" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </div>

    {/* Details Section */}
    <div className="flex-1 text-center sm:text-left w-full">
      
      {/* Username */}
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <h3 className="text-2xl font-bold tracking-tight text-white">signature.hospital</h3>
       
      </div>

      {/* Display Name */}
      <p className="mt-1 text-sm text-zinc-400">
        Signature heart &amp; multi-speciality hospital
      </p>

  

      {/* Category */}
      <p className="mt-3 text-[0.8rem] font-medium text-zinc-500">Hospital</p>

      {/* Bio */}
      <div className="mt-1 text-sm leading-relaxed text-zinc-300">
        <p className="whitespace-pre-line">
          Signature Hospital | Heart, Gynae &amp; Multispeciality Care | 24x7 | Yamuna Vihar, Delhi | Expert Doctors | Book Now!{' '}
         
        </p>
      </div>

      {/* Address */}
      <p className="mt-1 text-xs text-zinc-500">
        C -2/41 A, Service Ln Yamuna Vihar, Delhi, India 110053
      </p>

      {/* Google Review Link */}
      <Link 
        href="https://g.page/r/CbfHlVWlwFxVEB0/review" 
        target="_blank"
        className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#60a5fa] hover:underline"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        g.page/r/CbfHlVWlwFxVEB0/review
      </Link>

      {/* Action Buttons - Dark Mode Optimized */}
      <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-2 w-auto ">
        <Link href="https://www.instagram.com/signature.hospital/" className="flex-1 sm:flex-none rounded-lg bg-[#0095F6] px-10 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Follow
        </Link>
      
     
      </div>

    </div>
  </div>
</motion.div>

          {/* Reels Grid - Pure Native Embeds hidden inside beautiful cards */}
          <div 
            ref={containerRef}
            className="grid gap-4 sm:grid-cols-2"
          >
            {instagramUrls.map((url, index) => (
              <motion.div
                key={url}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-border bg-card shadow-[0_16px_42px_rgba(15,23,42,0.08)]"
              >
                {/* 
                  👇 We use your native blockquotes, but inject special CSS classes 
                  to HIDE the headers, footers, and comments. Only the reel remains!
                */}
                <div className="instagram-clean-embed w-full h-full flex items-center justify-center">
                  <blockquote 
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ 
                      background: 'transparent', 
                      border: '0', 
                      borderRadius: '0', 
                      boxShadow: 'none', 
                      margin: '0 auto', 
                      padding: '0', 
                      width: '100%', 
                      minWidth: 'unset',
                      maxWidth: '100%',
                      height: '100%'
                    }}
                  >
                    <div style={{ padding: '0' }}>
                      <a href={url} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
                        <div style={{ padding: '50% 0' }}></div>
                      </a>
                    </div>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        🟢 CRITICAL STYLES:
        These CSS rules target Instagram's native generated HTML elements 
        and force them to HIDE the headers, footers, and captions.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        .instagram-clean-embed iframe {
          border-radius: 1.6rem !important;
          aspect-ratio: 9 / 16 !important;
          width: 100% !important;
          height: auto !important;
          max-height: 300px !important;
        }
        /* Hide the top header (Profile picture + username) */
        .instagram-clean-embed .x1i10hfl,
        .instagram-clean-embed .x1qjc9v5,
        .instagram-clean-embed header {
          display: none !important;
        }
        /* Hide the caption, comments, and footer */
        .instagram-clean-embed .x1m39q7l,
        .instagram-clean-embed .x1n2onr6,
        .instagram-clean-embed .x1c4vz4f,
        .instagram-clean-embed .x1qjc9v5,
        .instagram-clean-embed footer,
        .instagram-clean-embed ._aagv,
        .instagram-clean-embed ._abl-, 
        .instagram-clean-embed ._aagw,
        .instagram-clean-embed ._aahi {
          display: none !important;
        }
        /* Ensure the video/iframe takes up full height */
        .instagram-clean-embed .x1n2onr6 {
          height: 100% !important;
        }
      `}} />
    </section>
  )
}