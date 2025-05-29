"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const heroSlides = [
  {
    type: "image",
    src: "/images/common-bg.jpg",
    title: "Professional Legal Services",
    titleAr: "خدمات قانونية احترافية",
    subtitle: "Expert legal consultation and representation",
    subtitleAr: "استشارات قانونية متخصصة وتمثيل قانوني",
  },
  {
    type: "image",
    src: "/images/common-bg.jpg",
    title: "Corporate Law Excellence",
    titleAr: "التميز في القانون التجاري",
    subtitle: "Comprehensive corporate legal solutions",
    subtitleAr: "حلول قانونية تجارية شاملة",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language, t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${language === "ar" ? "rtl" : "ltr"}`}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentHero.src || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {language === "ar" ? currentHero.titleAr : currentHero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {language === "ar" ? currentHero.subtitleAr : currentHero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3">
            {t("getConsultation")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
          >
            {t("learnMore")}
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-amber-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
