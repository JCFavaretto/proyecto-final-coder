import React, { useState, useEffect } from "react";
import { getProducto } from "../services/getProducto";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Loading from "../components/Loading/Loading";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getProducto(id)
      .then((data) => {
        setProducto(() => data);
      })
      .then(setLoading(() => false))
      .catch((error) => setError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    if (!error) {
      return <ItemDetail producto={producto} />;
    } else return <span>{error}</span>;
  }
};

export default ItemDetailContainer;
