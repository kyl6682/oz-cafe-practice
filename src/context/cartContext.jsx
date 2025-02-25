import { useContext, createContext, useState } from "react";

const cartContext = createContext();

export function CartProvidor({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
    setModalOn(false);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <cartContext value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </cartContext>
  );
}

export function useCart() {
  return useContext(cartContext);
}
