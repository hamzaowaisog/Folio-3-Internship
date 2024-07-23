import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notifiction from "./components/Notification";
import { sendCartData } from "./store/cart-slice";

let firstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
   dispatch(sendCartData(cart));

   
    
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notifiction type={notification.type} message={notification.message} />
      )}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
