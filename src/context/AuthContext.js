import React from "react";
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication";
import { db } from "fire/index";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const isUser = useFirebaseAuthentication();
  const user = [{}];
  if (isUser) {
  }
  return (
    <AuthContext.Provider value={[{ isUser, user }]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
