/* function Roll(value) {
  if (value === 1) {
    return "Your turn is over";
  }
}

console.log(Roll(1)); */

function Player() {
  this.playerTurn = "Roll Again";       //0 means not their turn, 1 means their turn
  this.turnScore = 0;
  this.gameScore = 0;
}

Player.prototype.calcTurnScore = function() {
   this.turnScore = Math.floor(Math.random()*(6)+1);
   return this.turnScore;
}

Player.prototype.totalGameScore = function(turn) {
    this.gameScore += turn;
    this.turnScore = 0;
}
/* 
Player.prototype.choose = function() {
    if (this.calcTurnScore() === 1) 
    {
      this.playerTurn = "Next Player";
      this.switchPlayers();
    }
    else 
    {
      this.playerTurn = 
      if (this.PlayerTurn === "Next Player")
      {
        this.switchPlayers();
      }
      else 
      {
        this.playerTurn === "Roll Again";
      }
    }
  return this.playerTurn;
} */

Player.prototype.switchPlayers = function() {
  if (player1 === this)
  {
    player2 = this;
    console.log("Player2");
    player2.events();
  }
  else
  {
    player1 = this;
    console.log("Player1");
    player1.events();
  }
}

Player.prototype.events = function() {
      let turn = this.calcTurnScore();
      console.log(turn);
      this.totalGameScore(turn);
      console.log(this.gameScore)
      // this.choose();
}



let player1 = new Player();
let player2 = new Player();

player1.events();


$(document).ready(function(){

})