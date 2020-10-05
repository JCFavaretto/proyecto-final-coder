import React, { useState } from "react";

const Carrito = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart({ cartItem }) {
    let existe = false;
    if (cart.length > 0) {
      setCart(() => {
        const newCart = cart.map((item) => {
          if (item.id === cartItem.id) {
            item.count = cartItem.count;
            if (item.count > item.stock) {
              item.count = item.stock;
            }
            existe = true;
          }
          return item;
        });

        return newCart;
      });
    }
    if (!existe) {
      setCart(() => [...cart, cartItem]);
    }
  }

  const calcularCantidad = () => {
    let count = 0;
    if (Array.isArray(cart)) {
      cart.map((item) => {
        count = count + item.count;
        return count;
      });
    }
    return count;
  };

  const totalGasto = () => {
    let count = 0;
    if (Array.isArray(cart)) {
      cart.forEach((item) => {
        count = count + item.count * item.price;
        return count;
      });
    }
    return count;
  };

  const returnCount = ({ id }) => {
    let count = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.id === id) {
          count = item.count;
        }

        return count;
      });
    }
    return count;
  };

  return (
    <Carrito.Provider
      value={[
        { cart, setCart, addToCart, calcularCantidad, totalGasto, returnCount },
      ]}
    >
      {children}
    </Carrito.Provider>
  );
};

export default Carrito;
