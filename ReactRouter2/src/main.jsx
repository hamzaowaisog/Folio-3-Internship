import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Tictactoe from './tictactoe.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:
      [
        {path: "/tictactoe",
        element: <Tictactoe/>
        },
    
      ],
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
