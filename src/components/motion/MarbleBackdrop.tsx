import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import marble from "@/assets/marble.jpg";

export function MarbleBackdrop({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.img
        src={marble}
        alt=""
        aria-hidden
        style={{ y, scale }}
        className="h-full w-full object-cover opacity-[0.18] mix-blend-multiply"
      />
    </div>
  );
}
