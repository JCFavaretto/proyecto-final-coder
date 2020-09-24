import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(0);

  const onAdd = (e) => {
    setContador(e);
  };

  return (
    <div className="home contenedor">
      <h3 className="saludo">{producto.title}</h3>
      <div className="producto contenedor">
        <img className="img-producto" src={producto.secure_url} alt="" />
        <div className="home texto-producto">
          <p className="precio">Precio: ${producto.price}</p>
          <p className="precio">Total: ${producto.price * contador} </p>
          <div className="caja-compra">
            <h3>Ingrese la cantidad</h3>
            <ItemCount
              initial={contador}
              max={producto.available_quantity + 5}
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
