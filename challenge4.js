count = 5;

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx,sy, ...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function mouseClicked(){
  count = count +1;
  fill(random(0,255), random(0,255), random(0,255));
  print(count)
}

function setup() {
  createCanvas(600, 600);
  fill(random(0,255), random(0,255), random(0,255));
  
}

function draw() {
  background(220);
  polygon(width/2, height/2, 50, count, null);
  if (count == 13){
    count = 5;
  }
  
}