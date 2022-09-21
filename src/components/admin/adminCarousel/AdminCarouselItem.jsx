import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import isAuth from "../helpers/isAuth";

const AdminCarouselItem = ({ url, label, id, onRemove}) => {
  const { setFetch, response, loading, error } = useAxios({
    pending: "Eliminado carousel! 😺",
    success: "Carousel eliminado 😸✨",
    error: "Error al eliminar el carousel 😿",
  });

  const handleRemove = () => {
    isAuth().then((res) => {
      setFetch("/carousel", "delete", {
        id,
      },{
        auth: res.auth
      });
    }).catch( err => {
        toast.error(err)
    } );
  };

  useEffect(() => {
    if(!loading && error == "" ){
        onRemove(response.id);
    }
  
  }, [response])
  

  return (
    <div className="admin_carousel__item">
      {!url && (
        <div className="admin_carousel__item_bad">
          <span className="material-symbols-outlined">image</span>
          <p>La imagen "{label}" fue removida de la galeria</p>
          <div className="admin_carousel__item_bad_btn">
            <button className="admin_carousel__item_bad_btn_remove" onClick={handleRemove}>
              Eliminar
            </button>
          </div>
        </div>
      )}

      {url && (
        <>
          <div className="admin_carousel__item_info">
            <button onClick={handleRemove}>
              <span className="material-symbols-outlined">delete</span>
            </button>
            <p> "{label}"</p>
          </div>
          <img src={url} alt={label} />
        </>
      )}
    </div>
  );
};

export default AdminCarouselItem;
