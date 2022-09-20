import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";
import isAuth from "../helpers/isAuth";

const AdminUsersForm = ({ userCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const { setFetch, response, loading, error } = useAxios({
    pending: "Creando usuario!",
    success: "Usuario creado",
    error: "Error al crear usuario",
  });

  const submit = (data) => {
    isAuth()
      .then((res) => {
        setFetch("/user", "post", data, {
          auth: res.auth,
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    if (!loading) {
      // Usuario creado!
      userCreate(response);
      resetField("username");
      resetField("password");
    }
  }, [response]);

  
  return (
    <div className="admin_users__form">
      <form
        className="admin_users__form_container"
        onSubmit={handleSubmit(submit)}
      >
        <div className="admin_users__form_inputs">
          <input
            type="text"
            placeholder="usuario"
            autoComplete="off"
            {...register("username", { required: true })}
          />
          <input
            type="password"
            placeholder="contraseña"
            autoComplete="off"
            {...register("password", { required: true })}
          />
          <select id="role" {...register("role", { required: true })}>
            <option value="student">Estudiante</option>
            <option value="teacher">Profesor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button className="admin_users__form_btn_create">
          <span className="material-symbols-outlined">person_add</span>
        </button>
      </form>
    </div>
  );
};

export default AdminUsersForm;
