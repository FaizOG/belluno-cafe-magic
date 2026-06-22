import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { RevealText, FadeIn } from "@/components/motion/RevealText";

import hero from "@/assets/hero-interior.jpg";
import cap from "@/assets/signature-cappuccino.jpg";
import past from "@/assets/pastries.jpg";
import bar from "@/assets/barista.jpg";
import amb from "@/assets/ambience-1.jpg";
import bru from "@/assets/brunch.jpg";
import ext from "@/assets/exterior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Belluno, Vesu" },
      {
        name: "description",
        content:
          "A look inside Belluno: espresso, pastries, the room, and the people. Photographed on Vesu road.",
      },
      { property: "og:title", content: "Gallery — Belluno, Vesu" },
      {
        property: "og:description",
        content: "Photographs of Belluno cafe in Vesu, Surat.",
      },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: cap, alt: "Cappuccino on green marble", aspect: "aspect-square" },
  { src: hero, alt: "The verde alpi bar with brass espresso machine", aspect: "aspect-[4/5]" },
  { src: past, alt: "Croissant and tiramisu still life", aspect: "aspect-[3/4]" },
  { src: amb, alt: "Banquette corner with brass sconce", aspect: "aspect-[4/5]" },
  { src: bar, alt: "Pouring latte art in golden light", aspect: "aspect-[3/4]" },
  { src: bru, alt: "Overhead brunch spread", aspect: "aspect-square" },
  { src: ext, alt: "Belluno facade at dusk", aspect: "aspect-[4/5]" },
  { src: cap, alt: "Cappuccino, close detail", aspect: "aspect-[3/4]" },
];

function Gallery() {
  return (
    <>
      <section className="grain relative overflow-hidden px-6 pt-40 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ Gallery
            </p>
          </FadeIn>
          <RevealText
            as="h1"
            className="max-w-5xl font-display text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] text-verde"
            stagger={0.1}
          >
            Quiet rooms. Warm light.
          </RevealText>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-[1600px] columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group mb-5 inline-block w-full overflow-hidden rounded-2xl bg-verde ${img.aspect}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
