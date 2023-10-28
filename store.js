function gameBoard() {
    return {cells: [null, null, null, null, null, null, null, null, null]
    }
}
const board1 = gameBoard();
board1.cells[2] = "X"
// console.log(board1)


function boardRender(){
board1.cells.forEach((cell) => {
    const cellElement = document.createElement('div')
    cellElement.textContent = cell
    document.body.append(cellElement)
})
}


boardRender()


function createPlayers(name, marker, turn){
const playerCreated = {name:name, marker:marker, turn:turn}
// document.body.append(playerCreated)

return playerCreated

}
const player1 = createPlayers("Player 1", "X", false)
const player2 = createPlayers("Player 2", "0", true)

let controlFlow = {
findTurn: function(){
let currentPlayer;
if (player1.turn == true) {
currentPlayer = player1
}else{ 
currentPlayer = player2
}
return currentPlayer
},
switchTurn: function() {
  player1.turn = !player1.turn
  player2.turn = !player2.turn
},

placeMarker: function(event){
if (cell.textContent == null){
  if(event.target == cell){
    event.target.textContent = player1.marker
    this.switchTurn()
    
  }
}
}



}

const p1 = controlFlow.findTurn()

