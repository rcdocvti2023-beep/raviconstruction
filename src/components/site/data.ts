import excavator from "@/assets/course-excavator.jpg";
import backhoe from "@/assets/course-backhoe.jpg";
import forklift from "@/assets/course-forklift.jpg";
import grader from "@/assets/course-grader.jpg";
import wheelLoader from "@/assets/course-wheel-loader.jpg";

export const CONTACT = {
  address: "Kosgahawella, Aluthwala, Ambalangoda, Sri Lanka",
  phone: "+94 76 268 7676",
  phoneHref: "tel:+94762687676",
  whatsapp: "+94 76 268 7676",
  whatsappHref: "https://wa.me/94762687676",
  email: "rc.doc.vti.2023@gmail.com",
  mapLink: "https://maps.app.goo.gl/FWqpyB8fjVFJiJh46",
  mapEmbed:
    "https://www.google.com/maps?q=Kosgahawella,+Aluthwala,+Ambalangoda,+Sri+Lanka&output=embed",
  regNo: "REG.NO. G/7/422",
};

export const COMPANY = {
  established: "2013.09.06",
  br: "BR :- G/7/422",
  experience: "13 years of experience",
  students: "More than 1500+ students",
  tvecRenewed: "Renewed on 2026.03.27",
  tvecRegNo: "Reg NO:- P04/0230",
};

export type Course = {
  no: string;
  title: string;
  short: string;
  image?: string;
  duration?: string;
  fee?: string;
  status: "available" | "pending";
  description: string;
};

export const COURSES: Course[] = [
  {
    no: "01",
    title: "Certificate for Construction Equipment Operator (Backhoe Loader)",
    short: "Backhoe Loader",
    image: backhoe,
    duration: "30 Days",
    fee: "Rs. 1,000/=",
    status: "available",
    description:
      "Operate both loader and backhoe ends confidently for utility, drainage and site clearing work.",
  },
  {
    no: "02",
    title: "Certificate for Construction Equipment Operator (Excavator)",
    short: "Excavator",
    image: excavator,
    duration: "30 Days",
    fee: "Rs. 1,000/=",
    status: "available",
    description:
      "Master trenching, loading and slope work on tracked excavators with full pre-start safety routines.",
  },
  {
    no: "03",
    title: "Certificate for Heavy Vehicle Operator (Fork Lift Truck)",
    short: "Fork Lift Truck",
    image: forklift,
    duration: "14 Days",
    fee: "Rs. 1,000/=",
    status: "available",
    description:
      "Warehouse and yard handling, load charts, stacking discipline and safe manoeuvring in tight spaces.",
  },
  {
    no: "04",
    title: "Certificate for Construction Equipment Operator (Motor Grader)",
    short: "Motor Grader",
    image: grader,
    status: "pending",
    description:
      "Blade control, road formation, cambering and fine grading for road construction projects.",
  },
  {
    no: "05",
    title: "Certificate for Welder",
    short: "Welder",
    status: "pending",
    description:
      "Practical welding skills for construction and fabrication work, with workshop safety training.",
  },
  {
    no: "06",
    title: "Certificate for Construction Equipment Operator (Wheel Loader)",
    short: "Wheel Loader",
    image: wheelLoader,
    duration: "16 Days",
    fee: "Rs. 1,000/=",
    status: "available",
    description:
      "Load, haul and stockpile aggregates with confidence while learning bucket control, machine limits and site safety.",
  },
];

export const COURSE_INFO = [
  { label: "Registration Fee", value: "Rs. 1,000/= for every course" },
  { label: "Accommodation", value: "Free accommodation is provided." },
  {
    label: "Meals",
    value:
      "Breakfast, lunch and dinner are available separately and must be paid for separately.",
  },
  { label: "Daily Course Starting Time", value: "08:00 AM" },
  { label: "Daily Course Ending Time", value: "04:00 PM" },
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