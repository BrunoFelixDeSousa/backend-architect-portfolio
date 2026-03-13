import { Navbar, Footer, HeroSection, AboutSection, SkillsSection, ProjectsSection, PhilosophySection, ContactSection } from "../components";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  )
}