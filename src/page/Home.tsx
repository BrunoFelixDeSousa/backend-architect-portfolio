import { Navbar, Footer, HeroSection } from "../components";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}