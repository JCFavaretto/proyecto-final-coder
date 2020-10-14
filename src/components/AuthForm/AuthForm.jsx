import React, { useState } from "react";
import "components/AuthForm/AuthForm.css";
import { fb } from "fire/index.js";

const AuthForm = ({ reg }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(mail, password)
          .then(({ user }) => {
            console.log(`Nuevo usuario: ${user}`);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        fb.auth()
          .signInWithEmailAndPassword(mail, password)
          .then(({ user }) => {
            console.log(`Inicio sesión: ${user}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const confirmPass = (e) => {
    if (e.target.value !== password) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Ingresa tu Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Ingresa tu contraseña"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {reg && (
        <input
          type="password"
          placeholder="Confirme contraseña"
          onChange={(e) => confirmPass(e)}
          required
        />
      )}
      <p className="error-msg">{error}</p>
      <button className="btn btn-log">{reg ? "Registrar" : "Ingresar"} </button>
    </form>
  );
};

export default AuthForm;
