import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const Item = ({ id, img, nombre }) => {
  return (
    <li className="item txtHome">
      <img src={img} alt="" />
      <NavLink to={`/productos/${id}`}>{nombre}</NavLink>
    </li>
  );
};

export default Item;
