import { useState } from "react";

const CartFunction = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza, variant, quantity, price) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.pizza.name === pizza.name && item.variant === variant
      );
      if (existingItemIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { pizza, variant, quantity, price }];
    });
  };

  return {
    cart,
    addToCart,
  };
};

export default CartFunction;
