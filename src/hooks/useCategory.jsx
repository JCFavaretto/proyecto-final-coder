import { useState, useEffect } from "react";
import { db } from "../fire";

export function useCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const itemCollection = db.collection("categorias").orderBy("name", "asc");
    itemCollection
      .get()
      .then((querySnapshot) => {
        setCategories(
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

  return { loading, categories };
}
