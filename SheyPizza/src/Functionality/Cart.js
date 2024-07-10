import { useState } from "react"

const CartFunction = () => {
    const [cart , setCart] = useState([]);
    
    const addToCart = (pizza , variant , quantity) =>{
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (item) => item.pizza.name === pizza.name && item.variant === variant
            );
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += quantity;
                return updatedCart;
            }
            return [...prevCart, {pizza,variant , quantity}];
        });
    };
    return{
        cart,
        setCart,
        addToCart
    };
}
export default CartFunction;