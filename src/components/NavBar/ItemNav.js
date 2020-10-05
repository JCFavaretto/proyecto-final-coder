import React from "react";
import { NavLink } from "react-router-dom";

export function ItemNav({ href, activeClass = "none", texto }) {
  return (
    <NavLink to={href} activeClassName={activeClass}>
      {texto}
    </NavLink>
  );
}
