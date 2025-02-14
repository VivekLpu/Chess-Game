<<<<<<< HEAD


import { blackPawn } from "../data/pieces.js";
import { whitePawn } from "../data/pieces.js";
const ROOT_DIV = document.getElementById("root");

//use when you want to render pieces on board
function pieceRender(data){
    data.forEach(row => {
        row.forEach(square => {
            //if square has piece
            if(square.piece){
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

//use when you want to render the board for first when game starts
export function initGameRender(data){
    data.forEach(element => {
        console.log(element);
        const rowEl = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.color,"square");
            
            //render black pawn
            if(square.id[1] == 7){
                square.piece = blackPawn(square.id);
            }

            //render white pawn
            if(square.id[1] == 2){
                square.piece = whitePawn(square.id);
            }


=======
const ROOT_DIV = document.getElementById("root");

export function initGameRender(data){
    data.forEach(element => {
        const rowEl = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color,"square");
>>>>>>> 14d1ac661ba2b7b0bd61643c95587c3abfa3feb0
            rowEl.appendChild(squareDiv);
        });
        
        rowEl.classList.add("squareRow");
<<<<<<< HEAD
        ROOT_DIV.appendChild(rowEl); 
    });

    pieceRender(data);

};

=======
        ROOT_DIV.appendChild(rowEl);
    });
};
>>>>>>> 14d1ac661ba2b7b0bd61643c95587c3abfa3feb0
