import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import useAxios from "../../hooks/useAxios";

import GaleryFullscreen from "./GaleryFullscreen";
import GaleryItem from "./GaleryItem";

import "./galery.css";
import Loading from "../loading/Loading";

const Galery = ({ mobileDevice }) => {
  const [fullscreenImage, setFullscreenImage] = useState("");
  const location = useLocation();
  const [galeryImages, setGaleryImages] = useState([]);
  const { setFetch, response, loading, error } = useAxios();

  useEffect(() => {
    setFullscreenImage(queryString.parse(location.search).fullscreen || "");
  }, [location.search]);

  useEffect(() => {
    if (fullscreenImage != "") {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [fullscreenImage]);

  //  Obtenemos las imagenes
  useEffect(() => {
    setFetch("/galery", "get");
  }, []);

  useEffect(() => {
    if (!loading && error == "") {
      setGaleryImages(response);
    }
  }, [response]);

  return (
    <div className="galery section_app">
      <h2> Galeria </h2>
      {mobileDevice && <p> Puedes agrandar una imagen al tocarla</p>}
      {fullscreenImage != "" && <GaleryFullscreen img={fullscreenImage} />}
      <div className="galery__container">
        {loading && <div className="galery__loading">
          <Loading weight={5} speed={0.3} />
        </div>}

        { (!loading && galeryImages.length == 0) && <div className="galery__item galery__item_no_images">
            <span className="material-symbols-outlined">image</span>
            <p>No images</p>
          </div>}

        {galeryImages.map((g) => {
          return <GaleryItem key={g.id} url={g.url} />;
        })}
      </div>
    </div>
  );
};

export default Galery;
