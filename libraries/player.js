var redPilot = new Image();
redPilot.src = 'images/pixelPilotred.png';

var grayPilot = new Image();
grayPilot.src = 'images/pixelPilotgray.png';

var bluePilot = new Image();
bluePilot.src = 'images/pixelPilotblue.png';



//Create The player
var player = {
    // color: "#00A",
    sprite: Sprite("spaceship"),
    x: 220,
    y: 680,
    width: 32,
    height: 32,
    life: 100,
    velX: 0,
    velY: 0,
    speed: 4,
    pointScore:0,
    order:1,
    name: "Player 1",
    friction: 0.85,
    pilotImg:grayPilot,
    draw: function() {
        //canvas.fillStyle = this.color;
        // canvas.fillRect(this.x, this.y, this.width, this.height);
        this.sprite.draw(canvas, this.x, this.y);
    },
    shoot: function() {
        var bulletPosition = this.midpoint();
        shoot_sound.play();

        playerBullets.push(Bullet({
            speed: 5,
            x: bulletPosition.x,
            y: bulletPosition.y,
            bulletID: "player1"
        }))
    },
    movement: function(){

        if (keydown.left) {
           if (player.velX > -player.speed) {
                player.velX--;
            }
        }

        if (keydown.right) {
           if (player.velX < player.speed) {
                player.velX++;
            }
        }

        if (keydown.up) {
            if (player.velY > -player.speed) {
                player.velY--;
            }

           
        }

        if (keydown.down) {
            if (player.velY < player.speed) {
                player.velY++;
            }

        }

        player.velX *= player.friction;
        player.x += player.velX;

        player.velY *= player.friction;
        player.y += player.velY;



        player.x = player.x.clamp(0, CANVAS_WIDTH - player.width); //prevents character from going past canvas

    
        player.y = player.y.clamp(0, CANVAS_HEIGHT - player.height); //prevents character from going past canvas

    },
    launch: function(){
        var missilePostition = this.midpoint();
        console.log(Missle.width);
        playerMissiles.push(Missle({
            speed: 2,
            x: missilePostition.x - 500,
            y: missilePostition.y
        }))
    },
    midpoint: function() {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        };
    },
    explode: function() {
        this.active = false;
        explosion_sound.play();
        GameLoopMusic_sound.fadeOut(0, 2000);
        currentState = states.End;
        // An explosion sound and then end the game
    },
    lifeChange: function(change) {


        this.life = this.life + change; //Adds or subtracts health based on the value added in the function

        if (this.life <= 0) {
            this.explode();
        }

        return this.life;


    },
    score: function(change) {


        this.pointScore = this.pointScore + change; //Adds or subtracts health based on the value added in the function

        /*if (this.life <= 0) {
            this.explode();
        }*/

        return this.pointScore;


    }
};



//Create The player
var player2 = {
    // color: "#00A",
    sprite: Sprite("pixel_spaceship"),
    x: 260,
    y: 680,
    width: 32,
    height: 32,
    life: 100,
    velX: 0,
    velY: 0,
    speed: 4,
    pointScore:0,
    order:2,
    name: "Player 2",
    friction: 0.85,
    pilotImg:bluePilot,
    draw: function() {
        //canvas.fillStyle = this.color;
        // canvas.fillRect(this.x, this.y, this.width, this.height);
        this.sprite.draw(canvas, this.x, this.y);
    },
    shoot: function() {
        var bulletPosition = this.midpoint();
        shoot_sound.play();

        playerBullets.push(Bullet({
            speed: 5,
            x: bulletPosition.x,
            y: bulletPosition.y,
            bulletID: "player2"
        }))
    },
    movement: function(){
        
        if (keydown.a) {
           if (player2.velX > -player2.speed) {
                player2.velX--;
            }
        }

        if (keydown.d) {
           if (player2.velX < player2.speed) {
                player2.velX++;
            }
        }

        if (keydown.w) {
            if (player2.velY > -player2.speed) {
                player2.velY--;
            }

           
        }

        if (keydown.s) {
            if (player2.velY < player2.speed) {
                player2.velY++;
            }

        }

        player2.velX *= player2.friction;
        player2.x += player2.velX;

        player2.velY *= player2.friction;
        player2.y += player2.velY;



        player2.x = player2.x.clamp(0, CANVAS_WIDTH - player2.width); //prevents character from going past canvas

    
        player2.y = player2.y.clamp(0, CANVAS_HEIGHT - player2.height); //prevents character from going past canvas

    },
    launch: function(){
        var missilePostition = this.midpoint();
        console.log(Missle.width);
        playerMissiles.push(Missle({
            speed: 2,
            x: missilePostition.x - 500,
            y: missilePostition.y
        }))
    },
    midpoint: function() {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        };
    },
    explode: function() {
        this.active = false;
        explosion_sound.play();
        GameLoopMusic_sound.fadeOut(0, 2000);
        currentState = states.End;
        // An explosion sound and then end the game
    },
    lifeChange: function(change) {


        this.life = this.life + change; //Adds or subtracts health based on the value added in the function

        if (this.life <= 0) {
            this.explode();
        }

        return this.life;


    },
    score: function(change) {


        this.pointScore = this.pointScore + change; //Adds or subtracts health based on the value added in the function

        /*if (this.life <= 0) {
            this.explode();
        }*/

        return this.pointScore;


    }
};



//Create The player
var player3 = {
    // color: "#00A",
    sprite: Sprite("redShip"),
    x: 300,
    y: 680,
    width: 32,
    height: 32,
    life: 100,
    velX: 0,
    velY: 0,
    speed: 4,
    pointScore:0,
    order:3,
    name: "Player 3",
    friction: 0.85,
    pilotImg:redPilot,
    draw: function() {
        //canvas.fillStyle = this.color;
        // canvas.fillRect(this.x, this.y, this.width, this.height);
        this.sprite.draw(canvas, this.x, this.y);
    },
    shoot: function() {
        var bulletPosition = this.midpoint();
        shoot_sound.play();

        playerBullets.push(Bullet({
            speed: 5,
            x: bulletPosition.x,
            y: bulletPosition.y,
            bulletID: "player3"
        }))
    },
    movement: function(){
        
        if (keydown.j) {
           if (player3.velX > -player3.speed) {
                player3.velX--;
            }
        }

        if (keydown.l) {
           if (player3.velX < player3.speed) {
                player3.velX++;
            }
        }

        if (keydown.i) {
            if (player3.velY > -player3.speed) {
                player3.velY--;
            }

           
        }

        if (keydown.k) {
            if (player3.velY < player3.speed) {
                player3.velY++;
            }

        }

        player3.velX *= player3.friction;
        player3.x += player3.velX;

        player3.velY *= player3.friction;
        player3.y += player3.velY;



        player3.x = player3.x.clamp(0, CANVAS_WIDTH - player3.width); //prevents character from going past canvas

    
        player3.y = player3.y.clamp(0, CANVAS_HEIGHT - player3.height); //prevents character from going past canvas

    },
    launch: function(){
        var missilePostition = this.midpoint();
        console.log(Missle.width);
        playerMissiles.push(Missle({
            speed: 2,
            x: missilePostition.x - 500,
            y: missilePostition.y
        }))
    },
    midpoint: function() {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2
        };
    },
    explode: function() {
        this.active = false;
        explosion_sound.play();
        GameLoopMusic_sound.fadeOut(0, 2000);
        currentState = states.End;
        // An explosion sound and then end the game
    },
    lifeChange: function(change) {


        this.life = this.life + change; //Adds or subtracts health based on the value added in the function

        if (this.life <= 0) {
            this.explode();
        }

        return this.life;


    },
    score: function(change) {


        this.pointScore = this.pointScore + change; //Adds or subtracts health based on the value added in the function

        /*if (this.life <= 0) {
            this.explode();
        }*/

        return this.pointScore;


    }
};

var playerBullets = [];

function Bullet(I) {
    I.active = true;

    I.xVelocity = 0;
    I.yVelocity = -I.speed;
    I.width = 3;
    I.height = 3;
    I.color = "#000";

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
    I.color = "#34DDDD";

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