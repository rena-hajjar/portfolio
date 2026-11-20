import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/pages/PageHero";
import ArtGallery from "@/components/pages/ArtGallery";
import { Footer } from "@/components/home/Sections";
import { art, sectionColor } from "@/content/site";

export const metadata: Metadata = { title: "Art · Réna Hajjar" };

export default function ArtPage() {
  const color = sectionColor("art");
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="art"
          title="MY ART"
          intro={art.intro}
          color={color}
          bg="linear-gradient(135deg,#C9F7E0,#E9E6F8)"
          aside={
            <div className="relative mx-auto hidden h-72 w-72 md:block">
              {[art.pieces[0], art.pieces[2], art.pieces[1]].map((p, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={p.src}
                  src={p.src}
                  alt=""
                  className="absolute w-48 rounded-xl bg-white p-2 shadow-lift"
                  style={{ left: `${i * 40}px`, top: `${[30, 0, 50][i]}px`, transform: `rotate(${[-10, 6, -3][i]}deg)` }}
                />
              ))}
            </div>
          }
        />
        <section className="bg-lilac px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="mb-12 text-lg text-inksoft">Click any piece to take a closer look.</p>
            <ArtGallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
