import React, { useContext } from "react";
import carrito from "../../context/cartContext";
import CartDetail from "./CartDetail";
import "./CartTable.css";

const CartTable = () => {
  const [{ cart, totalGasto }] = useContext(carrito);
  return (
    <table className="home tabla">
      <thead className="head">
        <tr>
          <th scope="col">Cantidad</th>
          <th scope="col" colSpan="2">
            Producto
          </th>
          <th scope="col">Precio </th>
          <th scope="col">Total </th>
        </tr>
      </thead>
      <tbody className="body">
        {Array.isArray(cart) &&
          cart.map(({ id, count, title, price, thumbnail }) => (
            <tr key={id}>
              <CartDetail
                id={id}
                count={count}
                title={title}
                price={price}
                thumbnail={thumbnail}
              />
            </tr>
          ))}
      </tbody>

      <tfoot>
        <tr>
          <th scope="row" colSpan="4">
            GASTO TOTAL:{" "}
          </th>
          <td>${totalGasto()} </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartTable;
