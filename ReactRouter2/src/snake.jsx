import { useRef, useState } from "react";
import "./snake.css";

export default function Snake() {
  const COLs = 48;
  const ROWs = 48;

  const DEFAULT_LENGTH = 10;
  const up = Symbol("up");
  const down = Symbol("down");
  const left = Symbol("left");
  const right = Symbol("right");

  const timer = useRef(null);
  const grid = useRef(Array(ROWs).fill(Array(COLs).fill("")));
  const snakeCordinates = useRef([]);
  const direction = useRef(right);
  const snakeCordinatesMap = useRef(new Set());
  const foodCords = useRef({ row: -1, cols: -1 });
  const [points, setPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setPlaying] = useState(0);

  const moveSnake = () => {
    if (gameOver) return;

    setPlaying((s) => s + 1);

    const cords = snakeCordinates.current;
    const snakeTail = cords[0];
    const snakeHead = cords.pop();
    const curr_direction = direction.current;

    const foodConsumed =
      snakeHead.row === foodCords.current.row &&
      snakeHead.col === foodCords.current.col;

    cords.forEach((_, idx) => {
      if (idx === cords.length - 1) {
        cords[idx] = { ...snakeHead };
        cords[idx].isHead = false;
        return;
      }
      cords[idx] = cords[idx + 1];
    });
    switch (curr_direction) {
      case UP:
        snakeHead.row -= 1;
        break;
      case DOWN:
        snakeHead.row += 1;
        break;
      case LEFT:
        snakeHead.col -= 1;
        break;
      case RIGHT:
        snakeHead.col += 1;
        break;
    }

    if (foodConsumed) {
      setPoints((points) => points + 10);
      populateFoodBall();
    }

    const collided = collisionCheck(snakeHead);
    if (collided) {
      stopGame();
      return;
    }

    cords.push(snakeHead);
    snakeCordinates.current = foodConsumed ? [snakeTail, ...cords] : cords;
    syncSnakeCordinateMap();
  };

  const populateFoodBall = async () => {
    const row = Math.floor(Math.random() * ROWs);
    const col = Math.floor(Math.random() * COLs);

    foodCords.current = {
      row,
      col,
    };
  };

  const collisionCheck = (snakeHead) => {
    if (
      snakeHead.col >= COLs ||
      snakeHead.row >= ROWs ||
      snakeHead.col < 0 ||
      snakeHead.row < 0
    ) {
      return true;
    }

    const cordKey = `${snakeHead.row}: ${snakeHead.col}`;

    if (snakeCordinatesMap.current.has(cordKey)) {
      return true;
    }
  };
  const startGame = async () => {
    const interval = setInterval(() => {
      moveSnake();
    }, 100);

    timer.current = interval;
  };

  const stopGame = async () => {
    setGameOver(true);
    setPlaying(false);
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  return (
    <>
      <div id="design">
        <div className="app-container">
          {gameOver ? (
            <p className="game-over">GAME OVER</p>
          ) : (
            <button
              className="button"
              onClick={isPlaying ? stopGame : startGame}
            >
              {isPlaying ? "STOP" : "START"} GAME
            </button>
          )}
          <div className="board">
            {grid.current?.map((row, row_idx) => (
              <div key={row_idx} className="row">
                {row.map((_, col_idx) => getCell(row_idx, col_idx))}
              </div>
            ))}
          </div>
          <p className="score">SCORE {points}</p>
        </div>
      </div>
    </>
  );
}
