import React from "react";
import "./virtualClassroom.css";
import VirtualClassroomItem from "./VirtualClassroomItem";

const VirtualClassroom = () => {
  return (
    <div className="virtual section_app">
      <h2>Aula virtual</h2>
      <div className="virtual__alert">
        <h6>Advertencia</h6>
        <p>
          El Colegio Pestalozzi facilita el canal de Videochat pero no ejerce
          función de control o monitoreo del mismo otro diferente al que ejerce
          el docente durante su tiempo conectado, por esta razón pedimos el
          favor a padres y acudientes supervisar su uso en el horario
          extra-clase. En todo caso no olvide que puede comunicarnos vía e-mail
          cualquier duda o inquietud respecto a este canal. Para tomar medidas
          correctivas y/o evaluar su efectividad.
        </p>
      </div>

      <div className="virtual__container"> 
        <VirtualClassroomItem title="Asesoria y acompañamiento psicologico" url="https://meet.google.com/vmw-erqb-gcb"/>

        <VirtualClassroomItem title="Grado 1" url="https://meet.google.com/dop-axcr-zme"/>
        <VirtualClassroomItem title="Grado 2" url="https://meet.google.com/nad-ysrt-zem"/>
        <VirtualClassroomItem title="Grado 3" url="https://meet.google.com/pth-nxtd-cpb"/>
        <VirtualClassroomItem title="Grado 4" url="https://meet.google.com/nhn-hhnq-rys"/>
        <VirtualClassroomItem title="Grado 5" url="https://meet.google.com/xez-jego-nsm"/>
        <VirtualClassroomItem title="Grado 6" url="https://meet.google.com/gft-mvnv-car"/>
        <VirtualClassroomItem title="Grado 7" url="https://meet.google.com/zdu-uogg-czc"/>
        <VirtualClassroomItem title="Grado 8" url="https://meet.google.com/oph-yrkp-aas"/>
        <VirtualClassroomItem title="Grado 9" url="https://meet.google.com/dvr-bddo-nqv"/>
        <VirtualClassroomItem title="Grado 10" url="https://meet.google.com/dfq-viuw-ffq"/>
        <VirtualClassroomItem title="Grado 11" url="https://meet.google.com/dma-sxyt-yqg"/>
        <VirtualClassroomItem title="Transicion" url="https://meet.google.com/arz-tcsd-umh"/>
        

        
      </div>
    </div>
  );
};

export default VirtualClassroom;
