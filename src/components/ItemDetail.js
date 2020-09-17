import React from "react";
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto, img }) => {
  return (
    <div className="home contenedor">
      <h3 className="saludo">{producto.title}</h3>
      <div className="producto contenedor">
        <img className="home img-producto" src={img.secure_url} alt="" />
        <div className="home texto-producto">
          <p className="precio">Precio: ${producto.price}</p>
          <div className="caja-compra">
            <h3>Ingrese la cantidad</h3>
            <ItemCount
              initial={0}
              max={producto.available_quantity}
              min={0}
              onAdd={0}
            />
            <button className="btn btn-compra">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
