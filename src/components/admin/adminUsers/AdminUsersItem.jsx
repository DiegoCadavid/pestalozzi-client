import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import isAuth from "../helpers/isAuth";

const AdminUsersItem = ({
  name = "nombre test",
  role = "admin",
  id = "",
  userRemove = () => {},
}) => {
  const { setFetch, response, loading, error } = useAxios({
    pending: "Removiendo usuario!",
    success: "Usuario removido",
    error: "Error al remover usuario",
  });

  const handleRemove = () => {
    isAuth()
      .then((res) => {
        // console.log(res.auth);
        setFetch(
          "/user",
          "delete",
          { id },
          {
            auth: res.auth,
          }
        );
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    if (!loading) {
      userRemove(response.user);
    }
  }, [response]);

  useEffect(() => {
    if(error != ""){
      toast.error(error);
    }
  }, [error])
  

  return (
    <div className="admin_users__item fadeIn">
      <div className="admin_users__item_title">
        <span className="material-symbols-outlined">manage_accounts</span>
        {name} <span className="admin_users__item_role"> {role} </span>
      </div>

      <div className="admin_users__item_btn">
        <button className="admin_users__item_btn_remove" onClick={handleRemove}>
          <span className="material-symbols-outlined">person_remove</span>
        </button>
      </div>
    </div>
  );
};

export default AdminUsersItem;
