import React, { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderTop from "./HeaderTop";

import "./header.css";
import AdminNav from "../admin/adminNav/AdminNav";
import isAuth from "../admin/helpers/isAuth";

const Header = ({ mobileDevice, auth }) => {
  const [mobileShowMenu, setMobileShowMenu] = useState(false);

  const handleOpen = () => {
    setMobileShowMenu(true);
  };

  const handleClose = () => {
    setMobileShowMenu(false);
  };

  useEffect(() => {
    if (mobileShowMenu) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [mobileShowMenu]);

  return (
    <div translate="no">
      <HeaderTop mobileDevice={mobileDevice} showMobileMenu={handleOpen} />
      {!mobileDevice && <HeaderNav auth={auth} />}
      {mobileShowMenu && (
        <HeaderNavMobile closedMenu={handleClose} auth={auth} />
      )}
    </div>
  );
};

export default Header;
