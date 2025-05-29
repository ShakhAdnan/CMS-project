"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function LegalConsultationHeroSection() {
  const { language } = useLanguage()

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${language === "ar" ? "rtl" : "ltr"}`}
      style={{
        width: "1400px",
        height: "850px",
        left: "1px",
        maxWidth: "100vw",
        margin: "0 auto",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/common-bg.jpg" alt="Legal Consultation Background" fill className="object-cover" priority />
        {/* Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(271.47deg, rgba(75, 38, 21, 0.28) 1.2%, rgba(75, 38, 21, 0.68) 86.38%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {language === "ar" ? "خدمات الاستشارات القانونية" : "Legal Consultation Services"}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              {language === "ar"
                ? "نقدم استشارات قانونية شاملة ومتخصصة للأفراد والشركات في جميع المجالات القانونية"
                : "We provide comprehensive and specialized legal consultations for individuals and companies in all legal fields"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
