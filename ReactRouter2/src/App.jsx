import './App.css'
import { Outlet,useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  const handleclick = () =>{
    navigate ( '/tictactoe');
  }
  const handleclick2 = () =>{
    navigate ('/snakegame')
  }
  return (
    <>
    <div id='sidebar'>
      <h1>React Router</h1>
      <div>
        <button id='button' onClick={handleclick}>Tic Tac Toe</button>
      </div>
      <div>
      <button id='button' onClick={handleclick2}>Snake Game</button>
      </div>
    </div>
    <div id='detail'>
      <Outlet/>
    </div>
 
    </>
  )
}



