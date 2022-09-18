import React from "react";

const AcademicItem = ({ title = "title test", url = "" }) => {
  return (
    <div className="academic__item">
      <h5> {title} </h5>
      <a href={`/${url}`} target='_blank'>
      ver
      <span className="material-symbols-outlined">link</span>
      </a>
    </div>
  );
};

export default AcademicItem;
