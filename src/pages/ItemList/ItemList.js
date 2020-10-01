import React from "react";
import "./ItemList.css";
import Item from "../../components/Item/Item";
import Loading from "../../components/Loading/Loading";
import { useFirestore } from "../../hooks/useFirestore";

export default function ItemList() {
  const { loading, productos } = useFirestore();

  return (
    <div className="home contenedor">
      <h3 className="titulo">Lista de Productos</h3>
      {loading ? (
        <Loading />
      ) : (
        <ul className="lista-prod">
          {Array.isArray(productos) &&
            productos.map(({ id, picture, title, price }) => (
              <Item
                key={id}
                id={id}
                img={picture}
                nombre={title}
                precio={price}
              />
            ))}
        </ul>
      )}
    </div>
  );
}
