import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";

import heroInterior from "@/assets/hero-interior.jpg";
import signatureCup from "@/assets/signature-cappuccino.jpg";
import pastries from "@/assets/pastries.jpg";
import barista from "@/assets/barista.jpg";
import ambience from "@/assets/ambience-1.jpg";
import brunch from "@/assets/brunch.jpg";

import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { TiltCard } from "@/components/motion/TiltCard";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Marquee } from "@/components/layout/Marquee";
import { info } from "@/data/info";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Belluno — Caffè & Cucina in Vesu, Surat" },
      {
        name: "description",
        content:
          "An alpine-inspired cafe on Vesu road. Specialty espresso, slow brunch, and house-baked pastries — open daily.",
      },
      { property: "og:title", content: "Belluno — Caffè & Cucina in Vesu, Surat" },
      {
        property: "og:description",
        content: "Specialty espresso, slow brunch, and house-baked dolci in Vesu, Surat.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Single-Origin Espresso", "House-Baked Dolci", "Slow Brunch", "Alpine Hospitality", "Aperitivo Hour"]} />
      <Bento />
      <StoryBand />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="grain relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-verde">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={heroInterior}
          alt="Inside Belluno cafe — brass espresso machine on a verde alpi marble bar"
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-verde/40 via-verde/30 to-verde/90" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 pt-32 lg:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 text-[11px] uppercase tracking-[0.4em] text-cream/70"
        >
          ✦ Caffè · Cucina · Vesu, Surat
        </motion.p>

        <RevealText
          as="h1"
          className="font-display text-[clamp(4rem,15vw,16rem)] leading-[0.86] text-cream"
          stagger={0.12}
          delay={0.2}
        >
          Belluno
        </RevealText>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_auto_auto] lg:items-end"
        >
          <p className="font-display text-2xl italic leading-snug text-cream/85 lg:text-3xl">
            An alpine-leaning café on the corner of Vesu road —<br className="hidden sm:inline" />
            where espresso slows, and afternoons stretch.
          </p>
          <MagneticButton to="/menu" variant="gold">View Menu</MagneticButton>
          <MagneticButton to="/reservations" variant="ghost">
            <span className="text-cream">Reserve</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 right-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-cream/60 lg:block"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}

function Bento() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <FadeIn className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ The Belluno Day
            </p>
            <h2 className="max-w-3xl font-display text-5xl leading-[0.95] text-verde lg:text-7xl">
              From the first <span className="italic text-gold">pour</span> to the
              last <span className="italic text-gold">aperitivo</span>.
            </h2>
          </div>
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-verde/70 hover:text-verde"
          >
            Full Menu
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </FadeIn>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {/* Signature cup — large */}
          <BentoTile
            className="md:col-span-3 md:row-span-2"
            image={signatureCup}
            label="Signature"
            title="Verde Alpi"
            subtitle="Pistachio cream latte, sea salt, gold leaf"
            large
          />

          {/* Stat tile */}
          <BentoTile
            className="md:col-span-2 bg-verde text-cream"
            type="stat"
            stat="2018"
            statLabel="Pouring espresso in Vesu since"
          />

          {/* Hours tile */}
          <BentoTile className="md:col-span-1 bg-gold text-verde" type="hours" />

          {/* Pastries */}
          <BentoTile
            className="md:col-span-2"
            image={pastries}
            label="Dolci"
            title="Tiramisu & Croissants"
            subtitle="Baked at dawn"
          />

          {/* Barista — tall */}
          <BentoTile
            className="md:col-span-1 md:row-span-2"
            image={barista}
            label="Bar"
            title="Pour"
            tall
          />

          {/* Brunch */}
          <BentoTile
            className="md:col-span-3"
            image={brunch}
            label="Brunch"
            title="From 8 AM"
            subtitle="Truffle eggs, burrata, slow mornings"
          />

          {/* Location */}
          <BentoTile className="md:col-span-2 bg-[var(--cream-deep)]" type="location" />

          {/* Ambience */}
          <BentoTile
            className="md:col-span-4"
            image={ambience}
            label="The Room"
            title="Stay a while"
            subtitle="Banquettes, brass sconces, marble"
            wide
          />
        </div>
      </div>
    </section>
  );
}

type BentoTileProps = {
  className?: string;
  image?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  type?: "image" | "stat" | "hours" | "location";
  stat?: string;
  statLabel?: string;
  large?: boolean;
  tall?: boolean;
  wide?: boolean;
};

function BentoTile({
  className = "",
  image,
  label,
  title,
  subtitle,
  type = "image",
  stat,
  statLabel,
  large,
}: BentoTileProps) {
  if (type === "stat") {
    return (
      <FadeIn className={className}>
        <TiltCard intensity={5} className="flex h-full flex-col justify-between rounded-2xl bg-verde p-8 text-cream">
          <span className="text-[10px] uppercase tracking-[0.28em] text-cream/50">✦ Heritage</span>
          <div>
            <div className="font-display text-7xl leading-none gold-shimmer">{stat}</div>
            <p className="mt-3 max-w-[18ch] text-sm text-cream/70">{statLabel}</p>
          </div>
        </TiltCard>
      </FadeIn>
    );
  }
  if (type === "hours") {
    return (
      <FadeIn className={className}>
        <TiltCard intensity={5} className="flex h-full flex-col justify-between rounded-2xl bg-gold p-6 text-verde">
          <Clock size={20} strokeWidth={1.5} />
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-verde/70">Open today</p>
            <p className="mt-1 font-display text-3xl leading-tight">8:00 — 23:00</p>
          </div>
        </TiltCard>
      </FadeIn>
    );
  }
  if (type === "location") {
    return (
      <FadeIn className={className}>
        <a
          href={info.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="group block h-full"
        >
          <TiltCard intensity={4} className="flex h-full flex-col justify-between rounded-2xl bg-[var(--cream-deep)] p-8">
            <div className="flex items-start justify-between">
              <MapPin size={20} strokeWidth={1.5} className="text-verde" />
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="text-verde/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric"
              />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-verde/60">Find us</p>
              <p className="mt-2 font-display text-3xl leading-tight text-verde">{info.address}</p>
              <p className="mt-3 text-sm text-verde/70">Open on Google Maps →</p>
            </div>
          </TiltCard>
        </a>
      </FadeIn>
    );
  }

  return (
    <FadeIn className={className}>
      <TiltCard intensity={5} className="group relative h-full overflow-hidden rounded-2xl bg-verde">
        {image && (
          <motion.img
            src={image}
            alt={title ?? ""}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-verde/85 via-verde/30 to-transparent" />
        <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 text-cream">
          {label && (
            <span className="self-start rounded-full bg-cream/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur">
              ✦ {label}
            </span>
          )}
          <div>
            {title && (
              <h3 className={`font-display leading-[0.95] text-cream ${large ? "text-6xl lg:text-7xl" : "text-3xl lg:text-4xl"}`}>
                {title}
              </h3>
            )}
            {subtitle && <p className="mt-2 max-w-md text-sm text-cream/80">{subtitle}</p>}
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

function StoryBand() {
  return (
    <section className="relative overflow-hidden bg-verde px-6 py-32 text-cream lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={ambience}
              alt="Banquette seating at Belluno with marble bistro table and olive branches"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-gold">
            ✦ Our Story
          </p>
          <RevealText
            as="h2"
            className="font-display text-5xl leading-[0.95] lg:text-7xl"
            stagger={0.06}
          >
            Built around one idea — slow things down.
          </RevealText>
          <FadeIn delay={0.3} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-cream/75">
            <p>
              Belluno borrows its name from a small town tucked into the Italian Dolomites — where coffee is never rushed, and dessert is mandatory.
            </p>
            <p>
              We brought that feeling to Vesu in 2018: a verde alpi marble bar, a vintage espresso machine, and a kitchen that bakes pastries before sunrise.
            </p>
          </FadeIn>
          <div className="mt-10">
            <MagneticButton to="/about" variant="gold">Read our story</MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="grain relative overflow-hidden px-6 py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-verde/60">
          ✦ See you soon
        </p>
        <RevealText
          as="h2"
          className="mx-auto max-w-5xl font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-verde"
          stagger={0.08}
        >
          A table is waiting.
        </RevealText>
        <FadeIn delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton to="/reservations" variant="primary">Reserve a table</MagneticButton>
          <MagneticButton href={info.mapsUrl} variant="ghost">Find us on the map</MagneticButton>
        </FadeIn>
      </div>
    </section>
  );
}
