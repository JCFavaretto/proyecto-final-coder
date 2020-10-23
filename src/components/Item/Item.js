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

const Item = ({ id, img, nombre, precio }) => {
  const [{ isUser, loading, isFav, handleFav }] = useContext(AuthContext);
  const [fav, setFav] = useState(false);

  function handleClick() {
    handleFav(id);

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
          {isUser && (
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
          </div>
        </>
      )}{" "}
    </li>
  );
};

export default Item;
