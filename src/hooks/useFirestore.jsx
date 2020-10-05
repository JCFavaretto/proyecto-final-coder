import { useState, useEffect } from "react";
import { db } from "../firebase";

export function useFirestore(max) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const itemCollection = db.collection("items").limit(max);
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados!");
        }
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Hubo un error buscando los productos: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); //eslint-disable-line

  return { loading, productos };
}
