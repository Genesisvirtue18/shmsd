export const HOSPITAL = {
  name: 'Signature Heart & Multispeciality Hospital',
  shortName: 'Signature Hospital',
  tagline: 'Health Equality, Always',
  phone: '+91 7012109635',
  phoneHref: 'tel:+917012109635',
  whatsapp: '917012109635',
  email: 'info@shmsd.in',
  address: 'C-2/41 A, Service Ln, Yamuna Vihar, Delhi',
  mapQuery: 'Yamuna Vihar, Delhi',
  emergencyNumber: '+91 7012109635',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Specialities', href: '/services' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Our Doctor', href: '/doctors' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Empanelled TPA', href: '/empanelled-tpa' },
  { label: 'Blog', href: '/blog' },
]

export type Department = {
  slug: string
  title: string
  icon: string
  description: string
  image?: string
}

export const DEPARTMENTS: Department[] = [
  {
    slug: 'cardiology',
    title: 'Cardiology',
    icon: 'HeartPulse',
    description:
      'Comprehensive heart care including angiography, angioplasty and preventive cardiology by experienced cardiologists.',
    image: '/images/facility-icu.png',
  },
  {
    slug: 'orthopaedics',
    title: 'Orthopaedics',
    icon: 'Bone',
    description:
      'Advanced treatment for bone, joint and spine conditions, including joint replacement and trauma surgery.',
    image: '/images/facility-ot.png',
  },
  {
    slug: 'neurology',
    title: 'Neurology',
    icon: 'Brain',
    description: 'Expert diagnosis and management of brain, spine and nervous system disorders.',
    image: '/images/facility-lab.png',
  },
  {
    slug: 'general-surgery',
    title: 'General Surgery',
    icon: 'Scissors',
    description: 'Safe, modern surgical care across a wide range of general and laparoscopic procedures.',
    image: '/images/facility-ot.png',
  },
  {
    slug: 'gynaecology',
    title: 'Gynaecology & Obstetrics',
    icon: 'Baby',
    description: 'Complete womens health, maternity and newborn care in a calm, supportive environment.',
    image: '/images/gallery-room.png',
  },
  {
    slug: 'critical-care',
    title: 'Critical Care / ICU',
    icon: 'Activity',
    description: 'Fully equipped intensive care unit with 24x7 monitoring and expert critical care specialists.',
    image: '/images/facility-icu.png',
  },
  {
    slug: 'emergency',
    title: 'Emergency & Trauma',
    icon: 'Siren',
    description: 'Round-the-clock emergency and trauma services prepared to handle high patient volumes.',
    image: '/images/facility-ambulance.png',
  },
  {
    slug: 'diagnostics',
    title: 'Diagnostics',
    icon: 'ScanSearch',
    description: 'In-house laboratory and digital imaging for fast, accurate reports, often available next day.',
    image: '/images/gallery-xray.png',
  },
]

export type Doctor = {
  name: string
  specialty: string
  experience: string
  image: string
  bio: string
}

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Ashish',
    specialty: 'Interventional Cardiologist',
    experience: '15+ years',
    image: '/images/doctor-ashish.png',
    bio: 'Leading heart specialist known for calm, attentive care in angiography and angioplasty.',
  },
  {
    name: 'Dr. Surbhi Gupta',
    specialty: 'Gynaecologist & Obstetrician',
    experience: '12+ years',
    image: '/images/doctor-surbhi.png',
    bio: 'Dedicated to compassionate womens health and maternity care for every patient.',
  },
  {
    name: 'Dr. Rohit Mehta',
    specialty: 'Orthopaedic Surgeon',
    experience: '14+ years',
    image: '/images/doctor-ortho.png',
    bio: 'Specialist in joint replacement, sports injuries and complex trauma surgery.',
  },
  {
    name: 'Dr. Neha Kapoor',
    specialty: 'Neurologist',
    experience: '10+ years',
    image: '/images/doctor-neuro.png',
    bio: 'Expert in stroke management and neurological disorders with a patient-first approach.',
  },
]

export type Service = {
  title: string
  description: string
  image: string
}

export const SERVICES: Service[] = [
  {
    title: 'General Medicine',
    description: 'Primary healthcare services and first-line medical evaluation for everyday health concerns.',
    image: '/images/hero-doctor.png',
  },
  {
    title: 'General Surgery',
    description: 'Safe, modern surgical care for a wide range of general procedures.',
    image: '/images/facility-ot.png',
  },
  {
    title: 'Cardiology',
    description: 'Comprehensive care for patients with heart-related problems.',
    image: '/images/cardiology.png',
  },
  {
    title: 'Gynecology & Obstetrics',
    description: "Complete care for women's health, maternity and newborn support.",
    image: '/images/gynecology.png',
  },
  {
    title: 'Pulmonology',
    description: 'Evaluation, diagnosis and treatment of respiratory diseases.',
    image: '/images/pulmonology.png',
  },
  {
    title: 'Orthopedics',
    description: 'Treatment for fractures, deformities, sports injuries and joint pain.',
    image: '/images/orthopedics.png',
  },
  {
    title: 'Urology',
    description: 'Comprehensive care for urinary tract and kidney-related concerns.',
    image: '/images/urology.png',
  },
  {
    title: 'Infertility & IVF',
    description: 'Advanced fertility care and reproductive treatment support.',
    image: '/images/infertility-ivf.png',
  },
  {
    title: 'ENT',
    description: 'Care for ear, nose, sinus, head and neck conditions.',
    image: '/images/ent.png',
  },
  {
    title: 'Gastroenterology',
    description: 'Diagnosis and treatment for stomach, liver and digestive disorders.',
    image: '/images/gastroenterology.png',
  },
  {
    title: 'Psychiatry',
    description: 'Compassionate mental health care for emotional and behavioural wellbeing.',
    image: '/images/about-team.png',
  },
  {
    title: 'Neurosurgery',
    description: 'Personalized surgical care for brain and nervous system conditions.',
    image: '/images/doctor-neuro.png',
  },
  {
    title: 'Pediatrics',
    description: 'Dedicated healthcare for infants, children and adolescents.',
    image: '/images/gallery-room.png',
  },
  {
    title: 'Plastic Surgery',
    description: 'Reconstructive and aesthetic procedures delivered with care and precision.',
    image: '/images/hero-doctor.png',
  },
  {
    title: 'Radiology',
    description: 'Accurate and timely imaging for confident diagnosis and treatment planning.',
    image: '/images/gallery-xray.png',
  },
  {
    title: 'Neurology',
    description: 'Expert diagnosis and management of brain, spine and nerve conditions.',
    image: '/images/doctor-neuro.png',
  },
  {
    title: 'Dermatology',
    description: 'Comprehensive skin care and treatment for common and complex conditions.',
    image: '/images/hero-doctor.png',
  },
  {
    title: 'Nephrology',
    description: 'Comprehensive kidney care and treatment planning for renal conditions.',
    image: '/images/facility-lab.png',
  },
  {
    title: 'Physiotherapy',
    description: 'Personalized rehabilitation care to improve movement and recovery.',
    image: '/images/doctor-ortho.png',
  },
]

export type Facility = {
  title: string
  description: string
  image: string
  points: string[]
}

export const FACILITIES: Facility[] = [
  {
    title: 'Intensive Care Unit (ICU)',
    description:
      'A fully equipped ICU with advanced monitoring and life-support systems, staffed round the clock by trained critical care specialists.',
    image: '/images/facility-icu.png',
    points: ['24x7 patient monitoring', 'Advanced ventilators', 'Dedicated critical care team'],
  },
  {
    title: 'Operation Theatre',
    description:
      'Modern, sterile operation theatres designed for a wide range of surgeries with the highest safety standards.',
    image: '/images/facility-ot.png',
    points: ['Laminar-flow environment', 'Modern surgical equipment', 'Experienced surgical staff'],
  },
  {
    title: 'Laboratory & Diagnostics',
    description:
      'In-house laboratory and digital X-ray for accurate diagnosis, with most reports available the next day.',
    image: '/images/facility-lab.png',
    points: ['Pathology & biochemistry', 'Digital X-ray', 'Fast, reliable reports'],
  },
  {
    title: '24x7 Ambulance & Emergency',
    description:
      'Stand-by ambulances and a 24x7 emergency department prepared to treat a high volume of trauma patients.',
    image: '/images/facility-ambulance.png',
    points: ['Rapid response', 'Trained paramedics', 'Round-the-clock availability'],
  },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 50000, suffix: '+', label: 'Patients Served' },
  { value: 20, suffix: '+', label: 'Expert Doctors' },
  { value: 24, suffix: '/7', label: 'Emergency & ICU' },
]

export const WHY_CHOOSE = [
  {
    icon: 'ShieldCheck',
    title: 'Complete Care',
    description: 'Equipped for all stages of care, from prevention to rehabilitation.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Quality Assured',
    description: 'A quality assessment program ensures smooth, effective operation.',
  },
  {
    icon: 'Clock',
    title: 'Always Ready',
    description: 'Prepared to treat a high volume of trauma patients 24/7.',
  },
  {
    icon: 'Users',
    title: 'World-Class Doctors',
    description: 'Skilled specialists working together for seamless, personalized care.',
  },
  {
    icon: 'HandHeart',
    title: 'Accessible Healthcare',
    description: 'Healthy does not mean expensive — quality care at affordable rates.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Personalized Care',
    description: 'Every patient is treated with respect, heard and supported throughout.',
  },
]

export const PATIENT_JOURNEY = [
  { step: 1, title: 'Book Appointment', description: 'Reserve your slot online or by phone in minutes.', icon: 'CalendarCheck' },
  { step: 2, title: 'Visit Hospital', description: 'Arrive to a warm welcome and smooth check-in.', icon: 'Building2' },
  { step: 3, title: 'Diagnosis', description: 'Accurate assessment with in-house diagnostics.', icon: 'Microscope' },
  { step: 4, title: 'Treatment', description: 'Personalized treatment by expert specialists.', icon: 'Stethoscope' },
  { step: 5, title: 'Recovery', description: 'Attentive follow-up care for a full recovery.', icon: 'HeartPulse' },
]

export type Testimonial = {
  name: string
  role: string
  rating: number
  quote: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ankush Gupta',
    role: 'Patient',
    rating: 5,
    quote:
      'Excellent hospital with affordable rates. Great doctors, specialist Dr Ashish and Dr Surbhi Gupta, who cater to every patient in a calm and polite manner. They give proper attention to everyone and never hurry.',
  },
  {
    name: 'Manish Shukla',
    role: 'Patient',
    rating: 5,
    quote:
      'Service was outstanding. My relative was checked in for angiography and we learned there was a nerve blockage. Angioplasty was done the same day, kept for observation and released the next day. Outstanding service.',
  },
  {
    name: 'Ayan Choudhary',
    role: 'Patient',
    rating: 5,
    quote:
      'Best hospital in the area. I consulted with Dr Ashish and I am very satisfied. A nice hospital with polite staff and a great doctors team. Highly recommend.',
  },
  {
    name: 'Nishu Thakur',
    role: 'Patient',
    rating: 5,
    quote:
      'Excellent hospital with affordable rates. Great doctors, especially Dr Ashish and Dr Surbhi Gupta, who treat every patient calmly and give proper attention to everyone.',
  },
]

export type Faq = { question: string; answer: string }

export const FAQS: Faq[] = [
  {
    question: 'How long will I need to stay in the hospital?',
    answer:
      'The duration of stay depends on the nature and severity of the illness or injury. Your doctor will provide an estimate based on your condition and progress.',
  },
  {
    question: 'What is my diagnosis and what does it mean?',
    answer:
      'Our doctors communicate the nature and severity of your condition, the prognosis, possible complications and available treatment options so you fully understand your care.',
  },
  {
    question: 'How do I get my blood pressure checked?',
    answer:
      'Your primary care physician or any medical professional can check your blood pressure during a routine checkup at our OPD.',
  },
  {
    question: 'Will you bill my insurance?',
    answer:
      'It is best to contact your insurance provider directly or speak with our billing department about the services you received.',
  },
  {
    question: 'Can I call a doctor for a private consultation?',
    answer:
      'Yes. Private consultations are available for non-emergency medical issues and are a convenient option if you cannot visit in person.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: 'Yes, you can book or rebook your consultation from our website or by calling us directly.',
  },
  {
    question: 'How long does a general check-up take?',
    answer: 'A general check-up usually takes one day, and the report is available the next day.',
  },
  {
    question: 'Can I pay with a credit card?',
    answer: 'Yes, you can pay through credit card as well as other common payment methods.',
  },
]

export const GALLERY = [
  { src: '/images/hero-hospital.png', alt: 'Hospital building exterior', category: 'Building' },
  { src: '/images/gallery-reception.png', alt: 'Reception and lobby', category: 'Interior' },
  { src: '/images/gallery-room.png', alt: 'Private patient room', category: 'Rooms' },
  { src: '/images/facility-icu.png', alt: 'Intensive care unit', category: 'ICU' },
  { src: '/images/facility-ot.png', alt: 'Operation theatre', category: 'Surgery' },
  { src: '/images/facility-lab.png', alt: 'Diagnostic laboratory', category: 'Diagnostics' },
  { src: '/images/gallery-pharmacy.png', alt: 'In-house pharmacy', category: 'Pharmacy' },
  { src: '/images/gallery-xray.png', alt: 'Digital X-ray and imaging', category: 'Diagnostics' },
  { src: '/images/facility-ambulance.png', alt: 'Ambulance service', category: 'Emergency' },
]
