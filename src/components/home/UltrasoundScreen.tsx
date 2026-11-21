// Decorative ultrasound monitor: a speckled B-mode fan with a sweeping
// beam and a segmentation contour — a nod to the thesis.

function speckle(n: number, seed: number) {
  let s = seed;
  const r = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  const pts: { x: number; y: number; o: number; rr: number }[] = [];
  while (pts.length < n) {
    const a = (r() - 0.5) * 1.1; // angle within fan
    const d = 30 + r() * 200; // depth
    pts.push({ x: 160 + Math.sin(a) * d, y: 18 + Math.cos(a) * d, o: 0.15 + r() * 0.6, rr: 0.6 + r() * 1.6 });
  }
  return pts;
}

const DOTS = speckle(650, 11);

export default function UltrasoundScreen() {
  return (
    <div className="relative rounded-2xl border-[6px] border-[#2A2833] bg-[#0D0C14] p-3 shadow-lift">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8FB6E8]">
        <span>B-mode · L12</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7840E5]" /> live
        </span>
      </div>
      <svg viewBox="0 0 320 250" className="w-full" role="img" aria-label="Stylised ultrasound image">
        <defs>
          <clipPath id="fan">
            <path d="M160 18 L38 230 A230 230 0 0 0 282 230 Z" />
          </clipPath>
          <linearGradient id="beam" x1="0" x2="1">
            <stop offset="0" stopColor="#8FB6E8" stopOpacity="0" />
            <stop offset="0.5" stopColor="#8FB6E8" stopOpacity="0.35" />
            <stop offset="1" stopColor="#8FB6E8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g clipPath="url(#fan)">
          <rect width="320" height="250" fill="#15131E" />
          {/* tissue layers */}
          <path d="M0 70 Q160 55 320 75" stroke="#55536A" strokeWidth="5" fill="none" opacity=".6" />
          <path d="M0 105 Q160 95 320 110" stroke="#3E3C52" strokeWidth="9" fill="none" opacity=".5" />
          {DOTS.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.rr} fill="#D9D6E8" opacity={p.o} />
          ))}
          {/* hypoechoic region (cavity) */}
          <ellipse cx="168" cy="160" rx="46" ry="30" fill="#07060B" opacity=".92" />
          {/* segmentation contour */}
          <path
            className="us-contour"
            d="M124 158 C126 136 150 128 170 129 C196 130 214 142 214 160 C214 178 194 191 168 190 C146 189 123 180 124 158 Z"
            fill="#7840E5"
            fillOpacity=".18"
            stroke="#7840E5"
            strokeWidth="2.5"
            strokeDasharray="5 4"
          />
          {/* sweeping beam */}
          <g className="us-sweep" style={{ transformOrigin: "160px 18px" }}>
            <rect x="148" y="18" width="24" height="240" fill="url(#beam)" />
          </g>
        </g>
        <path d="M160 18 L38 230 A230 230 0 0 0 282 230 Z" fill="none" stroke="#3B7FD9" strokeOpacity=".5" />
        {/* depth ticks */}
        {[60, 100, 140, 180, 220].map((y) => (
          <line key={y} x1="296" x2="304" y1={y} y2={y} stroke="#8FB6E8" strokeOpacity=".6" />
        ))}
      </svg>
    </div>
  );
}
