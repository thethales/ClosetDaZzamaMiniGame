// the snake is divided into small segments, which are drawn and edited on each 'draw' call
let numSegments = 10;
let direction = 'right';

const xStart = 0; //starting x coordinate for snake
const yStart = 250; //starting y coordinate for snake
const diff = 10;

let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;
let wFruit = 30;
let hFruit = 30;

let scoreElem;
let controlElem;
let font_regular;

let colors = {
  'tiffany_blue' : '#A0E7E5',
  'hot_pink' : '#FFAEBC',
  'yellow':'#FBE7C6',
  'mint':'#B4F8C8',
  'white':'#FFFFFF'
}


let fruit_basket = [];


function reset() {
  numSegments = 10;
  direction = 'right';


  xCor = [];
  yCor = [];

  xFruit = 0;
  yFruit = 0;
  wFruit = 30;
  hFruit = 30;

  setup()
}
 
function preload() {
  
  playarea = {
    'w': windowWidth,
    'h': windowHeight * 0.6
  }
  

  button_press = loadSound('assets/audio/add.mp3');
  fruit_hit = loadSound('assets/audio/mixkit-game-ball-tap-2073.wav');
  loses_game = loadSound('assets/audio/mixkit-negative-guitar-tone-2324.wav');
  

  font_regular = loadFont('assets/fonts/Staatliches-Regular.ttf');

  fruit_img = loadImage('assets/img/download.png');
  
  

  fruit = {
    icon: loadImage('assets/img/fruits/1.png'),
    w: 30,
    h: 30,
    x: xFruit-(this.w/2),
    y: yFruit-(this.w/2),
    fruit_basket : [],
    cycleIcon: function(){
      //Lazy load of a random fruit resource
      let seed = getRandomInt(11);
      this.fruit_basket.push(seed);
      
      src = 'assets/img/fruits/'+ seed.toString() + '.png';
      this.icon = loadImage(src);
    },
    hit: function(){
      printFruitBasket(this.fruit_basket);
      fruit_hit.play();
    },
    
  }
  
  btn_up = {
    'src' : 'assets/img/btn_up.png',
    'x': 20 + this.w ,
    'y': playarea['h'] +60,
    'w': 80,
    'h': 80,
    'alt': 'Para cima',
    click : function(){
      controls(87);
      button_press.play();
    }
  }

  btn_down = {
    'src' : 'assets/img/btn_down.png',
    'x': 20 + this.w ,
    'y': playarea['h'] + 60,
    'w': 80,
    'h': 80,
    'alt': 'Para baixo',
    click : function(){
      controls(83);
      button_press.play();
    }
  }

  btn_left = {
    'src' : 'assets/img/btn_left.png',
    'x': 20 + this.w ,
    'y': playarea['h'] +60,
    'w': 80,
    'h': 80,
    'alt': 'Para a esquerda',
    click : function(){
      controls(65);
      button_press.play();
    }
  }

  btn_right = {
    'src' : 'assets/img/btn_right.png',
    'x': 20 + this.w ,
    'y': playarea['h'] +60,
    'w': 80,
    'h': 80,
    'alt': 'Para a direita',
    click : function(){
      controls(68);
      button_press.play();
    }
  }

}

function setup() {
  textFont(font_regular);
  scoreElem = createDiv('Pontuação = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', colors.white);


  pointsElem = createDiv();
  pointsElem.position(501,501);
  pointsElem.id = 'points';
  

  controlElem = createDiv();
  controlElem.position(600,600);
  controlElem.id = 'control';
 
  var play_canvas = createCanvas(playarea.w, playarea.h);
  play_canvas.parent('main');

  frameRate(15);
  stroke(255);
  strokeWeight(10);
  updateFruitCoordinates();

  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }

  //Interface
  console.log(fruit_img)
  image(fruit_img, 600, 650, 30,30);
  createControlButton(btn_up, btn_down, btn_left, btn_right);
}


function draw() {
  background(colors['hot_pink']);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();
  checkForFruit();
}

/*
 The segments are updated based on the direction of the snake.
 All segments from 0 to n-1 are just copied over to 1 till n, i.e. segment 0
 gets the value of segment 1, segment 1 gets the value of segment 2, and so on,
 and this results in the movement of the snake.

 The last segment is added based on the direction in which the snake is going,
 if it's going left or right, the last segment's x coordinate is increased by a
 predefined value 'diff' than its second to last segment. And if it's going up
 or down, the segment's y coordinate is affected.
*/
function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

/*
 I always check the snake's head position xCor[xCor.length - 1] and
 yCor[yCor.length - 1] to see if it touches the game's boundaries
 or if the snake hits itself.
*/
function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    const scoreVal = getScore();//parseInt(scoreElem.html().substring(8));
    textFont(font_regular);
    loses_game.play();
    scoreElem.html('O Jogo Acabou. Sua pontuação: ' + scoreVal);
    printGameStatus()
  }
}

/*
 If the snake hits itself, that means the snake head's (x,y) coordinate
 has to be the same as one of its own segment's (x,y) coordinate.
*/
function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}

/*
 Whenever the snake consumes a fruit, I increment the number of segments,
 and just insert the tail segment again at the start of the array (basically
 I add the last segment again at the tail, thereby extending the tail)
*/
function checkForFruit() {
  //point(xFruit, yFruit);
  
  //image(fruit.icon, fruit.x, fruit.y, fruit.w, fruit.h);
  image(fruit.icon, xFruit-(wFruit/2), yFruit-(hFruit/2), wFruit, hFruit);
  //if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
  if(snakeAteTheFruit()){
    var prevScore = getScore();//parseInt(scoreElem.html().split('=')[1].trim());
    scoreElem.html('Pontuação = ' + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
    fruit.hit();
    fruit.cycleIcon();
  }
}

function snakeAteTheFruit(){
  /**
   * Artificial increase of the original fruit hitbox
   */
  if((xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit)){
    return true;  
  }
  if((xCor[xCor.length - 1] === xFruit+10 && yCor[yCor.length - 1] === yFruit+10 )){
    return true;  
  }
  if((xCor[xCor.length - 1] === xFruit-10 && yCor[yCor.length - 1] === yFruit-10 )){
    return true;  
  }
  return false;
}

function updateFruitCoordinates() {
  /*
    The complex math logic is because I wanted the point to lie
    in between 100 and width-100, and be rounded off to the nearest
    number divisible by 10, since I move the snake in multiples of 10.
  */

  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  controls(keyCode)
}

function controls(keyCode){
  switch (keyCode) {
    case 65:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 68:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 87:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 83:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }

}


function createControlButton(){
  /*
    Dinamically creates a N buttons 
    @param N arguments of type btn_control
  */
  if(arguments.length != 0){
    for (var i = 0; i < arguments.length; i++){
      btn = arguments[i];
      button = createImg(btn.src,btn.alt);
      button.parent('control');
      button.style('width', btn.w + 'px');
      button.style('height', btn.h + 'px');
      button.attribute('class','btn');
      button.mousePressed(btn.click);
    }
  }
}



function getScore(){
  /*
    Temporary improvment upon the authors original method
    Retrieves the score value from the inner html of the upper score text on screen
  */
  return parseInt(scoreElem.html().split('=')[1].trim());
}

function getRandomInt(max) {
  /**
   * Returns a random INT number up to the max parameter value
   */
  return Math.floor(Math.random() * Math.floor(max));
}

function printFruitBasket(arr_fruit){

  
  let max_n_icons = parseInt((playarea.w / 40)) - 1;
  let icon_size = 40;

  
  arr_fruit = arr_fruit.slice( arr_fruit.length - max_n_icons, arr_fruit.length);
  let a = document.getElementById('s');
  a.innerHTML = '';
    
  for(var i = arr_fruit.length ; i >= 0 ; i-- ){
    let one_fruit = arr_fruit[i];
    if (one_fruit !== undefined){
      button = createImg('assets/img/fruits/' + one_fruit + '.png','+1');
      button.attribute('name','icones_ponto');
      button.style('width', icon_size);
      button.style('height', icon_size);
      button.parent('point_basket');
    }
    
  }
  
}



function printGameStatus(){

  let box_x = 250;
  let box_y = 250;
  let box_w = 250;
  let box_h = 100;
  let box_r = 15;

  let box_relative_x = (playarea.w/2) - (box_w/2)

 
  rect(box_relative_x, box_y, box_w, box_h, box_r,box_r,box_r,box_r);

  text('O jogo acabou', box_relative_x, box_y, box_x, box_y);

}
