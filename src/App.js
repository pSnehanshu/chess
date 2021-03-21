import _ from "lodash";
import { Piece } from "@chessire/pieces";
import "./styles.css";
import { useState } from "react";
import clsx from "clsx";

const PIECES = {
  WHITE_ROOK: "R",
  WHITE_KNIGHT: "N",
  WHITE_BISHOP: "B",
  WHITE_QUEEN: "Q",
  WHITE_KING: "K",
  WHITE_PAWN: "P",
  BLACK_ROOK: "r",
  BLACK_KNIGHT: "n",
  BLACK_BISHOP: "b",
  BLACK_QUEEN: "q",
  BLACK_KING: "k",
  BLACK_PAWN: "p",
  BLANK: ""
};

const PIECE_COMPONENT = {
  [PIECES.WHITE_ROOK]: (props) => <Piece {...props} color="white" piece="R" />,
  [PIECES.WHITE_KNIGHT]: (props) => (
    <Piece {...props} color="white" piece="N" />
  ),
  [PIECES.WHITE_BISHOP]: (props) => (
    <Piece {...props} color="white" piece="B" />
  ),
  [PIECES.WHITE_QUEEN]: (props) => <Piece {...props} color="white" piece="Q" />,
  [PIECES.WHITE_KING]: (props) => <Piece {...props} color="white" piece="K" />,
  [PIECES.WHITE_PAWN]: (props) => <Piece {...props} color="white" piece="P" />,
  [PIECES.BLACK_ROOK]: (props) => <Piece {...props} color="black" piece="R" />,
  [PIECES.BLACK_KNIGHT]: (props) => (
    <Piece {...props} color="black" piece="N" />
  ),
  [PIECES.BLACK_BISHOP]: (props) => (
    <Piece {...props} color="black" piece="B" />
  ),
  [PIECES.BLACK_QUEEN]: (props) => <Piece {...props} color="black" piece="Q" />,
  [PIECES.BLACK_KING]: (props) => <Piece {...props} color="black" piece="K" />,
  [PIECES.BLACK_PAWN]: (props) => <Piece {...props} color="black" piece="P" />,
  [PIECES.BLANK]: (props) => <></>
};

const INITIAL_BOARD_STATE = () => [
  [
    PIECES.BLACK_ROOK,
    PIECES.BLACK_KNIGHT,
    PIECES.BLACK_BISHOP,
    PIECES.BLACK_QUEEN,
    PIECES.BLACK_KING,
    PIECES.BLACK_BISHOP,
    PIECES.BLACK_KNIGHT,
    PIECES.BLACK_ROOK
  ],
  _.repeat(PIECES.BLACK_PAWN, 8).split(""),
  Array(8).fill(PIECES.BLANK),
  Array(8).fill(PIECES.BLANK),
  Array(8).fill(PIECES.BLANK),
  Array(8).fill(PIECES.BLANK),
  _.repeat(PIECES.WHITE_PAWN, 8).split(""),
  [
    PIECES.WHITE_ROOK,
    PIECES.WHITE_KNIGHT,
    PIECES.WHITE_BISHOP,
    PIECES.WHITE_QUEEN,
    PIECES.WHITE_KING,
    PIECES.WHITE_BISHOP,
    PIECES.WHITE_KNIGHT,
    PIECES.WHITE_ROOK
  ]
];

function getCellColor(row, col) {
  if (row % 2 === 0) {
    if (col % 2 === 0) {
      return "white";
    } else {
      return "black";
    }
  } else {
    if (col % 2 === 0) {
      return "black";
    } else {
      return "white";
    }
  }
}

function applyMove(board, move) {
  const copiedBoard = _.cloneDeep(board);
  const [[fromX, fromY], [toX, toY]] = move;
  const srcContent = board[fromY][fromX];
  if (srcContent === PIECES.BLANK) {
    return board;
  }
  copiedBoard[fromY][fromX] = PIECES.BLANK;
  copiedBoard[toY][toX] = srcContent;
  return copiedBoard;
}

export default function App() {
  const [board, setBoard] = useState(INITIAL_BOARD_STATE());
  const [selectedCell, setSelectedCell] = useState(null);

  const isSelected = (row, col) => {
    if (!selectedCell) return false;

    const [sCol, sRow] = selectedCell;
    return sCol === col && sRow === row;
  };

  const onCellClicked = (row, col) => () => {
    if (!selectedCell) {
      setSelectedCell([col, row]);
    } else {
      setBoard(applyMove(board, [selectedCell, [col, row]]));
      setSelectedCell(null);
    }
  };

  return (
    <div className="App">
      <table cellSpacing="0">
        <tbody>
          {_.map(board, (row, i) => (
            <tr key={i}>
              {_.map(row, (piece, j) => {
                const PieceComponent = PIECE_COMPONENT[piece];
                return (
                  <td
                    onClick={onCellClicked(i, j)}
                    key={j}
                    // className={`cell ${getCellColor(i, j)}`}
                    className={clsx("cell", getCellColor(i, j), {
                      selected: isSelected(i, j)
                    })}
                  >
                    <PieceComponent width={40} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
