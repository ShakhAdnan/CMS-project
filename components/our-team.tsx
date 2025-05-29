"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Bin Hindi",
    nameAr: "أحمد بن هندي",
    role: "Managing Partner",
    roleAr: "الشريك الإداري",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in corporate law with over 15 years of experience",
    bioAr: "خبير في القانون التجاري مع أكثر من 15 عامًا من الخبرة",
  },
  {
    id: 2,
    name: "Sarah Al-Mansouri",
    nameAr: "سارة المنصوري",
    role: "Senior Associate",
    roleAr: "شريك أول",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Specializes in international business law and arbitration",
    bioAr: "متخصصة في قانون الأعمال الدولي والتحكيم",
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    nameAr: "محمد الراشد",
    role: "Legal Consultant",
    roleAr: "مستشار قانوني",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in intellectual property and contract law",
    bioAr: "خبير في الملكية الفكرية وقانون العقود",
  },
]

export default function OurTeam() {
  const { language, t } = useLanguage()

  return (
    <section className={`py-20 bg-gray-900 ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t("ourTeam")}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("teamDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={language === "ar" ? member.nameAr : member.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{language === "ar" ? member.nameAr : member.name}</h3>
                <p className="text-amber-400 font-semibold mb-3">{language === "ar" ? member.roleAr : member.role}</p>
                <p className="text-gray-300 text-sm">{language === "ar" ? member.bioAr : member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
