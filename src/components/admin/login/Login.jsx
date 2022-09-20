import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../../../hooks/useAxios";

import "./login.css";

const Login = ({ handleLogin, auth }) => {
  const { setFetch, response, error, loading } = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Verificamos si ya estamos logueados
  useEffect(() => {
    if(auth) {
      navigate('/admin')
    }
  }, [auth])
  

  const submit = ({ username, password }) => {
    // Enviamos la peticion del login con las credenciales
    setFetch("/auth/login", "post", {
      username: username.trim(),
      password: password.trim(),
    });
  };

  useEffect(() => {

    // En caso de error lo notificamos
    if (error != "") {
      toast.error(error);
    }

    if (!loading && error == "") {
      // Guardamos credenciales para que la funcion "isAuth" las pueda leer
      sessionStorage.setItem("auth", response.auth);

      console.log(response.auth);
      // Nos logueamos
      handleLogin();
    }
  }, [response, error, loading]);

  return (
    <div className="login">
      <h2> Login </h2>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Usuario"
          {...register("username", { required: true })}
        />
        {errors.username && <p>Usuario requerido.</p>}

        <input
          type="password"
          placeholder="contraseña"
          autoComplete="on"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Contraseña requerida.</p>}

        <input type="submit" value="Iniciar sesion" />
      </form>
    </div>
  );
};

export default Login;
