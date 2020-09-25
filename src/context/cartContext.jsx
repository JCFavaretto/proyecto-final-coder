import React, { useState } from "react";

const Carrito = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  return (
    <Carrito.Provider value={[cart, setCart]}>{children}</Carrito.Provider>
  );
};

export default Carrito;
