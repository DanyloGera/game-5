// define variables
var game;
var player;
var platforms;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 230;
var winningScore = 360;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();

  createItem(210, 325, 'letter1');
  createItem(80, 329, 'letter-blue');
  createItem(217, 229, 'letter-blue');
  createItem(80, 136, 'letter-blue');
  createItem(257, 67, 'letter2');
}

function SecondHallItems() {
  items = game.add.physicsGroup();


// second hall items
  createItem(325, 134, 'letter-red');
  createItem(430, 291, 'letter-red');
  createItem(300, 241, 'letter-red');
  createItem(461, 174, 'letter-blue');
  createItem(366, 331, 'letter-blue');
  // third hall items
  createItem(690, 447, 'letter-blue');
  createItem(548, 363, 'letter-blue');
  createItem(690, 228, 'letter-blue');
  createItem(548, 220, 'letter-blue');
  createItem(662, 135, 'letter-blue');
  createItem(548, 84, 'letter-blue');

  createItem(759, 36, 'letter3');


}
function addLastItems() {
  items = game.add.physicsGroup();
  // third hall items
  createItem(680, 447, 'letter-red');
  createItem(548, 363, 'letter-red');
  createItem(680, 228, 'letter-red');
  createItem(548, 220, 'letter-red');
  createItem(662, 135, 'letter-red');
  createItem(548, 84, 'letter-red');

}


// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
//walls
  platforms.create(0, 565, 'platform1');
  platforms.create(0, 40, 'wall1');
  platforms.create(247, 117, 'wall2');
  platforms.create(494, 0, 'wall3');
  platforms.create(720, 85, 'wall4');

  // first boxes

platforms.create(80, 379, 'box');
platforms.create(217, 505, 'box');
//third hall
platforms.create(690, 503, 'box');
platforms.create(548, 413, 'box3');
platforms.create(690, 338, 'box');
platforms.create(548, 270, 'box');
platforms.create(662, 185, 'box3');
platforms.create(548, 134, 'box');
// second hall
platforms.create(301, 184, 'box2');
platforms.create(301, 279, 'box');
platforms.create(406, 341, 'box2');

  platforms.setAll('body.immovable', true);
}
function addSecondBox() {
  platforms = game.add.physicsGroup();
//walls
  platforms.create(0, 565, 'platform1');
  platforms.create(0, 40, 'wall1');
  platforms.create(247, 117, 'wall2');
  platforms.create(494, 0, 'wall3');
  platforms.create(720, 85, 'wall4');
  // first hall`s boxes
  platforms.create(217, 505, 'box');
platforms.create(217, 411, 'box');
platforms.create(80, 497, 'box');

platforms.create(80, 379, 'box');
platforms.create(217, 279, 'box');
platforms.create(80, 186, 'box');
// second hall
platforms.create(301, 184, 'box2');
platforms.create(301, 279, 'box');
platforms.create(406, 341, 'box2');
// third hall
platforms.create(690, 503, 'box');
platforms.create(548, 413, 'box3');
platforms.create(690, 338, 'box');
platforms.create(548, 270, 'box');
platforms.create(662, 185, 'box3');
platforms.create(548, 134, 'box');
//
  platforms.setAll('body.immovable', true);
}


// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 8, true);
}

// create the winning badge and add to screen
function createBadge() {
  badges = game.add.physicsGroup();
  var badge = badges.create(521, 497, 'badge');
  badge.animations.add('spin');
  badge.animations.play('spin', 10, true);
}

// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
 if (item.key === 'letter1') {
     currentScore = currentScore + 10;
     addSecondBox();
  }else if (item.key === 'letter-blue') {
     currentScore = currentScore + 10;
  }else if (item.key === 'letter-red') {
     alert("Червоний лист!");
  }else if (item.key === 'letter2') {
    currentScore = currentScore + 10;
     SecondHallItems();
  }else if (item.key === 'letter3') {
    currentScore = currentScore + 10;
     addLastItems();
  }if (currentScore === winningScore) {
      createBadge();
  }
}

// when the player collects the badge at the end of the game
function badgeHandler(player, badge) {
  badge.kill();
  won = true;
}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

  // before the game begins
  function preload() {

    game.load.image('background', 'background.png');

    //Load images
    game.load.image('platform1', 'platform.png');
    game.load.image('wall1', 'walls/platform1.png');
    game.load.image('wall2', 'walls/platform2.png');
    game.load.image('wall3', 'walls/platform3.png');
    game.load.image('wall4', 'walls/platform4.png');

    game.load.image('box', 'box.png');
    game.load.image('box2', 'box2.png');
    game.load.image('box3', 'box3.png');



    //Load spritesheets
    game.load.spritesheet('player', 'chalkers.png',  48, 62 );
    // game.load.spritesheet('coin1', 'coin.png', 36, 44);
    // game.load.spritesheet('openbox', 'box3.png', { frameWidth: 50, frameHeight: 50 });
    game.load.spritesheet('letter1', 'blue.png', 36, 44);
    game.load.spritesheet('letter2', 'blue.png', 36, 44);
    game.load.spritesheet('letter3', 'blue.png', 36, 44);
    game.load.spritesheet('letter-blue', 'blue.png', 36, 44);
    game.load.spritesheet('letter-red', 'red.png', 36, 44);
    // game.load.spritesheet('blue', 'envelope/blue.png', 36, 44);
    // game.load.spritesheet('yellow', 'envelope/yellow.png', 36, 44);
    // game.load.spritesheet('green', 'envelope/green.png', 36, 44);
    // game.load.spritesheet('red', 'envelope/red.png', 36, 44);
    // game.load.spritesheet('violet', 'envelope/violet.png', 36, 44);
    // game.load.spritesheet('orange', 'envelope/orange.png', 36, 44);









    game.load.spritesheet('badge', 'badge.png', 42, 54);
    // game.load.spritesheet('poison', 'poison.png', 32, 32);
    // game.load.spritesheet('star', 'star.png', 32, 32);
  }

  //timer
    var sec1 = 0;
    function timer1() {
       sec1++;
       var timer = document.querySelector(".timer");
       var m = (Math.trunc(sec1/60)<10? "0":"") + Math.trunc(sec1/60);
       var s = (sec1%60<10? "0":"") + sec1%60;
       timer.value = m + " : " + s;
  }
  setInterval(timer1, 1000);


  // initial game set up
  function create() {
    // alert("Прочитайте завдання, закрийте його на хрестик і грайте!");
    timer1();
    this.add.image(0, 0, 'background');

    player = game.add.sprite(100, 457, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    addItems();
    addPlatforms();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(5, 16, "SCORE: " + currentScore, { font: "bold 19px Arial", fill: "white"});
    winningMessage = game.add.text(game.world.centerX, 340, "", { font: "bold 47px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, badges, badgeHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -330;
    }
    // when the player winw the game
    if (won) {
      winningMessage.text = "GREAT WORK!";

    }

  }

  function render() {

  }

};
