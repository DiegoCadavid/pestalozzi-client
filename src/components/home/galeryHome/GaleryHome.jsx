import React from "react";
import { Link } from "react-router-dom";
import "./galeryHome.css";
import GaleryHomeItem from "./GaleryHomeItem";

const GaleryHome = () => {
  // Maximo 5 items de galeria
  return (
    <div className="galery_home">
      <div className="galery_home__info">
        <h6> Galeria</h6>
      </div>
      <div className="galery_home__container">
        <GaleryHomeItem />
        <GaleryHomeItem />
        <GaleryHomeItem />
        <GaleryHomeItem />

        {/* Ver mas */}
        <Link to="galery" className="galery_home__view_more galery_home__item">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default GaleryHome;
