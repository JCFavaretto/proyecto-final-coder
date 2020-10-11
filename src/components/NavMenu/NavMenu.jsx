import { ItemNav } from "components/NavBar/ItemNav";
import React from "react";
import "components/NavMenu/NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "hooks/useCategory";

const NavMenu = ({ className, showSideBar }) => {
  const { categories } = useCategory();

  return (
    <nav className={className}>
      <ul className="nav-menu-items">
        <li className="enlace">
          <FontAwesomeIcon
            className="ellipsis"
            icon={faTimes}
            onClick={() => showSideBar()}
          />
        </li>
        <li className="navmenu-link logo">
          <h1>
            <ItemNav href="/" className="logo" texto="La Tienda" />
          </h1>
        </li>
        <li className="navmenu-link">
          <ItemNav href="/productos" texto="Productos" />
          <ul className="category-list">
            {Array.isArray(categories) &&
              categories.map((aux) => {
                return (
                  <li className="sub-enlace" key={aux.id}>
                    <ItemNav
                      href={`/productos/categories/${aux.id}`}
                      texto={aux.name}
                    />
                  </li>
                );
              })}
          </ul>
        </li>
        <li className="navmenu-link">
          <ItemNav href="/ingresar" texto="Ingresar" />
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
