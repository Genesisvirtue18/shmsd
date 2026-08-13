export type DoctorProfile = {
  slug?: string
  name: string
  qualification: string
  department: string
  description: string
  image?: string
}

export const DOCTOR_DIRECTORY: DoctorProfile[] = [
  {
    name: 'Dr. Umesh Gupta',
    qualification: 'MBBS MS (MAMC Delhi)',
    department: 'Internal medicine',
    description:
      'Dr. Umesh Gupta, a highly experienced Diabetologist and Infectious Disease Specialist with over 35 years of expertise. With his vast knowledge and skill set, he offers top-notch medical services. Dr. Gupta is committed to providing the best possible care to his patients, ensuring their well-being through effective and efficient treatment.',
  },
  {
    name: 'Dr. Deepak Chauhan',
    qualification: 'MBBS, MS',
    department: 'General Surgery',
    description:
      'Dr. Deepak Chauhan is a highly skilled and experienced surgeon specializing in the treatment of various medical conditions, including Hernia, Hydrocele, Cholecystectomy, Hemorrhoids, and more. With his expertise and extensive background, he has successfully helped numerous patients overcome these ailments.',
  },
  {
    name: 'Dr. Gulvir Singh',
    qualification: 'MBBS, MD',
    department: 'Pulmonologist',
    description:
      'Dr. Gulvir Singh is a highly skilled specialist in the field of chest and lung diseases, including conditions such as tuberculosis (TB), pneumonia, and bronchiectasis. With extensive knowledge and experience, Dr. Singh is dedicated to diagnosing and treating these respiratory ailments effectively.',
  },
  {
    name: 'Dr. Surbhi Gupta',
    qualification: 'MBBS, MS',
    department: 'Obs. & Gynae',
    description:
      'Dr. Surbhi specializes in providing compassionate and comprehensive care for pregnancy needs. They are highly skilled and knowledgeable in the field of Gynecology, with expertise in addressing various issues such as Amenorrhea, Prolapse, Pelvic Inflammatory Disease (PID), Endometriosis, and more. Dr. Surbhi is committed to approaching your pregnancy journey with simplicity and utmost care, ensuring your well-being throughout the process.',
  },
  {
    name: 'Dr. Ashima Aron',
    qualification: 'MBBS, MS',
    department: 'Obs. & Gynae',
    description:
      'Dr. Aashima Aron is an obstetrician and gynaecologist who has graduated from prestigious medical colleges in India, including Lady Hardinge Medical College and Maulana Azad Medical College, Delhi. She has worked in different regions in India and overseas in London, UK, gaining vast experience while working with the stalwarts of this field.',
  },
  {
    name: 'Dr. Simran Sharma',
    qualification: 'MBBS, MD',
    department: 'Psychiatry',
    description:
      'Dr. Simran Sharma provides compassionate care for mental health concerns, including anxiety, depression, sleep issues and other psychiatric conditions.',
  },
  {
    name: 'Dr. Shreya',
    qualification: 'MBBS, MS',
    department: 'ENT',
    description:
      'Dr. Shreya specializes in ear, nose and throat care, including sinus issues, infections, hearing concerns and related procedures.',
  },
  {
    name: 'Dr. Apoorva Sehgal',
    qualification: 'MBBS, MS',
    department: 'Orthopaedic',
    description:
      'Dr. Apoorva Sehgal specializes in addressing a wide range of orthopedic issues, including osteoarthritis, disk prolapse, fractures, ligament injuries, and sports-related injuries. With expertise in performing complex procedures such as bone grafting, total knee replacements, and hip replacements, our expert is highly skilled and competent in providing effective treatment options for your orthopedic needs.',
  },
  {
    name: 'Dr. Pulkit Gupta',
    qualification: 'MBBS, MS',
    department: 'General Surgery',
    description:
      'Dr. Pulkit Gupta provides general surgical care with a focus on safe procedures, clear planning and recovery support.',
  },
  {
    name: 'Dr. Atul Jain',
    qualification: 'MBBS, MD, Anesthesia',
    department: 'Anesthesia',
    description:
      'Dr. Atul Jain is an Anesthesiologist working in Signature Hospital. He has over 10 years of experience in general anesthesia and has a special interest in pain management. He is a highly skilled and experienced doctor who is committed to providing his patients with the best possible care.',
  },
  {
    name: 'Dr. Praveen Kumar',
    qualification: 'MBBS, DGO',
    department: 'Gynecology & Obstetrics',
    description:
      'Dr. Praveen Kumar provides women’s health and maternity care with a calm, supportive approach.',
  },
  {
    name: 'Dr. Shivam Sharma',
    qualification: 'MBBS, MD',
    department: 'Pediatrics',
    description:
      'Dr. Shivam Sharma provides child health care, growth monitoring and treatment for common pediatric concerns.',
  },
  {
    name: 'Dr. Sanjay Sharma',
    qualification: 'MBBS, MD',
    department: 'Pediatrics',
    description:
      'Dr. Sanjay Sharma provides pediatric care with attention to child health, treatment and follow-up support.',
  },
  {
    name: 'Dr. Ashish Sachan',
    qualification: 'MBBS, MS, MCH',
    department: 'Gastroenterology',
    description:
      'Dr. Ashish Sachan specializes in gastrointestinal surgery and digestive system care.',
  },
  {
    name: 'Dr. Kapil Kursiwal',
    qualification: 'MBBS, MS, MCH',
    department: 'Gastroenterology',
    description:
      'Dr. Kapil Kursiwal provides gastrointestinal surgical care with a focus on advanced treatment and recovery.',
  },
  {
    name: 'Dr. Harender Singh',
    qualification: 'MBBS, MD, Fellowship in Endoscopy',
    department: 'Gastroenterology',
    description:
      'Dr. Harender Singh provides gastroenterology care, including digestive evaluation and endoscopy support.',
  },
  {
    name: 'Dr. Ashutosh Singh',
    qualification: 'MBBS, MD',
    department: 'Anesthesia',
    description:
      'Dr. Ashutosh Singh, MBBS, MD Anesthesia, is a highly qualified medical professional specializing in anesthesia. With extensive knowledge and expertise, Dr. Singh provides exceptional care and ensures patient comfort and safety during surgical procedures.',
  },
  {
    name: 'Dr. Rahul Chauhan',
    qualification: 'MBBS, MD, DM',
    department: 'Neurology',
    description:
      'Dr. Rahul Chauhan provides neurology care for brain, spine and nerve-related concerns.',
  },
  {
    name: 'Dr. Harsh Prasoon',
    qualification: 'MBBS, MD',
    department: 'Microbiology',
    description:
      'Dr. Harsh Prasoon is a highly qualified medical professional with an MBBS degree and an MD in Microbiology. His expertise in the field enables him to contribute significantly to the understanding and treatment of infectious diseases, ensuring better healthcare outcomes for patients.',
  },
  {
    name: 'Dr. Gaurav Bansal',
    qualification: 'MBBS, MD',
    department: 'Pathology',
    description:
      'Dr. Gaurav Bansal is a highly qualified medical professional with an MBBS and MD in Pathology. With his expertise in the field, he contributes significantly to the diagnosis and understanding of diseases through his comprehensive knowledge and research in pathology.',
  },
  {
    name: 'Dr. Achintya Sharma',
    qualification: 'MBBS, MS, MCh, CVT',
    department: '',
    description:
      'Dr. Achintya Sharma, a distinguished Cardiothoracic surgeon, brings expertise in MBBS, MS, and MCH. With cutting-edge techniques and compassionate care, he strives to deliver exceptional results, ensuring the health and vitality of your heart and thoracic region.',
  },
  {
    name: 'Dr. Koshinder Vats',
    qualification: 'MBBS, MD',
    department: 'Dermatology',
    description: 'Dr. Koshinder Vats provides dermatology care for skin, hair and nail concerns.',
  },
  {
    name: 'Dr. Ayush Jain',
    qualification: 'MBBS, MS, MCH',
    department: 'PLASTIC SURGEON',
    description:
      'Dr. Ayush Jain, a highly skilled and board-certified plastic surgeon, offers personalized cosmetic and reconstructive solutions. With his expertise and precision, he helps you enhance your natural beauty and restore confidence. Trust your transformation to Dr. Jain’s exceptional care.',
  },
  {
    name: 'Dr. Ankit Gupta',
    qualification: 'MBBS, MD, PEDIATRICS',
    department: '',
    description:
      'Dr. Ankit Gupta is a highly qualified pediatrician with MBBS and MD degrees. With extensive expertise in pediatrics, he provides compassionate care to children. Dr. Gupta dedication and knowledge make him a trusted medical professional in the field of child health.',
  },
  {
    name: 'Dr. Firoz Khan Saifi',
    qualification: 'BPT',
    department: 'physiotherapist',
    description:
      'Dr. Firoz Khan Saifi has years of experience and a passion for restoring movement and function. He offers personalized treatments, cutting-edge techniques, and a supportive atmosphere to help you on your journey to optimal physical health.',
  },
  {
    name: 'Dr. Arvind Agarwal',
    qualification: 'MBBS, MD, Radiodiagnosis',
    department: 'Radiology',
    description:
      'Dr. Arvind Agarwal provides radiology and radiodiagnosis services for accurate imaging and reporting.',
  },

  {
    name: 'Dr. Pankaj',
    qualification: 'MBBS, MD, DM',
    department: 'Nephrology',
    description:
      'Dr. Pankaj provides nephrology care for kidney health, blood pressure and renal disorders.',
  },
]

export const DIRECTOR_PROFILE: DoctorProfile = {
  slug: 'ashish-singhal',
  name: 'Dr. Ashish Singhal',
  qualification: 'MBBS, MD, DM, DNB',
  department: 'Director',
  description:
    'As healthcare providers, it is our responsibility to prioritize the needs and well-being of our patients above all else. We must strive to provide the highest quality of care, treatment, and support to ensure that our patients receive the best possible outcomes. Our patients deserve nothing less than our best efforts and dedication.',
  image: '/images/ashish.jpeg',
}

export const MANAGEMENT_TEAM: DoctorProfile[] = [
  DIRECTOR_PROFILE,
  {
    slug: 'surbhi-gupta',
    ...DOCTOR_DIRECTORY.find((doctor) => doctor.name === 'Dr. Surbhi Gupta')!,
    image: '/images/shurbhi.jpeg',
  },
]

export const DOCTOR_SPECIALITIES = [
  ...new Set(
    DOCTOR_DIRECTORY.map((doctor) => doctor.department).filter((department) => department.trim().length > 0),
  ),
]

export const findDoctorByName = (name: string) =>
  DOCTOR_DIRECTORY.find((doctor) => doctor.name === name)
