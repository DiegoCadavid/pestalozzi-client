import React from "react";

import './ourInstitution.css';
import OurInstitutionInfoItem from "./OurInstitutionInfoItem";

const OurInstitution = () => {

  return (
    <div className="our">
      <div className="our__title">
        <span className="material-symbols-outlined" translate="no">import_contacts</span>
        <h4> Colegio Pestalozzi </h4>
        <h3> Nuestra institucion </h3>
      </div>
      <div className="our__info_container">
          <OurInstitutionInfoItem content="Pensamiento" icon="psychology" />
          <OurInstitutionInfoItem content="Amor" icon="favorite" />
          <OurInstitutionInfoItem content="Accion" icon="hand_gesture"/>
      </div>
    </div>
  );
};

export default OurInstitution;
