import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();
  let [lang, setLang] = useState("ar");
  let [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.className = lang === "ar" ? "arabic" : "english";
  }, [lang]);

  return (
    <div className="navbar">
      <div
        className="logo"
        style={{ display: "flex",flexDirection:'column', alignItems: "center", gap: "10px" }}
      >
        <div>
          <img
            src="src/assets/react.svg"
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <h2 style={{ fontWeight: "200", margin: 0 }}>{t("Afnan")}</h2>
        </div>
        <div className={`menu-container ${openMenu ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/chapter1">{t("Videos&Notes")}</Link>
            </li>
            <li>
              <a href="#">{t("Classes")}</a>
            </li>
            <li>
              <a href="#">{t("Aboute")}</a>
            </li>
          </ul>

          <div className="lang-switch" style={{ cursor: "pointer" }}>
            <p onClick={() => setLang(lang === "en" ? "ar" : "en")}>
              {lang === "ar" ? "الانجليزية" : "Arbic"}
            </p>
          </div>
        </div>
      </div>

      <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
