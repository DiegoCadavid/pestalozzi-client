import React from "react";
import "./adminUnauthorized.css";

const AdminUnauthorized = ({ authUser }) => {
  return (
    <div className="unauthorized section_app">
      <h2> No autorizado </h2>
      <div className="unauthorized__info">
        <span className="material-symbols-outlined">badge</span>
        <p> Tu rol de <b> {authUser.role} </b> no esta autorizado para esta seccion </p>
      </div>
    </div>
  );
};

export default AdminUnauthorized;
