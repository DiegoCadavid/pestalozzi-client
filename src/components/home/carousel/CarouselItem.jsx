import React from "react";
import { Link } from "react-router-dom";
import imgtest from "../../../assets/colegio-pestalozzi-1.jpg";

const CarouselItem = ({ label, url }) => {
  return (
    <div className="carousel__item fadeIn">
      <img src={url} alt="carousel item test" />
      <div className="carousel__item_info">
        <h4> "El problema no es la diferencia <br />
          sino la <b> indiferencia</b>" </h4>
          <Link to='/about' > Quienes somos  </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
