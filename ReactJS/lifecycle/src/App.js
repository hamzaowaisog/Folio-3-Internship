import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type='text' name='name'></input>
          <button type='submit' onClick={getdata}>Submit</button>
        </form>
      </header>
    </div>
  );
}
function getdata(){
  return(
    const d = document.getElementsByClassName("App");
    d.innerHTML = "Hello World";

  )
}

export default App;

