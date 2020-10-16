import React, { useState, useContext } from "react";
import "components/AuthForm/AuthForm.css";
import { fb } from "fire/index.js";
import { useHistory } from "react-router-dom";
import AuthContext from "context/AuthContext";

const AuthForm = ({ reg }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();
  const [{ user }] = useContext(AuthContext);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      if (reg) {
        fb.auth()
          .createUserWithEmailAndPassword(mail, password)
          .then(() => {
            console.log(user);
            user.updateProfile({
              displayName: { userName },
              phoneNumber: { phoneNumber },
            });
          })
          .then(({ user }) => {
            console.log(user);
            setSuccess("Usuario Creado");
            setTimeout(() => {}, 600);
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
