import { useState, useEffect } from "react";
import { db } from "fire/index";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

export function useWishlist() {
  const [{ isUser }] = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (isUser.loggedIn) {
      const itemCollection = db.collection("items");
      isUser.wishlist.forEach((id) => {
        itemCollection
          .doc(id)
          .get()
          .then((doc) => {
            const item = { id: id, ...doc.data() };
            return item;
          })
          .then((item) => {
            setWishlist((wishlist) => [...wishlist, item]);
          })
          .then(() => {
            const last = isUser.wishlist.length - 1;
            if (isUser.wishlist[last] === id) {
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log("Hubo un error buscando la lista de deseados: ", error);
          });
      });
    }
  }, [isUser]); //eslint-disable-line

  return { loading, wishlist };
}
