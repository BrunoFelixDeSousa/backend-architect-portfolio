import { Navbar, Footer, HeroSection, AboutSection } from "../components";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  )
}