import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/authslice";

const MenuFunction = () => {
  const cart = useSelector(state => state.cart.initialCart);
  const [cartLength, setCartLength] = useState(cart.length);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartLength(cart.length); 
  }, [cart,isAuth]);

  const logOut = () =>{
    dispatch(authActions.logout());
  }

  const menuItems = [
    (!isAuth && { key: "1", label: <Link to={"/login"}>Login</Link> }),
    (isAuth && {key: "1", label: <Link onClick={logOut} >LogOut</Link>}),
    { key: "2", label: <Link to={"/cart"}>Cart {cartLength} </Link> },
    (isAdmin &&{key : "3", label: <Link to={"/admin"}>Admin Panel</Link>}),
  ];

  return {
    menuItems,
  };
};

export default MenuFunction;