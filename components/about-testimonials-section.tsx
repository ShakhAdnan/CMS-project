"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const testimonials = [
  {
    id: 1,
    name: "Mohammed Saif",
    nameAr: "محمد سيف",
    position: "CEO/Company",
    positionAr: "الرئيس التنفيذي/الشركة",
    image: "/images/client-testimonial.png",
    testimonial: `"With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered."`,
    testimonialAr: `"بمساعدة الموظفين المضيافين في الصفار وشركاه تمكنت من إنجاز عملي دون أي متاعب. المساعدة التي تلقيتها ساعدتني كثيراً في التغلب على المشاكل التي واجهتها. كنت دائماً على اطلاع بقضيتي ولم تبق استفساراتي بدون إجابة."`,
  },
  {
    id: 2,
    name: "Sarah Al-Mansouri",
    nameAr: "سارة المنصوري",
    position: "Managing Director",
    positionAr: "المدير العام",
    image: "/images/client-testimonial.png",
    testimonial: `"Exceptional legal services with outstanding professionalism. The team provided comprehensive support throughout our complex corporate restructuring. Their expertise and dedication exceeded our expectations."`,
    testimonialAr: `"خدمات قانونية استثنائية مع مهنية متميزة. قدم الفريق دعماً شاملاً خلال إعادة الهيكلة المؤسسية المعقدة. خبرتهم وتفانيهم فاق توقعاتنا."`,
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    position: "Investment Manager",
    positionAr: "مدير الاستثمار",
    image: "/images/client-testimonial.png",
    testimonial: `"Professional and reliable legal partnership that has been instrumental in our business growth. Their deep understanding of commercial law and international regulations is remarkable."`,
    testimonialAr: `"شراكة قانونية مهنية وموثوقة كانت أساسية في نمو أعمالنا. فهمهم العميق للقانون التجاري واللوائح الدولية أمر رائع."`,
  },
];

export default function AboutTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`py-20 bg-[#4b2615] ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === "ar"
              ? "ما يقوله عملاؤنا"
              : "What our clients are saying"}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            {language === "ar"
              ? "يتراوح عملاؤنا من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500. عملاؤنا يتراوحون من المستثمرين الأفراد إلى الشركات المحلية والدولية وكذلك شركات فورتشن 500."
              : "Our clients range from individual investors, to local, international as well as fortune 500 companies.Our clients range from individual investors, to local, international as well as fortune 500 companies."}
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Client Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[374px] h-[374px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={
                  language === "ar"
                    ? currentTestimonial.nameAr
                    : currentTestimonial.name
                }
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="text-white space-y-6 flex flex-col justify-center h-full max-w-lg">
            <div className="relative">
              <p className="text-lg md:text-xl leading-relaxed relative z-10">
                {language === "ar"
                  ? currentTestimonial.testimonialAr
                  : currentTestimonial.testimonial}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-bold mb-2">
                {language === "ar"
                  ? currentTestimonial.nameAr
                  : currentTestimonial.name}
              </h3>
              <p className="text-white/70 text-lg">
                {language === "ar"
                  ? currentTestimonial.positionAr
                  : currentTestimonial.position}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-end mt-12 space-x-4">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white hover:bg-white/90 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-[#4b2615]" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
