import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import isAuth from "../helpers/isAuth";

const AdminGaleryForm = ({ handleAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const { setFetch, response, loading, error } = useAxios({
    pending: "Subiendo imagen! 😺",
    success: "Imagen subida 😸✨",
    error: "Error al subir imagen 😿",
  });

  const submit = (data) => {
    // Validamos si el usuario subio una imagen
    if (data.fileImage.length <= 0) {
      return toast.error("Debe de subir una imagen 😾");
    }

    const imageFile = data.fileImage[0];

    // Validamos si es una imagen
    if (imageFile.type.split("/")[0] != "image") {
      return toast.error("El archivo debe ser una imagen 😾");
    }

    // Creamos el form data
    const formData = new FormData();
    formData.append("image", imageFile);

    // Creamos la peticion
    isAuth()
      .then((res) => {
        resetField("fileImage");
        setFetch("/galery", "post", formData, {
          auth: res.auth,
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    if (!loading && error == "") {
      handleAdd(response);
    }
  }, [response]);
  return (
    <div className="admin_galery__form">
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="file"
          accept="image/*"
          {...register("fileImage")}
          multiple={false}
        />
        <input type="submit" value="Subir imagen" />
      </form>
    </div>
  );
};

export default AdminGaleryForm;
