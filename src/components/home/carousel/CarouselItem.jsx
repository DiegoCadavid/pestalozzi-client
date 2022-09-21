import React from "react";
import { Link } from "react-router-dom";

const CarouselItem = ({ label, url, id }) => {
  return (
    <div className="carousel__item">
      <img key={id} src={url} alt={label} />
      <div className="carousel__item_info">
        <h4>
          "El problema no es la diferencia <br />
          sino la <b> indiferencia</b>"
        </h4>
        <p> ( {label} ) </p>
        <Link to="/about"> Quienes somos </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
