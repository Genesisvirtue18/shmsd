"use client";

import React, { useState } from 'react';

// --- MOCK ENRICHMENT (FIXED FOR HYDRATION) ---
const enrichDoctorData = (doctors: any[]) => {
  return doctors.map((doc, index) => {
    return {
      ...doc,
      // We still fetch the image for the Director, but we will ignore it in the DoctorCard
      image: `https://i.pravatar.cc/150?u=${index + 1}`, 
      
      // Replaced Math.random() with deterministic values based on the index.
      // The server and client will now ALWAYS calculate these exact same values.
    
    };
  });
};

// --- COMPONENT: DIRECTOR SECTION (KEEPS IMAGE) ---
interface Director {
  name: string;
  department: string;
  description?: string;
  image?: string;
}

const DirectorSection = ({ director }: { director: Director }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm p-6 md:p-10 mb-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden border border-gray-100">
      {/* Geometric Hexagonal Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a2a8' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Text Content */}
      <div className="z-10 md:w-2/3 space-y-4">
        <h3 className="text-slate-800 font-bold text-4xl tracking-tight">OUR DOCTOR</h3>
        <h4 className="text-slate-900 text-2xl font-semibold">Patients deserve the best from us</h4>
        <p className="text-slate-600 leading-relaxed text-sm max-w-2xl">
          {director.description || "As healthcare providers, it is our responsibility to prioritize the needs and well-being of our patients above all else."}
        </p>
        <div className="pt-2">
          <div className="font-bold text-xl text-slate-900">{director.name}</div>
          <div className="text-slate-500 font-medium text-sm">{director.department}</div>
        </div>
      </div>

      {/* Doctor Image (KEPT) */}
      <div className="z-10 md:w-1/3 flex justify-center">
        <img 
          src="https://shmsd.in/wp-content/uploads/2023/04/Dr-Surbhi-Gupta-384-%C3%97-256-px-1.png"
          alt={director.name} 
          className="rounded-xl shadow-xl object-cover w-64 h-80 md:w-72 md:h-96 transform hover:scale-[1.02] transition-transform duration-300" 
        />
      </div>
    </div>
  );
};

// --- COMPONENT: DOCTOR CARD (IMAGE REMOVED, BUTTON ADDED) ---
const DoctorCard = ({ doctor }: { doctor: { name: string; qualification: string; department: string; description: string; experience: number; languages: string; } }) => {
  return (
    <div className="flex flex-col gap-4 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
      
      {/* Details (Full width since image is removed) */}
      <div className="flex-1 flex flex-col justify-center space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-800">{doctor.name}</h3>
        
        </div>
        
        <div className="text-blue-600 font-semibold text-sm">{doctor.department}</div>
        
      
       <div className="flex gap-5 justify-between items-center"> <p className="text-slate-500 text-xs  mt-1 max-w-xl">
          {doctor.description}
        </p>
        <div>
            <button className="bg-[#B71C1C] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#861717] transition-colors shadow-sm">
            Book appointment
          </button>
          </div></div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function DoctorsPage() {
  // Input Data
  const doctorData = 
  [
    {
        "name": "Dr.Umesh Gupta",
        "qualification": "MBBS MS (MAMC Delhi)",
        "department": "Internal medicine",
        "description": "Dr. Umesh Gupta , a highly experienced Diabetologist and Infectious Disease Specialist with over 35 years of expertise. With his vast knowledge and skill set, he offers top-notch medical services. Dr. Gupta is committed to providing the best possible care to his patients, ensuring their well-being through effective and efficient treatment."
    },
    {
        "name": "Dr. Deepak Chauhan",
        "qualification": "MBBS , MS",
        "department": "General Surgery",
        "description": "Dr. Deepak Chauhan is a highly skilled and experienced surgeon specializing in the treatment of various medical conditions, including Hernia, Hydrocele, Cholecystectomy, Hemorrhoids, and more. With his expertise and extensive background, he has successfully helped numerous patients overcome these ailments."
    },
    {
        "name": "Dr. Gulvir Singh",
        "qualification": "MBBS , MD",
        "department": "Pulmonologist",
        "description": "Dr. Gulvir Singh is a highly skilled specialist in the field of chest and lung diseases, including conditions such as tuberculosis (TB), pneumonia, and bronchiectasis. With extensive knowledge and experience, Dr. Singh is dedicated to diagnosing and treating these respiratory ailments effectively."
    },
    {
        "name": "Dr. Surbhi Gupta",
        "qualification": "MBBS , MS",
        "department": "Obs. & Gynae",
        "description": "Dr. Surbhi specializes in providing compassionate and comprehensive care for your pregnancy needs. They are highly skilled and knowledgeable in the field of Gynecology, with expertise in addressing various issues such as Amenorrhea, Prolapse, Pelvic Inflammatory Disease (PID), Endometriosis, and more. Dr. Surbhi is committed to approaching your pregnancy journey with simplicity and utmost care, ensuring your well-being throughout the process."
    },
    {
        "name": "Dr. Ashima Aron",
        "qualification": "MBBS , MS",
        "department": "Obs. & Gynae",
        "description": "Dr. Aashima Aron is an obstetrician and gynaecologist who has graduated from prestigious medical colleges in India, including Lady Hardinge medical college and Maulana Azad medical college, Delhi. She has worked in different regions in India and overseas in London, UK, gaining vast experience while working with the stalwarts of this field."
    },
    {
        "name": "Dr Megha Mittal",
        "qualification": "MBBS , MD",
        "department": "Psychiatrist",
        "description": "Dr. Megha Mittal, your solution to metal health concerns. Leave your worries behind as our expert provides compassionate care and effective treatment for anxiety, depression, dementia, schizophrenia, and bipolar disorder with minimal medication reliance. Rest assured, your mental well-being is our top priority."
    },
    {
        "name": "Dr. Tanmay Bansal",
        "qualification": "MBBS ,DLO",
        "department": "",
        "description": "Dr. Tanmay Bansal specializes in the diagnosis and treatment of various conditions such as p olyps, DNS (deviated nasal septum), rhinitis, and tonsil enlargement. He is highly skilled in performing FESS (Functional Endoscopic Sinus Surgery), endoscopic surgery, ear surgery, throat surgeries, and other ENT  related procedures."
    },
    {
        "name": "Dr. Apoorva Sehgal",
        "qualification": "MBBS ,MS",
        "department": "Orthopaedic",
        "description": "Dr. Apoorva Sehgal specializes in addressing a wide range of orthopedic issues, including osteoarthritis, disk prolapse, fractures, ligament injuries, and sports-related injuries. With expertise in performing complex procedures such as bone grafting, total knee replacements, and hip replacements, our expert is highly skilled and competent in providing effective treatment options for your orthopedic needs."
    },
    {
        "name": "Dr. S.S. Patil",
        "qualification": "MBBS ,DNB",
        "department": "General &Laparoscopic Surgery",
        "description": "Dr. S. S. Patel is a renowned and proficient surgeon with extensive experience in treating a wide range of surgical conditions. He specializes in the surgical management of ailments such as Hernia, Hydrocele, Cholecystectomy, Hemorrhoids, and many others. With his exceptional skills and comprehensive background, he has provided successful treatment to numerous patients, enabling them to overcome these conditions effectively.And Wide range of surgical conditions"
    },
    {
        "name": "Dr. Ashish Singhal",
        "qualification": "MBBS ,MD, DM, DNB",
        "department": "Cardiologist",
        "description": "Dr Ashish Singhal. He has over 12 years of experience as a Cardiologist. He is a specialist in the diagnosis and treatment of heart disease, including coronary artery disease, heart failure, arrhythmias, and congenital heart defects. He is a compassionate and caring doctor who is committed to providing his patients with the best possible care."
    },
    {
        "name": "Dr. Atul Jain",
        "qualification": "MBBS ,MD, Anesthesia",
        "department": "Anesthesia",
        "description": "Dr. Atul Jain is an Anesthesiologist working in Signature Hospital. He has over 10 years of experience in general anesthesia and has a special interest in pain management. He is a highly skilled and experienced doctor who is committed to providing his patients with the best possible care."
    },
    {
        "name": "Dr. Gyanendra",
        "qualification": "MBBS ,MS,DNB",
        "department": "Oncosurgery",
        "description": "Dr. Gyanendra is a highly skilled oncosurgeon with qualifications of MBBS, MS, and DNB. His expertise lies in the field of oncosurgery, where he brings extensive knowledge and experience to provide excellent care to his patients."
    },
    {
        "name": "Dr. I Ahmed",
        "qualification": "MBBS ,DCH,",
        "department": "Pediatrician",
        "description": "Dr. Ashim Ahmed , a skilled pediatrician with an MBBS and DCH degree, brings expertise in children’s health. With a passion for providing excellent care, Dr. Ahmed aims to ensure the well-being and proper development of every child under his guidance."
    },
    {
        "name": "Dr. Sachin Garg",
        "qualification": "MBBS, MD, Paediatrics",
        "department": "Pediatrician",
        "description": "Dr. Sachin Garg , an accomplished pediatrician with MBBS and MD degrees, specializes in providing expert care to children. With extensive knowledge and experience, Dr. Garg is committed to ensuring the health and well-being of his  patients."
    },
    {
        "name": "Dr. Aditya Sharma",
        "qualification": "MBBS, MS, MCH",
        "department": "GI SURGERY",
        "description": "D r. Adya Sharma , MBBS, MS, MCh, a skilled gastrointestinal surgeon specializing in advanced surgical techniques. With expertise in diagnosing and treating disorders of the digestive system, Dr. Sharma is committed to providing personalized care and delivering excellent outcomes for his patients."
    },
    {
        "name": "Dr. Ashutosh Singh",
        "qualification": "MBBS, MD",
        "department": "Anesthesia",
        "description": "Dr. Ashutosh Singh , MBBS, MD Anesthesia, is a highly qualified medical professional specializing in anesthesia. With extensive knowledge and expertise, Dr. Singh provides exceptional care and ensures patient comfort and safety during surgical procedures."
    },
    {
        "name": "Dr. Arvind Agrawal",
        "qualification": "MBBS, MD",
        "department": "Neurology",
        "description": "Dr. Arvind Agrawal , a highly qualified neurologist with an MBBS and MD degree, possesses extensive expertise in the field of neurology. His vast knowledge and experience enable him to provide exceptional care and support to his patients."
    },
    {
        "name": "Dr. Harsh Prasoon",
        "qualification": "MBBS, MD,",
        "department": "Microbiology",
        "description": "Dr. Harsh Prasoon is a highly qualified medical professional with an MBBS degree and an MD in Microbiology. His expertise in the field enables him to contribute significantly to the understanding and treatment of infectious diseases, ensuring better healthcare outcomes for patients."
    },
    {
        "name": "Dr. Gaurav Bansal",
        "qualification": "MBBS, MD",
        "department": "Pathology",
        "description": "Dr. Gaurav Bansal is a highly qualified medical professional with an MBBS and MD in Pathology. With his expertise in the field, he contributes significantly to the diagnosis and understanding of diseases through his comprehensive knowledge and research in pathology."
    },
    {
        "name": "Dr. Achintya Sharma",
        "qualification": "MBBS,MS,MCh,CVT",
        "department": "",
        "description": "Dr. Achintya Sharma , a distinguished Cardiothoracic surgeon, brings expertise in MBBS, MS, and MCH. With cutting-edge techniques and compassionate care, he strives to deliver exceptional results, ensuring the health and vitality of your heart and thoracic region"
    },
    {
        "name": "Dr. Akriti Gupta",
        "qualification": "MBBS,MD",
        "department": "Dermatology",
        "description": ""
    },
    {
        "name": "Dr.  Ayush jain",
        "qualification": "MBBS MS MCH",
        "department": "PLASTIC SURGEON",
        "description": "Dr. Ayush Jain , a highly skilled and board-certified plastic surgeon, offers personalized cosmetic and reconstructive solutions. With his expertise and precision, he helps you enhance your natural beauty and restore confidence. Trust your transformation to Dr. Jain’s exceptional care."
    },
    {
        "name": "Dr. Ankit Gupta",
        "qualification": "MBBS, MD, PEDIATRICS",
        "department": "",
        "description": "Dr. Ankit Gupta is a highly qualified pediatrician with MBBS and MD degrees. With extensive expertise in pediatrics, he provides compassionate care to children. Dr. Gupta’s dedication and knowledge make him a trusted medical professional in the field of child health."
    },
    {
        "name": "Dr. firoz khan saifi",
        "qualification": "BPT",
        "department": "physiotherapist",
        "description": "Dr. Firoz Khan Saifi Who have some years of experience and a passion for restoring movement and function, I offer personalized treatments, cutting-edge techniques, and a supportive atmosphere to help you on your journey to optimal physical health."
    },
    {
        "name": "Dr.Abhishek Agarwal",
        "qualification": "MBBS,MD, Radiology",
        "department": "Radiologist",
        "description": "Dr. Abhishek Agarwal is a highly qualified radiologist with an MBBS and MD in Radiology. With his extensive medical expertise, he specializes in diagnosing and interpreting medical images to aid in patient care. Dr. Agarwal’s dedication and knowledge make him a trusted professional in the field of radiology."
    },
     { "name": "Dr. Ashish Singhal", "qualification": "MBBS ,MD, DM, DNB", "department": "Director", "description": "As healthcare providers, it is our responsibility to prioritize the needs and well-being of our patients above all else. We must strive to provide the highest quality of care, treatment, and support to ensure that our patients receive the best possible outcomes. Our patients deserve nothing less than our best efforts and dedication." },
    {
        "name": "Dr. Tushar Gupta",
        "qualification": "MBBS MD DM",
        "department": "Nephrologist",
        "description": "Dr. Tushar Gupta , renowned nephrologist with expertise in renal disorders. Dedicated to providing exceptional care, personalized treatment plans, and improving kidney health. Trust your kidneys in the hands of an experienced specialist."
    }
]
  const doctors = enrichDoctorData(doctorData);
  
  // STATE FOR FILTERS
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleDepartmentToggle = (dept: string) => {
    if (selectedDepartments.includes(dept)) {
      setSelectedDepartments(selectedDepartments.filter(d => d !== dept));
    } else {
      setSelectedDepartments([...selectedDepartments, dept]);
    }
  };

  // FILTER LOGIC
  const filteredDoctors = selectedDepartments.length === 0 
    ? doctors 
    : doctors.filter(doc => selectedDepartments.includes(doc.department));

  // Identify director from dataset (Dr. Ashish Singhal - index 9)
  const director = doctors[9];

  // Extract unique departments
  const departments = [...new Set(doctors.map(d => d.department).filter(d => d))];
  const languages = ['English', 'Hindi', 'Kannada', 'Marathi'];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-slate-50/30 rounded-3xl p-4 md:p-6">
        
        {/* HERO/BANNER HEADER */}
        <div className="bg-blue-50/50 -m-4 md:-m-6 p-8 md:p-12 rounded-t-3xl mb-8 border-b border-blue-100/50">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-2">Doctors who don't just treat.<br />They lead your care.</h1>
          <p className="text-slate-600 text-base md:text-lg max-w-xl">They're independent, experienced, and fully aligned with our preventive, people-first approach to care.</p>
        </div>
         {/* DIRECTOR SECTION - UNTOUCHED */}
            <DirectorSection director={director} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* SIDEBAR WITH WORKING FILTERS */}
          <div className="lg:w-1/4 flex-shrink-0 space-y-6">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-700 mb-4">Specialities</h4>
              <div className="space-y-2">
                {departments.slice(0, 12).map((spec, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                      checked={selectedDepartments.includes(spec)}
                      onChange={() => handleDepartmentToggle(spec)}
                    />
                    <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">{spec}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
            
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:w-3/4 flex-1">
            
           {/* DOCTORS LIST SECTION */}
            <div className="">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Our Specialists {selectedDepartments.length > 0 && `(${filteredDoctors.length})`}
              </h2>
              <div className="space-y-2">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc, index) => (
                    <DoctorCard key={index} doctor={doc} />
                  ))
                ) : (
                  <p className="text-slate-500 text-sm py-4">No doctors found for the selected department.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}