import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
// import Pizza from '../Data/PizzaData'; 
// import GetPizza from '../API/useFetch';
import useFetchData from '../API/useFetch';


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const {
    data:pizza
  } = useFetchData("/Pizza");
  
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (pizza, variant, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.pizza.name === pizza.name && item.variant === variant
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { pizza, variant, quantity }];
      }
    });
  };

  const removeFromCart = (pizza, variant) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.pizza.name === pizza.name && item.variant === variant)
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, pizzaData: pizza }}>
      {children}
    </CartContext.Provider>
  );
};
