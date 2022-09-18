import React from "react";
import "./academic.css";
import AcademicItem from "./AcademicItem";
import academicDocumentsJson from './academicDocuments.json';

const Academic = () => {
  return (
    <div className="academic section_app">
      <h2> Gestion academica</h2>
      <div className="academic__container">
        <AcademicItem title="PEI 2015" url={ academicDocumentsJson.PEI.publicUrl } />
        <AcademicItem title="Sistema de evaluacion institucional" url={ academicDocumentsJson.SIEE.publicUrl } />
        <AcademicItem title="Manual de convicencia" url={ academicDocumentsJson.MANUAL.publicUrl } />
      </div>
    </div>
  );
};

export default Academic;
