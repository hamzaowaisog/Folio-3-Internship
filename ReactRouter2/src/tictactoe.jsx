import { useState } from "react";
import "./tictac.css";
export default function Tictactoe() {
  return (
    <>
      <div>
        <h1>
          <center>Tic Tac Toe Game</center>
        </h1>
      </div>
      <div className="container">
        <div>
          <div className="board-row">
            <Square id="s1" />
            <Square id="s2" />
            <Square id="s3" />
          </div>
          <div className="board-row">
            <Square id="s4" />
            <Square id="s5" />
            <Square id="s6" />
          </div>
          <div className="board-row">
            <Square id="s7" />
            <Square id="s8" />
            <Square id="s9" />
          </div>
        </div>
      </div>
    </>
  );
}

function Square ({id}){
    const [value , setValue] = useState(null);
    function handledClick(){
        setValue("X");
    }
    return (
        <button id={id} className="square" onClick={handledClick}>
        {value}
        </button>
    )
}

