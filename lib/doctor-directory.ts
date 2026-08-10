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
    name: 'Dr. Megha Mittal',
    qualification: 'MBBS, MD',
    department: 'Psychiatrist',
    description:
      'Dr. Megha Mittal is your solution to mental health concerns. Leave your worries behind as our expert provides compassionate care and effective treatment for anxiety, depression, dementia, schizophrenia, and bipolar disorder with minimal medication reliance. Rest assured, your mental well-being is our top priority.',
  },
  {
    name: 'Dr. Tanmay Bansal',
    qualification: 'MBBS, DLO',
    department: '',
    description:
      'Dr. Tanmay Bansal specializes in the diagnosis and treatment of various conditions such as polyps, DNS (deviated nasal septum), rhinitis, and tonsil enlargement. He is highly skilled in performing FESS (Functional Endoscopic Sinus Surgery), endoscopic surgery, ear surgery, throat surgeries, and other ENT related procedures.',
  },
  {
    name: 'Dr. Apoorva Sehgal',
    qualification: 'MBBS, MS',
    department: 'Orthopaedic',
    description:
      'Dr. Apoorva Sehgal specializes in addressing a wide range of orthopedic issues, including osteoarthritis, disk prolapse, fractures, ligament injuries, and sports-related injuries. With expertise in performing complex procedures such as bone grafting, total knee replacements, and hip replacements, our expert is highly skilled and competent in providing effective treatment options for your orthopedic needs.',
  },
  {
    name: 'Dr. S.S. Patil',
    qualification: 'MBBS, DNB',
    department: 'General &Laparoscopic Surgery',
    description:
      'Dr. S. S. Patel is a renowned and proficient surgeon with extensive experience in treating a wide range of surgical conditions. He specializes in the surgical management of ailments such as Hernia, Hydrocele, Cholecystectomy, Hemorrhoids, and many others. With his exceptional skills and comprehensive background, he has provided successful treatment to numerous patients, enabling them to overcome these conditions effectively. And wide range of surgical conditions.',
  },

  {
    name: 'Dr. Atul Jain',
    qualification: 'MBBS, MD, Anesthesia',
    department: 'Anesthesia',
    description:
      'Dr. Atul Jain is an Anesthesiologist working in Signature Hospital. He has over 10 years of experience in general anesthesia and has a special interest in pain management. He is a highly skilled and experienced doctor who is committed to providing his patients with the best possible care.',
  },
  {
    name: 'Dr. Gyanendra',
    qualification: 'MBBS, MS, DNB',
    department: 'Oncosurgery',
    description:
      'Dr. Gyanendra is a highly skilled oncosurgeon with qualifications of MBBS, MS, and DNB. His expertise lies in the field of oncosurgery, where he brings extensive knowledge and experience to provide excellent care to his patients.',
  },
  {
    name: 'Dr. I Ahmed',
    qualification: 'MBBS, DCH',
    department: 'Pediatrician',
    description:
      'Dr. Ashim Ahmed, a skilled pediatrician with an MBBS and DCH degree, brings expertise in children health. With a passion for providing excellent care, Dr. Ahmed aims to ensure the well-being and proper development of every child under his guidance.',
  },
  {
    name: 'Dr. Sachin Garg',
    qualification: 'MBBS, MD, Paediatrics',
    department: 'Pediatrician',
    description:
      'Dr. Sachin Garg, an accomplished pediatrician with MBBS and MD degrees, specializes in providing expert care to children. With extensive knowledge and experience, Dr. Garg is committed to ensuring the health and well-being of his patients.',
  },
  {
    name: 'Dr. Aditya Sharma',
    qualification: 'MBBS, MS, MCH',
    department: 'GI SURGERY',
    description:
      'Dr. Adya Sharma, MBBS, MS, MCh, is a skilled gastrointestinal surgeon specializing in advanced surgical techniques. With expertise in diagnosing and treating disorders of the digestive system, Dr. Sharma is committed to providing personalized care and delivering excellent outcomes for his patients.',
  },
  {
    name: 'Dr. Ashutosh Singh',
    qualification: 'MBBS, MD',
    department: 'Anesthesia',
    description:
      'Dr. Ashutosh Singh, MBBS, MD Anesthesia, is a highly qualified medical professional specializing in anesthesia. With extensive knowledge and expertise, Dr. Singh provides exceptional care and ensures patient comfort and safety during surgical procedures.',
  },
  {
    name: 'Dr. Arvind Agrawal',
    qualification: 'MBBS, MD',
    department: 'Neurology',
    description:
      'Dr. Arvind Agrawal, a highly qualified neurologist with an MBBS and MD degree, possesses extensive expertise in the field of neurology. His vast knowledge and experience enable him to provide exceptional care and support to his patients.',
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
    name: 'Dr. Akriti Gupta',
    qualification: 'MBBS, MD',
    department: 'Dermatology',
    description: '',
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
    name: 'Dr. Abhishek Agarwal',
    qualification: 'MBBS, MD, Radiology',
    department: 'Radiologist',
    description:
      'Dr. Abhishek Agarwal is a highly qualified radiologist with an MBBS and MD in Radiology. With his extensive medical expertise, he specializes in diagnosing and interpreting medical images to aid in patient care. Dr. Agarwal dedication and knowledge make him a trusted professional in the field of radiology.',
  },

  {
    name: 'Dr. Tushar Gupta',
    qualification: 'MBBS, MD, DM',
    department: 'Nephrologist',
    description:
      'Dr. Tushar Gupta, a renowned nephrologist with expertise in renal disorders, is dedicated to providing exceptional care, personalized treatment plans, and improving kidney health. Trust your kidneys in the hands of an experienced specialist.',
  },
]

export const DIRECTOR_PROFILE: DoctorProfile = {
  slug: 'ashish-singhal',
  name: 'Dr. Ashish Singhal',
  qualification: 'MBBS, MD, DM, DNB',
  department: 'Director',
  description:
    'As healthcare providers, it is our responsibility to prioritize the needs and well-being of our patients above all else. We must strive to provide the highest quality of care, treatment, and support to ensure that our patients receive the best possible outcomes. Our patients deserve nothing less than our best efforts and dedication.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW815XCBWVR-hL_CFZ_5oJltGzRRSswb2bxh0lafW9c9wkjjKDIl91Ezc&s=10',
}

export const MANAGEMENT_TEAM: DoctorProfile[] = [
  DIRECTOR_PROFILE,
  {
    slug: 'surbhi-gupta',
    ...DOCTOR_DIRECTORY.find((doctor) => doctor.name === 'Dr. Surbhi Gupta')!,
    image: 'https://jghdelhi.net/wp-content/uploads/2019/02/Dr.-Surbhi-Gupta-Gynae.webp',
  },
]

export const DOCTOR_SPECIALITIES = [
  ...new Set(
    DOCTOR_DIRECTORY.map((doctor) => doctor.department).filter(
      (department) => department.trim().length > 0,
    ),
  ),
]

export const findDoctorByName = (name: string) =>
  DOCTOR_DIRECTORY.find((doctor) => doctor.name === name)
