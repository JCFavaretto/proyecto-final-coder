import React, { useState } from "react";
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto, img }) => {
  const [contador, setContador] = useState(0);

  const onAdd = (e) => {
    setContador(e);
    console.log(contador);
  };

  return (
    <div className="home contenedor">
      <h3 className="saludo">{producto.title}</h3>
      <div className="producto contenedor">
        <img className="home img-producto" src={img.secure_url} alt="" />
        <div className="home texto-producto">
          <p className="precio">Precio: ${producto.price}</p>
          <p className="precio">Total: ${producto.price * contador} </p>
          <div className="caja-compra">
            <h3>Ingrese la cantidad</h3>
            <ItemCount
              initial={contador}
              max={producto.available_quantity + 10}
              min={0}
              onAdd={onAdd}
            />
            <button className="btn btn-compra">COMPRAR {contador} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
