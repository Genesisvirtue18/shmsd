const DELHI_HOSPITAL_BASE = '/hospitals-near-me/delhi-hospital'

export const ROUTES = {
  home: '/',
  blog: '/blog',
  appointment: '/appointment',
  hospitalBase: DELHI_HOSPITAL_BASE,
  specialities: `${DELHI_HOSPITAL_BASE}/speciality`,
  speciality: (slug: string) => `${DELHI_HOSPITAL_BASE}/speciality/${slug}`,
  facilities: `${DELHI_HOSPITAL_BASE}/facilities`,
  doctors: `${DELHI_HOSPITAL_BASE}/doctors`,
  doctor: (slug: string) => `${DELHI_HOSPITAL_BASE}/doctors/${slug}`,
  about: `${DELHI_HOSPITAL_BASE}/about`,
  contact: `${DELHI_HOSPITAL_BASE}/contact`,
  gallery: `${DELHI_HOSPITAL_BASE}/gallery`,
  tpa: `${DELHI_HOSPITAL_BASE}/tpa`,
  service: (slug: string) => `${DELHI_HOSPITAL_BASE}/speciality/${slug}`,
}

