import logo from "../../assets/Logo.png";

const HeaderTop = ({ showMobileMenu }) => {
  return (
    <div className="header__top">
      <img src={logo} alt="pestalozzi logo" />
      <div className="header__top_title">
        <h6> Colegio </h6>
        <h5> Pestalozzi </h5>
        <p> Licencia de funcionamiento 06922 </p>
      </div>

      <div className="header__top_icons">
        <span className="material-symbols-outlined">mail</span>
        <span className="material-symbols-outlined">location_on</span>
        <span className="material-symbols-outlined">call</span>
        <span className="material-symbols-outlined">dark_mode</span>
      </div>

      <button className="header__nav_button" onClick={showMobileMenu}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  );
};

export default HeaderTop;
