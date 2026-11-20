import DeskHero from "@/components/desk/DeskHero";
import SiteHeader from "@/components/SiteHeader";
import { About, Footer, OffTheClock, Research, Travel, Work, Writing } from "@/components/home/Sections";

export default function Home() {
  return (
    <>
      <SiteHeader revealAfter="hero" />
      <main>
        <DeskHero />
        <About />
        <Research />
        <Work />
        <OffTheClock />
        <Travel />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
