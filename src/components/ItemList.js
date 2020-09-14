import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "./Item";

/* rfc */

export default function ItemList({ max }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const producto = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?category=1144&&limit=${max}`
    );
    const lista = await producto.json();
    setProductos(lista.results);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="home contenedor">
        <h3 className="saludo">Lista de Productos</h3>
        <p className="loading">Cargando...</p>
      </div>
    );
  } else {
    if (!error) {
      return (
        <div className="home contenedor">
          <h3 className="saludo">Lista de Productos</h3>
          <ul className="lista-prod">
            {productos.map((producto) => (
              <Item
                key={producto.id}
                id={producto.id}
                img={producto.thumbnail}
                nombre={producto.title}
              />
            ))}
          </ul>
        </div>
      );
    } else return <span>{error}</span>;
  }
}

/*
{ id: 1, nombre: "Auto" },
        { id: 2, nombre: "Notebook" },
        { id: 3, nombre: "Batidora" },

*/
