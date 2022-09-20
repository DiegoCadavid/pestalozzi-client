import React from "react";
import { useNavigate } from "react-router-dom";



const GaleryItem = ({ url = "https://www.pestalozzi.edu.co/images/slide/colegio-pestalozzi-1.jpg"}) => {

    const navigate = useNavigate();

    const handleFull  = () => {
     navigate(`?fullscreen=${url}`);
    }

  return (
    <div>
      <div className="galery__item fadeIn">
        <img src={url} alt='imagen galeria' />
        <div className="galery__item_info">
          <button onClick={handleFull}>
            <span className="material-symbols-outlined">fullscreen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GaleryItem;
