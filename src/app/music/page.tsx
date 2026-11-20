import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/pages/PageHero";
import Reveal from "@/components/ui/Reveal";
import { Footer } from "@/components/home/Sections";
import { music, sectionColor } from "@/content/site";

export const metadata: Metadata = { title: "Music · Réna Hajjar" };

const sleeves = ["#F29A3A", "#7840E5", "#6570E6", "#16B583", "#3B7FD9", "#E2557F"];

export default function MusicPage() {
  const color = sectionColor("music");
  const slots = music.tracks.length ? music.tracks : Array.from({ length: 6 }, () => null);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="music"
          title="MY MUSIC"
          intro={music.intro}
          color={color}
          bg="linear-gradient(135deg,#FFEBD6,#E9E6F8)"
          aside={
            <div className="relative mx-auto w-72">
              <div className="relative rounded-3xl bg-white p-3 pb-12 shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={music.photo} alt="Réna playing guitar" className="aspect-square w-full rounded-2xl object-cover" />
                <p className="absolute bottom-3 left-0 right-0 text-center font-display text-xs">PRACTICE, PRACTICE</p>
              </div>
            </div>
          }
        />

        <section className="bg-lilac px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl md:text-4xl">THE RECORD SHELF<span className="text-music">.</span></h2>
            <p className="mt-2 text-lg text-inksoft">Recordings and covers, coming soon.</p>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3">
              {slots.map((t, i) => (
                <Reveal key={i} delay={i * 0.05} className="group relative">
                  {/* vinyl peeking out of the sleeve */}
                  <div className="absolute inset-y-[6%] right-[-4%] aspect-square rounded-full bg-[#18161F] transition-transform duration-500 group-hover:translate-x-[18%] group-hover:rotate-180">
                    <div className="absolute inset-[34%] rounded-full" style={{ background: sleeves[i % sleeves.length] }} />
                    <div className="absolute inset-[48%] rounded-full bg-[#18161F]" />
                  </div>
                  <div
                    className="relative grid aspect-square place-items-center rounded-md p-4 text-center shadow-lift"
                    style={{ background: sleeves[i % sleeves.length] }}
                  >
                    {t ? (
                      <div className="text-white">
                        <div className="font-display text-xl font-bold">{t.title}</div>
                        {t.note && <div className="font-medium text-sm">{t.note}</div>}
                        {t.link && (
                          <a href={t.link} target="_blank" rel="noreferrer" className="mt-2 inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ink">
                            Listen ↗
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="font-medium text-lg text-white/90">track {i + 1}<br />coming soon</div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#FFEBD6] to-lilac px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <Reveal rotate={-2} className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl bg-white p-3 shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={music.mural} alt="Painted musical instruments" className="w-full rounded-2xl" />
              </div>
            </Reveal>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">WHERE MUSIC MEETS PAINT<span className="text-music">.</span></h2>
              <p className="mt-4 text-lg leading-relaxed text-inksoft">
                Music shows up in my art a lot, too — see the drums and Hendrix paintings on the art page.
              </p>
              <a href="/art/" className="mt-6 inline-block rounded-full bg-art px-6 py-2.5 font-semibold text-white transition hover:-translate-y-0.5">
                Visit the art page →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
