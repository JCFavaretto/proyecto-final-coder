import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carrito from "context/cartContext";
import "./CartIcon.css";

const CartIcon = () => {
  const [cantidad, setCantidad] = useState(0);
  const [{ cart, calcularCantidad }] = useContext(Carrito);

  useEffect(
    () => {
      setCantidad(() => calcularCantidad());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cart]
  );

  return (
    <NavLink to="/carrito" activeClassName="activeLink">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span> {cantidad > 0 && cantidad} </span>
    </NavLink>
  );
};

export default CartIcon;
