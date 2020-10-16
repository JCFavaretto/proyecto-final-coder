import React, { useState } from "react";
import "components/AuthForm/AuthForm.css";
import { fb, db } from "fire/index.js";
import { useHistory } from "react-router-dom";

const AuthForm = ({ reg }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(mail, password)
          .then((cred) => {
            db.collection("users").doc(cred.user.uid).set({
              nombre: userName,
              phoneNumber: phoneNumber,
              wishlist: [],
              orders: [],
            });
          })
          .then(() => {
            setSuccess("Usuario Creado");
          })
          .then(() => {
            setSuccess("");
            history.push("/");
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
            setSuccess("");
            history.push("/");
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
    <form className="login" onSubmit={(e) => handleAuthSubmit(e)}>
      {reg && (
        <>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Numero de Telefono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => inputMail(e)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
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
