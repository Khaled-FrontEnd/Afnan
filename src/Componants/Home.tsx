import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { IoMdHome } from "react-icons/io";
// import { MdMenuBook } from "react-icons/md";

const Home: React.FC = () => {
  // تأثير النقر على البطاقات
  useEffect(() => {
    const cards = document.querySelectorAll(".bento-card");

    const handleMouseDown = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = "scale(0.98)";
    };

    const handleMouseUp = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = "";
    };

    cards.forEach((card) => {
      card.addEventListener("mousedown", handleMouseDown);
      card.addEventListener("mouseup", handleMouseUp);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousedown", handleMouseDown);
        card.removeEventListener("mouseup", handleMouseUp);
      });
    };
  }, []);

  return (
    <div className="text-on-surface">
      {/* Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 md:pt-2 pb-2 md:pb-32 ">
          <div className="absolute inset-0 z-0" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <span className="inline-block bg-primary-container text-center text-on-primary-container px-4 py-1 rounded-full font-label-md text-label-md mb-6">
                مرحبًا بكم في أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن
                فى شهر إن شاء الله تعالى
              </span>
              <h2 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                للشيخ: محمد حامد مدني إسماعيل
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                مؤسس الأكاديمية وخبير تعليم تجويد القرآن الكريم للأطفال
                وللمبتدئين من كل الأعمار ومؤلف منظومة أفنان لتعليم الأطفال أحكام
                تجويد القرآن في شهر واحد إن شاء الله تعالى.
              </p>
              {/* <h2 className="font-display-lg text-center  text-display-lg text-primary mb-6 leading-tight">
                نبذة عن نظام الدراسة بالأكاديمية
              </h2> */}
              <div className="flex flex-wrap gap-4 justify-center ">
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "نظام الدراسه"
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  {/* <span className="material-symbols-outlined">menu_book</span> */}
                  نبذة عن نظام الدراسة بالأكاديمية
                </button>
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "اريد الالتحاق بحلقات الأطفال"
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  {/* <span className="material-symbols-outlined">menu_book</span> */}
                  الحق طفلك بحلقات الأطفال
                </button>
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "اريد الالتحاق بحلقات الكبار"
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  {` الالتحاق بحلقات الكبار ( إناث )`}
                </button>
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "اريد الالتحاق بحلقات الكبار"
                      )}`
                    )
                  }
                  className="border-2 cursor-pointer border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  {` الالتحاق بحلقات الكبار ( ذكور )`}
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center md:mt-12">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
                <iframe
                  height={"250px"}
                  width={"100%"}
                  src="./video.mp4"
                  title="منظومة أفنان لتعليم الأطفال تجويد القرآن (فى شهر واحد إن شاء الله تعالى)  واتس المؤلف 00201129059622"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-headline-md text-headline-md text-center">
                   منظومة أفنان لتعليم الأطفال أحكام تجويد القرآن
                   (المستويات الثلاثه)
                  </p>
                  {/* <p className="text-secondary-fixed-dim font-label-md text-label-md">
                    مؤسس ومشرف الأكاديمية
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        {/* <section className="py-16 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface p-8 rounded-3xl bento-card text-center transition-all duration-300 ease-in-out border border-primary/10 hover:-translate-y-1 hover:border-primary hover:shadow-lg cursor-pointer"
                >
                  <div
                    className={`${stat.colorClass} font-display-lg text-display-lg mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-label-md text-label-md text-on-surface-variant">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

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
                    alt="قاعة دراسية إسلامية حديثة"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-6">
                  مراحل الدراسة بالأكاديمية
                </h3>
                {/* <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                  تسعى أكاديمية الشيخ محمد حامد مدني إلى أن تكون المنارة الرائدة
                  في تعليم القرآن الكريم والعلوم الإسلامية. نحن نؤمن بأن التعليم
                  يجب أن يكون متاحاً للجميع، لذا صممنا برامجنا لتناسب مختلف
                  الأعمار والمستويات.
                </p> */}
                <ul className="space-y-4 mb-1">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">التقديم</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">
                      الدراسة يوميا ولمدة شهر كامل
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">
                      فترة مراجعة ( أسبوع أو عشرة أيام )
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">
                      امتحان ( نظري وعملي )
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">
                      إجازة ( من الناظم في منظومة أفنان )
                    </span>
                  </li>
                </ul>
                {/* <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  اكتشف المزيد عن منهجنا
                  <span className="material-symbols-outlined">arrow_back</span>
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Lessons Section */}
        {/* <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex justify-between items-end">
            <div>
              <h3 className="font-headline-lg text-headline-lg text-primary text-4xl">
                الدروس
              </h3>
               <p className="font-body-md text-body-md text-on-surface-variant">
                اختر المسار التعليمي الذي يناسب تطلعاتك
              </p> 
            </div>
            <button className="text-on-surface-variant flex items-center gap-2 hover:gap-4 transition-all font-label-md text-label-md border-b border-text-on-surface-variant pb-1">
              عرض جميع الدروس
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      src={lesson.image}
                      alt={lesson.imageAlt}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`${lesson.levelClass} px-3 py-1 rounded-full text-xs font-bold`}
                      >
                        {lesson.level}
                      </span>
                      <span className="text-secondary font-bold">
                        {lesson.rating.toFixed(1)}{" "}
                        <span
                          className="material-symbols-outlined align-middle text-sm"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      </span>
                    </div>
                    <h4 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">
                      {lesson.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      {lesson.description}
                    </p>
                    <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">
                          schedule
                        </span>
                        <span className="text-sm">{lesson.duration}</span>
                      </div>
                      <button className="bg-surface-container-high p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined">
                          chevron_left
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-10 pb-3">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-display-lg text-display-lg text-on-primary mb-6">
                  لا تتررد وألحق ابنك او ابنتك فورا بالحلقات
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">
                  وانضم إلى أكاديمية أفنان وألحق ابنك فورا بدورة سريعة ومضغوطة
                  ومكثفه ولمدة شهر واحد إن شاء الله تعالى.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={() =>
                      open(
                        `https://youtube.com/playlist?list=PLtF30SVt7kmjemykrUKgg5eTE7ENQhytR&si=IJlB0TQGF_bdgStU`
                      )
                    }
                    className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
                  >
                    حلقات الأطفال (إناث){" "}
                  </button>
                  <button
                    onClick={() =>
                      open(
                        `https://youtube.com/playlist?list=PLtF30SVt7kmijEnQQe1P_kyUxFt7PaBai&si=-A9EVg8LMSkbswsG`
                      )
                    }
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    حلقات الأطفال (ذكور){" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-24 bg-surface-container-highest relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
            <div className="text-center mb-16">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
                قصص نجاح طلابنا
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                نفخر بكوننا جزءاً من رحلة آلاف الطلاب حول العالم في طلب العلم
                النافع.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-surface p-10 rounded-[2.5rem] shadow-sm border border-outline-variant relative"
                >
                  <span
                    className="material-symbols-outlined text-primary-container absolute top-6 right-8 opacity-20 text-6xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    format_quote
                  </span>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-secondary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${testimonial.avatarClass} flex items-center justify-center font-bold`}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-label-md text-label-md font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}

      {/* Mobile Bottom Navigation */}
      <Footer />
    </div>
  );
};

export default Home;
