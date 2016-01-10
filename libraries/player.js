var redPilot = new Image();
redPilot.src = 'images/pixelPilotred.png';

var grayPilot = new Image();
grayPilot.src = 'images/pixelPilotgray.png';

var bluePilot = new Image();
bluePilot.src = 'images/pixelPilotblue.png';

var titleScreen = new Image();
titleScreen.src = 'images/TitleScreen.png';


var playerBullets = [];

function Bullet(I) {
    I.active = true;

    I.xVelocity = 0;
    I.yVelocity = -I.speed;
    I.width = 5;
    I.height = 7;
    I.color = I.bulletID == player.aka ? player.color: I.bulletID == player2.aka ? player2.color : player3.color ;

    I.inBounds = function() {
        return I.x >= 0 && I.x <= CANVAS_WIDTH &&
            I.y >= 0 && I.y <= CANVAS_HEIGHT;
    };

    I.draw = function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    };

    I.update = function() {
        I.x += I.xVelocity;
        I.y += I.yVelocity;

        I.active = I.active && I.inBounds();
    };

    return I;
}

var playerMissiles = [];

function Missle(I) {
    I.active = true;

    I.xVelocity = 0;
    I.mousePosX = mousePos.x;
    I.mousePosY = mousePos.y;
    I.yVelocity = -I.speed;
    I.width = 1002;
    I.height = 32;
    I.color = "#32cd32";

    I.inBounds = function() {
        return I.x >= 0 && I.x <= CANVAS_WIDTH &&
            I.y >= 0 && I.y <= CANVAS_HEIGHT;
    };

    I.draw = function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    };

    I.update = function() {
        I.x += I.mousePosX;
        I.y += I.mousePosY + I.yVelocity;

        I.active = I.active && I.inBounds();
    };

    return I;
}

function reload1(){
    alreadyShot1 = true;
};
function reload2(){
    alreadyShot2 = true;
};

function reload3(){
    alreadyShot3 = true;
};

//The Player Class
function PlayerCreator(spriteimg,name,alias,order,pilotImage,color,reload,startingX,startingY){

      // color: "#00A",
      this.sprite = Sprite(spriteimg);
      this.x = startingX;
      this.y = startingY;
      this.width = 32;
      this.height = 32;
      this.life = 100;
      this.velX = 0;
      this.velY = 0;
      this.speed = 4;
      this.pointScore = 0;
      this.order = order;
      this.name = name;
      this.aka = alias;
      this.friction = 0.85;
      this.pilotImg = pilotImage;
      this.color = color;
      this.draw = function() {
          //canvas.fillStyle = this.color;
          // canvas.fillRect(this.x, this.y, this.width, this.height);
          this.sprite.draw(canvas, this.x, this.y);
      };
      this.shoot = function() {
          var bulletPosition = this.midpoint();
          shoot_sound.play();

          playerBullets.push(Bullet({
              speed: 5,
              x: bulletPosition.x,
              y: bulletPosition.y,
              bulletID: alias
          }))

          setTimeout(reload, 500);
      };
    this.movement = function(left,right,up,down){
    // debugger;
    if(alias == "player1"){
      left = keydown.left;
      right = keydown.right;
      up = keydown.up;
      down = keydown.down;
    }
    if(alias == "player2"){
      left = keydown.a;
      right = keydown.d;
      up = keydown.w;
      down = keydown.s;
    }
    if(alias == "player3"){
      left = keydown.j;
      right = keydown.l;
      up = keydown.i;
      down = keydown.k;
    }
          if (left) {
             if (this.velX > -this.speed) {
                  this.velX--;
              }
          }

          if (right) {
             if (this.velX < this.speed) {
                  this.velX++;
              }
          }

          if (up) {
              if (this.velY > -this.speed) {
                  this.velY--;
              }


          }

          if (down) {
              if (this.velY < this.speed) {
                  this.velY++;
              }

          }

          this.velX *= this.friction;
          this.x += this.velX;

          this.velY *= this.friction;
          this.y += this.velY;



          this.x = this.x.clamp(0, CANVAS_WIDTH - this.width); //prevents character from going past canvas


          this.y = this.y.clamp(0, CANVAS_HEIGHT - this.height); //prevents character from going past canvas

      };
      this.launch = function(){
          var missilePostition = this.midpoint();
          console.log(Missle.width);
          playerMissiles.push(Missle({
              speed: 2,
              x: missilePostition.x - 500,
              y: missilePostition.y
          }))
      };
      this.midpoint = function() {
          return {
              x: this.x + this.width / 2,
              y: this.y + this.height / 2
          };
      };
      this.explode = function() {
          this.active = false;
          explosion_sound.play();
          GameLoopMusic_sound.fadeOut(0, 2000);
          currentState = states.End;
          // An explosion sound and then end the game
      };
      this.lifeChange = function(change) {


          this.life = this.life + change; //Adds or subtracts health based on the value added in the function

          if (this.life <= 0) {
              this.explode();
          }
          if(this.life > 100){
              this.life = 100;
          }
          return this.life;


      };
      this.score =function(change) {


          this.pointScore = this.pointScore + change; //Adds or subtracts health based on the value added in the function

          /*if (this.life <= 0) {
              this.explode();
          }*/

          return this.pointScore;


      };
      this.isHit = false;
      this.quip = "";


};
