import { Square } from "../data/data.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../Render/main.js";
import { clearHighlight } from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";
import { clearPreviousSelfHighlight } from "../Render/main.js";
import { moveElement } from "../Render/main.js";

//highlighted or not => State
let highlight_state = false;

//current selfhighlighted square state
let selfHighlightState = null;

//in move state or not
let moveState = null;

//white pawn click event
function whitePawnClick({ piece }) {
  //if clicked on same element twice
  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    selfHighlightState = null;
    clearHighlight();
    return;
  }

  selfHighlight(piece);
  selfHighlightState = piece;

  //add piece as move State
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();
  //On initial Position
  if (piece.current_position[1] == "2") {
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];

    //clear board for any previous highlights
    clearHighlight();

    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });
      // if(highlight_state)
      //     clearHighlight();
      //     renderHighlight(highlight);
      // highlight_state = true;
    });
  } else {
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;

    console.log(current_pos);
    console.log(col1, col2);

    const captureIds = [];

    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
    ];

    //clear board for any previous highlights
    clearHighlight();

    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });
      // if(highlight_state)
      //     clearHighlight();
      //     renderHighlight(highlight);
      // highlight_state = true;
    });
  }
  // console.log(globalState)
}

//black pawn click event
function blackPawnClick({ piece }) {
  //if clicked on same element twice
  if (piece == selfHighlightState) {
    clearPreviousSelfHighlight(selfHighlightState);
    selfHighlightState = null;
    clearHighlight();
    return;
  }

  selfHighlight(piece);
  selfHighlightState = piece;

  //add piece as move State
  moveState = piece;

  const current_pos = piece.current_position;
  const flatArray = globalState.flat();
  //On initial Position
  if (piece.current_position[1] == "7") {
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) - 1}`,
      `${current_pos[0]}${Number(current_pos[1]) - 2}`,
    ];

    //clear board for any previous highlights
    clearHighlight();

    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });
      // if(highlight_state)
      //     clearHighlight();
      //     renderHighlight(highlight);
      // highlight_state = true;
    });
  } else {
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) - 1}`,
    ];

    //clear board for any previous highlights
    clearHighlight();

    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });
      // if(highlight_state)
      //     clearHighlight();
      //     renderHighlight(highlight);
      // highlight_state = true;
    });
  }
  // console.log(globalState)
}
export function globalEvent() {
  ROOT_DIV.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.piece_name == "WHITE_PAWN") {
        whitePawnClick(square);
      } else if (square.piece.piece_name == "BLACK_PAWN") {
        blackPawnClick(square);
      }
    } else {
      const childElementsofClickedEl = Array.from(event.target.childNodes);
      if (
        childElementsofClickedEl.length == 1 ||
        event.target.localName == "span"
      ) {
        if (event.target.localName == "span") {
          const id = event.target.parentNode.id;
          moveElement(moveState, id);
          moveState = null;
        } else {
          const id = event.target.id;
          moveElement(moveState, id);
        }

        //clearHighlights
        clearHighlight();
        clearPreviousSelfHighlight(selfHighlightState);
        selfHighlightState = null;
      } else {
        //clearHighlights
        clearHighlight();
        clearPreviousSelfHighlight(selfHighlightState);
        selfHighlightState = null;
      }
    }
  });
}
