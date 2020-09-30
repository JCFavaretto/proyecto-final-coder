import React, { useContext } from "react";
import carrito from "../../context/cartContext";
import "./CartTable.css";

const CartTable = () => {
  const [cart] = useContext(carrito);
  return (
    <table className="home contenedor">
      <thead className="head">
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Descripcion</th>
          <th>Precio </th>
          <th>Total </th>
        </tr>
      </thead>
      <tbody className="body">
        {cart.length > 0 &&
          cart.map(({ count, title, price, secure_thumbnail }) => (
            <tr>
              <th>{count}</th>
              <th>
                <img src={secure_thumbnail} alt={title} />
              </th>
              <th>{title}</th>
              <th>${price}</th>
              <th>${price * count}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CartTable;
