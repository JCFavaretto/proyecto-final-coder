import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import carrito from "../../../context/cartContext";

const CartIcon = () => {
  const cart = useContext(carrito);
  return (
    <NavLink to="/carrito" activeClassName="activeLink">
      <FontAwesomeIcon icon={faShoppingCart} />
      {cart && <span> {cart.lenght} </span>}
    </NavLink>
  );
};

export default CartIcon;
