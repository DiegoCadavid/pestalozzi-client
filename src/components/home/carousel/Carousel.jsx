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
    // Verificamos si el carousel tiene imagenes
    setNoImages(imagesCarousel.length <= 0 ? true : false);
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

  useEffect(() => {
    // Si el carousel tiene images selecionar la primera al incio
    if (!noImages) {
      setImagesCarouselSelect({
        index: 0,
        data: imagesCarousel[0],
      });

      // El codigo dentro de setInterval se ejecuta por lo cual siempre mostrara el mismo resultado
      const intervalCarousel = setInterval(( a ) => {
        const btnNext = document.querySelector('#carousel_btn_foward');
        btnNext.click();
      }, 2500, imagesCarouselSelect.index);

      return () => {
        if (!noImages) {
          clearInterval(intervalCarousel);
        }
      };
    }
  }, [noImages]);

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
