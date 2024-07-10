
import { Link } from "react-router-dom";
import CartFunction from "../Functionality/Cart";

const MenuItems = () => {
  const { cart } = CartFunction(); // Using CartFunction inside a functional component

  const cartItemCount = cart ? cart.length : 0;

  const menudata = [
    { key: "1", label: <Link to={"/login"}>Login</Link> },
    { key: "2", label: <Link to={"/cart"}>Cart {cartItemCount} </Link> },
  ];

  return (
    menudata
  )
};

export default MenuItems;
