import { useTranslation } from "react-i18next";
import { Button } from "@mui/joy";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenClasses from "./MenClasses";
import { Link } from "react-router-dom";
function KidsClasses() {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ textAlign: "center"}}>
      <h1>{t("Kids & Mothers Section")}</h1>
      <div style={{justifySelf:'center'}}>
        <h2>{t("Morning Classes")}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            gap: "20px",
            textAlign:'center'
          }}
        >
          <Button style={{ background: "#000", fontSize: "2em" }}>5:00</Button>

          <Button style={{ background: "#000", fontSize: "2em" }}>7:00</Button>
          <Button style={{ background: "#000", fontSize: "2em" }}>9:00</Button>
        </div>
      </div>
      <div style={{justifySelf:'center'}}>
        <h2>{t("Evening Classes")}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            gap: "20px",
            textAlign:'center'
            
          }}
        >
          <Button style={{ background: "#000", fontSize: "2em" }}>8:00</Button>
          <Button style={{ background: "#000", fontSize: "2em" }}>9:00</Button>
          <Button style={{ background: "#000", fontSize: "2em" }}>10:00</Button>
        </div>
      </div>
      <div className="chapter-nav">
        <Link to={"/MenClasses"}>
          <KeyboardBackspaceIcon className="nav-icon" />
        </Link>

        <Link to={"/"} className="main-link">
          {t("Main Page")}
        </Link>

        <Link to={"/chapter3"}>
          <EastIcon className="nav-icon" />
        </Link>
      </div>
    </div>
  );
}

export default KidsClasses;
