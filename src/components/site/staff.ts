export type StaffMember = {
  name: string;
  position: string;
  qualification?: string;
  email?: string;
  phone?: string;
  image: string;
};

export type StaffGroup = {
  id: string;
  heading: string;
  eyebrow: string;
  subtitle?: string;
  members: StaffMember[];
};

export const STAFF_GROUPS: StaffGroup[] = [
  {
    id: "management",
    eyebrow: "Management",
    heading: "Management",
    subtitle: "The leadership team directing the institute and its training programmes.",
    members: [
      {
        name: "Mr. M.W.Ravindra Thushan",
        position: "Managing Director",
        phone: "+94 777 768 556",
        image: "/assets/staff/ravindra-thushan.jpg",
      },
      {
        name: "Mr. Nimalsiri Widanagamage",
        position: "Director General",
        phone: "+94 712 922 008",
        image: "/assets/staff/nimalsiri-widanagamage.jpg",
      },
      {
        name: "Mr. B. Sudath Janaka",
        position: "Training Manager",
        qualification: "(Qualification)",
        phone: "+94 711 213 261",
        image: "/assets/staff/sudath-janaka.jpg",
      },
    ],
  },
  {
    id: "instructors",
    eyebrow: "Training instructors",
    heading: "Training Instructors",
    subtitle: "Certified instructors delivering classroom theory and supervised machine hours.",
    members: [
      {
        name: "Mr. H. L. Maduka Dilranga",
        position: "Training Instructor Excavator",
        qualification: "(Qualification)",
        email: "madukadilranga1@gmail.com",
        image: "/assets/staff/maduka-dilranga.jpg",
      },
      {
        name: "Mr. D. D. Sahan Thilakshana Kumara",
        position: "Training Instructor Forklift",
        qualification: "(Qualification)",
        email: "sahanthilakshana3@gmail.com",
        image: "/assets/staff/sahan-thilakshana.jpg",
      },
      {
        name: "Mr. P. G. Chathuranga Shrimal",
        position: "Training Instructor Backoh Loader",
        qualification: "(Qualification)",
        email: "pjchathuranga@gmail.com",
        image: "/assets/staff/chathuranga-shrimal.jpg",
      },
    ],
  },
  {
    id: "demonstrators",
    eyebrow: "Demonstrators",
    heading: "Demonstrators",
    subtitle: "Demonstrators supporting trainees on the machines during practical sessions.",
    members: [
      {
        name: "Mr. K. M. Kavindu Saranga",
        position: "Temporary Demonstrator",
        email: "Kavindusaranga777@gmail.com",
        image: "/assets/staff/kavindu-saranga.jpg",
      },
      {
        name: "Mr. A. V. P. T. Thilanga",
        position: "Temporary Demonstrator",
        email: "thisaraavpt@gmail.com",
        image: "/assets/staff/thilanga.jpg",
      },
      {
        name: "Mr. K. Nisal Nimnaka",
        position: "Temporary Demonstrator",
        email: "Nimnaka.nisal@icloud.com",
        image: "/assets/staff/nisal-nimnaka.jpg",
      },
    ],
  },
  {
    id: "administration",
    eyebrow: "Administration",
    heading: "Administration",
    subtitle: "Office staff handling registrations, records and accounts.",
    members: [
      {
        name: "Mr. W. Waruna Kaushalya",
        position: "Administrative Officer",
        email: "waruna6kk@gmail.com",
        phone: "+94 912 261 676",
        image: "/assets/staff/waruna-kaushalya.jpg",
      },
      {
        name: "Miss. D. D. Kavindya Thathsarani",
        position: "Account Assistant",
        email: "kthathsarani554@gmail.com",
        phone: "+94 762 687 676",
        image: "/assets/staff/kavindya-thathsarani.jpg",
      },
    ],
  },
];