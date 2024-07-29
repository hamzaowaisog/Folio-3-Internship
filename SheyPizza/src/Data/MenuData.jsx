import { Link } from "react-router-dom";
// import { useCart } from "../Functionality/CartContext";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/authslice";

const MenuFunction = () => {
  const cart = useSelector(state => state.cart.initialCart);
  const [cartLength, setCartLength] = useState(cart.length);
  const isAuth = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartLength(cart.length); // Update cart length whenever cart changes
  }, [cart,isAuth]);

  const logOut = () =>{
    dispatch(authActions.logout());
  }

  const menuItems = [
    (!isAuth && { key: "1", label: <Link to={"/login"}>Login</Link> }),
    (isAuth && {key: "1", label: <Link onClick={logOut} >LogOut</Link>}),
    { key: "2", label: <Link to={"/cart"}>Cart {cartLength} </Link> },
    (isAuth &&{key : "3", label: <Link to={"/admin"}>Admin Panel</Link>}),
    {key: "4", label: <Link to={"/addPizza"}>Add Pizza</Link>}

  ];

  return {
    menuItems,
  };
};

export default MenuFunction;