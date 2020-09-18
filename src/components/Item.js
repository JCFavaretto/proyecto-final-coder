import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ id, img, nombre, precio }) => {
  return (
    <li className="item home txtHome">
      <img src={img} alt="" />
      <NavLink to={`/productos/${id}`}>{nombre}</NavLink>
      <p className="precio">${precio} </p>
    </li>
  );
};

export default Item;
