import React from "react";
import Loading from "../../loading/Loading";
import CarouselItem from "./CarouselItem";

const CarouselContainer = ({ imagesCarousel, loadingImages }) => {
  return (
    <div className="carousel__container">
      {(!imagesCarousel && !loadingImages) && (
        <div className="carousel__item_bad" translate="no">
          <p> No images </p>
          <p>
            <span className="material-symbols-outlined">mood_bad</span>{" "}
          </p>
        </div>
      )}

      {
        loadingImages && (<div className="carousel__item_loading"> 
          <Loading weight={5}/>
        </div>)
      }

      {imagesCarousel && (
        <CarouselItem
          id={imagesCarousel.data.id}
          label={imagesCarousel.data.label}
          url={imagesCarousel.data.url}
        />
      )}
    </div>
  );
};

export default CarouselContainer;
