import { Button } from "@mui/joy";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Chapter1() {
  const { t } = useTranslation();
  const numbers = [
    "one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
    "eighteen","nineteen","twenty","twenty-One","twenty-Two","twenty-Three",
    "twenty-Four","twenty-Five","twenty-Six","twenty-Seven","twenty-Eight",
    "twenty-Nine","thirty","thirty-One","thirty-Two","thirty-Three",
    "thirty-Four","thirty-Five",
  ];

  return (
    <div className="chapter1">
      <h1 className="chapter-title">{t("Chapter One")}</h1>

      {/* Videos + Notes */}
      <div className="content-section">
        <div className="Videos">
          <h2>{t("Videos")}</h2>
          {numbers.map((num, i) => (
            <Button
              key={i}
              className="lesson-btn"
            >
              {t(`Lesson ${num[0].toUpperCase()}${num.slice(1)}`)}
            </Button>
          ))}
        </div>

        <div className="Notes">
          <h2>{t("Notes")}</h2>
          <Button className="lesson-btn">
            {t("Chapter One Notes")}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="chapter-nav">
        <Link to={"/chapter2"}>
          <KeyboardBackspaceIcon className="nav-icon" />
        </Link>

        <Link to={"/"} className="main-link">
          {t("Main Page")}
        </Link>

        <Link to={"/"}>
          <EastIcon className="nav-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Chapter1;
