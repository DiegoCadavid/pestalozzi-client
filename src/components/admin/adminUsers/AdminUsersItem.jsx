import React from "react";

const AdminUsersItem = ({ name = "nombre test", id = "" }) => {
  return (
    <div className="admin_users__item">
      <div className="admin_users__item_title">
        <span className="material-symbols-outlined">manage_accounts</span>
        {name}
      </div>

      <div className="admin_users__item_btn">
        <button className="admin_users__item_btn_remove">
          <span className="material-symbols-outlined">person_remove</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default AdminUsersItem;
