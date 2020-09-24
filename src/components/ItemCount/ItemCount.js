import React, { useState, useContext } from "react";
import Cart from "../../context/cartContext";
import "./ItemCount.css";

export default function ItemCount({ initial, max, min, onAdd }) {
  const [count, setCount] = useState(initial);

  function restar() {
    if (count > min) {
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
  };
  /* //Cuando quiero usar esta funcion en el onChange dele input no la ejecuta.
  
  const handleChange = () => {
    onAdd(count);
  };
  
  */

  return (
    <form className="item-count" onSubmit={onFormSubmit}>
      <div className="btn btn-contador">
        <button className="btn-resta" type="button" onClick={restar}>
          -
        </button>
        <input
          type="number"
          value={count}
          className="barra"
          onChange={onAdd(count)}
        />
        <button className="btn-suma" type="button" onClick={sumar}>
          +
        </button>
      </div>

      <button type="submit" className="btn btn-add">
        AGREGAR<span className="cantidad-btn"> {count ? count : ""} </span>AL
        CARRITO
      </button>
    </form>
  );
}
