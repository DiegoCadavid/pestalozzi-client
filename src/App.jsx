import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import ScrollToTop from "./components/ScrollToTop";
import NoFound from "./components/noFound/NoFound";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  // Verificamos si estamos en celular
  const [mobileDevice, setMobileDevice] = useState(false);

  // ARREGLAR EL BUG DE QUE DETECTA LOS DISPOSITIVOS MOBILES
  useEffect(() => {
    if (window.innerWidth <= 750) {
      console.log(`Mobile:  ${window.innerWidth}px`);
      setMobileDevice(true);
    } else {
      console.log(`Windows:  ${window.innerWidth}px`);
      setMobileDevice(false);
    }

    // Cada que se cambia el tamaño de la pagina se verifica el dispositvo
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 750) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
    });
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <Header mobileDevice={mobileDevice} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
