import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submit = (data) => {
    // Comprobamos credenciales

    // Guardamos credenciales
    sessionStorage.setItem('auth', 'JWT');

    // Enviamos a admin route
    handleLogin();
    navigate('/admin');
  }

  return (
    <div className="login">
      <h2> Login </h2>
      <form onSubmit={handleSubmit(submit)}>
        <input type='text' placeholder="Usuario" {...register("user", { required: true })} />
        {errors.user && <p>Usuario requerido.</p>}

        <input type='password' placeholder="contraseña" autoComplete="on" {...register("password", { required: true })} />
        {errors.password && <p>Contraseña requerida.</p>}

        <input type="submit" value='Iniciar sesion'/>
      </form>
    </div>
  );
};

export default Login;
