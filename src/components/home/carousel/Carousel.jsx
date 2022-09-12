import React, { useEffect, useState } from "react";

import "./carousel.css";
import CarouselContainer from "./CarouselContainer";
import CarouselControls from "./CarouselControls";

const Carousel = () => {
  const [imagesCarousel, setImagesCarousel] = useState([
    {
      label: "test pestalozzi 2",
      url: "https://www.pestalozzi.edu.co/images/slide/colegio-pestalozzi-2.jpg",
    },
    {
      label: "test pestalozzi 3",
      url: "https://www.pestalozzi.edu.co/images/slide/colegio-pestalozzi-3.jpg",
    },
  ]);

  const [imagesCarouselSelect, setImagesCarouselSelect] = useState({
    index: 0,
    data: {},
  });

  const [noImages, setNoImages] = useState(true);

  useEffect(() => {
    setNoImages(imagesCarousel.length <= 0 ? true : false);
  }, [imagesCarousel]);

  useEffect(() => {
    if (!noImages) {
      setImagesCarouselSelect((e) => {
        return {
          index: 0,
          data: imagesCarousel[0],
        };
      });
    }
  }, [noImages]);

  const handleNext = () => {
    if (imagesCarousel[imagesCarouselSelect.index + 1]) {
      setImagesCarouselSelect({
        index: imagesCarouselSelect.index + 1,
        data: imagesCarousel[imagesCarouselSelect.index + 1],
      });

      console.log("se ejecutoooo");
    } else {
      console.log("se ejecuto");

      setImagesCarouselSelect({
        index: 0,
        data: imagesCarousel[0],
      });
    }
  };

  const handlePrevious = () => {
    if (imagesCarousel[imagesCarouselSelect.index - 1]) {
      setImagesCarouselSelect({
        index: imagesCarouselSelect.index - 1,
        data: imagesCarousel[imagesCarouselSelect.index - 1],
      });
    } else {
      setImagesCarouselSelect({
        index: imagesCarousel.length - 1,
        data: imagesCarousel[imagesCarousel.length - 1],
      });
    }
  };


  return (
    <div className="carousel">
      <CarouselContainer
        imagesCarousel={imagesCarouselSelect.data}
        noImages={noImages}
      />
      <CarouselControls
        icon="arrow_back_ios_new"
        handleAction={handlePrevious}
        noImages={noImages}
        direction="back"
      />
      <CarouselControls
        icon="arrow_forward_ios"
        handleAction={handleNext}
        noImages={noImages}
        direction="foward"
      />
    </div>
  );
};

export default Carousel;
