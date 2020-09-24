import React from "react";
import { NavLink } from "react-router-dom";
import { ItemNav } from "./ItemNav.js";
import { Burguer } from "./Burguer.js";
import "./NavBar.css";
import CartIcon from "./CartIcon/CartIcon.jsx";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="cont-nav contenedor">
        <h1>
          <NavLink to="/" className="logo">
            La Tienda
          </NavLink>
        </h1>
        <ul>
          <li className="enlace">
            <ItemNav
              href="/productos"
              activeClass="activeLink"
              texto="Productos"
            />
          </li>
          <li className="enlace">
            <ItemNav
              href="/ingresar"
              activeClass="activeLink"
              texto="Ingresar"
            />
          </li>
          <li>
            <CartIcon />
          </li>
          <li>
            <Burguer to="/menu" activeClassName="activeLink" />
          </li>
        </ul>
      </div>
    </div>
  );
}
