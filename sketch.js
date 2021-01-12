

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

var play_canvas;

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
let font_regular;

let colors = {
  'tiffany_blue' : '#A0E7E5',
  'hot_pink' : '#FFAEBC',
  'clear_pink': '#FFC7D6',
  'yellow':'#FBE7C6',
  'mint':'#B4F8C8',
  'white':'#FFFFFF'
}


//let fruit_basket = [];


function preload() {

  //PreLoad Sounds
  aFX_button_press = loadSound('assets/audio/add.mp3');
  aFX_fruit_hit = loadSound('assets/audio/mixkit-game-ball-tap-2073.wav');
  aFX_loses_game = loadSound('assets/audio/mixkit-negative-guitar-tone-2324.wav');
  


  //In the future this object should enlguf every game variable
  game = {
    game_started : false,
    viewport: {
      'w': 0,
      'h': 0
    },
    score: 0,
    setScoreUp: function(){
      this.score += 1;
    },
    setViewPort: function(){
       let a = document.getElementById('game_viewport');
       this.viewport.h = a.offsetHeight;
       this.viewport.w = a.offsetWidth;
       console.log(this.viewport.h)
    },
    getScore: function(){
      return this.score;
    },
    gameOver: function(){
      this.game_started = false;
      aFX_loses_game.play();
    },
    gameStart: function(){
      this.game_started = true;
      localStorage.setItem('creloadgame','false');
    }
  }
  
  playarea = {
    'w': game.viewport.w,
    'h': game.viewport.h
  }


  font_regular = loadFont('assets/fonts/Staatliches-Regular.ttf');
  fruit_img = loadImage('assets/img/fruit.png');
  
  fruit = {
    icon: loadImage('assets/img/fruits/1.png'),
    w: 30,
    h: 30,
    x: xFruit-(this.w/2),
    y: yFruit-(this.w/2),
    fruit_basket : [],
    cycleIcon: function(){
      //Lazy load of random fruit resource
      let seed = getRandomInt(11);
      let fruit_icon_uri = 'assets/img/fruits/'+ seed.toString() + '.png';
      this.fruit_basket.push(fruit_icon_uri);
      this.icon = loadImage(fruit_icon_uri);
    },
    hit: function(){
      printFruitBasket();
      aFX_fruit_hit.play();
    }
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
      aFX_button_press.play();
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
      aFX_button_press.play();
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
      aFX_button_press.play();
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
      aFX_button_press.play();
    }
  }

}

function setup() {
  //textFont(font_regular);
  game.setViewPort();
  play_canvas = createCanvas(game.viewport.w, game.viewport.h);
  play_canvas.parent('game');


  if(localStorage.getItem('creloadgame') == 'true'){
    startGame();
  }else{
    messageWindow([false,false,true],
      "Bem Vindo (a)",
      "Mini Jogo do Closet da Zzama",
      "Para jogar aperte Play"
    );  
  }

}


function startGame(){
  game.gameStart();
  frameRate(15);
  stroke(255);
  strokeWeight(10);
  updateFruitCoordinates();
  printGameScore();

  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }

  //Interface
  createControlButton(btn_up, btn_down, btn_left, btn_right);
}


function draw() {
  if(game.game_started){
    background(colors['hot_pink']);
    printGameScore();

    for (let i = 0; i < numSegments - 1; i++) {
      line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
    }

    updateSnakeCoordinates();
    checkGameStatus();
    checkForFruit();
  }
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
       
    game.gameOver()
    
    messageWindow([true,true,false],'','Ooops. O Jogo Acabou',"Sua pontuação é de " + game.getScore() + ' pontos')
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
    game.setScoreUp();
    //scoreElem.html('Pontuação = ' + game.getScore());
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


function getRandomInt(max) {
  /**
   * Returns a random INT number up to the max parameter value
   */
  return Math.floor(Math.random() * Math.floor(max));
}

function printFruitBasket(){

  let icon_size = 40;
  let n_fruits_in_basket = fruit.fruit_basket.length;
  let max_n_icons = parseInt((game.viewport.w / icon_size));
  let arr_fruit = fruit.fruit_basket;
  
  if(n_fruits_in_basket > max_n_icons){
    arr_fruit = fruit.fruit_basket.slice( n_fruits_in_basket - max_n_icons, n_fruits_in_basket);
  }
  
  document.getElementById('fruit_basket').innerHTML = '';
  
  for(var i = arr_fruit.length ; i >= 0 ; i-- ){
    let one_fruit = arr_fruit[i];
    if (one_fruit !== undefined){
      button = createImg(one_fruit,'+1');
      button.attribute('name','icones_ponto');
      button.style('width', icon_size);
      button.style('height', icon_size);
      button.parent('fruit_basket');
    }
  }
}

function messageWindow(enabled_btn = [false,false,false], 
  title = '', 
  subtitle = '', 
  text = ''){
  /**Calls the modal element applying custom info and setup 
  * @param enabled_btn array of boolean
  *      [0] - true/false - Enables or disables the Reload Button
  *      [1] - true/false - Enables or disables the Sahre Button
  *      [2] - true/false - Enables or disables the Play Button
  * @param title Title of the Window
  * @param subtitle Subtitle of the Window
  * @param text Message
  */

  let modalText = document.querySelector("#modal-text");
  let modalTitle = document.querySelector("#modal-title");
  let modalSubTitle = document.querySelector("#modal-subtitle");

  let btnReload = document.querySelector("#modal-btn-reload");
  let btnShare = document.querySelector("#modal-btn-share");
  let btnPlay = document.querySelector("#modal-btn-play");

  modalTitle.innerHTML = title;
  modalSubTitle.innerHTML = subtitle;
  modalText.innerHTML = text;

  btnReload.classList.toggle('closed',!enabled_btn[0]);
  btnShare.classList.toggle('closed',!enabled_btn[1]);
  btnPlay.classList.toggle('closed',!enabled_btn[2]);

  showModal(true);
}

function printGameScore(){
  var message = "PONTUAÇÃO = " + game.getScore();
  //text(message, 25, 25,100,30);
  //A escrita de texto em alto FPS gera comportamento imprevisivel
  let a = document.getElementById('game_score');
  a.innerHTML = message;
}

function shareResults(){

  let share_envelope_fruits = document.getElementById('share_envelope_fruits');
  let share_pontuacao = document.getElementById('share_pontuacao');
  let share_hash = document.getElementById('share_hash');

  let message = "Eu marquei " + fruit.fruit_basket.length + ' pontos';
  let message_hash = MD5(message);

  share_envelope_fruits.innerHTML = '';
  share_pontuacao.innerHTML = message;
  share_hash.innerHTML = message_hash;

  for(var i = 0; i < fruit.fruit_basket.length; i++){
    let img = document.createElement('img');
    img.setAttribute('src',fruit.fruit_basket[i]);
    share_envelope_fruits.append(img);
  }

  let sharable_image = document.getElementById('share');
  sharable_image.classList.toggle('closed',false);
  domtoimage.toJpeg(sharable_image, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'minha-pontuação.jpg';
        link.href = dataUrl;
        link.click();
        sharable_image.classList.toggle('closed',true);      
    });
    
  
}

function reloadGame(){
  //Temporary workaround
  localStorage.setItem('creloadgame','true');
  location.reload();
  return false;

}

function showModal(visible){
  /**
   * Shows or Hides the app's modal Windows element
   * @param visible Booelean, shows or hides
   */
  modal.classList.toggle("closed",!visible);
  modalOverlay.classList.toggle("closed",!visible);
}


///----------------------------------