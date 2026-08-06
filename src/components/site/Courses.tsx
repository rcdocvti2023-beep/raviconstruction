import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { COURSES } from "./data";

export function Courses() {
  return (
    <section id="courses" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training courses"
          title="Choose your machine, master your trade"
          subtitle="Every programme mixes classroom theory with supervised operating hours on the machine you enrol for."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course, i) => (
            <Reveal key={course.name} delay={(i % 4) * 0.07}>
              <article className="group glass-card flex h-full flex-col overflow-hidden p-0 transition-all duration-400 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={`${course.name} used for operator training`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <Clock aria-hidden="true" className="size-3.5 text-accent" />
                    {course.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold">{course.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-3"
                  >
                    Learn More <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}