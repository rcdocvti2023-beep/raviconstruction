import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "./Reveal";
import { CONTACT, COURSES } from "./data";

const DETAILS = [
  { icon: MapPin, label: "Address", value: CONTACT.address, href: CONTACT.mapLink },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Inquiry received", {
        description: "Our team will call you back within one working day.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us about your training plan"
          subtitle="Visit our training ground in Ambalangoda or send an inquiry and we will guide you to the right course."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-5">
            <div className="glass-card space-y-4 p-6 sm:p-8">
              {DETAILS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-secondary"
                >
                  <span className="gradient-navy grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <item.icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-medium break-words">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
              <iframe
                title="RCVTI location map — Kosgahawella, Aluthwala, Ambalangoda"
                src={CONTACT.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="07X XXX XXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <select
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                  className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  {COURSES.map((course) => (
                    <option key={course.name} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us your experience level and preferred start date"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={sending}>
                {sending ? "Sending…" : "Send Inquiry"} <Send aria-hidden="true" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}