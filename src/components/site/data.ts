import excavator from "@/assets/course-excavator.jpg";
import backhoe from "@/assets/course-backhoe.jpg";
import forklift from "@/assets/course-forklift.jpg";
import wheelLoader from "@/assets/course-wheel-loader.jpg";
import grader from "@/assets/course-grader.jpg";
import bulldozer from "@/assets/course-bulldozer.jpg";
import crane from "@/assets/course-crane.jpg";
import roller from "@/assets/course-roller.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const CONTACT = {
  address: "Kosgahawella, Aluthwala, Ambalangoda, Sri Lanka",
  phone: "+94 72 687 676",
  phoneHref: "tel:+9472687676",
  whatsapp: "+94 72 687 676",
  whatsappHref: "https://wa.me/9472687676",
  email: "rc.doc.vti.2023@gmail.com",
  mapLink: "https://maps.app.goo.gl/FWqpyB8fjVFJiJh46",
  mapEmbed:
    "https://www.google.com/maps?q=Kosgahawella,+Aluthwala,+Ambalangoda,+Sri+Lanka&output=embed",
  regNo: "REG.NO. G/7/422",
};

export type Course = {
  name: string;
  image: string;
  duration: string;
  description: string;
};

export const COURSES: Course[] = [
  {
    name: "Excavator",
    image: excavator,
    duration: "1 – 3 months",
    description:
      "Master trenching, loading and slope work on tracked excavators with full pre-start safety routines.",
  },
  {
    name: "Backhoe Loader",
    image: backhoe,
    duration: "1 – 2 months",
    description:
      "Operate both loader and backhoe ends confidently for utility, drainage and site clearing work.",
  },
  {
    name: "Forklift",
    image: forklift,
    duration: "2 – 4 weeks",
    description:
      "Warehouse and yard handling, load charts, stacking discipline and safe manoeuvring in tight spaces.",
  },
  {
    name: "Wheel Loader",
    image: wheelLoader,
    duration: "1 – 2 months",
    description:
      "Bucket loading cycles, stockpile management and truck loading techniques used on real sites.",
  },
  {
    name: "Motor Grader",
    image: grader,
    duration: "1 – 2 months",
    description:
      "Blade control, road formation, cambering and fine grading for road construction projects.",
  },
  {
    name: "Bulldozer",
    image: bulldozer,
    duration: "1 – 2 months",
    description:
      "Earth moving, land clearing and push-loading on tracked dozers with slope safety practice.",
  },
  {
    name: "Crane",
    image: crane,
    duration: "1 – 3 months",
    description:
      "Rigging basics, load charts, signalling and controlled lifting with mobile crane operations.",
  },
  {
    name: "Roller",
    image: roller,
    duration: "2 – 4 weeks",
    description:
      "Compaction patterns for soil and asphalt, vibration control and finishing quality standards.",
  },
];

export const GALLERY = [
  { src: g1, alt: "Instructor guiding a trainee inside an excavator cabin", tall: true },
  { src: g2, alt: "Group of trainees in safety gear at the training ground", tall: false },
  { src: g4, alt: "Classroom theory session on heavy equipment operation", tall: false },
  { src: g3, alt: "Trainee operating a wheel loader with instructor support", tall: true },
  { src: g6, alt: "Row of heavy machines parked at the institute yard", tall: false },
  { src: g5, alt: "Close-up of hands on excavator joystick controls", tall: true },
];

export const FAQS = [
  {
    q: "How long is the training?",
    a: "Course length depends on the machine and your experience. Short programmes such as forklift and roller run 2 to 4 weeks, while excavator, crane and grader programmes run 1 to 3 months with daily practical hours.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes. Every trainee who completes the programme and passes the practical assessment receives a recognised completion certificate that can be presented to local and overseas employers.",
  },
  {
    q: "Is accommodation available?",
    a: "Free accommodation is available for out-of-town trainees on request, subject to availability. Let us know when you enrol so we can reserve a place for you.",
  },
  {
    q: "Are beginners accepted?",
    a: "Absolutely. Most of our students start with zero machine experience. Training begins with controls, safety and machine familiarity before moving to full operating cycles.",
  },
  {
    q: "What machinery will I learn?",
    a: "We train on excavator, backhoe loader, forklift, wheel loader, motor grader, bulldozer, crane and roller. You may enrol for a single machine or combine several into one programme.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Nuwan Perera",
    role: "Excavator Operator, Galle",
    rating: 5,
    quote:
      "I joined with no experience at all. After two months of daily practice I was confident on the machine and found a site job within three weeks of finishing.",
  },
  {
    name: "Sameera Fernando",
    role: "Crane Operator, Dubai",
    rating: 5,
    quote:
      "The instructors focus on safety first, which is exactly what overseas employers look for. My certificate helped me clear the interview for a Gulf contract.",
  },
  {
    name: "Kasun Jayasuriya",
    role: "Wheel Loader Operator, Colombo",
    rating: 5,
    quote:
      "Real machines, real ground conditions and plenty of seat time. Fees were reasonable and the accommodation made it easy for me to attend from out of town.",
  },
  {
    name: "Dilshan Silva",
    role: "Backhoe Operator, Matara",
    rating: 5,
    quote:
      "Flexible schedule let me train while working part time. The trainers were patient and explained every control until I got it right.",
  },
];