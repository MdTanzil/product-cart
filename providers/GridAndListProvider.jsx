"use client";
import { createContext, useEffect, useState } from "react";
export const GridContext = createContext();
const GridAndListProvider = ({ children }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Retrieve cart items from local storage when component mounts
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    // Save updated cart items to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <GridContext.Provider
      value={{
        isGrid,
        setIsGrid,
        addToCart,
        cart,
        setCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export default GridAndListProvider;
