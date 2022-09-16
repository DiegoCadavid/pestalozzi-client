import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./noFound.css";

const NoFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="no_found">
      <h3>404</h3>
      <h5>Pagina no encontrada</h5>
      <h5> "{location.pathname}" </h5>
      <button onClick={handleClick}> Inicio </button>
    </div>
  );
};

export default NoFound;
