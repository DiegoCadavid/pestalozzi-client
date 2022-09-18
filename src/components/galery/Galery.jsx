import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

import GaleryFullscreen from "./GaleryFullscreen";
import GaleryItem from "./GaleryItem";

import "./galery.css";

const Galery = ({ mobileDevice }) => {

  const [fullscreenImage, setFullscreenImage] = useState('');
  

   const location = useLocation();
   
   useEffect(() => {
     setFullscreenImage( queryString.parse(location.search).fullscreen || '' );
   }, [ location.search ]);

   useEffect(() => {
     if(fullscreenImage != ''){
      document.body.classList.add('noscroll');
     }else {
      document.body.classList.remove('noscroll');
     }
   }, [fullscreenImage])
   

  return (
    <div className="galery section_app">
      <h2> Galeria </h2>
      {mobileDevice && <p> Puedes agrandar una imagen al tocarla</p>}
        { fullscreenImage != '' && <GaleryFullscreen img={fullscreenImage} />}

      <div className="galery__container" > 
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
      </div>
    </div>
  );
};

export default Galery;
