import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({
  kicker,
  title,
  intro,
  color,
  bg,
  aside,
}: {
  kicker: string;
  title: ReactNode;
  intro: string;
  color: string;
  bg: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 md:pb-24 md:pt-40" style={{ background: bg }}>
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full opacity-20" style={{ background: color }} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <Link href="/" className="text-sm font-medium text-inksoft hover:text-ink">
            ← back to the desk
          </Link>
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color }}>
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
            {kicker}
          </div>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            {title}
            <span style={{ color }}>.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-inksoft">{intro}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}
