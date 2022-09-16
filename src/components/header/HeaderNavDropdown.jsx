import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNavDropdown = ({ handleClose }) => {
  const dropdownRef = useRef(null);

  const handleLeave = () => {
    handleClose();
  };

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.addEventListener("mouseleave", handleLeave);
    }
    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div className="header__nav_dropdown fadeIn" ref={dropdownRef}>
      <ul>
        <HeaderNavLink to='works' name='Tareas' />
        <HeaderNavLink to='virtual-classroom' name='Aula Virtual' />
        <HeaderNavLink to='parents-association' name='Asociacion de padres' />
      </ul>
    </div>
  );
};

export default HeaderNavDropdown;
