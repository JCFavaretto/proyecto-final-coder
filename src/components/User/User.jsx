import React from "react";

const User = ({ isUser }) => {
  return (
    <div className="contenedor">
      <ul className="user-data ">
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
  );
};

export default User;
