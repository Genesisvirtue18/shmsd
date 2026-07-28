import { HOSPITAL } from '@/lib/data'

export function SiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: HOSPITAL.name,
    url: 'https://shmsd.in',
    telephone: HOSPITAL.phone,
    email: HOSPITAL.email,
    image: 'https://shmsd.in/images/hero-hospital.png',
    medicalSpecialty: ['Cardiovascular', 'Orthopedic', 'Neurologic', 'Emergency'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C-2/41 A, Service Ln, Yamuna Vihar',
      addressLocality: 'Delhi',
      addressCountry: 'IN',
    },
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Cardiology' },
      { '@type': 'MedicalProcedure', name: 'Orthopaedics' },
      { '@type': 'MedicalProcedure', name: 'Neurology' },
      { '@type': 'MedicalProcedure', name: 'Emergency & Trauma Care' },
    ],
    openingHours: 'Mo-Su 00:00-23:59',
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
