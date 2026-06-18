import { Button } from "@mui/joy";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Chapter2() {
  const { t } = useTranslation();
  const numbers = [
    "Thirty-Six",
    "Thirty-Seven",
    "Thirty-Eight",
    "Thirty-Nine",
    "Forty",
    "Forty-One",
    "Forty-Two",
    "Forty-Three",
  ];
  return (
    <div className="chapter1">
      <h1 className="chapter-title">{t("Chapter Two")}</h1>

      {/* Videos + Notes */}
      <div className="content-section">
        <div className="Videos">
          <h1>{t("Videos")}</h1>
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
          <h1>{t("Notes")}</h1>
          <Button className="lesson-btn">
            {t("Chapter Two Notes")}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="chapter-nav">
        <Link to={"/chapter3"}>
          <KeyboardBackspaceIcon className="nav-icon" />
        </Link>

        <Link to={"/"} className="main-link">
          {t("Main Page")}
        </Link>

        <Link to={"/chapter1"}>
          <EastIcon className="nav-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Chapter2;
