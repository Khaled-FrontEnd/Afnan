import "./App.css";
import Navbar from "./Componants/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Componants/Home";
import AboutPage from "./Componants/About";
import ContactPage from "./Componants/Contact";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";
import Footer from "./Componants/Footer";

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
