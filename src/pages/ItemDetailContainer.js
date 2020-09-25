import React from "react";
import { useProduct } from "../hooks/useProduct";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Loading from "../components/Loading/Loading";

const ItemDetailContainer = () => {
  const { producto, loading, error } = useProduct();

  if (loading) {
    return <Loading />;
  } else {
    if (!error) {
      return (
        <ItemDetail
          title={producto.title}
          imagen={producto.secure_url}
          price={producto.price}
          stock={producto.available_quantity}
        />
      );
    } else return <span>{error}</span>;
  }
};

export default ItemDetailContainer;
