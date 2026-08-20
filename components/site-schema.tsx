import { HOSPITAL } from '@/lib/data'

export function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://shmsd.in/#website',
        url: 'https://shmsd.in',
        name: HOSPITAL.name,
        description: HOSPITAL.tagline,
        publisher: {
          '@id': 'https://shmsd.in/#hospital',
        },
      },
      {
        '@type': ['Hospital', 'MedicalClinic', 'LocalBusiness'],
        '@id': 'https://shmsd.in/#hospital',
        name: HOSPITAL.name,
        url: 'https://shmsd.in',
        telephone: HOSPITAL.phoneE164,
        email: HOSPITAL.email,
        image: ['https://shmsd.in/images/about_preview.png'],
        logo: 'https://shmsd.in/images/logo.webp',
        medicalSpecialty: ['Cardiovascular', 'Gynecologic', 'Orthopedic', 'Neurologic', 'Emergency'],
        sameAs: [
          'https://www.facebook.com/Signaturehospital/',
          'https://www.instagram.com/signature.hospital',
          'https://www.youtube.com/@SignatureHospital-o1e',
        ],
        hasMap: HOSPITAL.mapEmbedSrc,
        areaServed: { '@type': 'Place', name: 'Yamuna Vihar, Delhi' },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 28.7020291,
          longitude: 77.2774668,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'C-2/41 A, Main Service Ln, Block C, Yamuna Vihar',
          addressLocality: 'Delhi',
          postalCode: '110053',
          addressCountry: 'IN',
        },
        availableService: [
          { '@type': 'MedicalProcedure', name: 'Cardiology' },
          { '@type': 'MedicalProcedure', name: 'Orthopaedics' },
          { '@type': 'MedicalProcedure', name: 'Neurology' },
          { '@type': 'MedicalProcedure', name: 'Emergency & Trauma Care' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
