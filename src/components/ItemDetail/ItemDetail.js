import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, imagen, price, stock }) => {
  const [contador, setContador] = useState(0);

  const onAdd = (e) => {
    setContador(e);
  };

  return (
    <div className="home contenedor">
      <h3 className="saludo">{title}</h3>
      <div className="producto contenedor">
        <img className="img-producto" src={imagen} alt={title} />
        <div className="home texto-producto">
          <p className="precio">Precio: ${price}</p>
          <p className="precio">Total: ${price * contador} </p>
          <div className="caja-compra">
            <h3>Ingrese la cantidad</h3>
            <ItemCount
              initial={contador}
              max={stock + 5}
              min={0}
              onAdd={onAdd}
            />
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
