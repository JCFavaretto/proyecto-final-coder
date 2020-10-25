import React from "react";
import "./ItemList.css";
import Item from "components/Item/Item";
import Loading from "components/Loading/Loading";
import { useFirestore } from "hooks/useFirestore";

export default function ItemList({ max = 12 }) {
  const { loading, productos } = useFirestore(max);

  return (
    <div className="contenedor">
      {loading ? (
        <Loading />
      ) : (
        <ul className="lista-prod">
          {Array.isArray(productos) &&
            productos.map(({ id, picture, title, price, stock }) => (
              <Item
                key={id}
                id={id}
                img={picture}
                nombre={title}
                precio={price}
                stock={stock}
              />
            ))}
        </ul>
      )}
    </div>
  );
}
