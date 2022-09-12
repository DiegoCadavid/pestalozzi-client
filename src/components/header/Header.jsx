import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderTop from "./HeaderTop";

import "./header.css";

const Header = ({mobileDevice}) => {

  const [mobileShowMenu, setMobileShowMenu] = useState(false);

  const handleOpen = () => {
    setMobileShowMenu(true)
  }

  const handleClose = () => {
    setMobileShowMenu(false);
  }


  useEffect(() => {
    if( mobileShowMenu ){
        document.body.classList.add('noscroll');
      }else{
        document.body.classList.remove('noscroll');
    }
    
  }, [mobileShowMenu])
  

  return (
    <>
      <HeaderTop mobileDevice={mobileDevice} showMobileMenu={handleOpen} />
      { !mobileDevice && <HeaderNav />}
      { mobileShowMenu && <HeaderNavMobile closedMenu={handleClose} />}
    </>
  );
};

export default Header;
