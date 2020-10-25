import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStar2 } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "context/AuthContext";
import Loading from "components/Loading/Loading";
import "./Item.css";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Carrito from "context/cartContext";

const Item = ({ id, img, nombre, precio, stock }) => {
  const [{ isUser, loading, isFav, handleFav }] = useContext(AuthContext);
  const [fav, setFav] = useState(false);

  const [{ returnCount }] = useContext(Carrito);

  const [contador, setContador] = useState(returnCount({ id }));

  const onAdd = (e) => {
    setContador(e);
  };

  function handleClick() {
    handleFav(id, img, nombre, precio);
    setFav(!fav);
    return false;
  }

  useEffect(() => {
    setFav(isFav(id));
  }, [isUser]); //eslint-disable-line

  return (
    <li className="item bordes txtHome">
      {loading ? (
        <Loading />
      ) : (
        <>
          <img className=" img-lista" src={img} alt="" />
          {isUser.loggedIn && (
            <div className="fav">
              <FontAwesomeIcon
                icon={fav ? faStar2 : faStar}
                size="1x"
                onClick={() => handleClick()}
              />
            </div>
          )}
          <div className="bordes txt-lista">
            <NavLink to={`/productos/${id}`}>{nombre}</NavLink>
            <p className="precio-lista">${precio} </p>

            <ItemCount id={id} initial={contador} max={stock} onAdd={onAdd} />
          </div>
        </>
      )}{" "}
    </li>
  );
};

export default Item;
