import React from 'react';
import {
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
  FaBookOpen,
  FaGraduationCap,
  FaHandsHelping,
  FaPaperPlane,
  FaBars,
  FaMapPin,
  FaArrowRight,
  FaUser,
  FaPhoneAlt,
  FaComment,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdVerified, MdMenuBook, MdSchool, MdVolunteerActivism } from 'react-icons/md';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface-container-low pt-20 pb-28 hero-pattern">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
          <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-container/10 text-tertiary border border-tertiary-container/20 mb-6">
              <MdVerified className="text-lg" />
              <span className="text-sm font-medium">متاحون دائماً لاستفساراتكم</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">تواصل معنا</h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              يشرفنا مرافقتكم في رحلتكم لتعلم القرآن الكريم والتميز العلمي. فريقنا متاح دائماً لدعمكم والإجابة على استفساراتكم حول التسجيل، المناهج، أو البرامج الأكاديمية.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-16 -mt-16 pb-24 relative z-20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact Form Card */}
            <div className="w-full lg:w-3/5 bg-surface rounded-2xl border border-outline-variant p-8 md:p-12" style={{ boxShadow: '0 10px 30px -10px rgba(77, 148, 42, 0.08)' }}>
              <h2 className="text-3xl font-semibold text-on-surface mb-8">أرسل لنا رسالة</h2>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('تم إرسال الرسالة بنجاح!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">الاسم بالكامل</label>
                    <input
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="الاسم بالكامل"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">البريد الإلكتروني</label>
                    <input
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="example@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">رقم الهاتف</label>
                    <input
                      className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-right"
                      dir="ltr"
                      placeholder="+20 000 000 0000"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant block px-1">الموضوع</label>
                    <select className="w-full h-14 bg-surface-container-lowest border border-outline-variant rounded-xl px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none">
                      <option>استفسار عام</option>
                      <option>التسجيل في الدورات</option>
                      <option>الدعم الأكاديمي</option>
                      <option>مشكلة تقنية</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface-variant block px-1">رسالتك</label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                    rows="5"
                  ></textarea>
                </div>
                <button
                  className="w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-xl text-2xl font-semibold flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98]"
                  type="submit"
                >
                  <span>إرسال الرسالة</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Info Cards Column */}
            <div className="w-full lg:w-2/5 space-y-6">
              {/* Direct Contact Card */}
              <div className="bg-primary text-on-primary rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-semibold mb-8 relative z-10">معلومات الاتصال</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">راسلنا عبر البريد</p>
                      <a className="text-lg hover:underline transition-all" href="mailto:mhmedhamed90000@gmail.com">mhmedhamed90000@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">اتصل بنا</p>
                      <div className="flex flex-col gap-1">
                        <a className="text-lg hover:underline transition-all" dir="ltr" href="tel:+201011265776">+20 101 126 5776</a>
                        <a className="text-lg hover:underline transition-all" dir="ltr" href="tel:+201129059622">+20 112 905 9622</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaLocationDot className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/70 mb-1">موقعنا</p>
                      <p className="text-lg">أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن الكريم طهطا ,سوهاج ,مصر</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 relative z-10">
                  <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary-fixed transition-all">
                    <FaYoutube />
                  </a>
                </div>
              </div>

              {/* Map/Visual Card */}
              {/* <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden h-64  relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSW8PPW9mpHUDMmR8m72rP7B1A12ouIdg5m7ock-658ZBHrHkxlOFvwBDGwMDMtAdsp0xKCFNhyW2Df3xuXpZsyAB7YCfFYwT7xXVLyrJjMVMnNbx8ZkXwvbJf_ctWorTb-lxBc_vVF_E125KqVKOMEIIGWG-Dexo-J0sjIg8N6fg9SoJnqHnbzNfD9_dYUYzknu2YyJgoZINUqcdc8qqbbKm6VzcljHS9biXxSuzDWOHr6SkTTjk072kJcr9RDeJXUjBIkVofWw')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <button className="w-full bg-white text-on-surface py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-all">
                    <FaMapPin />
                    الحصول على الاتجاهات
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Academic Support Section */}
        {/* <section className="bg-surface-container-highest/50 py-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
            <h3 className="text-3xl font-semibold text-primary mb-12">كيف يمكننا مساعدتكم أكثر؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface rounded-2xl border border-outline-variant hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <MdMenuBook className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">البرامج الأكاديمية</h4>
                <p className="text-base text-on-surface-variant mb-6">اكتشف مساراتنا المتخصصة في التلاوة، الحفظ، والعلوم الشرعية.</p>
                <a href="#" className="text-primary text-sm font-medium flex items-center justify-center gap-2 hover:underline">
                  عرض الدليل
                  <FaArrowLeft className="text-sm" />
                </a>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-outline-variant hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <MdSchool className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">معلومات المنح الدراسية</h4>
                <p className="text-base text-on-surface-variant mb-6">تعرف على برامج الدعم المالي وفرص الرعاية للطلاب المتميزين.</p>
                <a href="#" className="text-primary text-sm font-medium flex items-center justify-center gap-2 hover:underline">
                  اقرأ المزيد
                  <FaArrowLeft className="text-sm" />
                </a>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-outline-variant hover:border-primary transition-all group">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <MdVolunteerActivism className="text-3xl" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">دعم رسالتنا</h4>
                <p className="text-base text-on-surface-variant mb-6">ساهم في مستقبل التعليم الإسلامي من خلال برامج التبرعات المجتمعية.</p>
                <a href="#" className="text-primary text-sm font-medium flex items-center justify-center gap-2 hover:underline">
                  تقديم تبرع
                  <FaArrowLeft className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        .hero-pattern {
          background-image: radial-gradient(circle at 2px 2px, #c0cab6 1px, transparent 0);
          background-size: 32px 32px;
        }
        .bg-primary-fixed-dim/20 {
          background-color: rgba(141, 218, 103, 0.2);
        }
        .bg-tertiary-container/10 {
          background-color: rgba(57, 131, 78, 0.1);
        }
        .border-tertiary-container/20 {
          border-color: rgba(57, 131, 78, 0.2);
        }
        .hover\\:bg-secondary-fixed:hover {
          background-color: #ffdf9a;
        }
        .text-secondary-fixed {
          color: #ffdf9a;
        }
        .bg-surface-container-highest/50 {
          background-color: rgba(225, 227, 225, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ContactPage;