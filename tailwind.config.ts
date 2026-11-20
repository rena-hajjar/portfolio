import type { Config } from "tailwindcss";

// Palette carried over from the original site: lavender + mint + lilac,
// with a few brighter accents so each section has its own colour.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F2FC", // page background (very light lilac)
        lilac: "#E9E6F8",
        lavender: "#ABA6EC",
        periwinkle: "#B7BCF3",
        mint: "#87F4BD",
        mintsoft: "#C9F7E0",
        sky: "#CCEAF7",
        ink: "#201F34",
        inksoft: "#4A4868",
        about: "#7840E5",
        research: "#3B7FD9",
        work: "#6570E6",
        music: "#F29A3A",
        art: "#16B583",
        travel: "#2C3A8F",
        writing: "#E2557F",
      },
      fontFamily: {
        display: ['"Rubik Mono One"', "system-ui", "sans-serif"],
        sans: ['"Rubik Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 4px rgba(32,31,52,.18)",
        soft: "0 10px 30px -12px rgba(32,31,52,.35)",
        lift: "0 18px 40px -14px rgba(32,31,52,.45)",
      },
    },
  },
  plugins: [],
};
export default config;
