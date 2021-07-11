/* function Roll(value) {
  if (value === 1) {
    return "Your turn is over";
  }
}

console.log(Roll(1)); */

function Player() {
  this.turn = 0;       //0 means not their turn, 1 means their turn
  this.turnScore = 0;
  this.gameScore = 0;
}

Player.prototype.calcTurnScore = function(diceResult) {
   return this.turnScore += diceResult;
}


let player = new Player();
console.log(player.calcTurnScore(6));


