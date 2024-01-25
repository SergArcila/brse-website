// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (service) => {
    setCartItems([...cartItems, service]);
    setTotal(total + parseFloat(service.price.replace(/[^\d.]/g, '')));
  };

  const removeFromCart = (serviceId) => {
    const filteredCartItems = cartItems.filter(item => item.id !== serviceId);
    setCartItems(filteredCartItems);
    const service = cartItems.find(item => item.id === serviceId);
    setTotal(total - parseFloat(service.price.replace(/[^\d.]/g, '')));
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
