import React from "react";
import { useNavigate } from "react-router-dom";

const OurInstitutionInfoItem = ({content='', icon='school'} ) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('about');
  }

  return (
    <div className="our__info_item" onClick={handleClick}>
      <span className="material-symbols-outlined" translate="no">{icon}</span>
      <p>{ content }</p>
    </div>
  );
};

export default OurInstitutionInfoItem;
