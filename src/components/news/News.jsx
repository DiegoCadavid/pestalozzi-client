import React from "react";
import "./news.css";

const News = () => {
  return (
    <div className="news section_app">
      <h2> Noticias </h2>
      <div className="news__info">
        <div className="news__info_title">
          <span className="material-symbols-outlined">engineering</span>
          <h6> En <br /> construccion</h6>
        </div>
        <div className="news__info_content">
          Esta sección de la pagina sigue en desarrollo.
        </div>
      </div>
    </div>
  );
};

export default News;
