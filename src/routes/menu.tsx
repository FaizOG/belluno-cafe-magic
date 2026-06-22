import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { info } from "@/data/info";
import menuQr from "@/assets/menu-qr.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Belluno Caffè, Vesu" },
      {
        name: "description",
        content:
          "View the live Belluno menu on Google Maps. Espresso, signatures, brunch, pastries and dolci in Vesu, Surat.",
      },
      { property: "og:title", content: "Menu — Belluno Caffè, Vesu" },
      {
        property: "og:description",
        content: "Live menu, prices, and hours on Google Maps.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <section className="grain relative min-h-[calc(100svh-0px)] overflow-hidden px-6 pt-36 pb-24 lg:px-12 lg:pt-44 lg:pb-32">
      <div className="mx-auto grid max-w-[1400px] min-h-[70vh] items-center gap-16 lg:grid-cols-2">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ La Carta · The Menu
            </p>
          </FadeIn>
          <RevealText
            as="h1"
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-verde"
            stagger={0.07}
          >
            The menu lives on Google Maps.
          </RevealText>
          <FadeIn delay={0.35} className="mt-8 font-display text-2xl italic leading-snug text-verde/70 lg:text-3xl">
            Prices, specials, and hours are kept up to date there in real time.
          </FadeIn>
          <FadeIn delay={0.5} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={info.mapsUrl} variant="primary">
              Open live menu
            </MagneticButton>
            <MagneticButton to="/reservations" variant="ghost">
              Reserve a table
            </MagneticButton>
          </FadeIn>
          <FadeIn delay={0.6} className="mt-8 max-w-md space-y-2 text-sm text-verde/60">
            <p>Espresso bar · signatures · all-day brunch · pastries & dolci.</p>
            <p>On mobile? Tap “Open live menu” to launch Google Maps.</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} className="flex justify-center lg:justify-end">
          <a
            href={info.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative block overflow-hidden rounded-3xl border border-verde/12 bg-card p-8 shadow-[0_30px_80px_-40px_rgba(82,114,213,0.25)] lg:p-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <img
                src={menuQr}
                alt="QR code to open Belluno menu on Google Maps"
                className="h-56 w-56 rounded-2xl bg-cream lg:h-72 lg:w-72"
              />
            </motion.div>
            <p className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-verde/60 transition-colors group-hover:text-verde">
              Scan to open menu
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cream/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
