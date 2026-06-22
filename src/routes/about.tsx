import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";
import exterior from "@/assets/exterior.jpg";
import ambience from "@/assets/ambience-1.jpg";
import barista from "@/assets/barista.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Belluno, Vesu" },
      {
        name: "description",
        content:
          "The story behind Belluno: alpine inspiration, a vintage espresso machine, and a small corner of Vesu reimagined as a slow Italian café.",
      },
      { property: "og:title", content: "Our Story — Belluno, Vesu" },
      {
        property: "og:description",
        content: "An alpine cafe brought to Vesu — slow coffee, quiet rooms, dolci at dusk.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    n: "01",
    title: "Single-origin only",
    body: "We rotate beans seasonally from small farms — Karnataka, Ethiopia, Colombia — and pull every shot on a 1962 brass lever.",
  },
  {
    n: "02",
    title: "Baked at dawn",
    body: "Croissants, focaccia, cannoli — laminated and shaped while the city sleeps. If a tray sells out, we don't replace it that day.",
  },
  {
    n: "03",
    title: "Sit as long as you like",
    body: "No table timers, no clearing your cup. Bring a book, bring a friend, bring your laptop. Stay till the sconces come on.",
  },
];

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <section ref={ref} className="relative h-[90svh] min-h-[600px] overflow-hidden bg-verde">
        <motion.img
          src={exterior}
          alt="Belluno cafe facade with dark green storefront and brass signage"
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-verde via-verde/40 to-verde/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-20 pt-32 lg:px-12">
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-cream/70">
            ✦ Our Story
          </p>
          <RevealText
            as="h1"
            className="max-w-5xl font-display text-[clamp(3rem,10vw,10rem)] leading-[0.88] text-cream"
            stagger={0.08}
          >
            A small piece of the Dolomites — on Vesu road.
          </RevealText>
        </div>
      </section>

      <section className="px-6 py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ The idea
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-verde lg:text-5xl">
              Two friends, one trip, one brass espresso machine.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="space-y-6 text-lg leading-relaxed text-verde/80">
            <p>
              In the winter of 2017, we were lost in a small alpine town called Belluno. The streets smelled of espresso and pine. Every café served the same three things — coffee, pastries, time — and they served them like it mattered.
            </p>
            <p>
              We came back to Surat carrying a vintage lever machine in a suitcase and a single page of notes. A year later, Belluno opened on Vesu road. A verde alpi marble bar, brass sconces, banquettes the color of fresh cream.
            </p>
            <p>
              We're still here. Still pulling shots on that brass machine. Still baking before sunrise. Still asking you to stay a little longer.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-verde px-6 py-32 text-cream lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-gold">
            ✦ How we do things
          </p>
          <RevealText
            as="h2"
            className="max-w-3xl font-display text-5xl leading-[0.95] lg:text-7xl"
            stagger={0.06}
          >
            Three small rules.
          </RevealText>
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.n} delay={i * 0.15}>
                <div className="border-t border-cream/20 pt-6">
                  <span className="font-display text-5xl text-gold">{v.n}</span>
                  <h3 className="mt-4 font-display text-3xl text-cream">{v.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-cream/75">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden md:aspect-auto">
          <motion.img
            src={ambience}
            alt="Cream banquette and marble bistro table at Belluno"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="aspect-[4/5] overflow-hidden md:aspect-auto">
          <motion.img
            src={barista}
            alt="Barista pulling a shot of espresso on the brass machine"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-32 text-center lg:px-12">
        <RevealText
          as="h2"
          className="mx-auto max-w-3xl font-display text-5xl leading-[0.95] text-verde lg:text-6xl"
        >
          Come find us. The cup's already warm.
        </RevealText>
        <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton to="/menu" variant="primary">See the menu</MagneticButton>
          <MagneticButton to="/contact" variant="ghost">Visit us</MagneticButton>
        </FadeIn>
      </section>
    </>
  );
}
