import CommonLayout from "@/components/common-layout"
import HomeHeroContent from "@/components/home-hero-content"
import AboutTeamSection from "@/components/about-team-section"
import AboutTestimonialsSection from "@/components/about-testimonials-section"

export default function HomePage() {
  return (
    <CommonLayout showHeroSection={false}>
      <HomeHeroContent />
      <AboutTeamSection />
      <AboutTestimonialsSection />
    </CommonLayout>
  )
}
