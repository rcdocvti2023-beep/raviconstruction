import { Reveal } from "./Reveal";
import { GalleryCard } from "./GalleryCard";
import type { GalleryCategory } from "./gallery-data";

export function GalleryGrid({ categories }: { categories: GalleryCategory[] }) {
  return (
    <ul className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, i) => (
        <li key={category.folder}>
          <Reveal delay={(i % 3) * 0.06}>
            <GalleryCard category={category} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
