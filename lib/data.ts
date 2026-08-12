
export const HOSPITAL = {
  name: 'Signature Heart & Multispeciality Hospital',
  shortName: 'Signature Hospital',
  tagline: 'Health Equality, Always',
  phone: '76783 87693',
  phoneHref: 'tel:+917678387693',
  whatsapp: '917678387693',
  email: 'info@shmsd.in',
  address: 'C-2/41 A, Main Service Ln, Block C, Yamuna Vihar, Delhi 110053',
  mapQuery: 'Signature Heart & Multi-speciality Hospital, C-2/41 A, Main Service Ln, Block C, Yamuna Vihar, Delhi 110053',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5859770812967!2d77.2774668!3d28.702029099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfddcdb2b6413%3A0x555cc0a55521c7b7!2sSignature%20Heart%20%26%20Multi-speciality%20hospital!5e0!3m2!1sen!2sin!4v1786362195880!5m2!1sen!2sin',
  hours: 'Open 24 hours',
  emergencyNumber: '76783 87693',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Specialities', href: '/services' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'TPA', href: '/empanelled-tpa' },
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
  qualification: string
  department: string
  description: string
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Umesh Gupta",
    qualification: "MBBS, MS (MAMC Delhi)",
    department: "Internal Medicine",
    description:
      "Dr. Umesh Gupta is a highly experienced Diabetologist and Infectious Disease Specialist with over 35 years of expertise. He is committed to providing comprehensive, effective, and patient-focused medical care.",
  },
  {
    name: "Dr. Deepak Chauhan",
    qualification: "MBBS, MS",
    department: "General Surgery",
    description:
      "Dr. Deepak Chauhan is an experienced General Surgeon specializing in hernia, hydrocele, cholecystectomy, hemorrhoids, and a wide range of surgical procedures.",
  },
  {
    name: "Dr. Gulvir Singh",
    qualification: "MBBS, MD",
    department: "Pulmonologist",
    description:
      "Dr. Gulvir Singh specializes in chest and respiratory diseases including tuberculosis (TB), pneumonia, bronchiectasis, and other pulmonary disorders.",
  },
  {
    name: "Dr. Surbhi Gupta",
    qualification: "MBBS, MS",
    department: "Obstetrics & Gynaecology",
    description:
      "Dr. Surbhi Gupta provides compassionate care for pregnancy and women's health, with expertise in gynecological disorders, antenatal care, infertility evaluation, and high-risk pregnancies.",
  },
]

export type Service = {
  slug: string
  icon: string
  title: string
  description: string
  image: string
  overview: string
  highlights: string[]
  steps: { title: string; description: string }[]
  benefits: string[]
  faqs: { question: string; answer: string }[]
}




export interface Service {
  slug: string;
  icon: string; // now holds a string path like '/images/imgi_6_general_physician.png'
  title: string;
  description: string;
  image: string;
  overview: string;
  highlights: string[];
  steps: { title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'general-medicine',
    icon: '/images/imgi_6_general_physician.png',
    title: 'General Medicine',
    description: 'Primary healthcare services and first-line medical evaluation for everyday health concerns.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/069/871/287/small_2x/bright-red-capsules-scattered-on-reflective-surface-in-a-close-up-composition-showcasing-texture-and-details-photo.jpeg',
    overview:
      'Our general medicine team offers first-contact medical care, careful diagnosis and treatment planning for common illnesses, recurring symptoms and preventive health concerns.',
    highlights: ['Initial consultation', 'Preventive care', 'Medication guidance', 'Follow-up support'],
    steps: [
      { title: 'Consultation', description: 'A doctor reviews your symptoms, medical history and current concerns.' },
      { title: 'Assessment', description: 'Basic tests or referrals may be recommended for clearer diagnosis.' },
      { title: 'Treatment', description: 'Medication, lifestyle advice and next-step care are planned together.' },
      { title: 'Follow-up', description: 'We track progress and adjust treatment as needed.' },
    ],
    benefits: [
      'Early evaluation for everyday health issues',
      'Careful guidance for lifestyle and medication',
      'Seamless referrals to the right specialist',
      'Patient-first follow-up support',
    ],
    faqs: [
      {
        question: 'When should I visit general medicine?',
        answer: 'When you need an initial assessment for fever, infection, weakness, pain or unexplained symptoms.',
      },
      {
        question: 'Do I need a referral?',
        answer: 'No referral is usually needed. You can book directly for a general medicine consultation.',
      },
    ],
  },
  {
    slug: 'general-surgery',
    icon: '/images/imgi_5_general_surgery.png',
    title: 'General Surgery',
    description: 'Safe, modern surgical care for a wide range of general procedures.',
    image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/03/Heart-Surgery-Aortic-Valve-Replacemen-thumbnail.jpg',
    overview:
      'Our surgical team provides planned and emergency procedures with a focus on safety, precision and smooth recovery.',
    highlights: ['Pre-op assessment', 'Procedure planning', 'Sterile OT', 'Recovery monitoring'],
    steps: [
      { title: 'Pre-operative review', description: 'We assess fitness, risks and treatment goals before surgery.' },
      { title: 'Procedure planning', description: 'The surgical approach and admission plan are finalized.' },
      { title: 'Operation', description: 'Modern operation theatres and expert staff support the procedure.' },
      { title: 'Recovery', description: 'Post-op monitoring and follow-up care help you heal safely.' },
    ],
    benefits: [
      'Modern sterile operation theatres',
      'Experienced surgical staff',
      'Personalized pre- and post-operative care',
      'Safe recovery-focused treatment',
    ],
    faqs: [
      {
        question: 'How do I prepare for surgery?',
        answer: 'Your doctor will guide you on fasting, medicines, tests and admission timing before the procedure.',
      },
      {
        question: 'Will I need to stay overnight?',
        answer: 'It depends on the surgery and your recovery progress. Some procedures may need observation or admission.',
      },
    ],
  },
  /*
  {
    slug: 'cardiology',
    icon: '/images/imgi_10_cardiology.png',
    title: 'Cardiology',
    description: 'Comprehensive care for patients with heart-related problems.',
    image: 'https://media.istockphoto.com/id/2142793215/photo/cardiovascular-disease-cvd-doctor-with-heart-human-model-anatomy-for-treatment-patient-in.jpg?s=612x612&w=0&k=20&c=Ne1jDPdIO3IDuJOZDECEL7Tn-JzcSYV6O7QNdqUefpo=',
    overview:
      'Cardiology care covers prevention, diagnosis and treatment for chest pain, heart rhythm concerns, blood pressure issues and long-term cardiac health.',
    highlights: ['ECG support', 'Angiography guidance', 'BP management', 'Cardiac follow-up'],
    steps: [
      { title: 'Cardiac consultation', description: 'We begin with a detailed review of symptoms and risk factors.' },
      { title: 'Diagnostic testing', description: 'ECG, imaging or lab work may be used to confirm the condition.' },
      { title: 'Treatment plan', description: 'Medication or intervention options are explained clearly.' },
      { title: 'Heart health follow-up', description: 'We support ongoing monitoring and prevention.' },
    ],
    benefits: [
      'Specialist-led heart care',
      'Preventive and intervention support',
      'Careful monitoring and follow-up',
      'Clear guidance for patients and families',
    ],
    faqs: [
      {
        question: 'Should I consult cardiology for chest discomfort?',
        answer: 'Yes, chest discomfort, breathlessness or palpitations should be evaluated promptly by a cardiologist.',
      },
      {
        question: 'Can cardiology help with high blood pressure?',
        answer: 'Yes, cardiology can help assess, manage and monitor blood pressure and its effects on the heart.',
      },
    ],
  },
  */
  {
    slug: 'gynecology-obstetrics',
    icon: '/images/imgi_8_gynaecologist.png',
    title: 'Gynecology & Obstetrics',
    description: "Complete care for women's health, maternity and newborn support.",
    image: 'https://media.istockphoto.com/id/1169198910/photo/womans-palms-pressed-together-and-keep-embryo-from-paper-red-lood-comes-from-the-baby-and.jpg?s=612x612&w=0&k=20&c=VfotXiqQQFkmyBrN2f7zZ3nmkgsvlNDl6868Z_lrkA8=',
    overview:
      'Women’s health care includes preventive check-ups, pregnancy care, delivery support and treatment for common gynecological concerns.',
    highlights: ['Prenatal care', 'Delivery support', 'Women’s health', 'Newborn guidance'],
    steps: [
      { title: 'Initial review', description: 'We discuss symptoms, goals and any pregnancy-related concerns.' },
      { title: 'Care planning', description: 'A personalized plan is created for health, pregnancy or delivery.' },
      { title: 'Monitoring', description: 'Regular check-ups and tests support safe ongoing care.' },
      { title: 'Post-care support', description: 'We continue guidance through recovery and follow-up.' },
    ],
    benefits: [
      'Compassionate women’s health support',
      'Pregnancy and maternity care',
      'Family-centered counselling',
      'Private and respectful consultations',
    ],
    faqs: [
      {
        question: 'Can I book maternity care directly?',
        answer: 'Yes, you can book a consultation directly for pregnancy and maternity support.',
      },
      {
        question: 'Do you provide follow-up after delivery?',
        answer: 'Yes, follow-up care is available for recovery, newborn support and ongoing women’s health needs.',
      },
    ],
  },
  {
    slug: 'pulmonology',
    icon: '/images/imgi_15_internal_medicine.png', // fallback
    title: 'Pulmonology',
    description: 'Evaluation, diagnosis and treatment of respiratory diseases.',
    image: 'https://www.shutterstock.com/shutterstock/videos/4027366653/thumb/1.jpg?ip=x480',
    overview:
      'Pulmonology services focus on respiratory health, including cough, asthma, breathlessness, chronic lung conditions and recovery support.',
    highlights: ['Asthma care', 'Breathing tests', 'Lung evaluation', 'Follow-up treatment'],
    steps: [
      { title: 'Respiratory review', description: 'We review symptoms such as cough, wheezing and shortness of breath.' },
      { title: 'Testing', description: 'Lung function tests or imaging may be recommended.' },
      { title: 'Treatment', description: 'Medication and breathing support plans are tailored to your condition.' },
      { title: 'Monitoring', description: 'We monitor progress and adjust care where needed.' },
    ],
    benefits: ['Focused respiratory diagnosis', 'Ongoing breathing support', 'Experienced specialist care', 'Preventive guidance'],
    faqs: [
      {
        question: 'When should I see a pulmonologist?',
        answer: 'If you have ongoing cough, wheezing, shortness of breath or recurring chest congestion.',
      },
      {
        question: 'Can pulmonology help with asthma?',
        answer: 'Yes, pulmonology provides diagnosis, control strategies and follow-up for asthma and related conditions.',
      },
    ],
  },
  {
    slug: 'orthopedics',
    icon: '/images/imgi_20_ortho.png',
    title: 'Orthopedics',
    description: 'Treatment for fractures, deformities, sports injuries and joint pain.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZzKurmAQShwiXUtK-ZG-D3k5eSmUzMUERFqyNwkjygHg0azMx9DeIHY&s=10',
    overview:
      'Orthopedic care covers bones, joints, ligaments, sports injuries and mobility-related pain with a recovery-first approach.',
    highlights: ['Fracture care', 'Joint pain', 'Sports injury', 'Mobility support'],
    steps: [
      { title: 'Orthopedic exam', description: 'We assess pain, movement, swelling and injury history.' },
      { title: 'Imaging review', description: 'X-rays or other scans help confirm the diagnosis.' },
      { title: 'Treatment plan', description: 'From medicine to surgery, we choose the right path together.' },
      { title: 'Rehabilitation', description: 'Recovery and mobility support continue after treatment.' },
    ],
    benefits: ['Bone and joint expertise', 'Sports injury care', 'Rehabilitation support', 'Surgical and non-surgical options'],
    faqs: [
      {
        question: 'Can you treat fractures and sprains?',
        answer: 'Yes, we manage fractures, sprains and joint injuries with the right clinical and imaging support.',
      },
      {
        question: 'Do you help with chronic joint pain?',
        answer: 'Yes, chronic pain and mobility problems can be evaluated and treated by orthopedics.',
      },
    ],
  },
  /*
  {
    slug: 'urology',
    icon: '/images/imgi_19_urology.png',
    title: 'Urology',
    description: 'Comprehensive care for urinary tract and kidney-related concerns.',
    image: 'https://media.istockphoto.com/id/985517296/video/human-urinary-system-kidneys-with-urinary-bladder-anatomy.jpg?s=640x640&k=20&c=OrGFykSirDxZcrSZsFqByP3nymKXNABLy1yPj88gxuE=',
    overview:
      'Urology services include evaluation and treatment for urinary, kidney and male reproductive health concerns.',
    highlights: ['Urinary symptoms', 'Kidney care', 'Stone treatment', 'Male health'],
    steps: [
      { title: 'Evaluation', description: 'We review symptoms and health history to identify the issue.' },
      { title: 'Diagnostics', description: 'Tests and imaging help determine the cause and severity.' },
      { title: 'Treatment', description: 'Medication or procedures are chosen based on your condition.' },
      { title: 'Follow-up', description: 'Ongoing checks ensure recovery and symptom control.' },
    ],
    benefits: ['Specialist urinary care', 'Kidney and stone support', 'Clear testing pathways', 'Confidential consultations'],
    faqs: [
      {
        question: 'Should I visit urology for burning urination?',
        answer: 'Yes, burning, frequency or pain while urinating should be assessed by a urologist.',
      },
      {
        question: 'Do you treat kidney stones?',
        answer: 'Yes, kidney stones and urinary tract concerns can be evaluated and managed in urology.',
      },
    ],
  },
  */
  /*
  {
    slug: 'infertility-ivf',
    icon: '/images/imgi_8_gynaecologist.png', // reused
    title: 'Infertility & IVF',
    description: 'Advanced fertility care and reproductive treatment support.',
    image: 'https://www.vrikshfertility.com/assets/blog/3d-rendering-ovum-with-needle-artificial-insemination-vitro-fertilization.jpg',
    overview:
      'Fertility care supports couples with evaluation, counselling and treatment options tailored to their goals and medical history.',
    highlights: ['Fertility assessment', 'Treatment planning', 'Couples counselling', 'Follow-up support'],
    steps: [
      { title: 'Initial evaluation', description: 'We review medical history, tests and fertility concerns.' },
      { title: 'Treatment planning', description: 'Options are explained clearly and respectfully.' },
      { title: 'Procedure support', description: 'Selected treatments are carried out with careful monitoring.' },
      { title: 'Continued care', description: 'We provide follow-up and emotional support through the journey.' },
    ],
    benefits: ['Comprehensive fertility work-up', 'Personalized treatment options', 'Supportive counselling', 'Respectful care'],
    faqs: [
      {
        question: 'When should we consult fertility care?',
        answer: 'If pregnancy has not occurred after a period of trying, a fertility consultation can help.',
      },
      {
        question: 'Is counselling part of the process?',
        answer: 'Yes, counseling and clear guidance are part of our fertility support approach.',
      },
    ],
  },
  */
  {
    slug: 'ent',
    icon: '/images/imgi_9_ent.png',
    title: 'ENT',
    description: 'Care for ear, nose, sinus, head and neck conditions.',
    image: 'https://media.istockphoto.com/id/1325611798/photo/hearing-exam-for-elderly-citizen-people-otolaryngologist-doctor-checking-mature-womans-ear.jpg?s=612x612&w=0&k=20&c=pQ5IyYl64kwTCnsBp55cpPAe4fNXPve7avagagTs73A=',
    overview:
      'ENT care supports ear, nose and throat concerns such as sinus problems, hearing issues, infections and voice or swallowing symptoms.',
    highlights: ['Sinus care', 'Ear infections', 'Hearing checks', 'Throat evaluation'],
    steps: [
      { title: 'ENT consultation', description: 'We review your symptoms and any recurring infections or pain.' },
      { title: 'Examination', description: 'Ear, nose and throat assessment helps locate the issue.' },
      { title: 'Treatment', description: 'Medication or procedures are recommended where needed.' },
      { title: 'Recovery', description: 'We monitor improvement and plan follow-up care.' },
    ],
    benefits: ['Expert ENT evaluation', 'Fast diagnosis', 'Treatment for common and complex issues', 'Follow-up guidance'],
    faqs: [
      {
        question: 'Should I visit ENT for recurring sinus issues?',
        answer: 'Yes, recurring sinus symptoms and headaches should be evaluated by an ENT specialist.',
      },
      {
        question: 'Can ENT help with ear pain or hearing issues?',
        answer: 'Yes, ENT can assess ear pain, hearing issues and related concerns.',
      },
    ],
  },
  {
    slug: 'gastroenterology',
    icon: '/images/imgi_21_gastroenterology.png',
    title: 'Gastroenterology',
    description: 'Diagnosis and treatment for stomach, liver and digestive disorders.',
    image: 'https://www.peerlesshospital.com/barasat/images/blog_image/why_you_might_need_gastro.webp',
    overview:
      'Gastroenterology services focus on digestive health including stomach pain, acidity, liver issues and long-term gut concerns.',
    highlights: ['Digestive evaluation', 'Liver care', 'Acidity treatment', 'Follow-up support'],
    steps: [
      { title: 'Consultation', description: 'We review digestive symptoms, triggers and medical history.' },
      { title: 'Testing', description: 'When needed, tests help identify stomach or liver issues.' },
      { title: 'Treatment', description: 'Medication and lifestyle guidance are aligned to your diagnosis.' },
      { title: 'Monitoring', description: 'We check response and adjust care as needed.' },
    ],
    benefits: ['Care for digestive problems', 'Clear test-based diagnosis', 'Diet and lifestyle guidance', 'Long-term management support'],
    faqs: [
      {
        question: 'Can I visit for acidity and stomach pain?',
        answer: 'Yes, ongoing acidity, bloating or stomach pain should be evaluated by gastroenterology.',
      },
      {
        question: 'Do you manage liver-related concerns?',
        answer: 'Yes, liver and digestive health concerns can be assessed and managed here.',
      },
    ],
  },
  {
    slug: 'psychiatry',
    icon: '/images/imgi_14_psychiatry.png',
    title: 'Psychiatry',
    description: 'Compassionate mental health care for emotional and behavioural wellbeing.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/074/896/285/small/a-red-paper-head-with-a-stethoscope-on-it-photo.jpg',
    overview:
      'Psychiatry care offers respectful support for emotional wellbeing, anxiety, mood concerns, sleep problems and behavioural health.',
    highlights: ['Mental health support', 'Counselling', 'Medication review', 'Ongoing care'],
    steps: [
      { title: 'Confidential consultation', description: 'We listen carefully to your concerns in a private setting.' },
      { title: 'Assessment', description: 'Your symptoms and wellbeing are reviewed in detail.' },
      { title: 'Treatment plan', description: 'Therapy, medicine or both may be recommended.' },
      { title: 'Follow-up', description: 'We monitor progress and adjust support over time.' },
    ],
    benefits: ['Private and confidential care', 'Compassionate specialist support', 'Ongoing monitoring', 'Respectful conversations'],
    faqs: [
      {
        question: 'Is psychiatric consultation confidential?',
        answer: 'Yes, consultations are handled privately and with care.',
      },
      {
        question: 'Can psychiatry help with sleep issues?',
        answer: 'Yes, sleep concerns and related emotional issues can be assessed and treated.',
      },
    ],
  },
  /*
  {
    slug: 'neurosurgery',
    icon: '/images/imgi_7_neurosurgery.png',
    title: 'Neurosurgery',
    description: 'Personalized surgical care for brain and nervous system conditions.',
    image: 'https://media.istockphoto.com/id/1015934084/photo/surgeons-perform-brain-surgery-using-augmented-reality-animated-3d-brain-high-tech.jpg?s=612x612&w=0&k=20&c=vHy7Ry06pahQNYCXFi09jaVIAtle_gHoDPQS6A1Yajo=',
    overview:
      'Neurosurgery covers the brain, spine and nerves, with a focus on accurate diagnosis, advanced planning and safe surgical care.',
    highlights: ['Brain and spine care', 'Surgical planning', 'Nerve evaluation', 'Recovery support'],
    steps: [
      { title: 'Neurosurgical review', description: 'Symptoms and scan results are reviewed carefully.' },
      { title: 'Planning', description: 'We explain options and choose the safest approach.' },
      { title: 'Surgery', description: 'Advanced operating support is provided by the clinical team.' },
      { title: 'Rehabilitation', description: 'Recovery follow-up and support continue after surgery.' },
    ],
    benefits: ['Expert neurological surgery', 'Careful pre-op planning', 'Advanced procedure support', 'Rehabilitation guidance'],
    faqs: [
      {
        question: 'When should I see neurosurgery?',
        answer: 'For persistent nerve, spine or brain-related concerns that may need surgical evaluation.',
      },
      {
        question: 'Do you coordinate with neurology?',
        answer: 'Yes, neurology and neurosurgery can work together depending on the case.',
      },
    ],
  },
  */
  {
    slug: 'pediatrics',
    icon: '/images/imgi_12_paediatrician_2.png',
    title: 'Pediatrics',
    description: 'Dedicated healthcare for infants, children and adolescents.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDg3CSEwIqk9IOOu3-jYBFfKcjSh2pNPI9IsV6YOoVcGHv088QXYAVlQH&s=10',
    overview:
      'Pediatric care focuses on child health, growth, vaccination and treatment for everyday childhood illnesses.',
    highlights: ['Child health', 'Vaccination', 'Growth checks', 'Illness treatment'],
    steps: [
      { title: 'Child consultation', description: 'We review symptoms, growth and wellness concerns.' },
      { title: 'Examination', description: 'A child-friendly assessment helps identify the issue.' },
      { title: 'Treatment', description: 'Appropriate treatment and advice are given to families.' },
      { title: 'Follow-up', description: 'We monitor growth, recovery and vaccination schedules.' },
    ],
    benefits: ['Friendly child-focused care', 'Growth and development checks', 'Vaccination support', 'Family guidance'],
    faqs: [
      {
        question: 'Can I bring my child for fever or cough?',
        answer: 'Yes, pediatric consultation is appropriate for common childhood illnesses and symptoms.',
      },
      {
        question: 'Do you provide vaccination guidance?',
        answer: 'Yes, vaccination and routine child health support are part of pediatrics.',
      },
    ],
  },
  {
    slug: 'plastic-surgery',
    icon: '/images/imgi_4_plastic_surgery.png',
    title: 'Plastic Surgery',
    description: 'Reconstructive and aesthetic procedures delivered with care and precision.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/034/875/777/small/the-cosmetologist-makes-markings-on-the-patient-s-face-drawing-correction-lines-before-the-facial-contouring-procedure-or-plastic-surgery-preparation-time-for-cosmetic-treatment-video.jpg',
    overview:
      'Plastic surgery combines reconstructive and aesthetic procedures with a focus on safety, planning and natural-looking outcomes.',
    highlights: ['Reconstruction', 'Aesthetic procedures', 'Consultation', 'Recovery care'],
    steps: [
      { title: 'Consultation', description: 'We discuss goals, concerns and safe treatment options.' },
      { title: 'Planning', description: 'Procedure details and expected recovery are reviewed.' },
      { title: 'Procedure', description: 'The selected treatment is performed with precision and care.' },
      { title: 'Follow-up', description: 'We monitor healing and support the recovery process.' },
    ],
    benefits: ['Detailed consultation', 'Natural-looking planning', 'Safe procedure support', 'Recovery monitoring'],
    faqs: [
      {
        question: 'Is plastic surgery only cosmetic?',
        answer: 'No, it also includes reconstructive procedures and medical corrections.',
      },
      {
        question: 'Can I discuss non-surgical options first?',
        answer: 'Yes, your consultation can cover all suitable treatment options.',
      },
    ],
  },
  {
    slug: 'radiology',
    icon: '/images/imgi_3_generic_speciality.png', // fallback
    title: 'Radiology',
    description: 'Accurate and timely imaging for confident diagnosis and treatment planning.',
    image: 'https://media.istockphoto.com/id/2160720006/photo/medical-hospital-research-laboratory-caucasian-male-neurosurgeon-looking-at-tv-screen-with.jpg?s=612x612&w=0&k=20&c=KtLx7GkbI6Tw-FoS1YAnikEo9sQjrf-dm9zi5kaqebw=',
    overview:
      'Radiology provides imaging support for diagnosis, treatment planning and follow-up across many specialties.',
    highlights: ['X-ray imaging', 'Diagnostic support', 'Treatment planning', 'Report review'],
    steps: [
      { title: 'Request', description: 'Your doctor recommends the right imaging test for the concern.' },
      { title: 'Imaging', description: 'The scan is completed with care and clear instructions.' },
      { title: 'Report', description: 'Findings are reviewed to support diagnosis and treatment.' },
      { title: 'Next steps', description: 'Results are shared with your doctor for follow-up care.' },
    ],
    benefits: ['Timely imaging support', 'Clear diagnostic guidance', 'Multispeciality collaboration', 'Reliable reports'],
    faqs: [
      {
        question: 'Do I need a referral for imaging?',
        answer: 'Usually your treating doctor will recommend the most appropriate imaging test.',
      },
      {
        question: 'Can radiology help with treatment planning?',
        answer: 'Yes, imaging plays an important role in diagnosis and planning care.',
      },
    ],
  },
  {
    slug: 'neurology',
    icon: '/images/imgi_16_neurology.png',
    title: 'Neurology',
    description: 'Expert diagnosis and management of brain, spine and nerve conditions.',
    image: 'https://media.istockphoto.com/id/1315727841/photo/artificial-intelligence-digital-concept.jpg?s=612x612&w=0&k=20&c=-N-g9PUcCBg1lGtA3PI7fRjEKhYLZSXvUgJy3CxKFC4=',
    overview:
      'Neurology care focuses on disorders of the brain, spine and nerves, including headaches, stroke, numbness and movement issues.',
    highlights: ['Brain health', 'Stroke care', 'Nerve evaluation', 'Ongoing monitoring'],
    steps: [
      { title: 'Neurology consult', description: 'We review your symptoms and neurological history.' },
      { title: 'Assessment', description: 'Testing and examination help locate the cause of symptoms.' },
      { title: 'Treatment plan', description: 'Medication and follow-up care are tailored to your condition.' },
      { title: 'Monitoring', description: 'We follow progress and update care as needed.' },
    ],
    benefits: ['Specialist-led nerve and brain care', 'Stroke and headache evaluation', 'Treatment planning', 'Long-term follow-up'],
    faqs: [
      {
        question: 'Should I see neurology for frequent headaches?',
        answer: 'Yes, recurring headaches or neurological symptoms should be evaluated.',
      },
      {
        question: 'Can neurology help after stroke?',
        answer: 'Yes, neurology supports stroke evaluation, management and follow-up.',
      },
    ],
  },
  {
    slug: 'dermatology',
    icon: '/images/imgi_2_dermatologist.png',
    title: 'Dermatology',
    description: 'Comprehensive skin care and treatment for common and complex conditions.',
    image: 'https://media.istockphoto.com/id/2185292067/photo/esthetic-center-led-facial-mask.jpg?s=612x612&w=0&k=20&c=vDaLZ33wVsvGyS79uiw9sSIAyd-9WIZ4Mb9s_NiU2w0=',
    overview:
      'Dermatology covers skin, hair and nail concerns with diagnosis and treatment for common and complex conditions.',
    highlights: ['Skin care', 'Hair concerns', 'Allergy support', 'Procedure guidance'],
    steps: [
      { title: 'Skin review', description: 'We examine the concern and review any triggers or history.' },
      { title: 'Diagnosis', description: 'Testing may be used to confirm the skin condition.' },
      { title: 'Treatment', description: 'Medical or procedural options are chosen based on need.' },
      { title: 'Follow-up', description: 'We review results and adjust care if needed.' },
    ],
    benefits: ['Skin, hair and nail care', 'Treatment for simple and complex cases', 'Patient education', 'Follow-up support'],
    faqs: [
      {
        question: 'Can dermatology help with acne or rashes?',
        answer: 'Yes, acne, rashes and many other skin concerns can be evaluated and treated.',
      },
      {
        question: 'Do you treat hair fall concerns?',
        answer: 'Yes, hair and scalp concerns are part of dermatology care.',
      },
    ],
  },
  {
    slug: 'nephrology',
    icon: '/images/imgi_18_nephrology.png',
    title: 'Nephrology',
    description: 'Comprehensive kidney care and treatment planning for renal conditions.',
    image: 'https://media.istockphoto.com/id/1777620173/photo/kidney-disease-chronic-kidney-disease-ckd-doctor-with-human-model-to-study-and-treat-in.jpg?s=612x612&w=0&k=20&c=r2zEn718PnH9TQbnG3s6wL61hQtUzQ0WPbM_wLTIA7w=',
    overview:
      'Nephrology focuses on kidney health, renal function, blood pressure and chronic kidney disease management.',
    highlights: ['Kidney health', 'Renal monitoring', 'BP support', 'Long-term care'],
    steps: [
      { title: 'Evaluation', description: 'Kidney symptoms and lab results are reviewed carefully.' },
      { title: 'Diagnosis', description: 'Testing helps determine kidney function and the cause of symptoms.' },
      { title: 'Treatment', description: 'Care plans are customized for the kidney condition.' },
      { title: 'Follow-up', description: 'We monitor kidney health over time and update the plan.' },
    ],
    benefits: ['Kidney-focused diagnosis', 'Chronic disease management', 'Blood pressure support', 'Long-term follow-up'],
    faqs: [
      {
        question: 'When should I see nephrology?',
        answer: 'If you have kidney concerns, abnormal reports or long-term blood pressure issues.',
      },
      {
        question: 'Can nephrology manage chronic kidney disease?',
        answer: 'Yes, chronic kidney disease and related concerns are part of nephrology care.',
      },
    ],
  },
  {
    slug: 'physiotherapy',
    icon: '/images/imgi_13_physiotherapist.png',
    title: 'Physiotherapy',
    description: 'Personalized rehabilitation care to improve movement and recovery.',
    image: 'https://img.magnific.com/free-photo/young-woman-doctors-appointment-with-rehabilitologist_169016-40103.jpg?semt=ais_test_b&w=740&q=80',
    overview:
      'Physiotherapy helps improve movement, strength and recovery after injury, surgery or long-term pain.',
    highlights: ['Recovery support', 'Movement therapy', 'Pain management', 'Exercise plans'],
    steps: [
      { title: 'Assessment', description: 'We evaluate movement, pain and daily activity limitations.' },
      { title: 'Plan creation', description: 'A therapy plan is tailored to your recovery goals.' },
      { title: 'Therapy sessions', description: 'Exercises and manual support are used to improve function.' },
      { title: 'Progress review', description: 'We track improvements and adjust the plan.' },
    ],
    benefits: ['Recovery and mobility support', 'Personalized exercise plans', 'Pain reduction strategies', 'Ongoing progress monitoring'],
    faqs: [
      {
        question: 'Can physiotherapy help after surgery?',
        answer: 'Yes, physiotherapy is often used to support safe recovery after surgery.',
      },
      {
        question: 'Is physiotherapy useful for back pain?',
        answer: 'Yes, physiotherapy can help with pain relief, strengthening and movement improvement.',
      },
    ],
  },
];

export const SERVICE_LINKS = SERVICES.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
  slug: service.slug,
}))

export const SPECIALITY_LINKS = SERVICE_LINKS

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
  { src: '/images/gallery_img (28).jpg', alt: 'Gallery photo 28' },
  { src: '/images/gallery_img (29).jpg', alt: 'Gallery photo 29' },
  { src: '/images/gallery_img (30).jpg', alt: 'Gallery photo 30' },
  { src: '/images/gallery_img (32).jpg', alt: 'Gallery photo 32' },
  { src: '/images/gallery_img (34).jpg', alt: 'Gallery photo 34' },
  { src: '/images/gallery_img (35).jpg', alt: 'Gallery photo 35' },
  { src: '/images/gallery_img (36).jpg', alt: 'Gallery photo 36' },
  { src: '/images/gallery_img (37).jpg', alt: 'Gallery photo 37' },
  { src: '/images/gallery_img (38).jpg', alt: 'Gallery photo 38' },
  { src: '/images/gallery_img (39).jpg', alt: 'Gallery photo 39' },
  { src: '/images/gallery_img (40).jpg', alt: 'Gallery photo 40' },
  { src: '/images/gallery_img (41).jpg', alt: 'Gallery photo 41' },
  { src: '/images/gallery_img (42).jpg', alt: 'Gallery photo 42' },
  { src: '/images/gallery_img (44).jpg', alt: 'Gallery photo 44' },
  { src: '/images/gallery_img (45).jpg', alt: 'Gallery photo 45' },
  { src: '/images/gallery_img (46).jpg', alt: 'Gallery photo 46' },
  { src: '/images/gallery_img (47).jpg', alt: 'Gallery photo 47' },
  { src: '/images/gallery_img (49).jpg', alt: 'Gallery photo 49' },
  { src: '/images/gallery_img (50).jpg', alt: 'Gallery photo 50' },
  { src: '/images/gallery_img (56).jpg', alt: 'Gallery photo 56' },
  { src: '/images/gallery_img (57).jpg', alt: 'Gallery photo 57' },
  { src: '/images/gallery_img (58).jpg', alt: 'Gallery photo 58' },
  { src: '/images/gallery_img (59).jpg', alt: 'Gallery photo 59' },
  { src: '/images/gallery_img (60).jpg', alt: 'Gallery photo 60' },
  { src: '/images/gallery_img (61).jpg', alt: 'Gallery photo 61' },
  { src: '/images/gallery_img (62).jpg', alt: 'Gallery photo 62' },
  { src: '/images/gallery_img (63).jpg', alt: 'Gallery photo 63' },
  { src: '/images/gallery_img (64).jpg', alt: 'Gallery photo 64' },
  { src: '/images/gallery_img (65).jpg', alt: 'Gallery photo 65' },
  { src: '/images/gallery_img (66).jpg', alt: 'Gallery photo 66' },
  { src: '/images/gallery_img (67).jpg', alt: 'Gallery photo 67' },
  { src: '/images/gallery_img (68).jpg', alt: 'Gallery photo 68' },
  { src: '/images/gallery_img (69).jpg', alt: 'Gallery photo 69' },
  { src: '/images/gallery_img (70).jpg', alt: 'Gallery photo 70' },
  { src: '/images/gallery_img (71).jpg', alt: 'Gallery photo 71' },
  { src: '/images/gallery_img (72).jpg', alt: 'Gallery photo 72' },
]
