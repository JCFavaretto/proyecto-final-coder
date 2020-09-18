import React, { useState } from "react";
import "./ItemCount.css";

export function ItemCount({ initial, max, min, onAdd }) {
  const [count, setCount] = useState(initial);

  function restar() {
    if (count > min) {
      onAdd(count - 1);
      setCount((count) => count - 1);
    } else {
      console.log("No se puede bajar mas");
    }
    return false;
  }

  function sumar() {
    if (count < max) {
      onAdd(count + 1);
      setCount((count) => count + 1);
    } else {
      console.log("No hay mas stock");
    }
    return false;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onCountChange = (e) => {
    setCount(e.target.value);
  };

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
          onChange={onCountChange}
        />
        <button className="btn-suma" type="button" onClick={sumar}>
          +
        </button>
      </div>

      <button type="submit" className="btn">
        AGREGAR A CARRITO
      </button>
    </form>
  );
}
