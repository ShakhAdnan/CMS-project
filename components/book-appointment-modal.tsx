"use client"

import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { X, Calendar, User, Phone, MessageSquare, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

interface BookAppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  date: Yup.string().required("Appointment date is required"),
  time: Yup.string().required("Appointment time is required"),
  serviceType: Yup.string().required("Service type is required"),
  message: Yup.string(),
})

const serviceTypes = [
  { value: "legal-consultation", label: "Legal Consultation", labelAr: "استشارة قانونية" },
  { value: "corporate-law", label: "Corporate Law", labelAr: "القانون التجاري" },
  { value: "commercial-law", label: "Commercial Law", labelAr: "القانون التجاري" },
  { value: "arbitration", label: "Arbitration", labelAr: "التحكيم" },
  { value: "intellectual-property", label: "Intellectual Property", labelAr: "الملكية الفكرية" },
  { value: "contracts", label: "Contracts", labelAr: "العقود" },
  { value: "other", label: "Other", labelAr: "أخرى" },
]

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]

export default function BookAppointmentModal({ isOpen, onClose }: BookAppointmentModalProps) {
  const { language } = useLanguage()
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      serviceType: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitStatus("loading")
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // In a real application, you would send this to your backend
        console.log("Appointment booking data:", values)

        setSubmitStatus("success")
        resetForm()
        setTimeout(() => {
          setSubmitStatus("idle")
          onClose()
        }, 2000)
      } catch (error) {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    },
  })

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${language === "ar" ? "rtl" : "ltr"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#4b2615]">{language === "ar" ? "احجز موعد" : "Book Appointment"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-[#4b2615]" />
              {language === "ar" ? "المعلومات الشخصية" : "Personal Information"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "الاسم الأول" : "First Name"} *
                </label>
                <Input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : ""}`}
                  placeholder={language === "ar" ? "أدخل الاسم الأول" : "Enter first name"}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "الاسم الأخير" : "Last Name"} *
                </label>
                <Input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : ""}`}
                  placeholder={language === "ar" ? "أدخل الاسم الأخير" : "Enter last name"}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-[#4b2615]" />
              {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"} *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
                  placeholder={language === "ar" ? "أدخل البريد الإلكتروني" : "Enter email address"}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "رقم الهاتف" : "Phone Number"} *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
                  placeholder={language === "ar" ? "أدخل رقم الهاتف" : "Enter phone number"}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Appointment Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-[#4b2615]" />
              {language === "ar" ? "تفاصيل الموعد" : "Appointment Details"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "التاريخ" : "Date"} *
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min={today}
                  className={`w-full ${formik.touched.date && formik.errors.date ? "border-red-500" : ""}`}
                />
                {formik.touched.date && formik.errors.date && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "ar" ? "الوقت" : "Time"} *
                </label>
                <select
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent ${formik.touched.time && formik.errors.time ? "border-red-500" : ""}`}
                >
                  <option value="">{language === "ar" ? "اختر الوقت" : "Select time"}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {formik.touched.time && formik.errors.time && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.time}</p>
                )}
              </div>
            </div>
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-[#4b2615]" />
              {language === "ar" ? "نوع الخدمة" : "Service Type"} *
            </label>
            <select
              name="serviceType"
              value={formik.values.serviceType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent ${formik.touched.serviceType && formik.errors.serviceType ? "border-red-500" : ""}`}
            >
              <option value="">{language === "ar" ? "اختر نوع الخدمة" : "Select service type"}</option>
              {serviceTypes.map((service) => (
                <option key={service.value} value={service.value}>
                  {language === "ar" ? service.labelAr : service.label}
                </option>
              ))}
            </select>
            {formik.touched.serviceType && formik.errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.serviceType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-[#4b2615]" />
              {language === "ar" ? "رسالة إضافية (اختيارية)" : "Additional Message (Optional)"}
            </label>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent resize-none"
              placeholder={
                language === "ar"
                  ? "أدخل أي تفاصيل إضافية حول موعدك"
                  : "Enter any additional details about your appointment"
              }
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-green-800 text-center">
                {language === "ar"
                  ? "تم حجز الموعد بنجاح! سنتواصل معك قريباً."
                  : "Appointment booked successfully! We'll contact you soon."}
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-800 text-center">
                {language === "ar" ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "An error occurred. Please try again."}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" onClick={onClose} variant="outline" className="px-6 py-2">
              {language === "ar" ? "إلغاء" : "Cancel"}
            </Button>
            <Button
              type="submit"
              disabled={submitStatus === "loading"}
              className="bg-[#4b2615] hover:bg-[#4b2615]/90 text-white px-6 py-2"
            >
              {submitStatus === "loading"
                ? language === "ar"
                  ? "جاري الحجز..."
                  : "Booking..."
                : language === "ar"
                  ? "احجز الموعد"
                  : "Book Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
