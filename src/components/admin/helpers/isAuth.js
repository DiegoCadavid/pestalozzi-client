import axios from "axios";
import baseUrlConfig from "../../../axiosBaseUrl.json";

const isAuth = () => {
  return new Promise((resolve, reject) => {
    // Obtenemos el token 
    const authJWT = sessionStorage.getItem("auth");

    // Verificar si existe el token
    if (!authJWT) {
      console.log("Usuario no verificado");
      return reject("No se encontro el token, nesesita iniciar sesion");
    }

    // Hacemos la peticion donde verificaremos el token
    axios({
      method: "post",
      url: `${baseUrlConfig.baseUrl}/auth/verify`,
      data: {
        auth: authJWT,
      },
    })
      .then((res) => {
        if (res.data.data) {
          console.log(`${res.data.user.username} Verificado!`);
          return resolve(res.data.user);
        } else {
          console.log("Usuario no verificado");
          return reject("Verificacion fallida!");
        }
      })
      .catch((err) => {
        reject("Error en la peticion http");
        console.log(err.response.data.msg);
      });
  });
};

export default isAuth;
