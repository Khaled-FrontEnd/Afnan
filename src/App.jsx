import "./App.css";
import Navbar from "./Componants/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import AboutPage from "./Componants/About";
import ContactPage from "./Componants/Contact";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";

function App() {
   const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const { data, error } = await supabase.from("links").select("*");
      console.log(data);
      setLinks(data);
    };

    fetchLinks();
  }, []);
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
