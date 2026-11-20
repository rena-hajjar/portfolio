"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, sections } from "@/content/site";

/**
 * Sticky header. On the home page it stays hidden while the desk is on
 * screen and slides in once you scroll past it.
 */
export default function SiteHeader({ revealAfter }: { revealAfter?: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(!revealAfter);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!revealAfter) return;
    const el = document.getElementById(revealAfter);
    if (!el) return;
    const onScroll = () => setVisible(el.getBoundingClientRect().bottom < 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealAfter]);

  // highlight the section currently on screen (home page)
  useEffect(() => {
    if (pathname.startsWith("/music")) return setActive("music");
    if (pathname.startsWith("/art")) return setActive("art");
    const ids = sections.filter((s) => s.href.startsWith("/#")).map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
        >
          <nav className="mx-auto flex max-w-6xl items-center gap-2 rounded-2xl bg-lavender/90 px-3 py-2 shadow-soft ring-1 ring-white/50 backdrop-blur-md md:gap-4 md:px-4">
            <Link href="/" className="group flex shrink-0 items-center gap-2" aria-label="Home">
              <span className="font-display text-2xl text-ink transition group-hover:text-about">RH</span>
            </Link>

            <ul className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto md:justify-center">
              {sections.map((s) => {
                const on = active === s.id;
                return (
                  <li key={s.id} className="shrink-0">
                    <Link
                      href={s.href}
                      className="relative block rounded-full px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-white/50"
                      style={{ color: on ? "#fff" : undefined }}
                    >
                      {on && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full"
                          style={{ background: s.color }}
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span
                        className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                        style={{ background: on ? "#fff" : s.color }}
                      />
                      {s.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 rounded-full bg-about px-4 py-1.5 font-display text-xs text-white shadow-card transition hover:-translate-y-0.5 sm:block"
            >
              RESUME ↓
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
