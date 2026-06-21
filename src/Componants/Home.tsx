import React, { useState, useEffect } from "react";

// Types
interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface Stat {
  value: string;
  label: string;
  colorClass: string;
}

interface Lesson {
  image: string;
  imageAlt: string;
  level: string;
  levelClass: string;
  rating: number;
  title: string;
  description: string;
  duration: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  avatarClass: string;
}

interface MobileNavItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  filled?: boolean;
}

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // بيانات التنقل
  const navLinks: NavLink[] = [
    { label: "الرئيسية", href: "#", active: true },
    { label: "الدروس", href: "#" },
    { label: "عن الأكاديمية", href: "#" },
    { label: "تواصل معنا", href: "#" },
  ];

  // بيانات الإحصاءات
  const stats: Stat[] = [
    { value: "١٥٠٠+", label: "طالب نشط", colorClass: "text-primary" },
    { value: "٤٠+", label: "مدرس مؤهل", colorClass: "text-secondary" },
    { value: "٩٨٪", label: "نسبة الرضا", colorClass: "text-tertiary" },
    { value: "١٠٠+", label: "دورة متخصصة", colorClass: "text-primary" },
  ];

  // بيانات الدورات
  const lessons: Lesson[] = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVO5sh158kUF0IqFWfQ_gWJ8O-2d91Xl6Mcd175fmsAKa60xbGIlGukHqxD3MDM7God9QF7jU2j1kU-E2f_8WVTqi8YffyAWPJp_ckd_s-uxjDSWIs5wP_FJLRwfzUNbu4bheomOkLB2MJrky7iW4AuSwwbC7u103QWHo4wI8A8FsRtaJ90eAfh48COKWvTJYPKxbU8F3nJhEVwK4OTod8LmkeX1e84giQubIbatdpWVcwZcdwkbA_HS-kZqEuta8DDnkpB6kNEQ",
      imageAlt: "قرآن كريم بتجليد ذهبي",
      level: "للمبتدئين",
      levelClass: "bg-secondary-container text-on-secondary-container",
      rating: 4.9,
      title: "درس النون الساكنه والتنوين",
      description: "وصف درس النون الساكنه والتنوين",
      duration: "40:00",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVO5sh158kUF0IqFWfQ_gWJ8O-2d91Xl6Mcd175fmsAKa60xbGIlGukHqxD3MDM7God9QF7jU2j1kU-E2f_8WVTqi8YffyAWPJp_ckd_s-uxjDSWIs5wP_FJLRwfzUNbu4bheomOkLB2MJrky7iW4AuSwwbC7u103QWHo4wI8A8FsRtaJ90eAfh48COKWvTJYPKxbU8F3nJhEVwK4OTod8LmkeX1e84giQubIbatdpWVcwZcdwkbA_HS-kZqEuta8DDnkpB6kNEQ",
      imageAlt: "حروف عربية فنية",
      level: "متوسط",
      levelClass: "bg-tertiary-fixed text-on-tertiary-fixed",
      rating: 5.0,
      title: "درس النون الساكنه والتنوين",
      description: "وصف درس النون الساكنه والتنوين",
      duration: "40:00",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVO5sh158kUF0IqFWfQ_gWJ8O-2d91Xl6Mcd175fmsAKa60xbGIlGukHqxD3MDM7God9QF7jU2j1kU-E2f_8WVTqi8YffyAWPJp_ckd_s-uxjDSWIs5wP_FJLRwfzUNbu4bheomOkLB2MJrky7iW4AuSwwbC7u103QWHo4wI8A8FsRtaJ90eAfh48COKWvTJYPKxbU8F3nJhEVwK4OTod8LmkeX1e84giQubIbatdpWVcwZcdwkbA_HS-kZqEuta8DDnkpB6kNEQ",

      imageAlt: "طفل يتعلم القرآن",
      level: "للأطفال",
      levelClass: "bg-primary-container text-on-primary-container",
      rating: 4.8,
      title: "درس النون الساكنه والتنوين",
      description: "وصف درس النون الساكنه والتنوين",
      duration: "40:00",
    },
  ];

  // بيانات الشهادات
  const testimonials: Testimonial[] = [
    {
      quote:
        "لقد وجدت في هذه الأكاديمية ما كنت أبحث عنه، معالجة دقيقة للمخارج وصبر منقطع النظير من المعلمين. جزاكم الله خيراً.",
      name: "أحمد محمود",
      role: "طالب في دورة القراءات",
      initial: "أ",
      avatarClass: "bg-primary-container text-on-primary-container",
    },
    {
      quote:
        "أطفالي متحمسون جداً للحلقات اليومية، الأسلوب ممتع والتشجيع المستمر جعلهم يحفظون بسرعة وسهولة.",
      name: "سارة العمري",
      role: "ولي أمر طالب",
      initial: "س",
      avatarClass: "bg-secondary-container text-on-secondary-container",
    },
  ];

  // بيانات التنقل السفلي للموبايل
  const mobileNavItems: MobileNavItem[] = [
    { icon: "home", label: "الرئيسية", href: "#", active: true, filled: true },
    { icon: "menu_book", label: "الدروس", href: "#" },
    { icon: "info", label: "عنا", href: "#" },
    { icon: "call_log", label: "تواصل", href: "#" },
  ];

  // تأثير التمرير للهيدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        } bg-surface/80 backdrop-blur-md`}
      >
        <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-2 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img alt="Logo" className="h-12 md:h-14 w-auto" src="./logo.png" />
            {/* <h1 className="hidden md:block font-headline-md text-headline-md font-bold text-primary">
              أفنان
            </h1> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`font-label-md text-label-md transition-colors ${
                  link.active
                    ? "active-nav-link border-b-2 border-primary pb-1 text-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:scale-95 transition-transform"
              onClick={() =>
                open(
                  `https://wa.me/201129059622?text=${encodeURIComponent(
                    "اريد التسجيل"
                  )}`
                )
              }
            >
              سجل الآن
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 md:pt-2 pb-2 md:pb-32 ">
          <div className="absolute inset-0 z-0" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <span className="inline-block bg-primary-container text-center text-on-primary-container px-4 py-1 rounded-full font-label-md text-label-md mb-6">
                مرحبًا بكم في أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن
              </span>
              <h2 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                للشيخ: محمد حامد مدني إسماعيل
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                مؤسس الأكاديمية وخبير تعليم تجويد القرآن الكريم للأطفال
                وللمبتدئين من كل الأعمار فى شهر إن شاء اله تعالى.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "اريد الالتحاق بحلقات الأطفال"
                      )}`
                    )
                  }
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-primary-container transition-colors shadow-lg"
                >
                  <span className="material-symbols-outlined">menu_book</span>
                  الالتحاق بحلقات الأطفال
                </button>
                <button
                  onClick={() =>
                    open(
                      `https://wa.me/201129059622?text=${encodeURIComponent(
                        "اريد الالتحاق بحلقات الكبار"
                      )}`
                    )
                  }
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors"
                >
                  الالتحاق بحلقات الكبار
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center md:mt-12">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
                <iframe
                  height={"350px"}
                  width={"100%"}
                  src="https://www.youtube.com/embed/3ls03mOs-mM"
                  title="منظومة أفنان لتعليم الأطفال تجويد القرآن (فى شهر واحد إن شاء الله تعالى)  واتس المؤلف 00201129059622"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-headline-md text-headline-md">
                    فيديو تعريفي عن المنظومه
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
        <section className="py-20 overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-70 md:w-5/12 relative">
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
                  كيفية الالتحاق بالاكاديمية
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
                      الدراسة يويميا ولمدة شهر كامل
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">
                      فترة مراجعة
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">إمتحان</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full">
                      check
                    </span>
                    <span className="font-body-md text-body-md">إجازة</span>
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
                  ابدأ رحلتك في علم التجويد اليوم
                </h3>
                <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">
                  انضم إلى أكاديمية أفنان وألحق ابن فورا بدورة سريعة ومضغوطة
                  ومكفثة م مؤلف المنظومة ومؤسس المنهج.
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
                    شاهد دورات كاملة للأطفال
                  </button>
                  <button
                    onClick={() =>
                      open(
                        `https://youtube.com/playlist?list=PLtF30SVt7kmijEnQQe1P_kyUxFt7PaBai&si=-A9EVg8LMSkbswsG`
                      )
                    }
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    شاهد دورات كاملة للكبار
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
      <footer className="bg-surface-container-high border-t border-outline-variant pt-20 pb-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <img alt="Logo" className="h-20 mb-6" src="./logo.png" />
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8">
                أكاديمية تعليمية متخصصة في تعليم تجويد القرآن الكريم وتدريسه
                للأطفال.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            </div>
            {/* <div>
              <h5 className="font-bold mb-6 text-primary">روابط سريعة</h5>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    عن الأكاديمية
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    الدورات والبرامج
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    مكتبة الدروس
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    الأسئلة الشائعة
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h5 className="font-bold mb-6 text-primary">الدعم والمساعدة</h5>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    onClick={() => open(`https://wa.me/201129059622`)}
                  >
                    تواصل معنا
                  </a>
                </li>
                {/* <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    سياسة الخصوصية
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    شروط الاستخدام
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    الدعم الفني
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-label-md text-label-md text-on-surface-variant text-center md:text-right">
              © 2026 أكاديمية أفنان لتعليم الأطفال احكام تجويد القران. جميع
              الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                language
              </span>
              <select className="bg-transparent border-none text-on-surface-variant font-label-md text-label-md focus:ring-0">
                <option>العربية</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-outline-variant z-50 flex justify-around items-center px-4 py-3 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {mobileNavItems.map((item) => (
          <a
            key={item.label}
            className={`flex flex-col items-center justify-center ${
              item.active
                ? "bg-primary-container text-on-primary-container rounded-full px-6 py-1"
                : "text-on-surface-variant"
            }`}
            href={item.href}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: item.filled ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Home;
