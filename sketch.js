var canvas, bgImg;
var gameState = 0;
var playerCount = 0;
var database;
var form, player, game;

function setup(){
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}