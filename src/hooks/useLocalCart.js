import { useState } from "react";

export function useLocalCart() {
  const emptyCart = [];
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem("cart");
      return item ? JSON.parse(item) : emptyCart;
    } catch (err) {
      console.log(err);
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem("cart", JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}
