import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../services/getProducto";

export function useProduct() {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getProducto(id)
      .then((data) => {
        setProducto(() => data);
      })
      .then(
        setTimeout(() => {
          setLoading(() => false);
        }, 500)
      )
      .catch((error) => setError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return { producto, loading, error };
}
