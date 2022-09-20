import React, { useEffect } from "react";

import Carousel from "./carousel/Carousel";
import NewsHome from "./newsHome/NewsHome";
import GaleryHome from "./galeryHome/GaleryHome";
import OurInstitution from "./ourInstitutionHome/OurInstitution";

import "./home.css";
import ContactHome from "./contactHome/ContactHome";

const Home = () => {
  return (
    <div>
      <Carousel />
      <OurInstitution />
      <NewsHome />
      <GaleryHome />
      <ContactHome />
    </div>
  );
};

export default Home;
