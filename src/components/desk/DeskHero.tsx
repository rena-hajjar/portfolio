"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/content/site";
import type { DeskTarget } from "./DeskScene";

const DeskScene = dynamic(() => import("./DeskScene"), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function DeskHero() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const [still, setStill] = useState(false);
  const [dropKey, setDropKey] = useState(0);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());
    const seen = sessionStorage.getItem("desk-dropped") === "1";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // play the drop once per visit; afterwards (or with reduced motion) show it settled
    setStill(reduce || seen);
    try {
      sessionStorage.setItem("desk-dropped", "1");
    } catch {}
    // wait for fonts so the canvas textures draw with the right typefaces
    Promise.all([
      document.fonts.load('40px "Rubik Mono One"'),
      document.fonts.load('600 40px "Rubik Variable"'),
    ])
      .catch(() => {})
      .finally(() => setReady(true));
    const t = setTimeout(() => setHint(true), 2600);
    return () => clearTimeout(t);
  }, []);

  const go = (t: DeskTarget) => {
    if (t === "music") return router.push("/music/");
    if (t === "art") return router.push("/art/");
    document.getElementById(t)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-lavender">
      {ready && webgl && <DeskScene still={still} onSelect={go} dropKey={dropKey} />}

      {ready && !webgl && (
        <div className="flex h-full flex-wrap content-center items-center justify-center gap-4 p-8">
          <h1 className="w-full text-center font-display text-5xl font-bold text-paper">Réna Hajjar</h1>
          {sections.map((s) => (
            <a key={s.id} href={s.href} className="rounded-xl px-5 py-3 font-medium text-lg text-white shadow-lift" style={{ background: s.color }}>
              {s.label}
            </a>
          ))}
        </div>
      )}

      <h1 className="sr-only">Réna Hajjar — researcher, musician, artist, traveller</h1>

      {/* hints */}
      <div className="pointer-events-none absolute inset-x-0 top-5 flex justify-center px-4 md:top-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hint ? 1 : 0, y: hint ? 0 : 8 }}
          className="whitespace-nowrap rounded-full bg-paper/90 px-4 py-1.5 font-medium text-base text-ink shadow-card"
        >
          pick something up off my desk ✦
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex items-end justify-between px-5 md:bottom-7 md:px-8">
        <button
          onClick={() => {
            setStill(false);
            setDropKey((k) => k + 1);
          }}
          className="rounded-full bg-paper/90 px-4 py-2 font-medium text-base text-ink shadow-card transition hover:-rotate-2 hover:bg-paper"
        >
          ↻ drop it again
        </button>
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 rounded-full bg-ink/85 px-5 py-2 text-sm font-medium text-paper shadow-lift transition hover:bg-ink"
        >
          <span className="font-medium text-base leading-none">scroll to explore</span>
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} aria-hidden>
            ↓
          </motion.span>
        </a>
      </div>
    </section>
  );
}
