import { useState } from "react";
import PropTypes from "prop-types";
import "./tictac.css";
export default function Tictactoe() {
    const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if(squares[i]){
        return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
        nextSquares[i] = "X";
    }
    else{
        nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }
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
            <Square
              id="s1"
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
            />
            <Square
              id="s2"
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
            />
            <Square
              id="s3"
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="board-row">
            <Square
              id="s4"
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
            />
            <Square
              id="s5"
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
            />
            <Square
              id="s6"
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="board-row">
            <Square
              id="s7"
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
            />
            <Square
              id="s8"
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
            />
            <Square
              id="s9"
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Square({ id, value, onSquareClick }) {
  return (
    <button id={id} className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
Square.PropTypes = {
  id: PropTypes.string,
};
