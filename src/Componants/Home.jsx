import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaStar,
  FaClock,
  FaChevronLeft,
  FaQuoteLeft,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdMenuBook, MdHome, MdSchedule, MdArrowBack } from "react-icons/md";
import { supabase } from "../utils/supabase";
import { useTranslation } from "react-i18next";

const Home = ({ links }) => {
  useEffect(() => {
    // العنوان
    document.title = "أفنان - أكاديمية تعليم القرآن والعلوم الإسلامية أونلاين";

    // الوصف
    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta(
      "description",
      "تعلم القرآن الكريم والعلوم الإسلامية مع أفضل المعلمين أونلاين في أكاديمية أفنان"
    );
    setMeta("og:title", "أفنان - أكاديمية تعليم إسلامي", true);
    setMeta(
      "og:description",
      "تعلم القرآن الكريم والعلوم الإسلامية أونلاين",
      true
    );
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://afnanquran.com/", true);

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://afnanquran.com/");
  }, []);

  const { t } = useTranslation();

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = "scale(0.98)";
  };
  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = "";
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const whatsapp = links?.find((item) => item?.name === "whatsapp")?.link;

  return (
    <div className="text-on-surface">
      {/* Header */}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 md:pt-2 pb-2 md:pb-32 ">
          <div className="absolute inset-0 z-0" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <span className="inline-block bg-primary-container text-center text-on-primary-container px-4 py-1 rounded-full font-label-md text-label-md mb-6">
                {t(
                  "مرحبًا بكم في أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن فى شهر إن شاء الله تعالى"
                )}
              </span>
              <h2 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                {t("للشيخ: محمد حامد مدني إسماعيل")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                {t(
                  "مؤسس الأكاديمية وخبير تعليم تجويد القرآن الكريم للأطفال وللمبتدئين من كل الأعمار ومؤلف منظومة أفنان لتعليم الأطفال أحكام تجويد القرآن في شهر واحد إن شاء الله تعالى."
                )}
              </p>
              <div className="flex flex-wrap gap-4 justify-center ">
                <button
                  onClick={() =>
                    window.open(
                      `${whatsapp}?text=${encodeURIComponent(
                        t("نظام الدراسه")
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <MdMenuBook className="text-xl" />
                  {t("نبذة عن نظام الدراسة بالأكاديمية")}
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `${whatsapp}?text=${encodeURIComponent(t("إلحاق ابني "))}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  {t("الحق طفلك بحلقات الأطفال")}
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `${whatsapp}?text=${encodeURIComponent(
                        t("اريد الالتحاق بحلقات الكبار للإناث")
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  {t("الالتحاق بحلقات الكبار ( إناث )")}
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `${whatsapp}?text=${encodeURIComponent(
                        t("اريد الالتحاق بحلقات الكبار للذكور")
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="text-xl" />
                  {t("الالتحاق بحلقات الكبار ( ذكور )")}
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center md:mt-12">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
                <iframe
                  height="250px"
                  width="100%"
                  src="https://www.youtube.com/embed/3ls03mOs-mM?si=iT8ETp34P4vUR1uQ?autoplay=0&controls=1"
                  title={t("فيديو تعريفي لأكاديمية أفنان")}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-headline-md text-headline-md text-center">
                    {t(
                      "منظومة أفنان لتعليم الأطفال أحكام تجويد القرآن (المستويات الثلاثه)"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="md:py-20 overflow-hidden py-10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-70 md:w-5/12 relative hidden md:block">
                <div className="w-full aspect-square bg-primary/10 rounded-full absolute -top-8 -right-8 -z-10 animate-pulse" />
                <div className="bg-white p-4 rounded-3xl shadow-xl rotate-3">
                  <img
                    className="rounded-2xl w-full h-full object-cover"
                    src="./panner.png"
                    alt={t("قاعة دراسية إسلامية حديثة")}
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-6">
                  {t("مراحل الدراسة بالأكاديمية")}
                </h3>
                <ul className="space-y-4 mb-1">
                  <li className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-1 rounded-full">
                      <FaCheck className="text-primary" />
                    </span>
                    <span className="font-body-md text-body-md">
                      {t("التقديم")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-1 rounded-full">
                      <FaCheck className="text-primary" />
                    </span>
                    <span className="font-body-md text-body-md">
                      {t("الدراسة يوميا ولمدة شهر كامل")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-1 rounded-full">
                      <FaCheck className="text-primary" />
                    </span>
                    <span className="font-body-md text-body-md">
                      {t("فترة مراجعة ( أسبوع أو عشرة أيام )")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-1 rounded-full">
                      <FaCheck className="text-primary" />
                    </span>
                    <span className="font-body-md text-body-md">
                      {t("امتحان ( نظري وعملي )")}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary bg-primary/10 p-1 rounded-full">
                      <FaCheck className="text-primary" />
                    </span>
                    <span className="font-body-md text-body-md">
                      {t("إجازة ( من الناظم في منظومة أفنان )")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 pb-3">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display-lg text-display-lg text-on-primary mb-6">
                  {t("لا تتررد وألحق ابنك او ابنتك فورا بالحلقات")}
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">
                  {t(
                    "وانضم إلى أكاديمية أفنان وألحق ابنك فورا بدورة سريعة ومضغوطة ومكثفه ولمدة شهر واحد إن شاء الله تعالى."
                  )}
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={() =>
                      window.open(
                        links?.find(
                          (item) => item?.name === "youtube_kids_girls_playlist"
                        )?.link
                      )
                    }
                    className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 justify-center"
                  >
                    <FaYoutube className="text-xl" />
                    {t("حلقات الأطفال (إناث)")}
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        links?.find(
                          (item) => item?.name === "youtube_kids_boys_playlist"
                        )?.link
                      )
                    }
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 justify-center"
                  >
                    <FaYoutube className="text-xl" />
                    {t("حلقات الأطفال (ذكور)")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
