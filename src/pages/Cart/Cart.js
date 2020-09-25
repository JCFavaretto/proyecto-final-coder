import React from "react";
import CartTable from "../../components/CartTable/CartTable";

const Cart = () => {
  return (
    <div className="home contenedor">
      <h1 className="saludo">Carrito</h1>
      <CartTable />
    </div>
  );
};

export default Cart;
