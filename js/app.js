//Initialize the score of the game.
let score = 0;

// Enemies our player must avoid
let Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here.
  // x is for horizontal position and y is for vertical
  this.x = x;
  this.y = y;

  // Speed of the enemy object
  this.speed = speed;

  // The image/sprite for our enemies, this uses a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // Multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
  // Calculates new horizontal position of enemy after every movement.
  this.x += this.speed * dt;

  // when an enemy is out of sight,
  // update the horizontal coordinate so that enemy is again running with different speed.
  if (this.x > 500) {
    this.x = -100;
    this.speed = 50 + Math.floor(Math.random() * 400);
  }

  //check if there is any collision. If so, restart the game by changing the player's position and reset the score.
  if (this.y > player.y - 65 && this.y < player.y + 65 && this.x > player.x - 65 && this.x < player.x + 65) {

    // Return player to initial position
    player.x = 200;
    player.y = 410;

    // Change the value of score to 0.
    score = 0;
    document.getElementById("score").innerHTML = score;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This class represents Player of the game. Has an update(), render() and a handleInput() method.
class Player {
  constructor(x, y, speed){
    // Variables applied to each of our instances go here.
    // x is for horizontal position and y is for vertical
    this.x = x;
    this.y = y;

    //Speed of the player object
    this.speed = speed;

    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/char-cat-girl.png';
  }

  //Stop player from going out of canvas, and/or update the score when player wins.
  update() {
    //Stop player from going to extreme left side of the canvas
    if(this.x < 0 ) {
      this.x = 0;
    }

    //Stop player from going to extreme right side of the canvas
    if(this.x > 400) {
      this.x = 400;
    }

    //When player reaches the top of the canvas, player won.
    //Update the score and reset player's position.
    if(this.y < 0) {

      //Reset player's position.
      this.x = 200;
      this.y = 410;

      //Update the score.
      score++;
      document.getElementById("score").innerHTML = score;
    }

    //Stop player from going to extreme bottom of the canvas
    if(this.y > 385) {
      this.y = 385;
    }

  }

  //Draw the player on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //Change the horizontal and vertical coordinates of player when left, right, up or down key is pressed.
  //Calculate the new position by adding a constant value to the speed.
  //(0,0) is the coordinate for top-left
  handleInput(pressedKey) {
    switch (pressedKey) {
      case 'left':
        this.x -= this.speed + 30;
        break;
      case 'up':
        this.y -= this.speed + 15;
        break;
      case 'right':
        this.x += this.speed + 30;
        break;
      case 'down':
        this.y += this.speed + 15;
        break;
    }
  }
}

// Instantiate your objects.
// Place all enemy objects in an array called allEnemies
//Each block = 100*100
const enemy1 = new Enemy(0, 65, Math.floor(Math.random() * 400) + 50);
const enemy2 = new Enemy(0, 145, Math.floor(Math.random() * 400) + 50);
const enemy3 = new Enemy(0, 225, Math.floor(Math.random() * 400) + 50);
const allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
const player = new Player(200, 400, 70);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
