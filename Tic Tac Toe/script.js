let currentPlayer = "X";
let gameBoard  = Array(9).fill(null);
let gameOver = false;

function checkWinner() {
    if(gameBoard[0] !== null && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] ||
       gameBoard[3] !== null && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] ||
       gameBoard[6] !== null && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] ||
       gameBoard[0] !== null && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] ||
       gameBoard[1] !== null && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] ||
       gameBoard[2] !== null && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] ||
       gameBoard[0] !== null && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] ||
       gameBoard[2] !== null && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {

        gameOver = true;
        document.getElementById("winner").textContent = `Player ${currentPlayer} wins!`;
        document.getElementById("winnerpopup").style.display = "block";
        return;
       } 
       {
        if (!gameBoard.includes(null)) {
            document.getElementById("winner").textContent = "It's a draw!";
            document.getElementById("winnerpopup").style.display = "block";
            return;
        }
       }

}

function handleClick(el) {
    // Implementation for handling click events
    const id = Number(el.id);
    if (gameOver) {
        return;
    }
    if(gameBoard[id] !== null) {
        return;
    }
    gameBoard[id] = currentPlayer;
    el.textContent = currentPlayer;
    checkWinner();
    if(!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    
}

function restartGame() {
    gameBoard = Array(9).fill(null);
    gameOver = false;
    currentPlayer = "X";
    document.querySelectorAll(".col").forEach(cell =>{cell.textContent = ""});
    document.getElementById("winnerpopup").style.display = "none";
}   