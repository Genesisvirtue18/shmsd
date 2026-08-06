import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWidgets } from '@/components/floating-widgets'
import { SiteSchema } from '@/components/site-schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://shmsd.in'),
  title: {
    default: 'Signature Heart & Multispeciality Hospital | Premium Healthcare in Delhi',
    template: '%s | Signature Hospital',
  },
  description:
    'Signature Heart & Multispeciality Hospital in Yamuna Vihar, Delhi offers world-class cardiology, orthopaedics, neurology, ICU, 24x7 emergency care and diagnostics with expert doctors and affordable, personalized treatment.',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shmsd.in',
    siteName: 'Signature Heart & Multispeciality Hospital',
    title: 'Signature Heart & Multispeciality Hospital | Premium Healthcare in Delhi',
    description:
      'World-class multispeciality care with expert doctors, advanced ICU, 24x7 emergency and affordable treatment in Yamuna Vihar, Delhi.',
    images: [{ url: '/images/hero-hospital.png', width: 1200, height: 630, alt: 'Signature Hospital building' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signature Heart & Multispeciality Hospital',
    description: 'Premium, affordable multispeciality healthcare in Delhi.',
    images: ['/images/hero-hospital.png'],
  },
  generator: 'v0.app',
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
    <html lang="en" className="bg-background">
      <body className="antialiased font-sans">
        <SiteSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWidgets />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
