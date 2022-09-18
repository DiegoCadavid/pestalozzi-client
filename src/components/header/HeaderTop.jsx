import { useNavigate } from "react-router-dom";

import logo from "../../assets/Logo.png";

const HeaderTop = ({ showMobileMenu }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('contact');
  }

  return (
    <div className="header__top">
      <img src={logo} alt="pestalozzi logo" />
      <div className="header__top_title">
        <h6> Colegio </h6>
        <h5> Pestalozzi </h5>
        <p> Licencia de funcionamiento 06922 </p>
      </div>

      <div className="header__top_icons">
        <span onClick={handleClick} className="material-symbols-outlined">mail</span>
        <span onClick={handleClick} className="material-symbols-outlined">location_on</span>
        <span onClick={handleClick} className="material-symbols-outlined">call</span>
      </div>

      <button className="header__nav_button" onClick={showMobileMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
};

export default HeaderTop;
