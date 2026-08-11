import { createFileRoute, Link } from "@tanstack/react-router";
import { Wallet, BedDouble, UtensilsCrossed, Sunrise, Sunset, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { CourseCard } from "@/components/site/CourseCard";
import { COURSES, COMPANY } from "@/components/site/data";

const TITLE = "Training Courses — RCVTI Ambalangoda";
const DESCRIPTION =
  "Certificate courses at Ravi Construction Vocational Training Institute: Backhoe Loader and Excavator (30 days), Fork Lift Truck (14 days). Registration fee Rs. 1,000/= with free accommodation.";

const INFO_CARDS = [
  { icon: Wallet, label: "Registration Fee", value: "Rs. 1,000/= for every course" },
  { icon: BedDouble, label: "Accommodation", value: "Free accommodation is provided." },
  {
    icon: UtensilsCrossed,
    label: "Meals",
    value: "Breakfast, lunch and dinner are available separately and must be paid for separately.",
  },
  { icon: Sunrise, label: "Daily Course Starting Time", value: "08:00 AM" },
  { icon: Sunset, label: "Daily Course Ending Time", value: "04:00 PM" },
];

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
});

function CoursesPage() {
  const available = COURSES.filter((course) => course.status === "available");
  const pending = COURSES.filter((course) => course.status === "pending");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="gradient-navy pt-32 pb-20 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
              <span className="px-2">/</span>
              <span className="text-primary-foreground">Courses</span>
            </nav>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
              Vocational training courses
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              TVEC registered operator training programmes at Ambalangoda. {COMPANY.tvecRegNo},{" "}
              {COMPANY.tvecRenewed.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <a href="/#contact">Register interest</a>
              </Button>
              <Button asChild variant="heroGhost" size="xl">
                <a href="tel:+94762687676">
                  <Phone aria-hidden="true" /> Call the institute
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Available courses"
              title="Registered courses open now"
              subtitle="Each course includes classroom theory, daily supervised machine practice and a completion certificate."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {available.map((course, i) => (
                <Reveal key={course.no} delay={i * 0.07}>
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Pending courses"
              title="Coming soon — not yet open for registration"
              subtitle="These programmes are pending approval. Registration will open once they are confirmed."
            />
            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {pending.map((course, i) => (
                <Reveal key={course.no} delay={i * 0.07}>
                  <CourseCard course={course} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Course information"
              title="General terms for every course"
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INFO_CARDS.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.06}>
                  <div className="glass-card h-full p-6">
                    <span className="gradient-accent grid size-11 place-items-center rounded-2xl text-accent-foreground">
                      <item.icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold tracking-[0.12em] uppercase">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
