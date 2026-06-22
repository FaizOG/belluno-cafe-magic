import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { info } from "@/data/info";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-verde text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden>
        <div className="absolute -left-20 top-10 font-display text-[28vw] leading-none">
          Belluno
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-6 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <h3 className="font-display text-5xl leading-[0.95]">
            See you<br />
            <span className="italic text-gold">at the bar.</span>
          </h3>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            A small alpine-inspired cafe in Vesu, Surat. Specialty coffee, slow brunch, evenings on the terrace.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-cream/50">Visit</p>
          <a
            href={info.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-start gap-2 text-sm leading-relaxed text-cream/90 hover:text-gold"
          >
            <MapPin size={14} className="mt-1 shrink-0" />
            <span>
              {info.address}
              <br />
              <span className="text-cream/50 group-hover:text-gold">View on Google Maps →</span>
            </span>
          </a>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-cream/50">Hours</p>
          <ul className="space-y-1.5 text-sm text-cream/80">
            {info.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="text-cream/60">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-cream/50">Follow</p>
          <a
            href={info.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm text-cream/90 hover:text-gold"
          >
            <Instagram size={14} />
            {info.instagramHandle}
          </a>
          <p className="mt-6 text-sm text-cream/70">{info.email}</p>
          <p className="text-sm text-cream/70">{info.phone}</p>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-cream/50 sm:flex-row lg:px-12">
          <span>© {new Date().getFullYear()} Belluno Caffè</span>
          <span>
            <Link to="/menu" className="hover:text-gold">Menu</Link>
            <span className="mx-3">·</span>
            <Link to="/reservations" className="hover:text-gold">Reservations</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
