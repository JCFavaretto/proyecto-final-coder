import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

export function useSingleFirestore() {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe! ");
          return;
        }
        setProducto({ id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Hubo un error buscando el producto : ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); //eslint-disable-line

  return { loading, producto };
}
