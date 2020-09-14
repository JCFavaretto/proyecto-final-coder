import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = () => {
  const { id } = useParams();
  return <ItemDetailContainer id={id} />;
};

export default ItemDetail;
