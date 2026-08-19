const YAMUNA_VIHAR_BASE = '/hospitals-near-me/yamuna-vihar'

export const slugifySegment = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')

export const ROUTES = {
  home: '/',
  blog: '/blog',
  appointment: '/appointment',
  hospitalBase: YAMUNA_VIHAR_BASE,
  specialities: `${YAMUNA_VIHAR_BASE}/speciality`,
  speciality: (slug: string) => `${YAMUNA_VIHAR_BASE}/speciality/${slug}`,
  facilities: `${YAMUNA_VIHAR_BASE}/facilities`,
  doctors: `${YAMUNA_VIHAR_BASE}/doctors`,
  doctor: (speciality: string, slug: string) => `${YAMUNA_VIHAR_BASE}/${slugifySegment(speciality)}/dr-${slug}`,
  about: `${YAMUNA_VIHAR_BASE}/about`,
  contact: `${YAMUNA_VIHAR_BASE}/contact`,
  gallery: `${YAMUNA_VIHAR_BASE}/gallery`,
  tpa: `${YAMUNA_VIHAR_BASE}/tpa`,
  service: (slug: string) => `${YAMUNA_VIHAR_BASE}/speciality/${slug}`,
}
