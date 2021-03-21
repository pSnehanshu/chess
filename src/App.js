import _ from "lodash";
import "./styles.css";

const PIECES = {
  WHITE_ROOK: "R",
  WHITE_KNIGHT: "K",
  WHITE_BISHOP: "B",
  WHITE_QUEEN: "Q",
  WHITE_KING: "K",
  WHITE_PAWN: "P",
  BLACK_ROOK: "r",
  BLACK_KNIGHT: "k",
  BLACK_BISHOP: "b",
  BLACK_QUEEN: "q",
  BLACK_KING: "k",
  BLACK_PAWN: "p",
  BLANK: ""
};

const INITIAL_BOARD_STATE = () => [
  [
    PIECES.BLACK_ROOK,
    PIECES.BLACK_KNIGHT,
    PIECES.BLACK_BISHOP,
    PIECES.BLACK_KING,
    PIECES.BLACK_QUEEN,
    PIECES.BLACK_BISHOP,
    PIECES.BLACK_KNIGHT,
    PIECES.BLACK_ROOK
  ],
  [
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN,
    PIECES.BLACK_PAWN
  ],
  [
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN,
    PIECES.WHITE_PAWN
  ],
  [
    PIECES.WHITE_ROOK,
    PIECES.WHITE_KNIGHT,
    PIECES.WHITE_BISHOP,
    PIECES.WHITE_KING,
    PIECES.WHITE_QUEEN,
    PIECES.WHITE_BISHOP,
    PIECES.WHITE_KNIGHT,
    PIECES.WHITE_ROOK
  ]
];

function ChessBoard() {
  return {};
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
