import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
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
        <p className="loading">Cargando...</p>
      </div>
    );
  } else {
    if (!error) {
      return <ItemDetail producto={producto} img={img} />;
    } else return <span>{error}</span>;
  }
};

export default ItemDetailContainer;
