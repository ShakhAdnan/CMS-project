"use client"

import type React from "react"

import Image from "next/image"
import HeaderNavigation from "@/components/header-navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

interface CommonLayoutProps {
  children: React.ReactNode
  showHeroSection?: boolean
  heroTitle?: string
  heroTitleAr?: string
  heroDescription?: string
  heroDescriptionAr?: string
}

export default function CommonLayout({
  children,
  showHeroSection = true,
  heroTitle,
  heroTitleAr,
  heroDescription,
  heroDescriptionAr,
}: CommonLayoutProps) {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <HeaderNavigation />

      {showHeroSection && (
        <section
          className={`relative flex items-center justify-center overflow-hidden w-full h-screen ${language === "ar" ? "rtl" : "ltr"}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <Image src="/images/common-bg.jpg" alt="Background" fill className="object-cover w-full h-full" priority />
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
            <div className="container mx-auto px-4 h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl">
                {heroTitle && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {language === "ar" ? heroTitleAr || heroTitle : heroTitle}
                  </h1>
                )}
                {heroDescription && (
                  <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                    {language === "ar" ? heroDescriptionAr || heroDescription : heroDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Page Content */}
      <main>{children}</main>

      <Footer />
    </div>
  )
}
