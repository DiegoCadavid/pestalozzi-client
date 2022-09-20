import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import isAuth from "../helpers/isAuth";

const AdminGaleryItem = ({ url = "", id = "", onRemove }) => {
  const { setFetch, response, loading, error } = useAxios({
    pending: "Removiendo imagen!",
    success: "Imagen removida",
    error: "Error al remover imagen",
  });

  const handleRemove = () => {
    isAuth().then((res) => {
      setFetch(
        "/galery",
        "delete",
        { id },
        {
          auth: res.auth,
        }
      );
    });
  };

  useEffect(() => {
    if (!loading && error == "") {
      onRemove(id);
    }
  }, [response]);

  return (
    <div className="admin_galery__item fadeIn">
      <img src={url} alt="admin image item" />
      <div className="admin_galery__item_action">
        <button onClick={handleRemove}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};

export default AdminGaleryItem;
