import { useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { GalleryImage } from "./gallery-data";

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null || images.length === 0) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, step]);

  const current = index !== null ? images[index] : undefined;

  return (
    <AnimatePresence>
      {current ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] grid place-items-center bg-navy-deep/90 p-4 backdrop-blur-md"
        >
          <motion.img
            key={current.src}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] w-auto max-w-full rounded-2xl shadow-lift"
          />

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-primary-foreground/80">
            {(index ?? 0) + 1} / {images.length}
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="glass-dark absolute top-5 right-5 grid size-11 place-items-center rounded-full text-primary-foreground transition-colors hover:bg-white/20"
          >
            <X aria-hidden="true" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="glass-dark absolute top-1/2 left-4 grid size-12 -translate-y-1/2 place-items-center rounded-full text-primary-foreground transition-colors hover:bg-white/20"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="glass-dark absolute top-1/2 right-4 grid size-12 -translate-y-1/2 place-items-center rounded-full text-primary-foreground transition-colors hover:bg-white/20"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
