import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read hospital updates, health tips and stories from Signature Heart & Multispeciality Hospital.',
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

async function getBlogs(): Promise<WpPost[]> {
  try {
    const res = await fetch(
      'https://healthconnect.shmsd.in/wp-json/wp/v2/posts?per_page=10&_embed=1',
      {
        next: {
          revalidate: 300,
        },
      }
    )

    if (!res.ok) return []

    return await res.json()
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights, announcements and helpful health information for patients and families."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        {blogs.length === 0 ? (
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold">
              No blogs found
            </h2>
            <p className="mt-3 text-muted-foreground">
              Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => {
              const image =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url ??
                '/images/blog-placeholder.jpg'

                  return (
  <article
    key={post.id}
    className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <img
      src={image}
      alt={post.title.rendered}
      className="h-56 w-full object-cover transition duration-300 hover:scale-105"
    />

    <div className="p-6 flex flex-col ">
      <p className="text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <h2
        className="mt-3 text-xl font-semibold text-foreground line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: post.title.rendered,
        }}
      />

      <div
        className="mt-3 line-clamp-2 text-sm text-muted-foreground"
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered,
        }}
      />

      
    </div>
  </article>
)
            })}
      
          </div>
          
        )}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
      </section>
    </>
  )
}