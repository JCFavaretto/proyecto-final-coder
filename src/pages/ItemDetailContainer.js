import React from "react";
import { useSingleFirestore } from "../hooks/useSingleFirestore";
import ItemDetail from "components/ItemDetail/ItemDetail";
import Loading from "components/Loading/Loading";

const ItemDetailContainer = () => {
  const { producto, loading } = useSingleFirestore();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ItemDetail
        id={producto.id}
        title={producto.title}
        imagen={producto.picture}
        price={producto.price}
        stock={producto.stock}
        description={producto.description}
      />
    );
  }
};

export default ItemDetailContainer;
