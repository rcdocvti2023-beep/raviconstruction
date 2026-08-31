import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/rcvti-logo.png.asset.json";
import { CONTACT, COURSES } from "./data";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Courses", href: "/courses" },
  { label: "Gallery", href: "/gallery" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact Us", href: "/#contact" },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1JPmYPmP1N/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Ravi Construction Vocational Training Institute logo"
              width={56}
              height={56}
              loading="lazy"
              className="size-14 shrink-0 rounded-full"
            />
            <span className="min-w-0">
              <span className="block font-display text-lg font-extrabold">RCVTI</span>
              <span className="block text-xs text-primary-foreground/60">{CONTACT.regNo}</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            Ravi Construction Vocational Training Institute — practical heavy equipment operator
            training in Ambalangoda, Sri Lanka.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="glass-dark grid size-10 place-items-center rounded-full transition-colors hover:bg-white/20"
              >
                <social.icon aria-hidden="true" className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Training Courses</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            {COURSES.map((course) => (
              <li key={course.no}>
                <a href="/courses" className="transition-colors hover:text-accent">
                  {course.short}
                  {course.status === "pending" ? (
                    <span className="ml-2 text-[0.65rem] tracking-wide uppercase text-accent">
                      Pending
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={CONTACT.phoneHref} className="hover:text-accent">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="px-4 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Ravi Construction Vocational Training Institute. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
