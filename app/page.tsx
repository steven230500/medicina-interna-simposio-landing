import { HeroSection } from "@/components/hero-section"
import { EventHighlights } from "@/components/event-highlights"
import { PricingSection } from "@/components/pricing-section"
import { LocationSection } from "@/components/location-section"
import { LiveStreamSection } from "@/components/live-stream-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventHighlights />
      <PricingSection />
      <LocationSection />
      <LiveStreamSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
