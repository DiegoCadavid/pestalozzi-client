import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

import "./carousel.css";
import CarouselContainer from "./CarouselContainer";
import CarouselControls from "./CarouselControls";

const Carousel = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);
  const [imagesCarouselSelect, setImagesCarouselSelect] = useState({
    index: 0,
    data: {},
  });
  const { setFetch, response, loading, error } = useAxios();

  useEffect(() => {
    setFetch("/carousel", "get");
  }, []);

  useEffect(() => {
    if (!loading && error == "") {
      setImagesCarousel(
        response.filter((i) => {
          if (!i.url) {
            return false;
          }

          return true;
        })
      );
    }
  }, [response]);

  useEffect(() => {
    if (imagesCarousel.length > 0) {
      setImagesCarouselSelect({
        index: 0,
        data: imagesCarousel[0],
      });
    } else {
      setImagesCarouselSelect(null);
    }
  }, [imagesCarousel]);

  const handleNext = () => {
    if (imagesCarouselSelect.index >= imagesCarousel.length - 1) {
      setImagesCarouselSelect({
        index: 0,
        data: imagesCarousel[0],
      });
    } else {
      setImagesCarouselSelect({
        index: imagesCarouselSelect.index + 1,
        data: imagesCarousel[imagesCarouselSelect.index + 1],
      });
    }
  };

  const handlePrevious = () => {
    if (imagesCarouselSelect.index <= 0) {
      setImagesCarouselSelect({
        index: imagesCarousel.length - 1,
        data: imagesCarousel[imagesCarousel.length - 1],
      });
    } else {
      setImagesCarouselSelect({
        index: imagesCarouselSelect.index - 1,
        data: imagesCarousel[imagesCarouselSelect.index - 1],
      });
    }
  };

  return (
    <div className="carousel">
      <CarouselContainer imagesCarousel={imagesCarouselSelect} loadingImages={loading} />
      {(imagesCarouselSelect && imagesCarousel.length > 1)    && (
        <>
          <CarouselControls
            icon="arrow_back_ios_new"
            handleAction={handlePrevious}
            direction="back"
          />
          <CarouselControls
            icon="arrow_forward_ios"
            handleAction={handleNext}
            direction="foward"
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
