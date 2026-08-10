import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read hospital updates, health tips and stories from Signature Heart & Multispeciality Hospital.',
  alternates: { canonical: '/blog' },
}

type WpPost = {
  id: number
  slug: string
  date: string
  link: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
}

type BlogCard = {
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
  image: string
  category: string
}

const FALLBACK_BLOGS: BlogCard[] = [
  {
    title: 'Latest health updates from Signature Hospital',
    excerpt: 'Helpful guidance, hospital announcements and patient-focused tips are shared here.',
    date: 'Recent',
    readTime: '2 min read',
    href: 'https://healthconnect.shmsd.in/blog/',
    image: '/images/blog-placeholder.jpg',
    category: 'HealthConnect',
  },
  {
    title: 'Patient care stories and wellness advice',
    excerpt: 'Explore simple updates and practical care information for patients and families.',
    date: 'Recent',
    readTime: '2 min read',
    href: 'https://healthconnect.shmsd.in/blog/',
    image: '/images/blog-placeholder.jpg',
    category: 'HealthConnect',
  },
  {
    title: 'What to know before your next visit',
    excerpt: 'Short, useful notes to help you prepare for consultations and follow-up care.',
    date: 'Recent',
    readTime: '2 min read',
    href: 'https://healthconnect.shmsd.in/blog/',
    image: '/images/blog-placeholder.jpg',
    category: 'HealthConnect',
  },
  {
    title: 'Hospital news and health awareness posts',
    excerpt: 'We keep this space updated with new stories, advice and announcements.',
    date: 'Recent',
    readTime: '2 min read',
    href: 'https://healthconnect.shmsd.in/blog/',
    image: '/images/blog-placeholder.jpg',
    category: 'HealthConnect',
  },
]

function stripHtml(input: string) {
  return input.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function mapPostToBlog(post: WpPost): BlogCard {
  const title = post.title?.rendered || 'Untitled Article'
  const excerpt = stripHtml(post.excerpt?.rendered || 'No excerpt available.')
  const dateRaw = post.date || ''
  const formattedDate = dateRaw
    ? new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dateRaw))
    : 'Recent'
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog-placeholder.jpg'

  return {
    title,
    excerpt,
    date: formattedDate,
    readTime: '2 min read',
    href: post.link || '#',
    image,
    category: 'HealthConnect',
  }
}

async function getBlogs(): Promise<BlogCard[]> {
  try {
    const res = await fetch('https://healthconnect.shmsd.in/wp-json/wp/v2/posts?per_page=10&_embed=1', {
      next: {
        revalidate: 300,
      },
    })

    if (!res.ok) return []

    const posts = (await res.json()) as WpPost[]
    return posts.slice(0, 10).map(mapPostToBlog)
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()
  const visibleBlogs = blogs.length > 0 ? blogs : FALLBACK_BLOGS

  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights, announcements and helpful health information for patients and families."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">
          {visibleBlogs.map((post) => (
            <article
              key={`${post.title}-${post.date}`}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <a href={post.href} target="_blank" rel="noreferrer" className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[0.65rem]">
                    {post.category}
                  </p>
                  <h2
                    className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground sm:text-base"
                    dangerouslySetInnerHTML={{
                      __html: post.title,
                    }}
                  />
                  <p className="mt-2 hidden text-xs leading-5 text-muted-foreground sm:line-clamp-2 sm:block">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-3 text-[0.65rem] text-muted-foreground sm:text-xs">
                    <span>{post.date}</span>
                    <span className="mx-1">-</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://healthconnect.shmsd.in/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
