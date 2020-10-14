import AuthForm from "components/AuthForm/AuthForm";
import React, { useState } from "react";
import "./Authorization.css";

const Autorization = () => {
  const [registrarse, setRegistrarse] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setRegistrarse(!registrarse);
  };

  return (
    <section className="contenedor home">
      <h3 className="titulo">
        {registrarse ? "Registro de usuario nuevo" : "Inicio de Sesión"}
      </h3>
      <AuthForm reg={registrarse} />

      <p className="opcion-ingreso" onClick={handleClick}>
        {registrarse
          ? "Si ya tiene una cuenta, click aqui para iniciar sesion"
          : "Click aqui para registrarse"}
      </p>
    </section>
  );
};

export default Autorization;
