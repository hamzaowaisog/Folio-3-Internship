import { useCallback, useEffect, useRef, useState } from "react";
import "./snake.css";

const COLs = 48;
const ROWs = 48;

const DEFAULT_LENGTH = 1;
const UP = Symbol("up");
const DOWN = Symbol("down");
const LEFT = Symbol("left");
const RIGHT = Symbol("right");

export default function Snake() {
  const timer = useRef(null);
  const direction = useRef(RIGHT);
  const [snakeCordinates, setSnakeCordinates] = useState([]);
  const snakeCordinatesMap = useRef(new Set());
  const foodCords = useRef({ row: -1, col: -1 });
  const [points, setPoints] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    const handlekeyDown = (e) => handleDirectionChange(e.key);
    window.addEventListener("keydown", handlekeyDown);
    return () => {
      window.removeEventListener("keydown", handlekeyDown);
    };
  }, []);

  useEffect(() => {
    const snake_positions = [];
    for (let i = 0; i <= DEFAULT_LENGTH; i++) {
      snake_positions.push({ row: 0, col: i, isHead: false });
    }
    snake_positions[DEFAULT_LENGTH-1].isHead = true;
    setSnakeCordinates(snake_positions);

    syncSnakeCordinateMap();
    populateFoodBall();
  }, []);

  const handleDirectionChange = (key) => {
    direction.current = getNewDirection(key);
  };

  const getNewDirection = (key) => {
    switch (key) {
      case "ArrowUp":
        return UP;
      case "ArrowDown":
        return DOWN;
      case "ArrowLeft":
        return LEFT;
      case "ArrowRight":
        return RIGHT;
      default:
        return direction.current;
    }
  };

  const syncSnakeCordinateMap = () => {
    const snakeCordsSet = new Set(
      snakeCordinates.map((cords) => `${cords.row}:${cords.col}`)
    );
    snakeCordinatesMap.current = snakeCordsSet;
  };

  const moveSnake = () => {
    if (gameOver) return;

    setPlaying(true);

    const cords = [...snakeCordinates];
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
    setSnakeCordinates(foodConsumed ? [snakeTail, ...cords] : cords);
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

    const cordKey = `${snakeHead.row}:${snakeHead.col}`;

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

  const getCell = useCallback(
    (row_idx, col_idx) => {
      const cords = `${row_idx}:${col_idx}`;
      const foodPos = `${foodCords.current.row}:${foodCords.current.col}`;
      const head = snakeCordinates[snakeCordinates.length - 1];
      const headPos = `${head?.row}:${head?.col}`;
      const isFood = cords === foodPos;
      const isHead = headPos === cords;
      const isSnakeBody = snakeCordinatesMap.current.has(cords);

      console.log(`Cell (${row_idx}, ${col_idx}):`, { isFood, isHead, isSnakeBody });

      let className = "cell";
      if (isFood) {
        className += " food";
      }
      if (isSnakeBody) {
        className += " body";
      }
      if (isHead) {
        className += " head";
      }

      return <div key={col_idx} className={className}></div>;
    },
    [foodCords.current, snakeCordinates, snakeCordinatesMap.current]
  );

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
            {Array.from({ length: ROWs }, (_, row_idx) => (
              <div key={row_idx} className="row">
                {Array.from({ length: COLs }, (_, col_idx) => getCell(row_idx, col_idx))}
              </div>
            ))}
          </div>
          <p className="score">SCORE {points}</p>
          <div className="keys-container">
            <button onClick={() => handleDirectionChange("ArrowUp")}>UP</button>
            <div className="key-row">
              <button onClick={() => handleDirectionChange("ArrowLeft")}>
                LEFT
              </button>
              <button onClick={() => handleDirectionChange("ArrowRight")}>
                RIGHT
              </button>
            </div>
            <button onClick={() => handleDirectionChange("ArrowDown")}>
              DOWN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}