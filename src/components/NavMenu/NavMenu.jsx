import { ItemNav } from "components/NavBar/ItemNav";
import React from "react";
import "components/NavMenu/NavMenu.css";
import Categories from "components/Categories/Categories";

const NavMenu = ({ className, showSideBar }) => {
  return (
    <nav className={className}>
      <ul className="nav-menu-items">
        <li className="enlace logo">
          <h1>
            <ItemNav href="/" className="logo" texto="La Tienda" />
          </h1>
        </li>
        <li className="enlace">
          <ItemNav href="/productos" texto="Productos" />
        </li>
        <li className="enlace">
          <ItemNav href="/ingresar" texto="Ingresar" />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
