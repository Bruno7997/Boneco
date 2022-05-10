//Uncaught TypeError: GP.setVelocityYEach is not a function

var personagem
var c1, c2, c3, c4
var chao
var cor = 2
var xx = 5, yy = 5
var GP
//var input,heading;
function preload() {
  c1 = loadAnimation("1.png");

  c2 = loadAnimation("2.png");//Somente essa variavel funciona, n importa o que esteja nela
  
  c3 = loadAnimation("3.png");

  c4 = loadAnimation("4.png");
}
function setup() 
{
  createCanvas(400, 400);
  GP = new Group();
  personagem = createSprite(200, 200, 0, 0)
personagem.scale = 1.25
personagem.addAnimation("cor", c1)
chao = createSprite(200, 390, 400, 20)
  //criando caixa de entrada de texto
  //input = createInput();
  //definindo a posição da caixa
  //input.position(5,60);

  //texto de cabeçalho, h4 é o tamanho do cabeçalho (quanto menor o número, maior a letra)
  //heading = createElement('h4', 'Insira qualquer letra do alfabeto');
  //posição do texto de cabeçalho
  //heading.position(5,20);

  //alinhamento do texto e tamanho da letra
  //textAlign(CENTER);
  //textSize(50);

  
}
function draw() {
  background(220)
  //FUNÇÔES PRINCIPAIS
  //FUNÇÔES PRINCIPAIS
  if (keyDown("left")){
    GP.setVelocityXEach(-xx);
    personagem.velocityX = -xx
    }
    else if (keyDown("right")){
      GP.setVelocityXEach(xx);
      personagem.velocityX = xx
    }
    else {
      GP.setVelocityXEach(0);
      personagem.velocityX = 0
    }
    if ((keyDown("up") || keyDown("space")) && (GP.collide(chao) || personagem.collide(chao))){
      GP.setVelocityYEach(-12.5);
    personagem.velocityY = -12.5;
    }
    if (keyDown("down")){
      GP.setVelocityYEach(4.5);
    personagem.velocityY = 4.5;
    }
  //MUDAR A FORMA(COR)
  if (keyWentDown(49)){//normal
    preto()
  }
  
  if (keyWentDown(50)){//teleporte
    vermelho()
  }
  
  if (keyWentDown(51)){//clone
    amarelo()
  }
  
  if (keyWentDown(52)){//boost
    azul()
  }
  //FUNÇÂO DA COR
if (cor == 2){//APENAS ESQUERDA E DIREITA
  if(keyWentDown(86)){
    if(World.mouseX < personagem.x){
        personagem.x = personagem.x - 120
      }
    else if(World.mouseX > personagem.x){
        personagem.x = personagem.x + 120
      }
    }
  }
  
if (cor == 3){//APENAS ESQUERDA E DIREITA
  if (keyWentDown(67)){
    var p2 = createSprite(World.mouseX, World.mouseY);
p2.scale = 1.25;
p2.addAnimation("3", c3);
GP.add(p2)
    }
    
  }
  if (cor != 3){
  GP.destroyEach();
  }
  if(GP.length > 4){
  GP[0].destroy();
  }
  
if (cor == 4){//APENAS ESQUERDA E DIREITA
  if(keyDown(90) && (keyDown("right") || keyDown("left"))){
      xx = 15
    }
  else{xx = 5}
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  GP.collide(chao)
   personagem.velocityY = personagem.velocityY + 0.5
   GP.setVelocityYEach(personagem.velocityY)
   personagem.collide(chao)
  drawSprites();
 
  
}
function preto() { //normal
  personagem.addAnimation("cor", c1);
  cor = 1
  personagem.scale = 1.25
}

function vermelho(){ //teleporte
  personagem.addAnimation("cor", c2);
  cor = 2
  personagem.scale = 1.25
}

function amarelo(){ //clone
  personagem.addAnimation("cor", c3);
  cor = 3
  personagem.scale = 1.25
}

function azul(){ //boost
  personagem.addAnimation("cor", c4);
  cor = 4
  personagem.scale = 0.75
}