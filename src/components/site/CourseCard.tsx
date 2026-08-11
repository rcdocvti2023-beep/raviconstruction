import { Clock, Wallet, BadgeCheck, Hourglass } from "lucide-react";
import type { Course } from "./data";

export function StatusBadge({ status }: { status: Course["status"] }) {
  const available = status === "available";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-bold tracking-[0.14em] uppercase ${
        available ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
      }`}
    >
      {available ? (
        <BadgeCheck aria-hidden="true" className="size-3.5" />
      ) : (
        <Hourglass aria-hidden="true" className="size-3.5" />
      )}
      {available ? "Available" : "Pending"}
    </span>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="glass-card flex h-full flex-col overflow-hidden p-0 transition-shadow duration-300 hover:shadow-lift">
      {course.image ? (
        <img
          src={course.image}
          alt={`${course.short} operator training at RCVTI`}
          width={1024}
          height={768}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Course {course.no}
          </span>
          <StatusBadge status={course.status} />
        </div>
        <h3 className="mt-3 text-base leading-snug font-bold">{course.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>
        <dl className="mt-4 grid gap-2 border-t border-border/70 pt-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock aria-hidden="true" className="size-4 shrink-0 text-accent" />
            <dt className="text-muted-foreground">Duration:</dt>
            <dd className="font-semibold">{course.duration ?? "To be announced"}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Wallet aria-hidden="true" className="size-4 shrink-0 text-accent" />
            <dt className="text-muted-foreground">Registration Fee:</dt>
            <dd className="font-semibold">{course.fee ?? "To be announced"}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
