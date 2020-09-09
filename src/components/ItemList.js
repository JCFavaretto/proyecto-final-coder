import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "./Item";

/* rfc */

export default function ItemList() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtenerProductos()
      .then((productos) => {
        setProductos(productos);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (!error) {
    return (
      <div className="home contenedor">
        <h3 className="saludo">Lista de Productos</h3>
        <ul className="lista-prod">
          {productos.map((producto) => (
            <Item 
              key={producto.id} 
              id={producto.id}
              nombre={producto.nombre}
            />
          ))}
        </ul>
      </div>
    );
  } else return <span>{error}</span>;
}

function obtenerProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: "Celular" },
        { id: 2, nombre: "Televisor" },
        { id: 3, nombre: "Heladera" },
      ]);
    }, 2000);
  });
}
