import { Navbar } from "../components";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Footer />
    </div>
  )
}