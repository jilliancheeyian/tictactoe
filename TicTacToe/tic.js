

// }

// let turn = 1
// const square = document.querySelectorAll ('.square')

// boxes.forEach (function (sqaure) {
//     square.addEventListener ('click', function (){
//         square.innerHTML ='X'
//         turn++
//     })

// })



//lecturer

// let turn = 1

// const board = document.getElementById('board')

// board.addEventListener ('click', function (event){

//     event.target.innerHTML = 'X' ;
//     switchTurn();
// })

function startGame() {
    document.turn = 'X';
    setMessage(document.turn + " get to Start!")
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(square) {
    if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    }
    else {
        setMessage('Pick another square.')
    }
    
}

function switchTurn() {
    if (checkForWinner(document.turn)){
        setMessage ("congrats" + document.turn + " , you won!")
    }
     else if (document.turn == 'X') {
        document.turn = 'O';
        setMessage("It's " + document.turn + " 's turn.")
    }

    else {document.turn = "X";
    setMessage("It's " + document.turn + " 's turn.")
    }

}

function checkForWinner(move) {
    return checkRow(1, 2, 3, move) ||
            checkRow(4, 5, 6, move) ||
            checkRow(7, 8, 9, move) ||
            checkRow(1, 4, 7, move) ||
            checkRow(2, 5, 8, move) ||
            checkRow(3, 6, 9, move) ||
            checkRow(1, 5, 9, move) ||
            checkRow(3, 5, 7, move);
}

function checkRow (a,b,c, move){
    return getBox(a) == move && getBox(b) == move && getBox(c) == move;
}

function getBox (number){
    return document.getElementById("s" + number).innerText;
}

// let winCombos = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]