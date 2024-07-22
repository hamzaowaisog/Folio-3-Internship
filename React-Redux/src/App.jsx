
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from "./Store/index";

function App() {

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const increment =() =>{

    dispatch (actions.INC())
  }
  const decrement = () =>{
    dispatch (actions.DEC())

  }
  const addby = () =>{
    dispatch (actions.ADD(10))

  }

  return (
    <>
    <div>
      <h1>Counter App</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add by 10</button>
      
    </div>

    </>
  )
}

export default App
