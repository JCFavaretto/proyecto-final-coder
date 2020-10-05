import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "components/Loading/Loading";
import * as firebase from "firebase/app";
import { db } from "../../firebase/index";

const Comprar = ({ cart, setCart, total, updateStock }) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const newOrder = {
    buyer: {
      name: "ejemplo",
      phone: "155123123",
      email: "ejemplo@gmail.com",
    },
    items: { cart },
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: { total },
  };

  const enviarOrden = () => {
    setLoading(true);
    db.collection("orders")
      .add(newOrder)
      .then(({ id }) => {
        setId(id);
        console.log("Compra Exitosa! Su ID de compra es: " + id);
      })
      .catch((err) => {
        console.log("error: " + err);
      })
      .finally(() => {
        setLoading(false);
        updateStock(cart);
        setTimeout(() => {
          setCart(() => []);
          history.push("/productos");
        }, 2000);
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Link to="#" className="btn btn-compra" onClick={() => enviarOrden()}>
            COMPRAR
          </Link>
          <p className="compra-exitosa">
            {id !== "" ? `Compra Exitosa! Su ID de compra es: "${id}" ` : id}{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Comprar;
