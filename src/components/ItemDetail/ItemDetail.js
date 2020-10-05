import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import Carrito from "../../context/cartContext";

const ItemDetail = ({ id, title, imagen, price, stock, description }) => {
  const [{ returnCount }] = useContext(Carrito);

  const count = returnCount({ id });
  const [contador, setContador] = useState(count);

  const onAdd = (e) => {
    setContador(e);
  };

  return (
    <div className="home contenedor">
      <h3 className="titulo">{title}</h3>
      <div className="producto contenedor">
        <img className="img-producto" src={imagen} alt={title} />
        <div className="home texto-producto">
          <p className="descripcion">{description}</p>
          <p className="precio">Precio: ${price}</p>
          <p className="precio">Total: ${price * contador} </p>
          <div className="caja-compra">
            <h3>Ingrese la cantidad</h3>
            <ItemCount initial={contador} max={stock} onAdd={onAdd} />
            <Link to="/carrito" className="btn btn-compra">
              COMPRAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
