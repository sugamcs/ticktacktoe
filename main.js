function gameBoard() {
    return { cells: [null, null, null, null, null, null, null, null, null] };
}

const board1 = gameBoard();
const container = document.querySelector('.container');

function boardRender() {
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

const player1 = createPlayers("Player 1", "X", true);
const player2 = createPlayers("Player 2", "O", false);

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

            // Check for a winner
            const winner = controlFlow.findWinner();
            if (winner) {
                alert(`${winner} is the winner!`);
                // You can add more game-ending logic here
            }
        }
    },
    findWinner: function () {
        // Define the winning combinations (you may need more depending on your game rules)
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        // Iterate through each winning combination
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            const cellA = cellElements[a];
            const cellB = cellElements[b];
            const cellC = cellElements[c];

            // Check if all three cells in the combination have the same text content (either 'X' or 'O')
            if (cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent) {
                // You have a winner!
                return cellA.textContent;
            }
        }

        // If no winner is found, return null to indicate a tie or ongoing game
        return null;
    }
};

cellElements.forEach((cell) => {
    cell.addEventListener('click', controlFlow.placeMarker);
});








// should I write code that I want for :
// I will check for text content of each cell ,
//  declare player 1 winner if 3 cells have X as the text content and same 
// for player2 if cells have 0 as the text content

// should I write this outside(where i can like console log it and check) or in the control flow (weird question)

