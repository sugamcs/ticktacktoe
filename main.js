function gameBoard() {
        return {cells: [null, null, null, null, null, null, null, null, null]
        }
    }
const board1 = gameBoard();
board1.cells[2] = "X"
console.log(board1)


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
const p1 = createPlayers("Player 1", "X", false)
const p2 = createPlayers("Player 2", "0", true)

// console.log(p1.marker)
