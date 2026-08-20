import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { SiteSchema } from '@/components/site-schema'

const neoSans = localFont({
  src: [
    {
      path: './fonts/neo-sans-std/NeoSansStd-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/neo-sans-std/NeoSansStd-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/neo-sans-std/NeoSansStd-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-neo-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shmsd.in'),
  title: {
    default: 'Multispeciality Hospital in Yamuna Vihar, Delhi | Signature',
    template: '%s | Signature Hospital',
  },
  description:
    'Visit Signature Hospital in Yamuna Vihar, Delhi for specialist consultations, diagnostics, ICU and 24x7 emergency care. Request an appointment.',
  keywords: [
    'hospital in Delhi',
    'Signature Hospital',
    'heart hospital Yamuna Vihar',
    'multispeciality hospital',
    'cardiology',
    'ICU',
    '24x7 emergency',
    'affordable healthcare Delhi',
  ],
  authors: [{ name: 'Signature Heart & Multispeciality Hospital' }],
  category: 'healthcare',
  applicationName: 'Signature Heart & Multispeciality Hospital',
icons: {
  icon: '/favicon.jpeg',
  apple: '/favicon.jpeg',
  shortcut: '/favicon.jpeg',
},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shmsd.in',
    siteName: 'Signature Heart & Multispeciality Hospital',
    title: 'Multispeciality Hospital in Yamuna Vihar, Delhi | Signature',
    description:
      'Specialist consultations, diagnostics, ICU and 24x7 emergency care at Signature Hospital in Yamuna Vihar, Delhi.',
    images: [{ url: '/images/about_preview.png', width: 1200, height: 630, alt: 'Signature Hospital about preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Heart & Multispeciality Hospital',
    description: 'Premium, affordable multispeciality healthcare in Delhi.',
    images: ['/images/about_preview.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#B71C1C',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${neoSans.variable} bg-background`}>
      <body className="antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-lg bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <SiteSchema />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWidgets />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
