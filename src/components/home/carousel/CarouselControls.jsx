import React from "react";

const CarouselControls = ({ icon = "minimize", handleAction, noImages, direction }) => {
  return (
    <div className={`carousel__controls carousel__controls_${direction}`}>
      <button onClick={handleAction} disabled={noImages}>
        <span className="material-symbols-outlined"> {icon} </span>
      </button>
    </div>
  );
};

export default CarouselControls;
