import React from "react";
import { Link } from "react-router-dom";
import "./newsHome.css";
import NewsHomeItem from "./NewsHomeItem";

const NewsHome = () => {
  return (
    <div className="news_home">
      <div className="news_home__title">
        <h3> Noticias </h3>
      </div>
      <div className="news_home__container">
        <NewsHomeItem />
        <NewsHomeItem />
        <NewsHomeItem />
        <NewsHomeItem />
      </div>
      <Link to="news"> Ver mas </Link>
    </div>
  );
};

export default NewsHome;
