import { useState, useEffect } from "react";
import { fb, db } from "fire/index";

const useFirebaseAuthentication = () => {
  const [isUser, setUser] = useState([
    { loggedIn: false, uid: [], wishlist: [], orders: [] },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unlisten = fb.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid, email } = authUser;
        const loggedIn = true;
        setLoading(true);
        const userCollection = db.collection("users");
        const user = userCollection.doc(uid);
        user
          .get()
          .then((doc) => {
            if (!doc.exists) {
              setError("El usuario no existe! ");
              return;
            }
            setUser({ uid, email, loggedIn, ...doc.data() });
          })
          .catch((error) => {
            setError(error);
            console.log("Hubo un error buscando el producto : ", error);
          })
          .finally(() => {
            setLoading(false);
          }); //eslint-disable-line
      } else {
        setUser([{ loggedIn: false, uid: [], wishlist: [], orders: [] }]);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  return { isUser, loading, error };
};

export default useFirebaseAuthentication;
