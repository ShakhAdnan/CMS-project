import CommonLayout from "@/components/common-layout"
import AboutTeamSection from "@/components/about-team-section"
import AboutTestimonialsSection from "@/components/about-testimonials-section"

export default function AboutPage() {
  return (
    <CommonLayout
      heroTitle="About Us"
      heroTitleAr="من نحن"
      heroDescription="Learn more about our law firm, our mission, and our commitment to providing exceptional legal services"
      heroDescriptionAr="تعرف على المزيد حول مكتب المحاماة ومهمتنا والتزامنا بتقديم خدمات قانونية استثنائية"
    >
      <AboutTeamSection />
      <AboutTestimonialsSection />
    </CommonLayout>
  )
}
