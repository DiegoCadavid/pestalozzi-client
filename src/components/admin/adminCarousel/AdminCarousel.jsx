import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../loading/Loading";
import AdminCarouselForm from "./AdminCarouselForm";
import AdminCarouselItem from "./AdminCarouselItem";
import "./adminCarousel.css";

const AdminCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [images, setImages] = useState([]);

  const {
    setFetch: setFetchImages,
    response: responseImages,
    loading: loadingImages,
    error: errorImages,
  } = useAxios();

  const {
    setFetch: setFetchCarousel,
    response: responseCarousel,
    loading: loadingCarousel,
    error: errorCarousel,
  } = useAxios();

  useEffect(() => {
    //Realizamos las peticiones http
    setFetchCarousel("/carousel");
    setFetchImages("/galery");
  }, []);

  // En caso de que el carousel de una resposne
  useEffect(() => {
    if (!loadingCarousel && errorCarousel == "") {
      setCarouselItems(responseCarousel);
    }
  }, [responseCarousel]);

  //En caso de que la galeria responda
  useEffect(() => {
    if (!loadingImages && errorImages == "") {
      setImages(responseImages);
    }
  }, [responseImages]);

  const handleAdd = (data) => {
    setCarouselItems([data, ...carouselItems]);
  };

  const handleRemove = (id) => {
    setCarouselItems(
      carouselItems.filter((c) => {
        if (c.id == id) {
          return false;
        }

        return true;
      })
    );
  };

  return (
    <div className="admin_carousel section_app">
      <h2>Admin Carousel</h2>

      {/* Formulario  */}
      <AdminCarouselForm
        images={images}
        loadingImages={loadingImages}
        handleAdd={handleAdd}
      />

      <div className="admin_carousel__container">
        {/* Cuando este cargando */}
        {loadingCarousel && (
          <div className="admin_carousel__item_loading">
            <Loading weight={5} />
          </div>
        )}

        {/* Renderizamos todos los carousels */}
        {!loadingCarousel &&
          carouselItems.length >= 1 &&
          carouselItems.map((c) => {
            return (
              <AdminCarouselItem
                key={c.id}
                url={c.url}
                label={c.label}
                id={c.id}
                onRemove={handleRemove}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AdminCarousel;
