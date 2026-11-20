import type { ReactNode } from "react";

/**
 * Chunky Rubik Mono One heading with a coloured full stop —
 * the signature style carried over from the original site.
 */
export default function SectionHeading({
  kicker,
  title,
  note,
  color,
  light = false,
}: {
  kicker?: string;
  title: ReactNode;
  note?: string;
  color: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      {kicker && (
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]" style={{ color }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
          {kicker}
        </div>
      )}
      <h2 className={`font-display text-3xl leading-[1.1] md:text-5xl ${light ? "text-paper" : "text-ink"}`}>
        {title}
        <span style={{ color }}>.</span>
      </h2>
      {note && <p className={`mt-4 max-w-2xl text-lg ${light ? "text-paper/80" : "text-inksoft"}`}>{note}</p>}
    </div>
  );
}
