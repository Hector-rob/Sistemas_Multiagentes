
//Hector Robles Villarreal
//A01634105

cont = 0;
step = 0.01;    // Size of each step along the path
pct = 0.0;     // Percentage traveled (0.0 to 1.0)
k = 0;
j = 0;
function mousePressed() {
  cont = cont + 1;
}
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  noFill();
  clear();
  
  //Click 1 aparece
  if (cont == 1){
    text("word", 40, 240);
    background(220);
    stroke(255, 102, 0);
    bezier(120,40,320,20,320,300,330,300);
    stroke(0,0,0);
    bezier(330,300,330,94,380,58,600,40);
  }
  
  if (cont == 2){
    //Click 2 desaparece el otro, aparece esto
    clear();
    background(220);
    stroke(0,0,0);
    storyboard(120,40,320,20,320,300,330,300);
    storyboard(330,300,330,94,380,58,600,40);
  }
  
  if(cont == 3){
    clear();
    background(220);
    stroke(0,0,0);
    // Click 3 - animation
    animationn(120, 40,  320, 20,  320, 300,  330, 300);
  }
  if(cont == 4){
    cont = 0;
  }
  
}


function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
  fill(255);
  steps = 10;
  for (i = 0; i <= steps; i++) {
    t = i / float(steps);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
   ellipse(x, y, 10, 10);
  }
  
 
}

function animationn(x1, y1, x2, y2, x3, y3, x4, y4) {
  //fill(0, 2);
  
  pct = pct + step;
  if(pct < 1.0){
    k = k+1;
    steps = 60;
    //sleep(100)
    t = k / float(steps);
    clear()
    //background(250)
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
  }
  fill(250);
  ellipse(x, y, 10, 10);
    
  
  
}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
