import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Navbar({ links }) {
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
    { label: t("الرئيسية"), href: "/", active: true },
    {
      label: t("الدروس"),
      href: links.find((link) => link.name == "youtube")?.link,
    },
    { label: t("عن الأكاديمية"), href: "/about" },
    { label: t("تواصل معنا"), href: "/contact" },
  ];

  // بيانات التنقل السفلي للموبايل
  const mobileNavItems = [
    { icon: <IoMdHome size={26}/>, label: t("الرئيسية"), href: "/", filled: true },
    {
      icon: <MdMenuBook size={26} />,
      label: t("الدروس"),
      href: links.find((link) => link.name == "youtube")?.link,
    },
    { icon: <IoMdInformationCircleOutline size={26} />, label: t("عنا"), href: "/about" },
    { icon: <FaPhone size={24} />, label: t("تواصل"), href: "/contact" },
  ];

  // تأثير التمرير للهيدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let location = useLocation().pathname;

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
            <img alt={t("شعار الموقع")} className="h-12 md:h-14 w-auto" src="./logo.png" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={`font-label-md text-label-md transition-colors ${
                  location == link.href
                    ? "active-nav-link border-b-2 border-primary pb-1 text-primary font-semibold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                to={link.href}
                target={link.label == t("الدروس") && "_blank"}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:scale-95 transition-transform"
              onClick={() =>
                open(links.find((link) => link.name == "whatsapp")?.link)
              }
            >
              {t("إدعمنا")}
            </button>
          </div>
        </nav>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-outline-variant z-50 flex justify-around items-center px-4 py-3 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {mobileNavItems.map((item) => (
          <Link
            key={item.label}
            className={`flex flex-col items-center justify-center ${
              location == item.href
                ? "bg-primary-container text-on-primary-container rounded-full px-6 py-1"
                : "text-on-surface-variant"
            }`}
            to={item.href}
          >
            {item.icon}

            <span className="text-[10px] font-bold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navbar;