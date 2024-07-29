import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PizzaContent from "./Components/Content.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import RegisterForm from "./Components/RegisterForm.jsx";
import CartDisplay from "./Components/CartDisplay.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import AdminPizzaContent from "./Components/AdminContent.jsx";
import RoleBaseRoute from "./Private/Routes/RoleBaseRoute.jsx";
import AddView from "./Components/AddView.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PizzaContent />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "cart",
        element: <CartDisplay />,
      },
      {
        path: "admin",
        element: <RoleBaseRoute element={AdminPizzaContent} requiredRole="admin" />,
      },
      {
        path: "addPizza",
        // element: <RoleBaseRoute element={AddView} requiredRole="admin" />,
        element : <AddView />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
