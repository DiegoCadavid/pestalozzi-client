import React, { useEffect, useRef } from "react";
import AdminNav from "../admin/adminNav/AdminNav";
import HeaderNavLink from "./HeaderNavLink";

const HeaderNavDropdown = ({ handleClose, auth}) => {
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
        <HeaderNavLink to='virtual-classroom' name='Aula Virtual' />
        <HeaderNavLink to='academic' name='Gestion academica' />
        {!auth && <HeaderNavLink to='login' name='iniciar sesion' />}
        {auth && <AdminNav />}
      </ul>
    </div>
  );
};

export default HeaderNavDropdown;
