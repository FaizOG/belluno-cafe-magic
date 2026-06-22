import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { info } from "@/data/info";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Belluno, Vesu, Surat" },
      {
        name: "description",
        content:
          "Find Belluno in Vesu, Surat. Hours, phone, email, and directions via Google Maps.",
      },
      { property: "og:title", content: "Visit Us — Belluno, Vesu, Surat" },
      {
        property: "og:description",
        content: "Address, hours, and directions to Belluno cafe in Vesu, Surat.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="grain relative overflow-hidden px-6 pt-40 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ Visit · Vesu, Surat
            </p>
          </FadeIn>
          <RevealText
            as="h1"
            className="max-w-5xl font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] text-verde"
            stagger={0.08}
          >
            Come sit with us.
          </RevealText>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[1.2fr_1fr]">
          <FadeIn>
            <a
              href={info.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-verde lg:aspect-[5/6]"
            >
              <img
                src={exterior}
                alt="Belluno storefront on Vesu road"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde via-verde/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-8 text-cream">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60">Google Maps</p>
                  <p className="mt-1 font-display text-3xl">Open directions</p>
                </div>
                <span className="rounded-full border border-cream/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] backdrop-blur transition-colors group-hover:bg-cream group-hover:text-verde">
                  View →
                </span>
              </div>
            </a>
          </FadeIn>

          <div className="space-y-4">
            <InfoCard icon={<MapPin size={18} />} label="Address" delay={0.1}>
              <p className="font-display text-2xl leading-tight text-verde">{info.address}</p>
              <a
                href={info.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-block text-sm text-gold underline-offset-4 hover:underline"
              >
                Open in Google Maps →
              </a>
            </InfoCard>

            <InfoCard icon={<Clock size={18} />} label="Hours" delay={0.2}>
              <ul className="space-y-1.5 text-base text-verde/85">
                {info.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-verde/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<Phone size={18} />} label="Call" delay={0.3}>
                <a href={`tel:${info.phone}`} className="font-display text-xl text-verde hover:text-gold">
                  {info.phone}
                </a>
              </InfoCard>
              <InfoCard icon={<Mail size={18} />} label="Email" delay={0.35}>
                <a href={`mailto:${info.email}`} className="font-display text-xl text-verde hover:text-gold">
                  {info.email}
                </a>
              </InfoCard>
            </div>

            <InfoCard icon={<Instagram size={18} />} label="Follow" delay={0.4}>
              <a
                href={info.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="font-display text-xl text-verde hover:text-gold"
              >
                {info.instagramHandle}
              </a>
              <p className="mt-1 text-sm text-verde/60">Daily moments from the bar.</p>
            </InfoCard>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1500px] flex-wrap items-center justify-center gap-4">
          <MagneticButton to="/reservations" variant="primary">Reserve a table</MagneticButton>
          <MagneticButton href={info.mapsUrl} variant="ghost">Get directions</MagneticButton>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  delay = 0,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl border border-verde/12 bg-card p-6 transition-colors hover:border-gold/50">
        <div className="mb-4 flex items-center gap-2 text-verde/70">
          {icon}
          <span className="text-[10px] uppercase tracking-[0.28em]">{label}</span>
        </div>
        {children}
      </div>
    </FadeIn>
  );
}
