var input,heading;
var ship
var gameState = 'play'
var BG
var player
var asteroid
var asteroid2
var asteroid3
var gameOver
var GAMEOVER = 'false'
function preload(){
  asteroidIMG = loadImage('asteroid.png')
  shipImg = loadImage('ship.png')
    playerImg = loadImage('player.png')
    bgIMG = loadImage('spaceBG.png')
}
function setup() {
  //creating sprites
  createCanvas(windowWidth, windowHeight);

  BG = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  BG.addImage('Background', bgIMG)

  ship = createSprite(windowWidth/2, windowHeight/2,60,40);
  ship.addImage('ship', shipImg)
  

  player = createSprite(windowWidth/2 + 20, windowHeight/2 -50, 20, 20);
  player.addImage('player', playerImg)
  player.scale = 0.5

  asteroid = createSprite(windowWidth, windowHeight/2, 120, 120)
  asteroid.y = random( 0, windowHeight)
  asteroid.velocityX = random( -2, -4)
  asteroid.addImage('asteroid', asteroidIMG)
  asteroid.scale = random( 0.5, 3.0)

  asteroid2 = createSprite(windowWidth, windowHeight/2, 120, 120)
  asteroid2.y = random( 0, windowHeight)
  asteroid2.velocityX = random( -2, -4)
  asteroid2.addImage('asteroid', asteroidIMG)
  asteroid2.scale = random( 0.5, 3.0)

  asteroid3 = createSprite(windowWidth, windowHeight/2, 120, 120)
  asteroid3.y = random( 0, windowHeight)
  asteroid3.velocityX = random( -2, -4)
  asteroid3.addImage('asteroid', asteroidIMG)
  asteroid3.scale = random( 0.5, 3.0)

  gameOver = createSprite(windowWidth, windowHeight*1.1, windowWidth*2,5);
}

function draw() {
  background('black')
  if (gameState === 'play'){
      //ship controls
    if (keyDown('w')){
      ship.y = ship.y - 5
    }
    if (keyDown('s')){
      ship.y = ship.y + 5
    }
    if (keyDown('a')){
      ship.x = ship.x - 5
    }
    if (keyDown('d')){
      ship.x = ship.x + 5
    }
    // player jump
    if (player.collide(ship) && keyDown('up') || player.collide(asteroid) && keyDown('up')
    || player.collide(asteroid2) && keyDown('up') || player.collide(asteroid3) && keyDown('up')){
      player.velocityY = -20
    }

    //player controls
    if (keyDown('down')){
      player.y = player.y + 5
    }
    if (keyDown('left')){
      player.x = player.x - 5
    }
    if (keyDown('right')){
      player.x = player.x + 5
    }
    //player gravity
    player.velocityY = player.velocityY + 1
    //player collisions
    player.collide(ship)
    player.collide(asteroid)
    player.collide(asteroid2)
    player.collide(asteroid3)
    ship.collide(player)
    ship.collide(asteroid)
    ship.collide(asteroid2)
    ship.collide(asteroid3)
    //asteroid respawn
    if (asteroid.x < -175){
      asteroid.x = windowWidth
      asteroid.y = random(0, windowHeight)
      asteroid.velocityX = random( -2, -4)
      asteroid.scale = random( 0.5, 3.0)
    }
        if (asteroid2.x < -175){
      asteroid2.x = windowWidth
      asteroid2.y = random(0, windowHeight)
      asteroid2.velocityX = random( -2, -4)
      asteroid2.scale = random( 0.5, 3.0)
    }
    if (asteroid3.x < -175){
      asteroid3.x = windowWidth
      asteroid3.y = random(0, windowHeight)
      asteroid3.velocityX = random( -2, -4)
      asteroid3.scale = random( 0.5, 3.0)
    }
    //game over
    if (player.collide(gameOver)){
      gamestate = 'end'
        if (gameState = 'end'){
          text('GAME OVER', windowWidth/2, windowHeight/2)
        player.velocityY = 5
        ship.VelocityX = -20
        }
    if (GAMEOVER === 'true'){
      text('GAME OVER', windowWidth/2, windowHeight/2)
      GAMEOVER = 'true'
    }
  }


  }

  drawSprites()
}