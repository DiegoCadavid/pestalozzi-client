import React from "react";
import HeaderNavLink from "../../header/HeaderNavLink";


const AdminNav = ( { closedMenu }) => {
  return (
    <> 
         <HeaderNavLink
          closedMenu={closedMenu}
          to="admin"
          name="admin inicio"
          admin='true'
        />
        
         <HeaderNavLink
          closedMenu={closedMenu}
          to="admin/users"
          name="admin usuarios"
          admin='true'
        />
         <HeaderNavLink
          closedMenu={closedMenu}
          to="admin/galery"
          name="admin galeria"
          admin='true'
        />
         <HeaderNavLink
          closedMenu={closedMenu}
          to="admin/carousel"
          name="admin carusel"
          admin='true'
        />

         <HeaderNavLink
          closedMenu={closedMenu}
          to="admin/news"
          name="admin noticias"
          admin='true'
        />
    </>
  );
};

export default AdminNav;
