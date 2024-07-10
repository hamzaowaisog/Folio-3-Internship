import { Link } from "react-router-dom";
import { useCart } from "../Functionality/CartContext";
import { useEffect, useState } from "react";

const MenuFunction = () => {
  const { cart } = useCart();
  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length); // Update cart length whenever cart changes
  }, [cart]);

  const menuItems = [
    { key: "1", label: <Link to={"/login"}>Login</Link> },
    { key: "2", label: <Link to={"/cart"}>Cart {cartLength} </Link> },
  ];

  return {
    menuItems,
  };
};

export default MenuFunction;