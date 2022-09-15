import React, { useEffect } from "react";
import Carousel from "./carousel/Carousel";
import GaleryHome from "./galery/GaleryHome";

import "./home.css";
import NewsHome from "./news/NewsHome";
import OurInstitution from "./ourInstitution/OurInstitution";

const Home = () => {
  // Verificamos si la pagina tiene un hash
  useEffect(() => {
    return () => {
      const hash = window.location.hash;

      if (hash) {
        const section = document.querySelector(hash);
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  return (
    <div>
      <Carousel />
      <OurInstitution />
      <NewsHome />
      <GaleryHome />
    </div>
  );
};

export default Home;
