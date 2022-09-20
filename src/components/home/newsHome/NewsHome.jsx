import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./newsHome.css";
import NewsHomeItem from "./NewsHomeItem";

const NewsHome = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/news');
  }

  return (
    <div className="news_home">
      <div className="news_home__title">
        <h3 onClick={handleClick}> Noticias </h3>
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
