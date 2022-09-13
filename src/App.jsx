import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NoFound from "./components/404/NoFound";

function App() {
  // Verificamos si estamos en celular
  const [mobileDevice, setMobileDevice] = useState(false);

  useEffect(() => {
    setMobileDevice(window.innerWidth <= 600 ? true : false);

    // Cada que se cambia el tamaño de la pagina se verifica el dispositvo
    window.addEventListener("resize", () => {
      setMobileDevice(window.innerWidth <= 600 ? true : false);
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
    </div>
  );
}

export default App;
