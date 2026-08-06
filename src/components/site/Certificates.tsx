import { Award } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import cert1 from "@/assets/certificate-1.jpg";
import cert2 from "@/assets/certificate-2.jpg";

const CERTS = [
  { src: cert1, alt: "RCVTI course completion certificate", label: "Course Completion Certificate" },
  { src: cert2, alt: "RCVTI operator competency certificate", label: "Operator Competency Certificate" },
];

export function Certificates() {
  return (
    <section id="certificates" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Recognized Professional Training Programs"
          subtitle="Complete your assessment and receive certification you can present to employers in Sri Lanka and overseas."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.label} delay={i * 0.08}>
              <figure className="glass-card group overflow-hidden p-5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden rounded-[1.25rem] bg-secondary">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="mx-auto max-h-[26rem] w-auto object-contain transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="gradient-accent grid size-10 shrink-0 place-items-center rounded-xl text-accent-foreground">
                    <Award aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0 font-bold">{cert.label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}