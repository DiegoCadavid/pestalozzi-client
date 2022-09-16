import React from "react";
import { Link, useNavigate } from "react-router-dom";
import imgtest from "../../../assets/Our3.jpg";

const NewsHomeItem = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/news/test');
    }

  return (
    <div className="news_home__item" onClick={handleClick}>
      <div className="news_home__item_image">
        <img src={imgtest} alt="test img" />
      </div>
      <div className="news_home__item_info">
        <h6> Title </h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
    </div>
  );
};

export default NewsHomeItem;
