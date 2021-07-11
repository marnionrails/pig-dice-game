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

Player.prototype.calcTurnScore = function() {
   let diceRoll = Math.floor(Math.random()*(6)+1)
   this.turnScore += diceRoll;
   return this.turnScore;
}

Player.prototype.totalGameScore = function(turn) {
    this.gameScore += turn;
    this.turnScore = 0;
}



let player = new Player();
let turn = player.calcTurnScore();
player.totalGameScore(turn);



