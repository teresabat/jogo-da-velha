document.addEventListener('DOMContentLoaded',() => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener('click' , () =>{
            const index = cell.getAttribute('data-index');
            if (gameBoard[index] === '') {
                gameBoard[index] = currentPlayer;
                cell.textContent= currentPlayer;
                if (checkWin()){
                    window.alert(`${currentPlayer} venceu!`);
                    resetGame();
                } else if (gameBoard.every(cell => cell !== '')){
                    window.alert('Empate!');
                    resetGame();
                }else{
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                 }
            }
        });
    });
    
    resetButton.addEventListener('click', resetGame);

    function checkWin(){
        return winPatterns.some(pattern => {
            return pattern.every(index =>{
                return gameBoard[index] === currentPlayer;
            });
        });
    }

    function resetGame(){
        gameboard = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => cell.textContent ='');
        currentPlayer = 'X';
    }
});