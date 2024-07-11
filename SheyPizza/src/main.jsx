import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import { CartProvider } from './Functionality/CartContext.jsx';
import PizzaContent from './Components/Content.jsx';
import LoginForm from './Components/LoginForm.jsx';
import RegisterForm from './Components/RegisterForm.jsx';
import CartDisplay from './Components/CartDisplay.jsx';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <PizzaContent />
        },
        {
          path: "/login",
          element: <LoginForm />
        },
        {
          path: "/register",
          element: <RegisterForm />
        },
        {
          path: "/cart",
          element: <CartDisplay />
        }
      ]
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
