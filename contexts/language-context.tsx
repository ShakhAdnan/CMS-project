"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    aboutUs: "About Us",
    services: "Services",
    ourTeam: "Our Team",
    blogs: "Blogs",
    contactUs: "Contact Us",
    bookAppointment: "Book Appointment",
    getConsultation: "Get Consultation",
    learnMore: "Learn More",
    teamDescription: "Meet our experienced legal professionals dedicated to providing exceptional service.",
    ourClients: "Our Clients",
    clientsDescription: "Trusted by leading organizations across various industries.",
    quickLinks: "Quick Links",
    newsletter: "Newsletter",
    newsletterDescription: "Subscribe to receive legal updates and insights.",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    subscribing: "Subscribing...",
    subscribeSuccess: "Successfully subscribed!",
    subscribeError: "Subscription failed. Please try again.",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    corporateLaw: "Corporate Law",
    commercialLaw: "Commercial Law",
    arbitration: "Arbitration",
    intellectualProperty: "Intellectual Property",
    footerDescription:
      "Professional legal services with expertise in corporate law, commercial disputes, and international business.",
    readMore: "Read More",
  },
  ar: {
    aboutUs: "من نحن",
    services: "الخدمات",
    ourTeam: "فريقنا",
    blogs: "المدونة",
    contactUs: "اتصل بنا",
    bookAppointment: "احجز موعد",
    getConsultation: "احصل على استشارة",
    learnMore: "اعرف المزيد",
    teamDescription: "تعرف على فريقنا من المحترفين القانونيين المتخصصين في تقديم خدمات استثنائية.",
    ourClients: "عملاؤنا",
    clientsDescription: "موثوق من قبل المؤسسات الرائدة في مختلف الصناعات.",
    quickLinks: "روابط سريعة",
    newsletter: "النشرة الإخبارية",
    newsletterDescription: "اشترك لتلقي التحديثات والرؤى القانونية.",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    subscribing: "جاري الاشتراك...",
    subscribeSuccess: "تم الاشتراك بنجاح!",
    subscribeError: "فشل الاشتراك. يرجى المحاولة مرة أخرى.",
    allRightsReserved: "جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    corporateLaw: "القانون التجاري",
    commercialLaw: "القانون التجاري",
    arbitration: "التحكيم",
    intellectualProperty: "الملكية الفكرية",
    footerDescription: "خدمات قانونية احترافية مع خبرة في القانون التجاري والنزاعات التجارية والأعمال الدولية.",
    readMore: "اقرأ المزيد",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
