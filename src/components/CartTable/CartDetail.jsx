import { ItemNav } from "components/NavBar/ItemNav";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Carrito from "context/cartContext";

const CartDetail = ({ id, count, title, price, thumbnail }) => {
  const [{ removeFromCart }] = useContext(Carrito);

  return (
    <React.Fragment>
      <th scope="row">{count}</th>
      <td>
        <img src={thumbnail} alt={title} />
      </td>
      <td>
        <ItemNav href={`/productos/${id}`} texto={title} />
      </td>
      <td>${price}</td>
      <td>${price * count}</td>
      <td>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => removeFromCart(id)}
          size="lg"
        />
      </td>
    </React.Fragment>
  );
};

export default CartDetail;
