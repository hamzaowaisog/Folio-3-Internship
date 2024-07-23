import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notifiction from "./components/Notification";
import { uiActions } from "./store/ui-slice";

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

    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          message: "Sending cart data",
          type: "warning",
          open: true,
        })
      );
      const res = await fetch(
        "https://redux-http-6581f-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          message: "Sent cart data successfully",
          type: "success",
          open: true,
        })
      );
    };
    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          message: "Sending cart data failed",
          type: "error",
          open: true,
        })
      );
    });
  }, [cart]);

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
