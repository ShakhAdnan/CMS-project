"use client";

import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function LegalConsultationContentSection() {
  const { language } = useLanguage();

  return (
    <section
      className={`py-16 bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-[#4b2615] transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === "ar" ? "العودة" : "Back"}
        </Link>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {language === "ar"
            ? "خدمات الاستشارات القانونية"
            : "Legal Consultation Services"}
        </h2>

        {/* Introduction Paragraph */}
        <p className="text-gray-700 leading-relaxed mb-12 text-base">
          {language === "ar"
            ? "مكتب المحاماة هو واحد من المكاتب القانونية الرائدة التي تقدم خدمات استشارية استثنائية للأفراد والشركات على حد سواء. مهمتنا هي تقديم الدعم القانوني الشامل والمتخصص لتلبية احتياجات عملائنا وتقديم أفضل الحلول القانونية في مختلف القضايا والمجالات القانونية، نقدم خدمات الاستشارات القانونية كما يلي:"
            : "Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients' needs and offer the best legal solutions in various cases and legal fields, we provide our legal consultations services as a follow:"}
        </p>

        {/* General Legal Consultations */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "ar"
              ? "الاستشارات القانونية العامة"
              : "General Legal Consultations"}
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start">
              <div className="w-3 h-3 bg-[#4b2615] rounded-sm mt-2 mr-4 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                {language === "ar"
                  ? "في مكتب المحاماة، نقدم استشارات قانونية شاملة تغطي جميع الجوانب القانونية التي قد يواجهها عملاؤنا في حياتهم اليومية أو أنشطتهم التجارية. هدفنا هو تقديم المشورة القانونية الدقيقة القائمة على فهم عميق للقوانين المحلية والدولية."
                  : "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws."}
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Legal Consultations */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "ar"
              ? "الاستشارات القانونية للشركات"
              : "Corporate Legal Consultations"}
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <div className="w-3 h-3 bg-[#4b2615] rounded-sm mt-2 mr-4 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                {language === "ar"
                  ? "نحن في مكتب المحاماة ندرك أهمية الاستشارات القانونية للشركات في بناء وتعزيز أعمالها."
                  : "We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses."}
              </p>
            </div>

            <div className="ml-7">
              <p className="text-gray-700 mb-3 font-medium">
                {language === "ar"
                  ? "خدماتنا الاستشارية حول:"
                  : "Our advisory services about:"}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "تأسيس وتسجيل الشركات."
                    : "Establishing and registering companies."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "جميع أنواع العقود والاتفاقيات."
                    : "All kinds of contracts and agreements."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "النزاعات التجارية."
                    : "Commercial disputes."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "الامتثال للقوانين واللوائح المحلية والدولية."
                    : "Compliance with local and international laws and regulations."}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Individual Legal Consultations */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {language === "ar"
              ? "الاستشارات القانونية للأفراد"
              : "Individual Legal Consultations"}
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <div className="w-3 h-3 bg-[#4b2615] rounded-sm mt-2 mr-4 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                {language === "ar"
                  ? "يقدم مكتب المحاماة خدمات استشارية مخصصة للأفراد، بما في ذلك:"
                  : "Law Firm offers customized advisory services for individuals, including:"}
              </p>
            </div>

            <div className="ml-7">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "القضايا العائلية مثل الطلاق والنفقة والحضانة."
                    : "Family issues such as divorce, alimony, and custody."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "مسائل العقارات مثل الشراء والبيع وتأجير العقارات."
                    : "Real estate matters like buying, selling, and renting properties."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "قضايا العمل مثل التوظيف والفصل التعسفي."
                    : "Employment issues such as hiring and wrongful termination."}
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">-</span>
                  {language === "ar"
                    ? "القضايا الجنائية والدفاع عن الحقوق الشخصية."
                    : "Criminal cases and defending personal rights."}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-gray-700 leading-relaxed">
          {language === "ar"
            ? "في مكتب المحاماة، نهدف إلى تقديم أفضل الخدمات القانونية لضمان حقوقكم وتقديم الحلول القانونية الفعالة. اتصلوا بنا اليوم لتلقي استشارة قانونية مهنية وشاملة."
            : "At Law Firm, we aim to provide the best legal services to ensure your rights and offer effective legal solutions. Contact us today to receive professional and comprehensive legal consultation."}
        </p>
      </div>
    </section>
  );
}
