# Pig Dice Game
App that allows users to play pig-dice
Created by Marni Sucher and Smita Raj, 7.11.2021

# Technologies Used
* VS Code, HTML, CSS, JavaScript, jQuery
* Bootstrap


## Description

Choose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.

If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the die to the next player.

Play passes from player to player until a winner is determined.

How do you win?
The first player to accumulate 100 or more points wins the game.

## Specs
   Test 1: function Roll()
   Expect(Roll(1)).toEqual("Your turn is over")

   Test 2: function Player()
   Expect(let player).toEqual(new Player())
   Note: This ensures that the constructor function works. 

   Test 3: Player.prototype.calcTurnScore(diceResult)
   Expect(player.calcTurnScore(6)).toEqual(6)

## Setup/Installation Requirements
* Clone this repository to your machine: https://github.com/marnionrails/pig-dice-game
* Navigate to root folder of the pig-dice-game repository
* Go to index.html and open in any browser

## Known Bugs
None at this time

## License

GPL

## Contact
Marni Sucher: suchermarni@gmail.com or smita Raj: smita.raj12@gmail.com



let diceRoll = Math.floor(Math.random()*(6)+1);

Player()

turn, turnscore, gamescore, 