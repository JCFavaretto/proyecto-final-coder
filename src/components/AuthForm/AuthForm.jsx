import React, { useState } from "react";
import "components/AuthForm/AuthForm.css";

const AuthForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="contenedor home">
      <h3 className="titulo">Inicio de Sesión</h3>
      <form className="login">
        <input
          type="text"
          placeholder="Ingresa tu Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-log">Ingresar</button>
      </form>
    </section>
  );
};

export default AuthForm;
