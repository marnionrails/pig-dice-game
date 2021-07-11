/* function Roll(value) {
  if (value === 1) {
    return "Your turn is over";
  }
}

console.log(Roll(1)); */

function Player() {
  this.turn = 0; //0 means not their turn, 1 means their turn
}

let player = new Player()
console.log(player)