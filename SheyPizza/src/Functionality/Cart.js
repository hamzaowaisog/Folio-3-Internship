import { useState } from 'react';

export default function CartFunction() {
  const [cart, setCart] = useState([]);

  console.log(cart);
  console.log(cart.length);

  const addToCart = (pizza, variant, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.pizza.name === pizza.name && item.variant === variant
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { pizza, variant, quantity }]);
    }
  };

  return {
    cart,
    addToCart,
  };
}
