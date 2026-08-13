/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/hospitals-near-me/delhi-hospital/about', permanent: true },
      { source: '/services', destination: '/hospitals-near-me/delhi-hospital/speciality', permanent: true },
      {
        source: '/services/:path*',
        destination: '/hospitals-near-me/delhi-hospital/speciality/:path*',
        permanent: true,
      },
      { source: '/departments', destination: '/hospitals-near-me/delhi-hospital/speciality', permanent: true },
      { source: '/doctors', destination: '/hospitals-near-me/delhi-hospital/doctors', permanent: true },
      { source: '/facilities', destination: '/hospitals-near-me/delhi-hospital/facilities', permanent: true },
      { source: '/contact', destination: '/hospitals-near-me/delhi-hospital/contact', permanent: true },
      { source: '/gallery', destination: '/hospitals-near-me/delhi-hospital/gallery', permanent: true },
      { source: '/empanelled-tpa', destination: '/hospitals-near-me/delhi-hospital/tpa', permanent: true },
      {
        source: '/about/management/:slug',
        destination: '/hospitals-near-me/delhi-hospital/doctors/:slug',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      { source: '/hospitals-near-me/delhi-hospital/about', destination: '/about' },
      { source: '/hospitals-near-me/delhi-hospital/speciality', destination: '/services' },
      { source: '/hospitals-near-me/delhi-hospital/speciality/:path*', destination: '/services/:path*' },
      { source: '/hospitals-near-me/delhi-hospital/doctors', destination: '/doctors' },
      { source: '/hospitals-near-me/delhi-hospital/doctors/:slug', destination: '/about/management/:slug' },
      { source: '/hospitals-near-me/delhi-hospital/facilities', destination: '/facilities' },
      { source: '/hospitals-near-me/delhi-hospital/contact', destination: '/contact' },
      { source: '/hospitals-near-me/delhi-hospital/gallery', destination: '/gallery' },
      { source: '/hospitals-near-me/delhi-hospital/tpa', destination: '/empanelled-tpa' },
    ]
  },
}

export default nextConfig
