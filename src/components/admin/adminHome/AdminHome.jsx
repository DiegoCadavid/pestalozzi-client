import React from "react";
import "./adminHome.css";

const AdminHome = ({ handleLogout }) => {
  return (
    <div className="admin_home section_app">
      <span className="material-symbols-outlined">admin_panel_settings</span>
      <h2> Admin </h2>
      <div className="admin_home__info">
        <p>
          <b> ¡Bienvenido!, </b> ahora podras <b> modificar contenido </b>
          de la pagina como imagenes de la galeria, noticias, imagenes del
          carusel y usuarios.
        </p>
        <br />
        <p>
          Para acceder a estas funciones navega por las{" "}
          <b> nuevas categorias del menu. </b>
        </p>
      </div>

      <button onClick={handleLogout}>Cerrar sesion </button>
    </div>
  );
};

export default AdminHome;
