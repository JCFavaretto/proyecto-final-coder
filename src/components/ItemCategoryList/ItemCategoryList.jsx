import React from "react";
import "components/ItemList/ItemList.css";
import Item from "components/Item/Item";
import Loading from "components/Loading/Loading";
import { useCategoryList } from "hooks/useCategoryList";

export default function ItemCategoryList() {
  const { loading, productos } = useCategoryList();

  return (
    <div className="contenedor">
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
