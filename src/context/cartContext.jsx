import React, { useState } from "react";

const Carrito = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (cartItem) => {
    if (Array.isArray(cart)) {
      setCart(() => [...cart, cartItem]);
    } else {
      setCart(() => cartItem);
    }
  };

  return (
    <Carrito.Provider value={[cart, setCart, addToCart]}>
      {children}
    </Carrito.Provider>
  );
};

export default Carrito;
