import { useState } from "react";
import { Mail, Phone, GraduationCap, User } from "lucide-react";
import type { StaffMember } from "./staff";

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Miss\.|Ms\.|Dr\.)\s*/i, "")
    .split(/[\s.]+/)
    .filter(Boolean)
    .filter((part) => part.length > 1)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

export function StaffCard({ member }: { member: StaffMember }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        {failed ? (
          <div
            className="gradient-navy flex h-full w-full flex-col items-center justify-center gap-2 text-primary-foreground"
            aria-hidden="true"
          >
            <User className="size-8 opacity-70" />
            <span className="font-display text-3xl font-extrabold tracking-wider">
              {initials(member.name)}
            </span>
          </div>
        ) : (
          <img
            src={member.image}
            alt={`${member.name}, ${member.position} at RCVTI`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.7rem] font-bold tracking-[0.16em] text-accent uppercase">
          {member.position}
        </span>
        <h3 className="mt-2 text-base leading-snug font-bold">{member.name}</h3>

        {member.qualification ? (
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap aria-hidden="true" className="size-4 shrink-0 text-accent" />
            {member.qualification}
          </p>
        ) : null}

        <div className="mt-4 flex flex-1 flex-col justify-end gap-2 border-t border-border/70 pt-4 text-sm">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 break-all text-muted-foreground transition-colors hover:text-accent focus-visible:text-accent"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0 text-accent" />
              {member.email}
            </a>
          ) : null}
          {member.phone ? (
            <a
              href={`tel:${member.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 font-semibold transition-colors hover:text-accent focus-visible:text-accent"
            >
              <Phone aria-hidden="true" className="size-4 shrink-0 text-accent" />
              {member.phone}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}