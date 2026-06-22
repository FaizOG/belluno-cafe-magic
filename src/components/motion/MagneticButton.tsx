import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "gold";
  onClick?: () => void;
};

export function MagneticButton({
  to,
  href,
  children,
  className = "",
  variant = "primary",
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  const handle = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm uppercase tracking-[0.18em] transition-colors";
  const variants = {
    primary: "bg-verde text-cream hover:bg-verde-soft",
    ghost: "border border-verde/30 text-verde hover:bg-verde hover:text-cream",
    gold: "bg-gold text-verde hover:bg-[#cfae74]",
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        →
      </motion.span>
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className="inline-block">
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" onClick={onClick} className="inline-block">
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
