import {
  GraduationCap,
  Wrench,
  BadgeCheck,
  Cog,
  Wallet,
  CalendarClock,
  BedDouble,
  Compass,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const ITEMS = [
  { icon: GraduationCap, title: "Experienced Trainers", text: "Trainers with years of live site operating experience." },
  { icon: Wrench, title: "Practical Training", text: "Hands-on hours, not just theory sessions." },
  { icon: BadgeCheck, title: "TVEC Registration", text: "Registered provider, recognised certification." },
  { icon: Cog, title: "Modern Machines", text: "A maintained fleet of eight machine types." },
  { icon: Wallet, title: "Affordable Fees", text: "Transparent pricing with instalment options." },
  { icon: CalendarClock, title: "Flexible Schedule", text: "Weekday, weekend and part-time batches." },
  { icon: BedDouble, title: "Free Accommodation", text: "Stay on site while you train, on request." },
  { icon: Compass, title: "Career Guidance", text: "CV support and employer referrals after training." },
];

export function WhyUs() {
  return (
    <section className="section-pad gradient-navy relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why choose us"
          title="Training built around your career, not a syllabus"
          subtitle="Everything we offer is designed to get you operating safely and hired quickly."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06}>
              <div className="glass-dark group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15">
                <span className="gradient-accent grid size-12 place-items-center rounded-2xl text-accent-foreground shadow-accent transition-transform duration-300 group-hover:rotate-6">
                  <item.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}