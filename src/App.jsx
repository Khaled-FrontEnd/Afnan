import "./App.css";
import Navbar from "./Componants/Navbar";
import { Routes, Route } from "react-router-dom";

import Chapter1 from "./Componants/Chapter1";
import Chapter2 from "./Componants/Chapter2";
import Chapter3 from "./Componants/Chapter3";
import KidsClasses from "./Componants/KidsClasses";
import MenClasses from "./Componants/MenClasses";
import Home from "./Componants/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter1" element={<Chapter1 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/kidsSection" element={<KidsClasses />} />
        <Route path="/MenClasses" element={<MenClasses />} />
      </Routes>
    </>
  );
}

export default App;
