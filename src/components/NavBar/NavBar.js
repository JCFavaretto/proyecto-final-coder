import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ItemNav } from "./ItemNav.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import CartIcon from "./CartIcon/CartIcon.jsx";
import NavMenu from "components/NavMenu/NavMenu.jsx";
import { fb } from "fire/index.js";
import AuthContext from "context/AuthContext";

export function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const [{ isUser }] = useContext(AuthContext);

  const showSideBar = () => {
    setSideBar(() => !sideBar);
  };

  return (
    <div className="navbar">
      <div className="cont-nav contenedor">
        <div className="pegados">
          <p className="enlace burguer">
            <FontAwesomeIcon
              className="ellipsis"
              icon={sideBar ? faTimes : faEllipsisH}
              onClick={() => showSideBar()}
            />
          </p>
          <h1>
            <NavLink to="/" className="logo">
              TecnoTienda
            </NavLink>
          </h1>
        </div>
        <ul className="navbar-ul">
          <li className=" hide enlace ">
            <ItemNav
              href="/productos"
              activeClass="activeLink"
              texto="Productos"
            />
          </li>
          {isUser ? (
            <li
              className="hide enlace "
              onClick={() => {
                fb.auth().signOut();
              }}
            >
              <ItemNav href="/" texto=" Salir" />
            </li>
          ) : (
            <li className="hide enlace ">
              <ItemNav
                href="/ingresar"
                activeClass="activeLink"
                texto="Ingresar"
              />
            </li>
          )}
          <li className="enlace">
            <CartIcon />
          </li>
        </ul>
        <NavMenu
          className={sideBar ? "nav-menu active" : "nav-menu "}
          showSideBar={() => showSideBar()}
        />
      </div>
    </div>
  );
}
