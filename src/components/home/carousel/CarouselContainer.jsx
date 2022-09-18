import React from "react";
import CarouselItem from "./CarouselItem";

const CarouselContainer = ({ imagesCarousel, noImages }) => {
  return (
    <div className="carousel__container">
      {noImages && (
        <div className="carousel__item_bad" translate="no">
          <p> No images </p>
          <p>
            <span className="material-symbols-outlined">mood_bad</span>{" "}
          </p>
        </div>
      )}

      {!noImages && (
        <CarouselItem label={imagesCarousel.label} url={imagesCarousel.url} />
      )}
    </div>
  );
};

export default CarouselContainer;
