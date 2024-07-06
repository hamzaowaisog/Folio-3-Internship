import { useState } from "react";
import "./tictac.css";


export default function Game() {
    const [xIsNext, setXisNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    console.log("history", history);
    const currentSquares = history[history.length - 1];
    // console.log(currentSquares);
  
    function handlePlay(nextSquares) {
      setHistory([...history, nextSquares]);
      setXisNext(!xIsNext);
    }
  
    function jumpTo(nextMove) {}
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = "Go to move #" + move;
      } else {
        description = "Go to game start";
      }
      return (
        <li>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
    return (
      <>
        <div>
          <div>
            <Tictactoe
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </>
    );
  }
  

function Tictactoe(xIsNext, squares, onPlay) {
  function handleClick(i) {
    console.log("Square", squares);

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    // alert(`Winner is ${winner}`);
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
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
          <div className="status">{status}</div>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
