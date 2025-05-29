"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const aboutSlides = [
  {
    id: 1,
    title: "Lorem Ipsum",
    titleAr: "لوريم إيبسوم",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    descriptionAr:
      "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم النص الوهمي المعياري في الصناعة منذ القرن السادس عشر",
    image: "/placeholder.svg?height=400&width=350",
  },
  {
    id: 2,
    title: "Our Vision",
    titleAr: "رؤيتنا",
    description:
      "We strive to provide exceptional legal services with integrity, professionalism, and dedication to our clients' success in every case we handle.",
    descriptionAr: "نسعى لتقديم خدمات قانونية استثنائية بنزاهة ومهنية وتفان لنجاح عملائنا في كل قضية نتعامل معها",
    image: "/placeholder.svg?height=400&width=350",
  },
  {
    id: 3,
    title: "Our Mission",
    titleAr: "مهمتنا",
    description:
      "To deliver comprehensive legal solutions that protect our clients' interests while maintaining the highest standards of legal excellence and ethical practice.",
    descriptionAr:
      "تقديم حلول قانونية شاملة تحمي مصالح عملائنا مع الحفاظ على أعلى معايير التميز القانوني والممارسة الأخلاقية",
    image: "/placeholder.svg?height=400&width=350",
  },
]

export default function AboutHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language, t } = useLanguage()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentContent = aboutSlides[currentSlide]

  return (
    <section
      className={`relative flex items-center overflow-hidden w-full h-screen ${language === "ar" ? "rtl" : "ltr"}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/common-bg.jpg"
          alt="About Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Linear Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(271.47deg, rgba(75, 38, 21, 0.28) 1.2%, rgba(75, 38, 21, 0.68) 86.38%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-6 relative">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#4b2615] transition-colors hidden lg:block"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Navigation Dots */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 hidden lg:flex">
                {aboutSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-[#4b2615]" : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {language === "ar" ? currentContent.titleAr : currentContent.title}
                </h1>

                <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                  {language === "ar" ? currentContent.descriptionAr : currentContent.description}
                </p>

                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                >
                  {t("readMore")}
                </Button>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-white hover:text-[#4b2615] transition-colors hidden lg:block"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Right Side - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Photo Container with Brown Background */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] bg-[#4b2615] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={currentContent.image || "/placeholder.svg"}
                    alt={language === "ar" ? currentContent.titleAr : currentContent.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 lg:hidden">
        <button onClick={prevSlide} className="text-white hover:text-[#4b2615] transition-colors p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2 items-center">
          {aboutSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#4b2615]" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="text-white hover:text-[#4b2615] transition-colors p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
