import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rcvti-logo.png.asset.json";
import { CONTACT } from "./data";

const LINKS: { label: string; href?: string; to?: string }[] = [
  { label: "Home", href: "/#home" },
  { label: "Courses", to: "/courses" },
  { label: "Staff", to: "/staff" },
  { label: "About Us", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact Us", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 py-2 backdrop-blur-xl shadow-soft"
          : "py-4"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Ravi Construction Vocational Training Institute logo"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 rounded-full sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-base font-extrabold tracking-tight sm:text-lg ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              RCVTI
            </span>
            <span
              className={`hidden truncate text-[0.7rem] sm:block ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Ravi Construction Vocational Training Institute
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const className = `relative rounded-full px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-3 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-[calc(100%-1.5rem)] ${
              scrolled
                ? "text-foreground/80 hover:text-accent"
                : "text-primary-foreground/85 hover:text-primary-foreground"
            }`;
            return link.to ? (
              <Link key={link.label} to={link.to} className={className}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className}>
                {link.label}
              </a>
            );
          })}
          <Button asChild variant="hero" size="default" className="ml-3 rounded-full">
            <a href={CONTACT.phoneHref}>
              <Phone aria-hidden="true" /> Call Now
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full lg:hidden ${
            scrolled ? "bg-secondary text-foreground" : "glass-dark text-primary-foreground"
          }`}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-4 mt-3 overflow-hidden rounded-3xl border border-border/60 bg-background/95 p-3 shadow-lift backdrop-blur-xl lg:hidden">
          {LINKS.map((link) => {
            const className =
              "block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-accent";
            return link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={className}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={className}
              >
                {link.label}
              </a>
            );
          })}
          <Button asChild variant="hero" size="xl" className="mt-2 w-full">
            <a href={CONTACT.phoneHref}>
              <Phone aria-hidden="true" /> Call Now
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
