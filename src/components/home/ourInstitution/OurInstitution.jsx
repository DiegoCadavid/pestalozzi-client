import React from "react";
import './ourInstitution.css';
import OurInstitutionInfoItem from "./OurInstitutionInfoItem";

const OurInstitution = () => {
  return (
    <div className="our">
      <div className="our__title">
        <span class="material-symbols-outlined">import_contacts</span>
        <h4> Colegio Pestalozzi </h4>
        <h3> Nuestra institucion </h3>
      </div>
      <div className="our__info_container">
          <OurInstitutionInfoItem />
          <OurInstitutionInfoItem />
          <OurInstitutionInfoItem />
      </div>
    </div>
  );
};

export default OurInstitution;
