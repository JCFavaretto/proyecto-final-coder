import React from "react";
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { isUser, loading, error } = useFirebaseAuthentication();

  return (
    <AuthContext.Provider value={[{ isUser, loading, error }]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
