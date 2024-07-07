import { useRef, useState } from "react";
import "./snake.css";


export default function Snake(){
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
const foodCords = useRef({row:-1 , cols:-1});
const [points , setPoinrs] = useState(0);
const [gameOver , setGameOver] = useState(false);
const [isPlaying , setPlaying] = useState(0);


}