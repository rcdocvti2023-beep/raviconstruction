import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import { GALLERY } from "./data";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside our training ground"
          subtitle="Machines, classrooms and students at work — a look at daily life at RCVTI."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${item.alt}`}
                className="group relative block w-full overflow-hidden rounded-[1.75rem] shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.tall ? "h-96" : "h-64"
                  }`}
                />
                <span className="absolute inset-0 bg-navy-deep/0 transition-colors duration-400 group-hover:bg-navy-deep/35" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/85 p-4 backdrop-blur-md"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={GALLERY[active]!.src}
              alt={GALLERY[active]!.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-lift"
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close image preview"
              className="glass-dark absolute top-5 right-5 grid size-11 place-items-center rounded-full text-primary-foreground"
            >
              <X aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}