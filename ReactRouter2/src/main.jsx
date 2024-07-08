import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Game from './tictactoe.jsx'
import Snake from './snake.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:
      [
        {path: "/tictactoe",
        element: <Game/>
        },
        {
          path:"/snakegame",
          element: <Snake/>,
        }
    
      ],
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
