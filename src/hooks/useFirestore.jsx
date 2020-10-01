import { useState, useEffect } from "react";
import { getFirestore } from "../firebase";

export function useFirestore() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
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
  }, []);

  return { loading, productos };
}
