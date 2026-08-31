import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { GALLERY_CATEGORIES } from "@/components/site/gallery-data";

const TITLE = "Picture Gallery — RCVTI Ambalangoda";
const DESCRIPTION =
  "Photo galleries from Ravi Construction Vocational Training Institute: forklift, prime mover, backhoe loader, excavator and other heavy equipment training sessions.";

export const Route = createFileRoute("/gallery/")({
  component: GalleryIndexPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="gradient-navy pt-32 pb-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
              <span className="px-2">/</span>
              <span className="text-primary-foreground">Gallery</span>
            </nav>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
              Picture Gallery
            </h1>
            <span className="mt-4 block h-1 w-24 rounded-full bg-accent" />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              Moments from our training ground — machines, classrooms and students at work.
            </p>
          </div>
        </section>

        <section className="section-pad bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GalleryGrid categories={GALLERY_CATEGORIES} />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
