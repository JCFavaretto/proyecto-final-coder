import React, { useState, useEffect } from "react";
import { getProductos } from "../../services/getProductos";
import "./ItemList.css";
import Item from "../../components/Item/Item";
import Loading from "../../components/Loading/Loading";

/* rfc */

export default function ItemList({ max }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      getProductos(max)
        .then((data) => setProductos(data))
        .then(() => setLoading(false));
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    if (!error) {
      return (
        <div className="home contenedor">
          <h3 className="saludo">Lista de Productos</h3>
          <ul className="lista-prod">
            {Array.isArray(productos) &&
              productos.map(({ id, thumbnail, title, price }) => (
                <Item
                  key={id}
                  id={id}
                  img={thumbnail}
                  nombre={title}
                  precio={price}
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
