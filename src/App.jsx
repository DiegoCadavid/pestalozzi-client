import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import ScrollToTop from "./components/ScrollToTop";

import NoFound from "./components/noFound/NoFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Galery from "./components/galery/Galery";
import VirtualClassroom from "./components/VirtualClassroom/VirtualClassroom";
import News from "./components/news/News";
import Academic from "./components/Academic/Academic";
import Private from "./components/admin/Private";

// Administrador
import AdminHome from "./components/admin/adminHome/AdminHome";
import Login from "./components/admin/login/Login";
import isAuth from "./components/admin/helpers/isAuth";
import AdminUsers from "./components/admin/adminUsers/AdminUsers";

function App() {
  // Verificamos si estamos en celular
  const [mobileDevice, setMobileDevice] = useState(false);

  // Verificamos si estamos autorizados
  const [auth, setAuth] = useState(isAuth());

  useEffect(() => {
    if (window.innerWidth <= 750) {
      console.log(`Mobile:  ${window.innerWidth}px`);
      setMobileDevice(true);
    } else {
      console.log(`Windows:  ${window.innerWidth}px`);
      setMobileDevice(false);
    }

    setAuth(isAuth());

    // Cada que se cambia el tamaño de la pagina se verifica el dispositvo
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 750) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
    });

    // Cada que sucede un cambio en el sessionStorage por un documento externo
    window.addEventListener("storage", () => {
      console.log("Se logueo");
      setAuth(isAuth());
    });
  }, []);

  const handleLogin = () => {
    setAuth(isAuth());
  };

  const handleLogout = () => {
    if (sessionStorage.getItem("auth")) {
      sessionStorage.removeItem("auth");
    }

    setAuth(false);
  };

  return (
    <div className="app" translate="no">
      <ScrollToTop />
      <Header mobileDevice={mobileDevice} auth={auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="galery" element={<Galery mobileDevice={mobileDevice} />} />
        <Route path="news" element={<News />} />

        <Route path="virtual-classroom" element={<VirtualClassroom />} />
        <Route path="academic" element={<Academic />} />
        <Route path="*" element={<NoFound />} />

        {/* Rutas privadas */}
        <Route path="login" element={<Login handleLogin={handleLogin} />} />
        <Route path="admin" element={<Private component={ <AdminHome handleLogout={handleLogout}/> } />} />
        <Route path="admin/users" element={ <Private component={ <AdminUsers /> } /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
