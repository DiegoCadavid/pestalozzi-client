import React from "react";
import { Navigate } from "react-router-dom";
import AdminUnauthorized from "./adminUnauthorized/AdminUnauthorized";

const Private = ({
  component: Component,
  auth,
  authUser,
  roles = ["student"],
}) => {
  
  // Verificamos si estamos autenticados
  if (auth) {
    // Limitaremos las rutas por privadas por roles
    if (roles.includes(authUser.role) || authUser.role == "admin") {
      return Component;
    } else {
      return <AdminUnauthorized authUser={authUser}/>;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;
