import './App.css'
import { Outlet,useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  const handleclick = () =>{
    navigate ( '/tictactoe');
  }
  return (
    <>
    <div id='sidebar'>
      <h1>React Router</h1>
      <div>
        <button id='button' onClick={handleclick}>Tic Tac Toe</button>
      </div>
      <div>
      <button id='button'>Counter</button>
      </div>
    </div>
    <div id='detail'>
      <Outlet/>
    </div>
 
    </>
  )
}



