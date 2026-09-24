'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
} from 'lucide-react'

const youtubeChannelHref = 'https://www.youtube.com/@SignatureHospital-o1e/shorts'
const instagramHref = 'https://www.instagram.com/signature.hospital'

type VideoCard = {
  id: string
  url: string
  fallbackTitle: string
  accent: string
}

const VIDEOS: VideoCard[] = [
  {
    id: 'iE2RzbTi0C8',
    url: 'https://youtube.com/shorts/iE2RzbTi0C8?si=oJXHPU_KvXc-_5EH',
    fallbackTitle: 'YouTube Short',
    accent: 'from-slate-950 via-slate-800 to-sky-700',
  },
  {
    id: 'WoroQppWSIU',
    url: 'https://www.youtube.com/shorts/WoroQppWSIU',
    fallbackTitle: 'YouTube Short',
    accent: 'from-rose-950 via-rose-800 to-orange-700',
  },
  {
    id: 'zPN-Dk2wL9Y',
    url: 'https://www.youtube.com/shorts/zPN-Dk2wL9Y',
    fallbackTitle: 'YouTube Short',
    accent: 'from-zinc-950 via-zinc-800 to-amber-700',
  },
  {
    id: 'F2XTCK0h2x4',
    url: 'https://www.youtube.com/shorts/F2XTCK0h2x4',
    fallbackTitle: 'YouTube Short',
    accent: 'from-sky-950 via-sky-800 to-cyan-700',
  },
  {
    id: '6aAE_7tbP-g',
    url: 'https://www.youtube.com/shorts/6aAE_7tbP-g',
    fallbackTitle: 'YouTube Short',
    accent: 'from-emerald-950 via-emerald-800 to-teal-700',
  },
  {
    id: 'cxKXv69prCM',
    url: 'https://www.youtube.com/shorts/cxKXv69prCM',
    fallbackTitle: 'YouTube Short',
    accent: 'from-indigo-950 via-indigo-800 to-violet-700',
  },
]

const DEPARTMENT_KEYWORDS: Array<{ keyword: string; label: string }> = [
  { keyword: 'maternity', label: 'Maternity' },
  { keyword: 'gynaecology', label: 'Gynaecology' },
  { keyword: 'gynecology', label: 'Gynaecology' },
  { keyword: 'gynae', label: 'Gynaecology' },
  { keyword: 'women', label: 'Women Care' },
  { keyword: 'mother', label: 'Maternity' },
  { keyword: 'child', label: 'Paediatrics' },
  { keyword: 'pediatric', label: 'Paediatrics' },
  { keyword: 'paediatric', label: 'Paediatrics' },
  { keyword: 'heart', label: 'Cardiology' },
  { keyword: 'cardio', label: 'Cardiology' },
  { keyword: 'knee', label: 'Knee' },
  { keyword: 'angioplasty', label: 'Angioplasty' },
  { keyword: 'diabetes', label: 'Diabetes' },
  { keyword: 'shoulder', label: 'Shoulder & Neck' },
  { keyword: 'neck', label: 'Shoulder & Neck' },
  { keyword: 'back', label: 'Back Pain' },
  { keyword: 'spine', label: 'Spine' },
  { keyword: 'arthritis', label: 'Osteoarthritis' },
  { keyword: 'osteoarthritis', label: 'Osteoarthritis' },
  { keyword: 'gfc', label: 'GFC' },
]

const extractDepartmentFromTitle = (title: string) => {
  const normalized = title.toLowerCase()

  for (const entry of DEPARTMENT_KEYWORDS) {
    if (normalized.includes(entry.keyword)) {
      return entry.label
    }
  }

  const segments = title
    .split('|')
    .map((segment) => segment.trim())
    .filter(Boolean)

  const meaningfulSegment = segments.find(
    (segment) =>
      !/^patient testimonial$/i.test(segment) &&
      !/^testimonial$/i.test(segment) &&
      !/signature hospital/i.test(segment) &&
      !/multi-speciality hospital/i.test(segment) &&
      !/multispeciality hospital/i.test(segment),
  )

  return meaningfulSegment || title.trim() || 'General'
}

export function InstagramFeed() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeChip, setActiveChip] = useState('All Videos')
  const [activeVideoId, setActiveVideoId] = useState(VIDEOS[0]?.id ?? '')
  const [videoMeta, setVideoMeta] = useState<
    Record<string, { title: string; thumbnail_url: string; author_name: string }>
  >({})

  const videoRows = useMemo(
    () =>
      VIDEOS.map((video) => {
        const title = videoMeta[video.id]?.title ?? video.fallbackTitle
        const department = extractDepartmentFromTitle(title)

        return {
          ...video,
          title,
          department,
        }
      }),
    [videoMeta],
  )

  const departmentChips = useMemo(
    () => ['All Videos', ...Array.from(new Set(videoRows.map((video) => video.department)))],
    [videoRows],
  )

  const filteredVideos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return videoRows.filter((video) => {
      const matchesQuery =
        query.length === 0 ||
        video.title.toLowerCase().includes(query) ||
        video.department.toLowerCase().includes(query) ||
        (videoMeta[video.id]?.author_name ?? 'Signature Hospital').toLowerCase().includes(query)

      const matchesChip = activeChip === 'All Videos' || video.department === activeChip

      return matchesQuery && matchesChip
    })
  }, [activeChip, searchTerm, videoMeta, videoRows])

  useEffect(() => {
    let alive = true

    const loadMetadata = async () => {
      const nextMeta: Record<
        string,
        { title: string; thumbnail_url: string; author_name: string }
      > = {}

      await Promise.all(
        VIDEOS.map(async (video) => {
          try {
            const response = await fetch(
              `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`,
            )

            if (!response.ok) return

            const data = (await response.json()) as {
              title?: string
              thumbnail_url?: string
              author_name?: string
            }

            if (!data.title || !data.thumbnail_url) return

            nextMeta[video.id] = {
              title: data.title,
              thumbnail_url: data.thumbnail_url,
              author_name: data.author_name || 'Signature Hospital',
            }
          } catch {
            // Keep the fallback card content if the embed metadata is unavailable.
          }
        }),
      )

      if (alive) {
        setVideoMeta(nextMeta)
      }
    }

    loadMetadata()

    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    if (!filteredVideos.length) {
      setActiveVideoId('')
      return
    }

    if (!filteredVideos.some((video) => video.id === activeVideoId)) {
      setActiveVideoId(filteredVideos[0].id)
    }
  }, [activeVideoId, filteredVideos])

  const activeIndex = Math.max(0, filteredVideos.findIndex((video) => video.id === activeVideoId))
  const featuredVideo = filteredVideos.find((video) => video.id === activeVideoId) ?? filteredVideos[0]

  const setRelativeVideo = (direction: 'left' | 'right') => {
    if (!filteredVideos.length) return

    const delta = direction === 'left' ? -1 : 1
    const nextIndex = (activeIndex + delta + filteredVideos.length) % filteredVideos.length
    setActiveVideoId(filteredVideos[nextIndex].id)
  }

  return (
    <section className="bg-[#eaf3f8] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-[24rem] items-center rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" aria-hidden />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search videos..."
            className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {departmentChips.map((chip) => {
            const active = activeChip === chip
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setActiveChip(chip)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-[#154c79] bg-[#154c79] text-white shadow-md shadow-[#154c79]/20'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-[#154c79]/40 hover:text-[#154c79]'
                }`}
                title={chip}
              >
                <span className="max-w-[12rem] truncate inline-block align-middle">
                  {chip}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative mt-10 hidden md:block">
          <button
            type="button"
            onClick={() => setRelativeVideo('left')}
            className="absolute z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-[#154c79] md:flex"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div
            className="relative mx-auto flex min-h-[350px] items-center justify-center overflow-hidden px-2 sm:min-h-[390px] md:min-h-[430px]"
          >
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video, index) => {
                const meta = videoMeta[video.id]
                const title = meta?.title ?? video.title
                const offset = index - activeIndex
                const absOffset = Math.abs(offset)
                const isVisible = absOffset <= 1
                const isCenter = offset === 0

                if (!isVisible) return null

                const translateX = offset === 0 ? 0 : offset < 0 ? -180 : 180
                const scale = isCenter ? 1 : 0.86
                const opacity = isCenter ? 1 : 0.65
                const zIndex = isCenter ? 30 : 20
                const cardWidth = isCenter
                  ? 'w-[min(90vw,740px)]'
                  : 'w-[min(70vw,540px)]'
                const cardHeight = isCenter ? 'h-[315px] sm:h-[340px]' : 'h-[245px] sm:h-[265px]'

                return (
                  <motion.article
                    key={video.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className={`absolute  ${cardWidth} ${cardHeight} overflow-hidden rounded-[2.1rem] border border-white/80 bg-white shadow-[0_24px_65px_rgba(21,76,121,0.18)]`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <Link
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full w-full flex-row overflow-hidden"
                    >
                      <div
                        className={`relative flex items-end overflow-hidden bg-gradient-to-br text-white ${
                          isCenter ? 'w-[52%] p-5 sm:p-6' : 'w-[45%] p-4'
                        } ${video.accent}`}
                      >
                        {meta?.thumbnail_url ? (
                          <img
                            src={meta.thumbnail_url}
                            alt={title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_45%)]" />
                        <div className="absolute inset-0 bg-black/18" />

                        <div className="relative z-10 flex w-full items-start justify-between">
                          <div className="max-w-[72%] rounded-full bg-white/15 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-white/90 backdrop-blur-sm">
                            {video.department}
                          </div>
                          <div className="rounded-full bg-black/35 px-2.5 py-1 text-[0.68rem] font-semibold text-white">
                            Shorts
                          </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-[#154c79] shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
                          </div>
                        </div>
                        </div>

                        <div
                          className={`flex flex-1 flex-col justify-between bg-white ${
                            isCenter ? 'p-6 sm:p-7' : 'p-4'
                          }`}
                      >
                        <div className={isCenter ? 'pr-2' : 'pr-1'}>
                          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2b7a9a]">
                            Doctor Recommended
                          </p>
                          <h3
                            className={`mt-3 font-semibold leading-tight text-slate-900 ${
                              isCenter ? 'text-[1.25rem] sm:text-[1.55rem]' : 'text-[1rem] sm:text-[1.05rem]'
                            }`}
                          >
                            {title}
                          </h3>
                          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                            {video.department} short from {meta?.author_name || 'Signature Hospital'}
                          </p>
                          {isCenter ? <div className="mt-10 h-0.5 w-8 bg-[#2b7a9a]" /> : null}
                        </div>

                        <div className="mt-5 flex items-center gap-2 rounded-full bg-[#f3fafc] px-3 py-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#2b7a9a] shadow-sm">
                            <span className="text-[0.65rem] font-semibold">◌</span>
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[0.72rem] font-semibold text-slate-700">
                              {meta?.author_name || 'Signature Hospital'}
                            </p>
                            <p className="truncate text-[0.62rem] text-slate-400">
                              {video.department}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })
            ) : (
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-8 py-12 text-center text-sm text-slate-500">
                No videos found for your search.
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setRelativeVideo('right')}
            className="absolute right-[-6px] top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-[#154c79] md:flex"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="mt-8 md:hidden">
          {featuredVideo ? (
            <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_65px_rgba(21,76,121,0.14)]">
              <Link
                href={featuredVideo.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full w-full flex-col overflow-hidden"
              >
                <div
                  className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br p-4 text-white ${featuredVideo.accent}`}
                >
                  {videoMeta[featuredVideo.id]?.thumbnail_url ? (
                    <img
                      src={videoMeta[featuredVideo.id].thumbnail_url}
                      alt={videoMeta[featuredVideo.id]?.title ?? featuredVideo.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_45%)]" />
                  <div className="absolute inset-0 bg-black/18" />

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="max-w-[75%] rounded-full bg-white/15 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-white/90 backdrop-blur-sm">
                      {featuredVideo.department}
                    </div>
                    <div className="rounded-full bg-black/35 px-2.5 py-1 text-[0.68rem] font-semibold text-white">
                      Shorts
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-[#154c79] shadow-lg">
                      <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#2b7a9a]">
                    Doctor Recommended
                  </p>
                  <h3 className="mt-2 text-[1.02rem] font-semibold leading-snug text-slate-900">
                    {videoMeta[featuredVideo.id]?.title ?? featuredVideo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {featuredVideo.department} short from {videoMeta[featuredVideo.id]?.author_name || 'Signature Hospital'}
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded-full bg-[#f3fafc] px-3 py-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#2b7a9a] shadow-sm">
                      <span className="text-[0.65rem] font-semibold">◌</span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[0.72rem] font-semibold text-slate-700">
                        {videoMeta[featuredVideo.id]?.author_name || 'Signature Hospital'}
                      </p>
                      <p className="truncate text-[0.62rem] text-slate-400">
                        {featuredVideo.department}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 p-3">
                <button
                  type="button"
                  onClick={() => setRelativeVideo('left')}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setRelativeVideo('right')}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600"
                  aria-label="Next video"
                >
                  Next
                  <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-500">
              No videos found for your search.
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={youtubeChannelHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#154c79] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe8e8] text-[#d11f1f]">
              <span className="text-[0.68rem] font-black">YT</span>
            </span>
            <span className="text-left">
              Watch on YouTube
              <span className="block text-xs font-normal text-slate-500">
                Patient education videos
              </span>
            </span>
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>

          <Link
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-[#154c79] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f8e9] text-[#6a8f2a]">
              <span className="text-[0.68rem] font-black">@</span>
            </span>
            <span className="text-left">
              Follow on Instagram
              <span className="block text-xs font-normal text-slate-500">
                @signature.hospital
              </span>
            </span>
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
