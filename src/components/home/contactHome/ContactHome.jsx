import React from "react";

import "./contactHome.css";

const ContactHome = () => {
  return (
    <div className="contact_home">
      <h3>Contacto</h3>

      <div className="contact_home__info">
        <div className="contact_home__info_item">
          <span className="material-symbols-outlined">location_on</span>
          <p> Cra. 75 # 20 - 44 - Medellín - Colombia </p>
        </div>

        <div className="contact_home__info_item">
          <span className="material-symbols-outlined">mail</span>
          <p> secretaria@pestalozzi.edu.co </p>
        </div>

        <div className="contact_home__info_item">
          <span className="material-symbols-outlined">call</span>
          <p> (60 4) 444 33 44 </p>
        </div>
      </div>
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2965676905806!2d-75.59844518476883!3d6.22457212829193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429c1e960c88b%3A0x5c23282a3695ed4a!2sColegio%20Pestalozzi!5e0!3m2!1sen!2sco!4v1663320388523!5m2!1sen!2sco"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactHome;
