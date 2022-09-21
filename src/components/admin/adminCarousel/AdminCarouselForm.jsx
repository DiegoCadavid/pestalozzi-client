import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../loading/Loading";
import isAuth from "../helpers/isAuth";

const AdminCarouselForm = ({ images = [], loadingImages, handleAdd}) => {
  const [dropDownShow, setDropDownShow] = useState(false);
  const [imageSelect, setImageSelect] = useState("");
  const { setFetch, response, loading, error } = useAxios({
    pending: "Subiendo carousel! 😺",
    success: "Carousel subido 😸✨",
    error: "Error al subir el carousel 😿",
  });

  const handleTogleDrop = () => {
    if (imageSelect == "") {
      setDropDownShow(!dropDownShow);
    }
  };

  const handleCloseDrop = () => {
    setDropDownShow(false);
  };

  const handleSelectImage = (id) => {
    return () => {
      setImageSelect(id);
    };
  };

  const handleClearImage = () => {
    setImageSelect("");
    handleCloseDrop();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (data) => {
    // Validamos si tenemos los datos
    if (data.label == "" || !data.label) {
      return toast.error("El titulo es obligatorio 😾");
    }

    if (imageSelect == "") {
      return toast.error("Debes de escojer una imagen 😾");
    }

    // Hacemos la peticion
    isAuth()
      .then((res) => {
        // Limpiamos datos
        resetField("label");
        handleClearImage();

        setFetch(
          "/carousel",
          "post",
          {
            imageId: imageSelect,
            label: data.label,
          },
          {
            auth: res.auth,
          }
        );
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  //   Cuando se realice la peticion
  useEffect(() => {
    if(!loading && error == '') {
        handleAdd(response);
    }
  }, [response])
  

  return (
    <div className="admin_carousel__form" onSubmit={handleSubmit(onSubmit)}>
      <form>
        <div>
          <input type="text" placeholder="Titulo" {...register("label")} />

          {/* Si estan cargando las imagenes */}
          {loadingImages && (
            <div className="admin_carousel__form_loading">
              <Loading weight={5} />
            </div>
          )}

          {/* Si ya cargaron las imagenes */}
          {!loadingImages && (
            <button type="button" onClick={handleTogleDrop}>
              <span className="material-symbols-outlined">
                add_photo_alternate
              </span>
            </button>
          )}

          {dropDownShow && (
            <>
              <div className="admin_carousel__form_dropdown fadeIn">
                <button type="button" onClick={handleClearImage}>
                  <span className="material-symbols-outlined">close</span>
                </button>
                {images.map((i) => {
                  return (
                    <button
                      type="button"
                      key={i.id}
                      onClick={handleSelectImage(i.id)}
                      className={
                        imageSelect == i.id
                          ? "admin_carousel__form_dropdown_active"
                          : "admin_carousel__form_dropdown_inactive"
                      }
                    >
                      <img src={i.url} alt="img dropdown btn" />
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <input type="submit" value="Subir imagen" />
      </form>
    </div>
  );
};

export default AdminCarouselForm;
