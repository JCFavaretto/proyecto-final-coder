import AuthContext from "context/AuthContext";
import React from "react";
import { useContext } from "react";
import "pages/User/UserData.css";

const UserData = () => {
  const [{ isUser }] = useContext(AuthContext);

  return (
    <div className="home contenedor">
      <h2 className="titulo divisor">Usuario</h2>
      <div>
        <h4 className="titulo2">Mis datos</h4>
        <ul className="user-data">
          <li>
            <p>
              Nombre: <span className="dato">{isUser.nombre}</span>
            </p>
          </li>
          <li>
            <p>
              Telefono: <span className="dato">{isUser.phoneNumber}</span>
            </p>
          </li>
          <li>
            <p>
              Email: <span className="dato">{isUser.email}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserData;
