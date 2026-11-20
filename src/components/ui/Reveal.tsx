"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  rotate = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, rotate: rotate * 0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate * 0.25 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 160, damping: 20, delay }}
    >
      {children}
    </motion.div>
  );
}
