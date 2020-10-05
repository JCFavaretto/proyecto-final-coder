import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

export function useCategoryList(max) {
  const { categoryID } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(categoryID);

  useEffect(() => {
    setLoading(true);
    const itemCollection = db
      .collection("items")
      .where("categoryID", "==", `${categoryID}`)
      .limit(max);
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados!");
        }
        setProductos(
          querySnapshot.docs.map((doc) => {
            console.log(doc);
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
  }, [categoryID]); //eslint-disable-line

  return { loading, productos };
}
