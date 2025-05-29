"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const clients = [
  {
    id: 1,
    name: "Emirates Bank",
    nameAr: "بنك الإمارات",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial: "Exceptional legal services with outstanding results",
    testimonialAr: "خدمات قانونية استثنائية مع نتائج متميزة",
  },
  {
    id: 2,
    name: "Dubai Holdings",
    nameAr: "دبي القابضة",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial: "Professional and reliable legal partnership",
    testimonialAr: "شراكة قانونية مهنية وموثوقة",
  },
  {
    id: 3,
    name: "Al-Futtaim Group",
    nameAr: "مجموعة الفطيم",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial: "Trusted legal advisors for complex transactions",
    testimonialAr: "مستشارون قانونيون موثوقون للمعاملات المعقدة",
  },
  {
    id: 4,
    name: "ADNOC",
    nameAr: "أدنوك",
    logo: "/placeholder.svg?height=100&width=200",
    testimonial: "Expert guidance in energy sector regulations",
    testimonialAr: "إرشاد خبير في لوائح قطاع الطاقة",
  },
]

export default function Clients() {
  const { language, t } = useLanguage()

  return (
    <section className={`py-20 bg-black ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t("ourClients")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("clientsDescription")}</p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={language === "ar" ? client.nameAr : client.name}
                width={150}
                height={75}
                className="object-contain filter brightness-75 hover:brightness-100 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.slice(0, 2).map((client) => (
            <div key={client.id} className="bg-gray-900 p-8 rounded-lg">
              <p className="text-gray-300 text-lg mb-6 italic">
                "{language === "ar" ? client.testimonialAr : client.testimonial}"
              </p>
              <div className="flex items-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={language === "ar" ? client.nameAr : client.name}
                  width={100}
                  height={50}
                  className="object-contain filter brightness-75"
                />
                <span className="text-amber-400 font-semibold ml-4">
                  {language === "ar" ? client.nameAr : client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
