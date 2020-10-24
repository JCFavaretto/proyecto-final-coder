import { useState, useEffect } from "react";
import { db } from "fire/index";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

export function useOrders() {
  const [{ isUser }] = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (isUser.loggedIn) {
      const itemCollection = db.collection("orders");
      if (isUser.orders.length > 0) {
        isUser.orders.forEach((id) => {
          itemCollection
            .doc(id)
            .get()
            .then((doc) => {
              const item = { id: id, ...doc.data() };
              return item;
            })
            .then((item) => {
              setOrders((list) => [...list, item]);
            })
            .then(() => {
              const last = isUser.orders.length - 1;
              if (isUser.orders[last] === id) {
                setLoading(false);
              }
            })
            .catch((error) => {
              console.log(
                "Hubo un error buscando la lista de ordenes de compra: ",
                error
              );
            });
        });
      }
    }
  }, [isUser.loggedIn, isUser.orders]);

  return { loading, orders };
}
