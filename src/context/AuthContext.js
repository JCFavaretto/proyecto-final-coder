import React from "react";
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication";
import { db } from "fire/index";
import * as fb from "firebase/app";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { isUser, loading, error } = useFirebaseAuthentication();

  function isFav(id) {
    let existe = false;
    if (isUser.loggedIn) {
      isUser.wishlist.forEach((item) => {
        if (item === id) {
          existe = true;
        }
      });
    }
    return existe;
  }

  function handleFav(id) {
    const exist = isFav(id);
    if (exist) {
      db.collection("users")
        .doc(isUser.uid)
        .update({
          wishlist: fb.firestore.FieldValue.arrayRemove(id),
        })
        .then(() => {
          isUser.wishlist = isUser.wishlist.filter((element) => element !== id);
        });
    } else {
      db.collection("users")
        .doc(isUser.uid)
        .update({
          wishlist: fb.firestore.FieldValue.arrayUnion(id),
        })
        .then(() => {
          isUser.wishlist.push(id);
        });
    }
  }

  return (
    <AuthContext.Provider
      value={[{ isUser, loading, error, isFav, handleFav }]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
