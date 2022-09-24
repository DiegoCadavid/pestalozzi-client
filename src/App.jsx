import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./app.css";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

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
import isAuth from "./components/admin/helpers/isAuth";

import AdminHome from "./components/admin/adminHome/AdminHome";
import Login from "./components/admin/login/Login";
import AdminUsers from "./components/admin/adminUsers/AdminUsers";
import AdminGalery from "./components/admin/adminGalery/AdminGalery";
import AdminWork from "./components/admin/adminWork/AdminWork";
import AdminCarousel from "./components/admin/adminCarousel/AdminCarousel";



function App() {
  // Mobile 
  const [mobileDevice, setMobileDevice] = useState(false);

  // Autenticacion
  const [auth, setAuth] = useState({
    status: false,
    user: {},
  });

  useEffect(() => {
    if (window.innerWidth <= 750) {
      console.log(`Mobile:  ${window.innerWidth}px`);
      setMobileDevice(true);
    } else {
      console.log(`Windows:  ${window.innerWidth}px`);
      setMobileDevice(false);
    }

    // Ejecutamos la funcion donde veremos si el usuario esta autenticado
    isAuth()
      .then((ok) => {
        setAuth({
          status: true,
          user: ok,
        });
      })
      .catch((err) => {
        setAuth({
          status: false,
          user: {},
        });
      });

    // Verficaremos si esta autenticado cada que sucede un cambio en el Storage
    window.addEventListener("storage", () => {
      console.log("Se logueo");
      isAuth()
        .then((ok) => {
          setAuth({
            status: true,
            user: ok,
          });
        })
        .catch((err) => {
          setAuth({
            status: false,
            user: {},
          });
        });
    });

    // Cada que se cambia el tamaño de la pagina se verifica el dispositvo
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 750) {
        setMobileDevice(true);
      } else {
        setMobileDevice(false);
      }
    }); 
  }, []);

  // Funcion para loguearnos
  const handleLogin = () => {
    // Cada que nos loguemos lo autenticamos
    isAuth()
      .then((ok) => {
        toast.success("Iniciaste sesion 😸");
        setAuth({
          status: true,
          user: ok,
        });
      })
      .catch((err) => {
        setAuth({
          status: false,
          user: {},
        });
      });
  };

  // Si cerramos sesion
  const handleLogout = () => {
    toast.warning("Cerraste sesion! 🙀");
    if (sessionStorage.getItem("auth")) {
      sessionStorage.removeItem("auth");
    }

    setAuth({
      status: false,
      user: {},
    });
  };

  return (
    <div className="app" translate="no">
      <ScrollToTop />

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />

      <Header mobileDevice={mobileDevice} auth={auth.status} />
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
        <Route
          path="login"
          element={<Login handleLogin={handleLogin} auth={auth.status} />}
        />
        <Route
          path="admin"
          element={
            <Private
              authUser={auth.user}
              auth={auth.status}
              roles={["admin", "student", "teacher"]}
              component={
                <AdminHome handleLogout={handleLogout} authUser={auth.user} />
              }
            />
          }
        />
        <Route
          path="admin/users"
          element={
            <Private
              roles={["admin"]}
              authUser={auth.user}
              auth={auth.status}
              component={<AdminUsers />}
            />
          }
        />
        <Route
          path="admin/galery"
          element={
            <Private
              authUser={auth.user}
              auth={auth.status}
              roles={["admin", "teacher"]}
              component={<AdminGalery />}
            />
          }
        />
        <Route
          path="admin/carousel"
          element={
            <Private
              authUser={auth.user}
              auth={auth.status}
              roles={["admin", "teacher"]}
              component={<AdminCarousel />}
            />
          }
        />
        <Route
          path="admin/news"
          element={
            <Private
              authUser={auth.user}
              auth={auth.status}
              roles={["admin", "student", "teacher"]}
              component={<AdminWork />}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
