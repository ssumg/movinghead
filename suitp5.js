var suit;
var head = [];
var num;

function setup(){
  background(150);
  createCanvas(700, 900);
  suit = loadImage("http://cfile28.uf.tistory.com/image/99AB93465AF303FE09EC6A");  
  head[0] = loadImage("http://cfile9.uf.tistory.com/image/998CF3475AF303FE29CC59");
  head[1] = loadImage("http://cfile3.uf.tistory.com/image/99AE5C335AF303FE0FD471");

}

function draw(){
  mouseX = constrain(mouseX, -160, width-80);
  background(150);
  if(mouseX > width/2)
    fill(mouseX, mouseY, mouseX/(mouseY+1));
  if(mouseX <= width/2)
    fill(mouseX, mouseY, mouseX*mouseY);
  ellipse(width/2, height/2, 100, 150);
  image(suit, 130, 45);
  image(head[num],mouseX, 150);
  
 if(mouseX >= 220 && mouseX < 300) 
   num = 0;
 else
   num = 1;

}
