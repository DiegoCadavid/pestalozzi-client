import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "../admin/adminNav/AdminNav";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNavMobile = ({ closedMenu, auth  }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("contact");
    closedMenu();
  };

  return (
    <div className="header__nav_mobile fadeIn" translate="no">
      <div className="header__nav_mobile_icons_container">
        <div>
          <button onClick={handleClick}>
            <span className="material-symbols-outlined">mail</span>
          </button>
          <button onClick={handleClick}>
            <span className="material-symbols-outlined">location_on</span>
          </button>
          <button onClick={handleClick}>
            <span className="material-symbols-outlined">call</span>
          </button>
        </div>
        <div>
          <button
            onClick={closedMenu}
            className="header__nav_mobile_closed_button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <ul className="header__nav_mobile_menu">
        <HeaderNavLink closedMenu={closedMenu} to="" name="inicio" />
        <HeaderNavLink
          closedMenu={closedMenu}
          to="about"
          name="Quienes somos"
        />
        <HeaderNavLink closedMenu={closedMenu} to="contact" name="Contacto" />
        <HeaderNavLink closedMenu={closedMenu} to="galery" name="Galeria" />
        <HeaderNavLink closedMenu={closedMenu} to="news" name="Noticias" />

        {/* Mas */}
        <HeaderNavLink
          closedMenu={closedMenu}
          to="virtual-classroom"
          name="Aula virtual"
        />
        
        <HeaderNavLink
          closedMenu={closedMenu}
          to="academic"
          name="Gestion academica"
        />

        {!auth && <HeaderNavLink
          closedMenu={closedMenu}
          to="login"
          name="iniciar sesion"
        />}

        {
          auth && <AdminNav closedMenu={closedMenu}/>
        }
      </ul>
    </div>
  );
};

export default HeaderNavMobile;
