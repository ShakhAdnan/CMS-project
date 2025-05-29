"use client"

import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Twitter, Facebook } from "lucide-react"

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

export default function Footer() {
  const { language, t } = useLanguage()
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitStatus("loading")
      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log("Newsletter subscription:", values)

        setSubmitStatus("success")
        resetForm()
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } catch (error) {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    },
  })

  return (
    <footer className={`bg-[#4b2615] text-white ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - empty for spacing */}
          <div className="flex-1"></div>

          {/* Right side - Email subscription and social links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Email Subscription with inline button */}
            <form onSubmit={formik.handleSubmit} className="relative">
              <div className="relative">
                <Input
                  type="email"
                  name="email"
                  placeholder={language === "ar" ? "البريد الإلكتروني" : "Email"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-white text-black border-none rounded-md pl-4 pr-24 py-2 w-80"
                />
                <Button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#4b2615] hover:bg-[#4b2615]/80 text-white px-4 py-1 rounded-md text-sm h-8"
                >
                  {language === "ar" ? "اشترك" : "Subscribe"}
                </Button>
              </div>
            </form>

            {/* Contacts */}
            <span className="text-white font-medium">{language === "ar" ? "جهات الاتصال" : "Contacts"}</span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Error/Success Messages */}
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-300 text-sm mt-2 text-center">{formik.errors.email}</div>
        )}
        {submitStatus === "success" && (
          <div className="text-green-300 text-sm mt-2 text-center">
            {language === "ar" ? "تم الاشتراك بنجاح!" : "Successfully subscribed!"}
          </div>
        )}
        {submitStatus === "error" && (
          <div className="text-red-300 text-sm mt-2 text-center">
            {language === "ar" ? "فشل الاشتراك. يرجى المحاولة مرة أخرى." : "Subscription failed. Please try again."}
          </div>
        )}
      </div>

      {/* Separator Line */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              {language === "ar" ? "من نحن" : "About"}
            </Link>
            <Link href="/strategy" className="text-white hover:text-gray-300 transition-colors">
              {language === "ar" ? "استراتيجيتنا" : "Our Strategy"}
            </Link>
            <Link href="/advantages" className="text-white hover:text-gray-300 transition-colors">
              {language === "ar" ? "مزايانا" : "Our Advantages"}
            </Link>
            <Link href="/social-responsibility" className="text-white hover:text-gray-300 transition-colors">
              {language === "ar" ? "المسؤولية الاجتماعية" : "Social Responsibility"}
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
              {language === "ar" ? "خدماتنا" : "Our Services"}
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-white">
            © 2024 . {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
          </div>
        </div>
      </div>
    </footer>
  )
}
