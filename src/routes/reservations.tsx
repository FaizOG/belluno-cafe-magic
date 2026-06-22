import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { RevealText, FadeIn } from "@/components/motion/RevealText";
import { info } from "@/data/info";
import ambience from "@/assets/ambience-1.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Belluno, Vesu" },
      {
        name: "description",
        content:
          "Reserve a table at Belluno Caffè in Vesu, Surat. Choose your date, time, and party size.",
      },
      { property: "og:title", content: "Reserve a Table — Belluno" },
      {
        property: "og:description",
        content: "Book your table at Belluno cafe in Vesu, Surat.",
      },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:30",
    party: "2",
    notes: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={ambience}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] via-[var(--cream)]/85 to-[var(--cream)]" />
      </div>

      <div className="mx-auto grid max-w-[1500px] gap-16 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-12">
        <div>
          <FadeIn>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-verde/60">
              ✦ Reserve · Prenotazione
            </p>
          </FadeIn>
          <RevealText
            as="h1"
            className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] text-verde"
            stagger={0.08}
          >
            Save your seat.
          </RevealText>
          <FadeIn delay={0.3} className="mt-8 max-w-md font-display text-2xl italic leading-snug text-verde/70">
            Tell us when you'd like to come. We'll confirm by phone or email within the hour.
          </FadeIn>

          <FadeIn delay={0.5} className="mt-10 space-y-3 text-sm text-verde/75">
            <p><span className="text-verde/50">Walk-ins</span> — always welcome, subject to seating.</p>
            <p><span className="text-verde/50">Larger groups</span> — for 8+ please email {info.email}.</p>
            <p><span className="text-verde/50">Hours</span> — open daily 8:00 to 23:00.</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl border border-verde/12 bg-card p-8 shadow-[0_30px_80px_-40px_rgba(82,114,213,0.3)] lg:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[500px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-gold text-verde"
                  >
                    <Check size={36} strokeWidth={2} />
                  </motion.div>
                  <h2 className="mt-8 font-display text-4xl text-verde">Grazie, {form.name || "amico"}.</h2>
                  <p className="mt-3 max-w-sm text-base text-verde/70">
                    Your request is in. We'll be in touch shortly to confirm your table for{" "}
                    <strong className="text-verde">{form.party}</strong> on{" "}
                    <strong className="text-verde">{form.date || "your selected date"}</strong> at{" "}
                    <strong className="text-verde">{form.time}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", date: "", time: "19:30", party: "2", notes: "" });
                    }}
                    className="mt-8 rounded-full border border-verde/30 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-verde transition-colors hover:bg-verde hover:text-cream"
                  >
                    Book another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  className="space-y-5"
                >
                  <Field label="Your name">
                    <input
                      required
                      value={form.name}
                      onChange={onChange("name")}
                      className="input"
                      placeholder="Marco Rossi"
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={onChange("email")}
                        className="input"
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={onChange("phone")}
                        className="input"
                        placeholder="+91 ..."
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="Date">
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={onChange("date")}
                        className="input"
                      />
                    </Field>
                    <Field label="Time">
                      <select value={form.time} onChange={onChange("time")} className="input">
                        {["08:30","10:00","11:30","13:00","14:30","18:00","19:00","19:30","20:00","20:30","21:00","21:30"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Party">
                      <select value={form.party} onChange={onChange("party")} className="input">
                        {[1,2,3,4,5,6,7,8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Notes (optional)">
                    <textarea
                      value={form.notes}
                      onChange={onChange("notes")}
                      rows={3}
                      className="input resize-none"
                      placeholder="Birthday, dietary needs, window seat..."
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 w-full rounded-full bg-verde py-4 text-[12px] uppercase tracking-[0.28em] text-cream transition-colors hover:bg-verde-soft"
                  >
                    Request a table
                  </motion.button>
                  <p className="text-center text-[11px] text-verde/50">
                    We'll confirm by phone or email within the hour.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            {/* shared input styles */}
            <style>{`
              .input {
                width: 100%;
                background: transparent;
                border: 1px solid rgba(82,114,213,0.18);
                border-radius: 9999px;
                padding: 0.9rem 1.25rem;
                color: var(--verde);
                font-family: var(--font-sans);
                font-size: 0.95rem;
                transition: border-color 0.3s, background 0.3s;
              }
              .input:focus { outline: none; border-color: var(--gold); background: rgba(243,236,220,0.6); }
              textarea.input { border-radius: 1.5rem; }
            `}</style>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-verde/60">{label}</span>
      {children}
    </label>
  );
}
