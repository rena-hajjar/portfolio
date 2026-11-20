import Link from "next/link";
import {
  community,
  education,
  profile,
  projects,
  research,
  sectionColor,
  travel,
  work,
  writing,
  art,
  music,
} from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import UltrasoundScreen from "./UltrasoundScreen";

const C = {
  about: sectionColor("about"),
  research: sectionColor("research"),
  work: sectionColor("work"),
  music: sectionColor("music"),
  art: sectionColor("art"),
  travel: sectionColor("travel"),
  writing: sectionColor("writing"),
};

function Chip({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="inline-block rounded-full border-2 px-3 py-0.5 text-sm font-medium"
      style={{ borderColor: color, color }}
    >
      {children}
    </span>
  );
}

// ── About ────────────────────────────────────────────────────────────────
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-card transition hover:-translate-y-0.5 hover:bg-ink hover:text-mint"
    >
      {children}
    </a>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-lavender via-periwinkle to-mint px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <p className="font-display text-xl text-ink md:text-2xl">Hello, I&apos;m</p>
          <h2 className="mt-1 font-display text-5xl leading-none text-ink [text-shadow:4px_4px_0_#F4F2FC] md:text-7xl">
            Réna Hajjar
          </h2>
          <Reveal>
            <p className="mt-8 text-xl leading-relaxed text-ink md:text-2xl">{profile.intro}</p>
            <p className="mt-5 text-lg leading-relaxed text-inksoft">{profile.more}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {education.map((e) => (
              <div key={e.degree} className="rounded-xl bg-white/70 px-4 py-2 shadow-card backdrop-blur">
                <div className="text-sm font-semibold">{e.degree}</div>
                <div className="text-xs text-inksoft">
                  {e.org} · {e.date}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.cv} target="_blank" rel="noreferrer" className="rounded-full bg-about px-6 py-2.5 font-display text-sm text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
              RESUME ↓
            </a>
            <SocialIcon href={profile.github} label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
            </SocialIcon>
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>
            </SocialIcon>
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
            </SocialIcon>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-64 md:w-full md:max-w-sm">
          <div className="relative aspect-square rounded-full bg-white/60 p-3 shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt="Réna smiling" className="h-full w-full rounded-full object-cover" />
          </div>
          <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft">
            <span aria-hidden className="text-2xl">👋</span>
            <span className="font-display text-sm">WELCOME!</span>
          </div>
          <div className="absolute -right-2 bottom-8 rounded-2xl bg-ink px-4 py-2 text-sm text-mint shadow-soft">
            MSc @ Queen&apos;s · Perk Lab
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Research ─────────────────────────────────────────────────────────────
export function Research() {
  const r = research.current;
  return (
    <section id="research" className="relative overflow-hidden bg-sky px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mint/40 blur-2xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          kicker="research"
          title="RESEARCH"
          note="Helping surgeons see what's left behind — and the reason there's an ultrasound probe on my desk."
          color={C.research}
        />

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
          <Reveal className="relative rounded-3xl bg-white p-7 shadow-soft md:p-9">
            <span className="text-sm font-semibold uppercase tracking-wider text-research">Now · {r.where}</span>
            <h3 className="mt-2 font-display text-xl md:text-2xl">{r.title}</h3>
            <p className="mt-1 font-medium text-base text-inksoft">{r.supervisor}</p>
            <p className="mt-4 text-lg leading-relaxed">{r.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <Chip key={t} color={C.research}>
                  {t}
                </Chip>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} rotate={2}>
            <UltrasoundScreen />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {research.past.map((p) => (
            <Reveal key={p.title} rotate={-1} className="relative rounded-2xl bg-white p-7 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base md:text-lg">{p.title}</h3>
                <span className="font-medium text-base text-research">{p.date}</span>
              </div>
              <p className="text-sm text-inksoft">{p.where}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-research" />
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          {research.projects.map((p) => (
            <Reveal key={p.title} delay={0.1} rotate={1} className="relative overflow-hidden rounded-2xl bg-white shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt="" className="h-44 w-full object-cover" />
              <div className="p-7">
                <h3 className="font-display text-base md:text-lg">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t} color={C.research}>
                      {t}
                    </Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Work ─────────────────────────────────────────────────────────────────
export function Work() {
  return (
    <section id="work" className="bg-lilac px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="work" title="EXPERIENCE" note="Internships, hackathons and side quests." color={C.work} />

        <ol className="relative space-y-8 border-l-4 border-dashed border-work/40 pl-8 md:pl-12">
          {work.map((w, i) => (
            <li key={w.org + w.date} className="relative">
              <span className="absolute -left-[46px] top-6 h-6 w-6 rounded-full border-4 border-paper bg-work md:-left-[62px]" />
              <Reveal rotate={i % 2 ? 0.8 : -0.8} className="rounded-2xl bg-white p-6 shadow-card transition hover:shadow-soft md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-base md:text-lg">
                    {w.role} <span className="text-work">@ {w.org}</span>
                  </h3>
                  <span className="font-medium text-base text-inksoft">{w.date}</span>
                </div>
                {w.points.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {w.points.map((p) => (
                      <li key={p} className="flex gap-2 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-work" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>

        <h3 className="mt-20 font-display text-2xl">PROJECTS<span className="text-work">.</span></h3>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} rotate={i % 2 ? 1.2 : -1.2}>
              <a href={p.link} target="_blank" rel="noreferrer" className="group relative flex gap-5 rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" className="h-24 w-24 shrink-0 rounded-xl object-cover" />
                <div>
                  <h4 className="font-display text-sm group-hover:text-work">{p.title} ↗</h4>
                  <p className="mt-1 text-sm leading-relaxed text-inksoft">{p.summary}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-20 font-display text-2xl">CLUBS AND VOLUNTEERING<span className="text-work">.</span></h3>
        <div className="mt-6 flex flex-wrap gap-4">
          {community.map((c, i) => (
            <Reveal key={c.org} delay={i * 0.05} rotate={i % 2 ? 2 : -2}>
              <div className="w-56 rounded-2xl bg-white p-4 shadow-card">
                <div className="font-display text-sm leading-snug">{c.org}</div>
                <div className="mt-1 text-sm text-inksoft">{c.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Music & Art teasers ──────────────────────────────────────────────────
export function OffTheClock() {
  const cards = [
    {
      href: "/music/",
      color: C.music,
      bg: "#FFEBD6",
      kicker: "music",
      title: "Songs, strings & covers",
      body: music.intro,
      img: music.photo,
    },
    {
      href: "/art/",
      color: C.art,
      bg: "#C9F7E0",
      kicker: "art",
      title: "Paintings & sketchbook",
      body: art.intro,
      img: art.pieces[1].src,
    },
  ];
  return (
    <section className="bg-gradient-to-b from-periwinkle via-lavender to-lilac px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="off the clock" title="MORE ABOUT ME" note="My art and music have always been a big part of who I am. Each has its own page." color="#201F34" />
        <div className="grid gap-10 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.href} rotate={i ? 1.5 : -1.5}>
              <Link
                href={c.href}
                className="group block overflow-hidden rounded-3xl shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                style={{ background: c.bg }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 -rotate-3 rounded-md px-3 py-1 font-medium text-base text-white" style={{ background: c.color }}>
                    {c.kicker}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-lg">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-inksoft">{c.body}</p>
                  <span className="mt-4 inline-block font-semibold" style={{ color: c.color }}>
                    Open the {c.kicker} page →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Travel ───────────────────────────────────────────────────────────────
export function Travel() {
  const stampColors = ["#F5C04A", "#7840E5", "#16B583", "#8FB6E8", "#E2557F", "#CFC9F6"];
  const slots = travel.length ? travel : Array.from({ length: 6 }, () => null);
  return (
    <section id="travel" className="relative overflow-hidden bg-travel px-5 py-24 text-paper md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[.07]" style={{ backgroundImage: "repeating-radial-gradient(circle at 80% 20%, #fff 0 1px, transparent 1px 28px)" }} />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading kicker="travel" title="TRAVEL" note="Stamps in the passport: places that changed how I see things." color="#87F4BD" light />
        <Reveal className="rounded-3xl bg-[#F4F2FC] p-6 text-ink shadow-lift md:p-10">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {slots.map((t, i) => (
              <div
                key={i}
                className="hover-wiggle grid aspect-[4/3] place-items-center rounded-2xl border-[3px] border-dashed p-3 text-center"
                style={{ borderColor: stampColors[i % stampColors.length], transform: `rotate(${((i % 3) - 1) * 2}deg)` }}
              >
                {t ? (
                  <div>
                    <div className="font-display text-base md:text-lg">{t.place}</div>
                    {t.year && <div className="font-medium text-sm">{t.year}</div>}
                    {t.note && <div className="mt-1 text-sm text-inksoft">{t.note}</div>}
                  </div>
                ) : (
                  <span className="font-medium text-base text-inksoft/70">stamp coming soon</span>
                )}
              </div>
            ))}
          </div>
          {!travel.length && (
            <p className="mt-6 text-center font-medium text-lg text-inksoft">Postcards and photos from my trips are on their way ✈</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ── Writing ──────────────────────────────────────────────────────────────
export function Writing() {
  return (
    <section id="writing" className="bg-lilac px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="writing" title="WRITING" note="Letters from the lab." color={C.writing} />
        <Reveal rotate={-1} className="relative mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#FBE3EC] p-8 shadow-lift md:p-12">
            <svg className="pointer-events-none absolute inset-x-0 top-0 h-28 w-full" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden>
              <path d="M0 0 L50 28 L100 0" fill="none" stroke={C.writing} strokeWidth="0.6" />
            </svg>
            <div className="relative mx-auto mt-10 grid h-16 w-16 place-items-center rounded-full bg-writing font-display text-lg text-[#FBE3EC] shadow-card">R</div>
            <p className="mt-6 text-center font-display text-lg">Substack — coming soon</p>
            <p className="mx-auto mt-3 max-w-lg text-center text-lg leading-relaxed text-inksoft">{writing.blurb}</p>
            {writing.substack ? (
              <div className="mt-6 text-center">
                <a href={writing.substack} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-writing px-6 py-2.5 font-semibold text-white">
                  Read on Substack ↗
                </a>
              </div>
            ) : (
              <p className="mt-6 text-center font-medium text-lg text-writing">sealed until the first post ✉</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-lilac to-lavender px-5 py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-periwinkle shadow-lift md:grid-cols-2">
        <div className="relative grid min-h-56 place-items-center bg-gradient-to-br from-sky via-white to-mint p-10">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            CONTACT ME<span className="text-about">.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
          {[
            ["GITHUB", "rena-hajjar", profile.github],
            ["LINKEDIN", "rena-hajjar", profile.linkedin],
            ["EMAIL", profile.email, `mailto:${profile.email}`],
          ].map(([k, v, h]) => (
            <a key={k} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-baseline gap-3">
              <span className="font-display text-sm text-ink">{k}:</span>
              <span className="text-ink underline decoration-about/0 decoration-2 underline-offset-4 transition group-hover:decoration-about">{v}</span>
            </a>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer" className="mt-4 self-start rounded-full bg-about px-6 py-2.5 font-display text-sm text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
            RESUME ↓
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-sm text-ink/60">© {new Date().getFullYear()} Réna Hajjar · built with Next.js, three.js & a lot of coffee</p>
    </footer>
  );
}
