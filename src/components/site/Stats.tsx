import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: 1500, suffix: "+", label: "Students Trained" },
  { value: 13, suffix: " Years", label: "Experience" },
  { value: 100, suffix: "%", label: "Practical Training" },
  { value: 8, suffix: "+", label: "Heavy Machines" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold sm:text-5xl">
      {display.toLocaleString()}
      <span className="gradient-accent-text">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="glass-card grid gap-8 p-8 shadow-lift sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}