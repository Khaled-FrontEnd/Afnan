import "./App.css";
import Navbar from "./Componants/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import AboutPage from "./Componants/About";
import ContactPage from "./Componants/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        
      </Routes>
    </>
  );
}

export default App;
