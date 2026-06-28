import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();
  let [lang, setLang] = useState("ar");
  let [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.className = lang === "ar" ? "arabic" : "english";
  }, [lang]);

  const [isScrolled, setIsScrolled] = useState(false);

  // بيانات التنقل
  const navLinks = [
    { label: "الرئيسية", href: "/", active: true },
    {
      label: "الدروس",
      href: "https://www.youtube.com/@%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9%D8%A3%D9%81%D9%86%D8%A7%D9%86%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85%D8%AA",
    },
    { label: "عن الأكاديمية", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ];

  // بيانات التنقل السفلي للموبايل
  const mobileNavItems = [
    { icon: "home", label: "الرئيسية", href: "/", filled: true },
    { icon: "menu_book", label: "الدروس", href: "https://www.youtube.com/@%D9%85%D9%86%D8%B8%D9%88%D9%85%D8%A9%D8%A3%D9%81%D9%86%D8%A7%D9%86%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85%D8%AA" },
    { icon: "info", label: "عنا", href: "/about" },
    { icon: "call_log", label: "تواصل", href: "/contact" },
  ];

  // تأثير التمرير للهيدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let location = useLocation().pathname
  // console.log(location)

  return (
    <>
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
                  location == link.href
                    ? "active-nav-link border-b-2 border-primary pb-1 text-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                href={link.href}
                target={link.label == "الدروس" && "_blank"}
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
             إدعمنا
            </button>
          </div>
        </nav>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-outline-variant z-50 flex justify-around items-center px-4 py-3 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {mobileNavItems.map((item) => (
          <a
            key={item.label}
            className={`flex flex-col items-center justify-center ${
              location == item.href
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
    </>
  );
}

export default Navbar;
