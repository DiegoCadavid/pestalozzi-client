import React from "react";
import "./newsHome.css";
import NewsHomeItem from "./NewsHomeItem";

const NewsHome = () => {
  return (
    <div className="news_home">
      <div className="news_home__title">
        <h3> Noticias </h3>
        <span>  </span>
      </div>
      <div className="news_home__container">
        <NewsHomeItem />
        <NewsHomeItem />
        <NewsHomeItem />
      </div>
    </div>
  );
};

export default NewsHome;
