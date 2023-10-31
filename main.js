function gameBoard() {
    return { cells: [null, null, null, null, null, null, null, null, null] };
}

const board1 = gameBoard();
const container = document.querySelector('.container');
let winnerMessage = document.getElementById('winner-message');
let drawMessage = document.getElementById('draw-message');

document.addEventListener('DOMContentLoaded', function() {
    function startGame() {
        const playerName1 = document.getElementById('player1').value;
        const playerName2 = document.getElementById('player2').value;

        if (playerName1 && playerName2) {
            initializeGame(playerName1, playerName2);
        } else {
            alert("Please enter names for both players.");
        }
    }
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', startGame);
});

function initializeGame(playerName1, playerName2) {
    function boardRender() {
        container.innerHTML = '';
        
        board1.cells.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.textContent = cell;
            cellElement.classList.add("cells");
            cellElement.id = `cell-${index}`;
            container.appendChild(cellElement);
        });
    }
    boardRender();

    const cellElements = document.querySelectorAll('.cells');

    function createPlayers(name, marker, turn) {
        return { name: name, marker: marker, turn: turn };
    }
    const player1 = createPlayers(playerName1, "X", true);
    const player2 = createPlayers(playerName2, "O", false);

    let controlFlow = {
        findTurn: function () {
            return player1.turn ? player1 : player2;
        },
        switchTurn: function () {
            player1.turn = !player1.turn;
            player2.turn = !player2.turn;
        },
        placeMarker: function (event) {
            let currentPlayer = controlFlow.findTurn();
            if (event.target.textContent === '' && currentPlayer.turn) {
                event.target.textContent = currentPlayer.marker;
                controlFlow.switchTurn();

                const winner = controlFlow.findWinner();
                if (winner) {
                    const winnerName = winner === "X" ? playerName1 : playerName2;
                    winnerMessage.textContent = `${winnerName} won!`; 
                } else {
                    const draw = controlFlow.findDraw();
                    if (draw) {
                        drawMessage.textContent = "It's a draw!"; 
                    }
                }
            }
        },

        findWinner: function () {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6] // Diagonals
            ];
            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                const cellA = cellElements[a];
                const cellB = cellElements[b];
                const cellC = cellElements[c];
                if (cellA.textContent === cellB.textContent && cellB.textContent === cellC.textContent) {
                    return cellA.textContent;
                }
            }
        },

        findDraw: function () {
            const clickedArray = []
            cellElements.forEach((cell) => {
                if (cell.textContent !== "") {
                    clickedArray.push(cell);
                }
            });
            if (clickedArray.length === 9) {
                return true;
            }
            return false;
        }
    };

    cellElements.forEach((cell) => {
        cell.addEventListener('click', controlFlow.placeMarker);
    });
}
// finished