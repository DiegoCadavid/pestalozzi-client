import React from "react";
import "./contact.css";
import ContactEmailItem from "./ContactEmailItem";

const Contact = () => {
  return (
    <div className="contact section_app">
      <h2> Contacto </h2>
      <div className="contact__map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2965676905806!2d-75.59844518476883!3d6.22457212829193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429c1e960c88b%3A0x5c23282a3695ed4a!2sColegio%20Pestalozzi!5e0!3m2!1sen!2sco!4v1663320388523!5m2!1sen!2sco"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>

      <div className="contact__info">
        <div className="contact__info_item">
          <span className="material-symbols-outlined">location_on</span>
          <p> Cra. 75 # 20 - 44 - Medellín - Colombia </p>
        </div>

        <div className="contact__info_item">
          <span className="material-symbols-outlined">mail</span>
          <p> secretaria@pestalozzi.edu.co </p>
        </div>

        <div className="contact__info_item">
          <span className="material-symbols-outlined">call</span>
          <p> (60 4) 444 33 44 </p>
        </div>
      </div>

      <div className="contact__email">
        <h4>Correos electronicos</h4>
        <div className="contact__email_container">
          <ContactEmailItem
            name="Beatriz Castañeda | Secretaria"
            email="secretaria@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Andres Adarve Rios"
            email="Indefinido"
          />
          <ContactEmailItem
            name="Dora Ines Arcila V"
            email="arcila@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Yasmid Lopera C"
            email="yasmid@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Patricia Rios Correa"
            email="Indefinido"
          />
          <ContactEmailItem
            name="Carlos Julio Marquez G"
            email="carlos@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Beatriz Elena Achuri Ruiz"
            email="beatriz.archuri@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="David Stiven Becerra M"
            email="david@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Juan Carlos Rios C"
            email="ingles@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Maria Elena Linares Acosta"
            email="linares@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Dora Deicy Gomez"
            email="gomez@pestalozzi.edu.co"
          />
          <ContactEmailItem
            name="Lesly Vanessa Vergara Villada"
            email="lesly.vergara@pestalozzi.edu.co"
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
