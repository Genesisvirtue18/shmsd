/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Let Next resize and encode large source images for the requesting device.
    unoptimized: false,
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'healthconnect.shmsd.in',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/about', destination: '/hospitals-near-me/yamuna-vihar/about', permanent: true },
      { source: '/services', destination: '/hospitals-near-me/yamuna-vihar/speciality', permanent: true },
      {
        source: '/services/:path*',
        destination: '/hospitals-near-me/yamuna-vihar/speciality/:path*',
        permanent: true,
      },
      { source: '/departments', destination: '/hospitals-near-me/yamuna-vihar/speciality', permanent: true },
      { source: '/doctors', destination: '/hospitals-near-me/yamuna-vihar/doctors', permanent: true },
      { source: '/facilities', destination: '/hospitals-near-me/yamuna-vihar/facilities', permanent: true },
      { source: '/contact', destination: '/hospitals-near-me/yamuna-vihar/contact', permanent: true },
      { source: '/gallery', destination: '/hospitals-near-me/yamuna-vihar/gallery', permanent: true },
      { source: '/empanelled-tpa', destination: '/hospitals-near-me/yamuna-vihar/tpa', permanent: true },
      { source: '/hospitals-near-me/delhi-hospital/about', destination: '/hospitals-near-me/yamuna-vihar/about', permanent: true },
      {
        source: '/hospitals-near-me/delhi-hospital/speciality',
        destination: '/hospitals-near-me/yamuna-vihar/speciality',
        permanent: true,
      },
      {
        source: '/hospitals-near-me/delhi-hospital/speciality/:path*',
        destination: '/hospitals-near-me/yamuna-vihar/speciality/:path*',
        permanent: true,
      },
      { source: '/hospitals-near-me/delhi-hospital/doctors', destination: '/hospitals-near-me/yamuna-vihar/doctors', permanent: true },
      {
        source: '/hospitals-near-me/delhi-hospital/doctors/:slug',
        destination: '/about/management/:slug',
        permanent: true,
      },
      { source: '/hospitals-near-me/delhi-hospital/facilities', destination: '/hospitals-near-me/yamuna-vihar/facilities', permanent: true },
      { source: '/hospitals-near-me/delhi-hospital/contact', destination: '/hospitals-near-me/yamuna-vihar/contact', permanent: true },
      { source: '/hospitals-near-me/delhi-hospital/gallery', destination: '/hospitals-near-me/yamuna-vihar/gallery', permanent: true },
      { source: '/hospitals-near-me/delhi-hospital/tpa', destination: '/hospitals-near-me/yamuna-vihar/tpa', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/hospitals-near-me/yamuna-vihar/about', destination: '/about' },
      { source: '/hospitals-near-me/yamuna-vihar/speciality', destination: '/services' },
      { source: '/hospitals-near-me/yamuna-vihar/speciality/:path*', destination: '/services/:path*' },
      { source: '/hospitals-near-me/yamuna-vihar/doctors', destination: '/doctors' },
      { source: '/hospitals-near-me/yamuna-vihar/facilities', destination: '/facilities' },
      { source: '/hospitals-near-me/yamuna-vihar/contact', destination: '/contact' },
      { source: '/hospitals-near-me/yamuna-vihar/gallery', destination: '/gallery' },
      { source: '/hospitals-near-me/yamuna-vihar/tpa', destination: '/empanelled-tpa' },
    ]
  },
}

export default nextConfig
