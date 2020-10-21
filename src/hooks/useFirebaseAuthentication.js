import { useState, useEffect } from "react";
import { fb, db } from "fire/index";

const useFirebaseAuthentication = () => {
  const [isUser, setUser] = useState({ uid: "", email: "", nombre: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const unlisten = fb.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid, email } = authUser;
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
            setUser({ uid, email, ...doc.data() });
          })
          .catch((error) => {
            setError(error);
            console.log("Hubo un error buscando el producto : ", error);
          })
          .finally(() => {
            setLoading(false);
          }); //eslint-disable-line
      } else {
        setUser(null);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  return { isUser, loading, error };
};

export default useFirebaseAuthentication;
