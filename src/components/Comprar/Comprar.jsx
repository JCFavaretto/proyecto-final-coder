import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "components/Loading/Loading";
import { db } from "fire/index";
import * as fb from "firebase/app";
import AuthContext from "context/AuthContext";

const Comprar = ({ cart, setCart, total, updateStock, emptyStorage }) => {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [{ isUser, updateOrders }] = useContext(AuthContext);
  const fullName = isUser.nombre + " " + isUser.apellido;

  const enviarOrden = () => {
    const newOrder = {
      buyer: {
        name: fullName,
        phone: isUser.phoneNumber,
        email: isUser.email,
      },
      cart: cart,
      date: fb.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };

    setLoading(true);
    db.collection("orders")
      .add(newOrder)
      .then(({ id }) => {
        setId(id);
        console.log("Compra Exitosa! Su ID de compra es: " + id);
        return id;
      })
      .then((id) => {
        updateOrders(id);
        db.collection("users")
          .doc(isUser.uid)
          .update({
            orders: fb.firestore.FieldValue.arrayUnion(id),
          });
      })
      .catch((err) => {
        console.log("error: " + err);
      })
      .finally(() => {
        setLoading(false);
        updateStock(cart);
        setTimeout(() => {
          setCart(() => []);
          emptyStorage();
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
