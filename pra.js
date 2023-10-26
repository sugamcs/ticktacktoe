function newOne(player1,player2){
    this.player1 = player1
    this.player2 = player2
    return "Players are " + this.player1 + this.player2 
}

const p1 = new newOne("sugam", "bh")
console.log(p1)