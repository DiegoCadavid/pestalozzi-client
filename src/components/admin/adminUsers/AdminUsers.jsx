import React from "react";
import "./adminUsers.css";
import AdminUsersItem from "./AdminUsersItem";

const AdminUsers = () => {
  return (
    <div className="admin_users section_app">
      <h2> Administrar usuarios </h2>
      <div className="admin_users__container">
        <AdminUsersItem />
        <AdminUsersItem />
        <AdminUsersItem />
        <AdminUsersItem />
        <AdminUsersItem />
      </div>
    </div>
  );
};

export default AdminUsers;
