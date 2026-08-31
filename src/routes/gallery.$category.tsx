import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Lightbox } from "@/components/site/Lightbox";
import { getGalleryCategory } from "@/components/site/gallery-data";

export const Route = createFileRoute("/gallery/$category")({
  loader: ({ params }) => {
    const category = getGalleryCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Gallery not found — RCVTI" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.title} Gallery — RCVTI`;
    const description =
      loaderData.category.description ??
      `Photos from ${loaderData.category.title} training at Ravi Construction Vocational Training Institute.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: GalleryNotFound,
  component: GalleryCategoryPage,
});

function GalleryNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto grid max-w-3xl place-items-center px-4 pt-40 pb-24 text-center">
        <h1 className="text-3xl font-bold">Gallery not found</h1>
        <p className="mt-3 text-muted-foreground">
          The gallery you are looking for is no longer available.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-8">
          <Link to="/gallery">Back to gallery</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}

function GalleryCategoryPage() {
  const { category } = Route.useLoaderData();
  const [active, setActive] = useState<number | null>(null);

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
              <Link to="/gallery" className="hover:text-accent">
                Gallery
              </Link>
              <span className="px-2">/</span>
              <span className="text-primary-foreground">{category.title}</span>
            </nav>
            <h1 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              {category.title}
            </h1>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/75">
              <CalendarDays aria-hidden="true" className="size-4 text-accent" />
              {category.date}
            </p>
            {category.description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
                {category.description}
              </p>
            ) : null}
          </div>
        </section>

        <section className="section-pad bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {category.images.map((image, i) => (
                <motion.li
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Open larger image: ${image.alt}`}
                    className="group block w-full overflow-hidden rounded-[1.75rem] border border-border/60 bg-card p-3 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full rounded-[1.4rem] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <Button asChild variant="navy" size="xl">
                <Link to="/gallery">
                  <ArrowLeft aria-hidden="true" /> All galleries
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Lightbox
        images={category.images}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />

      <Footer />
      <FloatingActions />
    </div>
  );
}
