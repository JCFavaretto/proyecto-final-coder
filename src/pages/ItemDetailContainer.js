import React from "react";
import { useParams } from "react-router-dom";
import { useSingleFirestore } from "../hooks/useSingleFirestore";
import ItemDetail from "components/ItemDetail/ItemDetail";
import Loading from "components/Loading/Loading";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { producto, loading, error } = useSingleFirestore(id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="home contenedor">
          <p className="error-msg error-prod">{error} </p>
          <Link to="/productos" className="btn-prod">
            IR A PRODUCTOS
          </Link>
        </div>
      ) : (
        <ItemDetail
          id={producto.id}
          title={producto.title}
          imagen={producto.picture}
          price={producto.price}
          stock={producto.stock}
          description={producto.description}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
