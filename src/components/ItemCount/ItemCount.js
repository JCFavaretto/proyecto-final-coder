import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Carrito from "../../context/cartContext";
import "./ItemCount.css";
import { useSingleFirestore } from "../../hooks/useSingleFirestore";

export default function ItemCount({ id, initial, max, onAdd }) {
  const [count, setCount] = useState(initial);

  const [{ addToCart }] = useContext(Carrito);
  const history = useHistory();

  const { producto } = useSingleFirestore(id);
  const { title, thumbnail, price } = producto;

  const cartItem = {
    count,
    id,
    title,
    thumbnail,
    price,
  };

  function restar() {
    if (count > 0) {
      setCount((count) => count - 1);
    } else {
      console.log("No se puede bajar mas");
    }
    return false;
  }

  function sumar() {
    if (count < max) {
      setCount((count) => count + 1);
    } else {
      console.log("No hay mas stock");
    }
    return false;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    addToCart({ cartItem });
    setTimeout(() => {
      onAdd(count);
      if (count > 0) history.push("/productos");
    }, 300);
  };

  return (
    <form className="item-count" onSubmit={onFormSubmit}>
      <div className=" btn-contador">
        <button className="btn-resta" type="button" onClick={restar}>
          -
        </button>
        <input type="number" value={count} className="barra" readOnly />
        <button className="btn-suma" type="button" onClick={sumar}>
          +
        </button>
      </div>

      <button type="submit" className="btn btn-add">
        AGREGAR
        <span className="cantidad-btn"> {count > 0 ? count : ""} </span>
        AL CARRITO
      </button>
    </form>
  );
}
