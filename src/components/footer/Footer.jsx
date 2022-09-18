import React from "react";
import "./footer.css";

// Icons
import procreditoIcon from "../../assets/procreditoIcon.png";
import fenalcoIcon from "../../assets/FenalcoIcon.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* Titulo */}
      <div className="footer__row">
        <h3>pestalozzi</h3>
      </div>

      {/* Informacion y redes sociales */}
      <div className="footer__row footer__row_border">
        {/* Informacion de contacto */}
        <div className="footer__column footer__contact " translate="no">
          <h6>Informacion de contacto</h6>
          <ul>
            <li>
              <span className="material-symbols-outlined">location_on</span>
              Cra. 75 # 20 - 44 - Medellín - Colombia
            </li>
            <li>
              <span className="material-symbols-outlined">mail</span>
              (60 4) 444 33 44
            </li>
            <li>
              <span className="material-symbols-outlined">call</span>
              secretaria@pestalozzi.edu.co
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer__column footer__social">
          <h6>Redes sociales</h6>
          <ul>
            <li facebook="true">
              <a
                href="https://www.facebook.com/ColegioPestalozziMedellin/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li instagram="true">
              <a
                href="https://www.instagram.com/colegiopestalozzimedellin/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Afiliados y links de interes */}
      <div className="footer__row">
        <div className="footer__column footer__affiliates">
          <h6>Afiliados</h6>
          <div>
            <img src={fenalcoIcon} alt="Fenalco" />
            <img src={procreditoIcon} alt="procredito" />
          </div>
        </div>
        <div className="footer__column footer__links">
          <h6>Links de interes</h6>
          <ul>
            <li>
              <a href="https://new.edmodo.com/" target="_blank">
                Edmodo
              </a>
            </li>
            <li>
              <a
                href="https://www.plataformaenlinea.com/2017/app/login/"
                target="_blank"
              >
                Enlinea
              </a>
            </li>
            <li>
              <a
                href="https://www.santillanaconnect.com/Account/Login/?wtrealm=http%3a%2f%2flms30.santillanacompartir.com%2flogin%2fcompartir%2f&wreply=https%3a%2f%2flms30.santillanacompartir.com%2flogin%2fsso%2floginconnect"
                target="_blank"
              >
                Santillana
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Informacion legal */}
      <div className="footer__row footer__legal">
        <p>
          Copyright © Colegio Pestalozzi 2022 - Todos los derechos reservados
        </p>
      </div>
      <div className="footer__row  footer__about">
        <p>
          Diseñado y programado por <br />
          <a
            href="https://devchallenges.io/portfolio/DiegoCadavid"
            target="_blank"
          >
            Diego Cadavid
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
