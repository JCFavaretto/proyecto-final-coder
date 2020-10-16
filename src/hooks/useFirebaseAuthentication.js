import { useState, useEffect } from "react";
import { fb } from "fire/index";

const useFirebaseAuthentication = (firebase) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unlisten = fb.auth().onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      unlisten();
    };
  });

  return user;
};

export default useFirebaseAuthentication;
