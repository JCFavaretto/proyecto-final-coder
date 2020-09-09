import React, { useState } from "react";
import "./ItemCount.css";

export function ItemCount({ initial, max, min, onAdd }) {
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
    onAdd = count;
    console.log(count);
  };

  return (
    <div className="cartel">
      <h3>Ingrese la cantidad</h3>
      <form onSubmit={onFormSubmit}>
        <div className="btn btn-contador">
          <button className="btn-resta" type="button" onClick={restar}>
            -
          </button>
          <input
            type="number"
            value={count}
            className="barra"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button className="btn-suma" type="button" onClick={sumar}>
            +
          </button>
        </div>

        <input
          type="submit"
          className="btn btn-agregar"
          value="Agregar a carrito"
        />
      </form>
    </div>
  );
}