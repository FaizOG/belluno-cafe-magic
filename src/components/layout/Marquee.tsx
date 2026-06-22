export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-verde/10 bg-[var(--cream-deep)]/40 py-5">
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl text-verde/80"
          >
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
