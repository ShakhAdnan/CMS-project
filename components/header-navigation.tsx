"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import BookAppointmentModal from "@/components/book-appointment-modal";

const services = [
  // Column 1
  {
    id: "legal-consultation",
    name: "Legal Consultation Services",
    nameAr: "خدمات الاستشارات القانونية",
    column: 1,
  },
  {
    id: "foreign-investment",
    name: "Foreign Investment Services",
    nameAr: "خدمات الاستثمار الأجنبي",
    column: 1,
  },
  {
    id: "contracts",
    name: "Contracts",
    nameAr: "العقود",
    column: 1,
  },
  {
    id: "notarization",
    name: "Notarization",
    nameAr: "التوثيق",
    column: 1,
  },
  {
    id: "insurance",
    name: "Insurance",
    nameAr: "التأمين",
    column: 1,
  },
  // Column 2
  {
    id: "defense-cases",
    name: "...and Defense in All Cases",
    nameAr: "...والدفاع في جميع القضايا",
    column: 2,
  },
  {
    id: "banks-financial",
    name: "Banks and Financial Institutions",
    nameAr: "البنوك والمؤسسات المالية",
    column: 2,
  },
  {
    id: "corporate-governance",
    name: "Corporate Governance Services",
    nameAr: "خدمات الحوكمة المؤسسية",
    column: 2,
  },
  {
    id: "companies-liquidation",
    name: "Companies Liquidation",
    nameAr: "تصفية الشركات",
    column: 2,
  },
  {
    id: "internal-regulations",
    name: "Internal Regulations for Companies",
    nameAr: "اللوائح الداخلية للشركات",
    column: 2,
  },
  // Column 3
  {
    id: "services-companies-institutions",
    name: "Services for Companies and Institutions",
    nameAr: "خدمات الشركات والمؤسسات",
    column: 3,
  },
  {
    id: "arbitration",
    name: "Arbitration",
    nameAr: "التحكيم",
    column: 3,
  },
  {
    id: "intellectual-property",
    name: "Intellectual Property",
    nameAr: "الملكية الفكرية",
    column: 3,
  },
  {
    id: "corporate-restructuring",
    name: "Corporate Restructuring and Reorganization",
    nameAr: "إعادة الهيكلة والتنظيم المؤسسي",
    column: 3,
  },
  // Column 4
  {
    id: "establishing-companies",
    name: "Establishing National and Foreign Companies",
    nameAr: "تأسيس الشركات الوطنية والأجنبية",
    column: 4,
  },
  {
    id: "commercial-agencies",
    name: "Commercial Agencies",
    nameAr: "الوكالات التجارية",
    column: 4,
  },
  {
    id: "supporting-vision-2030",
    name: "Supporting Vision 2030",
    nameAr: "دعم رؤية 2030",
    column: 4,
  },
  {
    id: "estates",
    name: "Estates",
    nameAr: "العقارات",
    column: 4,
  },
];

const languages = [
  { code: "en", name: "English", nameNative: "English" },
  { code: "ar", name: "Arabic", nameNative: "العربية" },
];

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isBrownBackground, setIsBrownBackground] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const teamSection = document.getElementById("team-section");
    if (!teamSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBrownBackground(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    observer.observe(teamSection);

    return () => {
      observer.unobserve(teamSection);
    };
  }, []);

  const scrollToTeamSection = () => {
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isBrownBackground ? "bg-[#4a2615]" : "bg-transparent"
        } ${language === "ar" ? "rtl" : "ltr"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-white font-bold text-xl">Logo</div>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                {language === "ar" ? "من نحن" : "About us"}
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors text-sm font-medium"
                >
                  <span>{language === "ar" ? "الخدمات" : "Services"}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isServicesOpen && (
                  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-6xl shadow-2xl z-50">
                    <div className="p-8 bg-[#4a2615]">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 1 */}
                        <div className="space-y-4">
                          {services
                            .filter((service) => service.column === 1)
                            .map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block text-white hover:text-white/70 transition-colors py-2 text-sm"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {language === "ar"
                                  ? service.nameAr
                                  : service.name}
                              </Link>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                          {services
                            .filter((service) => service.column === 2)
                            .map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block text-white hover:text-white/70 transition-colors py-2 text-sm"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {language === "ar"
                                  ? service.nameAr
                                  : service.name}
                              </Link>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-4">
                          {services
                            .filter((service) => service.column === 3)
                            .map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block text-white hover:text-white/70 transition-colors py-2 text-sm"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {language === "ar"
                                  ? service.nameAr
                                  : service.name}
                              </Link>
                            ))}
                        </div>

                        {/* Column 4 */}
                        <div className="space-y-4">
                          {services
                            .filter((service) => service.column === 4)
                            .map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block text-white hover:text-white/70 transition-colors py-2 text-sm"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {language === "ar"
                                  ? service.nameAr
                                  : service.name}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToTeamSection}
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                {language === "ar" ? "فريقنا" : "Our Team"}
              </button>
              <Link
                href="/blogs"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                {language === "ar" ? "المدونة" : "Blogs"}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                {language === "ar" ? "اتصل بنا" : "Contact Us"}
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage?.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as "en" | "ar");
                            setIsLanguageOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                            language === lang.code
                              ? "bg-[#4a2615] text-white hover:bg-[#4a2615]/90"
                              : "text-gray-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lang.name}</span>
                            <span className="text-xs opacity-70">
                              {lang.nameNative}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Book Appointment */}
              <Button
                onClick={() => setIsAppointmentModalOpen(true)}
                className={`border-2 border-white text-white hover:border-white/80 transition-colors text-sm font-medium px-4 py-2 hidden sm:block ${
                  isBrownBackground
                    ? "bg-[#4a2615] hover:bg-[#4a2615]/80"
                    : "bg-transparent hover:bg-white/10"
                }`}
              >
                {language === "ar" ? "احجز موعد" : "Book Appointment"}
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`lg:hidden py-4 border-t border-white/20 ${
                isBrownBackground ? "bg-[#4a2615]" : "bg-transparent"
              }`}
            >
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {language === "ar" ? "من نحن" : "About us"}
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {language === "ar" ? "الخدمات" : "Services"}
                </Link>
                <button
                  onClick={() => {
                    scrollToTeamSection();
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-white/80 transition-colors text-left"
                >
                  {language === "ar" ? "فريقنا" : "Our Team"}
                </button>
                <Link
                  href="/blogs"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {language === "ar" ? "المدونة" : "Blogs"}
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {language === "ar" ? "اتصل بنا" : "Contact Us"}
                </Link>

                {/* Mobile Language Selector */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-white text-sm font-medium mb-2 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    {language === "ar" ? "اللغة" : "Language"}
                  </div>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as "en" | "ar");
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          language === lang.code
                            ? "bg-white text-[#4a2615] font-medium"
                            : "text-white hover:text-white/80"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{lang.name}</span>
                          <span className="text-xs opacity-70">
                            {lang.nameNative}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => {
                    setIsAppointmentModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className={`border-2 border-white text-white hover:border-white/80 w-full ${
                    isBrownBackground
                      ? "bg-[#4a2615] hover:bg-[#4a2615]/80"
                      : "bg-transparent hover:bg-white/10"
                  }`}
                >
                  {language === "ar" ? "احجز موعد" : "Book Appointment"}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Book Appointment Modal */}
      <BookAppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}
