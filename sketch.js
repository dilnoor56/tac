var canvas, backgroundImage;
var b1,b2,b3,b4
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bg
var img
var form, player, game;
var tile_1,tile_2,tile_3,tile_4,tile_5,tile_6,tile_7,tile_8,tile_9;

function preload(){
  bg=loadImage("interface1.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
    background(bg)
  if(playerCount === 2){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
}