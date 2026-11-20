"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { art } from "@/content/site";


export default function ArtGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const pieces = art.pieces;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % pieces.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + pieces.length) % pieces.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, pieces.length]);

  return (
    <>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {pieces.map((p, i) => {
          const rot = 0;
          return (
            <motion.button
              key={p.src}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 30, rotate: rot * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: rot }}
              whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative mb-8 block w-full break-inside-avoid rounded-2xl bg-white p-3 pb-12 text-left shadow-card hover:shadow-lift"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} width={p.w} height={p.h} loading="lazy" className="h-auto w-full rounded-xl" />
              <span className="absolute bottom-3.5 left-4 font-display text-xs text-ink">{p.title.toUpperCase()}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={pieces[open].title}
          >
            <motion.figure
              key={open}
              initial={{ scale: 0.9, rotate: -3, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="max-h-full max-w-4xl rounded-2xl bg-white p-3 pb-4 shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pieces[open].src} alt={pieces[open].title} className="max-h-[75vh] w-auto rounded-xl object-contain" />
              <figcaption className="mt-3 flex items-center justify-between gap-4 px-1">
                <span className="font-display text-base">{pieces[open].title.toUpperCase()}</span>
                <span className="flex gap-2">
                  <button aria-label="Previous" className="rounded-full border-2 border-ink px-3 py-1 font-bold hover:bg-ink hover:text-paper" onClick={() => setOpen((open - 1 + pieces.length) % pieces.length)}>←</button>
                  <button aria-label="Next" className="rounded-full border-2 border-ink px-3 py-1 font-bold hover:bg-ink hover:text-paper" onClick={() => setOpen((open + 1) % pieces.length)}>→</button>
                  <button aria-label="Close" className="rounded-full bg-ink px-3 py-1 font-bold text-paper" onClick={() => setOpen(null)}>✕</button>
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
