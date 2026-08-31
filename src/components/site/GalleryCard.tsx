import { Link } from "@tanstack/react-router";
import { CalendarDays, Images } from "lucide-react";
import type { GalleryCategory } from "./gallery-data";

export function GalleryCard({ category }: { category: GalleryCategory }) {
  return (
    <Link
      to="/gallery/$category"
      params={{ category: category.folder }}
      aria-label={`Open ${category.title} gallery`}
      className="group block rounded-[1.75rem] border border-border/60 bg-card p-3 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative overflow-hidden rounded-[1.4rem]">
        <img
          src={category.cover}
          alt={`${category.title} gallery cover`}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="glass-dark absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground">
          <Images aria-hidden="true" className="size-3.5" />
          {category.images.length}
        </span>
      </div>

      <div className="px-3 py-4">
        <p className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <CalendarDays aria-hidden="true" className="size-4 text-accent" />
          {category.date}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-foreground transition-colors group-hover:text-accent">
          {category.title}
        </h3>
        {category.description ? (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
