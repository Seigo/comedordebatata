console.log("one");
let game = new Phaser.Game(800, 600, Phaser.AUTO, 'gamediv', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/img/sky.png');
    game.load.image('ground', 'assets/img/platform.png');
    game.load.image('batata', 'assets/img/batata.png');
    game.load.spritesheet('dudecat', 'assets/img/dudecat.png', 32, 48);

    game.load.audio('ping', 'assets/audio/ping.mp3');
    game.load.audio('eatingPotato1', 'assets/audio/eatingPotato1.wav');
    game.load.audio('eatingPotato2', 'assets/audio/eatingPotato2.wav');
}

let player;
let platforms;
let ground;

let jumpButton;
let altJumpButton;

let batatas;
let score = 0;
let scoreText;

let sfxPing;
let sfxEatingPotato1;
let sfxEatingPotato2;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'dudecat');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.0;
    player.body.gravity.y = 650;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  BAtatas
    batatas = game.add.group();

    //  We will enable physics for any batata that is created in this group
    batatas.enableBody = true;

    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    jumpButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    game.input.mouse.capture = true;
    game.input.onTap.add(tryToJump, this);

    sfxPing = game.add.audio('ping');
    sfxEatingPotato1 = game.add.audio('eatingPotato1');
    sfxEatingPotato2 = game.add.audio('eatingPotato2');
    sfxEatingPotato1.addMarker('1', 1, 2);
    sfxEatingPotato2.addMarker('1', 0, 2);
}

let generateReward = function () {
  let reward = batatas.create(game.world.width,
      Math.random() * (game.world.height - ground.height),
      'batata');
  reward.body.velocity.x = -300;
}

function update() {
  if (Math.random() < (Math.random() * 0.1)) {
  //if (Math.random() < 0.5) {
    generateReward();
  }

  //  Collide the player and the batatas with the platforms
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.collide(batatas, platforms);

  //  Checks to see if the player overlaps with any of the batatas, if he does call the collectBatata function
  game.physics.arcade.overlap(player, batatas, collectBatata, null, this);

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  player.animations.play('right');
  //  Allow the player to jump if they are touching the ground.
  if (jumpButton.isDown || game.input.activePointer.leftButton.isDown) {
    tryToJump();
  }

}

let tryToJump = function() {
  //if (player.body.touching.down) {
    player.body.velocity.y = -350;
  //}
}

function collectBatata (player, batata) {
  // Removes the batata from the screen
  batata.kill();

  //  Add and update the score
  score += 10;
  scoreText.text = 'Score: ' + score;

  let choosePotatoSound = Math.ceil(Math.random() * 2);
  if (choosePotatoSound == 1 || choosePotatoSound == 0) {
    sfxEatingPotato1.play('1');
  } else if (choosePotatoSound == 2) {
    sfxEatingPotato2.play('1');
  } else {
    console.log('wat?');
  }
  //sfxPing.play();
}
