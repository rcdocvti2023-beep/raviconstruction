import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";
import { CourseCard } from "./CourseCard";
import { COURSES } from "./data";

export function Courses() {
  const available = COURSES.filter((course) => course.status === "available");

  return (
    <section id="courses" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training courses"
          title="Certificate programmes now open for registration"
          subtitle="Practical, TVEC-registered operator training with classroom theory and supervised machine hours every day."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((course, i) => (
            <Reveal key={course.no} delay={i * 0.07}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Button asChild variant="navy" size="xl">
            <Link to="/courses">
              View All Courses <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
