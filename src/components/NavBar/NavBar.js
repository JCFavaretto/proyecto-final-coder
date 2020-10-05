import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemNav } from "./ItemNav.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCross,
  faEllipsisH,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import CartIcon from "./CartIcon/CartIcon.jsx";
import NavMenu from "components/NavMenu/NavMenu.jsx";

export function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(() => !sideBar);
  };

  return (
    <div className="navbar">
      <div className="cont-nav contenedor">
        <h1>
          <NavLink to="/" className="logo">
            La Tienda
          </NavLink>
        </h1>
        <ul className="navbar-ul">
          <li className=" hide enlace ">
            <ItemNav
              href="/productos"
              activeClass="activeLink"
              texto="Productos"
            />
          </li>
          <li className="hide enlace ">
            <ItemNav
              href="/ingresar"
              activeClass="activeLink"
              texto="Ingresar"
            />
          </li>
          <li className="enlace">
            <CartIcon />
          </li>
          <li className="enlace burguer">
            <FontAwesomeIcon
              className="ellipsis"
              icon={sideBar ? faTimes : faEllipsisH}
              onClick={() => showSideBar()}
            />
          </li>
        </ul>
        <NavMenu
          className={sideBar ? "nav-menu active" : "nav-menu"}
          showSideBar={() => showSideBar()}
        />
      </div>
    </div>
  );
}
