import React, { useState } from "react";
import "components/AuthForm/AuthForm.css";
import { fb } from "fire/index.js";
import { useHistory } from "react-router-dom";

const AuthForm = ({ reg }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(mail, password)
          .then(({ user }) => {
            console.log(user);
            setSuccess("Usuario Creado");
            setTimeout(() => {}, 600);
          })
          .then(() => {
            setTimeout(() => {
              setSuccess("");
              history.push("/");
            }, 600);
          })
          .catch((err) => {
            setError(() => err.message);
          });
      } else {
        fb.auth()
          .signInWithEmailAndPassword(mail, password)
          .then(({ user }) => {
            console.log(user);
            setSuccess("Iniciando Sesión");
          })
          .then(() => {
            setTimeout(() => {
              setSuccess("");

              history.push("/");
            }, 600);
          })
          .catch((err) => {
            setError(() => err.message);
          });
      }
    }
  };

  const inputMail = (e) => {
    setMail(e.target.value);
    setError(() => "");
  };

  const inputPass = (e) => {
    setPassword(e.target.value);
    setError(() => "");
  };

  const confirmPass = (e) => {
    if (e.target.value !== password) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
    }
  };

  return (
    <form className="login" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        placeholder="Ingresa tu Email"
        value={mail}
        onChange={(e) => inputMail(e)}
        required
      />
      <input
        type="password"
        placeholder="Ingresa tu contraseña"
        onChange={(e) => inputPass(e)}
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
      <p className="success-msg">{success} </p>
      <button className="btn btn-log">{reg ? "Registrar" : "Ingresar"} </button>
    </form>
  );
};

export default AuthForm;
