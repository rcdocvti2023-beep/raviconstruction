import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-excavator.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={hero}
        alt="Excavator operating on a construction site at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase">
            <ShieldCheck aria-hidden="true" className="size-4" /> TVEC Registered Institute
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-primary-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Build Your Future With{" "}
            <span className="gradient-accent-text">Professional Heavy Equipment</span> Training
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Learn from experienced instructors and gain practical skills with industry-standard
            equipment.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
           <Button asChild variant="hero" size="xl">
           <a href="/courses">
          View Courses <ArrowRight aria-hidden="true" />
          </a>
          </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            {["1500+ trained operators", "8 heavy machines", "Free accommodation"].map((item) => (
              <span
                key={item}
                className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground/90 sm:text-sm"
              >
                <Star aria-hidden="true" className="size-3.5 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
