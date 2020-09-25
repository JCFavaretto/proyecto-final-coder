import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carrito from "../../../context/cartContext";
import "./CartIcon.css";

const CartIcon = () => {
  const [cantidad, setCantidad] = useState(0);
  const [cart] = useContext(Carrito);

  useEffect(() => {
    if (cart.length >= 1) {
      const nuevo = cart[cart.length - 1];
      const aux = nuevo.count;
      setTimeout(() => {
        setCantidad(() => cantidad + aux);
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <NavLink to="/carrito" activeClassName="activeLink">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span> {cantidad} </span>
    </NavLink>
  );
};

export default CartIcon;
