import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ItemNav } from "./ItemNav.js";
import { Burguer } from "./Burguer.js";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div className="cont-nav contenedor">
        <h1>
          <NavLink to="/" className="logo" >
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
            <NavLink to="/carrito" activeClassName="activeLink">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </li>
          <li>
            <Burguer to="/menu" activeClassName="activeLink" />
          </li>
        </ul>
      </div>
    </div>
  );
}
