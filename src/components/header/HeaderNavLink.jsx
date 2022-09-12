import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderNavLink = ({ to = "", name = "", closedMenu = () => {} }) => {
  const location = useLocation();
  const [activeProp, setActiveProp] = useState("false");

  useEffect(() => {
    setActiveProp(
      `${location.pathname}${location.hash}` == `/${to}` ? true : false
    );
  }, [location]);

  // Vamos al id directamente

  const handleClick = () => {

    if(to.split('#')[1]){
      const elementGo = document.querySelector(`#${to.split('#')[1]}`) || null;

      // Si encontramos el elemento vamos hacia el
      if(elementGo) {
        elementGo.scrollIntoView({ behavior: 'smooth' });
      }
    } 

    // Cerramos el menu en caso de que estemos en un dispositivo movil
    closedMenu();
  };

  return (
    <li active={activeProp.toString()}>
      <Link to={to} onClick={handleClick}>
        {name}
      </Link>
    </li>
  );
};

export default HeaderNavLink;
