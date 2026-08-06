import {
  BadgeCheck,
  Users,
  Wrench,
  Truck,
  Briefcase,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import gallery from "@/assets/gallery-2.jpg";
import cabin from "@/assets/gallery-1.jpg";

const HIGHLIGHTS = [
  { icon: BadgeCheck, title: "TVEC Registered", text: "Recognised vocational training provider." },
  { icon: Users, title: "Professional Instructors", text: "Site-experienced operators as trainers." },
  { icon: Wrench, title: "Practical Training", text: "Seat time on real machines, every day." },
  { icon: Truck, title: "Modern Equipment", text: "Well maintained industry-standard fleet." },
  { icon: Briefcase, title: "Job-Oriented Training", text: "Skills employers ask for, locally and abroad." },
  { icon: HardHat, title: "Safe Learning Environment", text: "Safety drills and supervision at all times." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -right-24 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the institute"
          title="Sri Lanka's practical home for heavy equipment operators"
          subtitle="Ravi Construction Vocational Training Institute (RCVTI) in Ambalangoda trains beginners and working operators on real construction machinery, with a focus on safety, confidence and employability."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={gallery}
                alt="RCVTI trainees in safety gear in front of heavy machinery"
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-52 overflow-hidden rounded-[1.5rem] border-4 border-background shadow-lift sm:block">
              <img
                src={cabin}
                alt="Instructor coaching a trainee inside an excavator cabin"
                width={768}
                height={1024}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="glass-card group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="gradient-navy grid size-11 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <item.icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Button asChild variant="navy" size="xl">
            <a href="#courses">
              Explore training courses <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}