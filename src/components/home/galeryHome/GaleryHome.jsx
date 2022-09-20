import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

import GaleryHomeItem from "./GaleryHomeItem";

import "./galeryHome.css";
import Loading from "../../loading/Loading";

const GaleryHome = () => {
  // Maximo 4 items de galeria

  const { setFetch, loading, response, error } = useAxios();
  const [galeryImages, setGaleryImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFetch("/galery", "get");
  }, []);

  useEffect(() => {
    if (!loading && error == "") {
      if (response.length > 3) {
        setGaleryImages(response.slice(0, 4));
      } else {
        setGaleryImages(response);
      }
    }
  }, [response]);

  const handleCLick = () => {
    navigate("/galery");
  };

  return (
    <div className="galery_home">
      <div className="galery_home__info">
        <h6 onClick={handleCLick}> Galeria</h6>
      </div>
      <div className="galery_home__container">
        {loading && (
          <div className="galery_home__loading">
            <Loading weight={5} />
          </div>
        )}

        {galeryImages.map((g) => {
          return <GaleryHomeItem key={g.id} url={g.url} />;
        })}

        { (!loading && galeryImages.length == 0 ) &&
          <div className="galery_home__item galery_home__no_images">
            <span className="material-symbols-outlined">image</span>
            <p>No images</p>
          </div>
        }

        {/* Ver mas */}
        <Link to="galery" className="galery_home__view_more galery_home__item">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default GaleryHome;
