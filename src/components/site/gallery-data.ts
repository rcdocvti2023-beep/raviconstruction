// Central gallery configuration.
// To add or remove photos, simply drop/delete image files inside
// src/assets/gallery/<folder>/ — they are picked up automatically.

const modules = import.meta.glob<string>("../../assets/gallery/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const byFolder = new Map<string, string[]>();

for (const path of Object.keys(modules).sort()) {
  const folder = path.split("/").at(-2)!;
  const list = byFolder.get(folder) ?? [];
  list.push(modules[path]!);
  byFolder.set(folder, list);
}

export type GalleryCategoryConfig = {
  folder: string;
  title: string;
  date: string;
  description?: string;
};

const CONFIG: GalleryCategoryConfig[] = [
  {
    folder: "forklift-training",
    title: "Forklift Training",
    date: "Jan 12, 2026",
    description:
      "Load charts, stacking discipline and safe manoeuvring practice on our fork lift trucks.",
  },
  {
    folder: "prime-mover-operator",
    title: "Prime Mover Operator",
    date: "Feb 08, 2026",
    description:
      "Heavy vehicle handling, coupling and yard manoeuvring sessions with our instructors.",
  },
  {
    folder: "backhoe-loader",
    title: "Backhoe Loader",
    date: "Mar 15, 2026",
    description: "Loader and backhoe end operation for utility, drainage and site clearing work.",
  },
  {
    folder: "excavator",
    title: "Excavator",
    date: "Apr 02, 2026",
    description: "Trenching, loading and slope work with full pre-start safety routines.",
  },
  {
    folder: "training-moments",
    title: "Training Moments",
    date: "May 05, 2026",
    description:
      "Machines, classrooms and students at work — a look at daily life at our training ground.",
  },
  {
    folder: "other training",
    title: "Other Training",
    date: "May 20, 2026",
    description: "Motor grader, roller and bulldozer familiarisation at our training ground.",
  },

];

export type GalleryImage = { src: string; alt: string };

export type GalleryCategory = GalleryCategoryConfig & {
  cover: string;
  images: GalleryImage[];
};

export const GALLERY_CATEGORIES: GalleryCategory[] = CONFIG.map((category) => {
  const files = byFolder.get(category.folder) ?? [];
  return {
    ...category,
    cover: files[0] ?? "",
    images: files.map((src, i) => ({
      src,
      alt: `${category.title} training at RCVTI — photo ${i + 1}`,
    })),
  };
}).filter((category) => category.images.length > 0);

export function getGalleryCategory(folder: string) {
  return GALLERY_CATEGORIES.find((category) => category.folder === folder);
}
