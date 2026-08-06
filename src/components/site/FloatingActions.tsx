import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT } from "./data";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {visible ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll back to top"
            className="gradient-navy grid size-11 place-items-center rounded-full text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
          >
            <ArrowUp aria-hidden="true" className="size-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-lift transition-transform hover:-translate-y-1"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
      </a>
    </div>
  );
}