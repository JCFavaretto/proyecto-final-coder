import React, { useContext } from "react";
import carrito from "../../context/cartContext";

const Cart = () => {
  const cart = useContext(carrito);
  console.log(cart);
  return (
    <div className="home contenedor">
      <h1 className="saludo">Carrito</h1>
    </div>
  );
};

export default Cart;
