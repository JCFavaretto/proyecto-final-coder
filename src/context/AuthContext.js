import React, { useEffect, useState } from "react";
import { fb } from "fire/index.js";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
    fb.auth().onAuthStateChanged(setUser);
    if (user) {
      console.log(user);
    }
  }, []); //eslint-disable-line

  return (
    <AuthContext.Provider value={[{ user }]}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
