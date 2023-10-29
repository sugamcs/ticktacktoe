function gameBoard() {
  return { cells: [null, null, "X", null, null, null, null, null, null] };
}
const board1 = gameBoard();

const container = document.querySelector('.container');

function boardRender() {
  board1.cells.forEach((cell, index) => {
      const cellElement = document.createElement('div');
      cellElement.textContent = cell
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
      }
  },
  // findWinner: function (){
  //   // I need to access each cell and its property, how can i do that
    
  // }
};
cellElements.forEach((cell) => {
  cell.addEventListener('click', controlFlow.placeMarker);
});


boardIndex = board1.cells

let clickedArrayP1 = []
let clickedArrayP2 = []
console.log(currentPlayer)
