//Global Variables
var player1, player2;
let player1 = new Player (prop1, prop2, etc)
//Business Logic
//Constructor function for a player
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}


//Function to disable and enable gaming areas according to which player is active.
function activeUser() {

//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
  var randomNo = Math.floor((Math.random() * 6) + 1); 

//Function on what is to happen when a player holds the game.
Player.prototype.hold = function () {

//Function to reset the form input fields, re-enable the buttons, reset the scores to 0.
function resetFields() {