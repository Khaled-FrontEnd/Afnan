import { MdOutlinePublic } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Footer({ links }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-surface-container-high border-t border-outline-variant pt-16 md:pb-8 pb-22">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img alt={t("شعار أكاديمية أفنان")} className="h-20 mb-6" src="./logo.png" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8">
              {t("أكاديمية تعليمية متخصصة في تعليم تجويد القرآن الكريم وتدريسه للأطفال.")}
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
                aria-label={t("وسائل التواصل الاجتماعي")}
              >
                <MdOutlinePublic className="size-7" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href={`mailto:${
                  links?.find((item) => item?.name === "gmail")?.link
                }`}
                aria-label={t("البريد الإلكتروني")}
              >
                <MdOutlineMail className="size-7" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href={`tel:+2${
                  links?.find((item) => item?.name === "phone1")?.link
                }`}
                aria-label={t("رقم الهاتف")}
              >
                <MdOutlineCall className="size-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-label-md text-on-surface-variant text-center md:text-right">
            {t("© 2026 أكاديمية أفنان لتعليم الأطفال أحكام تجويد القرآن. جميع الحقوق محفوظة.")}
          </p>
          <div className="flex items-center gap-2">
            <MdLanguage
              className="text-primary size-7"
              style={{ fontVariationSettings: "'FILL' 1" }}
            />
            <select
              className="bg-transparent border-none text-on-surface-variant font-label-md text-label-md focus:ring-0 cursor-pointer"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="ar">{t("العربية")}</option>
              <option value="en">{t("English")}</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}