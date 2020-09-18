import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ id, img, nombre, precio }) => {
  return (
    <li className="item home txtHome">
      <img className="img-lista" src={img} alt="" />

      <div className="txt-lista">
        <NavLink to={`/productos/${id}`}>{nombre}</NavLink>
        <p className="precio-lista">${precio} </p>
      </div>
    </li>
  );
};

export default Item;
