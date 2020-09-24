import React, { useState } from "react";

const Carrito = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <Carrito.Provider value={[cart, setCart]}>{children}</Carrito.Provider>
  );
};

export default Carrito;
