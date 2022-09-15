import React, {  useState } from "react";
import { useEffect } from "react";
import HeaderNavDropdown from "./HeaderNavDropdown";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = () => {
    setShowDropdown((e) => {
      return !e;
    });
  };

  const handleClose = () => {
    setShowDropdown(false);
  };
  
  return (
    <div className="header__nav_container">
      <div className="header__nav">
        <ul>
          <HeaderNavLink to="" name="inicio" />
          <HeaderNavLink to="about" name="Quienes somos" />
          <HeaderNavLink to="contact" name="Contacto" />
          <HeaderNavLink to="galery" name="Galeria" />
          <HeaderNavLink to="news" name="Noticias" />
          <li
            onClick={handleToggle}
            className="header__nav_item_more"
            dropdown_active={showDropdown ? "true" : "false"}
          >
            Mas <span className="material-symbols-outlined">expand_more</span>
          </li>
        </ul>
      </div>

      {showDropdown && <HeaderNavDropdown handleClose={handleClose} />}
    </div>
  );
};

export default HeaderNav;
