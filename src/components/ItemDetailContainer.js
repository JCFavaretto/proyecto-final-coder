import React, { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ id }) => {
  const [producto, setProducto] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    setLoading(true);
    setError(false);
    const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const producto = await data.json();
    setProducto(producto);

    const img = await producto.pictures;
    setImg(img[0]);

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
          <h3 className="saludo">{producto.title}</h3>
          <div className="producto">
            <img src={img.secure_url} alt="" />
            <div className="texto-producto">
              <p>${producto.price}</p>
              <div className="caja-compra">
                <h3>Ingrese la cantidad</h3>
                <ItemCount
                  initial={0}
                  max={producto.available_quantity}
                  min={0}
                  onAdd={0}
                />
                <button className="btn btn-agregar">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else return <span>{error}</span>;
  }
};

export default ItemDetailContainer;
