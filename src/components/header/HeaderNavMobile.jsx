import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNavMobile = ({ closedMenu }) => {
  return (
    <div className="header__nav_mobile fadeIn">
      <div className="header__nav_mobile_icons_container">
        <div>
          <button>  <span className="material-symbols-outlined">mail</span> </button>
          <button> <span className="material-symbols-outlined">location_on</span> </button>
          <button> <span className="material-symbols-outlined">call</span> </button>
        </div>
        <div>
          <button onClick={closedMenu} className='header__nav_mobile_closed_button'>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <ul className="header__nav_mobile_menu">
        <HeaderNavLink closedMenu={closedMenu} to="" name="inicio" />
        <HeaderNavLink closedMenu={closedMenu} to="about" name="Quienes somos" />
        <HeaderNavLink closedMenu={closedMenu} to="location" name="Ubicacion" />
        <HeaderNavLink closedMenu={closedMenu} to="contact" name="Contacto" />
        <HeaderNavLink closedMenu={closedMenu} to="galery" name="Galeria" />

        {/* Mas */}
        <HeaderNavLink closedMenu={closedMenu} to="works" name="Tareas" />
        <HeaderNavLink
          closedMenu={closedMenu}
          to="virtual-classroom"
          name="Aula virtual"
        />
        <HeaderNavLink
          closedMenu={closedMenu}
          to="parents-association"
          name="Asociacion de padres"
        />
      </ul>
    </div>
  );
};

export default HeaderNavMobile;
