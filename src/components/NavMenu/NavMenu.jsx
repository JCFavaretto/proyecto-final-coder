import { ItemNav } from "components/NavBar/ItemNav";
import React from "react";
import "components/NavMenu/NavMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useCategory } from "hooks/useCategory";
import { fb } from "fire";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

const NavMenu = ({ className, showSideBar }) => {
  const { loading, categories } = useCategory();
  const [{ isUser }] = useContext(AuthContext);

  return (
    <nav className={className}>
      <ul className="nav-menu-items">
        <li className="enlace close">
          <FontAwesomeIcon
            className="ellipsis"
            icon={faTimes}
            onClick={() => showSideBar()}
          />
        </li>
        <li className="navmenu-link logo">
          <h1 className="divisor">
            <ItemNav href="/" className="logo" texto="TecnoTienda" />
          </h1>
        </li>
        <li className="navmenu-link">
          <ItemNav href="/productos" texto="Productos" />
          <ul className="category-list">
            {!loading &&
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
        {isUser.loggedIn ? (
          <>
            <li className=" enlace " onClick={() => {}}>
              <ItemNav href={`/user/${isUser.uid}`} texto={isUser.nombre} />
            </li>
            <li
              className=" enlace "
              onClick={() => {
                fb.auth().signOut();
              }}
            >
              <ItemNav href="/" texto=" Salir" />
            </li>
          </>
        ) : (
          <li className="navmenu-link">
            <ItemNav href="/ingresar" texto="Ingresar" />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavMenu;
