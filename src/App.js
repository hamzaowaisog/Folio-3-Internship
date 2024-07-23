import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch("https://redux-http-6581f-default-rtdb.firebaseio.com/cartItems.json",{
        method : 'PUT',
        body: JSON.stringify(cart),
      });
      const data = await res.json();
    };
    sendRequest();
    
  }, [cart]);

  return (
    <div className="App">
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Layout />}
    </div>
  );
}

export default App;
