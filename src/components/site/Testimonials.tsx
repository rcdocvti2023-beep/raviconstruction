import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "./Reveal";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const t = TESTIMONIALS[index]!;

  return (
    <section className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our operators say"
          subtitle="Graduates now working across Sri Lanka and overseas."
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 sm:p-10"
            >
              <Quote aria-hidden="true" className="size-9 text-accent/40" />
              <blockquote className="mt-5 text-lg leading-relaxed font-medium sm:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                <span className="gradient-navy grid size-14 shrink-0 place-items-center rounded-full font-display text-lg font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-bold">{t.name}</span>
                  <span className="block truncate text-sm text-muted-foreground">{t.role}</span>
                  <span className="mt-1 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} aria-hidden="true" className="size-4 fill-accent text-accent" />
                    ))}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-accent" : "w-2 bg-muted-foreground/35"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid size-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}