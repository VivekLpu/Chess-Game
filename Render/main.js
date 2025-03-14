import * as piece from "../data/pieces.js";

import { ROOT_DIV } from "../Helper/constants.js";

import { globalState } from "../index.js";

//move element to square with id
export function moveElement(piece, id) {
  // piece.current_position = piece.current_position;

  const flatData = globalState.flat();
  flatData.forEach((el) => {
    if (el.id == piece.current_position) {
      delete el.piece;
    }

    if (el.id == id) {
      el.piece = piece;
    }
  });
  clearHighlight();

  const previousPiece = document.getElementById(piece.current_position);
  previousPiece.classList.remove("highlightYellow");
  
  const currentPiece = document.getElementById(id);

  currentPiece.innerHTML = previousPiece.innerHTML;
  previousPiece.innerHTML = "";
  
  piece.current_position = id;
}

export function clearPreviousSelfHighlight(piece) {
  if (piece) {
    document
      .getElementById(piece.current_position)
      .classList.remove("highlightYellow");
  }
}

export function selfHighlight(piece) {
  document
    .getElementById(piece.current_position)
    .classList.add("highlightYellow");
}

//use when you wnat to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      //if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);
        //create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        //insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

//render highlight Cicle
export function renderHighlight(squareId) {
  const highlightSpan = document.createElement("span");
  highlightSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(highlightSpan);
}

//clear all  from the board
export function clearHighlight() {
  const flatData = globalState.flat();
  flatData.forEach((el) => {
    if (el.highlighted) {
      document.getElementById(el.id).innerHTML = "";
      el.highlighted = false;
    }
  });
}

//use when you wnat ot render game board for first time when game starts
export function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");

      //render blackpawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
      }

      //render black rook
      if (square.id == "a8" || square.id == "h8") {
        square.piece = piece.blackRook(square.id);
      }

      //render black knight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
      }

      //render black bishop
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
      }

      //render black queen
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
      }

      //render black king
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
      }

      //render whitepawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
      }

      //render white rook
      if (square.id == "a1" || square.id == "h1") {
        square.piece = piece.whiteRook(square.id);
      }

      //render white knight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
      }

      //render white bishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
      }

      //render white queen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
      }

      //render white king
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
      }

      rowEl.appendChild(squareDiv);
    });

    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });
  pieceRender(data);
}
//commited
