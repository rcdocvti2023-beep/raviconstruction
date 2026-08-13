import { createFileRoute, Link } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { StaffCard } from "@/components/site/StaffCard";
import { STAFF_GROUPS } from "@/components/site/staff";

const TITLE = "Our Staff — RCVTI Ambalangoda";
const DESCRIPTION =
  "Meet the management team, training instructors, demonstrators and administration staff of Ravi Construction Vocational Training Institute, Ambalangoda.";

export const Route = createFileRoute("/staff")({
  component: StaffPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/staff" }],
  }),
});

function StaffPage() {
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
              <span className="text-primary-foreground">Staff</span>
            </nav>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">Our Staff</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              Meet our experienced management team, instructors, and staff.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm">
              <Users aria-hidden="true" className="size-4" />
              Management, instructors, demonstrators and administration
            </p>
          </div>
        </section>

        {STAFF_GROUPS.map((group, index) => (
          <section
            key={group.id}
            id={group.id}
            className={`section-pad ${index % 2 === 1 ? "bg-secondary/50" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow={group.eyebrow}
                title={group.heading}
                subtitle={group.subtitle}
              />
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member, i) => (
                  <Reveal key={member.name} delay={i * 0.07}>
                    <StaffCard member={member} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}