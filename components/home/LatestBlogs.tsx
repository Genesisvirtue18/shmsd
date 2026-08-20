'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Clock3, Newspaper } from 'lucide-react'

type BlogCard = {
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
  image: string
  category: string
}

function stripHtml(input: string) {
  return input.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function mapPostToBlog(post: Record<string, unknown>): BlogCard {
  const titleObj = post.title as { rendered?: string } | undefined
  const excerptObj = post.excerpt as { rendered?: string } | undefined
  
  const title = titleObj?.rendered || 'Untitled Article'
  const excerpt = stripHtml(excerptObj?.rendered || 'No excerpt available.')
  const dateRaw = typeof post.date === 'string' ? post.date : ''
  const link = typeof post.link === 'string' ? post.link : '#'
  
  const category = 'HealthConnect' 
  const readTime = '2 min read'

  const formattedDate = dateRaw
    ? new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateRaw))
    : 'Recent'

  const embedded = post._embedded as { 'wp:featuredmedia'?: Array<{ source_url?: string }> } | undefined
  const image = embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-doctor.png'

  return {
    title,
    excerpt,
    date: formattedDate,
    readTime,
    href: link,
    image,
    category,
  }
}

export function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogCard[]>([])

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const response = await fetch('https://healthconnect.shmsd.in/wp-json/wp/v2/posts?per_page=4&_embed=1')
        if (!response.ok) throw new Error('HealthConnect API unavailable')

        const posts = (await response.json()) as Record<string, unknown>[]
        const mapped = posts.slice(0, 4).map((post) => mapPostToBlog(post))

        if (active && mapped.length > 0) setBlogs(mapped)
      } catch {
        if (active) setBlogs([])
      }
    }

    load()
    return () => { active = false }
  }, [])

  if (blogs.length === 0) return null

  const [featured, ...sidebar] = blogs

  return (
    <section className="bg-[#eef6fb] px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        {/* Compact Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B71C1C]/15 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#B71C1C] shadow-sm">
            <Newspaper className="h-3 w-3" aria-hidden />
            Latest from HealthConnect
          </span>
          <h2 className="mt-2 text-balance font-sans text-xl font-semibold leading-tight text-foreground sm:text-2xl">
            Health tips and hospital updates worth reading
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-xs leading-6 text-muted-foreground sm:text-sm">
            Read the latest articles from HealthConnect.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Featured Post - Highly Compact */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
          >
            <div className="relative">
              <Image
                src={featured.image}
                alt={featured.title}
                width={900}
                height={620}
                className="h-[11rem] w-full object-cover sm:h-[14rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,32,51,0.22))]" aria-hidden />
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#B71C1C]">{featured.category}</p>
              <h3 className="mt-1 line-clamp-2 text-balance font-sans text-base font-semibold leading-tight text-foreground sm:text-lg">
                {featured.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs leading-6 text-muted-foreground sm:text-sm">{featured.excerpt}</p>
              <div className="mt-3 flex items-center gap-4 text-[0.65rem] text-muted-foreground sm:text-xs">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3 w-3" aria-hidden />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="h-3 w-3" aria-hidden />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#B71C1C] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-[#B71C1C]/20 transition-transform hover:-translate-y-0.5"
              >
                Read article
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </motion.article>

          {/* Sidebar - Highly Compact */}
          <div className="grid gap-2.5">
            {sidebar.map((blog, index) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className="overflow-hidden rounded-[1.25rem] border border-border bg-white shadow-[0_8px_25px_rgba(15,23,42,0.05)]"
              >
                <Link href={blog.href} target="_blank" rel="noreferrer" className="flex h-full gap-2.5 p-2.5 sm:p-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#B71C1C]">{blog.category}</p>
                    <h3 className="mt-0.5 line-clamp-2 text-pretty text-xs font-semibold leading-5 text-foreground sm:text-sm">
                      {blog.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-[0.6rem] text-muted-foreground">
                      <span>{blog.date}</span>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
