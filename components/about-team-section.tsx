"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Bin Hindi",
    nameAr: "أحمد بن هندي",
    position: "Managing Partner",
    positionAr: "الشريك الإداري",
    image: "/images/client-testimonial.png",
    whatsapp: "+971501234567",
    phone: "+971501234567",
    email: "ahmed@binhindi.com",
  },
  {
    id: 2,
    name: "Sarah Al-Mansouri",
    nameAr: "سارة المنصوري",
    position: "Senior Associate",
    positionAr: "شريك أول",
    image: "/images/client-testimonial.png",
    whatsapp: "+971501234568",
    phone: "+971501234568",
    email: "sarah@binhindi.com",
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    nameAr: "محمد الراشد",
    position: "Legal Consultant",
    positionAr: "مستشار قانوني",
    image: "/images/client-testimonial.png",
    whatsapp: "+971501234569",
    phone: "+971501234569",
    email: "mohammed@binhindi.com",
  },
  {
    id: 4,
    name: "Fatima Al-Zahra",
    nameAr: "فاطمة الزهراء",
    position: "Corporate Lawyer",
    positionAr: "محامية شركات",
    image: "/images/client-testimonial.png",
    whatsapp: "+971501234570",
    phone: "+971501234570",
    email: "fatima@binhindi.com",
  },
  {
    id: 5,
    name: "Omar Al-Hashimi",
    nameAr: "عمر الهاشمي",
    position: "Commercial Lawyer",
    positionAr: "محامي تجاري",
    image: "/images/client-testimonial.png",
    whatsapp: "+971501234571",
    phone: "+971501234571",
    email: "omar@binhindi.com",
  },
];

export default function AboutTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleMembers = teamMembers.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section
      id="team-section"
      className={`py-20 bg-gray-100 ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4b2615] mb-6">
            {t("ourTeam")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "ar"
              ? "لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد كان لوريم إيبسوم النص الوهمي المعياري في الصناعة منذ القرن السادس عشر"
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
          </p>
        </div>

        {/* Team Cards Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            style={{ marginLeft: "-60px" }}
          >
            <ChevronLeft className="w-6 h-6 text-[#4b2615]" />
          </button>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[269px] mx-auto"
              >
                {/* Member Photo */}
                <div className="relative w-[269px] h-[184px] bg-[#4b2615]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={language === "ar" ? member.nameAr : member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#4b2615] mb-2">
                    {language === "ar" ? member.nameAr : member.name}
                  </h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                    {language === "ar" ? member.positionAr : member.position}
                  </p>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`https://wa.me/${member.whatsapp.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 text-gray-600 hover:text-[#4b2615] transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            style={{ marginRight: "-60px" }}
          >
            <ChevronRight className="w-6 h-6 text-[#4b2615]" />
          </button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#4b2615]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
