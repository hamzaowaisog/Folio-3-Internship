import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/register",
    element : <Register/>
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
