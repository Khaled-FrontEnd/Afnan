import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { useTranslation } from "react-i18next";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactPage = ({ links }) => {
  const { t } = useTranslation();
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: t("استفسار عام"),
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const formatPhone = (num) => {
    if (!num) return "";
    return num.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[أفنان - ${t("تواصل")}] ${formData.subject}`,
          message: formData.message,
          redirect: "false",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: t("استفسار عام"),
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-low pt-20 pb-28 hero-pattern">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
          <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-container/10 text-tertiary border border-tertiary-container/20 mb-6">
              <MdVerified className="text-lg" />
              <span className="text-sm font-medium">
                {t("متاحون دائماً لاستفساراتكم")}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              {t("تواصل معنا")}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              {t("يشرفنا مرافقتكم في رحلتكم لتعلم القرآن الكريم والتميز العلمي. فريقنا متاح دائماً لدعمكم والإجابة على استفساراتكم حول التسجيل، المناهج، أو البرامج الأكاديمية.")}
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-16 -mt-16 pb-24 relative z-20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact Form Card */}
            <div
              className="w-full lg:w-3/5 bg-surface rounded-2xl border border-outline-variant p-8 md:p-12"
              style={{ boxShadow: "0 10px 30px -10px rgba(77, 148, 42, 0.08)" }}
            >
              <h2 className="text-3xl font-semibold text-on-surface mb-8">
                {t("أرسل لنا رسالة")}
              </h2>

              {/* Success Message */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-xl text-primary text-center font-medium">
                  {t("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")}
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mb-6 p-4 bg-error/10 border border-error/30 rounded-xl text-error text-center font-medium">
                  {t("❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.")}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">
                      {t("الاسم بالكامل")}
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder={t("الاسم بالكامل")}
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">
                      {t("البريد الإلكتروني")}
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="example@email.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">
                      {t("رقم الهاتف")}
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-right"
                      dir="ltr"
                      placeholder="+20 000 000 0000"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">
                      {t("الموضوع")}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none"
                    >
                      <option>{t("استفسار عام")}</option>
                      <option>{t("التسجيل في الدورات")}</option>
                      <option>{t("الدعم الأكاديمي")}</option>
                      <option>{t("مشكلة تقنية")}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface-variant block px-1">
                    {t("رسالتك")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                    placeholder={t("كيف يمكننا مساعدتك؟")}
                    rows="5"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-xl text-2xl font-semibold flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <span className="text-lg">{t("جاري الإرسال...")}</span>
                      <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>{t("إرسال الرسالة")}</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Cards Column */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="bg-primary text-on-primary rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-semibold mb-8 relative z-10">
                  {t("معلومات الاتصال")}
                </h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">
                        {t("راسلنا عبر البريد")}
                      </p>
                      <a
                        className="text-lg hover:underline transition-all"
                        href={`mailto:${
                          links?.find((link) => link.name == "gmail")?.link
                        }`}
                      >
                        {links?.find((link) => link.name == "gmail")?.link}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">
                        {t("اتصل بنا")}
                      </p>
                      <div className="flex flex-col gap-1">
                        <a
                          className="text-lg hover:underline transition-all"
                          dir="ltr"
                          href={`tel:+2${
                            links?.find((link) => link.name == "phone1")?.link
                          }`}
                        >
                          {formatPhone(
                            links?.find((link) => link.name == "phone1")?.link
                          )}
                        </a>
                        <a
                          className="text-lg hover:underline transition-all"
                          dir="ltr"
                          href={`tel:+2${
                            links?.find((link) => link.name == "phone2")?.link
                          }`}
                        >
                          {formatPhone(
                            links?.find((link) => link.name == "phone2")?.link
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaLocationDot className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">
                        {t("موقعنا")}
                      </p>
                      <p className="text-lg">
                        {t("أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن الكريم طهطا، سوهاج، مصر")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                  <a
                    href={
                      links?.find((link) => link.name == "facebook_page")?.link
                    }
                    className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={
                      links?.find((link) => link.name == "instagram_page")?.link
                    }
                    className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={links?.find((link) => link.name == "youtube")?.link}
                    className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-pattern {
          background-image: radial-gradient(
            circle at 2px 2px,
            #c0cab6 1px,
            transparent 0
          );
          background-size: 32px 32px;
        }
        .bg-primary-fixed-dim\/20 {
          background-color: rgba(141, 218, 103, 0.2);
        }
        .bg-tertiary-container\/10 {
          background-color: rgba(57, 131, 78, 0.1);
        }
        .border-tertiary-container\/20 {
          border-color: rgba(57, 131, 78, 0.2);
        }
        .hover\\:bg-secondary-fixed:hover {
          background-color: #ffdf9a;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;