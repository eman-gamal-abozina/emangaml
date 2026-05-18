import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/portfolio/AmbientBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { BentoGrid } from "@/components/portfolio/BentoGrid";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <CursorGlow />
      <Nav />
      <Hero />
      <BentoGrid />
      <Footer />
    </main>
  );
}
