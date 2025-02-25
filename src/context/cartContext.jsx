import { useContext, createContext, useState } from "react";

const cartContext = createContext();

export function CartProvidor({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <cartContext value={{cart, setCart}}>
        {children}
    </cartContext>
  )

}

export function useCart() {
  return useContext(cartContext);
}
