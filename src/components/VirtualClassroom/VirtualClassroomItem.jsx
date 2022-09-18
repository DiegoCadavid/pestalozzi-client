import React from "react";

const VirtualClassroomItem = ({ title = "title test", url = "#" }) => {
  return (
    <div className="virtual__item">
      <div className="virtual__item_info">
        <span className="material-symbols-outlined">public</span>
        {title}
      </div>

      <a href={url} target="_blank">
        Entrar
        <span className="material-symbols-outlined">link</span>
      </a>
    </div>
  );
};

export default VirtualClassroomItem;
