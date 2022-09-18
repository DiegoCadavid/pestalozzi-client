import React from "react";
import { useNavigate } from "react-router-dom";

const GaleryFullscreen = ({ img}) => {    

    const navigate =  useNavigate();

    const handleFullExit = () => {
        navigate('/galery')
    }

  return (
    <div className="galery__fullscreen fadeIn">
      <div className="galery__fullscreen_image">
        <img src={img} alt='fullScreen image' />
      </div>
      <button className="galery__fullscreen_exit" onClick={handleFullExit}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default GaleryFullscreen;
