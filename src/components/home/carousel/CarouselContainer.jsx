import React from "react";
import CarouselItem from "./CarouselItem";

const CarouselContainer = ({ imagesCarousel, noImages }) => {
  return (
    <div className="carousel__container">
      {/* Si el carousel no contiene niguna imagen */}
      {noImages && (
        <div className="carousel__item_bad" translate="no">
          <p> No images </p>
          <p>
            <span className="material-symbols-outlined">mood_bad</span>{" "}
          </p>
        </div>
      )}

      {/*   Si el carousel tiene imagenes */}
      {!noImages && (
        <>
          <CarouselItem label={imagesCarousel.label} url={imagesCarousel.url} />
          <CarouselItem label={imagesCarousel.label} url={imagesCarousel.url} />
          <CarouselItem label={imagesCarousel.label} url={imagesCarousel.url} />
        </>
      )}
    </div>
  );
};

export default CarouselContainer;
