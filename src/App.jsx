import "./App.css";
import Navbar from "./Componants/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import AboutPage from "./Componants/About";
import ContactPage from "./Componants/Contact";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import Footer from "./Componants/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("links").select("*");
      // console.log(data);
      setLinks(data);
    };

    fetchLinks();
  }, []);

  const { i18n } = useTranslation();

  // دالة لتحديث اتجاه الموقع
  const updateDirection = (lng) => {
    const dir = lng === "ar" ? "rtl" : "ltr";

    // تحديث كل من html و body
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
    document.body.dir = dir; // ← أضف هذا السطر

    // إضافة class للغة للتخصيص الإضافي
    document.documentElement.className = lng === "ar" ? "arabic" : "english";
    document.body.className = lng === "ar" ? "arabic" : "english"; // ← أضف هذا السطر

    // تحديث الاتجاه في localStorage (اختياري)
    localStorage.setItem("dir", dir);
  };

  // تطبيق الاتجاه عند تحميل التطبيق
  useEffect(() => {
    const currentLang = i18n.language || "ar";
    updateDirection(currentLang);

    // الاستماع لتغيير اللغة
    const handleLanguageChanged = (lng) => {
      updateDirection(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    // تنظيف المستمع عند إلغاء تحميل المكون
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);
  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path="/" element={<Home links={links} />} />
        <Route path="/About" element={<AboutPage links={links} />} />
        <Route path="/Contact" element={<ContactPage links={links} />} />
      </Routes>
      <Footer links={links} />
    </>
  );
}

export default App;
