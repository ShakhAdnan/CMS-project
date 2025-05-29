import CommonLayout from "@/components/common-layout"
import LegalConsultationContentSection from "@/components/legal-consultation-content-section"

export default function LegalConsultationPage() {
  return (
    <CommonLayout
      heroTitle="Legal Consultation Services"
      heroTitleAr="خدمات الاستشارات القانونية"
      heroDescription="We provide comprehensive and specialized legal consultations for individuals and companies in all legal fields"
      heroDescriptionAr="نقدم استشارات قانونية شاملة ومتخصصة للأفراد والشركات في جميع المجالات القانونية"
    >
      <LegalConsultationContentSection />
    </CommonLayout>
  )
}
